import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, donationId, donorEmail, donorName } = await req.json();

    // Validate required fields
    if (!amount || !donationId) {
      throw new Error("Missing required fields: amount and donationId");
    }

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Check if a Stripe customer exists for this email
    let customerId;
    if (donorEmail && donorEmail !== "guest@example.com") {
      const customers = await stripe.customers.list({ 
        email: donorEmail, 
        limit: 1 
      });
      
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      }
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : donorEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { 
              name: "Donation to Islam Community",
              description: donorName ? `Donation from ${donorName}` : "Anonymous Donation",
            },
            unit_amount: amount, // Amount already in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/donate?success=true`,
      cancel_url: `${req.headers.get("origin")}/donate?canceled=true`,
      metadata: {
        donationId: donationId,
        donorName: donorName || "Anonymous",
      },
    });

    // Update donation record with Stripe session ID
    const { error: updateError } = await supabase
      .from("donations")
      .update({ 
        stripe_session_id: session.id,
        status: "pending"
      })
      .eq("id", donationId);

    if (updateError) {
      console.error("Error updating donation:", updateError);
      // Don't throw here as the payment session was created successfully
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error in create-payment:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
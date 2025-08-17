import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Heart, Moon, Star } from "lucide-react";

const Donate = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    donorEmail: "",
    amount: "",
    tagNote: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({ ...prev, amount: amount.toString() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || Number(formData.amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create donation record
      const { data: donation, error: donationError } = await supabase
        .from("donations")
        .insert({
          donor_name: formData.donorName || null,
          donor_email: formData.donorEmail || null,
          amount: Number(formData.amount),
          tag_note: formData.tagNote || null,
          status: "pending",
        })
        .select()
        .single();

      if (donationError) {
        toast({
          title: "Error",
          description: "Failed to create donation record",
          variant: "destructive",
        });
        return;
      }

      // Call Stripe checkout function
      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke('create-payment', {
        body: {
          amount: Number(formData.amount) * 100, // Convert to cents
          donationId: donation.id,
          donorEmail: formData.donorEmail || "guest@example.com",
          donorName: formData.donorName || "Anonymous",
        },
      });

      if (checkoutError) {
        toast({
          title: "Payment Error",
          description: "Failed to create payment session",
          variant: "destructive",
        });
        return;
      }

      if (checkoutData?.url) {
        // Open Stripe checkout in a new tab
        window.open(checkoutData.url, '_blank');
        
        toast({
          title: "Redirecting to Payment",
          description: "Please complete your donation in the new tab",
        });

        // Reset form
        setFormData({
          donorName: "",
          donorEmail: "",
          amount: "",
          tagNote: "",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5">
        <div className="absolute inset-0 opacity-10">
          {/* Islamic geometric pattern overlay */}
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                   radial-gradient(circle at 75% 75%, hsl(var(--accent)) 2px, transparent 2px),
                   radial-gradient(circle at 25% 75%, hsl(var(--primary)) 1px, transparent 1px),
                   radial-gradient(circle at 75% 25%, hsl(var(--accent)) 1px, transparent 1px)
                 `,
                 backgroundSize: '100px 100px'
               }}>
          </div>
        </div>
      </div>

      {/* Mosque Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/20 to-transparent">
        <svg 
          className="absolute bottom-0 w-full h-48 text-primary/30" 
          viewBox="0 0 800 200" 
          fill="currentColor"
        >
          <path d="M0,200 L0,120 Q100,80 200,120 L200,140 Q250,100 300,140 L300,200 Z" />
          <path d="M300,200 L300,130 Q400,90 500,130 L500,150 Q550,110 600,150 L600,200 Z" />
          <path d="M600,200 L600,140 Q700,100 800,140 L800,200 Z" />
          <circle cx="150" cy="120" r="8" />
          <circle cx="350" cy="130" r="6" />
          <circle cx="650" cy="140" r="7" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Moon className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Support Our Community
              </h1>
              <Star className="w-8 h-8 text-accent" />
            </div>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Your generous donation helps us serve our community and spread knowledge and peace
            </p>
          </div>

          {/* Donation Form */}
          <Card className="shadow-2xl border-2 border-primary/20 backdrop-blur-sm bg-card/95">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <Heart className="w-6 h-6" />
                Make a Donation
              </CardTitle>
              <CardDescription>
                Every contribution, no matter the size, makes a difference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Quick Amount Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Select Amount (USD)</Label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={formData.amount === amount.toString() ? "default" : "outline"}
                        onClick={() => handleAmountSelect(amount)}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount">Custom Amount (USD)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="amount"
                      type="number"
                      min="1"
                      step="0.01"
                      value={formData.amount}
                      onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                      placeholder="Enter amount"
                      className="pl-8"
                      required
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="donorName">Name (Optional)</Label>
                    <Input
                      id="donorName"
                      type="text"
                      value={formData.donorName}
                      onChange={(e) => setFormData(prev => ({ ...prev, donorName: e.target.value }))}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="donorEmail">Email (Optional)</Label>
                    <Input
                      id="donorEmail"
                      type="email"
                      value={formData.donorEmail}
                      onChange={(e) => setFormData(prev => ({ ...prev, donorEmail: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message/Note */}
                <div className="space-y-2">
                  <Label htmlFor="tagNote">Message/Note (Optional)</Label>
                  <Textarea
                    id="tagNote"
                    value={formData.tagNote}
                    onChange={(e) => setFormData(prev => ({ ...prev, tagNote: e.target.value }))}
                    placeholder="Leave a message or note with your donation..."
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold"
                  disabled={isLoading || !formData.amount}
                >
                  {isLoading ? (
                    "Processing..."
                  ) : (
                    <>
                      <Heart className="w-5 h-5 mr-2" />
                      Donate ${formData.amount || "0"}
                    </>
                  )}
                </Button>
              </form>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  🔒 Your payment is securely processed by Stripe. We never store your payment information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Donate;
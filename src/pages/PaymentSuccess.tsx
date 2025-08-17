import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">✓</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">
          Thank You for Your Donation!
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Your generous contribution has been received successfully. 
          May Allah bless your kindness and generosity.
        </p>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link to="/donate">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Make Another Donation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
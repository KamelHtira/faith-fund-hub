import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Building } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px),
                   radial-gradient(circle at 80% 80%, hsl(var(--accent)) 2px, transparent 2px),
                   radial-gradient(circle at 20% 80%, hsl(var(--primary)) 1px, transparent 1px),
                   radial-gradient(circle at 80% 20%, hsl(var(--accent)) 1px, transparent 1px)
                 `,
                 backgroundSize: '120px 120px'
               }}>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Building className="w-12 h-12 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Islam Community
              </h1>
              <Building className="w-12 h-12 text-accent scale-x-[-1]" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Supporting our community through knowledge, faith, and charitable giving
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="h-14 px-8 text-lg">
                <Link to="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Make a Donation
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-2">
                <Link to="/admin">
                  <Shield className="w-5 h-5 mr-2" />
                  Admin Access
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Easy Donations</h3>
              <p className="text-muted-foreground">
                Make secure donations with just a few clicks. Every contribution helps our community grow stronger.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <CardContent className="p-8">
              <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-accent mb-3">Secure & Trusted</h3>
              <p className="text-muted-foreground">
                Your donations are processed securely through Stripe with full transparency and accountability.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">Community Impact</h3>
              <p className="text-muted-foreground">
                See the direct impact of your generosity as we build programs that benefit our entire community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your support enables us to continue our mission of serving the community, 
            providing education, and spreading peace and understanding.
          </p>
          <Button asChild size="lg" className="h-14 px-8 text-lg">
            <Link to="/donate">
              <Heart className="w-5 h-5 mr-2" />
              Start Your Donation Today
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

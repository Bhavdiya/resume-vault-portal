import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  CheckCircle, 
  FileText, 
  Star, 
  Clock, 
  Shield,
  CreditCard
} from "lucide-react";

const ResumePurchase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePurchaseResume = async () => {
    setIsLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "🎉 Payment Successful!",
        description: "Your resume download link has been sent to your email and will be available for 24 hours.",
      });
      
      // In a real implementation, this would redirect to Stripe Checkout
      // window.open('stripe-checkout-url', '_blank');
      
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: FileText,
      title: "Professional Format",
      description: "ATS-optimized PDF with clean design"
    },
    {
      icon: CheckCircle,
      title: "Detailed Experience",
      description: "5+ years of project details and achievements"
    },
    {
      icon: Star,
      title: "Skills & Certifications",
      description: "Complete technical stack and credentials"
    },
    {
      icon: Clock,
      title: "24-Hour Access",
      description: "Secure download link valid for 24 hours"
    }
  ];

  return (
    <section id="resume-purchase" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2">
              💼 Professional Resume
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get My Complete Resume
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Download my professionally crafted resume with detailed project experience, 
              technical skills, and achievements. Perfect for HR and technical recruiters.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview */}
            <div className="space-y-6">
              <Card className="p-8 border-0 shadow-elegant bg-gradient-primary text-primary-foreground">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">John Smith - Resume</h3>
                  <p className="opacity-90">Full-Stack Developer | 5+ Years Experience</p>
                </div>
                
                <div className="space-y-4 text-sm opacity-90">
                  <div className="border-t border-primary-foreground/20 pt-4">
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      <li>• Complete work history & achievements</li>
                      <li>• Detailed project descriptions & technologies</li>
                      <li>• Education & certifications</li>
                      <li>• Contact information & portfolio links</li>
                      <li>• Skills assessment & proficiency levels</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="p-4 border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Purchase Card */}
            <div className="space-y-6">
              <Card className="p-8 border-0 shadow-elegant">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-primary mb-2">$49</div>
                  <p className="text-muted-foreground">One-time purchase</p>
                  <Badge variant="secondary" className="mt-2">
                    Instant Download
                  </Badge>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Professional ATS-optimized format</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Complete 5+ years experience details</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Detailed project portfolio & achievements</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Technical skills & certifications</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>24-hour secure download access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Secure payment via Stripe</span>
                  </div>
                </div>

                <Button 
                  variant="premium" 
                  size="xl" 
                  className="w-full"
                  onClick={handlePurchaseResume}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Purchase Resume Now
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  Secure payment powered by Stripe
                </div>
              </Card>

              {/* Trust Signals */}
              <Card className="p-6 border-0 shadow-card bg-accent/5">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Why Purchase My Resume?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get insider access to how a successful developer structures their experience 
                    and achievements for maximum impact with hiring managers.
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    "Professional format that stands out" - Previous buyer
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePurchase;
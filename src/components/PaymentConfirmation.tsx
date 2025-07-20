
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  ArrowLeft,
  Loader2
} from "lucide-react";

interface PaymentConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentConfirmation = ({ isOpen, onClose }: PaymentConfirmationProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePaymentConfirm = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate Razorpay payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: "🎉 Payment Successful!",
        description: "Your resume download link has been sent to your email and will be available for 24 hours.",
      });
      
      // Close dialog and redirect to main page
      onClose();
      
      // In a real implementation, this would integrate with Razorpay
      // const options = {
      //   key: "your_razorpay_key_id",
      //   amount: 4900, // Amount in paise (₹49.00)
      //   currency: "INR",
      //   name: "Professional Resume",
      //   description: "Download John Smith's Resume",
      //   handler: function(response) {
      //     // Handle successful payment
      //   }
      // };
      // const razorpay = new window.Razorpay(options);
      // razorpay.open();
      
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Confirmation
          </DialogTitle>
          <DialogDescription>
            Confirm your payment details for the resume download
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Summary */}
          <Card className="p-4 bg-accent/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Professional Resume PDF</span>
              <Badge variant="secondary">Digital Download</Badge>
            </div>
            <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
              <span>24-hour access • ATS optimized</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-primary">₹49.00</span>
            </div>
          </Card>

          {/* Payment Method */}
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">R</span>
              </div>
              <div>
                <p className="font-medium">Razorpay</p>
                <p className="text-xs text-muted-foreground">Secure payment gateway</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-3 h-3" />
              <span>Your payment is secured with 256-bit SSL encryption</span>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={onClose}
              disabled={isProcessing}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button 
              onClick={handlePaymentConfirm}
              disabled={isProcessing}
              className="flex-1"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm Payment
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentConfirmation;

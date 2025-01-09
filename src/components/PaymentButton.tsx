import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface PaymentButtonProps {
  amount: number;
  onSuccess?: () => void;
  className?: string;
}

export const PaymentButton = ({ amount, onSuccess, className }: PaymentButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in to make a payment",
          variant: "destructive",
        });
        return;
      }

      // Generate unique reference
      const reference = `PAY-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      // Initialize payment
      const { data, error } = await supabase.functions.invoke('opay-payment', {
        body: {
          amount,
          userId: user.id,
          reference,
        },
      });

      if (error) throw error;

      // Redirect to OPay payment page
      if (data?.data?.cashierUrl) {
        window.location.href = data.data.cashierUrl;
      } else {
        throw new Error('Invalid payment response');
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handlePayment} 
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        'Pay with OPay'
      )}
    </Button>
  );
};
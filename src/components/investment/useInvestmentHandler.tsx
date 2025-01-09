import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";

interface InvestmentOption {
  title: string;
  return: string;
  minimum: number;
  duration: string;
  category: "ecommerce" | "logistics" | "oil_and_gas";
}

export const useInvestmentHandler = () => {
  const { toast } = useToast();
  const [isInvesting, setIsInvesting] = useState(false);

  const { data: wallet } = useQuery({
    queryKey: ["wallet"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;
      
      const { data, error } = await supabase
        .from("wallets")
        .select("*")
        .eq('user_id', user.id)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    }
  });

  const getMonthsInMs = (months: number) => {
    return months * 30 * 24 * 60 * 60 * 1000;
  };

  const handleInvestmentSuccess = async (option: InvestmentOption) => {
    try {
      setIsInvesting(true);
      
      if (!wallet) {
        toast({
          title: "Error",
          description: "Please connect your wallet first",
          variant: "destructive",
        });
        return;
      }

      const redemptionDate = new Date(Date.now() + getMonthsInMs(parseInt(option.duration)));
      const { error: investmentError } = await supabase
        .from("investments")
        .insert({
          wallet_id: wallet.id,
          category: option.category,
          amount: option.minimum,
          ecoin_amount: Math.floor((option.minimum / 5000) * 10),
          redemption_date: redemptionDate.toISOString(),
        });

      if (investmentError) throw investmentError;

      toast({
        title: "Investment Successful",
        description: `You have successfully invested ₦${option.minimum.toLocaleString()} in ${option.title}`,
      });

    } catch (error) {
      console.error("Investment error:", error);
      toast({
        title: "Investment Failed",
        description: "There was an error processing your investment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsInvesting(false);
    }
  };

  return {
    handleInvestmentSuccess,
    isInvesting,
    wallet
  };
};
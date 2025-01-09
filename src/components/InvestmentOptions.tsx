import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { PaymentButton } from "./PaymentButton";

export const InvestmentOptions = () => {
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

  const options = [
    {
      title: "Growth Fund",
      return: "12-15%",
      minimum: 10000,
      duration: "12 months",
      category: "ecommerce" as const,
    },
    {
      title: "Balanced Fund",
      return: "8-10%",
      minimum: 5000,
      duration: "6 months",
      category: "logistics" as const,
    },
    {
      title: "Conservative Fund",
      return: "5-7%",
      minimum: 1000,
      duration: "3 months",
      category: "oil_and_gas" as const,
    },
  ];

  const handleInvestmentSuccess = async (option: typeof options[0]) => {
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

      // Create investment record
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

  const getMonthsInMs = (months: number) => {
    return months * 30 * 24 * 60 * 60 * 1000;
  };

  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Investment Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Expected Return</p>
                  <p className="text-2xl font-bold text-secondary">{option.return}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Minimum Investment</p>
                  <p className="text-lg font-medium">₦{option.minimum.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lock-in Period</p>
                  <p className="text-lg">{option.duration}</p>
                </div>
                <PaymentButton 
                  amount={option.minimum}
                  onSuccess={() => handleInvestmentSuccess(option)}
                  className="w-full bg-primary/90 hover:bg-primary flex items-center justify-center"
                />
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  Secured by OPay
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
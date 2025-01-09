import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Transaction, Wallet } from "@/integrations/supabase/types";
import { WalletBalance } from "./wallet/WalletBalance";
import { TransactionList } from "./wallet/TransactionList";
import { TopUpButton } from "./wallet/TopUpButton";
import { InvestmentReturns } from "./wallet/InvestmentReturns";
import { ReferralCard } from "./referral/ReferralCard";

export const WalletDashboard = () => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingWallet, setIsLoadingWallet] = useState(true);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: walletData } = await supabase
        .from("wallets")
        .select("*")
        .eq("user_id", user.id)
        .single();

      setWallet(walletData);
      setIsLoadingWallet(false);
    };

    const fetchTransactions = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: walletData } = await supabase
        .from("wallets")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (walletData) {
        const { data: transactionsData } = await supabase
          .from("transactions")
          .select("*")
          .eq("wallet_id", walletData.id)
          .order("created_at", { ascending: false });

        setTransactions(transactionsData || []);
      }
      setIsLoadingTransactions(false);
    };

    fetchWallet();
    fetchTransactions();
  }, []);

  if (isLoadingWallet || isLoadingTransactions) {
    return <div>Loading wallet...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Wallet Dashboard</h2>
        <TopUpButton />
      </div>
      
      <div className="relative">
        <img 
          src="/lovable-uploads/3e182b65-4f57-4e58-a221-39900a263596.png"
          alt="Ecoin Logo"
          className="absolute -top-16 right-0 w-32 h-32 animate-float opacity-50 pointer-events-none"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        <WalletBalance wallet={wallet} />
        <ReferralCard />
      </div>
      
      <InvestmentReturns />
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionList transactions={transactions} />
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletDashboard;
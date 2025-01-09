import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "@/integrations/supabase/types";

interface WalletBalanceProps {
  wallet: Wallet | null;
}

export const WalletBalance = ({ wallet }: WalletBalanceProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₦{wallet?.balance?.toLocaleString() || '0'}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">E-Coin Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{wallet?.ecoin_balance?.toLocaleString() || '0'}</div>
        </CardContent>
      </Card>
    </div>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "@/integrations/supabase/types";
import { Wallet as WalletIcon, Coins } from "lucide-react";

interface WalletBalanceProps {
  wallet: Wallet | null;
}

export const WalletBalance = ({ wallet }: WalletBalanceProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
          <WalletIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₦{wallet?.balance?.toLocaleString() || '0'}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Available for investments and withdrawals
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">E-Coin Balance</CardTitle>
          <Coins className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{wallet?.ecoin_balance?.toLocaleString() || '0'}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Earn more E-Coins by investing and referring friends
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
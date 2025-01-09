import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "@/integrations/supabase/types";
import { Wallet as WalletIcon, Coins } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/713c42f5-b18b-445b-a73e-822d62508c60.png" 
              alt="E-Coin" 
              className="h-6 w-6 animate-pulse"
            />
            <Coins className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">{wallet?.ecoin_balance?.toLocaleString() || '0'}</div>
            <AspectRatio ratio={1/1} className="w-8 h-8">
              <img 
                src="/lovable-uploads/713c42f5-b18b-445b-a73e-822d62508c60.png" 
                alt="E-Coin"
                className="object-contain"
              />
            </AspectRatio>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Earn more E-Coins by investing and referring friends
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
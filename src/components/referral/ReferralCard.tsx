import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Users, Copy } from "lucide-react";

export const ReferralCard = () => {
  const [referralCode, setReferralCode] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const generateReferralCode = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setReferralCode(user.id.slice(0, 8));
      }
    };
    generateReferralCode();
  }, []);

  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Referral link copied!",
      description: "Share it with your friends to earn ECoin rewards",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Invite Friends & Earn ECoins
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">How it works:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Share your referral link with friends</li>
            <li>Earn 2 ECoins for each friend who joins</li>
            <li>No limit on how many friends you can invite!</li>
          </ul>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">ECoin Launch Information:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Expected value: ₦5,000 per ECoin</li>
            <li>Launch date: In approximately 2 months</li>
            <li>The more ECoins you collect now, the greater your potential returns!</li>
          </ul>
        </div>

        <div className="flex justify-between items-center bg-primary/5 p-3 rounded-lg">
          <div className="text-sm">
            <span className="font-medium">Your Referral Code: </span>
            <span className="font-mono">{referralCode}</span>
          </div>
          <Button onClick={copyReferralLink} variant="secondary" size="sm">
            <Copy className="h-4 w-4 mr-2" />
            Copy Link
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ReferralCard = () => {
  const [referralCode, setReferralCode] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Use first 8 characters of user ID as referral code
        setReferralCode(user.id.substring(0, 8));
      }
    };
    fetchUser();
  }, []);

  const copyReferralLink = async () => {
    const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;
    await navigator.clipboard.writeText(referralLink);
    toast({
      title: "Referral link copied!",
      description: "Share this link with your friends to earn E-Coins",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Friends & Earn E-Coins</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Your Referral Code:</p>
          <div className="flex items-center justify-between gap-2">
            <code className="bg-background px-3 py-2 rounded">{referralCode}</code>
            <Button variant="outline" size="icon" onClick={copyReferralLink}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">How it works:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Share your referral link with friends</li>
            <li>Earn 2 E-Coins for each friend who signs up</li>
            <li>E-Coins launch value: ₦5,000 per coin</li>
            <li>Expected launch: In 2 months</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
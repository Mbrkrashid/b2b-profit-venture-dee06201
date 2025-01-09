import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { WalletDashboard } from "@/components/WalletDashboard";
import { InvestmentOptions } from "@/components/InvestmentOptions";
import { ReferralCard } from "@/components/referral/ReferralCard";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { CryptoBackground } from "@/components/backgrounds/CryptoBackground";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 relative">
      <CryptoBackground />
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img src="/logo.png" alt="B2B Profit Investment" className="h-8" />
            <Button 
              variant="ghost" 
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid gap-8">
          <WalletDashboard />
          <ReferralCard />
          <InvestmentOptions />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
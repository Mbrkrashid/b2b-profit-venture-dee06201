import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { WalletDashboard } from "@/components/WalletDashboard";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { InvestmentBenefits } from "@/components/InvestmentBenefits";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isAuthenticated ? (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Your Investment Dashboard</h1>
              <Button 
                variant="outline"
                onClick={async () => {
                  await supabase.auth.signOut();
                  navigate("/login");
                }}
              >
                Sign Out
              </Button>
            </div>
            <WalletDashboard />
          </div>
        ) : (
          <>
            <Hero />
            <InvestmentBenefits />
            <PerformanceMetrics />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
import { Hero } from "@/components/Hero";
import { InvestmentOptions } from "@/components/InvestmentOptions";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { WalletDashboard } from "@/components/WalletDashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container py-16">
        <WalletDashboard />
      </div>
      <InvestmentOptions />
      <PerformanceMetrics />
    </div>
  );
};

export default Index;
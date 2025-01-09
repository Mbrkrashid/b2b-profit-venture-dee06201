import { Hero } from "@/components/Hero";
import { InvestmentOptions } from "@/components/InvestmentOptions";
import { WalletDashboard } from "@/components/WalletDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="container max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <WalletDashboard />
        <InvestmentOptions />
      </div>
    </div>
  );
};

export default Index;
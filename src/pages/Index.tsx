import { Hero } from "@/components/Hero";
import { InvestmentOptions } from "@/components/InvestmentOptions";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InvestmentOptions />
      <PerformanceMetrics />
    </div>
  );
};

export default Index;
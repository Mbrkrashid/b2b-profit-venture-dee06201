import { Hero } from "@/components/Hero";
import { InvestmentOptions } from "@/components/InvestmentOptions";
import { InvestmentBenefits } from "@/components/InvestmentBenefits";
import { ReferralProgram } from "@/components/ReferralProgram";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="container max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <InvestmentBenefits />
        <InvestmentOptions />
        <ReferralProgram />
      </div>
    </div>
  );
};

export default Index;
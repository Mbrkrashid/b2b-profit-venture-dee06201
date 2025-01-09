import { ArrowRight, TrendingUp, Shield, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-primary/90 to-secondary/90 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/crypto-pattern.svg')] opacity-10 animate-pulse" />
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" />
        <div className="absolute right-1/4 top-1/3 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute left-1/3 bottom-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl animate-bounce" />
      </div>

      <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
        <img 
          src="/logo.png" 
          alt="B2B Profit Investment" 
          className="mx-auto h-20 mb-8 animate-bounce hover:animate-pulse transition-all duration-300"
        />
        
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-fadeIn">
          B2B Profit Investment
        </h1>
        
        <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
          Your gateway to smart investments in logistics, import/export, and e-commerce. 
          Join our platform and earn rewards through our innovative ECoin system.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in">
            <TrendingUp className="h-10 w-10 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold">High Returns</h3>
            <p className="text-gray-200 text-sm">Earn competitive returns on your investments</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in delay-100">
            <Shield className="h-10 w-10 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold">Secure Platform</h3>
            <p className="text-gray-200 text-sm">Your investments are protected and secure</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in delay-200">
            <Coins className="h-10 w-10 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold">ECoin Rewards</h3>
            <p className="text-gray-200 text-sm">Earn ECoin tokens for every investment</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            onClick={() => navigate("/login")}
          >
            Start Investing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
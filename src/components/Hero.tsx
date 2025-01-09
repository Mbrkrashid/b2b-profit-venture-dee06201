import { ArrowRight, TrendingUp, Shield, Coins, ChartBar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary/90 to-secondary/90 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/crypto-pattern.svg')] opacity-10 animate-pulse" />
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Animated coins */}
        <div className="absolute top-20 left-20 animate-bounce">
          <Coins className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-300">
          <ChartBar className="h-8 w-8 text-green-400" />
        </div>
        <div className="absolute bottom-32 left-40 animate-bounce delay-500">
          <Users className="h-8 w-8 text-blue-400" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Invest Smart, Grow Wealth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fade-in delay-200">
            Join thousands of investors earning competitive returns through our innovative investment platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
              <TrendingUp className="h-12 w-12 text-white mx-auto mb-4 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quick Returns</h3>
            <p className="text-gray-200">Start with ₦1,000 for 4 weeks</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in delay-400">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full animate-pulse" />
              <Shield className="h-12 w-12 text-white mx-auto mb-4 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Secure Platform</h3>
            <p className="text-gray-200">Protected by OPay payments</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in delay-500">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-pulse" />
              <Coins className="h-12 w-12 text-white mx-auto mb-4 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">ECoin Rewards</h3>
            <p className="text-gray-200">Earn tokens on investments</p>
          </div>
        </div>

        <div className="animate-fade-in delay-700">
          <Button 
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
          >
            Start Investing Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-gray-300 mt-4 animate-pulse">
            Secure your future with smart investments
          </p>
        </div>

        {/* Floating investment amounts */}
        <div className="absolute bottom-10 left-10 animate-bounce delay-100">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            ₦10,000 → 2 weeks
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            ₦5,000 → 3 weeks
          </div>
        </div>
        <div className="absolute bottom-30 left-1/2 animate-bounce delay-500">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            ₦1,000 → 4 weeks
          </div>
        </div>
      </div>
    </div>
  );
};
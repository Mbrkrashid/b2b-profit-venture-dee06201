import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-primary/90 to-secondary/90 py-32">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="mx-auto max-w-7xl px-4 text-center">
        <img src="/logo.png" alt="B2B Profit Investment" className="mx-auto h-20 mb-8" />
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-fadeIn">
          B2B Profit Investment
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
          Your gateway to smart investments in logistics, import/export, and e-commerce. 
          Join our platform and earn rewards through our innovative ECoin system.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => navigate("/login")}
          >
            Start Investing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
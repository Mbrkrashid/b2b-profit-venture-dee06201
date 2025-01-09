import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/90 to-secondary/90 py-24">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fadeIn">
          Smart Investment Solutions
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
          Secure, transparent, and efficient investment platform designed for modern businesses.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Start Investing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
import { ArrowRight, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fadeIn">
            B2B Investment Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Maximize your business potential with our secure investment solutions. Get started today and watch your investments grow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="default" className="bg-white text-primary hover:bg-gray-100">
              Start Investing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "High Returns",
              description: "Competitive ROI with our strategic investment options",
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Secure Platform",
              description: "Your investments are protected by advanced security",
            },
            {
              icon: <DollarSign className="h-8 w-8" />,
              title: "Smart Investment",
              description: "Data-driven investment opportunities",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white/10 p-6 text-center text-white backdrop-blur-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ShieldCheck, Coins, BarChart } from "lucide-react";

export const InvestmentBenefits = () => {
  const benefits = [
    {
      title: "High Returns",
      description: "Earn competitive returns through our diversified investment options",
      icon: TrendingUp,
    },
    {
      title: "Secure Platform",
      description: "Your investments are protected by state-of-the-art security measures",
      icon: ShieldCheck,
    },
    {
      title: "ECoin Rewards",
      description: "Earn ECoin tokens for every investment and referral",
      icon: Coins,
    },
    {
      title: "Performance Tracking",
      description: "Monitor your investments with real-time analytics and reports",
      icon: BarChart,
    },
  ];

  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
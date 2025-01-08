import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const InvestmentOptions = () => {
  const options = [
    {
      title: "Growth Fund",
      return: "12-15%",
      minimum: "$10,000",
      duration: "12 months",
    },
    {
      title: "Balanced Fund",
      return: "8-10%",
      minimum: "$5,000",
      duration: "6 months",
    },
    {
      title: "Conservative Fund",
      return: "5-7%",
      minimum: "$1,000",
      duration: "3 months",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Investment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Expected Return</p>
                    <p className="text-2xl font-bold text-secondary">{option.return}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Investment</p>
                    <p className="text-lg font-semibold">{option.minimum}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lock-in Period</p>
                    <p className="text-lg">{option.duration}</p>
                  </div>
                  <Button className="w-full mt-4">
                    Invest Now
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { InvestmentCard } from "./investment/InvestmentCard";
import { useInvestmentHandler } from "./investment/useInvestmentHandler";

export const InvestmentOptions = () => {
  const { handleInvestmentSuccess } = useInvestmentHandler();

  const options = [
    {
      title: "Growth Fund",
      return: "12-15%",
      minimum: 10000,
      duration: "2 weeks",
      category: "ecommerce" as const,
    },
    {
      title: "Balanced Fund",
      return: "8-10%",
      minimum: 5000,
      duration: "3 weeks",
      category: "logistics" as const,
    },
    {
      title: "Conservative Fund",
      return: "5-7%",
      minimum: 1000,
      duration: "4 weeks",
      category: "oil_and_gas" as const,
    },
  ];

  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Investment Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <InvestmentCard
            key={index}
            option={option}
            onSuccess={handleInvestmentSuccess}
          />
        ))}
      </div>
    </section>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { PaymentButton } from "../PaymentButton";

interface InvestmentOption {
  title: string;
  return: string;
  minimum: number;
  duration: string;
  category: "ecommerce" | "logistics" | "oil_and_gas";
}

interface InvestmentCardProps {
  option: InvestmentOption;
  onSuccess: (option: InvestmentOption) => void;
}

export const InvestmentCard = ({ option, onSuccess }: InvestmentCardProps) => {
  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Expected Return</p>
            <p className="text-2xl font-bold text-secondary">{option.return}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Minimum Investment</p>
            <p className="text-lg font-medium">₦{option.minimum.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Lock-in Period</p>
            <p className="text-lg">{option.duration}</p>
          </div>
          <PaymentButton 
            amount={option.minimum}
            onSuccess={() => onSuccess(option)}
            className="w-full bg-primary/90 hover:bg-primary flex items-center justify-center"
          />
          <div className="flex items-center justify-center text-sm text-gray-500">
            <ArrowUpRight className="mr-1 h-4 w-4" />
            Secured by OPay
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
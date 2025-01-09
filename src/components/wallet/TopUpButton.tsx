import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PaymentButton } from "../PaymentButton";
import { Wallet } from "lucide-react";

export const TopUpButton = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [isOpen, setIsOpen] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full md:w-auto">
          <Wallet className="mr-2 h-4 w-4" />
          Top Up Wallet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Top Up Your Wallet</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount (₦)</label>
            <Input
              type="number"
              min="1000"
              step="1000"
              value={amount}
              onChange={handleAmountChange}
              className="w-full"
            />
            <p className="text-sm text-muted-foreground">
              Minimum amount: ₦1,000
              {amount >= 1000 && (
                <span className="block mt-1">
                  You'll receive {Math.floor((amount / 1000) * 5)} E-Coins
                </span>
              )}
            </p>
          </div>
          <PaymentButton
            amount={amount}
            onSuccess={() => setIsOpen(false)}
            className="w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
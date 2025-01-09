import { Transaction } from "@/integrations/supabase/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  if (!transactions.length) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No transactions yet</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Start your investment journey by making your first deposit
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-4 border rounded-lg"
        >
          <div>
            <p className="font-medium">{transaction.type}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(transaction.created_at).toLocaleDateString()}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">₦{transaction.amount.toLocaleString()}</p>
            {transaction.ecoin_amount > 0 && (
              <p className="text-sm text-muted-foreground">
                +{transaction.ecoin_amount} E-Coins
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export const ReferralProgram = () => {
  const referralTiers = [
    { friends: 1, reward: 5 },
    { friends: 2, reward: 10 },
    { friends: 3, reward: 15 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Referral Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {referralTiers.map((tier, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  {tier.friends} {tier.friends === 1 ? 'Friend' : 'Friends'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary mb-2">{tier.reward}</p>
                <p className="text-gray-600">ECoin Tokens</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Invite your friends and earn ECoin tokens for each successful referral.
            The more friends you invite, the more tokens you earn!
          </p>
        </div>
      </div>
    </section>
  );
};
export type Referral = {
  id: string;
  referrer_id: string | null;
  referred_id: string | null;
  status: string | null;
  ecoin_reward: number | null;
  created_at: string | null;
}
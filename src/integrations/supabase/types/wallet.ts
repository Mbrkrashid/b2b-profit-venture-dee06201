export interface Wallet {
  id: string;
  user_id: string | null;
  balance: number | null;
  ecoin_balance: number | null;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  wallet_id: string | null;
  type: 'deposit' | 'withdrawal' | 'investment' | 'redemption';
  amount: number;
  ecoin_amount: number | null;
  status: string | null;
  created_at: string;
}
export interface Wallet {
  id: string;
  user_id: string;
  balance: number;
  ecoin_balance: number;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  wallet_id: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
  amount: number;
  ecoin_amount: number;
  status: string;
  created_at: string;
}
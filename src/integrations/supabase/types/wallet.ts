import { Database } from './common';

export type Transaction = {
  id: string;
  wallet_id: string | null;
  type: Database['public']['Enums']['transaction_type'];
  amount: number;
  ecoin_amount: number | null;
  status: string | null;
  created_at: string;
}

export type Wallet = {
  id: string;
  user_id: string | null;
  balance: number | null;
  ecoin_balance: number | null;
  created_at: string;
  updated_at: string;
}
import { Database } from './common';

export interface Transaction {
  id: string;
  wallet_id?: string;
  type: Database["public"]["Enums"]["transaction_type"];
  amount: number;
  ecoin_amount?: number;
  status?: string;
  created_at: string;
}

export interface Wallet {
  id: string;
  user_id?: string;
  balance?: number;
  ecoin_balance?: number;
  created_at: string;
  updated_at: string;
}
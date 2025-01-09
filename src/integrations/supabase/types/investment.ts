import { Database } from './common';

export type Investment = {
  id: string;
  wallet_id: string | null;
  category: Database['public']['Enums']['investment_category'];
  amount: number;
  ecoin_amount: number;
  redemption_date: string;
  status: string | null;
  created_at: string;
}
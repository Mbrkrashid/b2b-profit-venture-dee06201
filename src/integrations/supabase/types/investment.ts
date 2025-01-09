import { DatabaseEnums } from './common';

export interface Investment {
  id: string;
  wallet_id: string | null;
  category: DatabaseEnums['investment_category'];
  amount: number;
  ecoin_amount: number;
  redemption_date: string;
  status: string | null;
  created_at: string;
}
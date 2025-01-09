import { Database } from './common';

export type OpayTransaction = {
  id: string;
  user_id: string;
  amount: number;
  reference: string;
  status: Database['public']['Enums']['payment_status'] | null;
  created_at: string | null;
  updated_at: string | null;
  metadata: any | null;
}

export type PremiumVideoAccess = {
  id: string;
  user_id: string;
  video_id: string;
  amount_paid: number;
  purchased_at: string | null;
}
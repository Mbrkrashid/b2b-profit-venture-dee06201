import { DatabaseEnums } from './common';

export interface OpayTransaction {
  id: string;
  user_id: string;
  amount: number;
  reference: string;
  status: DatabaseEnums['payment_status'] | null;
  created_at: string | null;
  updated_at: string | null;
  metadata: Record<string, any> | null;
}
import { Database } from './common';

export type Transaction = Database['public']['Tables']['transactions']['Row'];

export type Wallet = Database['public']['Tables']['wallets']['Row'];
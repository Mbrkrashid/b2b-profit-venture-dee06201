import { Database } from './common';

export type Profile = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  role: Database['public']['Enums']['user_role'] | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
  stage_name: string | null;
  talent_category: string | null;
  social_media: any | null;
  performance_history: string | null;
}
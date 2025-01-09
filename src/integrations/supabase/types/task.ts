import { Database } from './common';

export type Task = {
  id: string;
  title: string;
  description: string | null;
  type: Database['public']['Enums']['task_type'];
  points: number | null;
  created_at: string;
}

export type UserTask = {
  id: string;
  user_id: string | null;
  task_id: string | null;
  completed_at: string;
  points_earned: number | null;
}
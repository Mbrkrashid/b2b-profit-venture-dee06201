import { DatabaseEnums } from './common';

export interface Task {
  id: string;
  title: string;
  description: string | null;
  type: DatabaseEnums['task_type'];
  points: number | null;
  created_at: string;
}

export interface UserTask {
  id: string;
  user_id: string | null;
  task_id: string | null;
  completed_at: string;
  points_earned: number | null;
}
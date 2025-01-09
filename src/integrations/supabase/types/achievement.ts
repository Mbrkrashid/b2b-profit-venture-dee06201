export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon_url: string | null;
  points: number | null;
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: string;
}
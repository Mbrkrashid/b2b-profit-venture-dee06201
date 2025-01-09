export type Achievement = {
  id: string;
  name: string;
  description: string;
  icon_url: string | null;
  points: number | null;
}

export type UserAchievement = {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: string;
}
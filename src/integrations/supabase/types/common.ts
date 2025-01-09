export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      achievements: Achievement;
      ads: Ad;
      comments: Comment;
      investments: Investment;
      opay_transactions: OpayTransaction;
      premium_video_access: PremiumVideoAccess;
      profiles: Profile;
      referrals: Referral;
      social_media_channels: SocialMediaChannel;
      tasks: Task;
      transactions: Transaction;
      user_achievements: UserAchievement;
      user_tasks: UserTask;
      video_downloads: VideoDownload;
      videos: Video;
      views: View;
      votes: Vote;
      wallets: Wallet;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: DatabaseFunctions;
    Enums: DatabaseEnums;
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export interface DatabaseEnums {
  content_status: "pending" | "approved" | "rejected";
  investment_category: "logistics" | "oil_and_gas" | "ecommerce" | "import_export";
  payment_status: "pending" | "success" | "failed";
  task_type: "social_share" | "watch_video" | "daily_login" | "vote";
  transaction_type: "deposit" | "withdrawal" | "investment" | "redemption";
  user_role: "admin" | "judge" | "participant" | "viewer" | "owner";
}

export interface DatabaseFunctions {
  add_ecoin_reward: {
    Args: { user_id: string; amount: number };
    Returns: void;
  };
}
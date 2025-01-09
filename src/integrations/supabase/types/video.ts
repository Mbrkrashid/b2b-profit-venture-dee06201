export interface Video {
  id: string;
  creator_id: string;
  title: string;
  description?: string;
  url: string;
  thumbnail_url?: string;
  views?: number;
  status?: string;
  created_at: string;
  premium_price?: number;
  is_premium?: boolean;
}

export interface VideoDownload {
  id: string;
  video_id?: string;
  user_id?: string;
  downloaded_at?: string;
}

export interface PremiumVideoAccess {
  id: string;
  user_id: string;
  video_id: string;
  amount_paid: number;
  purchased_at?: string;
}

export interface View {
  id: string;
  video_id: string;
  viewer_id: string;
  created_at: string;
}
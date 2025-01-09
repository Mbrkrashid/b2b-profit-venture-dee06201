import { DatabaseEnums } from './common';

export interface Video {
  id: string;
  creator_id: string;
  title: string;
  description: string | null;
  url: string;
  thumbnail_url: string | null;
  views: number | null;
  status: DatabaseEnums['content_status'] | null;
  created_at: string;
  premium_price: number | null;
  is_premium: boolean | null;
}

export interface VideoDownload {
  id: string;
  video_id: string | null;
  user_id: string | null;
  downloaded_at: string | null;
}

export interface View {
  id: string;
  video_id: string;
  viewer_id: string;
  created_at: string;
}
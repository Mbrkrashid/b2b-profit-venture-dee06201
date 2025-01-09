export interface SocialMediaChannel {
  id: string;
  platform: string;
  handle: string;
  url: string;
  icon?: string;
  created_at: string;
  updated_at: string;
}

export interface Vote {
  id: string;
  voter_id: string;
  participant_id: string;
  created_at: string;
}

export interface View {
  id: string;
  video_id: string;
  viewer_id: string;
  created_at: string;
}
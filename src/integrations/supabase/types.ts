export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          description: string
          icon_url: string | null
          id: string
          name: string
          points: number | null
        }
        Insert: {
          description: string
          icon_url?: string | null
          id?: string
          name: string
          points?: number | null
        }
        Update: {
          description?: string
          icon_url?: string | null
          id?: string
          name?: string
          points?: number | null
        }
        Relationships: []
      }
      ads: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          link_url: string | null
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          link_url?: string | null
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          link_url?: string | null
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          user_id: string
          video_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          user_id: string
          video_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      investments: {
        Row: {
          amount: number
          category: Database["public"]["Enums"]["investment_category"]
          created_at: string
          ecoin_amount: number
          id: string
          redemption_date: string
          status: string | null
          wallet_id: string | null
        }
        Insert: {
          amount: number
          category: Database["public"]["Enums"]["investment_category"]
          created_at?: string
          ecoin_amount: number
          id?: string
          redemption_date: string
          status?: string | null
          wallet_id?: string | null
        }
        Update: {
          amount?: number
          category?: Database["public"]["Enums"]["investment_category"]
          created_at?: string
          ecoin_amount?: number
          id?: string
          redemption_date?: string
          status?: string | null
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "investments_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      opay_transactions: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          metadata: Json | null
          reference: string
          status: Database["public"]["Enums"]["payment_status"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          metadata?: Json | null
          reference: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          metadata?: Json | null
          reference?: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "opay_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      premium_video_access: {
        Row: {
          amount_paid: number
          id: string
          purchased_at: string | null
          user_id: string
          video_id: string
        }
        Insert: {
          amount_paid: number
          id?: string
          purchased_at?: string | null
          user_id: string
          video_id: string
        }
        Update: {
          amount_paid?: number
          id?: string
          purchased_at?: string | null
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "premium_video_access_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "premium_video_access_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string | null
          id: string
          performance_history: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          social_media: Json | null
          stage_name: string | null
          talent_category: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          performance_history?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          social_media?: Json | null
          stage_name?: string | null
          talent_category?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          performance_history?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          social_media?: Json | null
          stage_name?: string | null
          talent_category?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string | null
          ecoin_reward: number | null
          id: string
          referred_id: string | null
          referrer_id: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          ecoin_reward?: number | null
          id?: string
          referred_id?: string | null
          referrer_id?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          ecoin_reward?: number | null
          id?: string
          referred_id?: string | null
          referrer_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      social_media_channels: {
        Row: {
          created_at: string
          handle: string
          icon: string | null
          id: string
          platform: string
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          handle: string
          icon?: string | null
          id?: string
          platform: string
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          handle?: string
          icon?: string | null
          id?: string
          platform?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          created_at: string
          description: string | null
          id: string
          points: number | null
          title: string
          type: Database["public"]["Enums"]["task_type"]
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          points?: number | null
          title: string
          type: Database["public"]["Enums"]["task_type"]
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          points?: number | null
          title?: string
          type?: Database["public"]["Enums"]["task_type"]
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string
          ecoin_amount: number | null
          id: string
          status: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          wallet_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          ecoin_amount?: number | null
          id?: string
          status?: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          wallet_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          ecoin_amount?: number | null
          id?: string
          status?: string | null
          type?: Database["public"]["Enums"]["transaction_type"]
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achievement_id: string
          earned_at: string
          id: string
          user_id: string
        }
        Insert: {
          achievement_id: string
          earned_at?: string
          id?: string
          user_id: string
        }
        Update: {
          achievement_id?: string
          earned_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_tasks: {
        Row: {
          completed_at: string
          id: string
          points_earned: number | null
          task_id: string | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string
          id?: string
          points_earned?: number | null
          task_id?: string | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string
          id?: string
          points_earned?: number | null
          task_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_tasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      video_downloads: {
        Row: {
          downloaded_at: string | null
          id: string
          user_id: string | null
          video_id: string | null
        }
        Insert: {
          downloaded_at?: string | null
          id?: string
          user_id?: string | null
          video_id?: string | null
        }
        Update: {
          downloaded_at?: string | null
          id?: string
          user_id?: string | null
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "video_downloads_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_downloads_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          created_at: string
          creator_id: string
          description: string | null
          id: string
          is_premium: boolean | null
          premium_price: number | null
          status: Database["public"]["Enums"]["content_status"] | null
          thumbnail_url: string | null
          title: string
          url: string
          views: number | null
        }
        Insert: {
          created_at?: string
          creator_id: string
          description?: string | null
          id?: string
          is_premium?: boolean | null
          premium_price?: number | null
          status?: Database["public"]["Enums"]["content_status"] | null
          thumbnail_url?: string | null
          title: string
          url: string
          views?: number | null
        }
        Update: {
          created_at?: string
          creator_id?: string
          description?: string | null
          id?: string
          is_premium?: boolean | null
          premium_price?: number | null
          status?: Database["public"]["Enums"]["content_status"] | null
          thumbnail_url?: string | null
          title?: string
          url?: string
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      views: {
        Row: {
          created_at: string
          id: string
          video_id: string
          viewer_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          video_id: string
          viewer_id: string
        }
        Update: {
          created_at?: string
          id?: string
          video_id?: string
          viewer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "views_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "views_viewer_id_fkey"
            columns: ["viewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      votes: {
        Row: {
          created_at: string
          id: string
          participant_id: string
          voter_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          participant_id: string
          voter_id: string
        }
        Update: {
          created_at?: string
          id?: string
          participant_id?: string
          voter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "votes_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      wallets: {
        Row: {
          balance: number | null
          created_at: string
          ecoin_balance: number | null
          id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          balance?: number | null
          created_at?: string
          ecoin_balance?: number | null
          id?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          balance?: number | null
          created_at?: string
          ecoin_balance?: number | null
          id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      content_status: "pending" | "approved" | "rejected"
      investment_category:
        | "logistics"
        | "oil_and_gas"
        | "ecommerce"
        | "import_export"
      payment_status: "pending" | "success" | "failed"
      task_type: "social_share" | "watch_video" | "daily_login" | "vote"
      transaction_type: "deposit" | "withdrawal" | "investment" | "redemption"
      user_role: "admin" | "judge" | "participant" | "viewer" | "owner"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

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
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      content_status: "pending" | "approved" | "rejected"
      investment_category: "logistics" | "oil_and_gas" | "ecommerce" | "import_export"
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
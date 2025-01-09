import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { referralCode, userId } = await req.json();

    // Find the referrer based on the referral code (which is the first 8 chars of their user id)
    const { data: referrer } = await supabaseClient
      .from("profiles")
      .select("id")
      .filter("id", "like", `${referralCode}%`)
      .single();

    if (!referrer) {
      return new Response(
        JSON.stringify({ error: "Invalid referral code" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Create the referral record
    const { data: referral, error: referralError } = await supabaseClient
      .from("referrals")
      .insert({
        referrer_id: referrer.id,
        referred_id: userId,
        status: "completed",
        ecoin_reward: 2
      })
      .select()
      .single();

    if (referralError) throw referralError;

    // Update the referrer's wallet with the reward
    const { error: walletError } = await supabaseClient.rpc(
      "add_ecoin_reward",
      { user_id: referrer.id, amount: 2 }
    );

    if (walletError) throw walletError;

    return new Response(
      JSON.stringify({ success: true, data: referral }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
    );
  }
});
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PaymentRequest {
  amount: number;
  userId: string;
  reference: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get request body
    const { amount, userId, reference }: PaymentRequest = await req.json()

    // Validate input
    if (!amount || !userId || !reference) {
      throw new Error('Missing required fields')
    }

    // Create OPay payment request
    const opayEndpoint = 'https://cashierapi.opayweb.com/api/v3/cashier/initialize'
    const response = await fetch(opayEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('OPAY_SECRET_KEY')}`,
        'MerchantId': Deno.env.get('OPAY_MERCHANT_ID') ?? '',
      },
      body: JSON.stringify({
        amount: amount.toString(),
        currency: 'NGN',
        reference,
        returnUrl: `${Deno.env.get('PUBLIC_URL')}/dashboard`,
        callbackUrl: `${Deno.env.get('SUPABASE_URL')}/functions/v1/opay-webhook`,
        cancelUrl: `${Deno.env.get('PUBLIC_URL')}/dashboard`,
        expireAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 minutes from now
      }),
    })

    const paymentData = await response.json()

    // Create transaction record
    const { error: dbError } = await supabaseClient
      .from('opay_transactions')
      .insert({
        user_id: userId,
        amount,
        reference,
        status: 'pending',
        metadata: paymentData,
      })

    if (dbError) throw dbError

    // Return payment URL and data
    return new Response(
      JSON.stringify({
        success: true,
        data: paymentData,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
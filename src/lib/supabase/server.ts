import { createClient } from '@supabase/supabase-js'

export function isSupabaseServiceConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

export function createServiceClient() {
  if (!isSupabaseServiceConfigured()) {
    throw new Error('Supabase service credentials are not configured')
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

import { createClient } from '@supabase/supabase-js'
const u = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ''
const k = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''
export const supabase = createClient(u || 'https://placeholder.supabase.co', k || 'placeholder-key')

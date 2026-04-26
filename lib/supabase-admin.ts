import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Server-side only. Uses the service-role key, which bypasses RLS.
// Never import this from a "use client" component — env var has no
// NEXT_PUBLIC_ prefix and will be undefined in the browser bundle.

let _supabaseAdmin: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (_supabaseAdmin) return _supabaseAdmin;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error("Supabase admin env vars not set — service-role operations will fail");
    return null;
  }

  _supabaseAdmin = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return _supabaseAdmin;
}

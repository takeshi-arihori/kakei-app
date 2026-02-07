import { createBrowserClient } from "@supabase/ssr";

/**
 * Client Component用のSupabaseクライアント
 * ブラウザ上で実行される
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

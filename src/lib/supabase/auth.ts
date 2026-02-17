import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from Server Component — ignore
          }
        },
      },
    }
  );
}

export async function getSession() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export async function getUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

const ADMIN_EMAILS = ["jack@nativz.io", "cole@nativz.io", "trevor@nativz.io"];

export async function checkProSubscription(email: string): Promise<boolean> {
  if (ADMIN_EMAILS.includes(email.toLowerCase())) return true;

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("pro_subscriptions")
    .select("status, current_period_end")
    .eq("email", email)
    .eq("status", "active")
    .single();

  if (!data) return false;
  if (data.current_period_end && new Date(data.current_period_end) < new Date()) return false;
  return true;
}

"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { createBrowserClient } from "@supabase/ssr";
import type { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isPro: boolean;
  proLoading: boolean;
  signInWithMagicLink: (email: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refreshProStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  isPro: false,
  proLoading: true,
  signInWithMagicLink: async () => ({ error: null }),
  signOut: async () => {},
  refreshProStatus: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

function getSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPro, setIsPro] = useState(false);
  const [proLoading, setProLoading] = useState(true);

  const supabase = getSupabaseBrowserClient();

  const ADMIN_EMAILS = ["jack@nativz.io", "cole@nativz.io", "trevor@nativz.io"];

  const checkPro = useCallback(async (email: string) => {
    setProLoading(true);
    try {
      // Admins always have pro access
      if (ADMIN_EMAILS.includes(email.toLowerCase())) {
        setIsPro(true);
        setProLoading(false);
        return;
      }

      const { data } = await supabase
        .from("pro_subscriptions")
        .select("status, current_period_end")
        .eq("email", email)
        .eq("status", "active")
        .single();

      if (data && (!data.current_period_end || new Date(data.current_period_end) > new Date())) {
        setIsPro(true);
      } else {
        setIsPro(false);
      }
    } catch {
      setIsPro(false);
    } finally {
      setProLoading(false);
    }
  }, [supabase]);

  const refreshProStatus = useCallback(async () => {
    if (user?.email) {
      await checkPro(user.email);
    }
  }, [user, checkPro]);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user?.email) {
        checkPro(s.user.email);
      } else {
        setProLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user?.email) {
        checkPro(s.user.email);
      } else {
        setIsPro(false);
        setProLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, checkPro]);

  async function signInWithMagicLink(email: string): Promise<{ error: string | null }> {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    return { error: error?.message ?? null };
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setIsPro(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, session, loading, isPro, proLoading, signInWithMagicLink, signOut, refreshProStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
}

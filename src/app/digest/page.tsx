"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import { useAuth } from "@/lib/supabase/auth-context";
import AuthModal from "@/components/auth/AuthModal";

interface DigestMeta {
  id: string;
  title: string;
  slug: string;
  week_start: string;
  week_end: string;
  published_at: string;
}

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", { ...opts, year: "numeric" })}`;
}

export default function DigestPage() {
  const { user, isPro, loading: authLoading, proLoading } = useAuth();
  const [digests, setDigests] = useState<DigestMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    fetch("/api/digests")
      .then((r) => r.json())
      .then((data) => setDigests(data))
      .catch(() => setError("Failed to load digests"))
      .finally(() => setLoading(false));
  }, []);

  const isSubscribed = isPro && !proLoading;

  return (
    <main className="min-h-screen bg-black px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 text-[#0085FF] text-sm font-medium mb-4">
            <span>📡</span> Weekly Intelligence
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">XRP Intelligence Digest</h1>
          <p className="text-gray-400">Weekly analysis and key developments in the XRP ecosystem.</p>

          {!authLoading && !user && (
            <button
              onClick={() => setShowAuth(true)}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#0085FF] text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
            >
              Sign In
            </button>
          )}

          {user && !isSubscribed && !proLoading && (
            <div className="mt-4 p-4 rounded-xl border border-[#0085FF]/20 bg-[#0085FF]/5">
              <p className="text-white text-sm font-medium">
                🔒 Subscribe to XRP Pro for full access — <span className="text-[#0085FF]">$3/mo</span>
              </p>
            </div>
          )}
        </div>

        {(loading || authLoading) && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#0085FF] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && digests.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No digests published yet.</p>
            <p className="text-gray-600 text-sm mt-2">Check back soon — the first issue is coming.</p>
          </div>
        )}

        {error && <p className="text-red-400 text-center">{error}</p>}

        <div className="space-y-4">
          {digests.map((d) => (
            <Link
              key={d.id}
              href={`/digest/${d.slug}`}
              className="block p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0085FF]/30 hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-[#0085FF] transition-colors">
                    {d.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDateRange(d.week_start, d.week_end)}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {!isSubscribed && (
                    <Lock className="h-4 w-4 text-gray-600" />
                  )}
                  <span className="text-gray-600 group-hover:text-[#0085FF] transition-colors">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} redirectAfterAuth="/digest" />
    </main>
  );
}

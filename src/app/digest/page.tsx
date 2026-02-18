"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, BarChart3, Zap, Crown } from "lucide-react";
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
  const s = new Date(start + "T12:00:00");
  const e = new Date(end + "T12:00:00");
  const opts: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", { ...opts, year: "numeric" })}`;
}

function getWeekNumber(dateStr: string): number {
  const d = new Date(dateStr + "T12:00:00");
  const start = new Date(d.getFullYear(), 0, 1);
  const diff = d.getTime() - start.getTime();
  return Math.ceil((diff / 86400000 + start.getDay() + 1) / 7);
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
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 text-[#0085FF] text-sm font-medium mb-4">
            <span>📡</span> Weekly Digest
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">XRP Intelligence Digest</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Comprehensive weekly breakdown of XRP ecosystem developments, market movements, and regulatory updates.
          </p>

          {/* Tier info */}
          {!authLoading && user && !isSubscribed && !proLoading && (
            <div className="mt-6 p-5 rounded-2xl border border-[#0085FF]/20 bg-[#16181C]">
              <p className="text-white font-semibold mb-3">
                🔒 Unlock the full digest
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-[#0085FF]" />
                  <span><span className="text-white font-medium">Plus</span> — Full weekly analysis · <span className="text-[#0085FF]">$2.99/mo</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#0085FF]" />
                  <span><span className="text-white font-medium">Pro</span> — Weekly + daily digests · <span className="text-[#0085FF]">$9.99/mo</span></span>
                </div>
              </div>
              <Link
                href="/pricing"
                className="inline-flex px-5 py-2.5 rounded-xl bg-[#0085FF] text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
              >
                View Plans
              </Link>
            </div>
          )}

          {!authLoading && !user && (
            <button
              onClick={() => setShowAuth(true)}
              className="mt-5 px-5 py-2.5 rounded-xl bg-[#0085FF] text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
            >
              Sign In to Access
            </button>
          )}
        </div>

        {/* Loading */}
        {(loading || authLoading) && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#0085FF] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Empty */}
        {!loading && digests.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No digests published yet.</p>
            <p className="text-gray-600 text-sm mt-2">Check back soon — the first issue is coming.</p>
          </div>
        )}

        {error && <p className="text-red-400 text-center">{error}</p>}

        {/* Digest cards */}
        <div className="space-y-4">
          {digests.map((d, i) => (
            <Link
              key={d.id}
              href={`/digest/${d.slug}`}
              className="block rounded-xl bg-[#16181C] border border-[#2F3336] hover:border-[#0085FF]/40 transition-all group overflow-hidden"
            >
              <div className="flex">
                {/* Blue accent bar */}
                <div className="w-1 bg-[#0085FF]/60 group-hover:bg-[#0085FF] transition-colors flex-shrink-0" />
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0085FF] mb-2">
                        <BarChart3 className="h-3.5 w-3.5" />
                        Week {getWeekNumber(d.week_start)}
                      </div>
                      <h2 className="text-lg font-semibold text-white group-hover:text-[#0085FF] transition-colors leading-snug">
                        {d.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1.5">
                        {formatDateRange(d.week_start, d.week_end)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-shrink-0">
                      {!isSubscribed && (
                        <Lock className="h-4 w-4 text-gray-600" />
                      )}
                      <span className="text-gray-600 group-hover:text-[#0085FF] transition-colors text-lg">→</span>
                    </div>
                  </div>
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

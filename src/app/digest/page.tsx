"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, BarChart3 } from "lucide-react";
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
  const needsUpgrade = user && !isSubscribed && !proLoading;
  const needsAuth = !authLoading && !user;
  const showOverlay = needsAuth || needsUpgrade;

  return (
    <main className="min-h-screen bg-black px-4 py-16 relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Weekly Digest</h1>
          <p className="text-gray-500">
            In-depth XRP ecosystem analysis, published weekly.
          </p>
        </div>

        {/* Loading */}
        {(loading || authLoading) && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#0085FF] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Empty */}
        {!loading && !authLoading && digests.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No digests published yet.</p>
            <p className="text-gray-600 text-sm mt-2">Check back soon.</p>
          </div>
        )}

        {error && <p className="text-red-400 text-center">{error}</p>}

        {/* Digest cards (blurred if not subscribed) */}
        <div className={showOverlay ? "blur-[6px] pointer-events-none select-none" : ""}>
          <div className="space-y-3">
            {digests.map((d) => (
              <Link
                key={d.id}
                href={`/digest/${d.slug}`}
                className="block rounded-xl bg-[#16181C] border border-[#2F3336] hover:border-[#0085FF]/40 transition-all group overflow-hidden"
              >
                <div className="flex">
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
                      <span className="text-gray-600 group-hover:text-[#0085FF] transition-colors text-lg mt-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay modal */}
      {showOverlay && !loading && !authLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-md bg-[#0A0A0B] border border-[#2F3336] rounded-2xl overflow-hidden shadow-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 mb-5">
              <Lock className="h-6 w-6 text-[#0085FF]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {needsAuth ? "Upgrade to unlock weekly digests" : "Upgrade your plan"}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Get in-depth XRP analysis delivered weekly.
            </p>
            <Link
              href="/pricing"
              className="inline-block w-full max-w-xs rounded-xl bg-[#0085FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
            >
              Upgrade
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Already have an account?{" "}
              <button
                onClick={() => setShowAuth(true)}
                className="text-[#0085FF] hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      )}

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} redirectAfterAuth="/digest" />
    </main>
  );
}

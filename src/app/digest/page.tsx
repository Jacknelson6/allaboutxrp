"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, Check, BarChart3 } from "lucide-react";
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

const TIERS = [
  {
    name: "Plus",
    price: "$2.99",
    period: "/mo",
    description: "Weekly digest access",
    features: ["Weekly XRP analysis", "Market movement breakdowns", "Regulatory updates"],
    cta: "Get Plus",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    description: "Full daily + weekly coverage",
    features: ["Everything in Plus", "Daily analysis reports", "Key takeaways & summaries", "Price action tracking"],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Max",
    price: "$12.99",
    period: "/mo",
    description: "Complete intelligence suite",
    features: ["Everything in Pro", "Weekly technical analysis request", "Priority support", "Early access to new features"],
    cta: "Get Max",
    popular: false,
    bestValue: true,
  },
];

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
          <div className="relative w-full max-w-3xl bg-[#0A0A0B] border border-[#2F3336] rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="px-6 pt-8 pb-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 mb-4">
                <Lock className="h-5 w-5 text-[#0085FF]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {needsAuth ? "Sign in to view" : "Upgrade to view"}
              </h2>
              <p className="text-gray-500 text-sm">
                {needsAuth
                  ? "Create an account to access weekly digests and more."
                  : "Choose a plan to unlock full access."}
              </p>
            </div>

            {/* Pricing cards */}
            <div className="px-6 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {TIERS.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative rounded-xl border p-5 transition-all ${
                      tier.popular
                        ? "border-[#0085FF]/40 bg-[#0085FF]/[0.04]"
                        : "border-[#2F3336] bg-[#16181C]"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#0085FF] text-[10px] font-bold text-white uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}
                    {tier.bestValue && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                        Best Value
                      </div>
                    )}
                    <div className="mb-4">
                      <h3 className="text-white font-semibold text-lg">{tier.name}</h3>
                      <p className="text-gray-500 text-xs mt-0.5">{tier.description}</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-500 text-sm">{tier.period}</span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <Check className="h-4 w-4 text-[#0085FF] mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    {needsAuth ? (
                      <button
                        onClick={() => setShowAuth(true)}
                        className={`w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                          tier.popular
                            ? "bg-[#0085FF] text-white hover:bg-[#0070DD]"
                            : "bg-white/5 text-white border border-[#2F3336] hover:border-[#0085FF]/30"
                        }`}
                      >
                        Sign In
                      </button>
                    ) : (
                      <Link
                        href="/subscribe"
                        className={`block w-full py-2 rounded-lg text-sm font-semibold text-center transition-colors ${
                          tier.popular
                            ? "bg-[#0085FF] text-white hover:bg-[#0070DD]"
                            : "bg-white/5 text-white border border-[#2F3336] hover:border-[#0085FF]/30"
                        }`}
                      >
                        {tier.cta}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} redirectAfterAuth="/digest" />
    </main>
  );
}

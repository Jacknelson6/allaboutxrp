"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
  const [email, setEmail] = useState<string | null>(null);
  const [inputEmail, setInputEmail] = useState("");
  const [digests, setDigests] = useState<DigestMeta[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("digest_email");
    if (stored) {
      setEmail(stored);
    }
  }, []);

  useEffect(() => {
    if (!email) return;
    setLoading(true);
    fetch("/api/digests")
      .then((r) => r.json())
      .then((data) => setDigests(data))
      .catch(() => setError("Failed to load digests"))
      .finally(() => setLoading(false));
  }, [email]);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!inputEmail.includes("@")) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputEmail }),
      });
      if (!res.ok) throw new Error();
      localStorage.setItem("digest_email", inputEmail);
      setEmail(inputEmail);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // Not subscribed — show hero
  if (!email) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 text-[#0085FF] text-sm font-medium mb-6">
            <span>📡</span> Weekly Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Weekly XRP Intelligence Digest
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
            The signal, not the noise. Key developments, price analysis, and macro outlook — delivered weekly.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0085FF] focus:ring-1 focus:ring-[#0085FF] transition-colors"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-3 rounded-lg bg-[#0085FF] text-white font-semibold hover:bg-[#0070DD] transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {submitting ? "..." : "Get Access"}
            </button>
          </form>
          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
          <p className="text-gray-600 text-xs mt-4">Free. No spam. Unsubscribe anytime.</p>
        </div>
      </main>
    );
  }

  // Subscribed — show digest list
  return (
    <main className="min-h-screen bg-black px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">XRP Intelligence Digest</h1>
          <p className="text-gray-400">Weekly analysis and key developments in the XRP ecosystem.</p>
        </div>

        {loading && (
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
                <span className="text-gray-600 group-hover:text-[#0085FF] transition-colors mt-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

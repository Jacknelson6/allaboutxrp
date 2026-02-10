"use client";

import { useState, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";

const STORAGE_KEY = "aaxrp-newsletter-email";
const SUBSCRIBED_KEY = "aaxrp-newsletter-subscribed";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(SUBSCRIBED_KEY);
      if (saved === "true") setSubscribed(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
    localStorage.setItem(SUBSCRIBED_KEY, "true");
    setSubscribed(true);
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-16" aria-label="Newsletter signup">
      <div className="rounded-2xl border border-white/[0.06] bg-[#0A0A0B]">
        <div className="px-6 py-12 sm:px-12 sm:py-14">
          <div className="flex flex-col items-center text-center max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xrp-accent mb-5">
              <Mail className="h-5 w-5" />
            </div>

            <h2 className="text-[26px] font-bold tracking-[-0.03em] text-text-primary sm:text-[30px]">
              Get the daily XRP briefing
            </h2>
            <p className="mt-3 text-[14px] text-text-secondary leading-relaxed">
              Join thousands of XRP holders getting the signal, not the noise. Market moves, ecosystem updates, and analysis — delivered daily.
            </p>

            {subscribed ? (
              <div className="mt-6 rounded-xl border border-success/20 bg-success/[0.04] px-6 py-4 w-full max-w-sm">
                <p className="text-[15px] font-semibold text-success">You&apos;re in! 🎉</p>
                <p className="text-[13px] text-text-secondary mt-1">We&apos;ll send your first briefing soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 w-full max-w-sm">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className="flex-1 rounded-xl border border-white/[0.08] bg-black px-4 py-3 text-[15px] text-text-primary placeholder:text-white/20 outline-none focus:border-xrp-accent/40 transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="btn-primary shrink-0 px-5 py-3 rounded-xl"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {error && <p className="mt-2 text-xs text-danger text-left">{error}</p>}
                <p className="mt-3 text-[11px] text-white/20">
                  Free forever. No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, TrendingUp, Newspaper, Zap, CheckCircle } from "lucide-react";

const STORAGE_KEY = "aaxrp-newsletter-email";
const SUBSCRIBED_KEY = "aaxrp-newsletter-subscribed";

const previewItems = [
  { icon: <Newspaper className="h-4 w-4" />, label: "Daily Digest", desc: "Top XRP posts & threads, curated" },
  { icon: <TrendingUp className="h-4 w-4" />, label: "Market Moves", desc: "Price action, whale alerts, volume spikes" },
  { icon: <Zap className="h-4 w-4" />, label: "Insider Analysis", desc: "What the noise means — decoded" },
];

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

    // Store to localStorage for now — will connect to Beehiiv later
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
    localStorage.setItem(SUBSCRIBED_KEY, "true");
    setSubscribed(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-[620px] px-5 py-10"
    >
      {/* Glassmorphism card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] backdrop-blur-xl">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-gradient-to-br from-xrp-accent/[0.06] via-surface-card/80 to-surface-primary/90" />
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-xrp-accent/[0.08] blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/[0.05] blur-3xl" />

        <div className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-xrp-accent/10">
              <Mail className="h-4 w-4 text-xrp-accent" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-xrp-accent/70">Free Newsletter</span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary mt-3 leading-tight">
            Get the daily XRP briefing. Free.
          </h2>
          <p className="text-sm text-text-secondary/70 mt-2 leading-relaxed">
            Join thousands of XRP holders getting the signal, not the noise.
          </p>

          {/* Preview items */}
          <div className="mt-6 space-y-3">
            {previewItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
              >
                <div className="mt-0.5 text-xrp-accent/60">{item.icon}</div>
                <div>
                  <span className="text-sm font-semibold text-text-primary">{item.label}</span>
                  <p className="text-xs text-text-secondary/60 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Signup form or success */}
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/[0.06] px-4 py-4"
            >
              <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-green-300">You&apos;re in!</p>
                <p className="text-xs text-green-400/60 mt-0.5">We&apos;ll send your first briefing soon.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="you@email.com"
                  className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/30 outline-none focus:border-xrp-accent/40 focus:ring-1 focus:ring-xrp-accent/20 transition-all"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-xrp-accent px-5 py-3 text-sm font-bold text-white transition-all hover:bg-xrp-accent/90 hover:shadow-lg hover:shadow-xrp-accent/20 active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </div>
              {error && (
                <p className="mt-2 text-xs text-red-400">{error}</p>
              )}
              <p className="mt-3 text-[11px] text-text-secondary/30">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
}

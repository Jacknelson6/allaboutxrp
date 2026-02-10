"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const sites = [
  { ticker: "XRP", name: "allaboutxrp.com", current: true },
  { ticker: "HBAR", name: "allabouthbar.com" },
  { ticker: "XLM", name: "allaboutxlm.com" },
  { ticker: "XDC", name: "allaboutxdc.com" },
];

export default function AnnouncementBar() {
  const [popup, setPopup] = useState<string | null>(null);

  return (
    <>
      <div className="relative z-50 border-b border-surface-border/30 bg-[#060911]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-1.5 text-xs sm:gap-6">
          <span className="hidden text-text-secondary/60 sm:inline">The &quot;All About&quot; Network:</span>
          {sites.map((site) =>
            site.current ? (
              <Link key={site.ticker} href="/" className="flex items-center gap-1.5 text-xrp-accent font-semibold transition-colors">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-xrp-accent opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-xrp-accent" />
                </span>
                <span className="font-mono">{site.ticker}</span>
              </Link>
            ) : (
              <button
                key={site.ticker}
                onClick={() => setPopup(site.name)}
                className="flex items-center gap-1.5 text-text-secondary/40 transition-colors hover:text-text-secondary/70"
              >
                <span className="font-mono">{site.ticker}</span>
                <span className="text-[10px] opacity-50">soon</span>
              </button>
            )
          )}
        </div>
      </div>

      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setPopup(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative mx-4 w-full max-w-sm rounded-xl border border-surface-border bg-surface-card p-6 shadow-2xl shadow-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPopup(null)}
                className="absolute right-3 top-3 rounded-lg p-1 text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-xrp-accent/10">
                  <span className="text-lg">🚀</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-text-primary">Coming Soon</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  <span className="font-mono text-xrp-accent">{popup}</span> is not live yet. We&apos;re working on expanding the &quot;All About&quot; network to more digital assets.
                </p>
                <p className="mt-1 text-xs text-text-secondary/60">Stay tuned!</p>
                <button
                  onClick={() => setPopup(null)}
                  className="mt-5 rounded-lg bg-xrp-accent/10 px-4 py-2 text-sm font-medium text-xrp-accent transition-colors hover:bg-xrp-accent/20"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

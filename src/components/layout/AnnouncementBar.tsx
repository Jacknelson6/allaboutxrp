"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

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
      <div className="border-b border-white/[0.04] bg-black/80">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 px-4 py-1 text-xs">
          <span className="hidden text-white/20 sm:inline">Network:</span>
          {sites.map((site) =>
            site.current ? (
              <Link key={site.ticker} href="/" className="flex items-center gap-1.5 text-xrp-accent/80 font-medium">
                <span className="h-1 w-1 rounded-full bg-xrp-accent/60" />
                <span className="font-mono tracking-wide">{site.ticker}</span>
              </Link>
            ) : (
              <button
                key={site.ticker}
                onClick={() => setPopup(site.name)}
                className="text-white/15 hover:text-white/30 transition-colors font-mono tracking-wide"
              >
                {site.ticker}
              </button>
            )
          )}
        </div>
      </div>

      {popup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPopup(null)}
        >
          <div
            className="relative mx-4 w-full max-w-sm rounded-xl border border-white/[0.08] bg-[#0A0A0B] p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopup(null)}
              className="absolute right-3 top-3 p-1.5 text-white/40 hover:text-white/70 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary">Coming Soon</h3>
              <p className="mt-2 text-sm text-text-secondary">
                <span className="font-mono text-xrp-accent">{popup}</span> is not live yet.
              </p>
              <button
                onClick={() => setPopup(null)}
                className="btn-primary mt-5"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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

const NETWORK_NAME = "All About Cryptocurrency Network";

export default function AnnouncementBar() {
  const [popup, setPopup] = useState<string | null>(null);

  return (
    <>
      <div className="border-b border-surface-border bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-1.5 text-xs sm:gap-6">
          <span className="hidden text-text-secondary/50 sm:inline">{NETWORK_NAME}:</span>
          {sites.map((site) =>
            site.current ? (
              <Link key={site.ticker} href="/" className="flex items-center gap-1.5 text-xrp-accent font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-xrp-accent" />
                <span className="font-mono">{site.ticker}</span>
              </Link>
            ) : (
              <button
                key={site.ticker}
                onClick={() => setPopup(site.name)}
                className="text-text-secondary/30 hover:text-text-secondary/50 transition-colors font-mono"
              >
                {site.ticker} <span className="text-[9px]">soon</span>
              </button>
            )
          )}
        </div>
      </div>

      {popup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          onClick={() => setPopup(null)}
        >
          <div
            className="relative mx-4 w-full max-w-sm rounded-2xl border border-surface-border bg-black p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopup(null)}
              className="absolute right-3 top-3 p-1.5 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-center">
              <h3 className="text-lg font-bold text-text-primary">Coming Soon</h3>
              <p className="mt-2 text-sm text-text-secondary">
                <span className="font-mono text-xrp-accent">{popup}</span> is not live yet.
              </p>
              <button
                onClick={() => setPopup(null)}
                className="mt-5 rounded-full bg-xrp-accent px-5 py-2 text-sm font-bold text-white hover:bg-xrp-accent-bright transition-colors"
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

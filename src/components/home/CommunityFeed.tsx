"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import XFeed from "./XFeed";

export default function CommunityFeed() {
  return (
    <section id="community-feed" className="mx-auto max-w-5xl px-5 py-16" aria-label="Community feed">
      <div className="text-center mb-12">
        <p className="text-[11px] font-medium uppercase tracking-widest text-xrp-accent/70 mb-3">Community</p>
        <h2 className="text-[32px] font-bold tracking-[-0.03em] text-text-primary md:text-[38px]">
          Curated XRP voices
        </h2>
        <p className="mt-3 text-[15px] text-text-secondary max-w-lg mx-auto">
          The most trusted accounts in the XRP ecosystem — trending posts and real-time updates.
        </p>
      </div>

      {/* Feed wrapped in a product-mockup card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0A0A0B]">
        {/* Top bar — mock browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.04] px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-lg bg-white/[0.03] border border-white/[0.04] px-4 py-1 text-[11px] text-white/20 font-mono">
              allaboutxrp.com/feed
            </div>
          </div>
        </div>

        <XFeed />
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/news/recaps"
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-xrp-accent hover:text-xrp-accent-bright transition-colors"
        >
          View daily analysis <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

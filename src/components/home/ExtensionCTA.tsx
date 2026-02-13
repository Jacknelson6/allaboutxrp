"use client";

import Link from "next/link";
import { ArrowRight, Chrome } from "lucide-react";

export default function ExtensionCTA() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12" aria-label="Chrome Extension">
      <div className="rounded-2xl border border-[#0085FF]/20 bg-[#0A0A0B] relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0085FF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative px-6 py-10 sm:px-12 sm:py-12">
          <div className="flex flex-col items-center text-center max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-[#0085FF]/20 bg-[#0085FF]/10 text-[#0085FF] mb-5">
              <Chrome className="h-5 w-5" />
            </div>
            <h2 className="text-[24px] font-bold tracking-[-0.03em] text-text-primary sm:text-[28px]">
              Live XRP Trader Monitor
            </h2>
            <p className="mt-3 text-[14px] text-text-secondary leading-relaxed">
              Track XRP price, charts, and live XRPL transactions right from your browser. Our Chrome extension gives you a persistent trading dashboard that stays open while you work.
            </p>
            <Link
              href="/extension"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0085FF] px-6 py-2.5 text-[14px] font-bold text-white hover:bg-[#0070DD] transition-all hover:shadow-[0_0_20px_rgba(0,133,255,0.3)] hover:gap-3"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

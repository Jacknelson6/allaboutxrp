"use client";

import Link from "next/link";
import PriceWidget from "../shared/PriceWidget";
import { useXRPPrice } from "@/hooks/useXRPPrice";

function formatMarketCap(price: number): string {
  const mcap = price * 57_600_000_000;
  if (mcap >= 1e12) return `$${(mcap / 1e12).toFixed(1)}T`;
  return `$${(mcap / 1e9).toFixed(0)}B`;
}

export default function HomeHero() {
  const { data } = useXRPPrice();

  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Radial glow — subtle, Firecrawl-style */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,133,255,0.07)_0%,rgba(0,133,255,0.02)_40%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 pt-24 pb-8 text-center">
        {/* Gradient headline */}
        <h1 className="text-[48px] font-bold tracking-[-0.04em] leading-[1.05] text-text-primary md:text-[64px]">
          The pulse of{" "}
          <span className="gradient-text">XRP</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-[1.7] text-text-secondary">
          Curated voices, live data, and everything you need to stay connected with the XRP ecosystem.
        </p>

        {/* CTA row */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/learn/what-is-xrp" className="btn-primary">
            Start Learning
          </Link>
          <Link href="/richlist" className="btn-secondary">
            View Rich List
          </Link>
        </div>

        {/* Live price — data as the visual hero */}
        <div className="mt-10 flex justify-center">
          <PriceWidget />
        </div>

        {/* Social proof stats — Firecrawl-style */}
        <div className="mt-12 flex items-center justify-center gap-8 sm:gap-12">
          <div className="proof-stat">
            <span className="value">
              {data ? formatMarketCap(data.price) : "$—"}
            </span>
            <span className="label">Market Cap</span>
          </div>
          <div className="h-8 w-px bg-white/[0.06]" />
          <div className="proof-stat">
            <span className="value">1,500+</span>
            <span className="label">TPS Capacity</span>
          </div>
          <div className="h-8 w-px bg-white/[0.06]" />
          <div className="proof-stat">
            <span className="value">3-5s</span>
            <span className="label">Settlement</span>
          </div>
        </div>

        {/* Subtle trust line */}
        <p className="mt-6 text-[12px] text-white/20">
          Tracking the XRP Ledger — 90M+ ledgers closed since 2012
        </p>
      </div>
    </section>
  );
}

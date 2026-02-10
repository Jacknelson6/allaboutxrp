"use client";

import Link from "next/link";
import PriceWidget from "../shared/PriceWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" aria-label="Hero">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,133,255,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h1 className="text-[40px] font-bold tracking-[-0.04em] leading-[1.1] text-text-primary md:text-[56px]">
          What is <span className="gradient-text">XRP</span>?
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-text-secondary">
          Your comprehensive guide to XRP — the digital asset powering fast, 
          low-cost global payments.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/get-started" className="btn-primary">
            Get Started with XRP
          </Link>
          <Link href="/richlist" className="btn-secondary">
            View Rich List
          </Link>
        </div>

        <div className="mt-10 flex justify-center">
          <PriceWidget />
        </div>
      </div>
    </section>
  );
}

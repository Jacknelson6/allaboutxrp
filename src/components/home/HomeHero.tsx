"use client";

import PriceWidget from "../shared/PriceWidget";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,133,255,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[600px] px-4 pt-20 pb-6 text-center">
        <h1 className="text-[44px] font-bold tracking-[-0.04em] leading-[1.1] text-text-primary md:text-[56px]">
          The pulse of <span className="text-xrp-accent">XRP</span>
        </h1>

        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-text-secondary">
          Curated voices, live data, and everything you need to stay connected with the XRP ecosystem.
        </p>

        <div className="mt-8 flex justify-center">
          <PriceWidget />
        </div>
      </div>
    </section>
  );
}

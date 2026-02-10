import Link from "next/link";
import PriceWidget from "../shared/PriceWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32" aria-label="Hero">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-xrp-accent/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <h1 className="font-display text-4xl font-bold leading-tight text-text-primary md:text-6xl lg:text-7xl">
          What is <span className="text-xrp-accent">XRP</span>?
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
          Everything you need to know about XRP — the digital asset built for fast, 
          low-cost global payments. Education, live data, community voices, and more.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/get-started"
            className="rounded-xl bg-xrp-accent px-8 py-3 font-semibold text-white transition-all hover:bg-xrp-accent-dim hover:shadow-lg hover:shadow-xrp-accent/20"
          >
            Get Started with XRP
          </Link>
          <Link
            href="/richlist"
            className="rounded-xl border border-surface-border bg-surface-card px-8 py-3 font-semibold text-text-primary transition-colors hover:bg-surface-elevated"
          >
            View Rich List & Data
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <PriceWidget />
        </div>
      </div>
    </section>
  );
}

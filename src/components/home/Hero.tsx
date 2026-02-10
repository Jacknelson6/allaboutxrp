"use client";

import Link from "next/link";
import PriceWidget from "../shared/PriceWidget";

export default function Hero() {
  return (
    <section className="py-20 md:py-32" aria-label="Hero">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">
          What is <span className="text-xrp-accent">XRP</span>?
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
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

import Link from "next/link";
import { ArrowUpRight, Database, FileCheck2, RefreshCw } from "lucide-react";

const standards = [
  {
    icon: FileCheck2,
    title: "Claims you can check",
    description: "Important factual claims are paired with official documentation, records, or first-party reporting.",
  },
  {
    icon: Database,
    title: "Data with methodology",
    description: "Ledger and market views explain their source, timestamp, limitations, and calculation method.",
  },
  {
    icon: RefreshCw,
    title: "Updates that are visible",
    description: "Time-sensitive guides show review dates and distinguish current facts from scenarios or opinion.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="border-y border-surface-border bg-surface-card" aria-labelledby="research-standard-heading">
      <div className="site-container grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-xl">
          <p className="editorial-kicker">Our research standard</p>
          <h2 id="research-standard-heading" className="mt-4 text-4xl leading-tight text-text-primary sm:text-5xl">
            Useful information should also be verifiable.
          </h2>
          <p className="mt-5 text-base leading-7 text-text-secondary">
            Crypto information moves quickly and often blurs fact, promotion, and speculation. We build every core
            resource to help readers see what is known, where it came from, and what remains uncertain.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/editorial" className="text-link text-sm">
              Read our editorial standards <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/learn/trusted-sources" className="text-link text-sm text-text-secondary">
              Browse trusted sources
            </Link>
          </div>
        </div>

        <div className="divide-y divide-surface-border border-y border-surface-border">
          {standards.map((item) => (
            <div key={item.title} className="grid gap-4 py-6 sm:grid-cols-[44px_1fr] sm:gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-xrp-accent/10 text-xrp-accent">
                <item.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

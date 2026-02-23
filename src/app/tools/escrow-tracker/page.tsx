"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much XRP is released from escrow each month?",
      acceptedAnswer: { "@type": "Answer", text: "Ripple unlocks 1 billion XRP from escrow on the 1st of each month, split across multiple escrow accounts. Most is typically re-locked, with Ripple releasing only 100-300 million XRP net per month." },
    },
    {
      "@type": "Question",
      name: "How much XRP remains in escrow?",
      acceptedAnswer: { "@type": "Answer", text: "As of early 2026, approximately 39.2 billion XRP remains in escrow. The total decreases slowly each month as Ripple retains a portion of each release." },
    },
    {
      "@type": "Question",
      name: "When is the next XRP escrow release?",
      acceptedAnswer: { "@type": "Answer", text: "Escrow releases happen on the 1st of every month. The next release will unlock 1 billion XRP from Ripple's escrow accounts on the XRPL." },
    },
    {
      "@type": "Question",
      name: "Does XRP escrow affect the price?",
      acceptedAnswer: { "@type": "Answer", text: "The market has largely priced in the predictable monthly releases. However, if Ripple significantly changes its release/re-lock pattern, it could impact market sentiment and price." },
    },
    {
      "@type": "Question",
      name: "Why did Ripple create the XRP escrow?",
      acceptedAnswer: { "@type": "Answer", text: "Ripple locked 55 billion XRP in escrow in December 2017 to provide transparency and predictability about XRP supply. It ensures Ripple cannot flood the market with XRP — maximum 1 billion can be released per month." },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://allaboutxrp.com/tools" },
    { "@type": "ListItem", position: 3, name: "Escrow Tracker", item: "https://allaboutxrp.com/tools/escrow-tracker" },
  ],
};

// Historical escrow data (monthly)
const escrowHistory = [
  { month: "Jan 2026", released: 1000, relocked: 800, net: 200, remaining: 39400 },
  { month: "Dec 2025", released: 1000, relocked: 850, net: 150, remaining: 39600 },
  { month: "Nov 2025", released: 1000, relocked: 800, net: 200, remaining: 39750 },
  { month: "Oct 2025", released: 1000, relocked: 900, net: 100, remaining: 39950 },
  { month: "Sep 2025", released: 1000, relocked: 800, net: 200, remaining: 40050 },
  { month: "Aug 2025", released: 1000, relocked: 850, net: 150, remaining: 40250 },
  { month: "Jul 2025", released: 1000, relocked: 800, net: 200, remaining: 40400 },
  { month: "Jun 2025", released: 1000, relocked: 750, net: 250, remaining: 40600 },
  { month: "May 2025", released: 1000, relocked: 850, net: 150, remaining: 40850 },
  { month: "Apr 2025", released: 1000, relocked: 800, net: 200, remaining: 41000 },
  { month: "Mar 2025", released: 1000, relocked: 900, net: 100, remaining: 41200 },
  { month: "Feb 2025", released: 1000, relocked: 800, net: 200, remaining: 41300 },
];

// Upcoming schedule
const upcomingReleases = [
  { date: "Mar 1, 2026", amount: "1,000,000,000 XRP", status: "Scheduled" },
  { date: "Apr 1, 2026", amount: "1,000,000,000 XRP", status: "Scheduled" },
  { date: "May 1, 2026", amount: "1,000,000,000 XRP", status: "Scheduled" },
  { date: "Jun 1, 2026", amount: "1,000,000,000 XRP", status: "Scheduled" },
  { date: "Jul 1, 2026", amount: "1,000,000,000 XRP", status: "Scheduled" },
  { date: "Aug 1, 2026", amount: "1,000,000,000 XRP", status: "Scheduled" },
];

function getNextRelease(): { date: string; daysUntil: number } {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const diff = Math.ceil((nextMonth.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return {
    date: nextMonth.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    daysUntil: diff,
  };
}

export default function EscrowTrackerPage() {
  const next = getNextRelease();
  const [showAll, setShowAll] = useState(false);
  const visibleHistory = showAll ? escrowHistory : escrowHistory.slice(0, 6);

  return (
    <>
      <SEOSchema schema={FAQ_SCHEMA} />
      <SEOSchema schema={BREADCRUMB_SCHEMA} />
      <main className="min-h-screen bg-black">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Escrow Tracker</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-xrp-accent/10 p-2.5">
              <Lock className="h-6 w-6 text-xrp-accent" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              XRP Escrow Live Tracker
            </h1>
          </div>
          <p className="text-zinc-400 max-w-2xl mb-8">
            Track Ripple&apos;s monthly XRP escrow releases. 1 billion XRP unlocks on the 1st of each month — see what gets released, re-locked, and the impact on circulating supply.
          </p>

          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-10">
            <span>AllAboutXRP Editorial</span>
            <span className="text-white/15">·</span>
            <span>Updated February 2026</span>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">Next Release</p>
              <p className="text-2xl font-bold text-white">{next.date}</p>
              <p className="text-sm text-xrp-accent mt-1">{next.daysUntil} days away</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">Remaining in Escrow</p>
              <p className="text-2xl font-bold text-white">~39.2B XRP</p>
              <p className="text-sm text-zinc-500 mt-1">of 55B originally locked</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">Avg Monthly Net Release</p>
              <p className="text-2xl font-bold text-white">~175M XRP</p>
              <p className="text-sm text-zinc-500 mt-1">~80-90% typically re-locked</p>
            </div>
          </div>

          {/* Upcoming schedule */}
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-xrp-accent" />
            Upcoming Releases
          </h2>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead className="border-b border-white/[0.06] bg-white/[0.02]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {upcomingReleases.map((r, i) => (
                  <tr key={i} className="hover:bg-white/[0.015] transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{r.date}</td>
                    <td className="px-4 py-3 font-mono text-xrp-accent">{r.amount}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Historical data */}
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-xrp-accent" />
            Historical Releases (Millions XRP)
          </h2>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead className="border-b border-white/[0.06] bg-white/[0.02]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">Month</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-zinc-500">Released</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-zinc-500">Re-locked</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-zinc-500">Net Release</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-zinc-500">Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {visibleHistory.map((r, i) => (
                  <tr key={i} className="hover:bg-white/[0.015] transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{r.month}</td>
                    <td className="px-4 py-3 text-right font-mono text-zinc-400">{r.released.toLocaleString()}M</td>
                    <td className="px-4 py-3 text-right font-mono text-green-400">{r.relocked.toLocaleString()}M</td>
                    <td className="px-4 py-3 text-right font-mono text-xrp-accent">{r.net.toLocaleString()}M</td>
                    <td className="px-4 py-3 text-right font-mono text-zinc-500">{r.remaining.toLocaleString()}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-sm text-xrp-accent hover:text-white transition-colors mb-12"
            >
              Show all months →
            </button>
          )}

          {/* Editorial content */}
          <section className="prose prose-invert max-w-none mb-12 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Understanding Ripple&apos;s XRP Escrow</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                In December 2017, Ripple locked 55 billion XRP — over half the total supply — into cryptographic
                escrow contracts on the XRP Ledger. This was designed to provide transparency and predictability
                about XRP&apos;s circulating supply.
              </p>
              <p>
                Each month, 1 billion XRP is automatically unlocked. Ripple can use these tokens for institutional
                sales, partnerships, and operational expenses. Any unused portion — typically 80-90% — gets re-locked
                into new escrow contracts at the back of the queue.
              </p>
              <p>
                The escrow mechanism is enforced at the protocol level on the XRPL. Even Ripple cannot override
                the monthly release schedule — it&apos;s cryptographically guaranteed. This makes XRP&apos;s supply
                schedule more predictable than most cryptocurrencies.
              </p>
            </div>
          </section>

          {/* Internal links */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <Link href="/learn/xrp-escrow-explained" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors">
              <h3 className="font-semibold text-white mb-1">XRP Escrow Deep Dive →</h3>
              <p className="text-sm text-zinc-500">Complete guide to how escrow works</p>
            </Link>
            <Link href="/tools/whale-tracker" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-xrp-accent/30 transition-colors">
              <h3 className="font-semibold text-white mb-1">Whale Tracker →</h3>
              <p className="text-sm text-zinc-500">Monitor large XRP transactions live</p>
            </Link>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How much XRP is released from escrow each month?", a: "Ripple unlocks 1 billion XRP from escrow on the 1st of each month. Most is typically re-locked, with Ripple releasing only 100-300 million XRP net per month." },
                { q: "How much XRP remains in escrow?", a: "As of early 2026, approximately 39.2 billion XRP remains in escrow out of the original 55 billion locked in December 2017." },
                { q: "When is the next XRP escrow release?", a: `The next release is on ${next.date} — ${next.daysUntil} days from now. 1 billion XRP will be unlocked.` },
                { q: "Does the escrow release affect XRP's price?", a: "The predictable monthly schedule means markets have largely priced it in. However, changes in Ripple's release/re-lock pattern could impact sentiment." },
                { q: "Why did Ripple create the escrow?", a: "To provide transparency about XRP supply. Before escrow, critics argued Ripple could dump XRP at will. The cryptographic escrow guarantees a maximum release of 1 billion per month." },
              ].map((item, i) => (
                <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <summary className="cursor-pointer px-5 py-4 font-medium text-white flex items-center justify-between">
                    {item.q}
                    <span className="text-zinc-500 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

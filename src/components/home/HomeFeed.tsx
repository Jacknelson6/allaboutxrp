import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  CircleHelp,
  Database,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import DeferredHomeContent from "./DeferredHomeContent";

const startingPoints = [
  {
    href: "/learn/what-is-xrp",
    label: "Understand XRP",
    description: "Start with the asset, the ledger, supply, and real use cases.",
    icon: BookOpen,
  },
  {
    href: "/live-chart",
    label: "Follow live data",
    description: "Review market activity and XRP Ledger signals in one place.",
    icon: ChartNoAxesCombined,
  },
  {
    href: "/holders",
    label: "Explore the ledger",
    description: "Inspect holder distribution and known-account methodology.",
    icon: Database,
  },
  {
    href: "/tools",
    label: "Use XRP tools",
    description: "Calculate fees, model outcomes, and track escrow events.",
    icon: Wrench,
  },
];

const answerLinks = [
  { href: "/learn/what-is-xrp", label: "What is XRP?" },
  { href: "/learn/how-does-xrp-work", label: "How does XRP work?" },
  { href: "/learn/what-is-ripple", label: "Is Ripple the same as XRP?" },
  { href: "/learn/xrp-supply-explained", label: "How many XRP exist?" },
  { href: "/learn/how-to-store-xrp-safely", label: "How do you store XRP safely?" },
  { href: "/learn/is-xrp-a-security", label: "What is XRP’s legal status?" },
];

export default function HomeFeed() {
  return (
    <div className="bg-surface-primary">
      <section className="homepage-hero overflow-hidden border-b border-surface-border">
        <div className="site-container grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-center lg:gap-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="editorial-kicker">The independent XRP reference</p>
            <h1 className="mt-5 max-w-[13ch] text-[clamp(3rem,6.6vw,5.6rem)] leading-[0.96] tracking-[-0.04em] text-text-primary">
              Understand XRP. Check the evidence.
            </h1>
            <p className="mt-7 max-w-[60ch] text-lg leading-8 text-text-secondary sm:text-xl">
              Plain-English answers about XRP and the XRP Ledger, connected to primary sources,
              transparent data, and practical research tools.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/learn/what-is-xrp" className="btn-primary px-6">
                Start with XRP
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/learn" className="btn-secondary px-6">
                Browse all guides
              </Link>
            </div>
          </div>

          <aside className="answer-surface p-6 sm:p-8 lg:p-10" aria-labelledby="xrp-short-answer">
            <div className="flex items-center justify-between gap-4 text-sm font-semibold text-[#05233d]">
              <span className="flex items-center gap-2">
                <CircleHelp className="h-4 w-4" aria-hidden="true" />
                Answer in brief
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em]">Verified</span>
            </div>
            <h2 id="xrp-short-answer" className="mt-8 text-3xl leading-tight text-[#03111e] sm:text-4xl">What is XRP?</h2>
            <p className="mt-4 text-base leading-7 text-[#0b3558] sm:text-lg sm:leading-8">
              XRP is the native digital asset of the open-source XRP Ledger. It pays network fees and
              can move or bridge value. XRP is separate from Ripple, the private technology company.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#07365e]/25 pt-5">
              <Link href="/learn/what-is-xrp" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#03111e] underline decoration-[#07365e]/40 underline-offset-4 hover:decoration-[#03111e]">
                Read the full answer <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <a
                href="https://xrpl.org/about/xrp"
                data-source-link="true"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[#0b3558] underline decoration-[#07365e]/30 underline-offset-4 hover:text-[#03111e]"
              >
                Verify on XRPL.org
              </a>
            </div>
          </aside>
        </div>
        <div className="site-container border-t border-surface-border">
          <ul className="grid py-4 text-sm text-text-secondary sm:grid-cols-3 sm:divide-x sm:divide-surface-border">
            <li className="py-2 sm:pr-7">
              <strong className="text-text-primary">Primary sources</strong>
              <span className="mt-0.5 block">Official records linked in context</span>
            </li>
            <li className="py-2 sm:px-7">
              <strong className="text-text-primary">Independent coverage</strong>
              <span className="mt-0.5 block">Not affiliated with Ripple Labs</span>
            </li>
            <li className="py-2 sm:pl-7">
              <strong className="text-text-primary">Visible review dates</strong>
              <span className="mt-0.5 block">Time-sensitive facts are labeled</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-surface-border" aria-labelledby="start-here-heading">
        <div className="site-container py-14 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-xrp-accent-bright">Choose your path</p>
              <h2 id="start-here-heading" className="mt-3 text-3xl text-text-primary sm:text-5xl">
                Start with what you need to know
              </h2>
            </div>
            <Link href="/learn" className="text-link text-sm">
              Browse the learning center <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <Link href={startingPoints[0].href} className="group flex min-h-72 flex-col justify-between rounded-xl bg-[#0b1a27] p-6 transition-colors hover:bg-[#0e2233] sm:p-8">
              <BookOpen className="h-6 w-6 text-xrp-accent-bright" strokeWidth={1.7} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-xrp-accent-bright">New to XRP?</p>
                <h3 className="mt-2 max-w-lg text-3xl text-text-primary sm:text-4xl">Begin with the essential primer</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-text-secondary">
                  Understand the asset, the ledger, supply, and real use cases before you go deeper.
                </p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text-primary">
                  Read “What is XRP?” <ArrowUpRight className="h-4 w-4 text-xrp-accent" aria-hidden="true" />
                </span>
              </div>
            </Link>
            <div className="divide-y divide-surface-border border-y border-surface-border">
              {startingPoints.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="group grid min-h-24 grid-cols-[2.75rem_1fr_auto] items-center gap-4 py-4 transition-colors hover:bg-white/[0.025] sm:px-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-xrp-accent/10 text-xrp-accent">
                    <item.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-text-primary group-hover:text-xrp-accent-bright">{item.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-text-secondary">{item.description}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-text-secondary group-hover:text-xrp-accent" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-surface-border" aria-labelledby="answer-desk-heading">
        <div className="site-container grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <ShieldCheck className="h-6 w-6 text-xrp-accent" aria-hidden="true" />
            <h2 id="answer-desk-heading" className="mt-5 text-3xl text-text-primary sm:text-5xl">
              Direct answers. Visible evidence.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">
              Each core guide leads with the answer, separates documented facts from analysis, and links
              to the records or first-party sources behind important claims.
            </p>
          </div>
          <ul className="divide-y divide-surface-border border-y border-surface-border">
            {answerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex min-h-14 items-center justify-between gap-5 py-3 text-text-primary transition-colors hover:text-xrp-accent-bright"
                >
                  <span className="font-medium">{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-text-secondary transition-colors group-hover:text-xrp-accent" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-container py-12 sm:py-16" aria-labelledby="latest-xrp-heading">
        <div className="mb-8 border-b border-surface-border pb-5">
          <p className="text-sm font-semibold text-xrp-accent-bright">Current coverage</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="latest-xrp-heading" className="text-3xl text-text-primary sm:text-4xl">Latest XRP developments</h2>
            <p className="max-w-md text-sm leading-6 text-text-secondary">
              Curated reporting and recaps, with links to the original coverage.
            </p>
          </div>
        </div>

        <DeferredHomeContent />
      </section>
    </div>
  );
}

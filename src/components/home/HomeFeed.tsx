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
      <section className="relative overflow-hidden border-b border-surface-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(47,159,255,0.11),transparent_34%)]" />
        <div className="site-container relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-center lg:gap-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="editorial-kicker">Independent, source-led XRP research</p>
            <h1 className="mt-4 max-w-[15ch] text-[clamp(2.75rem,6.4vw,5rem)] leading-[1.01] tracking-[-0.04em] text-text-primary">
              Understand XRP without the noise.
            </h1>
            <p className="mt-6 max-w-[62ch] text-lg leading-8 text-text-secondary">
              Clear answers about XRP and the XRP Ledger, backed by primary sources, live data,
              practical tools, and independent reporting.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/learn/what-is-xrp" className="btn-primary px-6">
                What is XRP?
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/learn" className="btn-secondary px-6">
                Browse XRP guides
              </Link>
            </div>
          </div>

          <aside className="surface-panel overflow-hidden" aria-labelledby="xrp-short-answer">
            <div className="border-b border-surface-border px-5 py-3.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                <CircleHelp className="h-4 w-4 text-xrp-accent" aria-hidden="true" />
                The short answer
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-7">
              <h2 id="xrp-short-answer" className="text-2xl text-text-primary">What is XRP?</h2>
              <p className="mt-3 text-base leading-7 text-text-secondary">
                XRP is the native digital asset of the open-source XRP Ledger. It pays network fees and
                can move or bridge value. XRP is separate from Ripple, the private technology company.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                <Link href="/learn/what-is-xrp" className="text-link text-sm">
                  Read the full answer <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <a
                  href="https://xrpl.org/about/xrp"
                  data-source-link="true"
                  rel="noopener noreferrer"
                  className="text-link text-sm text-text-secondary"
                >
                  Verify on XRPL.org
                </a>
              </div>
            </div>
          </aside>
        </div>
        <div className="site-container relative border-t border-surface-border">
          <ul className="grid py-4 text-sm text-text-secondary sm:grid-cols-3 sm:divide-x sm:divide-surface-border">
            <li className="py-2 sm:pr-6">
              <strong className="text-text-primary">Primary sources</strong>
              <span className="mt-0.5 block">Official records linked in context</span>
            </li>
            <li className="py-2 sm:px-6">
              <strong className="text-text-primary">Independent coverage</strong>
              <span className="mt-0.5 block">Not affiliated with Ripple Labs</span>
            </li>
            <li className="py-2 sm:pl-6">
              <strong className="text-text-primary">Visible review dates</strong>
              <span className="mt-0.5 block">Time-sensitive facts are labeled</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-surface-border" aria-labelledby="start-here-heading">
        <div className="site-container py-10 sm:py-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="editorial-kicker">Explore by intent</p>
              <h2 id="start-here-heading" className="mt-3 text-3xl text-text-primary sm:text-4xl">
                Start where your question begins
              </h2>
            </div>
            <Link href="/learn" className="text-link text-sm">
              Browse the learning center <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid border-y border-surface-border md:grid-cols-2 xl:grid-cols-4">
            {startingPoints.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex min-h-48 flex-col justify-between gap-8 py-6 transition-colors hover:bg-white/[0.025] md:px-6 ${
                  index > 0 ? "border-t border-surface-border md:border-t-0 md:border-l" : ""
                } ${index === 2 ? "md:border-l-0 xl:border-l" : ""}`}
              >
                <item.icon className="h-5 w-5 text-xrp-accent" strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <h3 className="text-xl text-text-primary transition-colors group-hover:text-xrp-accent-bright">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-surface-border" aria-labelledby="answer-desk-heading">
        <div className="site-container grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-xrp-accent-bright">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold">ANSWER DESK</span>
            </div>
            <h2 id="answer-desk-heading" className="mt-4 text-3xl text-text-primary sm:text-4xl">
              Direct answers. Visible evidence.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">
              Each core guide leads with the answer, separates documented facts from analysis, and links
              to the records or first-party sources behind important claims.
            </p>
          </div>
          <ol className="divide-y divide-surface-border border-y border-surface-border">
            {answerLinks.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex min-h-14 items-center justify-between gap-5 py-3 text-text-primary transition-colors hover:text-xrp-accent-bright"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-text-secondary">{String(index + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-text-secondary transition-colors group-hover:text-xrp-accent" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-container py-12 sm:py-16" aria-labelledby="latest-xrp-heading">
        <div className="mb-8 border-b border-surface-border pb-5">
          <p className="editorial-kicker">Current coverage</p>
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

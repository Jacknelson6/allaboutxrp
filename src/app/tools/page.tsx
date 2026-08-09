import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BellRing,
  Calculator,
  Clock3,
  ReceiptText,
  Users,
} from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free XRP Tools — Calculators, Trackers & Live Data",
  description: "Use free XRP calculators, ledger trackers, escrow data, price levels, and holder tools. No sign-up required.",
  openGraph: {
    title: "Free XRP Tools | AllAboutXRP",
    description: "Practical XRP calculators, trackers, and live data with clear methodology.",
    url: "https://allaboutxrp.com/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free XRP Tools | AllAboutXRP",
    description: "Practical XRP calculators, trackers, and live data with clear methodology.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools" },
};

const liveTools = [
  {
    href: "/holders",
    title: "XRP whale tracker",
    description: "Monitor large XRP Ledger transactions and inspect known-account context.",
    label: "Ledger data",
    icon: Activity,
  },
  {
    href: "/learn/escrow",
    title: "XRP escrow tracker",
    description: "Follow scheduled releases, executed escrows, returned amounts, and event status.",
    label: "Ledger data",
    icon: Clock3,
  },
  {
    href: "/tools/price-alerts",
    title: "XRP price levels",
    description: "Review current support and resistance areas alongside the latest price.",
    label: "Market data",
    icon: BellRing,
  },
  {
    href: "/holders",
    title: "XRP holder distribution",
    description: "Explore major balances, known accounts, and concentration methodology.",
    label: "Ledger data",
    icon: Users,
  },
];

const calculators = [
  {
    href: "/tools/xrp-profit-calculator",
    title: "XRP profit calculator",
    description: "Model profit, loss, and return using your purchase price, exit price, and XRP amount.",
    label: "Calculator",
    icon: Calculator,
  },
  {
    href: "/tools/xrp-fee-calculator",
    title: "XRP transaction fee calculator",
    description: "Estimate XRP Ledger fee costs across one transaction or a larger batch.",
    label: "Calculator",
    icon: ReceiptText,
  },
];

const allTools = [...liveTools, ...calculators];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://allaboutxrp.com/tools" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://allaboutxrp.com/tools#collection",
  name: "Free XRP Tools",
  url: "https://allaboutxrp.com/tools",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: allTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title,
      url: `https://allaboutxrp.com${tool.href}`,
    })),
  },
};

export default function ToolsHubPage() {
  return (
    <>
      <SEOSchema schema={breadcrumbSchema} />
      <SEOSchema schema={collectionSchema} />
      <main id="main-content" className="bg-surface-primary">
        <header className="border-b border-surface-border">
          <div className="site-container grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
                <Link href="/" className="inline-flex min-h-11 items-center transition-colors hover:text-text-primary">Home</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-text-primary">Tools</span>
              </nav>
              <p className="editorial-kicker">Practical XRP utilities</p>
              <h1 className="mt-5 max-w-3xl text-[clamp(3.25rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-text-primary">
                XRP tools built to show their work.
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-text-secondary">
                Calculate outcomes, inspect live XRP Ledger activity, and understand the methodology behind each result.
                Every tool is free to use without creating an account.
              </p>
              <Link href="/learn/trusted-sources" className="text-link mt-5 text-sm">
                Review our data sources <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>

        <ToolSection
          id="live-data-tools"
          kicker="Track what is happening"
          title="Live data and ledger tools"
          description="Use current market or XRP Ledger data, with timestamps and context where the source supports it."
          tools={liveTools}
        />

        <ToolSection
          id="xrp-calculators"
          kicker="Model a scenario"
          title="XRP calculators"
          description="Run transparent calculations in your browser and adjust every important input yourself."
          tools={calculators}
          muted
        />

        <section className="border-y border-surface-border bg-[#07111a]">
          <div className="site-container grid gap-7 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-3xl text-text-primary">Understand the numbers before using them.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
                Our XRP guides explain the network concepts, assumptions, and risks behind these tools.
              </p>
            </div>
            <Link href="/learn" className="btn-primary px-5">Open the learning center</Link>
          </div>
        </section>
      </main>
    </>
  );
}

function ToolSection({
  id,
  kicker,
  title,
  description,
  tools,
  muted = false,
}: {
  id: string;
  kicker: string;
  title: string;
  description: string;
  tools: typeof allTools;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "border-t border-surface-border bg-surface-card" : "bg-surface-primary"} aria-labelledby={`${id}-heading`}>
      <div className="site-container section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="editorial-kicker">{kicker}</p>
          <h2 id={`${id}-heading`} className="mt-4 text-4xl text-text-primary">{title}</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">{description}</p>
        </div>
        <ol className="divide-y divide-surface-border border-y border-surface-border">
          {tools.map((tool, index) => (
            <li key={tool.href}>
              <Link href={tool.href} className="group grid min-h-28 gap-4 py-5 transition-colors hover:bg-white/[0.02] sm:grid-cols-[2.5rem_1fr_auto] sm:items-start sm:px-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-xrp-accent/10 text-xrp-accent">
                  <tool.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
                    {String(index + 1).padStart(2, "0")} · {tool.label}
                  </div>
                  <h3 className="mt-1 text-xl text-text-primary transition-colors group-hover:text-xrp-accent-bright">{tool.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">{tool.description}</p>
                </div>
                <ArrowUpRight className="hidden h-4 w-4 text-text-secondary transition-colors group-hover:text-xrp-accent sm:block" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  ChartNoAxesCombined,
  Network,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import { Button, Card, DataList, SectionHeader } from "@/components/ui";
import { LEARN_HUBS } from "@/data/learn-hubs";

type Guide = {
  href: string;
  title: string;
  description: string;
};

type GuideCluster = {
  id: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  guides: Guide[];
};

const foundations: Guide[] = [
  { href: "/learn/what-is-xrp", title: "What is XRP?", description: "The digital asset, its purpose, and how it differs from Ripple." },
  { href: "/learn/how-does-xrp-work", title: "How does XRP work?", description: "Transactions, validation, fees, and settlement in plain language." },
  { href: "/learn/xrp-ledger-explained", title: "XRP Ledger explained", description: "The open-source network that XRP runs on." },
  { href: "/learn/xrp-supply-explained", title: "XRP supply explained", description: "Genesis supply, circulation, escrow, and fee destruction." },
  { href: "/learn/history", title: "History of XRP", description: "A sourced timeline from the ledger’s launch to the present." },
];

const clusters: GuideCluster[] = [
  {
    id: "using-xrp",
    title: "Using and protecting XRP",
    description: "Practical, risk-aware guidance for buying, sending, and storing XRP.",
    icon: WalletCards,
    guides: [
      { href: "/learn/how-to-buy-xrp", title: "How to buy XRP", description: "Choose a venue, fund an account, and plan custody." },
      { href: "/learn/xrp-wallets", title: "XRP wallets", description: "Compare custody types, tradeoffs, and security needs." },
      { href: "/learn/how-to-store-xrp-safely", title: "Store XRP safely", description: "Protect keys, backups, devices, and recovery phrases." },
      { href: "/learn/how-to-send-xrp", title: "How to send XRP", description: "Addresses, destination tags, fees, and test transfers." },
      { href: "/learn/xrp-scams", title: "Avoid XRP scams", description: "Recognize impersonation, fake giveaways, and phishing." },
    ],
  },
  {
    id: "xrpl",
    title: "Inside the XRP Ledger",
    description: "Technical concepts grounded in XRPL documentation and ledger behavior.",
    icon: Network,
    guides: [
      { href: "/learn/xrpl-consensus-mechanism", title: "XRPL consensus", description: "How validators agree without proof-of-work mining." },
      { href: "/learn/xrpl-reserves-explained", title: "Account reserves", description: "Current reserve requirements and why they can change." },
      { href: "/learn/xrpl-transaction-fees", title: "Transaction fees", description: "Base costs, load-based fees, and fee destruction." },
      { href: "/learn/xrpl-amm-liquidity-pools", title: "XRPL AMMs", description: "Native liquidity pools, LP tokens, and auction slots." },
      { href: "/learn/xrpl-validators", title: "Validators", description: "Validator roles, trusted lists, and decentralization." },
    ],
  },
  {
    id: "ripple-ecosystem",
    title: "Ripple and the ecosystem",
    description: "Separate the company, its products, and documented relationships from the XRP asset.",
    icon: Building2,
    guides: [
      { href: "/learn/what-is-ripple", title: "What is Ripple?", description: "The company, its products, and its relationship to XRP." },
      { href: "/learn/rlusd", title: "RLUSD", description: "Ripple’s dollar-backed stablecoin and where it operates." },
      { href: "/learn/escrow", title: "XRP escrow", description: "How Ripple’s on-ledger escrow releases work." },
      { href: "/learn/partnerships", title: "Partnerships", description: "Documented relationships, with careful product distinctions." },
      { href: "/learn/sec-vs-ripple", title: "SEC v. Ripple", description: "The court record, major rulings, and legal context." },
    ],
  },
  {
    id: "research-decisions",
    title: "Research and decision-making",
    description: "Frameworks for evaluating XRP claims without treating speculation as fact.",
    icon: ChartNoAxesCombined,
    guides: [
      { href: "/learn/is-xrp-a-good-investment", title: "Is XRP a good investment?", description: "A risk-first evaluation framework, not a recommendation." },
      { href: "/learn/xrp-risks", title: "XRP risks", description: "Market, custody, regulatory, and technology risks." },
      { href: "/learn/xrp-price-history", title: "XRP price history", description: "Major cycles and events without hindsight guarantees." },
      { href: "/learn/xrp-market-cap-explained", title: "Market cap explained", description: "How supply and price interact in valuation scenarios." },
      { href: "/learn/trusted-sources", title: "Trusted sources", description: "Official documents, data providers, and verification habits." },
      { href: "/whitepapers", title: "XRP whitepaper library", description: "Original consensus papers, Ripple research, and ecosystem specifications." },
    ],
  },
];

const topicHubs: Guide[] = LEARN_HUBS.map((hub) => ({
  href: `/learn/${hub.slug}`,
  title: hub.title,
  description: hub.description,
}));

const allGuides = [...topicHubs, ...foundations, ...clusters.flatMap((cluster) => cluster.guides)];

const featuredGuides = [
  { href: "/learn/what-is-xrp", title: "The complete guide to XRP", image: "/guides/ultimate-guide-xrp-2026.webp", alt: "A bronze hydraulic gate linking two cobalt waterways" },
  { href: "/learn/how-to-buy-xrp", title: "How to buy XRP safely", image: "/guides/ultimate-guide-buying-xrp-2026.webp", alt: "A balance, key, and sealed ledger arranged on an ivory table" },
  { href: "/learn/altcoins-2026", title: "The 2026 guide to altcoins", image: "/guides/ultimate-guide-altcoins-2026.webp", alt: "Five distinct mechanical instruments arranged for comparison" },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://allaboutxrp.com/learn#collection",
  name: "XRP Learning Center",
  url: "https://allaboutxrp.com/learn",
  description: "Source-led guides to XRP, the XRP Ledger, Ripple, custody, risks, and ecosystem topics.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: allGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: `https://allaboutxrp.com${guide.href}`,
    })),
  },
};

export default function LearnPage() {
  return (
    <>
      <SEOSchema schema={collectionSchema} />
      <div className="bg-paper">
        <header className="border-b border-hairline bg-paper">
          <div className="site-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <nav aria-label="Breadcrumb" className="mb-5 text-sm text-text-secondary">
                <Link href="/" className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-cobalt">Home</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-ink">Learn</span>
              </nav>
              <p className="font-sans text-xs font-[650] uppercase tracking-[0.04em] text-cobalt">XRP learning center</p>
              <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.98] font-normal text-ink">
                Understand XRP from first principles.
              </h1>
            </div>
            <div className="max-w-xl lg:pb-1">
              <p className="text-base leading-7 text-text-secondary">
                Follow a structured path through XRP, the XRP Ledger, Ripple, custody, and risk. Every core guide
                begins with a direct answer and points to sources you can inspect.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/learn/what-is-xrp" variant="primary" size="md">Begin with XRP</Button>
                <Button href="/answers" variant="secondary" size="md">Browse quick answers</Button>
              </div>
            </div>
          </div>
        </header>

        <section className="site-container py-12 sm:py-16" aria-labelledby="featured-guides-heading">
          <SectionHeader
            eyebrow="Essential guides"
            title={<span id="featured-guides-heading">Built for a complete first read</span>}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {featuredGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group block">
                <span className="relative block aspect-[16/9] w-full overflow-hidden border border-hairline bg-paper-muted transition-colors duration-150 group-hover:border-ink">
                  <Image src={guide.image} alt={guide.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </span>
                <span className="mt-3 block font-sans text-xs font-[650] uppercase tracking-[0.04em] text-text-secondary">
                  Ultimate guide
                </span>
                <span className="mt-1.5 block font-display text-lg leading-snug font-normal text-ink transition-colors duration-150 group-hover:text-cobalt">
                  {guide.title}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-hairline bg-paper-muted" aria-labelledby="paths-heading">
          <div className="site-container py-12 sm:py-16">
            <SectionHeader
              eyebrow="Complete library"
              title={<span id="paths-heading">Choose a learning path</span>}
            />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary">
              Seven topic hubs organize every indexable guide, giving readers and search crawlers a direct route
              through the full library.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {LEARN_HUBS.map((hub, index) => (
                <Card
                  key={hub.slug}
                  href={`/learn/${hub.slug}`}
                  variant="default"
                  eyebrow={`Path ${String(index + 1).padStart(2, "0")}`}
                  title={hub.title}
                  meta={<span className="tabular-nums">{hub.guides.length} guides</span>}
                >
                  <p className="text-sm leading-6 text-text-secondary">{hub.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-12 sm:py-16" aria-labelledby="foundations-heading">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center border border-hairline text-cobalt">
                <BookOpen className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h2 id="foundations-heading" className="mt-5 font-display text-3xl leading-tight font-normal text-ink">
                XRP foundations
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary">
                These guides establish the vocabulary and distinctions needed for every deeper topic.
              </p>
            </div>
            <GuideList guides={foundations} />
          </div>
        </section>

        <div className="border-t border-hairline">
          {clusters.map((cluster, index) => (
            <section
              key={cluster.id}
              id={cluster.id}
              className={index % 2 === 0 ? "border-b border-hairline bg-paper-muted" : "border-b border-hairline bg-paper"}
              aria-labelledby={`${cluster.id}-heading`}
            >
              <div className="site-container py-12 sm:py-16">
                <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center border border-hairline text-cobalt">
                      <cluster.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <h2 id={`${cluster.id}-heading`} className="mt-5 font-display text-2xl leading-tight font-normal text-ink sm:text-3xl">
                      {cluster.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary">{cluster.description}</p>
                  </div>
                  <GuideList guides={cluster.guides} />
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="bg-paper-muted">
          <div className="site-container grid gap-7 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="max-w-2xl">
              <ShieldCheck className="h-6 w-6 text-cobalt" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl leading-tight font-normal text-ink sm:text-3xl">
                See the evidence behind the explanation.
              </h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                Review the primary sources, editorial process, and correction standards used across AllAboutXRP.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/learn/trusted-sources" variant="primary" size="md">Trusted sources</Button>
              <Button href="/editorial" variant="secondary" size="md">Editorial standards</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function GuideList({ guides }: { guides: Guide[] }) {
  return (
    <DataList ariaLabel="Guides in this section">
      {guides.map((guide) => (
        <li key={guide.href}>
          <Link
            href={guide.href}
            className="group grid min-h-[4.5rem] gap-3 py-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-4"
          >
            <span>
              <span className="block font-display text-lg leading-snug font-normal text-ink transition-colors duration-150 group-hover:text-cobalt">
                {guide.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-text-secondary">{guide.description}</span>
            </span>
            <ArrowUpRight
              className="hidden h-4 w-4 shrink-0 text-text-secondary transition-colors duration-150 group-hover:text-cobalt sm:block"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </DataList>
  );
}

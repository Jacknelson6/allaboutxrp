import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ripple Liquidity Hub: Enterprise Crypto Access Explained",
  description: "Ripple Liquidity Hub gives enterprises access to crypto liquidity. How it works, supported assets, and how it drives XRP demand.",
  keywords: ["Ripple Liquidity Hub", "Ripple crypto access", "enterprise liquidity Ripple"],
  openGraph: {
    title: "Ripple Liquidity Hub | AllAboutXRP",
    description: "Ripple Liquidity Hub — enterprise crypto liquidity access explained.",
    url: "https://allaboutxrp.com/learn/ripple-liquidity-hub",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Liquidity Hub | AllAboutXRP",
    description: "Enterprise crypto access — how Ripple Liquidity Hub works.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/ripple-liquidity-hub" },
};

const faqItems = [
  { q: "What is Ripple Liquidity Hub?", a: "An enterprise platform providing single-API access to crypto liquidity from multiple sources — exchanges, market makers, DeFi. Businesses can buy, sell, and hold digital assets without building their own crypto infrastructure." },
  { q: "How does it drive XRP demand?", a: "Supports XRP as a core asset, with some volume flowing through XRP. Integrates with Ripple Payments (ODL), which uses XRP as a bridge currency for cross-border settlements." },
  { q: "Who can use it?", a: "B2B infrastructure for fintechs, neobanks, payment providers, and enterprises wanting to offer crypto services. Not a consumer product." },
  { q: "What assets are supported?", a: "XRP, Bitcoin, Ethereum, USDT, USDC, and other major cryptocurrencies. The list expands based on demand and regulatory requirements." },
  { q: "How is it different from an exchange?", a: "It's a liquidity aggregator, not an exchange. Sources best prices across multiple venues via a single API — enterprises don't need multiple exchange relationships." },
];

const schemas = [
  buildArticleSchema({
    headline: "Ripple Liquidity Hub: Enterprise Crypto Access Explained",
    description: "How Ripple Liquidity Hub gives enterprises single-API access to crypto liquidity across multiple venues. Supported assets, architecture, and XRP demand implications.",
    url: "https://allaboutxrp.com/learn/ripple-liquidity-hub",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple Liquidity Hub" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/ripple-liquidity-hub" }),
  buildFAQSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
];

export default function RippleLiquidityHubPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Ripple Liquidity Hub:"
          titleAccent="Enterprise Crypto Access"
          subtitle="How Ripple is giving enterprises single-API access to crypto liquidity — and what it means for XRP demand."
          breadcrumbLabel="Ripple Liquidity Hub"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Ripple Liquidity Hub is a <strong className="text-text-primary">B2B liquidity aggregation platform</strong> giving enterprises single-API access to crypto markets across multiple venues. It supports <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> and major cryptocurrencies, integrates with <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Payments</Link>, and enables businesses to offer crypto services without building their own infrastructure.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Type", value: "B2B liquidity aggregation platform" },
          { label: "Access Model", value: "Single API" },
          { label: "Sources", value: "Exchanges, market makers, DeFi" },
          { label: "Assets", value: "XRP, BTC, ETH, stablecoins, more" },
          { label: "Target", value: "Fintechs, neobanks, enterprises" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How It Works" },
          { id: "features", label: "Features" },
          { id: "xrp-impact", label: "XRP Impact" },
          { id: "ecosystem", label: "Ripple Ecosystem" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Type" value="B2B" delay={0} />
          <StatPill label="Access" value="Single API" delay={0.06} />
          <StatPill label="Sources" value="Multi-Venue" delay={0.12} />
          <StatPill label="Assets" value="Multi-Asset" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How Liquidity Hub Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple Liquidity Hub aggregates liquidity from multiple sources — centralized exchanges, OTC desks, market makers, and DeFi protocols — and presents it through a <strong className="text-text-primary">single API</strong>. Enterprises connect once and access optimized pricing across all venues.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Enterprise Connects", desc: "A fintech or business integrates with Liquidity Hub via API. One integration, multiple liquidity sources." },
                { title: "2. Smart Order Routing", desc: "When the enterprise needs to buy or sell crypto, Liquidity Hub routes the order to the best-priced venue automatically." },
                { title: "3. Best Execution", desc: "The platform optimizes for best execution — lowest cost, fastest fill, and minimal slippage." },
                { title: "4. Settlement", desc: "Assets are settled and held in custody or delivered to the enterprise's designated wallet." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="features" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Features</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Liquidity Aggregation", desc: "Best prices across multiple venues — exchanges, OTC desks, and market makers combined." },
                { title: "Single API", desc: "One integration replaces managing relationships with multiple exchanges and liquidity providers." },
                { title: "Pre-Trade Analytics", desc: "Real-time pricing, spread analysis, and market depth before executing trades." },
                { title: "Compliance Ready", desc: "Built-in KYC/AML compliance, transaction monitoring, and regulatory reporting." },
                { title: "Multi-Asset", desc: "Support for XRP, BTC, ETH, stablecoins, and an expanding asset list." },
                { title: "White-Label Ready", desc: "Enterprises can offer crypto buying/selling under their own brand." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="xrp-impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on XRP</h2>
            <div className="mt-6">
              <HighlightBox title="XRP Demand Driver" variant="accent">
                <p>Every enterprise using Liquidity Hub has easy access to XRP. As businesses discover the cost savings of using XRP for cross-border payments through Ripple Payments integration, <strong className="text-text-primary">organic XRP demand grows</strong>. The Hub reduces friction for enterprises to adopt XRP as part of their crypto strategy.</p>
              </HighlightBox>
            </div>
            <div className="mt-6">
              <GlowCard
                title="Enterprise Access"
                value="Frictionless XRP"
                subtitle="One API connection gives enterprises instant access to XRP liquidity"
              />
            </div>
          </RevealSection>

          <RevealSection id="ecosystem" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Part of Ripple&apos;s Full Stack</h2>
            <div className="mt-6">
              <DataTable
                headers={["Product", "Function", "XRP Role"]}
                rows={[
                  ["Ripple Payments", "Cross-border payments", "Bridge currency (ODL)"],
                  ["Ripple Custody", "Institutional storage", "Secure XRP holding"],
                  ["Liquidity Hub", "Crypto access", "Trading & liquidity"],
                  ["RLUSD", "Stablecoin", "Settlement + DeFi"],
                  ["Hidden Road", "Prime brokerage", "Institutional trading"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripple-custody", label: "Ripple Custody", desc: "Institutional storage" },
              { href: "/learn/hidden-road-acquisition", label: "Hidden Road", desc: "Prime brokerage" },
              { href: "/learn/ripple-stablecoin-strategy", label: "Stablecoin Strategy", desc: "RLUSD" },
              { href: "/learn/what-is-ripple", label: "What Is Ripple?", desc: "Company overview" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/xrp-use-cases", label: "XRP Use Cases", desc: "How XRP is used" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand Ripple's Platform"
          description="Liquidity Hub is one piece of Ripple's institutional infrastructure."
          primaryHref="/learn/what-is-ripple"
          primaryLabel="What Is Ripple? →"
          secondaryHref="/learn/ripple-custody"
          secondaryLabel="Ripple Custody"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, press releases.</em>
        </p>
      </div>
    </>
  );
}

import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What is Ripple Prime? Enterprise Crypto Brokerage Explained",
  description:
    "Ripple Prime is Ripple's institutional-grade prime brokerage service, built on the Hidden Road acquisition. Learn how it works, who it serves, and its connection to XRP.",
  openGraph: {
    title: "What is Ripple Prime? | AllAboutXRP",
    description: "Ripple's enterprise prime brokerage — clearing $3T+ annually with post-trade settlement on the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/ripple-prime",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Prime Explained | AllAboutXRP",
    description: "Institutional crypto brokerage with XRP Ledger settlement.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/ripple-prime" },
};

const schemas = [
  buildArticleSchema({
    headline: "What is Ripple Prime? Enterprise Crypto Brokerage Explained",
    description: "A guide to Ripple Prime, Ripple's institutional prime brokerage built on the Hidden Road acquisition.",
    url: "https://allaboutxrp.com/learn/ripple-prime",
    datePublished: "2026-02-12",
    dateModified: "2026-02-12",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple Prime" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/ripple-prime" }),
  buildFAQSchema([
    { question: "What is Ripple Prime?", answer: "Ripple Prime is Ripple's institutional-grade prime brokerage service offering clearing, lending, and post-trade settlement. Built on the $1.25 billion Hidden Road acquisition, it clears over $3 trillion annually." },
    { question: "How does Ripple Prime use XRP?", answer: "Ripple Prime is migrating post-trade settlement to the XRP Ledger, using XRPL's speed and low costs for institutional clearing. RLUSD is also used as collateral within the platform." },
    { question: "Who can use Ripple Prime?", answer: "Ripple Prime serves institutional clients — hedge funds, asset managers, banks, and large trading firms. It is not a retail product." },
  ]),
];

const faqItems = [
  { q: "What is Ripple Prime?", a: "Ripple Prime is Ripple's institutional-grade prime brokerage service offering clearing, lending, and post-trade settlement. Built on the $1.25 billion Hidden Road acquisition, it clears over $3 trillion annually and serves 300+ institutional clients." },
  { q: "How does Ripple Prime relate to Hidden Road?", a: "Ripple acquired Hidden Road in 2025 for $1.25 billion — the largest acquisition in crypto history at the time. Hidden Road's prime brokerage infrastructure became the foundation for Ripple Prime." },
  { q: "How does Ripple Prime use XRP and the XRPL?", a: "Ripple is migrating Hidden Road's post-trade settlement to the XRP Ledger, leveraging XRPL's speed and low cost. RLUSD is also used as collateral within the platform." },
  { q: "Who can use Ripple Prime?", a: "Institutional clients only — hedge funds, asset managers, banks, and large trading firms. It is not available to retail investors." },
  { q: "What does Ripple Prime offer?", a: "Multi-asset prime brokerage including clearing, custody, financing, lending, and post-trade services across crypto and traditional assets." },
];

export default function RipplePrimePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="What is"
          titleAccent="Ripple Prime?"
          subtitle="Ripple Prime is an institutional-grade prime brokerage clearing $3+ trillion annually — built on the $1.25B Hidden Road acquisition, with post-trade settlement migrating to the XRP Ledger."
          breadcrumbLabel="Ripple Prime"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-12" />
            <LastUpdated date="February 12, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Ripple Prime</strong> is Ripple&apos;s institutional brokerage arm, born from the <Link href="/learn/acquisitions" className="text-xrp-accent underline decoration-xrp-accent/30">$1.25B Hidden Road acquisition</Link>. It provides clearing, custody, lending, and post-trade services to 300+ institutional clients. The big story: post-trade settlement is moving to the XRP Ledger, making XRPL the backbone of a $3T+ annual clearing operation.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Based On", value: "Hidden Road (acquired $1.25B, 2025)" },
          { label: "Annual Clearing", value: "$3+ trillion" },
          { label: "Institutional Clients", value: "300+" },
          { label: "Services", value: "Clearing, custody, lending, settlement" },
          { label: "2024 Revenue", value: "$100M+ (Hidden Road)" },
          { label: "Settlement Layer", value: "Migrating to XRP Ledger" },
          { label: "Collateral", value: "RLUSD + traditional assets" },
          { label: "Target Market", value: "Institutional / Enterprise" },
        ]} />

        <SectionNav items={[
          { id: "what-it-is", label: "What It Is" },
          { id: "hidden-road", label: "Hidden Road" },
          { id: "services", label: "Services" },
          { id: "xrp-connection", label: "XRP Connection" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Clearing" value="$3T+/yr" delay={0} />
          <StatPill label="Clients" value="300+" delay={0.06} />
          <StatPill label="Acquisition" value="$1.25B" delay={0.12} />
          <StatPill label="Revenue" value="$100M+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* WHAT IT IS */}
          <RevealSection id="what-it-is">
            <h2 className="text-2xl font-bold text-text-primary">What is Ripple Prime?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple Prime is Ripple&apos;s institutional prime brokerage platform — think of it as the &quot;Goldman Sachs of crypto.&quot; It provides the infrastructure that large financial institutions need to trade, clear, settle, and custody digital assets at scale.
            </p>
            <div className="mt-5">
              <HighlightBox title="Why Prime Brokerage Matters" variant="info">
                <p>Institutional investors won&apos;t touch crypto without proper infrastructure — clearing, custody, margin, lending. Ripple Prime provides all of this, making it safe and efficient for hedge funds, banks, and asset managers to participate in digital asset markets.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* HIDDEN ROAD */}
          <RevealSection id="hidden-road" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Hidden Road Acquisition</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In 2025, Ripple acquired Hidden Road for $1.25 billion — making it the largest acquisition in crypto history at the time. Hidden Road was already a thriving multi-asset prime brokerage:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "$3+ trillion in annual clearing volume", desc: "Across crypto and traditional assets" },
                { title: "300+ institutional clients", desc: "Hedge funds, asset managers, banks" },
                { title: "$100M+ revenue in 2024", desc: "Profitable and growing rapidly" },
                { title: "Multi-asset coverage", desc: "Crypto, FX, fixed income, derivatives" },
                { title: "Registered FCM and broker-dealer", desc: "FINRA-registered with full regulatory compliance" },
              ]} variant="check" />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              See all acquisitions on our <Link href="/learn/acquisitions" className="text-xrp-accent underline decoration-xrp-accent/30">acquisitions page</Link>.
            </p>
          </RevealSection>

          {/* SERVICES */}
          <RevealSection id="services" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple Prime Services</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Prime Brokerage", desc: "Full-service brokerage for institutional traders including execution, clearing, and margin." },
                { title: "Clearing & Settlement", desc: "Multi-asset clearing across crypto and traditional markets, processing $3T+ annually." },
                { title: "Digital Asset Custody", desc: "Institutional-grade custody via Ripple Custody (Metaco), trusted by tier-1 banks." },
                { title: "Lending & Financing", desc: "Margin lending and collateral management for institutional portfolios." },
                { title: "Post-Trade Services", desc: "Reconciliation, reporting, and settlement — migrating to XRP Ledger for speed." },
                { title: "RLUSD Collateral", desc: "RLUSD stablecoin accepted as collateral, creating new utility for Ripple's ecosystem." },
              ]} />
            </div>
          </RevealSection>

          {/* XRP CONNECTION */}
          <RevealSection id="xrp-connection" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Ripple Prime Benefits XRP</h2>
            <div className="mt-5">
              <HighlightBox title="XRP Ledger as Settlement Layer" variant="accent" large>
                <p>Ripple is migrating Hidden Road&apos;s post-trade settlement to the XRP Ledger. This means <strong className="text-text-primary">$3+ trillion in annual clearing volume will settle on XRPL</strong> — creating massive transaction throughput and demonstrating XRPL&apos;s capability as institutional-grade infrastructure.</p>
              </HighlightBox>
            </div>
            <div className="mt-6">
              <IconList items={[
                { title: "XRPL Settlement", desc: "Post-trade clearing moves to the XRP Ledger — proving XRPL at institutional scale" },
                { title: "RLUSD Utility", desc: "RLUSD used as collateral in prime brokerage, driving stablecoin adoption on XRPL" },
                { title: "XRP Liquidity", desc: "Institutional trading increases XRP market liquidity and reduces volatility" },
                { title: "Ecosystem Growth", desc: "300+ institutional clients introduced to the XRP Ledger ecosystem" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Full product overview" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP as bridge currency" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/acquisitions", label: "Acquisitions", desc: "$3.7B strategy" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "Company overview" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Institutional-Grade Infrastructure"
          description="Ripple Prime brings Wall Street-level brokerage to crypto — with settlement on the XRP Ledger."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/acquisitions"
          secondaryLabel="Explore Acquisitions"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 12, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, Hidden Road, BusinessWire, Financial Times.</em>
        </p>
      </div>
    </>
  );
}

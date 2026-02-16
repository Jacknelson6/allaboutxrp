import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "xrp-and-tokenized-treasuries";
const title = "XRP & Tokenized Treasuries: The $10T Opportunity";
const description = "Tokenized US treasuries on the XRP Ledger. How XRPL is positioned to capture a share of the $10T+ tokenized asset market.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const datePublished = "2026-02-15";

export const metadata: Metadata = {
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished, dateModified: datePublished }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP & Tokenized Treasuries" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What are tokenized treasuries?", answer: "Tokenized treasuries are US Treasury bonds represented as digital tokens on a blockchain. They allow investors to buy, sell, and earn yield from government bonds 24/7, with instant settlement and fractional ownership." },
    { question: "How does XRP relate to tokenized treasuries?", answer: "The XRP Ledger is being used to issue and trade tokenized treasuries. XRPL's native tokenization features, low fees, and fast settlement make it an attractive platform for real-world asset tokenization." },
    { question: "How big is the tokenized treasury market?", answer: "The tokenized treasury market exceeded $2 billion in 2025 and is projected to reach $10+ trillion as traditional finance embraces blockchain-based settlement." },
    { question: "Can I buy tokenized treasuries on XRPL?", answer: "Tokenized treasury products are beginning to launch on the XRP Ledger. Access may be limited to accredited investors initially, but broader availability is expected as regulations evolve." },
    { question: "Why tokenize treasuries on blockchain?", answer: "Tokenization enables 24/7 trading, instant settlement (vs T+1), fractional ownership, global access, and composability with DeFi protocols — making treasuries more liquid and accessible." },
  ]),
];

const faqItems = [
  { q: "What are tokenized treasuries?", a: "Tokenized treasuries are US Treasury bonds represented as blockchain tokens. They let you buy, sell, and earn yield from government bonds 24/7 with instant settlement, fractional ownership, and global access." },
  { q: "How does XRP relate to tokenized treasuries?", a: "XRPL is being used to issue and trade tokenized treasuries. Its native tokenization features (trust lines, MPTs), low fees, and institutional-grade compliance make it ideal for real-world asset tokenization." },
  { q: "How big is this market?", a: "Tokenized treasuries exceeded $2 billion in 2025. Industry projections estimate the total tokenized asset market could reach $10-16 trillion by 2030, with treasuries being the largest segment." },
  { q: "Why would this increase XRP's value?", a: "Tokenized treasuries on XRPL increase transaction volume, demonstrate institutional credibility, attract capital to the ecosystem, and drive demand for XRP as the native settlement currency." },
  { q: "Is this different from RLUSD?", a: "Yes. RLUSD is a stablecoin pegged to the US dollar. Tokenized treasuries are yield-bearing instruments — you earn interest from the underlying government bonds. They serve complementary roles in the ecosystem." },
];

export default function XRPAndTokenizedTreasuriesPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP &"
          titleAccent="Tokenized Treasuries"
          subtitle="The $10T+ opportunity: how the XRP Ledger is positioning itself as infrastructure for tokenized US treasuries and real-world assets."
          breadcrumbLabel="XRP & Tokenized Treasuries"
        >
          <div className="mt-5">
            <AuthorByline date={datePublished} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Tokenized treasuries</strong> are one of the biggest opportunities in blockchain. The market exceeded $2B in 2025 and is projected to reach $10T+. The <Link href="/learn/xrp-real-world-assets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger&apos;s native tokenization features</Link> make it a natural home for these instruments — combining institutional compliance, low costs, and instant settlement.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Current Market", value: "$2B+ tokenized treasuries (2025)" },
          { label: "Projected Market", value: "$10-16T by 2030" },
          { label: "XRPL Advantage", value: "Native tokenization, low fees, compliance" },
          { label: "Settlement", value: "Instant vs T+1 traditional" },
          { label: "Accessibility", value: "Fractional ownership, global access" },
          { label: "Yield", value: "Real government bond interest" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Are They" },
          { id: "why-xrpl", label: "Why XRPL" },
          { id: "impact", label: "XRP Impact" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Market" value="$2B+" delay={0} />
          <StatPill label="Target" value="$10T+" delay={0.06} />
          <StatPill label="Settlement" value="Instant" delay={0.12} />
          <StatPill label="Access" value="24/7" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are Tokenized Treasuries?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Tokenized treasuries take traditional US Treasury bonds — the safest investment in the world — and represent them as digital tokens on a blockchain. This unlocks capabilities that traditional bonds can&apos;t offer:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "24/7 Trading", desc: "Buy and sell treasury exposure anytime — no market hours, no waiting for T+1 settlement" },
                { title: "Fractional Ownership", desc: "Own $10 worth of treasuries instead of the $1,000 minimum for traditional T-bills" },
                { title: "Instant Settlement", desc: "Transactions settle in seconds on blockchain vs next-day in traditional markets" },
                { title: "Global Access", desc: "Anyone with an internet connection can access US treasury yields" },
                { title: "DeFi Composability", desc: "Use tokenized treasuries as collateral, in lending protocols, or in yield strategies" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="why-xrpl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why XRPL for Tokenized Treasuries</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Native Tokenization", desc: "XRPL has built-in token issuance via trust lines and Multi-Purpose Tokens (MPTs) — no smart contracts needed." },
                { title: "Compliance Features", desc: "Clawback, authorized trust lines, and freeze capabilities meet regulatory requirements for securities." },
                { title: "Institutional Track Record", desc: "100+ financial institutions already on Ripple's network — the trust infrastructure exists." },
                { title: "Low Costs", desc: "Sub-cent transaction fees make high-frequency treasury trading and settlement economical." },
                { title: "RLUSD Integration", desc: "Ripple's regulated stablecoin provides the USD settlement layer alongside tokenized treasuries." },
                { title: "Proven Scale", desc: "XRPL processes millions of transactions daily with 12+ years of uninterrupted operation." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on XRP</h2>
            <div className="mt-5">
              <HighlightBox title="Why This Matters for XRP Price" variant="accent" large>
                <p>Tokenized treasuries on XRPL increase transaction volume, attract institutional capital, and demonstrate real-world utility. As trillions in assets migrate to blockchain settlement, XRP benefits as the native currency for fees, liquidity, and bridge transactions on the ledger.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-real-world-assets", label: "Real World Assets", desc: "RWA tokenization on XRPL" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise-grade storage" },
              { href: "/learn/xrp-and-banks", label: "XRP & Banks", desc: "The institutional thesis" },
              { href: "/learn/xrpl-trust-lines-explained", label: "Trust Lines", desc: "How XRPL tokens work" },
              { href: "/learn/xrp-iso-20022", label: "ISO 20022", desc: "Banking standard compliance" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Tokenization Revolution"
          description="Trillions in assets are moving to blockchain. XRPL is positioning to capture its share."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-real-world-assets"
          secondaryLabel="Explore RWAs"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}

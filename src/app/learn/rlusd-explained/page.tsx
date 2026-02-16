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
  title: "RLUSD Explained: Ripple's Stablecoin That Could Flip USDC | AllAboutXRP",
  description:
    "What is RLUSD? Ripple's USD stablecoin runs on XRPL and Ethereum, is NY DFS approved, and is growing fast. Full guide to how RLUSD works and why it matters.",
  keywords: ["RLUSD", "Ripple stablecoin", "RLUSD explained", "RLUSD vs USDC", "Ripple USD stablecoin"],
  openGraph: {
    title: "RLUSD Explained: Ripple's Stablecoin That Could Flip USDC",
    description: "RLUSD is Ripple's NY DFS-approved stablecoin on XRPL and Ethereum. Here's everything you need to know.",
    url: "https://allaboutxrp.com/learn/rlusd-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "RLUSD: Ripple's Stablecoin Explained | AllAboutXRP",
    description: "NY DFS approved, dual-chain, institutional-grade. Why RLUSD could challenge USDC and USDT.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/rlusd-explained" },
};

const schemas = [
  buildArticleSchema({
    headline: "RLUSD: Ripple's Stablecoin That Could Flip USDC",
    description: "A comprehensive guide to RLUSD — Ripple's USD stablecoin, how it works on XRPL and Ethereum, regulatory advantages, and growth trajectory.",
    url: "https://allaboutxrp.com/learn/rlusd-explained",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "RLUSD Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/rlusd-explained" }),
  buildFAQSchema([
    { question: "What is RLUSD?", answer: "RLUSD is Ripple's USD-pegged stablecoin, approved by the New York Department of Financial Services (NY DFS). It runs on both the XRP Ledger and Ethereum, backed 1:1 by USD deposits and US Treasury bills. It's designed for institutional cross-border payments and DeFi." },
    { question: "Is RLUSD safe?", answer: "RLUSD is one of the most regulated stablecoins in the market. It's approved by the NY DFS (the same regulator that oversees major US banks), backed 1:1 by USD and US Treasuries with regular attestations, and issued by Ripple — a company valued at $11B+." },
    { question: "How does RLUSD compare to USDC?", answer: "Both are regulated USD stablecoins, but RLUSD has advantages: it runs natively on XRPL (faster and cheaper than Ethereum), is integrated into Ripple's payment network of 300+ institutions, and benefits from Ripple's enterprise relationships. USDC has a much larger market cap and broader DeFi adoption." },
    { question: "Does RLUSD help XRP's price?", answer: "Yes, indirectly. RLUSD on the XRPL creates demand for XRP through DEX trading pairs, increases XRPL network activity, and brings new institutions into Ripple's ecosystem who may also adopt ODL/XRP for settlement." },
  ]),
];

const faqItems = [
  { q: "What is RLUSD?", a: "RLUSD is Ripple's USD-pegged stablecoin, approved by the New York Department of Financial Services. It runs on both the XRP Ledger and Ethereum, backed 1:1 by USD deposits and US Treasury bills." },
  { q: "Is RLUSD safe?", a: "RLUSD is one of the most regulated stablecoins available. NY DFS approval means it meets the same standards as major US banks. It's fully backed by USD and US Treasuries with regular third-party attestations." },
  { q: "How does RLUSD compare to USDC?", a: "Both are regulated USD stablecoins. RLUSD's advantages: native XRPL support (faster/cheaper), integration into Ripple's 300+ institution network, and enterprise focus. USDC's advantages: much larger market cap, broader DeFi adoption, and longer track record." },
  { q: "Does RLUSD compete with XRP?", a: "No — they're complementary. XRP is a bridge currency for instant settlement with price appreciation potential. RLUSD is a stable store of value for institutions wanting USD exposure on-chain. Both run on XRPL and increase ecosystem activity." },
  { q: "Where can I buy RLUSD?", a: "RLUSD is available on major exchanges including the XRPL's native DEX, and is integrated into Ripple's institutional payment products. Check Ripple's official website for the latest list of supported platforms." },
];

export default function RLUSDExplainedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="RLUSD: Ripple's Stablecoin"
          titleAccent="That Could Flip USDC"
          subtitle="Ripple launched RLUSD — a NY DFS-approved, dual-chain stablecoin that's growing faster than any stablecoin in history. Here's everything you need to know about why it matters for XRP and the broader market."
          breadcrumbLabel="RLUSD Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">RLUSD</strong> is Ripple&apos;s USD stablecoin — fully backed by USD and US Treasuries, approved by the <strong className="text-text-primary">NY Department of Financial Services</strong>, and running on both XRPL and Ethereum. It&apos;s designed for institutional use within Ripple&apos;s payment network but also available for DeFi. RLUSD hit $1.5B+ market cap faster than any previous stablecoin, and it complements (not competes with) <Link href="/learn/xrp-use-cases" className="text-xrp-accent underline decoration-xrp-accent/30">XRP&apos;s role</Link> as a bridge currency.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Issuer", value: "Ripple Labs" },
          { label: "Regulator", value: "NY DFS (approved)" },
          { label: "Chains", value: "XRP Ledger + Ethereum" },
          { label: "Backing", value: "1:1 USD + US Treasuries" },
          { label: "Market Cap", value: "$1.5B+ (and growing)" },
          { label: "Launch", value: "December 2024" },
          { label: "Use Case", value: "Institutional payments + DeFi" },
          { label: "Attestations", value: "Monthly third-party audits" },
        ]} />

        <SectionNav items={[
          { id: "what-is-rlusd", label: "What Is RLUSD" },
          { id: "how-it-works", label: "How It Works" },
          { id: "vs-competitors", label: "vs USDC/USDT" },
          { id: "regulatory", label: "Regulatory Edge" },
          { id: "xrp-synergy", label: "XRP Synergy" },
          { id: "growth", label: "Growth" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Market Cap" value="$1.5B+" delay={0} />
          <StatPill label="Chains" value="XRPL + ETH" delay={0.06} />
          <StatPill label="Regulator" value="NY DFS" delay={0.12} />
          <StatPill label="Growth" value="Fastest ever" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-is-rlusd">
            <h2 className="text-2xl font-bold text-text-primary">What Is RLUSD?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD (Ripple USD) is a <strong className="text-text-primary">fiat-backed stablecoin</strong> pegged 1:1 to the US dollar. Each RLUSD token is backed by a combination of US dollar deposits in segregated bank accounts and short-term US Treasury bills. Ripple publishes monthly third-party attestation reports verifying the reserves.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              What makes RLUSD unique is its <strong className="text-text-primary">dual-chain architecture</strong>: it exists natively on both the XRP Ledger and Ethereum. On the XRPL, RLUSD benefits from 3-5 second settlement and sub-cent fees. On Ethereum, it taps into the larger DeFi ecosystem with $50B+ in TVL.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD launched in December 2024 with approval from the <strong className="text-text-primary">New York Department of Financial Services</strong> — the most stringent financial regulator in the US and arguably the world. This gives RLUSD a regulatory advantage that most stablecoins don&apos;t have.
            </p>
          </RevealSection>

          <RevealSection id="how-it-works" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How RLUSD Works</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Minting", desc: "Institutions deposit USD with Ripple. RLUSD is minted 1:1 on the requested chain (XRPL or Ethereum)." },
                { title: "Redemption", desc: "RLUSD can be redeemed for USD at any time. Ripple processes redemptions through its banking partners." },
                { title: "Cross-Chain", desc: "RLUSD can be bridged between XRPL and Ethereum, giving users flexibility to move between ecosystems." },
                { title: "Settlement", desc: "On XRPL: 3-5 seconds, <$0.01. On Ethereum: 12-15 seconds, variable gas fees." },
                { title: "Reserves", desc: "Backed by USD in segregated accounts + short-term US Treasuries. Monthly attestations by independent accounting firm." },
                { title: "Integration", desc: "Built into Ripple Payments, enabling institutions to settle in RLUSD alongside or instead of XRP." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="vs-competitors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">RLUSD vs USDC vs USDT</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "RLUSD", "USDC", "USDT"]}
                rows={[
                  ["Issuer", "Ripple Labs", "Circle", "Tether"],
                  ["Regulation", "NY DFS approved", "State money transmitter", "Limited (offshore)"],
                  ["Chains", "XRPL + Ethereum", "8+ chains", "12+ chains"],
                  ["Market Cap", "$1.5B+", "~$45B", "~$140B"],
                  ["Backing", "USD + US Treasuries", "USD + US Treasuries", "Mixed (commercial paper, etc.)"],
                  ["Attestations", "Monthly (Big 4)", "Monthly (Grant Thornton)", "Quarterly"],
                  ["Institutional Network", "300+ via RippleNet", "Limited", "Minimal"],
                  ["Native DEX", "Yes (XRPL)", "No", "No"],
                  ["Settlement Speed", "3-5 sec (XRPL)", "Chain dependent", "Chain dependent"],
                  ["Key Advantage", "Enterprise integration", "DeFi adoption", "Market dominance"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="RLUSD's Unfair Advantage" variant="accent">
                <p>RLUSD doesn&apos;t need to match USDT&apos;s $140B market cap to be transformative. Its power is <strong className="text-text-primary">distribution</strong>: Ripple already has 300+ financial institution relationships. Every RippleNet partner is a potential RLUSD user. No other stablecoin issuer has an institutional sales team and existing banking relationships of this scale.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="regulatory" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Regulatory Edge</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD&apos;s NY DFS approval is a significant competitive moat. The NY DFS oversees Wall Street&apos;s biggest banks and has the most stringent regulatory standards in the US. This approval means:
            </p>
            <div className="mt-6">
              <IconList items={[
                { title: "Bank-grade compliance", desc: "RLUSD meets the same reserve and reporting standards as NY-regulated banks and trust companies." },
                { title: "Institutional trust", desc: "Compliance teams at major banks are far more comfortable with a NY DFS-approved stablecoin than offshore alternatives." },
                { title: "US market access", desc: "As US stablecoin regulation tightens, RLUSD is already compliant — while competitors may need to restructure." },
                { title: "Reserve transparency", desc: "NY DFS requires rigorous reserve verification, giving users confidence in the 1:1 backing." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="xrp-synergy" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How RLUSD Helps XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD doesn&apos;t compete with XRP — it complements it. Here&apos;s how:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "XRPL Activity", desc: "More RLUSD usage means more transactions on XRPL, increasing network value and XRP burn." },
                { title: "DEX Trading Pairs", desc: "RLUSD/XRP becomes a major trading pair on the XRPL DEX, creating constant demand for both assets." },
                { title: "Institutional On-Ramp", desc: "Banks uncomfortable with XRP's volatility can start with RLUSD, then graduate to ODL/XRP." },
                { title: "Ecosystem Growth", desc: "A thriving stablecoin brings DeFi developers, liquidity providers, and users to XRPL — all of which benefit XRP." },
              ]} />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Flywheel Effect" variant="success">
                <p>More RLUSD → more XRPL activity → more DEX volume → more <Link href="/learn/xrp-use-cases" className="text-xrp-accent underline decoration-xrp-accent/30">XRP utility</Link> → more developers → more products → more RLUSD demand. Ripple is building an <strong className="text-text-primary">ecosystem flywheel</strong> where every product reinforces the others.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="growth" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Growth Trajectory</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              RLUSD hit <strong className="text-text-primary">$1.5 billion in market cap</strong> within months of launch — faster than any previous stablecoin including USDC and USDT. This growth is driven by:
            </p>
            <div className="mt-6">
              <IconList items={[
                { title: "Institutional demand", desc: "RippleNet partners adopting RLUSD for settlement rather than pre-funding nostro accounts with traditional USD." },
                { title: "DeFi integration", desc: "RLUSD on Ethereum being integrated into major DeFi protocols for lending, borrowing, and liquidity provision." },
                { title: "XRPL DeFi growth", desc: "The XRPL's native AMM and DEX providing yield opportunities for RLUSD holders." },
                { title: "Regulatory flight to quality", desc: "Institutions moving away from less-regulated stablecoins toward NY DFS-approved alternatives." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-stablecoin-ecosystem", label: "XRP Stablecoin Ecosystem", desc: "The bigger picture" },
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "DeFi on the XRP Ledger" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Institutional adoption" },
              { href: "/learn/xrp-vs-swift", label: "XRP vs SWIFT", desc: "Cross-border payments" },
              { href: "/learn/xrp-escrow-explained", label: "XRP Escrow", desc: "Understanding supply" },
              { href: "/learn/xrp-price-potential", label: "XRP Price Potential", desc: "Impact on price" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Stablecoin Revolution"
          description="RLUSD is just one piece of Ripple's ecosystem. Explore how XRP, RLUSD, and institutional partnerships are creating a new financial infrastructure."
          primaryHref="/learn/banks-using-xrp"
          primaryLabel="Banks Using XRP →"
          secondaryHref="/learn/xrpl-defi"
          secondaryLabel="XRPL DeFi"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, NY DFS, CoinMarketCap, DefiLlama.</em>
        </p>
      </div>
    </>
  );
}

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
  robots: { index: false, follow: true },
  title: "XRP vs Hedera (HBAR): Enterprise Crypto Comparison | AllAboutXRP",
  description:
    "Compare XRP vs Hedera (HBAR) — two enterprise-focused crypto projects. Speed, fees, governance, ISO 20022, and institutional adoption compared.",
  keywords: ["XRP vs Hedera", "XRP vs HBAR", "Ripple vs Hedera", "HBAR comparison", "enterprise crypto comparison"],
  openGraph: {
    title: "XRP vs Hedera: Enterprise Crypto Face-Off",
    description: "Two enterprise-focused networks with ISO 20022 compliance. How do XRP and Hedera actually compare?",
    url: "https://allaboutxrp.com/learn/xrp-vs-hedera",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP vs Hedera (HBAR)", description: "Enterprise crypto comparison." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-vs-hedera" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP vs Hedera (HBAR): Enterprise Crypto Comparison", description: "Comparison of XRP and Hedera for enterprise use, covering speed, governance, ISO 20022, and institutional adoption.", url: "https://allaboutxrp.com/learn/xrp-vs-hedera", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP vs Hedera" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-vs-hedera" }),
  buildFAQSchema([
    { question: "What is the difference between XRP and Hedera?", answer: "XRP (Ripple) focuses on cross-border payments for banks using the XRP Ledger and On-Demand Liquidity. Hedera (HBAR) is a general-purpose enterprise distributed ledger using hashgraph consensus, governed by a council of major corporations. Both are ISO 20022 compatible, but XRP has far more institutional adoption for payments while Hedera targets broader enterprise use cases." },
    { question: "Which is faster, XRP or Hedera?", answer: "Both are very fast. XRP settles in 3-5 seconds with finality. Hedera achieves finality in 3-5 seconds as well. Hedera claims higher theoretical TPS (10,000+) vs XRP's 1,500+, but real-world payment throughput is comparable for most use cases." },
    { question: "Is XRP or Hedera better for payments?", answer: "XRP is significantly better positioned for payments. Ripple has 300+ financial institution partnerships, live payment corridors in 55+ countries, and On-Demand Liquidity specifically designed for cross-border settlement. Hedera's payment capabilities exist but lack the same institutional adoption and payment-specific infrastructure." },
    { question: "Are both XRP and Hedera ISO 20022 compliant?", answer: "Both are listed among ISO 20022 compatible cryptocurrencies. XRP has deeper native integration through RippleNet's messaging infrastructure and the XRPL's transaction memo fields. Hedera's compatibility is at the data format level." },
    { question: "Which has a larger market cap, XRP or Hedera?", answer: "XRP has a significantly larger market cap (~$110 billion) compared to Hedera (~$8-10 billion). XRP is consistently a top-5 crypto by market cap, while Hedera typically ranks in the top 20-30." },
  ]),
];

const faqItems = [
  { q: "What's the difference between XRP and Hedera?", a: "XRP focuses on cross-border bank payments with 300+ institutional partners. Hedera is a general-purpose enterprise DLT governed by major corporations. Both have ISO 20022 compatibility." },
  { q: "Which is faster?", a: "Both settle in 3-5 seconds. Hedera claims higher theoretical TPS (10,000+) vs XRP's 1,500+, but real-world throughput is comparable." },
  { q: "Which is better for payments?", a: "XRP by far — 300+ bank partnerships, live ODL corridors, and payment-specific infrastructure. Hedera lacks equivalent payment adoption." },
  { q: "Both ISO 20022?", a: "Yes, both are listed as ISO 20022 compatible. XRP has deeper native integration through RippleNet." },
  { q: "Market cap comparison?", a: "XRP ~$110B (top 5) vs Hedera ~$8-10B (top 20-30). XRP is roughly 10-14x larger." },
];

export default function XRPvsHederaPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP vs Hedera (HBAR)" titleAccent="Enterprise Crypto Face-Off" subtitle="Two enterprise-focused networks, both ISO 20022 compliant, both claiming institutional backing. But they have very different approaches and adoption levels." breadcrumbLabel="XRP vs Hedera">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP and Hedera</strong> are both enterprise-focused and <Link href="/learn/xrp-iso-20022" className="text-xrp-accent underline decoration-xrp-accent/30">ISO 20022 compliant</Link>, but they serve different primary purposes. <strong className="text-text-primary">XRP</strong> dominates <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payments</Link> with 300+ bank partnerships and <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link>. <strong className="text-text-primary">Hedera</strong> targets broader enterprise DLT use cases with its corporate governing council. XRP has ~10-14x larger market cap and far more payment-specific adoption.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "XRP Market Cap", value: "~$110 billion" },
          { label: "HBAR Market Cap", value: "~$8-10 billion" },
          { label: "XRP Speed", value: "3-5 seconds" },
          { label: "HBAR Speed", value: "3-5 seconds" },
          { label: "XRP Partners", value: "300+ financial institutions" },
          { label: "HBAR Council", value: "~30 governing members" },
          { label: "XRP Focus", value: "Cross-border payments" },
          { label: "HBAR Focus", value: "Enterprise DLT (general)" },
        ]} />

        <SectionNav items={[
          { id: "comparison", label: "Full Comparison" },
          { id: "technology", label: "Technology" },
          { id: "governance", label: "Governance" },
          { id: "adoption", label: "Adoption" },
          { id: "investment", label: "Investment View" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">XRP vs Hedera: Full Comparison</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Hedera (HBAR)"]}
                rows={[
                  ["Founded", "2012", "2018"],
                  ["Consensus", "Federated Consensus (UNL)", "Hashgraph (aBFT)"],
                  ["Speed", "3-5 seconds", "3-5 seconds"],
                  ["TPS", "1,500+", "10,000+ (claimed)"],
                  ["Fee", "~$0.0005", "~$0.001"],
                  ["Market Cap", "~$110B", "~$8-10B"],
                  ["Primary Focus", "Cross-border payments", "Enterprise DLT"],
                  ["ISO 20022", "Native compliance", "Compatible"],
                  ["Governance", "Open (independent validators)", "Corporate council"],
                  ["Smart Contracts", "Hooks + EVM sidechain", "Solidity (EVM compatible)"],
                  ["Institutional Partners", "300+ banks/FIs", "~30 council members"],
                  ["Stablecoin", "RLUSD", "USDC (on Hedera)"],
                  ["Open Source", "Yes", "Partially"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="technology" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Technology Differences</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP uses a <Link href="/learn/how-does-xrp-work" className="text-xrp-accent underline decoration-xrp-accent/30">federated consensus mechanism</Link> where <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">independent validators</Link> agree on transaction validity. Hedera uses hashgraph — a directed acyclic graph (DAG) consensus algorithm that achieves asynchronous Byzantine Fault Tolerance (aBFT).
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "XRP: Proven at Scale", desc: "10+ years of operation, processing billions in payments. Battle-tested with 300+ institutional partners." },
                { title: "Hedera: Theoretical Advantage", desc: "Hashgraph has superior theoretical properties (aBFT). But real-world payment adoption lags significantly behind XRP." },
                { title: "XRP: Payment-Optimized", desc: "Every aspect of the XRPL is designed for payment efficiency — DEX, AMM, escrow, payment channels." },
                { title: "Hedera: General-Purpose", desc: "Hedera targets tokenization, supply chain, consensus services, and smart contracts beyond just payments." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="governance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Governance: Open Network vs Corporate Council</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A key philosophical difference: XRP&apos;s network is governed by <strong className="text-text-primary">independent validators anyone can run</strong>. Hedera is governed by a <strong className="text-text-primary">corporate council</strong> of major companies (Google, IBM, Boeing, etc.). Each approach has trade-offs:
            </p>

            <div className="mt-6">
              <HighlightBox title="XRP's Open Governance" variant="accent">
                <p>Anyone can run an XRPL validator. The network is permissionless and decentralized with 150+ independent validators. <Link href="/learn/ripple-vs-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple doesn&apos;t control</Link> the network. This makes XRP more censorship-resistant but potentially slower to coordinate upgrades.</p>
              </HighlightBox>
            </div>
            <div className="mt-4">
              <HighlightBox title="Hedera's Council Governance" variant="info">
                <p>Hedera is governed by ~30 major corporations who run the consensus nodes. This provides enterprise credibility but limits decentralization. Council members rotate, and no single entity can dominate — but it&apos;s fundamentally a permissioned governance model.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="adoption" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Adoption Comparison</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In terms of real-world institutional adoption — particularly for payments — XRP has a <strong className="text-text-primary">commanding lead</strong>. Ripple&apos;s <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">300+ partnerships</Link>, live <Link href="/learn/banks-using-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">payment corridors</Link>, and pending <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">ETF applications</Link> demonstrate institutional traction that Hedera doesn&apos;t match.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "XRP: 300+ institutional partners", desc: "Live payment corridors in 55+ countries. Real money flowing through ODL daily." },
                { title: "Hedera: ~30 council members", desc: "Enterprise credibility but fewer deployed payment solutions at scale." },
                { title: "XRP: $110B+ market cap", desc: "Top 5 crypto. Deep liquidity on all major exchanges." },
                { title: "Hedera: $8-10B market cap", desc: "Top 20-30 crypto. Growing but significantly smaller." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="investment" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Investment Perspective</h2>
            <div className="mt-6">
              <HighlightBox title="Not Financial Advice" variant="warning">
                <p>Both XRP and Hedera have different risk/reward profiles. XRP has stronger payment adoption, larger market cap, and clearer regulatory status. Hedera offers enterprise governance credibility and potentially higher upside from a smaller base. This comparison is educational only. See <Link href="/learn/xrp-price-prediction" className="text-xrp-accent underline decoration-xrp-accent/30">XRP price predictions</Link> for analysis.</p>
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
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Side-by-side comparison" },
              { href: "/learn/xrp-vs-ethereum", label: "XRP vs Ethereum", desc: "Payments vs smart contracts" },
              { href: "/learn/xrp-vs-solana", label: "XRP vs Solana", desc: "Speed & fees compared" },
              { href: "/learn/xrp-vs-stellar", label: "XRP vs Stellar", desc: "Cross-border rivals" },
              { href: "/learn/xrp-vs-cardano", label: "XRP vs Cardano", desc: "Full comparison" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Compare More Cryptos" description="See how XRP compares to Bitcoin, Ethereum, Stellar, and traditional banking." primaryHref="/learn/xrp-vs-bitcoin" primaryLabel="XRP vs Bitcoin →" secondaryHref="/learn/xrp-vs-stellar" secondaryLabel="XRP vs Stellar" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Hedera.com, CoinMarketCap.</em></p>
      </div>
    </>
  );
}

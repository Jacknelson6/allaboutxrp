import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "XRP vs Sui (SUI): Next-Gen Blockchain Comparison (2026) | AllAboutXRP",
  description: "XRP vs Sui — enterprise payments veteran vs next-gen L1. Speed, architecture, DeFi, and developer ecosystems compared.",
  keywords: ["XRP vs Sui", "XRP vs SUI", "Ripple vs Sui", "SUI comparison"],
  openGraph: {
    title: "XRP vs Sui: Veteran vs Next-Gen",
    description: "Enterprise payment network vs cutting-edge L1. How do they compare?",
    url: "https://allaboutxrp.com/learn/xrp-vs-sui",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP vs Sui (SUI)", description: "Next-gen blockchain comparison." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-vs-sui" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP vs Sui (SUI): Next-Gen Blockchain Comparison (2026)", description: "Compare XRP and Sui — enterprise payments veteran vs next-gen L1 built by ex-Meta engineers.", url: "https://allaboutxrp.com/learn/xrp-vs-sui", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP vs Sui" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-vs-sui" }),
  buildFAQSchema([
    { question: "What is the difference between XRP and Sui?", answer: "XRP is a 12-year-old payment network with 300+ institutional partners focused on cross-border settlement. Sui is a next-generation L1 blockchain built by ex-Meta (Diem/Libra) engineers, using the Move programming language and object-centric data model for high-performance DeFi and gaming." },
    { question: "Which is faster, XRP or Sui?", answer: "Sui claims higher theoretical throughput (100,000+ TPS) compared to XRP's 1,500+ TPS. However, XRP's 3-5 second finality is proven over 10+ years. Sui achieves sub-second finality for simple transactions but is much newer and less battle-tested." },
    { question: "Is Sui a competitor to XRP?", answer: "Not directly. Sui targets DeFi, gaming, and general-purpose smart contracts using the Move language. XRP targets institutional cross-border payments. They operate in different segments, though both benefit from fast, cheap transactions." },
    { question: "Who built Sui?", answer: "Sui was built by Mysten Labs, founded by ex-Meta engineers who worked on the Diem (formerly Libra) blockchain project. The team brings deep expertise in distributed systems and the Move programming language." },
    { question: "Which is a better investment?", answer: "XRP offers established institutional adoption, regulatory clarity, and pending ETF filings. Sui offers exposure to next-gen blockchain technology with higher potential upside from a smaller market cap but significantly more risk as an unproven newer project. Not financial advice." },
  ]),
];

const faqItems = [
  { q: "What's the difference?", a: "XRP: 12-year payment veteran, 300+ bank partners. Sui: next-gen L1 by ex-Meta engineers using Move language for DeFi and gaming." },
  { q: "Which is faster?", a: "Sui claims 100,000+ TPS (theoretical). XRP: 1,500+ TPS. But XRP's 3-5 sec finality is proven over 10+ years." },
  { q: "Are they competitors?", a: "Not directly — XRP targets institutional payments, Sui targets DeFi/gaming. Different segments." },
  { q: "Who built Sui?", a: "Mysten Labs — ex-Meta engineers from the Diem/Libra project. Deep distributed systems expertise." },
  { q: "Which is better to invest in?", a: "XRP: established, regulated, ETF filings. Sui: higher risk/reward, newer, less proven. Not financial advice." },
];

export default function XRPvsSuiPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP vs Sui (SUI)" titleAccent="Veteran vs Next-Gen" subtitle="XRP has been powering institutional payments for over a decade. Sui is a cutting-edge L1 built by ex-Meta engineers. Can the newcomer challenge the veteran?" breadcrumbLabel="XRP vs Sui">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP</strong> is a battle-tested <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">payment network</Link> with 300+ institutional partners and ~$110B market cap. <strong className="text-text-primary">Sui</strong> is a next-generation L1 blockchain (~$8-10B market cap) built by ex-Meta engineers, using the Move language and an object-centric data model. They target different markets — XRP for payments, Sui for DeFi and gaming.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "XRP Market Cap", value: "~$110 billion" },
          { label: "SUI Market Cap", value: "~$8-10 billion" },
          { label: "XRP Launched", value: "2012 (12+ years)" },
          { label: "SUI Launched", value: "2023 (~2 years)" },
          { label: "XRP Speed", value: "3-5 sec (proven)" },
          { label: "SUI Speed", value: "Sub-second (claimed)" },
          { label: "XRP Language", value: "Hooks (XRPL native)" },
          { label: "SUI Language", value: "Move (from Meta/Diem)" },
        ]} />

        <SectionNav items={[
          { id: "comparison", label: "Full Comparison" },
          { id: "technology", label: "Technology" },
          { id: "ecosystem", label: "Ecosystem" },
          { id: "investment", label: "Investment View" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">XRP vs Sui: Full Comparison</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Sui (SUI)"]}
                rows={[
                  ["Founded", "2012", "2023"],
                  ["Team", "Ripple Labs", "Mysten Labs (ex-Meta)"],
                  ["Consensus", "Federated Consensus", "Mysticeti (DAG-based BFT)"],
                  ["Speed", "3-5 seconds", "Sub-second (simple tx)"],
                  ["TPS", "1,500+", "100,000+ (theoretical)"],
                  ["Fee", "~$0.0005", "~$0.001-0.01"],
                  ["Market Cap", "~$110B", "~$8-10B"],
                  ["Smart Contracts", "Hooks + EVM sidechain", "Move language (native)"],
                  ["Data Model", "Account-based", "Object-centric"],
                  ["Primary Focus", "Cross-border payments", "DeFi, gaming, general L1"],
                  ["Institutional Partners", "300+ banks/FIs", "Growing (newer project)"],
                  ["DeFi TVL", "~$100M", "~$500M-1B"],
                  ["Battle-Tested", "10+ years", "~2 years"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="technology" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Technology: Proven vs Cutting-Edge</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Sui introduces genuinely novel technology — the object-centric data model and Move programming language enable parallel transaction processing that wasn&apos;t possible with traditional blockchain architectures. <Link href="/learn/how-does-xrp-work" className="text-xrp-accent underline decoration-xrp-accent/30">XRP&apos;s architecture</Link> is simpler but extremely well-proven for its payment use case.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "XRP: Proven Reliability", desc: "10+ years of continuous operation. Billions processed through institutional channels. Battle-tested." },
                { title: "Sui: Technical Innovation", desc: "Object-centric model enables true parallel processing. Move language provides safety guarantees." },
                { title: "XRP: Payment-Optimized", desc: "Every feature designed for payment settlement. DEX, AMM, escrow, payment channels built in." },
                { title: "Sui: General-Purpose Platform", desc: "Built for DeFi, gaming, NFTs, and any application requiring high throughput and low latency." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="ecosystem" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ecosystem &amp; Adoption</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "XRP: 300+ financial institutions", desc: "Mature institutional ecosystem with live payment corridors worldwide." },
                { title: "Sui: Rapidly growing developer community", desc: "Strong VC backing, growing DeFi protocols, and gaming partnerships." },
                { title: "XRP: Regulatory clarity", desc: "Post-SEC settlement. ETF filings. Institutional confidence." },
                { title: "Sui: Ex-Meta pedigree", desc: "Team credibility from Facebook/Meta's blockchain division attracts enterprise interest." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="investment" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Investment Perspective</h2>
            <div className="mt-6">
              <HighlightBox title="Not Financial Advice" variant="warning">
                <p>XRP is the established, lower-risk choice with proven institutional adoption and regulatory clarity. Sui is higher risk/reward — cutting-edge technology with strong team pedigree but only ~2 years of operation. XRP&apos;s ~$110B market cap vs Sui&apos;s ~$8-10B means Sui has more theoretical upside but significantly more execution risk.</p>
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
              { href: "/learn/xrp-vs-solana", label: "XRP vs Solana", desc: "Speed comparison" },
              { href: "/learn/xrp-vs-avalanche", label: "XRP vs Avalanche", desc: "DeFi ecosystems" },
              { href: "/learn/xrp-vs-ethereum", label: "XRP vs Ethereum", desc: "Smart contracts vs payments" },
              { href: "/learn/xrp-vs-hedera", label: "XRP vs Hedera", desc: "Enterprise comparison" },
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "DeFi on XRP Ledger" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="More Crypto Comparisons" description="See how XRP compares to other blockchain platforms." primaryHref="/learn/xrp-vs-solana" primaryLabel="XRP vs Solana →" secondaryHref="/learn/xrp-vs-ethereum" secondaryLabel="XRP vs Ethereum" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Sources: XRPL.org, sui.io, CoinMarketCap, DeFiLlama.</em></p>
      </div>
    </>
  );
}

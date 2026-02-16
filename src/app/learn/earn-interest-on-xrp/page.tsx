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
  title: "How to Earn Interest on XRP: Every Method Compared (2026) | AllAboutXRP",
  description: "Every way to earn interest on XRP in 2026. Lending platforms, XRPL AMM yields, DeFi protocols, and risk ratings for each.",
  keywords: ["earn interest on XRP","XRP interest","XRP yield","XRP passive income","XRP lending"],
  openGraph: { title: "How to Earn Interest on XRP: Every Method Compared (2026)", description: "Every way to earn interest on XRP in 2026. Lending platforms, XRPL AMM yields, DeFi protocols, and risk ratings for each.", url: "https://allaboutxrp.com/learn/earn-interest-on-xrp", type: "article" },
  twitter: { card: "summary_large_image", title: "How to Earn Interest on XRP: Every Method Compared (2026)", description: "Every way to earn interest on XRP in 2026. Lending platforms, XRPL AMM yields, DeFi protocols, and risk ratings for each." },
  alternates: { canonical: "https://allaboutxrp.com/learn/earn-interest-on-xrp" },
};

const schemas = [
  buildArticleSchema({ headline: "How to Earn Interest on XRP: Every Method Compared (2026)", description: "Every way to earn interest on XRP in 2026. Lending platforms, XRPL AMM yields, DeFi protocols, and risk ratings for each.", url: "https://allaboutxrp.com/learn/earn-interest-on-xrp", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Earn Interest on XRP" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/earn-interest-on-xrp" }),
  buildFAQSchema([
    { question: "Best way to earn interest on XRP?", answer: "CeFi lending for ease (2-5%), XRPL AMM for on-chain yield (3-8%), DeFi for max returns with max risk." },
    { question: "Is it safe?", answer: "No method is risk-free. CeFi = counterparty risk. AMM = impermanent loss. Diversify and limit exposure." },
    { question: "How much can I earn?", answer: "2% (conservative CeFi) to 8%+ (AMM/DeFi). Higher yield = higher risk." },
    { question: "Taxes?", answer: "Yes. Interest earned is ordinary income, taxed at your income rate." },
    { question: "Can I keep custody?", answer: "Yes — XRPL AMM pools are on-chain. No middleman." },
  ]),
];

const faqItems = [
  { q: "Best way to earn interest on XRP?", a: "CeFi lending for ease (2-5%), XRPL AMM for on-chain yield (3-8%), DeFi for max returns with max risk." },
  { q: "Is it safe?", a: "No method is risk-free. CeFi = counterparty risk. AMM = impermanent loss. Diversify and limit exposure." },
  { q: "How much can I earn?", a: "2% (conservative CeFi) to 8%+ (AMM/DeFi). Higher yield = higher risk." },
  { q: "Taxes?", a: "Yes. Interest earned is ordinary income, taxed at your income rate." },
  { q: "Can I keep custody?", a: "Yes — XRPL AMM pools are on-chain. No middleman." },
  { q: "What is impermanent loss?", a: "When price ratio of pool tokens changes, you may end up with less than just holding." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Earn Interest on XRP" titleAccent="Every Method Compared (2026)" subtitle="Lending, AMM pools, DeFi — every way to earn passive income on XRP, ranked by risk and reward." breadcrumbLabel="Earn Interest on XRP">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Earn 2-8% APY on XRP via lending platforms, <Link href="/learn/xrp-amm-yield-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AMM pools</Link>, or DeFi. CeFi lending (easiest, 2-5%), AMM (3-8%, on-chain), DeFi (highest risk/reward). Always diversify.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Typical APY", value: "2-8%" },
          { label: "Lowest Risk", value: "CeFi Lending" },
          { label: "Highest Yield", value: "DeFi" },
          { label: "XRPL Native", value: "AMM Pools" },
          { label: "Key Risk", value: "Platform Insolvency" },
          { label: "Tax", value: "Interest = Income" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "cefi", label: "CeFi Lending" },
          { id: "amm", label: "AMM Pools" },
          { id: "defi", label: "DeFi" },
          { id: "risks", label: "Risks" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="CeFi APY" value="2-5%" delay={0.00} />
          <StatPill label="AMM APY" value="3-8%" delay={0.06} />
          <StatPill label="Methods" value="3+" delay={0.12} />
          <StatPill label="Risk" value="Low-High" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Ways to Earn Interest on XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Three main approaches: <Link href="/learn/xrp-lending-platforms" className="text-xrp-accent underline decoration-xrp-accent/30">CeFi lending</Link>, <Link href="/learn/xrp-amm-yield-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AMM pools</Link>, and DeFi protocols.</p>
            <div className="mt-6"><FeatureGrid columns={3} items={[
              {title:"CeFi Lending",desc:"Deposit on Nexo/YouHodler. Easiest, 2-5% APY."},
              {title:"XRPL AMM",desc:"Provide liquidity on native AMM. 3-8% APY."},
              {title:"DeFi",desc:"Wrapped XRP in DeFi. Higher yield, higher risk."},
            ]} /></div>
          </RevealSection>

          <RevealSection id="cefi" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">CeFi Lending Platforms</h2>
            <div className="mt-6"><DataTable headers={["Platform","APY","Min","Lockup"]} rows={[["Nexo","2-5%","None","Flexible"],["YouHodler","3-4%","$100","Flexible"],["CoinLoan","3-5%","None","30 days"]]} highlightCol={1} /></div>
            <div className="mt-6"><HighlightBox title="💰 Bonus Rates" variant="accent"><p><a href="https://allaboutxrp.com/go/nexo" className="text-xrp-accent underline">Nexo</a> | <a href="https://allaboutxrp.com/go/youhodler" className="text-xrp-accent underline">YouHodler</a></p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="amm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL AMM Pools</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Earn trading fees on the <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. No middleman, fully on-chain.</p>
            <div className="mt-6"><IconList items={[
              {title:"XRP/RLUSD",desc:"Stablecoin pair. Lower IL. Most popular."},
              {title:"XRP/USD",desc:"Gateway-backed. Established."},
              {title:"Token Pools",desc:"Higher fees but more IL risk."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="defi" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">DeFi Protocols</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Wrapped XRP in DeFi ecosystems. Higher yields, smart contract risk.</p>
            <div className="mt-6"><HighlightBox title="⚠️ Risk Warning" variant="warning"><p>Smart contract risk. Only use audited protocols. Never deposit more than you can lose.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="risks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk Comparison</h2>
            <div className="mt-6"><DataTable headers={["Method","Return","Risk","Custody"]} rows={[["CeFi","2-5%","Medium","Platform"],["AMM","3-8%","Medium","On-chain"],["DeFi","5-15%+","High","Contract"]]} highlightCol={2} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Interest = <Link href="/learn/xrp-airdrop-taxes" className="text-xrp-accent underline decoration-xrp-accent/30">taxable income</Link>.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-amm-yield-guide", label: "AMM Yield Guide", desc: "Earn LP fees" },
              { href: "/learn/xrp-lending-platforms", label: "Lending Platforms", desc: "Compare lenders" },
              { href: "/learn/xrp-airdrop-taxes", label: "Airdrop Taxes", desc: "Tax on income" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP", desc: "Security guide" },
              { href: "/learn/xrp-tax-loss-harvesting", label: "Tax Harvesting", desc: "Save on taxes" },
              { href: "/learn/xrp-portfolio-trackers", label: "Trackers", desc: "Track holdings" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Earning" description="Choose the right method for your risk tolerance." primaryHref="/learn/xrp-lending-platforms" primaryLabel="Compare Platforms →" secondaryHref="/learn/xrp-amm-yield-guide" secondaryLabel="AMM Guide" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

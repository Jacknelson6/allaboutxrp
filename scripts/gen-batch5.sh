#!/bin/bash
# Generate batch 5 pages (73-100)
BASE="/Users/jacknelson/clawd/projects/allaboutxrp/src/app/learn"

# Helper to create a page directory and write file
write_page() {
  local slug="$1"
  local dir="$BASE/$slug"
  mkdir -p "$dir"
  cat > "$dir/page.tsx"
}

##############################
# 73. earn-interest-on-xrp
##############################
write_page "earn-interest-on-xrp" << 'ENDPAGE'
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
    { question: "What is the best way to earn interest on XRP?", answer: "For most people, CeFi lending platforms offer the best balance of ease and yield at 2-5% APY. XRPL AMM pools offer higher yields but require understanding impermanent loss." },
    { question: "Is earning interest on XRP safe?", answer: "No yield method is risk-free. CeFi platforms carry counterparty risk. AMM pools carry impermanent loss risk. Diversify and never risk more than you can afford to lose." },
    { question: "How much can I earn on XRP?", answer: "Typical yields range from 2% APY on conservative CeFi platforms to 8%+ on AMM pools." },
    { question: "Do I pay taxes on XRP interest?", answer: "Yes. Interest earned on XRP is treated as ordinary income in most jurisdictions." },
    { question: "Can I earn interest without giving up custody?", answer: "Yes — XRPL AMM pools let you earn fees while maintaining on-chain custody." },
  ]),
];

const faqItems = [
  { q: "What is the best way to earn interest on XRP?", a: "For most people, CeFi lending platforms offer the best balance of ease and yield at 2-5% APY. XRPL AMM pools offer higher yields but require understanding impermanent loss." },
  { q: "Is earning interest on XRP safe?", a: "No yield method is risk-free. CeFi platforms carry counterparty risk (platform could fail). AMM pools carry impermanent loss risk. Diversify across methods and never risk more than you can afford to lose." },
  { q: "How much can I earn on XRP?", a: "Typical yields range from 2% APY on conservative CeFi platforms to 8%+ on AMM pools. DeFi protocols may offer higher but with significantly more risk." },
  { q: "Do I pay taxes on XRP interest?", a: "Yes. Interest earned on XRP is treated as ordinary income in most jurisdictions. You owe taxes at your income tax rate on the fair market value when received." },
  { q: "Can I earn interest without giving up custody?", a: "Yes — XRPL AMM pools let you earn fees while maintaining on-chain custody. Your funds stay on the XRP Ledger, not with a centralized company." },
  { q: "What is impermanent loss?", a: "Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes. If XRP price moves significantly vs the paired asset, you may end up with less value than simply holding." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Earn Interest on XRP" titleAccent="Every Method Compared (2026)" subtitle="Lending, AMM pools, DeFi protocols — every way to earn passive income on your XRP holdings, ranked by risk and reward." breadcrumbLabel="Earn Interest on XRP">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>You can earn 2-8% APY on XRP through lending platforms, <Link href="/learn/xrp-amm-yield-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AMM liquidity pools</Link>, and DeFi protocols. Centralized lending (easiest, moderate risk), AMM pools (higher yield, impermanent loss risk), and DeFi (highest yield, highest risk). Always diversify across platforms.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Typical APY", value: "2-8%" },
          { label: "Lowest Risk", value: "CeFi Lending" },
          { label: "Highest Yield", value: "DeFi Protocols" },
          { label: "XRPL Native", value: "AMM Pools" },
          { label: "Key Risk", value: "Platform Insolvency" },
          { label: "Tax Note", value: "Interest = Income" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "cefi", label: "CeFi Lending" },
          { id: "amm", label: "AMM Pools" },
          { id: "defi", label: "DeFi Protocols" },
          { id: "risks", label: "Risks" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="CeFi APY" value="2-5%" delay={0.00} />
          <StatPill label="AMM APY" value="3-8%" delay={0.06} />
          <StatPill label="Methods" value="3+" delay={0.12} />
          <StatPill label="Risk Range" value="Low-High" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Ways to Earn Interest on XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">There are three main approaches to earning yield on your XRP: centralized lending platforms, <Link href="/learn/xrp-amm-yield-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AMM liquidity pools</Link>, and DeFi protocols. Each carries different risk/reward profiles.</p>
            <div className="mt-6"><FeatureGrid columns={3} items={[
              {title:"CeFi Lending",desc:"Deposit XRP on platforms like Nexo or YouHodler. Easiest method, 2-5% APY."},
              {title:"XRPL AMM Pools",desc:"Provide liquidity on the native XRPL AMM. Earn trading fees, 3-8% APY."},
              {title:"DeFi Protocols",desc:"Cross-chain DeFi via wrapped XRP. Higher yield, higher risk."},
            ]} /></div>
          </RevealSection>

          <RevealSection id="cefi" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Centralized Lending Platforms</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">CeFi lending is the simplest way to earn. Deposit XRP, earn interest. Platforms handle the lending. Compare options on our <Link href="/learn/xrp-lending-platforms" className="text-xrp-accent underline decoration-xrp-accent/30">XRP lending platforms</Link> guide.</p>
            <div className="mt-6"><DataTable headers={["Platform","APY","Min Deposit","Lockup"]} rows={[
              ["Nexo","2-5%","None","Flexible"],
              ["YouHodler","3-4%","$100","Flexible"],
              ["CoinLoan","3-5%","None","30 days"],
            ]} highlightCol={1} /></div>
            <div className="mt-6"><HighlightBox title="Affiliate Platforms" variant="accent"><p>Sign up through our links for bonus rates: <a href="https://allaboutxrp.com/go/nexo" className="text-xrp-accent underline">Nexo</a> | <a href="https://allaboutxrp.com/go/youhodler" className="text-xrp-accent underline">YouHodler</a></p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="amm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL AMM Liquidity Pools</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrp-amm-yield-guide" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AMM</Link> lets you earn trading fees by providing liquidity. No middleman — fully on-chain on the <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>.</p>
            <div className="mt-6"><IconList items={[
              {title:"XRP/RLUSD Pool",desc:"Most popular pool. Stablecoin pair = lower impermanent loss."},
              {title:"XRP/USD Pool",desc:"Gateway-backed USD. Established liquidity."},
              {title:"Token Pools",desc:"Higher volatility = higher fees but more IL risk."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="defi" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">DeFi Protocols</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Wrapped XRP can be used across DeFi ecosystems. Higher yields but with smart contract risk, bridge risk, and more complexity. Only for experienced users.</p>
            <div className="mt-6"><HighlightBox title="⚠️ DeFi Risk Warning" variant="warning"><p>DeFi protocols carry smart contract risk. Never deposit more than you can afford to lose. Stick to audited protocols.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="risks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk Comparison</h2>
            <div className="mt-6"><DataTable headers={["Method","Return","Risk Level","Custody"]} rows={[
              ["CeFi Lending","2-5%","Medium","Platform holds"],
              ["XRPL AMM","3-8%","Medium","On-chain"],
              ["DeFi","5-15%+","High","Smart contract"],
            ]} highlightCol={2} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Remember: interest earned on XRP is <Link href="/learn/xrp-airdrop-taxes" className="text-xrp-accent underline decoration-xrp-accent/30">taxable income</Link>. Track your earnings for tax season.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-amm-yield-guide", label: "XRPL AMM Yield Guide", desc: "Earn fees as LP" },
              { href: "/learn/xrp-lending-platforms", label: "XRP Lending Platforms", desc: "Compare lenders" },
              { href: "/learn/xrp-airdrop-taxes", label: "XRP Airdrop Taxes", desc: "Tax on crypto income" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security guide" },
              { href: "/learn/xrp-tax-loss-harvesting", label: "Tax-Loss Harvesting", desc: "Save on taxes" },
              { href: "/learn/xrp-portfolio-trackers", label: "Portfolio Trackers", desc: "Track your holdings" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Earning" description="Choose the right method for your risk tolerance and start earning yield on XRP." primaryHref="/learn/xrp-lending-platforms" primaryLabel="Compare Platforms →" secondaryHref="/learn/xrp-amm-yield-guide" secondaryLabel="AMM Guide" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
ENDPAGE

echo "✅ 73. earn-interest-on-xrp"

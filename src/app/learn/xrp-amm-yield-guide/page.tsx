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
  title: "XRPL AMM Yield Guide: Earn Fees as a Liquidity Provider | AllAboutXRP",
  description: "How much can you earn as an XRPL AMM liquidity provider? Yield calculations, pool selection, and impermanent loss management.",
  keywords: ["XRPL AMM yield","XRPL LP yield","earn fees XRP AMM","XRPL liquidity provider income"],
  openGraph: { title: "XRPL AMM Yield Guide: Earn Fees as a Liquidity Provider", description: "How much can you earn as an XRPL AMM liquidity provider? Yield calculations, pool selection, and impermanent loss management.", url: "https://allaboutxrp.com/learn/xrp-amm-yield-guide", type: "article" },
  twitter: { card: "summary_large_image", title: "XRPL AMM Yield Guide: Earn Fees as a Liquidity Provider", description: "How much can you earn as an XRPL AMM liquidity provider? Yield calculations, pool selection, and impermanent loss management." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-amm-yield-guide" },
};

const schemas = [
  buildArticleSchema({ headline: "XRPL AMM Yield Guide: Earn Fees as a Liquidity Provider", description: "How much can you earn as an XRPL AMM liquidity provider? Yield calculations, pool selection, and impermanent loss management.", url: "https://allaboutxrp.com/learn/xrp-amm-yield-guide", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "AMM Yield Guide" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-amm-yield-guide" }),
  buildFAQSchema([
    { question: "How much can I earn?", answer: "3-8% APY depending on pool volume. Stablecoin pairs: 4-6%." },
    { question: "What is impermanent loss?", answer: "Loss vs holding when price ratios change. Fees can offset it." },
    { question: "Is it safe?", answer: "Native protocol feature — no smart contract risk. But IL remains." },
    { question: "Best pool?", answer: "XRP/RLUSD for low risk. XRP/SOLO for higher yield." },
    { question: "Can I withdraw anytime?", answer: "Yes. No lockup." },
  ]),
];

const faqItems = [
  { q: "How much can I earn?", a: "3-8% APY depending on pool volume. Stablecoin pairs: 4-6%." },
  { q: "What is impermanent loss?", a: "Loss vs holding when price ratios change. Fees can offset it." },
  { q: "Is it safe?", a: "Native protocol feature — no smart contract risk. But IL remains." },
  { q: "Best pool?", a: "XRP/RLUSD for low risk. XRP/SOLO for higher yield." },
  { q: "Can I withdraw anytime?", a: "Yes. No lockup." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRPL AMM Yield Guide" titleAccent="Earn Fees as a Liquidity Provider" subtitle="Provide liquidity on the XRPL AMM — yield calculations, pool selection, impermanent loss." breadcrumbLabel="AMM Yield Guide">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>The XRPL AMM is a native protocol feature. Deposit token pairs, earn trading fees (3-8% APY). XRP/RLUSD is the safest pool. No smart contract risk. Impermanent loss is the main risk.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Launch", value: "2024 (XLS-30)" },
          { label: "APY", value: "3-8%" },
          { label: "Fees", value: "Pro-rata share" },
          { label: "Best Pool", value: "XRP/RLUSD" },
          { label: "IL Risk", value: "Varies" },
          { label: "Custody", value: "On-chain" },
        ]} />

        <SectionNav items={[
          { id: "how", label: "How It Works" },
          { id: "pools", label: "Best Pools" },
          { id: "yield", label: "Yield Math" },
          { id: "il", label: "Impermanent Loss" },
          { id: "start", label: "Getting Started" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="APY" value="3-8%" delay={0.00} />
          <StatPill label="Pools" value="100+" delay={0.06} />
          <StatPill label="Model" value="Trading Fees" delay={0.12} />
          <StatPill label="Speed" value="3-5 sec" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="how">
            <h2 className="text-2xl font-bold text-text-primary">How the XRPL AMM Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XLS-30 amendment built the AMM into the <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> natively. No smart contract risk.</p>
            <div className="mt-6"><IconList items={[
              {title:"Deposit Pair",desc:"Equal value of two tokens (e.g., XRP + RLUSD)."},
              {title:"Earn Fees",desc:"Every trade pays a fee. Your share is proportional."},
              {title:"Withdraw",desc:"Anytime. No lockup. Burn LP tokens."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="pools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Pools</h2>
            <div className="mt-6"><DataTable headers={["Pool","Volume","APY","IL Risk"]} rows={[["XRP/RLUSD","High","4-6%","Low"],["XRP/USD.b","Medium","3-5%","Low"],["XRP/SOLO","Medium","5-8%","Medium"],["XRP/CSC","Low","6-10%","High"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="yield" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Yield Calculation</h2>
            <div className="mt-6"><HighlightBox title="Formula" variant="accent"><p><strong>Daily Yield = Pool Daily Fees × Your Share %</strong><br/>Annual = Daily × 365. Track on <Link href="/learn/xrp-block-explorers" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL explorers</Link>.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="il" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impermanent Loss</h2>
            <div className="mt-6"><DataTable headers={["Price Change","IL"]} rows={[["±25%","0.6%"],["±50%","2.0%"],["±100%","5.7%"],["±200%","13.4%"]]} highlightCol={1} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">If fees &gt; IL, you profit. Stablecoin pairs minimize IL.</p>
          </RevealSection>

          <RevealSection id="start" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Getting Started</h2>
            <div className="mt-6"><IconList items={[
              {title:"Get Xaman Wallet",desc:"AMM-compatible XRPL wallet."},
              {title:"Fund Both Tokens",desc:"Equal value of both."},
              {title:"Add Liquidity",desc:"Select pool → confirm → receive LP tokens."},
              {title:"Monitor",desc:"Track position. Withdraw anytime."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/earn-interest-on-xrp", label: "Earn Interest", desc: "All methods" },
              { href: "/learn/how-to-use-xrpl-dex", label: "XRPL DEX", desc: "On-chain trading" },
              { href: "/learn/rlusd-explained", label: "RLUSD", desc: "Stablecoin" },
              { href: "/learn/what-is-xrp-ledger", label: "XRP Ledger", desc: "Basics" },
              { href: "/learn/xrp-block-explorers", label: "Explorers", desc: "Track pools" },
              { href: "/learn/xrp-lending-platforms", label: "Lending", desc: "CeFi alternative" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Providing Liquidity" description="Earn trading fees on the XRPL." primaryHref="/learn/how-to-use-xrpl-dex" primaryLabel="XRPL DEX →" secondaryHref="/learn/earn-interest-on-xrp" secondaryLabel="All Methods" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

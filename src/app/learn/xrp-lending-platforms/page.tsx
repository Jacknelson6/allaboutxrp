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
  title: "XRP Lending Platforms: Where to Lend XRP (2026) | AllAboutXRP",
  description: "Compare XRP lending platforms in 2026. Interest rates, security, terms, and which platforms are safest for lending your XRP.",
  keywords: ["XRP lending","lend XRP","XRP lending platform","XRP loan","earn XRP lending"],
  openGraph: { title: "XRP Lending Platforms: Where to Lend XRP (2026)", description: "Compare XRP lending platforms in 2026. Interest rates, security, terms, and which platforms are safest for lending your XRP.", url: "https://allaboutxrp.com/learn/xrp-lending-platforms", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Lending Platforms: Where to Lend XRP (2026)", description: "Compare XRP lending platforms in 2026. Interest rates, security, terms, and which platforms are safest for lending your XRP." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-lending-platforms" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Lending Platforms: Where to Lend XRP (2026)", description: "Compare XRP lending platforms in 2026. Interest rates, security, terms, and which platforms are safest for lending your XRP.", url: "https://allaboutxrp.com/learn/xrp-lending-platforms", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Lending Platforms" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-lending-platforms" }),
  buildFAQSchema([
    { question: "Best platform?", answer: "Nexo — up to 5% APY, flexible withdrawals, $375M custody insurance." },
    { question: "Safe?", answer: "Counterparty risk exists. Choose audited, insured platforms. Diversify." },
    { question: "How much interest?", answer: "2-6% APY depending on platform, lockup, and tier." },
    { question: "Taxes?", answer: "Yes. Lending income = ordinary income." },
    { question: "Can I borrow against XRP?", answer: "Yes. Many platforms offer crypto-backed loans." },
  ]),
];

const faqItems = [
  { q: "Best platform?", a: "Nexo — up to 5% APY, flexible withdrawals, $375M custody insurance." },
  { q: "Safe?", a: "Counterparty risk exists. Choose audited, insured platforms. Diversify." },
  { q: "How much interest?", a: "2-6% APY depending on platform, lockup, and tier." },
  { q: "Taxes?", a: "Yes. Lending income = ordinary income." },
  { q: "Can I borrow against XRP?", a: "Yes. Many platforms offer crypto-backed loans." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Lending Platforms" titleAccent="Where to Lend XRP (2026)" subtitle="Compare the safest platforms for lending XRP — rates, security, and terms." breadcrumbLabel="Lending Platforms">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Top platforms: Nexo (up to 5%, flexible), YouHodler (3-4%, Swiss), CoinLoan (3-5%, lockup). Check insurance, audits, and withdrawal terms. Never lend more than you can lose.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Top", value: "Nexo" },
          { label: "APY", value: "2-6%" },
          { label: "Risk", value: "Counterparty" },
          { label: "Insurance", value: "Varies" },
          { label: "Lockup", value: "Flexible-90d" },
          { label: "Tax", value: "Income" },
        ]} />

        <SectionNav items={[
          { id: "compare", label: "Comparison" },
          { id: "nexo", label: "Nexo" },
          { id: "others", label: "Others" },
          { id: "risks", label: "Risks" },
          { id: "tips", label: "Tips" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Platforms" value="5+" delay={0.00} />
          <StatPill label="Best APY" value="~6%" delay={0.06} />
          <StatPill label="Min" value="Varies" delay={0.12} />
          <StatPill label="Withdrawal" value="Flexible" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="compare">
            <h2 className="text-2xl font-bold text-text-primary">Platform Comparison</h2>
            <div className="mt-6"><DataTable headers={["Platform","APY","Lockup","Insurance"]} rows={[["Nexo","2-5%","Flexible","$375M"],["YouHodler","3-4.5%","Flexible","Ledger Vault"],["CoinLoan","3-5%","30-90d","BitGo"],["Ledn","2-4%","Flexible","Proof of reserves"]]} highlightCol={1} /></div>
            <div className="mt-6"><HighlightBox title="💰 Sign Up" variant="accent"><p><a href="https://allaboutxrp.com/go/nexo" className="text-xrp-accent underline">Nexo</a> | <a href="https://allaboutxrp.com/go/youhodler" className="text-xrp-accent underline">YouHodler</a> | <a href="https://allaboutxrp.com/go/coinloan" className="text-xrp-accent underline">CoinLoan</a></p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="nexo" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Nexo</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">SOC 2 audited. $375M insurance. Flexible withdrawal. Loyalty tiers: base ~2%, max ~5%.</p>
            <div className="mt-6"><IconList items={[
              {title:"Flexible",desc:"Withdraw anytime. No lockup."},
              {title:"Insured",desc:"$375M custody insurance."},
              {title:"Tiers",desc:"Hold NEXO tokens for higher rates."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="others" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">YouHodler & Others</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">YouHodler (Swiss-based, Ledger Vault custody, also offers crypto loans). CoinLoan (higher rates with lockup). Ledn (proof of reserves).</p>
          </RevealSection>

          <RevealSection id="risks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risks</h2>
            <div className="mt-6"><IconList items={[
              {title:"Counterparty",desc:"Platforms can fail (Celsius, BlockFi)."},
              {title:"Reserves",desc:"Check proof of reserves / audit history."},
              {title:"Insurance",desc:"What's actually covered? Read the fine print."},
              {title:"Regulatory",desc:"Platform licensing in your jurisdiction."},
            ]} variant="warn" /></div>
          </RevealSection>

          <RevealSection id="tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Safety Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Diversify",desc:"2-3 platforms. Never all on one."},
              {title:"Start Small",desc:"Test withdrawals first."},
              {title:"Monitor",desc:"Follow platform news."},
              {title:"Consider AMM",desc:"Non-custodial alternative."},
            ]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-amm-yield-guide" className="text-xrp-accent underline decoration-xrp-accent/30">AMM guide</Link> | <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">store XRP safely</Link></p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/earn-interest-on-xrp", label: "Earn Interest", desc: "All methods" },
              { href: "/learn/xrp-amm-yield-guide", label: "AMM Guide", desc: "Non-custodial" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP", desc: "Security" },
              { href: "/learn/xrp-tax-loss-harvesting", label: "Tax Harvest", desc: "Save taxes" },
              { href: "/learn/xrp-cost-basis-methods", label: "Cost Basis", desc: "Tax calc" },
              { href: "/learn/best-xrp-exchanges", label: "Exchanges", desc: "Buy XRP" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Lending" description="Compare platforms and earn yield." primaryHref="/learn/earn-interest-on-xrp" primaryLabel="All Methods →" secondaryHref="https://allaboutxrp.com/go/nexo" secondaryLabel="Try Nexo" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

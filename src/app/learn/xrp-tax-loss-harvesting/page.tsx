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
  title: "XRP Tax-Loss Harvesting: Save on Crypto Taxes | AllAboutXRP",
  description: "How to use tax-loss harvesting with XRP. Wash sale rules, timing strategies, and how to reduce your crypto tax bill legally.",
  keywords: ["XRP tax loss harvesting","crypto tax loss harvesting XRP","sell XRP for tax loss"],
  openGraph: { title: "XRP Tax-Loss Harvesting: Save on Crypto Taxes", description: "How to use tax-loss harvesting with XRP. Wash sale rules, timing strategies, and how to reduce your crypto tax bill legally.", url: "https://allaboutxrp.com/learn/xrp-tax-loss-harvesting", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Tax-Loss Harvesting: Save on Crypto Taxes", description: "How to use tax-loss harvesting with XRP. Wash sale rules, timing strategies, and how to reduce your crypto tax bill legally." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-tax-loss-harvesting" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Tax-Loss Harvesting: Save on Crypto Taxes", description: "How to use tax-loss harvesting with XRP. Wash sale rules, timing strategies, and how to reduce your crypto tax bill legally.", url: "https://allaboutxrp.com/learn/xrp-tax-loss-harvesting", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Tax-Loss Harvesting" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-tax-loss-harvesting" }),
  buildFAQSchema([
    { question: "What is tax-loss harvesting?", answer: "Selling XRP at a loss to offset capital gains from other investments, reducing your overall tax bill." },
    { question: "Does the wash sale rule apply to crypto?", answer: "Do not assume every digital asset is outside the rule. Publication 550 addresses stock or securities, while current digital-asset reporting recognizes that some digital assets can be stock or securities. Treatment depends on the asset and transaction." },
    { question: "How much can I offset?", answer: "Unlimited capital gains. If losses exceed gains, deduct up to $3,000/year against ordinary income. Remainder carries forward." },
    { question: "Do I need to actually sell?", answer: "Yes. You must realize the loss by selling or trading. Unrealized losses don't count." },
    { question: "Should I rebuy immediately?", answer: "An immediate repurchase can create tax, economic-substance, and transaction-specific issues. Get advice based on the asset, accounts, and current law before acting." },
  ]),
];

const faqItems = [
  { q: "What is tax-loss harvesting?", a: "Selling XRP at a loss to offset capital gains from other investments, reducing your overall tax bill." },
  { q: "Does the wash sale rule apply to crypto?", a: "Do not apply a blanket answer to every digital asset. The result depends on the asset, transaction, and current law." },
  { q: "How much can I offset?", a: "Unlimited capital gains. If losses exceed gains, deduct up to $3,000/year against ordinary income. Remainder carries forward." },
  { q: "Do I need to actually sell?", a: "Yes. You must realize the loss by selling or trading. Unrealized losses don't count." },
  { q: "Should I rebuy immediately?", a: "Consult a qualified tax professional before an immediate repurchase. Recordkeeping alone does not determine the legal result." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Tax-Loss Harvesting" titleAccent="Save on Crypto Taxes" subtitle="How to use tax-loss harvesting with XRP — wash sale rules, timing, and reducing your crypto tax bill legally." breadcrumbLabel="Tax-Loss Harvesting">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Tax-loss harvesting means realizing a loss that may offset eligible gains, subject to current law and the taxpayer&apos;s facts. Do not assume an immediate XRP repurchase is automatically outside wash-sale or related rules. Review <a href="https://www.irs.gov/publications/p550" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline">IRS Publication 550</a> and consult a qualified tax professional.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Strategy", value: "Sell at loss" },
          { label: "Benefit", value: "Offset gains" },
          { label: "Wash Sale", value: "Transaction-specific" },
          { label: "Offset Limit", value: "$3,000/yr vs income" },
          { label: "Carryforward", value: "Unlimited" },
          { label: "Consult", value: "Tax professional" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Is It?" },
          { id: "how", label: "How To" },
          { id: "wash", label: "Wash Sale" },
          { id: "examples", label: "Examples" },
          { id: "tools", label: "Tools" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Tax Savings" value="Varies" delay={0.00} />
          <StatPill label="Offset" value="$3K/yr + gains" delay={0.06} />
          <StatPill label="Wash Sale" value="Verify" delay={0.12} />
          <StatPill label="Deadline" value="Dec 31" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is Tax-Loss Harvesting?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Selling XRP at a loss to <strong className="text-text-primary">offset capital gains</strong> from other investments. You reduce your tax bill while maintaining your portfolio position by rebuying.</p>
            <div className="mt-6"><HighlightBox title="Example" variant="accent"><p>You have $5,000 in gains from stocks. You sell XRP at a $5,000 loss. Net taxable gain: $0. Tax saved: $1,000-1,850 depending on your rate.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Harvest Losses</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Identify Losses",desc:"Check your XRP positions for unrealized losses."},
              {title:"2. Sell",desc:"Sell the losing position to realize the loss."},
              {title:"3. Offset Gains",desc:"Apply losses against capital gains. Excess offsets up to $3,000 income."},
              {title:"4. Review before rebuying",desc:"An immediate repurchase needs transaction-specific tax advice and documentation."},
              {title:"5. Record Everything",desc:"Document all transactions for tax filing."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="wash" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Wash Sale Rules & Crypto</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Publication 550 describes the wash-sale rule for stock or securities. Digital assets are not all identical, and current reporting recognizes that some can be stock or securities. Confirm the classification and current law for the exact transaction rather than relying on a blanket crypto exception.</p>
            <div className="mt-6"><HighlightBox title="⚠️ Disclaimer" variant="warning"><p>Tax laws change. Proposed legislation may apply wash sale rules to crypto. Always consult a qualified tax professional.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="examples" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Examples</h2>
            <div className="mt-6"><DataTable headers={["Scenario","Gains","XRP Loss","Net Taxable","Tax Saved (24%)"]} rows={[["Offset gains","$10,000","-$10,000","$0","$2,400"],["Partial offset","$10,000","-$5,000","$5,000","$1,200"],["Offset income","$0","-$5,000","-$3,000 (cap)","$720"]]} highlightCol={4} /></div>
          </RevealSection>

          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tools</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Use <Link href="/learn/xrp-portfolio-trackers" className="text-xrp-accent underline decoration-xrp-accent/30">portfolio trackers</Link> like CoinTracker or Koinly to identify harvesting opportunities and generate tax reports. Choose the right <Link href="/learn/xrp-cost-basis-methods" className="text-xrp-accent underline decoration-xrp-accent/30">cost basis method</Link> to maximize savings.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-cost-basis-methods", label: "Cost Basis", desc: "FIFO, LIFO, HIFO" },
              { href: "/learn/xrp-airdrop-taxes", label: "Airdrop Taxes", desc: "Income reporting" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell or Hold?", desc: "Decision framework" },
              { href: "/learn/xrp-portfolio-trackers", label: "Trackers", desc: "Track P&L" },
              { href: "/learn/xrp-in-retirement-accounts", label: "IRAs", desc: "Tax-free growth" },
              { href: "/learn/how-to-buy-xrp", label: "Exchanges", desc: "Where to trade" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Optimize Your Taxes" description="Use legal strategies to reduce your crypto tax bill." primaryHref="/learn/xrp-cost-basis-methods" primaryLabel="Cost Basis →" secondaryHref="/learn/xrp-airdrop-taxes" secondaryLabel="Airdrop Taxes" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

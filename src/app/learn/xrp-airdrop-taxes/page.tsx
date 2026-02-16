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
  title: "Are XRP Airdrops Taxable? What You Need to Know | AllAboutXRP",
  description: "Are XRP airdrops taxable? Yes — here's exactly when, how much, and how to report XRPL airdrop income on your tax return.",
  keywords: ["XRP airdrop tax","are airdrops taxable","XRPL airdrop tax","crypto airdrop tax rules"],
  openGraph: { title: "Are XRP Airdrops Taxable? What You Need to Know", description: "Are XRP airdrops taxable? Yes — here's exactly when, how much, and how to report XRPL airdrop income on your tax return.", url: "https://allaboutxrp.com/learn/xrp-airdrop-taxes", type: "article" },
  twitter: { card: "summary_large_image", title: "Are XRP Airdrops Taxable? What You Need to Know", description: "Are XRP airdrops taxable? Yes — here's exactly when, how much, and how to report XRPL airdrop income on your tax return." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-airdrop-taxes" },
};

const schemas = [
  buildArticleSchema({ headline: "Are XRP Airdrops Taxable? What You Need to Know", description: "Are XRP airdrops taxable? Yes — here's exactly when, how much, and how to report XRPL airdrop income on your tax return.", url: "https://allaboutxrp.com/learn/xrp-airdrop-taxes", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Airdrop Taxes" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-airdrop-taxes" }),
  buildFAQSchema([
    { question: "Are XRP airdrops taxable?", answer: "Yes. The IRS treats airdrops as ordinary income, taxed at fair market value on the date you receive them." },
    { question: "When do I owe tax?", answer: "When you have dominion and control — typically when tokens appear in your wallet." },
    { question: "What is my cost basis for airdropped XRP?", answer: "The fair market value at the time you received the airdrop. This becomes your cost basis for future capital gains calculation." },
    { question: "Do I also pay capital gains when I sell?", answer: "Yes. When you sell, you owe capital gains tax on the difference between sale price and your cost basis (the FMV at receipt)." },
    { question: "What if I didn't claim my airdrop?", answer: "If tokens are automatically deposited, you likely owe tax when deposited. If you must actively claim, it may be taxable upon claiming." },
  ]),
];

const faqItems = [
  { q: "Are XRP airdrops taxable?", a: "Yes. The IRS treats airdrops as ordinary income, taxed at fair market value on the date you receive them." },
  { q: "When do I owe tax?", a: "When you have dominion and control — typically when tokens appear in your wallet." },
  { q: "What is my cost basis for airdropped XRP?", a: "The fair market value at the time you received the airdrop. This becomes your cost basis for future capital gains calculation." },
  { q: "Do I also pay capital gains when I sell?", a: "Yes. When you sell, you owe capital gains tax on the difference between sale price and your cost basis (the FMV at receipt)." },
  { q: "What if I didn't claim my airdrop?", a: "If tokens are automatically deposited, you likely owe tax when deposited. If you must actively claim, it may be taxable upon claiming." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Are XRP Airdrops Taxable?" titleAccent="What You Need to Know" subtitle="When, how much, and how to report XRPL airdrop income on your tax return." breadcrumbLabel="Airdrop Taxes">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Yes, XRP airdrops are taxable. They count as <strong className="text-text-primary">ordinary income</strong> at fair market value when received. You also owe capital gains tax when you later sell. Track receipt date and price for both income and cost basis.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Taxable?", value: "Yes" },
          { label: "Tax Type", value: "Ordinary income" },
          { label: "When", value: "When received" },
          { label: "Rate", value: "Income tax rate" },
          { label: "On Sell", value: "Capital gains too" },
          { label: "Records", value: "Date + FMV" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "when", label: "When Taxed" },
          { id: "reporting", label: "How to Report" },
          { id: "selling", label: "Selling Later" },
          { id: "tips", label: "Tips" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Income" value="At receipt" delay={0.00} />
          <StatPill label="Rate" value="10-37%" delay={0.06} />
          <StatPill label="On Sell" value="Cap gains" delay={0.12} />
          <StatPill label="Records" value="Essential" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Airdrops Are Taxable</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The IRS treats crypto airdrops as <strong className="text-text-primary">ordinary income</strong>. When you receive an airdrop, you owe income tax on the fair market value at the time of receipt.</p>
            <div className="mt-6"><HighlightBox title="Double Tax Event" variant="warning"><p>Airdrops create TWO tax events: (1) income tax at receipt, and (2) capital gains/loss tax when you sell.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="when" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">When Taxed</h2>
            <div className="mt-6"><DataTable headers={["Event","Tax Type","Amount"]} rows={[["Receive Airdrop","Ordinary Income","FMV at receipt"],["Sell Airdrop","Capital Gains","Sale price - cost basis"],["Hold","No tax yet","Unrealized"]]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="reporting" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Report</h2>
            <div className="mt-6"><IconList items={[
              {title:"Record Date Received",desc:"The exact date tokens appeared in your wallet."},
              {title:"Record Fair Market Value",desc:"Price of the token on the date of receipt (use CoinGecko/CMC)."},
              {title:"Report as Income",desc:"Include on Schedule 1 (Other Income) of your tax return."},
              {title:"Track Cost Basis",desc:"FMV at receipt = your cost basis for when you sell later."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="selling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">When You Sell</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Your cost basis is the FMV when received. If you sell above that, you owe capital gains tax. Below = capital loss (can be used for <Link href="/learn/xrp-tax-loss-harvesting" className="text-xrp-accent underline decoration-xrp-accent/30">tax-loss harvesting</Link>).</p>
          </RevealSection>

          <RevealSection id="tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Screenshot Everything",desc:"Wallet balances, dates, prices at time of receipt."},
              {title:"Use Tracking Software",desc:"CoinTracker and Koinly auto-detect airdrops."},
              {title:"Consult a CPA",desc:"Crypto tax is complex. Professional advice pays for itself."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-cost-basis-methods", label: "Cost Basis", desc: "Tax calculation" },
              { href: "/learn/xrp-tax-loss-harvesting", label: "Tax Harvesting", desc: "Offset income" },
              { href: "/learn/xrp-airdrops", label: "XRP Airdrops", desc: "Airdrop guide" },
              { href: "/learn/xrp-portfolio-trackers", label: "Trackers", desc: "Track income" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell or Hold?", desc: "Decision help" },
              { href: "/learn/earn-interest-on-xrp", label: "Earn Interest", desc: "Yield methods" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Track Your Airdrops" description="Record dates and values for tax compliance." primaryHref="/learn/xrp-portfolio-trackers" primaryLabel="Portfolio Trackers →" secondaryHref="/learn/xrp-cost-basis-methods" secondaryLabel="Cost Basis" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

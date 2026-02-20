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
  title: "Best XRP Block Explorers: Track Transactions & Wallets | AllAboutXRP",
  description: "Best XRP block explorers compared — Bithomp, XRPScan, XRPL.org. How to track transactions, wallets, and on-chain data.",
  keywords: ["XRP block explorer","XRPL explorer","XRP transaction tracker","Bithomp","XRPScan"],
  openGraph: { title: "Best XRP Block Explorers: Track Transactions & Wallets", description: "Best XRP block explorers compared — Bithomp, XRPScan, XRPL.org. How to track transactions, wallets, and on-chain data.", url: "https://allaboutxrp.com/learn/xrp-block-explorers", type: "article" },
  twitter: { card: "summary_large_image", title: "Best XRP Block Explorers: Track Transactions & Wallets", description: "Best XRP block explorers compared — Bithomp, XRPScan, XRPL.org. How to track transactions, wallets, and on-chain data." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-block-explorers" },
};

const schemas = [
  buildArticleSchema({ headline: "Best XRP Block Explorers: Track Transactions & Wallets", description: "Best XRP block explorers compared — Bithomp, XRPScan, XRPL.org. How to track transactions, wallets, and on-chain data.", url: "https://allaboutxrp.com/learn/xrp-block-explorers", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Block Explorers" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-block-explorers" }),
  buildFAQSchema([
    { question: "What is the best XRP block explorer?", answer: "XRPScan for detailed analytics and Bithomp for wallet tracking and NFT support. Both are free." },
    { question: "Can I track any XRP wallet?", answer: "Yes. Enter any XRPL address to see balance, transaction history, and trust lines." },
    { question: "Are block explorers free?", answer: "Yes. XRPScan, Bithomp, and XRPL.org are all free to use." },
    { question: "Can I see whale transactions?", answer: "Yes. Explorers show all transactions including large whale movements in real-time." },
    { question: "How do I verify a payment?", answer: "Enter the transaction hash in any explorer to see confirmation, amount, sender, and receiver." },
  ]),
];

const faqItems = [
  { q: "What is the best XRP block explorer?", a: "XRPScan for detailed analytics and Bithomp for wallet tracking and NFT support. Both are free." },
  { q: "Can I track any XRP wallet?", a: "Yes. Enter any XRPL address to see balance, transaction history, and trust lines." },
  { q: "Are block explorers free?", a: "Yes. XRPScan, Bithomp, and XRPL.org are all free to use." },
  { q: "Can I see whale transactions?", a: "Yes. Explorers show all transactions including large whale movements in real-time." },
  { q: "How do I verify a payment?", a: "Enter the transaction hash in any explorer to see confirmation, amount, sender, and receiver." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Best XRP Block Explorers" titleAccent="Track Transactions & Wallets" subtitle="Best XRP block explorers compared — Bithomp, XRPScan, XRPL.org. Track transactions, wallets, and on-chain data." breadcrumbLabel="Block Explorers">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRPScan and Bithomp are the best free XRPL block explorers. Use them to track transactions, monitor wallet balances, view network stats, and verify payments. XRPL.org provides the official developer explorer.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "#1 Explorer", value: "XRPScan" },
          { label: "#2 Explorer", value: "Bithomp" },
          { label: "Cost", value: "Free" },
          { label: "Data", value: "Real-time" },
          { label: "Official", value: "XRPL.org" },
          { label: "Use", value: "Track anything" },
        ]} />

        <SectionNav items={[
          { id: "comparison", label: "Comparison" },
          { id: "xrpscan", label: "XRPScan" },
          { id: "bithomp", label: "Bithomp" },
          { id: "how", label: "How to Use" },
          { id: "uses", label: "Use Cases" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Explorers" value="3 main" delay={0.00} />
          <StatPill label="Cost" value="Free" delay={0.06} />
          <StatPill label="Data" value="Real-time" delay={0.12} />
          <StatPill label="Network" value="XRPL" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">Explorer Comparison</h2>
            <div className="mt-6"><DataTable headers={["Explorer","Strength","NFT Support","API","URL"]} rows={[["XRPScan","Analytics, rich data","Yes","Yes","xrpscan.com"],["Bithomp","Wallet tracking, clean UI","Yes","Yes","bithomp.com"],["XRPL.org","Official, developer-focused","Basic","Yes","livenet.xrpl.org"]]} highlightCol={0} /></div>
          </RevealSection>

          <RevealSection id="xrpscan" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPScan</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The most feature-rich XRPL explorer. Detailed transaction data, network metrics, validator info, and AMM pool stats. Essential for <Link href="/learn/xrp-on-chain-analysis" className="text-xrp-accent underline decoration-xrp-accent/30">on-chain analysis</Link>.</p>
          </RevealSection>

          <RevealSection id="bithomp" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Bithomp</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Clean, intuitive interface. Known wallet labels (shows exchange names), NFT gallery view, and username resolution. Great for everyday use.</p>
          </RevealSection>

          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Use</h2>
            <div className="mt-6"><IconList items={[
              {title:"Search by Address",desc:"Enter any r-address to see balance, history, and trust lines."},
              {title:"Search by Transaction",desc:"Paste a transaction hash to see full details and confirmation."},
              {title:"Network Stats",desc:"View ledger close time, TPS, validator status."},
              {title:"Token/NFT Lookup",desc:"Browse XRPL tokens, AMM pools, and NFT collections."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="uses" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Use Cases</h2>
            <div className="mt-6"><IconList items={[
              {title:"Verify Payments",desc:"Confirm a transaction was sent and received."},
              {title:"Track Whales",desc:"Monitor large wallet movements for trading signals."},
              {title:"Check Reserves",desc:"See current reserve requirements and your account reserve."},
              {title:"Monitor AMM Pools",desc:"View pool sizes, fees, and LP positions."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-on-chain-analysis", label: "On-Chain Analysis", desc: "Read blockchain data" },
              { href: "/learn/xrp-portfolio-trackers", label: "Portfolio Trackers", desc: "Track holdings" },
              { href: "/learn/what-is-xrp-ledger", label: "XRP Ledger", desc: "XRPL basics" },
              { href: "/learn/xrp-developer-resources", label: "Dev Resources", desc: "Build on XRPL" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP", desc: "Wallet security" },
              { href: "/learn/xrp-community-explained", label: "Community", desc: "XRP ecosystem" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore the Blockchain" description="See every XRP transaction in real-time." primaryHref="/learn/xrp-on-chain-analysis" primaryLabel="On-Chain Analysis →" secondaryHref="/learn/what-is-xrp-ledger" secondaryLabel="XRP Ledger" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

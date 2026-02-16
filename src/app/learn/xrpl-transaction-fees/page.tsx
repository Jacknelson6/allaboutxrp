import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRPL Transaction Fees Explained: Why They're So Low",
  description: "Why XRP transactions cost fractions of a penny. How XRPL fees work, the fee escalation mechanism, and how fees are burned forever.",
  keywords: ["XRPL transaction fees", "XRP fee", "how much does XRP transaction cost", "XRP fee burn"],
  openGraph: {
    title: "XRPL Transaction Fees Explained | AllAboutXRP",
    description: "Why XRP transactions cost fractions of a penny — how fees work and get burned forever.",
    url: "https://allaboutxrp.com/learn/xrpl-transaction-fees",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Transaction Fees | AllAboutXRP",
    description: "XRP transaction fees explained — fractions of a penny, burned forever.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-transaction-fees" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Transaction Fees Explained: Why They're So Low",
    description: "How XRP Ledger transaction fees work — the base fee, fee escalation mechanism, fee burning, and why XRPL transactions cost fractions of a penny.",
    url: "https://allaboutxrp.com/learn/xrpl-transaction-fees",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Transaction Fees" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-transaction-fees" }),
  buildFAQSchema([
    { question: "How much does an XRP transaction cost?", answer: "The minimum XRPL transaction fee is 0.00001 XRP (10 drops), which is a fraction of a penny at any realistic XRP price. Most wallets and applications set slightly higher fees (0.000012 XRP) to ensure quick processing." },
    { question: "Where do XRP transaction fees go?", answer: "XRP transaction fees are permanently destroyed (burned). They are not paid to validators, miners, or any entity. This makes XRP slightly deflationary over time — the total supply decreases with every transaction." },
    { question: "Why are XRPL fees so low?", answer: "XRPL fees exist primarily as an anti-spam mechanism, not a revenue source. Since validators don't receive fees, there's no incentive to keep fees high. The fee is just enough to prevent network abuse while keeping transactions accessible." },
    { question: "What is the fee escalation mechanism?", answer: "When the network is congested, XRPL automatically increases the required fee through open fee escalation. Transactions offering higher fees get priority. During normal operation, the base fee applies. This self-regulating system prevents spam during high-demand periods." },
    { question: "Will XRP fees increase as the price rises?", answer: "The fee is denominated in XRP (drops), not USD. As XRP's price rises, the USD-equivalent cost increases. However, validators can vote to lower the minimum fee in drops to keep transactions affordable. The network adapts through governance." },
  ]),
];

const faqItems = [
  { q: "How much does an XRP transaction cost?", a: "The minimum fee is 0.00001 XRP (10 drops) — a fraction of a penny. Most wallets set slightly higher fees (0.000012 XRP) for reliable processing." },
  { q: "Where do fees go?", a: "Fees are permanently burned — destroyed forever. Not paid to validators or anyone. This makes XRP slightly deflationary over time." },
  { q: "Why are fees so low?", a: "Fees exist as anti-spam protection, not revenue. Validators don't receive fees, so there's no incentive to keep them high. Just enough to prevent abuse." },
  { q: "What is fee escalation?", a: "During congestion, the XRPL automatically raises required fees. Higher-fee transactions get priority. Self-regulating system that prevents spam during high demand." },
  { q: "Will fees increase with XRP's price?", a: "The fee is in XRP drops, not USD. As price rises, USD equivalent goes up. But validators can vote to lower the minimum drop amount to keep transactions affordable." },
  { q: "How many XRP have been burned?", a: "Millions of XRP have been burned since 2012. The original supply was 100 billion XRP. Every transaction permanently reduces this total, though the deflationary effect is very gradual." },
];

export default function XRPLTransactionFeesPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Transaction Fees:"
          titleAccent="Why They're So Low"
          subtitle="XRP transactions cost fractions of a penny — and those fees are burned forever. Here's how the fee system works."
          breadcrumbLabel="XRPL Transaction Fees"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRPL transaction fees are as low as <strong className="text-text-primary">0.00001 XRP</strong> (10 drops) — fractions of a penny. Fees exist as anti-spam protection, not revenue. They&apos;re <strong className="text-text-primary">permanently burned</strong>, making <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> slightly deflationary. During congestion, <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">fee escalation</Link> automatically prioritizes higher-fee transactions.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Minimum Fee", value: "0.00001 XRP (10 drops)" },
          { label: "Typical Fee", value: "0.000012 XRP" },
          { label: "Fee Destination", value: "Permanently burned (destroyed)" },
          { label: "Fee Purpose", value: "Anti-spam protection" },
          { label: "Validator Revenue", value: "Zero (validators earn no fees)" },
          { label: "1 Drop =", value: "0.000001 XRP (smallest unit)" },
        ]} />

        <SectionNav items={[
          { id: "how-fees-work", label: "How Fees Work" },
          { id: "fee-burn", label: "Fee Burning" },
          { id: "escalation", label: "Fee Escalation" },
          { id: "comparison", label: "Fee Comparison" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Min Fee" value="10 drops" delay={0} />
          <StatPill label="USD Cost" value="< $0.001" delay={0.06} />
          <StatPill label="Destination" value="Burned" delay={0.12} />
          <StatPill label="Deflationary" value="Yes" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-fees-work">
            <h2 className="text-2xl font-bold text-text-primary">How XRPL Fees Work</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every transaction on the XRP Ledger requires a small <strong className="text-text-primary">transaction cost</strong> paid in XRP. This fee serves one primary purpose: <strong className="text-text-primary">preventing spam</strong>. By requiring a cost for each transaction, the XRPL makes it economically unfeasible to flood the network with junk transactions.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Anti-Spam Design", desc: "Fees prevent network abuse. Even at fractions of a cent, spamming millions of transactions becomes expensive." },
                { title: "Not Revenue", desc: "Unlike Bitcoin miners or Ethereum validators, XRPL validators earn zero fees. Fees are purely protective." },
                { title: "Set by Network", desc: "The base fee is a network parameter that validators can vote to change through the amendment process." },
                { title: "Denominated in Drops", desc: "1 XRP = 1,000,000 drops. The minimum fee is 10 drops (0.00001 XRP)." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="fee-burn" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Fee Burning: Deflationary XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every XRP used to pay transaction fees is <strong className="text-text-primary">permanently destroyed</strong>. The XRP is not sent to anyone — it ceases to exist. This means the total supply of XRP decreases with every transaction processed on the network.
            </p>
            <div className="mt-6">
              <GlowCard
                title="XRP Supply"
                value="Decreasing"
                subtitle="Every transaction permanently reduces the total XRP supply through fee burning"
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Deflationary Economics" variant="accent">
                <p>XRP started with 100 billion tokens. Millions have been burned through transaction fees since 2012. While the deflationary effect is gradual, it means XRP&apos;s <Link href="/learn/xrp-supply-explained" className="text-xrp-accent underline decoration-xrp-accent/30">supply</Link> is mathematically guaranteed to decrease over time — making each remaining XRP slightly more scarce.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="escalation" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Fee Escalation Mechanism</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              During periods of high network activity, the XRPL uses <strong className="text-text-primary">open fee escalation</strong> to manage demand. When the transaction queue fills up, the required fee increases automatically.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Normal Operation", desc: "Base fee of 10 drops applies. Transactions are processed in 3-5 seconds with no queue." },
                { title: "Elevated Traffic", desc: "As the transaction queue grows, the required fee increases proportionally. This naturally throttles low-priority traffic." },
                { title: "Priority Processing", desc: "Transactions offering higher fees get processed first. Users can set higher fees for time-sensitive transactions." },
                { title: "Self-Regulating", desc: "As traffic subsides, fees automatically return to the base level. No manual intervention needed." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Fee Comparison: XRPL vs Other Networks</h2>
            <div className="mt-6">
              <DataTable
                headers={["Network", "Typical Fee", "Fee Destination", "Speed"]}
                rows={[
                  ["XRP Ledger", "< $0.001", "Burned (destroyed)", "3-5 seconds"],
                  ["Bitcoin", "$1-$50+", "Miners", "10-60 minutes"],
                  ["Ethereum", "$0.50-$100+", "Validators + burned", "12-15 seconds"],
                  ["Solana", "$0.001-$0.01", "Validators + burned", "0.4 seconds"],
                  ["Stellar", "< $0.001", "Pool (redistributed)", "5 seconds"],
                  ["Cardano", "$0.20-$0.50", "Treasury + stakers", "20 seconds"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-reserves-explained", label: "XRPL Reserves", desc: "Why 10 XRP minimum" },
              { href: "/learn/xrp-supply-explained", label: "XRP Supply", desc: "Total supply explained" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Economics of XRP" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "How the XRPL works" },
              { href: "/learn/xrp-transaction-types", label: "Transaction Types", desc: "All XRPL tx types" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "How consensus works" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Experience Low-Cost Transactions"
          description="Ready to use the XRP Ledger? Transactions cost fractions of a penny."
          primaryHref="/learn/get-started"
          primaryLabel="Get Started →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Get a Wallet"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org fee documentation.</em>
        </p>
      </div>
    </>
  );
}

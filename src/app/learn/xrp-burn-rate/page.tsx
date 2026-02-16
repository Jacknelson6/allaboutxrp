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
  title: "XRP Burn Rate: Is XRP Deflationary? | AllAboutXRP",
  description:
    "Learn about XRP's burn mechanism — how transaction fees are destroyed, the current burn rate, and whether XRP is truly deflationary.",
  keywords: ["XRP burn rate", "XRP deflationary", "XRP fee burn", "how many XRP burned", "XRP supply decreasing", "XRP transaction fee burn"],
  openGraph: {
    title: "XRP Burn Rate: How Transaction Fees Reduce Supply",
    description: "Every XRP transaction burns a small fee permanently. Here's how the burn mechanism works and what it means for supply.",
    url: "https://allaboutxrp.com/learn/xrp-burn-rate",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Burn Rate Explained", description: "How XRP's deflationary burn mechanism works." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-burn-rate" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Burn Rate: Is XRP Deflationary?", description: "An analysis of XRP's transaction fee burn mechanism, current burn rate, and what it means for long-term supply.", url: "https://allaboutxrp.com/learn/xrp-burn-rate", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Burn Rate" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-burn-rate" }),
  buildFAQSchema([
    { question: "Does XRP burn tokens?", answer: "Yes. Every XRP transaction burns a small fee (minimum 0.00001 XRP, or 10 drops) that is permanently destroyed. This fee is not paid to validators or any entity — it's removed from existence. This makes XRP technically deflationary, though the burn rate is very slow." },
    { question: "How many XRP have been burned?", answer: "Approximately 12 million XRP have been burned since the ledger's launch in 2012. Starting from 100 billion XRP, the total supply is now approximately 99,988,000,000. The burn rate averages about 10-20 XRP per day at current usage levels." },
    { question: "Will XRP burn rate increase?", answer: "Yes, if transaction volume increases. More transactions = more fees burned. If the XRPL processes millions of daily transactions through ODL, DeFi, NFTs, and tokenized assets, the burn rate could increase significantly. However, even at massive scale, it would take centuries to meaningfully reduce the 100 billion supply." },
    { question: "Is XRP deflationary?", answer: "Technically yes — the total supply can only decrease, never increase. But practically, the deflation is negligible. At the current burn rate of ~10-20 XRP/day, it would take millions of years to burn even 1% of the supply. XRP's price is driven by demand, not supply reduction." },
    { question: "Why are XRP fees burned instead of paid to validators?", answer: "Burning fees prevents validators from being incentivized to include spam transactions for profit. It also creates a tiny deflationary pressure that benefits all XRP holders equally, rather than concentrating value among validators. This design choice aligns with XRP's purpose as a neutral payment medium." },
  ]),
];

const faqItems = [
  { q: "Does XRP burn tokens?", a: "Yes. Every transaction burns a minimum fee of 0.00001 XRP (10 drops), permanently destroyed. Not paid to anyone." },
  { q: "How many XRP have been burned?", a: "About 12 million XRP total since 2012. Current rate: ~10-20 XRP/day. Starting supply was 100 billion." },
  { q: "Will the burn rate increase?", a: "Yes, with more transactions. But even at massive scale, it would take centuries to reduce supply meaningfully." },
  { q: "Is XRP deflationary?", a: "Technically yes — supply can only decrease. Practically, the deflation is negligible at current usage levels." },
  { q: "Why burn instead of paying validators?", a: "Prevents spam incentives and benefits all holders equally rather than concentrating value among validators." },
];

export default function XRPBurnRatePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Burn Rate" titleAccent="Is XRP Deflationary?" subtitle="Every XRP transaction destroys a tiny fee permanently. Here's how the burn mechanism works, the current rate, and what it realistically means for XRP's supply and price." breadcrumbLabel="XRP Burn Rate">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP is technically deflationary</strong> — every transaction burns a minimum fee of 0.00001 XRP (10 drops) that is <strong className="text-text-primary">permanently destroyed</strong>. About 12 million XRP have been burned since 2012, reducing the total supply from 100 billion to ~99.988 billion. The current burn rate is <strong className="text-text-primary">~10-20 XRP per day</strong>. While the direction is deflationary, the practical impact on <Link href="/learn/xrp-supply-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP&apos;s supply</Link> is negligible. XRP&apos;s price is driven by demand and adoption, not fee burns.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Minimum Fee", value: "0.00001 XRP (10 drops)" },
          { label: "Fee Destination", value: "Burned (permanently destroyed)" },
          { label: "Total Burned", value: "~12 million XRP" },
          { label: "Original Supply", value: "100 billion" },
          { label: "Current Total Supply", value: "~99.988 billion" },
          { label: "Daily Burn Rate", value: "~10-20 XRP" },
          { label: "Deflationary?", value: "Technically yes" },
          { label: "Practical Impact", value: "Negligible" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How It Works" },
          { id: "burn-data", label: "Burn Data" },
          { id: "impact", label: "Price Impact" },
          { id: "comparison", label: "vs Other Burns" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Min Fee" value="10 drops" delay={0} />
          <StatPill label="Total Burned" value="~12M XRP" delay={0.06} />
          <StatPill label="Daily Burn" value="~10-20" delay={0.12} />
          <StatPill label="Direction" value="Deflationary" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How XRP&apos;s Burn Mechanism Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every transaction on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> requires a minimum <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">transaction fee</Link> of 0.00001 XRP (10 &quot;drops&quot; — the smallest unit of XRP). This fee is <strong className="text-text-primary">not paid to <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">validators</Link> or any entity</strong> — it is permanently removed from existence.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The purpose of the fee is twofold: (1) it prevents spam transactions from flooding the network, and (2) it creates a very slight deflationary pressure on XRP&apos;s supply. During periods of high network congestion, the minimum fee can increase dynamically to deter spam — temporarily accelerating the burn rate.
            </p>

            <div className="mt-6">
              <HighlightBox title="Why Not Pay Validators?" variant="accent">
                <p>In Bitcoin, transaction fees go to miners, incentivizing them to include transactions. But this also incentivizes miners to include spam for fee revenue. By burning XRP fees, the XRPL eliminates this incentive. <Link href="/learn/how-does-xrp-work" className="text-xrp-accent underline decoration-xrp-accent/30">Validators</Link> participate because they use the network — not because they earn fees. The burn also means every XRP holder benefits equally from reduced supply.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="burn-data" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Burn Rate Data</h2>
            <div className="mt-6">
              <DataTable
                headers={["Metric", "Value"]}
                rows={[
                  ["Total burned (all time)", "~12 million XRP"],
                  ["% of original supply", "~0.012%"],
                  ["Average daily burn", "~10-20 XRP"],
                  ["Average monthly burn", "~300-600 XRP"],
                  ["Time to burn 1%", "~800,000+ years (at current rate)"],
                  ["Spike during congestion", "Can increase 10-100x temporarily"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Does the Burn Affect XRP&apos;s Price?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Let&apos;s be honest: <strong className="text-text-primary">the current burn rate has virtually zero impact on XRP&apos;s price</strong>. Burning 10-20 XRP per day from a 100 billion supply is like removing a single drop of water from an Olympic swimming pool.
            </p>

            <div className="mt-6">
              <HighlightBox title="What Actually Drives XRP's Price" variant="info">
                <p>XRP&apos;s price is driven by <strong className="text-text-primary">demand</strong> (institutional adoption, <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL usage</Link>, <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">ETF flows</Link>, speculative trading) and <strong className="text-text-primary">supply dynamics</strong> (<Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">escrow releases</Link>, market selling). The burn mechanism is a nice design feature but not a price catalyst. See <Link href="/learn/xrp-tokenomics" className="text-xrp-accent underline decoration-xrp-accent/30">XRP tokenomics</Link> for what actually affects supply/demand.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Burn vs Other Crypto Burns</h2>
            <div className="mt-6">
              <DataTable
                headers={["Crypto", "Burn Mechanism", "Impact Level"]}
                rows={[
                  ["XRP", "Transaction fees burned", "Negligible (~10-20/day)"],
                  ["Ethereum (EIP-1559)", "Base fee burned", "Moderate (~2-5 ETH/day)"],
                  ["BNB", "Quarterly auto-burn", "Significant (millions of $)"],
                  ["SHIB", "Community burns", "Negligible vs supply"],
                  ["Bitcoin", "No burn — supply capped", "N/A"],
                ]}
                highlightCol={2}
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
              { href: "/learn/xrp-supply-explained", label: "XRP Supply Explained", desc: "Full supply breakdown" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Economics of XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Transaction mechanics" },
              { href: "/learn/xrp-escrow-explained", label: "XRP Escrow", desc: "Ripple's escrow mechanism" },
              { href: "/learn/can-xrp-be-mined", label: "Can XRP Be Mined?", desc: "Supply creation explained" },
              { href: "/learn/xrp-transaction-types", label: "Transaction Types", desc: "All XRPL transactions" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Understand XRP's Economics" description="The burn rate is just one part of XRP's tokenomics. Explore the full supply and demand picture." primaryHref="/learn/xrp-tokenomics" primaryLabel="XRP Tokenomics →" secondaryHref="/learn/xrp-supply-explained" secondaryLabel="Supply Explained" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, on-chain data.</em></p>
      </div>
    </>
  );
}

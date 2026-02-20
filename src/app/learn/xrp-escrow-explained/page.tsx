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
  title: "XRP Escrow Explained: The 1 Billion XRP Monthly Unlock | AllAboutXRP",
  description:
    "How Ripple's XRP escrow works: 1 billion XRP unlocked monthly, what gets re-locked vs released, impact on price and supply. Complete escrow guide for 2026.",
  keywords: ["XRP escrow", "Ripple escrow", "1 billion XRP", "XRP supply", "XRP monthly unlock"],
  openGraph: {
    title: "The 1 Billion XRP Escrow: Why It Matters Every Month",
    description: "Ripple unlocks 1B XRP monthly from escrow. Here's what happens to it, why it exists, and how it affects XRP's price.",
    url: "https://allaboutxrp.com/learn/xrp-escrow-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Escrow Explained: 1 Billion XRP/Month | AllAboutXRP",
    description: "How Ripple's escrow system works and why it matters for XRP's price and supply.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-escrow-explained" },
};

const schemas = [
  buildArticleSchema({
    headline: "The 1 Billion XRP Escrow: Why It Matters Every Month",
    description: "A complete guide to Ripple's XRP escrow system — how it works, what gets released, historical data, and impact on price.",
    url: "https://allaboutxrp.com/learn/xrp-escrow-explained",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Escrow Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-escrow-explained" }),
  buildFAQSchema([
    { question: "How does Ripple's XRP escrow work?", answer: "In 2017, Ripple locked 55 billion XRP into a series of cryptographic escrow accounts on the XRP Ledger. Each month, 1 billion XRP is unlocked automatically. Ripple can use or sell the unlocked XRP. Any unused portion is re-locked into new escrow contracts at the back of the queue." },
    { question: "Does the escrow release hurt XRP's price?", answer: "The impact is minimal in practice. Ripple typically re-locks 80-90% of each monthly release. The predictable, transparent schedule means the market has already priced in the releases. Sudden large sales would hurt, but Ripple has maintained disciplined release patterns." },
    { question: "How much XRP is still in escrow?", answer: "As of early 2026, approximately 38-42 billion XRP remains in escrow. The exact amount fluctuates based on monthly releases and re-locks. This represents the largest single allocation of XRP." },
    { question: "Why did Ripple create the escrow?", answer: "Ripple created the escrow in December 2017 to provide transparency and predictability to the market. Critics had argued that Ripple could dump its XRP holdings at any time. The escrow cryptographically guarantees a maximum release rate of 1 billion per month." },
  ]),
];

const faqItems = [
  { q: "How does Ripple's XRP escrow work?", a: "In 2017, Ripple locked 55 billion XRP into cryptographic escrow on the XRPL. Each month, 1 billion XRP unlocks automatically. Ripple can use or sell it, and any unused portion gets re-locked at the back of the queue." },
  { q: "Does the escrow release hurt XRP's price?", a: "Minimal impact in practice. Ripple re-locks 80-90% of each release. The predictable schedule means markets have priced it in. Ripple's actual net release is typically 100-200 million XRP per month." },
  { q: "How much XRP is still in escrow?", a: "Approximately 38-42 billion XRP as of early 2026. The exact amount changes monthly based on releases and re-locks." },
  { q: "Why did Ripple create the escrow?", a: "To provide transparency and predictability. Before escrow, critics argued Ripple could dump XRP at will. The cryptographic escrow guarantees a maximum release of 1 billion per month — no exceptions." },
  { q: "Can Ripple change the escrow schedule?", a: "No. The escrow is enforced by the XRP Ledger's protocol. Ripple cannot accelerate, modify, or override the schedule. They can only choose not to use their monthly allocation (re-locking it instead)." },
];

export default function XRPEscrowExplainedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="The 1 Billion XRP Escrow:"
          titleAccent="Why It Matters Every Month"
          subtitle="Every month, 1 billion XRP unlocks from Ripple's escrow. It's the most-watched event in XRP's ecosystem — and the most misunderstood. Here's exactly how it works and why it matters."
          breadcrumbLabel="XRP Escrow Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>In December 2017, Ripple locked <strong className="text-text-primary">55 billion XRP</strong> (55% of total supply) into cryptographic escrow on the XRP Ledger. Each month, <strong className="text-text-primary">1 billion XRP</strong> automatically unlocks. Ripple typically uses 10-20% for institutional sales, partnerships, and operational costs — then <strong className="text-text-primary">re-locks the remaining 80-90%</strong> into new escrow contracts. The schedule is enforced by the XRPL protocol and cannot be modified by Ripple.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Total Locked (2017)", value: "55 billion XRP" },
          { label: "Monthly Unlock", value: "1 billion XRP" },
          { label: "Typical Re-lock Rate", value: "80-90%" },
          { label: "Remaining in Escrow", value: "~38-42 billion XRP" },
          { label: "Escrow Created", value: "December 2017" },
          { label: "Enforcement", value: "XRPL protocol (immutable)" },
          { label: "Net Monthly Release", value: "~100-200M XRP" },
          { label: "Transparency", value: "On-chain, publicly verifiable" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How It Works" },
          { id: "why-it-exists", label: "Why It Exists" },
          { id: "monthly-process", label: "Monthly Process" },
          { id: "historical", label: "Historical Data" },
          { id: "price-impact", label: "Price Impact" },
          { id: "future", label: "Future" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Monthly Unlock" value="1B XRP" delay={0} />
          <StatPill label="Re-locked" value="80-90%" delay={0.06} />
          <StatPill label="Net Release" value="~150M/mo" delay={0.12} />
          <StatPill label="In Escrow" value="~40B XRP" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How the XRP Escrow Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL has a native <strong className="text-text-primary">escrow feature</strong> built into the protocol. Unlike smart contracts on other blockchains, XRPL escrow is a first-class protocol feature — meaning it&apos;s enforced by every validator on the network, not by code that could have bugs.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In December 2017, Ripple created <strong className="text-text-primary">55 separate escrow accounts</strong>, each containing 1 billion XRP and set to unlock on the first day of each month. The first escrow unlocked on January 1, 2018; the last is scheduled years into the future.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Cryptographic Lock", desc: "Each escrow is locked by the XRPL protocol with a time-based release condition. No one — not even Ripple — can unlock it early." },
                { title: "Automatic Unlock", desc: "On the first of each month, 1 billion XRP becomes available to Ripple. They must actively claim it within the escrow window." },
                { title: "Use or Re-lock", desc: "Ripple can sell, distribute, or re-lock the unlocked XRP. Unused XRP is re-locked into new escrow contracts at the end of the queue." },
                { title: "On-Chain Transparency", desc: "Every escrow creation, release, and re-lock is visible on the public XRP Ledger. Anyone can verify the schedule." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="why-it-exists" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Ripple Created the Escrow</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Before the escrow, Ripple held approximately 62 billion XRP (62% of total supply) with no restrictions on when or how much they could sell. This created legitimate concerns:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Supply uncertainty", desc: "Investors couldn't predict when Ripple might sell large amounts of XRP, creating fear of sudden dumps." },
                { title: "Trust deficit", desc: "Holding 62% of supply with no lockup mechanism gave Ripple enormous unchecked power over XRP's market." },
                { title: "Institutional hesitancy", desc: "Banks and financial institutions were reluctant to adopt XRP when one entity could flood the market at will." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Escrow Solution" variant="accent">
                <p>The escrow cryptographically guarantees that Ripple can release <strong className="text-text-primary">at most 1 billion XRP per month</strong>. Even if Ripple wanted to dump everything, the protocol physically prevents it. This gave the market the <strong className="text-text-primary">predictability and transparency</strong> it needed to price XRP with confidence.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="monthly-process" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Happens Each Month</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Here&apos;s the typical monthly cycle:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Step", "Action", "Details"]}
                rows={[
                  ["1", "Escrow unlocks", "1 billion XRP becomes available on the 1st of the month"],
                  ["2", "Ripple claims XRP", "Ripple's operational wallets receive the unlocked XRP"],
                  ["3", "Institutional sales", "Ripple sells ~100-200M XRP to institutional partners (OTC, not on exchanges)"],
                  ["4", "Operational use", "Some XRP funds partnerships, grants, and operational costs"],
                  ["5", "Re-lock remainder", "Unused XRP (typically 800-900M) is locked into new escrow contracts"],
                  ["6", "Quarterly report", "Ripple publishes XRP Markets Report with exact figures"],
                ]}
                highlightCol={0}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Key Point: OTC Sales, Not Exchange Dumps" variant="info">
                <p>Ripple&apos;s institutional sales are <strong className="text-text-primary">over-the-counter (OTC)</strong> — direct sales to institutional buyers at negotiated prices. These sales do NOT hit exchange order books and therefore have minimal impact on the spot price. This is fundamentally different from &quot;dumping on retail.&quot;</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="historical" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Historical Escrow Data</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple publishes quarterly XRP Markets Reports with escrow details. Here&apos;s a summary of recent trends:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Period", "Unlocked", "Released (Net)", "Re-locked", "Notes"]}
                rows={[
                  ["Q1 2024", "3B XRP", "~400M XRP", "~2.6B XRP", "Conservative release during SEC appeal period"],
                  ["Q2 2024", "3B XRP", "~500M XRP", "~2.5B XRP", "Increasing ODL demand driving slightly higher releases"],
                  ["Q3 2024", "3B XRP", "~450M XRP", "~2.55B XRP", "Penalty phase; disciplined release strategy"],
                  ["Q4 2024", "3B XRP", "~600M XRP", "~2.4B XRP", "RLUSD launch period; increased institutional demand"],
                  ["Q1 2025", "3B XRP", "~550M XRP", "~2.45B XRP", "Post-settlement; growing confidence"],
                  ["Q2-Q4 2025", "9B XRP", "~1.5B XRP", "~7.5B XRP", "ETF anticipation; strategic positioning"],
                ]}
                highlightCol={2}
              />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The consistent pattern: Ripple releases <strong className="text-text-primary">10-20% of each monthly unlock</strong> and re-locks the rest. This has held steady since the escrow began in 2018, regardless of market conditions.
            </p>
          </RevealSection>

          <RevealSection id="price-impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Impact on XRP&apos;s Price</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The escrow&apos;s price impact is often overstated by critics and understated by bulls. Here&apos;s a balanced view:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Predictable = Priced In", desc: "Because the schedule is known years in advance, the market has already factored in expected releases. No surprises." },
                { title: "OTC ≠ Market Selling", desc: "Institutional OTC sales don't directly impact exchange prices. The buyers are institutions, not retail traders." },
                { title: "Supply Overhang (Bear Case)", desc: "~40B XRP in escrow means significant potential future supply. Bears argue this caps long-term price appreciation." },
                { title: "Diminishing Over Time", desc: "Each year, the escrow shrinks. By the 2030s, escrow releases will be a much smaller percentage of circulating supply." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Future of XRP Escrow</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              At current release rates (~150-200M net per month), the escrow will take <strong className="text-text-primary">approximately 15-20 years</strong> to fully deplete. However, if adoption accelerates and Ripple needs more XRP for institutional sales, the release rate could increase (up to the 1B/month maximum).
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The escrow system has become one of XRP&apos;s <strong className="text-text-primary">most important trust mechanisms</strong>. It demonstrates that Ripple is committed to responsible, transparent management of its XRP holdings — a key factor in <Link href="/learn/banks-using-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">institutional adoption</Link>.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply & distribution" },
              { href: "/learn/xrp-supply-explained", label: "XRP Supply Explained", desc: "Inflation & burn mechanics" },
              { href: "/learn/xrp-burn-rate", label: "XRP Burn Rate", desc: "Deflationary fee mechanism" },
              { href: "/learn/escrow", label: "XRP Escrow", desc: "Ripple's escrow system" },
              { href: "/learn/xrp-price-history", label: "XRP Price History", desc: "Complete price timeline" },
              { href: "/learn/xrp-price-prediction", label: "XRP Price Prediction", desc: "Analyst forecasts" },
              { href: "/learn/xrp-price-potential", label: "XRP Price Potential", desc: "Realistic price analysis" },
              { href: "/learn/can-xrp-reach-100", label: "Can XRP Reach $100?", desc: "Math behind $100 XRP" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand the Supply"
          description="The escrow is just one part of XRP's tokenomics. Explore how supply, demand, and institutional adoption interact to determine XRP's value."
          primaryHref="/learn/xrp-tokenomics"
          primaryLabel="XRP Tokenomics →"
          secondaryHref="/learn/xrp-price-potential"
          secondaryLabel="Price Potential"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple XRP Markets Reports, XRPL.org, XRPScan.com.</em>
        </p>
      </div>
    </>
  );
}

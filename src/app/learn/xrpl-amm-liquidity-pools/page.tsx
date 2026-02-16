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
  title: "XRPL AMM Liquidity Pools: How to Provide Liquidity",
  description: "Step-by-step guide to providing liquidity in XRPL AMM pools. Impermanent loss, fee earnings, and optimal strategies.",
  keywords: ["XRPL AMM liquidity", "provide liquidity XRPL", "XRPL liquidity pools guide", "earn fees XRPL"],
  openGraph: {
    title: "XRPL AMM Liquidity Pools: How to Provide Liquidity | AllAboutXRP",
    description: "Step-by-step guide to providing liquidity in XRPL AMM pools.",
    url: "https://allaboutxrp.com/learn/xrpl-amm-liquidity-pools",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL AMM Liquidity Pools | AllAboutXRP",
    description: "Provide liquidity on the XRPL AMM — step-by-step guide with fee strategies.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-amm-liquidity-pools" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL AMM Liquidity Pools: How to Provide Liquidity",
    description: "Complete guide to XRPL AMM liquidity pools. How to provide liquidity, earn fees, understand impermanent loss, and optimize your LP strategy.",
    url: "https://allaboutxrp.com/learn/xrpl-amm-liquidity-pools",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL AMM Liquidity Pools" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-amm-liquidity-pools" }),
  buildFAQSchema([
    { question: "How do XRPL AMM liquidity pools work?", answer: "XRPL AMM pools use a constant product formula where two tokens are deposited in equal value. When traders swap between the tokens, they pay a fee (0.1-1%) that goes to liquidity providers proportional to their pool share. The pool automatically adjusts prices based on supply and demand." },
    { question: "What is impermanent loss?", answer: "Impermanent loss occurs when the price ratio of your deposited tokens changes compared to when you deposited them. The greater the price change, the more impermanent loss you experience. It's called 'impermanent' because the loss only becomes permanent when you withdraw — if prices return to the original ratio, the loss disappears." },
    { question: "How much can I earn providing liquidity on XRPL?", answer: "Earnings depend on trading volume, pool fee tier (0.1-1%), and your share of the pool. High-volume pools like XRP/RLUSD can generate meaningful fee income. However, returns vary daily and impermanent loss can offset fee earnings during high-volatility periods." },
    { question: "How do I add liquidity to an XRPL AMM pool?", answer: "Use a compatible wallet like Xaman or the XRPL DEX interface. Select the token pair, enter the amount of each token (equal value), and confirm the transaction. You'll receive LP tokens representing your pool share, which you can later redeem to withdraw your liquidity plus earned fees." },
    { question: "What makes XRPL AMM unique?", answer: "The XRPL AMM is unique because it's natively integrated with the XRPL's order book DEX. Trades automatically route through whichever offers a better price — AMM or order book. It also features auction slots where traders bid for discounted trading fees, with proceeds going to LPs." },
  ]),
];

const faqItems = [
  { q: "How do XRPL AMM liquidity pools work?", a: "XRPL AMM pools use a constant product formula — deposit two tokens in equal value, and traders swap between them paying a 0.1-1% fee that goes to liquidity providers proportional to their pool share." },
  { q: "What is impermanent loss?", a: "Impermanent loss occurs when deposited token price ratios change. The greater the price divergence, the more loss. It's 'impermanent' because it reverses if prices return to the original ratio — it only becomes permanent when you withdraw." },
  { q: "How much can I earn?", a: "Earnings depend on trading volume, fee tier, and your pool share. High-volume pools like XRP/RLUSD can generate meaningful fees, but impermanent loss can offset earnings during volatile periods." },
  { q: "How do I add liquidity?", a: "Use Xaman or a compatible XRPL DEX interface. Select the token pair, enter equal-value amounts of each token, and confirm. You receive LP tokens representing your pool share." },
  { q: "What makes XRPL AMM unique?", a: "Native integration with the XRPL order book DEX — trades auto-route through whichever gives better price. Plus unique auction slots where traders bid for discounted fees, with proceeds going to LPs." },
  { q: "Can I lose money providing liquidity?", a: "Yes. Impermanent loss can exceed fee earnings, especially in volatile markets. If one token drops significantly in value, you'll end up holding more of the declining token. Always understand the risks before depositing." },
];

export default function XRPLAMMLiquidityPoolsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL AMM Liquidity Pools:"
          titleAccent="How to Provide Liquidity"
          subtitle="Earn trading fees by providing liquidity to the XRPL's native AMM. Here's everything you need to know — from basics to optimal strategies."
          breadcrumbLabel="XRPL AMM Liquidity Pools"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL</Link>&apos;s native AMM (XLS-30) lets you deposit token pairs into liquidity pools and earn a share of trading fees (0.1-1%). It integrates with the <Link href="/learn/xrpl-dex-vs-centralized-exchange" className="text-xrp-accent underline decoration-xrp-accent/30">built-in DEX</Link> for optimal price routing. Understand <strong className="text-text-primary">impermanent loss</strong> before depositing — price changes can offset fee earnings.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Protocol", value: "XLS-30 (native XRPL amendment)" },
          { label: "Fee Range", value: "0.1% - 1% per trade" },
          { label: "Integration", value: "AMM + Order Book hybrid routing" },
          { label: "Unique Feature", value: "Auction slots for discounted trading" },
          { label: "Key Risk", value: "Impermanent loss" },
          { label: "Activated", value: "2024" },
        ]} />

        <SectionNav items={[
          { id: "how-it-works", label: "How It Works" },
          { id: "providing-liquidity", label: "Providing Liquidity" },
          { id: "impermanent-loss", label: "Impermanent Loss" },
          { id: "strategies", label: "Strategies" },
          { id: "auction-slots", label: "Auction Slots" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Fee Range" value="0.1-1%" delay={0} />
          <StatPill label="Routing" value="Hybrid" delay={0.06} />
          <StatPill label="Tx Cost" value="< $0.01" delay={0.12} />
          <StatPill label="Finality" value="3-5 sec" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-it-works">
            <h2 className="text-2xl font-bold text-text-primary">How XRPL AMM Pools Work</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL AMM uses a <strong className="text-text-primary">constant product formula</strong> (x × y = k), similar to Uniswap v2. Two tokens are held in a pool, and their product remains constant. When someone buys one token, they add the other, shifting the price automatically.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Constant Product", desc: "The formula x × y = k ensures price adjusts automatically based on supply and demand within the pool." },
                { title: "LP Tokens", desc: "When you deposit, you receive LP tokens proportional to your share. These represent your claim on pool assets plus earned fees." },
                { title: "Fee Earnings", desc: "Every swap pays a fee (set at pool creation). Fees accrue to the pool, increasing the value of LP tokens over time." },
                { title: "Hybrid Routing", desc: "Unique to XRPL — trades route through the AMM, order book, or both, whichever gives the best price." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="providing-liquidity" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Provide Liquidity</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Choose a Pool", desc: "Select a token pair with good trading volume. XRP/RLUSD and XRP/other established tokens tend to have the most activity." },
                { title: "2. Prepare Equal Value", desc: "You need equal USD value of both tokens. For XRP/RLUSD, if depositing 1,000 XRP, you'd need equivalent RLUSD." },
                { title: "3. Deposit via Wallet", desc: "Use Xaman or a compatible interface to execute an AMMDeposit transaction. Specify your desired amounts." },
                { title: "4. Receive LP Tokens", desc: "You'll receive LP tokens representing your pool share. These are held in your XRPL account." },
                { title: "5. Monitor & Withdraw", desc: "Track your position's performance. Withdraw anytime with an AMMWithdraw transaction to reclaim your share." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="impermanent-loss" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Understanding Impermanent Loss</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Impermanent loss (IL)</strong> is the most important concept for liquidity providers to understand. It occurs when the price ratio of your deposited tokens changes from when you deposited.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Price Change", "Impermanent Loss"]}
                rows={[
                  ["1.25x (25% change)", "0.6% loss"],
                  ["1.5x (50% change)", "2.0% loss"],
                  ["2x (100% change)", "5.7% loss"],
                  ["3x (200% change)", "13.4% loss"],
                  ["5x (400% change)", "25.5% loss"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Key Takeaway" variant="info">
                <p>Impermanent loss is <strong className="text-text-primary">offset by trading fee earnings</strong>. If a pool generates enough fees, LPs can still profit despite IL. The key is choosing pools with high volume relative to TVL, and pairing with relatively stable token pairs (like XRP/RLUSD).</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="strategies" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">LP Strategies</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Stablecoin Pairs", desc: "XRP/RLUSD minimizes IL since RLUSD is stable. You still earn fees with lower risk of large price divergence." },
                { title: "High-Volume Pools", desc: "Prioritize pools with high trading volume — more trades = more fees earned regardless of price movement." },
                { title: "Rebalance Periodically", desc: "Monitor your positions and consider rebalancing when price ratios shift significantly." },
                { title: "Diversify Across Pools", desc: "Spread liquidity across multiple pools to reduce risk from any single token pair." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="auction-slots" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Auction Slots: Unique to XRPL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL AMM has a unique feature not found in other DEXes: <strong className="text-text-primary">auction slots</strong>. Traders can bid for a 24-hour slot that gives them discounted trading fees. The auction proceeds go directly to liquidity providers, creating an additional revenue stream beyond standard trading fees.
            </p>
            <div className="mt-6">
              <GlowCard
                title="Auction Slots"
                value="Extra LP Revenue"
                subtitle="Unique XRPL feature — traders bid for discounted fees, proceeds go to LPs"
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
              { href: "/learn/xrpl-dex-vs-centralized-exchange", label: "XRPL DEX vs CEX", desc: "Decentralized vs centralized trading" },
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "Full DeFi ecosystem" },
              { href: "/learn/xrpl-transaction-fees", label: "Transaction Fees", desc: "How fees work on XRPL" },
              { href: "/learn/xrpl-trust-lines-explained", label: "Trust Lines", desc: "How XRPL tokens work" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Other yield opportunities" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "XRPL fundamentals" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Start Earning on XRPL"
          description="Ready to provide liquidity? Start by understanding the XRP Ledger and setting up a wallet."
          primaryHref="/learn/xrp-wallets"
          primaryLabel="Get a Wallet →"
          secondaryHref="/learn/xrpl-defi"
          secondaryLabel="Explore XRPL DeFi"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org AMM documentation.</em>
        </p>
      </div>
    </>
  );
}

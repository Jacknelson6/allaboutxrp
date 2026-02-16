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
  title: "How to Buy XRP on Uphold: Fastest Method (2026) | AllAboutXRP",
  description: "Uphold was one of the first US platforms to relist XRP. Learn how to buy, fees, withdrawal to self-custody, and limits.",
  keywords: ["buy XRP Uphold", "XRP Uphold", "Uphold XRP guide"],
  openGraph: {
    title: "How to Buy XRP on Uphold: Fastest Method (2026)",
    description: "Uphold was one of the first US platforms to relist XRP. Learn how to buy, fees, withdrawal to self-custody, and limits.",
    url: "https://allaboutxrp.com/learn/buy-xrp-on-uphold",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP on Uphold (2026)",
    description: "The fastest way to buy XRP — Uphold never delisted it.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/buy-xrp-on-uphold" },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP on Uphold: Fastest Method (2026)",
    description: "Uphold was one of the first US platforms to relist XRP. Learn how to buy, fees, withdrawal to self-custody, and limits.",
    url: "https://allaboutxrp.com/learn/buy-xrp-on-uphold",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Buy XRP on Uphold" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/buy-xrp-on-uphold" }),
  buildFAQSchema([
    { question: "Did Uphold delist XRP during the SEC lawsuit?", answer: "No. Uphold was one of the few US platforms that continued to support XRP trading throughout the entire SEC v Ripple lawsuit. This made it a go-to platform for US-based XRP buyers during 2021-2023." },
    { question: "What are Uphold's fees for buying XRP?", answer: "Uphold uses a spread-based fee model rather than explicit trading fees. The typical spread for XRP is 0.8-1.2%, which is built into the exchange rate. There are no additional commission fees." },
    { question: "Can I withdraw XRP from Uphold to my own wallet?", answer: "Yes. Uphold supports XRP withdrawals to external wallets on the XRP Ledger. The withdrawal fee is typically 0.1 XRP, and transactions settle in 3-5 seconds." },
    { question: "Is Uphold good for buying XRP?", answer: "Uphold is excellent for beginners due to its simple interface and the ability to buy XRP directly with a bank account, debit card, or even other cryptos. However, the spread-based fees are higher than limit orders on Kraken or Binance." },
    { question: "What countries does Uphold support?", answer: "Uphold is available in 150+ countries. In the US, it's available in all 50 states. It also supports GBP, EUR, and other local currency deposits." },
  ]),
];

const faqItems = [
  { q: "Did Uphold delist XRP during the SEC lawsuit?", a: "No. Uphold was one of the few US platforms that continued to support XRP trading throughout the entire SEC v Ripple lawsuit, making it a go-to for US-based XRP buyers." },
  { q: "What are Uphold's fees for buying XRP?", a: "Uphold uses a spread-based fee model. The typical spread for XRP is 0.8-1.2%, built into the exchange rate. No additional commissions." },
  { q: "Can I withdraw XRP from Uphold?", a: "Yes. Uphold supports XRP withdrawals to external wallets. The withdrawal fee is typically 0.1 XRP, and transactions settle in 3-5 seconds." },
  { q: "Is Uphold good for buying XRP?", a: "Excellent for beginners due to its simple interface. Spread-based fees are higher than pro platforms, but the convenience is unmatched." },
  { q: "What countries does Uphold support?", a: "Uphold is available in 150+ countries including all 50 US states, with GBP, EUR, and other local currency deposits." },
];

export default function BuyXRPOnUpholdPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy XRP on Uphold"
          titleAccent="Fastest Method (2026)"
          subtitle="Uphold earned the XRP community's loyalty by never delisting XRP during the SEC lawsuit. Today it remains one of the simplest ways to buy XRP — especially for US users who want a straightforward experience."
          breadcrumbLabel="Buy XRP on Uphold"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Uphold</strong> is the XRP community&apos;s favorite platform — it <strong className="text-text-primary">never delisted XRP</strong> during the SEC lawsuit. Buy XRP instantly with bank transfer, debit card, or even by swapping other crypto. Spread-based fees of <strong className="text-text-primary">0.8-1.2%</strong> are higher than pro platforms but the simplicity is unmatched. Full <Link href="/learn/crypto-wallets-for-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP withdrawal support</Link> to self-custody wallets.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Exchange", value: "Uphold" },
          { label: "XRP Support", value: "Never delisted" },
          { label: "Fee Model", value: "Spread (0.8-1.2%)" },
          { label: "Deposit Methods", value: "Bank, Card, Crypto" },
          { label: "US Available", value: "All 50 states" },
          { label: "Countries", value: "150+" },
          { label: "XRP Withdrawal", value: "✅ (0.1 XRP fee)" },
          { label: "Cross-Asset Trading", value: "Crypto, stocks, metals" },
        ]} />

        <SectionNav items={[
          { id: "why-uphold", label: "Why Uphold" },
          { id: "create-account", label: "Create Account" },
          { id: "buy-xrp", label: "Buy XRP" },
          { id: "fees", label: "Fees" },
          { id: "features", label: "Features" },
          { id: "withdraw", label: "Withdraw" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="XRP Loyalty" value="Never delisted" delay={0} />
          <StatPill label="Spread" value="0.8-1.2%" delay={0.06} />
          <StatPill label="States" value="50/50" delay={0.12} />
          <StatPill label="Assets" value="250+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="why-uphold">
            <h2 className="text-2xl font-bold text-text-primary">Why XRP Holders Trust Uphold</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When the SEC filed its lawsuit against Ripple in December 2020, most US exchanges — including Coinbase, Kraken, and Binance.US — delisted or suspended XRP trading. Uphold stood firm, continuing to offer XRP throughout the entire multi-year lawsuit. This decision earned them deep loyalty from the <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP community</Link>.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Never Delisted XRP", desc: "Continued XRP support through the entire SEC lawsuit when others didn't" },
                { title: "Cross-Asset Trading", desc: "Trade between 250+ assets: crypto, stocks, precious metals, fiat currencies" },
                { title: "Instant Swaps", desc: "Swap any asset for any other — XRP to gold, Bitcoin to stocks, all in one place" },
                { title: "Transparent Reserves", desc: "Uphold publishes real-time reserve data showing their asset backing" },
                { title: "US-Wide Access", desc: "Available in all 50 states including restricted states like NY" },
                { title: "XRP Withdrawals", desc: "Full withdrawal support to self-custody wallets — not just a trading IOU" },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="create-account" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step 1: Create Your Uphold Account</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "Visit Uphold.com", desc: "Go to uphold.com or download the Uphold app. Click 'Sign Up' and enter your email." },
                { title: "Verify your identity", desc: "Provide your personal details, upload your ID, and take a selfie. Verification typically takes under 10 minutes." },
                { title: "Link a payment method", desc: "Connect your bank account (free ACH), debit card (3.99% fee), or deposit crypto from another wallet." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="🔗 Sign Up for Uphold" variant="accent">
                <p><a href="https://allaboutxrp.com/go/uphold" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Create your Uphold account →</a> The platform that never abandoned XRP. Buy XRP in minutes — available in all 50 US states.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="buy-xrp" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step 2: Buy XRP on Uphold</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Uphold makes buying XRP incredibly simple. The process is designed for beginners who just want to buy without dealing with order books or trading pairs.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Click 'Transact'", desc: "From your dashboard, click 'Transact' and select 'From' (your funding source: USD, bank, card, or another crypto)." },
                { title: "Select XRP as destination", desc: "In the 'To' field, search for and select XRP. Enter the amount in USD or XRP units." },
                { title: "Review and confirm", desc: "Uphold shows the exchange rate (including spread). Review the total and click 'Confirm.' Done!" },
              ]} variant="zap" />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              One of Uphold&apos;s unique features is <strong className="text-text-primary">anything-to-anything trading</strong>. You can swap Bitcoin, Ethereum, or even precious metals directly into XRP without selling to fiat first. Learn more about <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">what makes XRP unique</Link>.
            </p>

            <div className="mt-6">
              <HighlightBox title="🚀 Buy XRP Now" variant="accent">
                <p><a href="https://allaboutxrp.com/go/uphold" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Buy XRP on Uphold →</a> Simple, fast, and available in all 50 states.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="fees" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Uphold Fee Structure</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Uphold doesn&apos;t charge explicit trading commissions. Instead, fees are built into the <strong className="text-text-primary">spread</strong> — the difference between the buy and sell price. Here&apos;s how it compares to <Link href="/learn/best-xrp-exchanges" className="text-xrp-accent underline decoration-xrp-accent/30">other exchanges</Link>:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Cost Type", "Uphold", "Coinbase", "Kraken Pro"]}
                rows={[
                  ["Trading Fee", "0% (spread-based)", "0.5-4%", "0.16-0.26%"],
                  ["Spread", "0.8-1.2%", "~0.5%", "~0.1%"],
                  ["Effective Total", "~1%", "~1.5-4%", "~0.3%"],
                  ["Deposit (Bank)", "Free", "Free", "Free"],
                  ["Deposit (Card)", "3.99%", "2.49%", "3.75%"],
                  ["XRP Withdrawal", "0.1 XRP", "Variable", "0.02 XRP"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Uphold is <strong className="text-text-primary">cheaper than Coinbase Basic</strong> but more expensive than pro-tier platforms. The trade-off is simplicity — no order books, no limit orders, just tap and buy.
            </p>
          </RevealSection>

          <RevealSection id="features" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Unique Uphold Features</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "AutoPilot (DCA)", desc: "Set up recurring buys — daily, weekly, or monthly — to dollar-cost average into XRP" },
                { title: "Limit Orders", desc: "Set a target price and Uphold executes automatically when reached" },
                { title: "Anything-to-Anything", desc: "Swap between 250+ assets: crypto, stocks, metals, and fiat currencies" },
                { title: "Transparent Reserves", desc: "Real-time dashboard showing 1:1 asset backing — see exactly what backs your funds" },
              ]} />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The AutoPilot feature is particularly useful for <Link href="/learn/xrp-dollar-cost-averaging" className="text-xrp-accent underline decoration-xrp-accent/30">dollar-cost averaging into XRP</Link> — a proven strategy for reducing timing risk.
            </p>
          </RevealSection>

          <RevealSection id="withdraw" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Withdrawing XRP to Self-Custody</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Unlike some platforms, Uphold lets you <strong className="text-text-primary">withdraw real XRP</strong> to your own wallet. This is crucial — if a platform doesn&apos;t support withdrawals, you don&apos;t really own the XRP. Read our <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">XRP storage guide</Link> before withdrawing.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Go to your XRP card", desc: "Navigate to your XRP balance on Uphold." },
                { title: "Click 'Send to network'", desc: "Select the option to send XRP to an external XRP Ledger address." },
                { title: "Enter your wallet address", desc: "Paste your XRP wallet address and destination tag (if required). Withdrawal fee is 0.1 XRP." },
                { title: "Confirm", desc: "Verify with 2FA and confirm. Your XRP arrives in seconds." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/buy-xrp-on-coinbase", label: "Buy XRP on Coinbase", desc: "Largest US exchange" },
              { href: "/learn/buy-xrp-on-kraken", label: "Buy XRP on Kraken", desc: "Lowest pro fees" },
              { href: "/learn/best-xrp-exchanges", label: "Best XRP Exchanges", desc: "All exchanges compared" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Self-custody guide" },
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Start here" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Join the Platform That Stood by XRP"
          description="Uphold never delisted XRP. Buy your first XRP in minutes with the simplest interface in crypto."
          primaryHref="https://allaboutxrp.com/go/uphold"
          primaryLabel="Sign Up for Uphold →"
          secondaryHref="/learn/best-xrp-exchanges"
          secondaryLabel="Compare All Exchanges"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. This page may contain affiliate links. AllAboutXRP may earn a commission at no extra cost to you.</em>
        </p>
      </div>
    </>
  );
}

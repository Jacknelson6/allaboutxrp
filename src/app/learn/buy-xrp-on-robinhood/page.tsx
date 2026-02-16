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
  title: "How to Buy XRP on Robinhood: What to Know (2026) | AllAboutXRP",
  description: "How to buy XRP on Robinhood — setup, fees, limitations, and why you may want to transfer to a real wallet.",
  keywords: ["buy XRP Robinhood", "XRP Robinhood", "Robinhood crypto XRP"],
  openGraph: {
    title: "How to Buy XRP on Robinhood: What to Know (2026)",
    description: "How to buy XRP on Robinhood — setup, fees, limitations, and why you may want to transfer to a real wallet.",
    url: "https://allaboutxrp.com/learn/buy-xrp-on-robinhood",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP on Robinhood (2026)",
    description: "Buy XRP commission-free on Robinhood — but know the trade-offs.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/buy-xrp-on-robinhood" },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP on Robinhood: What to Know (2026)",
    description: "How to buy XRP on Robinhood — setup, fees, limitations, and why you may want to transfer to a real wallet.",
    url: "https://allaboutxrp.com/learn/buy-xrp-on-robinhood",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Buy XRP on Robinhood" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/buy-xrp-on-robinhood" }),
  buildFAQSchema([
    { question: "Can I withdraw XRP from Robinhood?", answer: "Yes. Robinhood now supports crypto withdrawals through its Robinhood Wallet feature. You can transfer XRP to an external wallet, though the process is more limited than dedicated crypto exchanges." },
    { question: "Is Robinhood free for buying XRP?", answer: "Robinhood charges no explicit commission for crypto trades. However, they make money through a spread built into the execution price, typically 0.4-0.8%. So while it's 'commission-free,' it's not truly free." },
    { question: "Is Robinhood safe for XRP?", answer: "Robinhood is a publicly traded company (NASDAQ: HOOD) regulated by FINRA and the SEC. Crypto assets are held by Robinhood Crypto, LLC. While the platform is legitimate, dedicated crypto exchanges offer more robust security features." },
    { question: "Can I buy XRP on Robinhood in all US states?", answer: "Robinhood crypto is available in most US states, but availability varies. Some states have restrictions on specific cryptocurrencies. Check the Robinhood app for current XRP availability in your state." },
    { question: "Should I buy XRP on Robinhood or a crypto exchange?", answer: "Robinhood is convenient if you already use it for stocks, but dedicated exchanges like Coinbase, Kraken, or Uphold offer lower spreads, more XRP features, better withdrawal options, and deeper liquidity." },
  ]),
];

const faqItems = [
  { q: "Can I withdraw XRP from Robinhood?", a: "Yes. Robinhood now supports crypto withdrawals through its Robinhood Wallet feature. You can transfer XRP to an external wallet, though it's more limited than dedicated exchanges." },
  { q: "Is Robinhood free for buying XRP?", a: "No explicit commission, but Robinhood earns through a spread of 0.4-0.8% built into the execution price. 'Commission-free' isn't truly free." },
  { q: "Is Robinhood safe for XRP?", a: "Robinhood is publicly traded (NASDAQ: HOOD) and regulated by FINRA/SEC. Crypto assets are held by Robinhood Crypto, LLC." },
  { q: "Can I buy XRP on Robinhood in all US states?", a: "Available in most US states, but some have restrictions. Check the Robinhood app for current XRP availability in your state." },
  { q: "Should I buy XRP on Robinhood or a crypto exchange?", a: "Dedicated exchanges offer lower spreads, more features, better withdrawals, and deeper liquidity. Robinhood is convenient if you already use it for stocks." },
];

export default function BuyXRPOnRobinhoodPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy XRP on Robinhood"
          titleAccent="What to Know (2026)"
          subtitle="Robinhood makes buying XRP easy with its familiar stock-trading interface. But commission-free doesn't mean cost-free, and there are important limitations to understand before you buy."
          breadcrumbLabel="Buy XRP on Robinhood"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Robinhood</strong> offers XRP trading with no explicit commissions, but charges a <strong className="text-text-primary">0.4-0.8% spread</strong>. It&apos;s the most convenient option if you already use Robinhood for stocks, but dedicated <Link href="/learn/best-xrp-exchanges" className="text-xrp-accent underline decoration-xrp-accent/30">crypto exchanges</Link> offer lower costs, better features, and superior withdrawal options. Robinhood now supports crypto withdrawals via Robinhood Wallet.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Platform", value: "Robinhood" },
          { label: "Commission", value: "$0 (spread-based)" },
          { label: "Spread", value: "~0.4-0.8%" },
          { label: "Withdrawals", value: "✅ Via Robinhood Wallet" },
          { label: "Regulation", value: "FINRA, SEC (NASDAQ: HOOD)" },
          { label: "Min Purchase", value: "$1" },
          { label: "Recurring Buys", value: "✅ Supported" },
          { label: "XRP Staking", value: "❌ Not available" },
        ]} />

        <SectionNav items={[
          { id: "how-to-buy", label: "How to Buy" },
          { id: "pros-cons", label: "Pros & Cons" },
          { id: "fees", label: "True Costs" },
          { id: "withdrawals", label: "Withdrawals" },
          { id: "alternatives", label: "Alternatives" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Commission" value="$0" delay={0} />
          <StatPill label="Spread" value="~0.6%" delay={0.06} />
          <StatPill label="Min Buy" value="$1" delay={0.12} />
          <StatPill label="Users" value="23M+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="how-to-buy">
            <h2 className="text-2xl font-bold text-text-primary">How to Buy XRP on Robinhood</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              If you already have a Robinhood account, buying XRP takes under a minute. If you&apos;re new, the full setup takes about 10 minutes.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Open or download Robinhood", desc: "Download the Robinhood app or visit robinhood.com. Sign up with your email if you're new." },
                { title: "Enable crypto trading", desc: "If you haven't already, enable crypto trading in your account settings. This may require additional verification." },
                { title: "Search for XRP", desc: "Use the search bar to find XRP. Tap on it to see the current price, charts, and trading options." },
                { title: "Tap 'Buy' and enter amount", desc: "Enter the dollar amount you want to spend (minimum $1). Robinhood shows you how much XRP you'll receive." },
                { title: "Confirm purchase", desc: "Review the order details. Note: Robinhood doesn't show you the exact spread — the total cost is baked into the execution price." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="🔗 Get Started on Robinhood" variant="accent">
                <p><a href="https://allaboutxrp.com/go/robinhood" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Open a Robinhood account →</a> Buy XRP alongside your stocks and ETFs — all in one app.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="pros-cons" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Robinhood for XRP: Pros & Cons</h2>
            <div className="mt-6">
              <DataTable
                headers={["✅ Pros", "❌ Cons"]}
                rows={[
                  ["No explicit commission fees", "Hidden spread costs (0.4-0.8%)"],
                  ["Familiar interface for stock traders", "Limited crypto features"],
                  ["$1 minimum purchase", "No limit orders for crypto (basic)"],
                  ["FDIC-insured USD balances", "No staking or DeFi features"],
                  ["Publicly traded, regulated company", "Fewer XRP trading pairs"],
                  ["Recurring buy feature", "Less liquidity than dedicated exchanges"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="fees" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The True Cost of Buying XRP on Robinhood</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Robinhood markets itself as &quot;commission-free,&quot; but you&apos;re still paying through the spread. Here&apos;s how it actually compares to <Link href="/learn/best-xrp-exchanges" className="text-xrp-accent underline decoration-xrp-accent/30">dedicated exchanges</Link>:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["$1,000 XRP Purchase", "Commission", "Spread", "Total Cost"]}
                rows={[
                  ["Robinhood", "$0", "~$6", "~$6"],
                  ["Coinbase Basic", "$14.90", "~$5", "~$19.90"],
                  ["Coinbase Advanced", "$0", "~$3", "~$3"],
                  ["Kraken Pro", "$2.60", "~$1", "~$3.60"],
                  ["Binance", "$1.00", "~$1", "~$2.00"],
                  ["Uphold", "$0", "~$10", "~$10"],
                ]}
                highlightCol={3}
              />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Robinhood is middle-of-the-road on cost — cheaper than Coinbase Basic and Uphold, but more expensive than pro platforms. For large purchases, the spread difference adds up. Learn more about <Link href="/learn/xrp-common-mistakes" className="text-xrp-accent underline decoration-xrp-accent/30">common mistakes when buying XRP</Link>.
            </p>
          </RevealSection>

          <RevealSection id="withdrawals" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Withdrawing XRP from Robinhood</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Robinhood now supports crypto withdrawals through <strong className="text-text-primary">Robinhood Wallet</strong>. This was a major upgrade — previously you could only buy and sell XRP on Robinhood without ever taking custody.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Enable Robinhood Wallet", desc: "Set up your Robinhood Wallet in the app. This creates a self-custody wallet linked to your account." },
                { title: "Transfer XRP to Robinhood Wallet", desc: "Move your XRP from Robinhood's custodial account to your Robinhood Wallet." },
                { title: "Send to external wallet", desc: "From Robinhood Wallet, send XRP to any external XRP Ledger address." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="💡 Consider Self-Custody" variant="info">
                <p>For long-term XRP holdings, consider moving to a <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">hardware wallet like Ledger</Link> or the Xaman app. Self-custody gives you full control and access to the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger&apos;s features</Link> like the built-in DEX.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="alternatives" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Better Alternatives for Buying XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While Robinhood works in a pinch, dedicated crypto exchanges are generally better for XRP:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Coinbase", desc: "Largest US exchange, Advanced Trade has 0.05% maker fees. Best for most US users." },
                { title: "Kraken", desc: "Never been hacked, 0.16% maker fees. Best for security-conscious buyers." },
                { title: "Uphold", desc: "Never delisted XRP, simple interface. Best for XRP community loyalty." },
                { title: "Binance", desc: "Lowest fees (0.1%), deepest liquidity. Best for international users." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/buy-xrp-on-coinbase", label: "Buy XRP on Coinbase", desc: "Better fees & features" },
              { href: "/learn/buy-xrp-on-uphold", label: "Buy XRP on Uphold", desc: "XRP community favorite" },
              { href: "/learn/best-xrp-exchanges", label: "Best XRP Exchanges", desc: "Full comparison" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Self-custody guide" },
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Start here" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Buy XRP on Robinhood"
          description="Already use Robinhood? Add XRP to your portfolio in under a minute. Or compare dedicated exchanges for lower fees."
          primaryHref="https://allaboutxrp.com/go/robinhood"
          primaryLabel="Open Robinhood →"
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

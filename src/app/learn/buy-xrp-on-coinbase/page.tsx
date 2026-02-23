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
  title: "How to Buy XRP on Coinbase: Step-by-Step Guide (2026) | AllAboutXRP",
  description: "Step-by-step guide to buying XRP on Coinbase. Fees, limits, verification, and pro tips. Takes under 5 minutes.",
  keywords: ["buy XRP Coinbase", "XRP Coinbase", "how to buy XRP on Coinbase", "Coinbase XRP"],
  openGraph: {
    title: "How to Buy XRP on Coinbase: Step-by-Step Guide (2026)",
    description: "Step-by-step guide to buying XRP on Coinbase. Fees, limits, verification, and pro tips.",
    url: "https://allaboutxrp.com/learn/buy-xrp-on-coinbase",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP on Coinbase (2026)",
    description: "Complete guide to buying XRP on Coinbase — fees, verification, and pro tips.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/buy-xrp-on-coinbase" },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP on Coinbase: Step-by-Step Guide (2026)",
    description: "Step-by-step guide to buying XRP on Coinbase. Fees, limits, verification, and pro tips.",
    url: "https://allaboutxrp.com/learn/buy-xrp-on-coinbase",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Buy XRP on Coinbase" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/buy-xrp-on-coinbase" }),
  buildFAQSchema([
    { question: "Can I buy XRP on Coinbase in the US?", answer: "Yes. Coinbase relisted XRP in 2023 after the SEC v Ripple ruling clarified XRP's legal status. US residents in all 50 states can buy, sell, and trade XRP on Coinbase." },
    { question: "What are Coinbase's fees for buying XRP?", answer: "Coinbase charges a spread of about 0.5% plus a flat fee ranging from $0.99 to $2.99 depending on transaction size. Coinbase Advanced Trade offers maker/taker fees as low as 0.05%/0.08% for high-volume traders." },
    { question: "Is there a minimum amount of XRP I can buy on Coinbase?", answer: "The minimum purchase on Coinbase is $2 worth of XRP. There is no minimum in terms of XRP units — you can buy fractional amounts." },
    { question: "Can I withdraw XRP from Coinbase to my own wallet?", answer: "Yes. You can withdraw XRP to any self-custody wallet that supports the XRP Ledger. You'll need the destination wallet address and, if sending to an exchange, the destination tag. Coinbase charges a small network fee for withdrawals." },
    { question: "How long does it take to buy XRP on Coinbase?", answer: "If your Coinbase account is already verified, buying XRP takes under 2 minutes. New account setup with identity verification typically takes 5-15 minutes, though some verifications may take up to 48 hours." },
    { question: "Should I use Coinbase or Coinbase Advanced Trade?", answer: "Coinbase Advanced Trade (formerly Coinbase Pro) offers significantly lower fees — 0.05-0.60% vs 1.5-4% on basic Coinbase. If you're buying more than $100 of XRP, Advanced Trade saves you money. Both are accessible from the same Coinbase account." },
  ]),
];

const faqItems = [
  { q: "Can I buy XRP on Coinbase in the US?", a: "Yes. Coinbase relisted XRP in 2023 after the SEC v Ripple ruling clarified XRP's legal status. US residents in all 50 states can buy, sell, and trade XRP on Coinbase." },
  { q: "What are Coinbase's fees for buying XRP?", a: "Coinbase charges a spread of about 0.5% plus a flat fee ranging from $0.99 to $2.99 depending on transaction size. Coinbase Advanced Trade offers maker/taker fees as low as 0.05%/0.08% for high-volume traders." },
  { q: "Is there a minimum amount of XRP I can buy on Coinbase?", a: "The minimum purchase on Coinbase is $2 worth of XRP. There is no minimum in terms of XRP units — you can buy fractional amounts." },
  { q: "Can I withdraw XRP from Coinbase to my own wallet?", a: "Yes. You can withdraw XRP to any self-custody wallet that supports the XRP Ledger. You'll need the destination wallet address and, if sending to an exchange, the destination tag." },
  { q: "Should I use Coinbase or Coinbase Advanced Trade?", a: "Coinbase Advanced Trade offers significantly lower fees — 0.05-0.60% vs 1.5-4% on basic Coinbase. If you're buying more than $100 of XRP, Advanced Trade saves you money." },
  { q: "How long does it take to buy XRP on Coinbase?", a: "If your Coinbase account is already verified, buying XRP takes under 2 minutes. New account setup with identity verification typically takes 5-15 minutes." },
];

export default function BuyXRPOnCoinbasePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy XRP on Coinbase"
          titleAccent="Step-by-Step Guide (2026)"
          subtitle="Coinbase is the largest US crypto exchange and one of the easiest ways to buy XRP. This guide walks you through the entire process — from account creation to your first purchase — in under 5 minutes."
          breadcrumbLabel="Buy XRP on Coinbase"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Coinbase</strong> is the most popular way for Americans to buy XRP. Create an account, verify your identity, deposit USD via bank transfer or debit card, and buy XRP in under 5 minutes. Use <strong className="text-text-primary">Coinbase Advanced Trade</strong> to save up to 80% on fees. After buying, consider <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">moving your XRP to a self-custody wallet</Link> for maximum security.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Exchange", value: "Coinbase" },
          { label: "XRP Available", value: "✅ Yes (relisted 2023)" },
          { label: "Basic Fee", value: "~1.5-4%" },
          { label: "Advanced Trade Fee", value: "0.05-0.60%" },
          { label: "Minimum Purchase", value: "$2" },
          { label: "Deposit Methods", value: "Bank, Debit Card, Wire, PayPal" },
          { label: "Verification Time", value: "5-15 minutes" },
          { label: "US States Supported", value: "All 50" },
        ]} />

        <SectionNav items={[
          { id: "create-account", label: "Create Account" },
          { id: "verify-identity", label: "Verify Identity" },
          { id: "deposit-funds", label: "Deposit Funds" },
          { id: "buy-xrp", label: "Buy XRP" },
          { id: "fees", label: "Fees Explained" },
          { id: "advanced-trade", label: "Advanced Trade" },
          { id: "withdraw", label: "Withdraw XRP" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Users" value="110M+" delay={0} />
          <StatPill label="Listed Since" value="2023" delay={0.06} />
          <StatPill label="Min Buy" value="$2" delay={0.12} />
          <StatPill label="States" value="50/50" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="create-account">
            <h2 className="text-2xl font-bold text-text-primary">Step 1: Create Your Coinbase Account</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Getting started with Coinbase takes just a few minutes. Head to <a href="https://allaboutxrp.com/go/coinbase" className="text-xrp-accent underline decoration-xrp-accent/30 font-semibold" target="_blank" rel="noopener noreferrer">Coinbase.com</a> and click &quot;Get Started.&quot; You&apos;ll need an email address, a strong password, and a phone number for two-factor authentication.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Visit Coinbase.com", desc: "Go to coinbase.com and click 'Get Started' or download the Coinbase app from the App Store or Google Play." },
                { title: "Enter your details", desc: "Provide your full legal name (must match your ID), email address, and create a secure password." },
                { title: "Verify your email", desc: "Coinbase sends a verification email. Click the link to confirm your account." },
                { title: "Add phone number", desc: "Enter your phone number for SMS-based two-factor authentication (2FA). We recommend upgrading to an authenticator app later." },
                { title: "Agree to terms", desc: "Review and accept Coinbase's User Agreement and Privacy Policy." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="🔗 Sign Up for Coinbase" variant="accent">
                <p><a href="https://allaboutxrp.com/go/coinbase" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Sign up for Coinbase →</a> Create your free account and buy XRP in minutes. Available in all 50 US states and 100+ countries worldwide.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="verify-identity" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step 2: Verify Your Identity</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              As a regulated US exchange, Coinbase is required to verify your identity before you can buy crypto. This process — known as KYC (Know Your Customer) — typically takes 5-15 minutes. Understanding <Link href="/learn/crypto-regulation-xrp-impact" className="text-xrp-accent underline decoration-xrp-accent/30">why crypto regulation matters</Link> helps explain why this step is necessary.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Personal information", desc: "Enter your date of birth, address, and the last 4 digits of your Social Security Number." },
                { title: "Upload government ID", desc: "Take a photo of your driver's license, passport, or state ID. Make sure the image is clear and all text is legible." },
                { title: "Selfie verification", desc: "Take a selfie to confirm you match your ID. Good lighting helps this step go faster." },
                { title: "Wait for approval", desc: "Most verifications complete within minutes. In rare cases, manual review can take up to 48 hours." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="deposit-funds" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step 3: Deposit Funds</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Once verified, you need to add money to your Coinbase account. Coinbase supports multiple deposit methods, each with different fees and processing times. If you&apos;re new to crypto, check out our <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">complete guide to buying XRP</Link> for a broader overview.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Method", "Fee", "Speed", "Limit"]}
                rows={[
                  ["Bank Account (ACH)", "Free", "3-5 business days*", "$25,000/day"],
                  ["Debit Card", "2.49%", "Instant", "$7,500/week"],
                  ["Wire Transfer", "$10", "1-3 business days", "$250,000/day"],
                  ["PayPal", "2.49%", "Instant", "Varies"],
                ]}
                highlightCol={0}
              />
            </div>

            <div className="mt-4">
              <HighlightBox title="Pro Tip: ACH Instant Buy" variant="info">
                <p>While ACH deposits take 3-5 days to settle, Coinbase lets you <strong className="text-text-primary">instantly buy crypto</strong> with pending ACH funds (up to $1,000 for new accounts). You just can&apos;t withdraw the crypto until the deposit clears.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="buy-xrp" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step 4: Buy XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Now for the exciting part — actually buying XRP. Here&apos;s how to do it on the standard Coinbase platform:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Search for XRP", desc: "Click 'Buy & Sell' in the top navigation, then search for 'XRP' in the asset list. Make sure you select XRP (not a similarly named token)." },
                { title: "Enter your amount", desc: "Type the dollar amount you want to spend (e.g., $100) or switch to XRP units. Coinbase shows you exactly how much XRP you'll receive." },
                { title: "Choose payment method", desc: "Select your preferred deposit method. Bank account is cheapest; debit card is fastest." },
                { title: "Review and confirm", desc: "Coinbase displays the exchange rate, fees, and total cost. Review everything, then click 'Buy XRP' to confirm." },
                { title: "Done!", desc: "Your XRP appears in your Coinbase wallet immediately. You now own XRP!" },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="🚀 Ready to Buy?" variant="accent">
                <p><a href="https://allaboutxrp.com/go/coinbase" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Buy XRP on Coinbase now →</a> Takes under 5 minutes from start to finish.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="fees" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Coinbase Fee Structure Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Understanding Coinbase&apos;s fees is crucial to maximizing your XRP purchase. The standard Coinbase platform charges significantly more than Advanced Trade, and different payment methods have different costs.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Transaction Size", "Coinbase Basic Fee", "Advanced Trade Fee", "Savings"]}
                rows={[
                  ["$10 or less", "$0.99 flat", "~$0.06", "94%"],
                  ["$10-25", "$1.49 flat", "~$0.10", "93%"],
                  ["$25-50", "$1.99 flat", "~$0.20", "90%"],
                  ["$50-200", "$2.99 flat", "~$0.50", "83%"],
                  ["$200+", "1.49%", "0.05-0.60%", "60-97%"],
                ]}
                highlightCol={3}
              />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              For any purchase over $50, switching to Coinbase Advanced Trade saves you serious money. Compare this to <Link href="/learn/best-xrp-exchanges" className="text-xrp-accent underline decoration-xrp-accent/30">other XRP exchanges</Link> to find the lowest fees for your situation.
            </p>
          </RevealSection>

          <RevealSection id="advanced-trade" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Using Coinbase Advanced Trade for Lower Fees</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Coinbase Advanced Trade (formerly Coinbase Pro) is built into your Coinbase account — no separate signup needed. It offers a full trading interface with limit orders, stop orders, and dramatically lower fees.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Lower Fees", desc: "Maker fees as low as 0.05%, taker fees as low as 0.08% for high volume" },
                { title: "Limit Orders", desc: "Set your own buy price and wait for the market to come to you" },
                { title: "Price Charts", desc: "Full candlestick charts with technical indicators" },
                { title: "Order Book", desc: "See real-time buy and sell orders from other traders" },
              ]} />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              To access Advanced Trade, click &quot;Advanced&quot; in the top navigation bar on Coinbase. Search for the <strong className="text-text-primary">XRP-USD</strong> trading pair, enter your order, and buy. If you&apos;re interested in learning more about trading, check out our <Link href="/learn/how-to-read-xrp-charts" className="text-xrp-accent underline decoration-xrp-accent/30">guide to reading XRP charts</Link>.
            </p>
          </RevealSection>

          <RevealSection id="withdraw" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Withdrawing XRP to Your Own Wallet</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While Coinbase is a reputable exchange, the crypto mantra &quot;not your keys, not your coins&quot; applies. For long-term holdings, consider <Link href="/learn/how-to-store-xrp-safely" className="text-xrp-accent underline decoration-xrp-accent/30">storing your XRP in a self-custody wallet</Link> like a Ledger hardware wallet or XUMM (now Xaman).
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Get your wallet address", desc: "Open your XRP wallet and copy your XRP Ledger address (starts with 'r'). Note any required destination tag." },
                { title: "Initiate withdrawal", desc: "On Coinbase, go to your XRP balance → Send. Paste the wallet address and destination tag (if applicable)." },
                { title: "Confirm the transaction", desc: "Review the details, enter your 2FA code, and confirm. The XRP will arrive in your wallet within 3-5 seconds." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="⚠️ Destination Tags Matter" variant="info">
                <p>If you&apos;re sending XRP to another exchange, you <strong className="text-text-primary">must include the destination tag</strong>. Forgetting it can result in lost funds. Self-custody wallets like Ledger and XUMM don&apos;t require destination tags. Learn more about <Link href="/learn/crypto-wallets-for-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallets</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/buy-xrp-on-binance", label: "Buy XRP on Binance", desc: "Alternative exchange guide" },
              { href: "/learn/buy-xrp-on-kraken", label: "Buy XRP on Kraken", desc: "Lower fees, pro features" },
              { href: "/learn/best-xrp-exchanges", label: "Best XRP Exchanges", desc: "All exchanges compared" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Self-custody guide" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "Know your obligations" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Start Buying XRP on Coinbase"
          description="You now know exactly how to buy XRP on Coinbase. Create your account and make your first purchase in under 5 minutes."
          primaryHref="https://allaboutxrp.com/go/coinbase"
          primaryLabel="Sign Up for Coinbase →"
          secondaryHref="/learn/best-xrp-exchanges"
          secondaryLabel="Compare All Exchanges"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. This is not financial advice. Always do your own research.</em>
        </p>
      </div>
    </>
  );
}

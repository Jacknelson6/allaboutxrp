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
  title: "How to Buy XRP in the USA: Complete Guide (2026) | AllAboutXRP",
  description: "How to buy XRP in the United States. Best exchanges, state restrictions, tax implications, and step-by-step guide for American investors.",
  keywords: ["buy XRP USA", "how to buy XRP in US", "XRP United States", "buy XRP America"],
  openGraph: {
    title: "How to Buy XRP in the USA: Complete Guide (2026)",
    description: "Best exchanges, state restrictions, tax implications, and step-by-step guide for American investors.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-usa",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP in the USA (2026)",
    description: "Complete guide to buying XRP in the United States — exchanges, taxes, and regulations.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/buy-xrp-in-usa" },
};

const faqItems = [
  { q: "Can US residents buy XRP?", a: "XRP is available through multiple US platforms, but state, account, and transfer eligibility vary. The Ripple decision addressed specific transaction categories and did not create a universal asset classification." },
  { q: "What is the best exchange to buy XRP in the US?", a: "There is no universal best platform. Verify state availability, XRP withdrawals, fee tier, spread, payment rail, custody, and the final quote for your account." },
  { q: "Do I have to pay taxes on XRP in the US?", a: "Yes. IRS treats crypto as property. Selling for profit triggers capital gains tax. Holding 1+ year qualifies for lower long-term rates (0-20%)." },
  { q: "Are there state restrictions?", a: "Most states allow XRP. New York requires BitLicense (Coinbase/Bitstamp have it; Kraken doesn't). Some restrictions in Hawaii, Nevada." },
  { q: "Can I buy XRP with a US bank account?", a: "Yes. Coinbase, Kraken, Uphold, Bitstamp all support free ACH deposits with 1-3 day settlement." },
];

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP in the USA: Complete Guide (2026)",
    description: "How to buy XRP in the United States. Best exchanges, state restrictions, tax implications, and step-by-step guide.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-usa",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Buy XRP in USA" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/buy-xrp-in-usa" }),
  buildFAQSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
];

export default function BuyXRPInUSAPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy XRP in the USA"
          titleAccent="Complete Guide (2026)"
          subtitle="A source-led guide to US platform availability, current fees, transfer support, tax records, and the transaction-specific outcome of SEC v Ripple."
          breadcrumbLabel="Buy XRP in USA"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>US residents can access XRP on several platforms, but eligibility, transfers, payment rails, and fees vary by state and account. Compare the current provider terms and final order quote. The <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v Ripple</Link> outcome was transaction-specific: institutional sales violated securities law, while the record did not establish an investment contract for Ripple&apos;s programmatic sales. The $125,035,150 judgment and injunction remain in effect.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Availability", value: "Varies by state and platform" },
          { label: "SEC Ruling", value: "XRP on exchanges ≠ security" },
          { label: "Best Exchange (Easy)", value: "Coinbase" },
          { label: "Best Exchange (Fees)", value: "Coinbase Advanced / Kraken Pro" },
          { label: "Cheapest Deposit", value: "ACH bank transfer (free)" },
          { label: "Tax Treatment", value: "Property (capital gains)" },
          { label: "XRP ETF Status", value: "Pending / Expected 2026" },
          { label: "Reporting Required", value: "Yes (IRS Form 8949)" },
        ]} />

        <SectionNav items={[
          { id: "legal-status", label: "Legal Status" },
          { id: "best-exchanges", label: "Best Exchanges" },
          { id: "step-by-step", label: "How to Buy" },
          { id: "taxes", label: "Tax Guide" },
          { id: "state-restrictions", label: "State Restrictions" },
          { id: "etf", label: "XRP ETF" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Legal" value="✅ Yes" delay={0} />
          <StatPill label="States" value="50/50" delay={0.06} />
          <StatPill label="Exchanges" value="5+ options" delay={0.12} />
          <StatPill label="Min Buy" value="$1-2" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="legal-status">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Legal Status in the US</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v Ripple lawsuit</Link> produced different results for different offers and sales. In August 2025, both appeals were dismissed, leaving the final $125,035,150 judgment and injunction in effect. An exchange listing does not replace a state-availability check or resolve the legal treatment of every transaction.
            </p>

            <div className="mt-6">
              <HighlightBox title="SEC v Ripple: Key Ruling" variant="accent">
                <p>Programmatic sales of XRP on exchanges were ruled <strong className="text-text-primary">not securities transactions</strong>. This means buying XRP on Coinbase, Kraken, or any exchange is legal and does not violate securities law. Ripple&apos;s institutional sales were treated differently, but this doesn&apos;t affect retail buyers.</p>
              </HighlightBox>
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Since the ruling, XRP has been relisted on Coinbase, Kraken, Binance.US, and most other US platforms. The <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">XRP ETF</Link> is also under consideration, which would provide even easier access through traditional brokerage accounts.
            </p>
          </RevealSection>

          <RevealSection id="best-exchanges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Exchanges for US Buyers</h2>
            <div className="mt-6">
              <DataTable
                headers={["Exchange", "Fee model", "State eligibility", "Deposit", "Best For"]}
                rows={[
                  ["Coinbase", "0.05-0.60%", "✅", "Free ACH", "Beginners"],
                  ["Kraken", "Variable", "48 states*", "Free ACH", "Security"],
                  ["Uphold", "~1% spread", "✅", "Free ACH", "XRP community"],
                  ["Bitstamp", "0.30%", "✅", "Free ACH", "Experienced"],
                  ["Robinhood", "~0.6% spread", "Most states", "Instant", "Stock traders"],
                  ["Binance.US", "0.1%", "Most states", "Free ACH", "Low fees"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-2 text-xs text-text-secondary/60">*Kraken not available in NY and WA.</p>

            <div className="mt-6">
              <HighlightBox title="🏆 Our Top Pick for US Users" variant="accent">
                <p><a href="https://www.coinbase.com/" className="text-xrp-accent underline decoration-xrp-accent/30 font-bold" target="_blank" rel="noopener noreferrer">Coinbase →</a> Confirm current state eligibility, XRP transfers, and the Advanced order quote for your account. <Link href="/learn/buy-xrp-on-coinbase" className="text-xrp-accent underline decoration-xrp-accent/30">Read our full Coinbase guide</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="step-by-step" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Buy XRP in the US: Step by Step</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Choose an exchange", desc: "Coinbase for ease, Kraken for security, Uphold for XRP loyalty. See comparison above." },
                { title: "2. Create and verify your account", desc: "Sign up with email, complete KYC (ID + selfie). Takes 5-15 minutes." },
                { title: "3. Deposit USD via ACH", desc: "Link your bank account and initiate a free ACH transfer. Most exchanges allow instant trading while deposit clears." },
                { title: "4. Buy XRP", desc: "Search for XRP, enter your amount, and confirm. Use limit orders on Advanced/Pro tiers for lowest fees." },
                { title: "5. Secure your XRP", desc: "Consider moving to a self-custody wallet for long-term holding. Hardware wallets like Ledger are the gold standard." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="taxes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">US Tax Obligations for XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The IRS treats cryptocurrency as <strong className="text-text-primary">property</strong>, not currency. This means buying, selling, and trading XRP has tax implications. For a deep dive, see our <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">complete XRP tax guide</Link>.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Event", "Taxable?", "Tax Type"]}
                rows={[
                  ["Buying XRP with USD", "❌ No", "Not taxable"],
                  ["Holding XRP", "❌ No", "Not taxable"],
                  ["Selling XRP for profit", "✅ Yes", "Capital gains"],
                  ["Trading XRP for another crypto", "✅ Yes", "Capital gains"],
                  ["Receiving XRP as income", "✅ Yes", "Ordinary income"],
                  ["XRP airdrop received", "✅ Yes", "Ordinary income"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="💡 Hold for 1+ Year = Lower Taxes" variant="info">
                <p>XRP held for more than 12 months qualifies for <strong className="text-text-primary">long-term capital gains rates</strong> (0%, 15%, or 20% depending on income). Short-term gains (held less than 1 year) are taxed as ordinary income, which can be as high as 37%.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="state-restrictions" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">State-by-State Availability</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While XRP is legal nationwide, individual exchange availability varies by state due to different licensing requirements:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "New York", desc: "Requires BitLicense. Coinbase ✅, Bitstamp ✅, Robinhood ✅. Kraken ❌, Binance.US ❌." },
                { title: "Hawaii", desc: "Strict bond requirements limit exchange availability. Coinbase ✅, Kraken ✅. Some others limited." },
                { title: "Washington", desc: "Kraken not available. Coinbase ✅, Uphold ✅." },
                { title: "Other states", desc: "Provider and XRP availability must be checked for the user's state and account." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="etf" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP ETF: Coming to the US?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Multiple asset managers have filed for <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">XRP ETFs</Link>, which would let Americans buy XRP exposure through their existing brokerage accounts (Fidelity, Schwab, etc.) without needing a crypto exchange. Approval is widely expected in 2026 following the SEC&apos;s pivot to a more crypto-friendly stance. This would also be relevant for <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">understanding ETF structures</Link>.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/how-to-buy-xrp", label: "Best XRP Exchanges", desc: "Full comparison" },
              { href: "/learn/buy-xrp-on-coinbase", label: "Buy on Coinbase", desc: "Step-by-step guide" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "US obligations" },
              { href: "/learn/sec-vs-ripple", label: "SEC v Ripple", desc: "The lawsuit explained" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Self-custody guide" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Buy XRP in the USA Today"
          description="Verify state eligibility, current fees, XRP transfer support, and the final order quote before choosing a platform."
          primaryHref="https://www.coinbase.com/"
          primaryLabel="Start with Coinbase →"
          secondaryHref="/learn/how-to-buy-xrp"
          secondaryLabel="Compare All Exchanges"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. This is not financial or legal advice.</em>
        </p>
      </div>
    </>
  );
}

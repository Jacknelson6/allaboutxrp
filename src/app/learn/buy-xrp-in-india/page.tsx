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
  title: "How to Buy XRP in India: INR Guide (2026) | AllAboutXRP",
  description: "Buy XRP in India — UPI and INR deposit methods, best Indian exchanges, TDS tax rules, and legal status.",
  keywords: ["buy XRP India", "how to buy XRP in India", "XRP INR", "XRP India exchange"],
  openGraph: {
    title: "How to Buy XRP in India: INR Guide (2026)",
    description: "Buy XRP in India — UPI deposits, best Indian exchanges, TDS tax rules, and legal status.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-india",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy XRP in India with INR (2026)",
    description: "Best Indian exchanges, UPI deposits, and 30% flat tax — everything you need to know.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/buy-xrp-in-india" },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP in India: INR Guide (2026)",
    description: "Buy XRP in India — UPI and INR deposit methods, best Indian exchanges, TDS tax rules, and legal status.",
    url: "https://allaboutxrp.com/learn/buy-xrp-in-india",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Buy XRP in India" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/buy-xrp-in-india" }),
  buildFAQSchema([
    { question: "Is XRP legal in India?", answer: "Yes. Cryptocurrency is legal in India following the Supreme Court's 2020 ruling overturning the RBI banking ban. However, crypto is subject to a 30% flat tax on gains and 1% TDS on transactions. India has not banned crypto but has implemented heavy taxation." },
    { question: "What is the best exchange to buy XRP in India?", answer: "WazirX, CoinDCX, and ZebPay are the top Indian exchanges supporting XRP with INR pairs. Binance also serves Indian users. All support UPI and bank transfers for INR deposits." },
    { question: "What is the crypto tax in India?", answer: "India imposes a flat 30% tax on all cryptocurrency gains with no deductions allowed except the cost of acquisition. Additionally, 1% TDS (Tax Deducted at Source) is applied on all crypto transactions above ₹10,000." },
    { question: "Can I buy XRP with UPI in India?", answer: "Yes. Major Indian exchanges like WazirX, CoinDCX, and ZebPay support UPI deposits for instant, free INR funding. This is the most popular deposit method among Indian crypto investors." },
    { question: "Can I offset crypto losses against gains in India?", answer: "No. Under India's current tax law, crypto losses cannot be offset against crypto gains or any other income. Each profitable transaction is taxed at 30% independently. This is one of the strictest crypto tax regimes globally." },
  ]),
];

const faqItems = [
  { q: "Is XRP legal in India?", a: "Yes. Legal since the Supreme Court's 2020 ruling overturning the RBI ban. Subject to 30% flat tax on gains and 1% TDS." },
  { q: "Best exchange for Indians?", a: "WazirX, CoinDCX, ZebPay — all support XRP/INR pairs with UPI and bank transfer deposits." },
  { q: "What is the crypto tax in India?", a: "Flat 30% on all crypto gains. No deductions allowed except acquisition cost. Plus 1% TDS on transactions above ₹10,000." },
  { q: "Can I buy XRP with UPI?", a: "Yes. WazirX, CoinDCX, and ZebPay all support free, instant UPI deposits." },
  { q: "Can I offset crypto losses?", a: "No. Losses cannot be offset against gains or other income. One of the strictest tax regimes globally." },
];

export default function BuyXRPInIndiaPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy XRP in India"
          titleAccent="INR Guide (2026)"
          subtitle="XRP is legal in India but subject to one of the world's heaviest crypto tax regimes — 30% flat tax plus 1% TDS. This guide covers the best Indian exchanges, UPI deposits, tax obligations, and strategies to minimize your tax burden."
          breadcrumbLabel="Buy XRP in India"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP is legal in India</strong> but taxed heavily — <strong className="text-text-primary">30% flat tax</strong> on gains with no loss offsets, plus <strong className="text-text-primary">1% TDS</strong> on all transactions. Best exchanges: <strong className="text-text-primary">WazirX</strong>, <strong className="text-text-primary">CoinDCX</strong>, or <strong className="text-text-primary">ZebPay</strong> — all support UPI deposits. Despite the tax burden, India has millions of XRP holders attracted by its <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payment potential</Link> for India&apos;s massive remittance market.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Legal Status", value: "✅ Legal (not banned)" },
          { label: "Tax on Gains", value: "30% flat (no deductions)" },
          { label: "TDS", value: "1% on transactions >₹10K" },
          { label: "Loss Offset", value: "❌ Not allowed" },
          { label: "Best Exchanges", value: "WazirX, CoinDCX, ZebPay" },
          { label: "Deposit Method", value: "UPI (free, instant)" },
          { label: "Trading Pair", value: "XRP/INR" },
          { label: "Regulator", value: "SEBI / RBI (evolving)" },
        ]} />

        <SectionNav items={[
          { id: "legal-status", label: "Legal Status" },
          { id: "best-exchanges", label: "Best Exchanges" },
          { id: "how-to-buy", label: "How to Buy" },
          { id: "taxes", label: "Tax Guide" },
          { id: "remittances", label: "XRP & Remittances" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Legal" value="✅ Yes" delay={0} />
          <StatPill label="Tax Rate" value="30% flat" delay={0.06} />
          <StatPill label="TDS" value="1%" delay={0.12} />
          <StatPill label="UPI" value="Instant" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="legal-status">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Legal Status in India</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              India&apos;s relationship with crypto has been turbulent. In 2018, the RBI banned banks from serving crypto companies. In March 2020, the Supreme Court overturned this ban, making crypto trading legal again. Since then, India has introduced <Link href="/learn/crypto-regulation-xrp-impact" className="text-xrp-accent underline decoration-xrp-accent/30">crypto-specific tax legislation</Link> rather than an outright ban.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "2018: RBI Banking Ban", desc: "RBI prohibited banks from providing services to crypto businesses. Trading continued via P2P." },
                { title: "2020: Supreme Court Overturns Ban", desc: "Landmark ruling declared the RBI ban unconstitutional, restoring full crypto access." },
                { title: "2022: 30% Tax + 1% TDS", desc: "Union Budget 2022 introduced 30% flat tax on crypto gains and 1% TDS on transactions." },
                { title: "2026: Evolving Regulation", desc: "India is developing comprehensive crypto legislation with SEBI potentially becoming the primary regulator." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="best-exchanges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Indian Exchanges for XRP</h2>
            <div className="mt-6">
              <DataTable
                headers={["Exchange", "INR Deposit", "Trading Fee", "XRP/INR", "TDS Handling"]}
                rows={[
                  ["WazirX", "UPI (free)", "0.2%", "✅", "Auto-deducted"],
                  ["CoinDCX", "UPI (free)", "0.1-0.2%", "✅", "Auto-deducted"],
                  ["ZebPay", "UPI, IMPS (free)", "0.15%", "✅", "Auto-deducted"],
                  ["Binance (P2P)", "UPI via P2P", "0.1%", "Via USDT", "Manual reporting"],
                  ["CoinSwitch", "UPI (free)", "Spread-based", "✅", "Auto-deducted"],
                ]}
                highlightCol={0}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="🇮🇳 Recommendation for Indian Users" variant="accent">
                <p><strong className="text-text-primary">WazirX</strong> or <strong className="text-text-primary">CoinDCX</strong> are the best choices — both have direct XRP/INR pairs, instant UPI deposits, and automatic TDS handling. CoinDCX edges ahead on fees. Both support full XRP withdrawals to <Link href="/learn/crypto-wallets-for-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">self-custody wallets</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="how-to-buy" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Buy XRP in India: Step by Step</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Choose an Indian exchange", desc: "WazirX, CoinDCX, or ZebPay. All handle KYC, TDS, and INR deposits natively." },
                { title: "2. Complete KYC with Aadhaar/PAN", desc: "PAN card is mandatory for crypto trading (tax purposes). Aadhaar or passport for identity verification." },
                { title: "3. Deposit INR via UPI", desc: "Open the app, tap deposit, and pay via UPI (Google Pay, PhonePe, etc.). Instant and free." },
                { title: "4. Buy XRP", desc: "Search for XRP/INR, enter your amount, and confirm. The exchange auto-deducts 1% TDS." },
                { title: "5. Consider holding long-term", desc: "Since all gains are taxed at 30% regardless of holding period, minimize trading frequency." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="taxes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">India&apos;s Crypto Tax Rules Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              India has one of the <strong className="text-text-primary">strictest crypto tax regimes</strong> in the world. Understanding these rules is essential before investing. For more detail, see our <Link href="/learn/xrp-tax-guide" className="text-xrp-accent underline decoration-xrp-accent/30">complete tax guide</Link>.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Rule", "Details"]}
                rows={[
                  ["Tax Rate", "30% flat on all gains (no income-based tiers)"],
                  ["TDS", "1% deducted at source on transactions > ₹10,000"],
                  ["Loss Offset", "❌ Cannot offset losses against gains"],
                  ["Loss Carry-Forward", "❌ Cannot carry forward losses to future years"],
                  ["Deductions Allowed", "Only cost of acquisition (not electricity, fees, etc.)"],
                  ["Gifting", "Taxed as income if gift value > ₹50,000"],
                  ["Surcharge & Cess", "Additional surcharge + 4% cess may apply"],
                ]}
                highlightCol={0}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="⚠️ No Loss Offsetting" variant="info">
                <p>India&apos;s most painful rule: if you profit ₹1,00,000 on XRP but lose ₹80,000 on another crypto, you still owe 30% on the full ₹1,00,000 profit. <strong className="text-text-primary">Net gains don&apos;t apply</strong>. This means minimizing trades and being very selective about entries is crucial.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="remittances" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why XRP Matters for India</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              India is the world&apos;s <strong className="text-text-primary">#1 remittance recipient</strong>, receiving over $100 billion annually from its global diaspora. Traditional remittance channels charge 5-8% in fees. XRP&apos;s <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payment technology</Link> could dramatically reduce these costs, and Ripple has actively partnered with Indian financial institutions.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "#1 Remittance Market", desc: "$100B+ annually from the Indian diaspora. XRP could reduce fees from 5-8% to under 1%." },
                { title: "Ripple Partnerships", desc: "Ripple has partnered with Indian banks and payment providers for ODL corridors." },
                { title: "Financial Inclusion", desc: "XRP enables cross-border micropayments for India's unbanked and underbanked population." },
                { title: "XRP Community", desc: "India has one of the largest XRP communities globally, driven by the remittance use case." },
              ]} />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Learn more about <Link href="/learn/xrp-africa-remittances" className="text-xrp-accent underline decoration-xrp-accent/30">XRP&apos;s role in global remittances</Link> and <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">how On-Demand Liquidity works</Link>.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/best-xrp-exchanges", label: "Best Exchanges", desc: "Global comparison" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "Global tax rules" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "XRP's core use case" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "How ODL works" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Self-custody guide" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Buy XRP in India"
          description="Use UPI for instant, free deposits on Indian exchanges. Be aware of the 30% tax and 1% TDS."
          primaryHref="/learn/best-xrp-exchanges"
          primaryLabel="Compare Exchanges →"
          secondaryHref="/learn/xrp-tax-guide"
          secondaryLabel="Tax Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. This is not financial or tax advice.</em>
        </p>
      </div>
    </>
  );
}

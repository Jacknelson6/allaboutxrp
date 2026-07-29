import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import SourceList from "@/components/shared/SourceList";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildHowToSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Buy XRP: Step-by-Step Guide (2026)",
  description:
    "Learn how to buy XRP in 2026. Compare venue eligibility, total order costs, withdrawal support, custody, and security before following five practical steps.",
  openGraph: {
    title: "How to Buy XRP: Complete Guide | AllAboutXRP",
    description:
      "A vendor-neutral guide to checking eligibility, fees, withdrawal support, custody, and security before buying XRP.",
    url: "https://allaboutxrp.com/learn/how-to-buy-xrp",
    type: "article",
    images: [{ url: "https://allaboutxrp.com/opengraph-image", width: 1200, height: 630, alt: "AllAboutXRP guide to buying XRP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP: Step-by-Step Guide | AllAboutXRP",
    description: "A vendor-neutral guide to comparing costs, withdrawal support, custody, and security before buying XRP.",
    images: ["https://allaboutxrp.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/how-to-buy-xrp",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Buy XRP: Step-by-Step Guide",
    description: "A comprehensive step-by-step guide to buying XRP cryptocurrency in 2026, covering exchanges, wallets, verification, and security best practices.",
    url: "https://allaboutxrp.com/learn/how-to-buy-xrp",
    datePublished: "2026-02-11",
    dateModified: "2026-07-29",
    citations: [
      "https://xrpl.org/about/xrp",
      "https://xrpl.org/docs/concepts/accounts/reserves",
      "https://www.coinbase.com/how-to-buy/xrp",
      "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees",
      "https://www.kraken.com/buy/xrp",
      "https://www.kraken.com/features/fee-schedule",
      "https://www.investor.gov/introduction-investing/investing-basics/investment-products/crypto-assets",
    ],
  }),
  buildHowToSchema({
    name: "How to Buy XRP",
    description: "Step-by-step guide to purchasing XRP cryptocurrency on an exchange.",
    url: "https://allaboutxrp.com/learn/how-to-buy-xrp",
    steps: [
      { name: "Choose a Venue", text: "Verify that the provider serves your location, supports XRP withdrawals, and discloses the total order cost." },
      { name: "Create and Verify Your Account", text: "Create an account through the provider's verified website or app, secure it with strong two-factor authentication, and complete the required identity checks." },
      { name: "Deposit Funds", text: "Choose a supported funding method after comparing its fees, limits, processing time, and withdrawal holds." },
      { name: "Review and Buy XRP", text: "Enter the amount, review the fee, spread, XRP received, and order type, then confirm only if the preview matches your plan." },
      { name: "Choose a Custody Method", text: "Keep the XRP with the provider or withdraw to a compatible self-custody account after weighing platform risk against key-management risk." },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "How to Buy XRP" },
  ]),
  buildFAQSchema([
    { question: "What is the easiest way to buy XRP?", answer: "Use a venue that legally serves your location, supports XRP withdrawals, and shows the full fee and spread before confirmation. Complete identity checks, fund the account, place an order, and decide whether to use exchange custody or a self-custody wallet." },
    { question: "Can I buy XRP in the United States?", answer: "XRP is available through several U.S.-serving platforms, but eligibility varies by state, account, and product. Check the venue's current location rules and XRP withdrawal support before depositing money." },
    { question: "What is the minimum amount of XRP I can buy?", answer: "Minimum order sizes vary by venue. If you plan to withdraw to a new self-custody account, verify the XRP Ledger's current base reserve and the venue's withdrawal minimum before choosing an amount." },
    { question: "Is it safe to buy XRP?", answer: "Buying XRP carries market, platform, custody, fraud, and operational risks. Reduce avoidable risk by verifying the venue and URL, using a unique password and strong 2FA, checking every order preview, and planning custody and recovery before purchase." },
    { question: "Should I store XRP on an exchange or in a wallet?", answer: "Exchange custody is convenient but leaves control with the provider. Self-custody gives you the keys but makes you responsible for backups and recovery. Choose based on the risks you can manage, and test a small withdrawal first." },
  ]),
];

const faqItems = [
  { q: "What is the easiest way to buy XRP?", a: "Use a venue that legally serves your location, supports XRP withdrawals, and shows the full fee and spread before confirmation. Complete identity checks, fund the account, place an order, and decide whether to use exchange custody or a self-custody wallet." },
  { q: "Can I buy XRP in the United States?", a: "XRP is available through several U.S.-serving platforms, but eligibility varies by state, account, and product. Check the venue's current location rules and XRP withdrawal support before depositing money." },
  { q: "What is the minimum amount of XRP I can buy?", a: "Minimum order sizes vary by venue. If you plan to withdraw to a new self-custody account, verify the XRP Ledger's current base reserve and the venue's withdrawal minimum before choosing an amount." },
  { q: "Is it safe to buy XRP?", a: "Buying XRP carries market, platform, custody, fraud, and operational risks. Reduce avoidable risk by verifying the venue and URL, using a unique password and strong 2FA, checking every order preview, and planning custody and recovery before purchase." },
  { q: "Should I store XRP on an exchange or in a wallet?", a: "Exchange custody is convenient but leaves control with the provider. Self-custody gives you the keys but makes you responsible for backups and recovery. Choose based on the risks you can manage, and test a small withdrawal first." },
  { q: "Do I need to pay taxes on XRP?", a: "Tax treatment depends on your jurisdiction and the transaction. Buying, selling, exchanging, spending, receiving, or transferring XRP can have different reporting consequences. Keep dated records and consult current guidance or a qualified tax professional where you live." },
  { q: "Can I buy XRP with a credit card?", a: "Some venues support card funding in some regions. Review the provider's checkout, your card issuer's treatment of crypto purchases, and the total fee before confirming because payment-method availability and charges vary." },
];

export default function HowToBuyXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy"
          titleAccent="XRP"
          subtitle="To buy XRP, choose a venue available in your jurisdiction, complete its identity checks, review the full order cost, and decide how you will store the asset before you fund the account."
          breadcrumbLabel="How to Buy XRP"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" modified="2026-07-29" />
            <LastUpdated date="July 29, 2026" />
          </div>
        </LearnHero>

        {/* TL;DR */}
        <div className="mt-10 rounded-2xl border border-xrp-accent/20 bg-xrp-accent/5 p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-xrp-accent">TL;DR</h2>
          <p className="mt-3 text-text-secondary leading-relaxed">
            <strong className="text-text-primary">The short answer is:</strong> Choose a venue that serves your jurisdiction and supports XRP withdrawals, complete its identity checks, fund the account, and inspect the final fee, spread, and amount received before buying. Decide between exchange custody and a self-custody <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallet</Link> before you deposit money.
          </p>
        </div>

        <SectionNav items={[
          { id: "before", label: "Before You Start" },
          { id: "exchanges", label: "Compare Venues" },
          { id: "steps", label: "Step-by-Step" },
          { id: "payment", label: "Payment Methods" },
          { id: "fees", label: "Fees" },
          { id: "security", label: "Security" },
          { id: "storage", label: "Storage" },
          { id: "mistakes", label: "Common Mistakes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Buying Process" value="5 steps" />
          <StatPill label="Order Cost" value="Check preview" />
          <StatPill label="XRP Settlement" value="3-5 sec" />
          <StatPill label="Account Reserve" value="Verify live" />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== BEFORE YOU START ===== */}
          <RevealSection id="before">
            <h2 className="text-2xl font-bold text-text-primary">What Should You Check Before Buying XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP is the native digital asset</Link> of the XRP Ledger. Availability, legal eligibility, payment methods, and withdrawal support depend on the venue, account, and jurisdiction, so verify those details on the day you buy.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Here&apos;s what you need to know before getting started:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Identity and location", desc: "Confirm the venue serves your location and understand which identity documents it requires" },
                { title: "Total order cost", desc: "Compare the quoted price, spread, trading fee, deposit cost, and withdrawal fee—not one advertised number" },
                { title: "XRP withdrawals", desc: "Verify that the product lets you withdraw XRP and review destination-tag instructions before funding" },
                { title: "Custody plan", desc: "Decide whether the venue or you will control the keys, and prepare the recovery process before transferring" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== COMPARE VENUES ===== */}
          <RevealSection id="exchanges">
            <h2 className="text-2xl font-bold text-text-primary">How Should You Compare Places to Buy XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              No venue is best for every buyer. Compare current, account-specific information using the same checklist for each candidate:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Check", "What to verify", "Why it matters"]}
                rows={[
                  ["Eligibility", "Country, state, and account restrictions", "Access can differ inside the same platform"],
                  ["Execution cost", "Fee, spread, and amount of XRP received", "The preview is more useful than a headline rate"],
                  ["Funding", "Deposit method, cost, limits, and settlement time", "Cheap funding can still delay withdrawal"],
                  ["Withdrawal", "XRP support, fee, minimum, and hold period", "A buy-only product may not support self-custody"],
                  ["Custody", "Who controls keys and how recovery works", "Convenience and key risk move in opposite directions"],
                  ["Security", "Strong 2FA, address controls, and incident disclosures", "Account controls matter after purchase"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Editorial method" variant="accent">
                <p>AllAboutXRP does not name a universal &quot;best exchange.&quot; <a href="https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees" data-source-link="true" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Coinbase states</a> that its fees can vary by payment method, order size, market conditions, location, and asset, while <a href="https://www.kraken.com/features/fee-schedule" data-source-link="true" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Kraken publishes</a> separate instant-buy and maker/taker structures. Compare the current disclosures and your actual preview before choosing.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== STEP BY STEP ===== */}
          <RevealSection id="steps">
            <h2 className="text-2xl font-bold text-text-primary">Step-by-Step: How to Buy XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Follow these five steps in order. Identity review, bank settlement, and withdrawal holds vary by provider, so do not assume the process will finish immediately.
            </p>

            <ol className="mt-8 space-y-8">
              <li className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">1</span>
                  <h3 className="text-xl font-semibold text-text-primary">Choose an Exchange</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Choose a venue that serves your jurisdiction and supports the payment method and XRP withdrawal path you need. Review its current terms, security controls, incident history, and fee disclosures.
                </p>
              </li>

              <li className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">2</span>
                  <h3 className="text-xl font-semibold text-text-primary">Create and Verify Your Account</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Create a unique password and enable the strongest second factor the venue supports. Complete the identity checks shown for your account; required documents and review time vary by provider and jurisdiction.
                </p>
              </li>

              <li className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">3</span>
                  <h3 className="text-xl font-semibold text-text-primary">Deposit Funds</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Choose a supported funding method after comparing its fee, limit, settlement time, and withdrawal hold. A fast deposit can cost more or delay when purchased XRP can leave the platform.
                </p>
              </li>

              <li className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">4</span>
                  <h3 className="text-xl font-semibold text-text-primary">Buy XRP</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Open the venue&apos;s XRP market, choose the order type you understand, and enter the amount. Before confirming, verify the quoted price, spread, fee, total charged, and XRP expected. Cancel and compare if the preview is unclear.
                </p>
              </li>

              <li className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">5</span>
                  <h3 className="text-xl font-semibold text-text-primary">Secure Your XRP</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  If you choose self-custody, initialize a reputable <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallet</Link>, protect its recovery secret offline, verify the destination address and any required tag, and send a small test first. Self-custody removes provider recovery and makes you responsible for the keys.
                </p>
              </li>
            </ol>
          </RevealSection>

          {/* ===== PAYMENT METHODS ===== */}
          <RevealSection id="payment">
            <h2 className="text-2xl font-bold text-text-primary">Payment Methods Compared</h2>
            <div className="mt-6">
              <DataTable
                headers={["Method", "Common trade-off", "Verify before using"]}
                rows={[
                  ["Bank transfer", "Often lower cost, slower settlement", "Deposit fee, arrival time, and withdrawal hold"],
                  ["Debit or credit card", "Often faster, potentially higher cost", "Provider fee and card-issuer treatment"],
                  ["Digital wallet", "Convenient where supported", "Funding fee, limits, and account eligibility"],
                  ["Wire transfer", "Useful for some larger transfers", "Bank fee, minimum, instructions, and timing"],
                  ["Crypto deposit", "Requires another funded wallet", "Network, address, tag, confirmations, and conversion cost"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* ===== FEES ===== */}
          <RevealSection id="fees">
            <h2 className="text-2xl font-bold text-text-primary">Understanding Fees When Buying XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              There are several types of fees to be aware of when buying XRP:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Trading fee", desc: "The venue's explicit charge for executing the order; it may vary by product, order type, volume, asset, and account" },
                { title: "Deposit cost", desc: "The cost of moving cash or crypto into the account, including charges from the payment provider" },
                { title: "Spread", desc: "The difference between the reference market price and the price quoted to you; simple-buy products often include it" },
                { title: "Withdrawal fee", desc: "The venue's charge to send XRP off-platform; this is separate from the XRPL transaction cost" },
                { title: "XRPL transaction cost", desc: "The network currently destroys a minimum of 0.00001 XRP for a standard transaction, with load-based increases possible" },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Compare the amount received" variant="success">
                <p>Run the same small hypothetical order through each candidate&apos;s preview and record the cash charged and XRP received. This captures the fee and spread together. Repeat the check when you buy because platforms can change pricing by region, product, market conditions, and order size.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== SECURITY ===== */}
          <RevealSection id="security">
            <h2 className="text-2xl font-bold text-text-primary">Security Best Practices</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Keeping your XRP safe is just as important as buying it. Here are the essential security practices every XRP holder should follow:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Enable 2FA", desc: "Use an authenticator app (Google Authenticator, Authy) rather than SMS for two-factor authentication on all exchange accounts." },
                { title: "Use Strong Passwords", desc: "Create unique, complex passwords for each exchange. Use a password manager like 1Password or Bitwarden." },
                { title: "Beware of Phishing", desc: "Always verify you're on the correct website URL. Bookmark exchange websites and never click links from emails or messages." },
                { title: "Choose Custody Deliberately", desc: "Compare provider recovery and account risk with the key-management and recovery responsibility of self-custody." },
                { title: "Backup Recovery Phrases", desc: "Write down wallet recovery phrases on paper and store in a secure location. Never store them digitally or share them with anyone." },
                { title: "Start Small", desc: "When first buying or transferring XRP, start with a small test amount to make sure everything works correctly before moving larger sums." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== STORAGE ===== */}
          <RevealSection id="storage">
            <h2 className="text-2xl font-bold text-text-primary">Where to Store Your XRP After Buying</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              After purchasing XRP, you have several storage options. Your choice depends on how much you hold, how often you trade, and your security preferences. For a complete guide, see our <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Wallets guide</Link>.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Option", "Who controls keys", "Primary risk", "Recovery path"]}
                rows={[
                  ["Exchange account", "Provider", "Account compromise or provider failure", "Provider identity and account-recovery process"],
                  ["Software wallet", "You", "Device, malware, or secret loss", "Your protected recovery secret"],
                  ["Hardware wallet", "You", "Secret loss, signing mistakes, or supply-chain risk", "Your protected recovery secret and tested device process"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* ===== COMMON MISTAKES ===== */}
          <RevealSection id="mistakes">
            <h2 className="text-2xl font-bold text-text-primary">Common Mistakes to Avoid</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Forgetting the destination tag", desc: "When sending XRP to an exchange, you must include the destination tag. Missing it can result in lost funds. Self-custody wallets typically don't require tags." },
                { title: "Using a stale reserve figure", desc: "The XRPL base reserve can change through validator voting. Verify the current setting before funding a new account." },
                { title: "Assuming a license removes risk", desc: "Licensing, custody protections, insurance, and insolvency treatment vary. Read the venue's current terms and disclosures." },
                { title: "Investing more than you can afford", desc: "Cryptocurrency is volatile. Only invest money you can afford to lose entirely. Never take on debt to buy crypto." },
                { title: "Skipping 2FA setup", desc: "Two-factor authentication is your most important security measure. Set it up immediately after creating your exchange account." },
                { title: "Skipping the final preview", desc: "Verify the price, spread, fee, total charged, and XRP received immediately before confirming every order." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq">
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== RELATED ===== */}
          <RevealSection>
            <h2 className="text-2xl font-bold text-text-primary">Related Resources</h2>
            <LearnLinkGrid links={[
              { href: "/how-to-start", label: "Get Started with XRP", desc: "Buy your first XRP" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
              { href: "/learn/how-to-send-xrp", label: "How to Send XRP", desc: "Transfer XRP quickly" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets Guide", desc: "Compare custody models and recovery risk" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <div className="mt-10">
          <HighlightBox title="Verify the exchange on the day you buy" variant="warning">
            <p>Availability, fees, spreads, withdrawal support, and regional restrictions change frequently. Compare the final order preview and the platform&apos;s current fee and withdrawal documentation before depositing funds. Favor an exchange that is available in your jurisdiction, supports XRP withdrawals, publishes its fees, and lets you use a strong second factor for account security.</p>
          </HighlightBox>
        </div>

        <SourceList sources={[
          { label: "XRPL.org: XRP overview", href: "https://xrpl.org/about/xrp", note: "Official due-diligence guidance and XRP basics" },
          { label: "XRPL account reserves", href: "https://xrpl.org/docs/concepts/accounts/reserves", note: "Verify the current base and owner reserve settings" },
          { label: "Coinbase XRP buying instructions", href: "https://www.coinbase.com/how-to-buy/xrp", note: "Check current availability and order steps" },
          { label: "Coinbase pricing and fee disclosure", href: "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees", note: "How fees, spreads, previews, and withdrawal charges can vary" },
          { label: "Kraken XRP buying instructions", href: "https://www.kraken.com/buy/xrp", note: "Check current availability and order steps" },
          { label: "Kraken fee schedule", href: "https://www.kraken.com/features/fee-schedule", note: "Current instant-buy, spot, funding, and withdrawal fee structures" },
          { label: "Investor.gov: crypto asset risks", href: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/crypto-assets", note: "Investor-protection and crypto-risk context" },
        ]} />

        <LearnCTA
          title="Plan custody before you purchase"
          description="Compare live costs and eligibility, prepare your storage and recovery process, and use a small test transfer before moving a larger amount."
          primaryHref="/learn/xrp-wallets"
          primaryLabel="Choose a Wallet →"
          secondaryHref="/learn/what-is-xrp"
          secondaryLabel="Learn About XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Reviewed July 29, 2026 by the AllAboutXRP Editorial Team using the linked XRPL, exchange, and investor-protection sources. This is educational information, not financial advice.</em>
        </p>
      </div>
    </>
  );
}

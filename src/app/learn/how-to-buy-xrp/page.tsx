import { Metadata } from "next";
import Image from "next/image";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildHowToSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Buy XRP: Step-by-Step Guide (2026)",
  description:
    "Learn how to buy XRP in 2026. Step-by-step guide covering exchanges, wallets, fees, and tips for beginners.",
  openGraph: {
    title: "How to Buy XRP: Complete Guide | AllAboutXRP",
    description:
      "Step-by-step guide to buying XRP on Uphold, Coinbase, Kraken, and more. Everything beginners need to know.",
    url: "https://allaboutxrp.com/learn/how-to-buy-xrp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP: Step-by-Step Guide | AllAboutXRP",
    description: "The complete beginner's guide to buying XRP in 2026.",
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
    dateModified: "2026-02-11",
  }),
  buildHowToSchema({
    name: "How to Buy XRP",
    description: "Step-by-step guide to purchasing XRP cryptocurrency on an exchange.",
    url: "https://allaboutxrp.com/learn/how-to-buy-xrp",
    steps: [
      { name: "Choose an Exchange", text: "Select a reputable cryptocurrency exchange that supports XRP, such as Uphold, Coinbase, Kraken, or Bitstamp." },
      { name: "Create and Verify Your Account", text: "Sign up for an account and complete identity verification (KYC) by providing a government-issued ID and proof of address." },
      { name: "Deposit Funds", text: "Fund your account using a bank transfer, debit card, credit card, or other supported payment method." },
      { name: "Buy XRP", text: "Navigate to the XRP trading pair, enter the amount you want to purchase, review the order, and confirm." },
      { name: "Secure Your XRP", text: "For long-term holding, transfer your XRP to a self-custody wallet like Xaman (formerly XUMM) for maximum security." },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "How to Buy XRP" },
  ]),
  buildFAQSchema([
    { question: "What is the easiest way to buy XRP?", answer: "The easiest way to buy XRP in 2026 is through a major exchange like Uphold, Coinbase, or Kraken. Uphold is particularly popular for XRP because it allows direct USD-to-XRP purchases with low fees." },
    { question: "Can I buy XRP in the United States?", answer: "Yes. Following the 2023 court ruling that XRP is not a security when sold on exchanges, XRP is available on most major U.S. exchanges including Coinbase, Kraken, Uphold, and Gemini." },
    { question: "What is the minimum amount of XRP I can buy?", answer: "Most exchanges allow you to buy fractional amounts of XRP, often as little as $1-10 worth. However, if you plan to use a self-custody wallet, note that XRPL accounts require a 10 XRP reserve to activate." },
    { question: "Is it safe to buy XRP?", answer: "Buying XRP on reputable, regulated exchanges is generally safe. However, always use strong passwords, enable two-factor authentication, and consider moving large holdings to a self-custody wallet." },
    { question: "Should I store XRP on an exchange or in a wallet?", answer: "For small amounts and active trading, an exchange is convenient. For larger holdings or long-term storage, a self-custody wallet like Xaman provides better security because you control your private keys." },
  ]),
];

const faqItems = [
  { q: "What is the easiest way to buy XRP?", a: "The easiest way to buy XRP in 2026 is through a major exchange like Uphold, Coinbase, or Kraken. Uphold is particularly popular for XRP because it allows direct USD-to-XRP purchases with low fees and a simple interface. You can have XRP in your account within minutes of signing up." },
  { q: "Can I buy XRP in the United States?", a: "Yes. Following the 2023 Torres ruling that XRP sold on public exchanges is not a security, XRP is available on most major U.S. exchanges including Coinbase, Kraken, Uphold, Gemini, and Robinhood. U.S. residents can freely buy, sell, and hold XRP." },
  { q: "What is the minimum amount of XRP I can buy?", a: "Most exchanges allow you to buy fractional amounts of XRP, often as little as $1-10 worth. However, if you plan to transfer XRP to a self-custody wallet on the XRP Ledger, note that accounts require a 10 XRP base reserve to activate. This reserve is locked but may be lowered through future validator amendments." },
  { q: "Is it safe to buy XRP?", a: "Buying XRP on reputable, regulated exchanges is generally safe. To maximize security: use strong unique passwords, enable two-factor authentication (2FA), avoid sharing account details, and consider moving large holdings to a self-custody wallet like Xaman where you control your own private keys." },
  { q: "Should I store XRP on an exchange or in a wallet?", a: "For small amounts and active trading, keeping XRP on a trusted exchange is convenient. For larger holdings or long-term storage, a self-custody wallet like Xaman (formerly XUMM) or a hardware wallet like Ledger provides better security. The crypto saying 'not your keys, not your crypto' applies — when you hold your own keys, only you can access your funds." },
  { q: "Do I need to pay taxes on XRP?", a: "In most jurisdictions, buying XRP is not a taxable event. However, selling XRP for profit, trading XRP for other cryptocurrencies, or using XRP to purchase goods and services may trigger capital gains taxes. Consult a tax professional for advice specific to your situation." },
  { q: "Can I buy XRP with a credit card?", a: "Some exchanges like Uphold and Coinbase allow credit card purchases, though fees are typically higher (3-5%) than bank transfers. Be aware that some credit card issuers treat crypto purchases as cash advances, which may incur additional fees and interest." },
];

export default function HowToBuyXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Buy"
          titleAccent="XRP"
          subtitle="Buying XRP, the native token of the XRP Ledger developed by Ripple Labs, has never been easier. As of 2026, XRP is available on virtually every major cryptocurrency exchange worldwide. Here's your complete step-by-step guide."
          breadcrumbLabel="How to Buy XRP"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/how-to-buy-xrp-hero.jpg"
            alt="Cryptocurrency exchange and trading platform"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* TL;DR */}
        <div className="mt-10 rounded-2xl border border-xrp-accent/20 bg-xrp-accent/5 p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-xrp-accent">TL;DR</h2>
          <p className="mt-3 text-text-secondary leading-relaxed">
            <strong className="text-text-primary">The short answer is:</strong> Choose a reputable exchange (Uphold, Coinbase, Kraken), create an account, verify your identity, deposit funds, and buy XRP. For long-term holding, transfer to a self-custody <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallet</Link> like Xaman. The whole process takes 10-30 minutes.
          </p>
        </div>

        <SectionNav items={[
          { id: "before", label: "Before You Start" },
          { id: "exchanges", label: "Best Exchanges" },
          { id: "steps", label: "Step-by-Step" },
          { id: "payment", label: "Payment Methods" },
          { id: "fees", label: "Fees" },
          { id: "security", label: "Security" },
          { id: "storage", label: "Storage" },
          { id: "mistakes", label: "Common Mistakes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Setup Time" value="~15 min" />
          <StatPill label="Min Purchase" value="~$1" />
          <StatPill label="XRP Settlement" value="3-5 sec" />
          <StatPill label="Account Reserve" value="10 XRP" />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== BEFORE YOU START ===== */}
          <RevealSection id="before">
            <h2 className="text-2xl font-bold text-text-primary">Before You Buy XRP — Everything You Need to Know in 2026</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Before purchasing XRP, it&apos;s important to understand the basics. <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP is the native digital asset</Link> of the XRP Ledger, designed for fast, low-cost payments. Following the landmark 2023 court ruling confirming that XRP sold on exchanges is not a security, XRP is now available on virtually every major cryptocurrency exchange in the United States and globally.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Here&apos;s what you need to know before getting started:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "You'll need ID verification", desc: "All major exchanges require Know Your Customer (KYC) verification — a government-issued photo ID and sometimes proof of address" },
                { title: "Bank account or payment method", desc: "A bank account, debit card, or other funding source connected to your exchange account" },
                { title: "Understand the 10 XRP reserve", desc: "If using a self-custody wallet, the XRP Ledger requires 10 XRP to activate an account (this is recoverable if the reserve is lowered)" },
                { title: "Consider your storage plan", desc: "Decide whether you'll hold on the exchange or transfer to a self-custody wallet for added security" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== BEST EXCHANGES ===== */}
          <RevealSection id="exchanges">
            <h2 className="text-2xl font-bold text-text-primary">Best Exchanges to Buy XRP in 2026</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Not all exchanges are created equal. Here&apos;s a comparison of the most popular platforms for buying XRP, based on fees, ease of use, and features:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Exchange", "Trading Fees", "Deposit Methods", "Best For"]}
                rows={[
                  ["Uphold ★", "Spread-based (~1-2%)", "Bank, card, crypto", "Never delisted XRP during SEC case"],
                  ["Coinbase", "0.4-0.6% (Advanced)", "Bank, card, PayPal", "Beginners, U.S. users"],
                  ["Kraken", "0.16-0.26%", "Bank, crypto", "Low fees, advanced traders"],
                  ["Bitstamp", "0.3-0.5%", "Bank, card, crypto", "European users, established exchange"],
                  ["Robinhood", "Spread-based", "Bank transfer", "Existing Robinhood users"],
                  ["Gemini", "0.2-0.4% (ActiveTrader)", "Bank, crypto", "Security-focused users"],
                ]}
                highlightCol={0}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Our Recommendation" variant="accent">
                <p><strong className="text-text-primary">Our #1 pick:</strong> Uphold — they never delisted XRP during the SEC lawsuit against Ripple, proving their loyalty to the XRP community. They also offer the simplest experience with direct XRP purchases. <strong className="text-text-primary">For lower fees:</strong> Kraken&apos;s Pro interface offers some of the lowest trading fees in the industry. <strong className="text-text-primary">For U.S. users wanting an all-in-one:</strong> Coinbase provides a familiar interface and strong regulatory compliance.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== STEP BY STEP ===== */}
          <RevealSection id="steps">
            <h2 className="text-2xl font-bold text-text-primary">Step-by-Step: How to Buy XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Follow these five steps to purchase your first XRP. The entire process typically takes 10-30 minutes, depending on verification times.
            </p>

            <div className="mt-8 space-y-8">
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">1</span>
                  <h3 className="text-xl font-semibold text-text-primary">Choose an Exchange</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Select a reputable cryptocurrency exchange that supports XRP. Consider factors like fees, ease of use, payment methods, and whether the exchange is available in your country. The exchanges listed above are all well-established and regulated.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">2</span>
                  <h3 className="text-xl font-semibold text-text-primary">Create and Verify Your Account</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Sign up with your email address, create a strong unique password, and enable two-factor authentication (2FA) immediately. You&apos;ll then need to complete KYC verification by providing a government-issued photo ID (passport, driver&apos;s license, or national ID card). Some exchanges also require a selfie and proof of address. Verification can be instant or take up to 24-48 hours depending on the exchange and demand.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">3</span>
                  <h3 className="text-xl font-semibold text-text-primary">Deposit Funds</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Fund your exchange account using your preferred payment method. Bank transfers (ACH in the U.S., SEPA in Europe) typically have the lowest fees but can take 1-3 business days. Debit/credit cards offer instant funding but at higher fees (typically 2-4%). Some exchanges also accept PayPal, Apple Pay, or cryptocurrency deposits.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">4</span>
                  <h3 className="text-xl font-semibold text-text-primary">Buy XRP</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Navigate to XRP on your exchange (sometimes listed as XRP or XRP/USD). You can place a <strong className="text-text-primary">market order</strong> (buy at the current price immediately) or a <strong className="text-text-primary">limit order</strong> (set a specific price you&apos;re willing to pay). Enter the amount in dollars or XRP, review the total including fees, and confirm the purchase.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">5</span>
                  <h3 className="text-xl font-semibold text-text-primary">Secure Your XRP</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  For long-term holding, consider transferring your XRP to a self-custody <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallet</Link> like Xaman (formerly XUMM) or a hardware wallet like Ledger. This gives you full control over your private keys. Remember: &quot;Not your keys, not your crypto.&quot; For active trading, keeping XRP on a reputable exchange is acceptable.
                </p>
              </div>
            </div>
          </RevealSection>

          {/* ===== PAYMENT METHODS ===== */}
          <RevealSection id="payment">
            <h2 className="text-2xl font-bold text-text-primary">Payment Methods Compared</h2>
            <div className="mt-6">
              <DataTable
                headers={["Method", "Speed", "Typical Fee", "Availability"]}
                rows={[
                  ["Bank Transfer (ACH)", "1-3 business days", "Free or minimal", "Most exchanges"],
                  ["SEPA Transfer", "1-2 business days", "Free or €0.15", "European exchanges"],
                  ["Debit Card", "Instant", "2-4%", "Most exchanges"],
                  ["Credit Card", "Instant", "3-5%", "Select exchanges"],
                  ["PayPal", "Instant", "Varies", "Coinbase, some others"],
                  ["Wire Transfer", "Same/next day", "$10-30", "Kraken, Gemini"],
                  ["Crypto Deposit", "Minutes", "Network fee only", "All exchanges"],
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
                { title: "Trading fees", desc: "The exchange's fee for executing your trade — typically 0.1-1.5% depending on the platform and whether you use basic or pro interfaces" },
                { title: "Deposit fees", desc: "Some payment methods (especially credit/debit cards) incur deposit fees of 2-5%. Bank transfers are usually free." },
                { title: "Spread", desc: "The difference between buy and sell prices. Some exchanges like Uphold use spread-based pricing instead of explicit fees." },
                { title: "Withdrawal fees", desc: "If you transfer XRP to your own wallet, most exchanges charge a small withdrawal fee (typically 0.25-1 XRP)" },
                { title: "XRPL transaction fee", desc: "The on-chain fee for XRP transactions is approximately 0.00001 XRP — essentially zero" },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Pro Tip: Reduce Your Fees" variant="success">
                <p>Use bank transfers instead of cards, trade on &quot;Pro&quot; or &quot;Advanced&quot; interfaces (Coinbase Advanced, Kraken Pro) for lower fees, and place limit orders instead of market orders. These simple steps can save you 50-80% on trading fees.</p>
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
                { title: "Self-Custody for Large Holdings", desc: "If holding significant amounts, transfer to a self-custody wallet. Hardware wallets (Ledger, Trezor) provide the highest security." },
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
                headers={["Option", "Security", "Convenience", "Best For"]}
                rows={[
                  ["Exchange (Coinbase, Kraken)", "Medium", "High", "Active traders, small amounts"],
                  ["Xaman (XUMM) Mobile Wallet", "High", "High", "Self-custody, daily use"],
                  ["Ledger Hardware Wallet", "Very High", "Medium", "Large holdings, long-term storage"],
                  ["Paper Wallet", "Very High", "Low", "Cold storage, maximum security"],
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
                { title: "Not accounting for the 10 XRP reserve", desc: "XRPL accounts require a 10 XRP base reserve. This XRP is locked in your account and cannot be spent (though the reserve amount may decrease in the future)." },
                { title: "Buying on unregulated exchanges", desc: "Stick to well-known, regulated exchanges. Unregulated platforms carry higher risk of fraud, hacks, or sudden shutdowns." },
                { title: "Investing more than you can afford", desc: "Cryptocurrency is volatile. Only invest money you can afford to lose entirely. Never take on debt to buy crypto." },
                { title: "Skipping 2FA setup", desc: "Two-factor authentication is your most important security measure. Set it up immediately after creating your exchange account." },
                { title: "Panic selling during dips", desc: "Crypto markets are volatile. If you believe in XRP long-term, short-term price swings are normal. Have a plan and stick to it." },
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
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Understand before you buy" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Choose the right wallet" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply and distribution" },
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Compare the two assets" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Earn yield on your XRP" },
              { href: "/best/xrp-exchanges", label: "Best XRP Exchanges", desc: "Top exchanges compared" },
              { href: "/best/xrp-wallets", label: "Best XRP Wallets", desc: "Top wallet picks for 2026" },
              { href: "/answers/is-it-too-late-to-buy-xrp", label: "Is It Too Late to Buy?", desc: "Timing your XRP purchase" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Ready to Buy Your First XRP?"
          description="You now have everything you need to purchase XRP safely and securely. Start with a small amount, learn the process, and grow from there."
          primaryHref="/learn/xrp-wallets"
          primaryLabel="Choose a Wallet →"
          secondaryHref="/learn/what-is-xrp"
          secondaryLabel="Learn About XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 11, 2026. Written by the AllAboutXRP Editorial Team. Sources: Exchange official documentation, XRPL.org, CoinMarketCap. This is not financial advice.</em>
        </p>
      </div>
    </>
  );
}

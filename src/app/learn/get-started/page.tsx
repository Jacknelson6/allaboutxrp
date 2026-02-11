import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildBreadcrumbSchema, buildFAQSchema, buildHowToSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const metadata: Metadata = {
  title: "How to Buy XRP: Beginner's Guide 2026",
  description:
    "How to buy XRP step by step. Complete beginner guide covering exchanges, wallets, security, and tips. Start your XRP journey today.",
  openGraph: {
    title: "How to Buy XRP: Complete Beginner Guide | AllAboutXRP",
    description: "Step-by-step guide to buying XRP — choose an exchange, set up a wallet, and secure your crypto. Updated 2026.",
    url: "https://allaboutxrp.com/learn/get-started",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP: Beginner Guide | AllAboutXRP",
    description: "Complete XRP beginner guide — where to buy, how to store, and essential tips for new investors.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/get-started" },
};

const schemas = [
  buildHowToSchema({
    name: "How to Buy XRP",
    description: "A step-by-step guide to purchasing XRP cryptocurrency for beginners.",
    url: "https://allaboutxrp.com/learn/get-started",
    steps: [
      { name: "Choose an Exchange", text: "Select a reputable cryptocurrency exchange that supports XRP trading, such as Uphold, Coinbase, Kraken, or Bitstamp." },
      { name: "Create & Verify Account", text: "Sign up and complete identity verification (KYC) with a government-issued ID." },
      { name: "Deposit Funds", text: "Add funds via bank transfer, debit card, or other supported payment method." },
      { name: "Buy XRP", text: "Search for XRP and place your buy order at market or limit price." },
      { name: "Secure Your XRP", text: "Consider transferring to a self-custody wallet like Xaman (XUMM) for long-term storage." },
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Get Started" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/get-started" }),
  buildFAQSchema([
    { question: "What is the best exchange to buy XRP?", answer: "For beginners, Uphold is recommended for simplicity. Coinbase is the largest U.S. exchange. Kraken offers advanced features with low fees." },
    { question: "What is the minimum amount of XRP I can buy?", answer: "Most exchanges allow fractional XRP — as little as $1-10 worth. XRP wallets require a 10 XRP reserve to activate." },
    { question: "What wallet should I use for XRP?", answer: "Xaman (formerly XUMM) is the most popular XRP wallet. For hardware security, Ledger and Trezor both support XRP." },
    { question: "Is it safe to buy XRP?", answer: "Buying from a regulated exchange is generally safe. Enable 2FA, use strong passwords, and consider self-custody for long-term holding." },
  ]),
];

const faqItems = [
  { q: "What is the best exchange to buy XRP?", a: "For beginners, Uphold is recommended for its simplicity and direct XRP purchases. Coinbase is the largest U.S. exchange with strong security. Kraken offers advanced features with low fees." },
  { q: "What is the minimum amount of XRP I can buy?", a: "Most exchanges let you buy fractional XRP — as little as $1-10 worth. However, self-custody wallets need at least 10 XRP to activate an account on the XRP Ledger." },
  { q: "What wallet should I use for XRP?", a: "Xaman (formerly XUMM) is the most popular — a free, self-custody mobile wallet built for the XRP Ledger. For hardware security, Ledger and Trezor both support XRP." },
  { q: "Is it safe to buy XRP?", a: "Buying from a regulated exchange is generally safe. Enable 2FA, use strong passwords, and consider self-custody for long-term holding. All crypto investments carry risk." },
  { q: "Why do I need 10 XRP to activate a wallet?", a: "The 10 XRP reserve is a protocol-level feature designed to prevent spam. It's locked in your account and not spendable, ensuring only serious users create accounts." },
];

const exchanges = [
  { name: "Uphold", desc: "Buy XRP directly with USD, EUR, GBP. No trading fees on spreads. Best for beginners.", url: "https://uphold.com", recommended: true },
  { name: "Coinbase", desc: "Largest U.S. exchange with strong security and insurance. Easy interface and mobile app.", url: "https://coinbase.com/join/MAYGHUG?src=referral-link", recommended: false },
  { name: "Kraken", desc: "Established exchange with advanced trading features, low fees, and strong security.", url: "https://kraken.com", recommended: false },
  { name: "Bitstamp", desc: "One of the oldest exchanges (2011). EU-regulated with excellent XRP liquidity.", url: "https://bitstamp.net", recommended: false },
  { name: "Binance", desc: "World's largest exchange by volume. Lowest fees. Not available in all U.S. states.", url: "https://binance.com", recommended: false },
  { name: "Crypto.com", desc: "Mobile-first exchange with Visa debit card and XRP staking. Good all-around.", url: "https://crypto.com", recommended: false },
];

const wallets = [
  { name: "Xaman (XUMM)", type: "Mobile (Self-Custody)", desc: "The most popular XRP wallet. Built for the XRPL with DEX access, NFT support, and full self-custody. Free.", best: "Best overall" },
  { name: "Ledger", type: "Hardware", desc: "Industry-leading hardware wallet. Keeps private keys offline for maximum security. Starts at ~$79.", best: "Best for security" },
  { name: "Trezor", type: "Hardware", desc: "Open-source hardware wallet with XRP support. User-friendly interface. Starts at ~$69.", best: "Best open-source" },
  { name: "Trust Wallet", type: "Mobile (Self-Custody)", desc: "Multi-chain mobile wallet with XRP support. Backed by Binance. Good for multiple cryptos.", best: "Best multi-chain" },
];

export default function GetStartedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-12">
        <LearnHero
          title="How to Buy"
          titleAccent="XRP"
          subtitle="The complete beginner's guide — from choosing an exchange to securing your tokens in a wallet. Whether you're new to crypto or just new to XRP, you'll be set up in minutes."
          breadcrumbLabel="Get Started"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" />
            <LastUpdated date="February 11, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Buy <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> in 5 steps: choose an exchange (Uphold, Coinbase, or Kraken), create an account, deposit funds, buy XRP, then secure it in a self-custody wallet like Xaman. XRP wallets require a 10 XRP reserve. For long-term holding, use a hardware wallet (Ledger/Trezor). Learn about <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">the company behind XRP</Link> first.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Best Beginner Exchange", value: "Uphold" },
          { label: "Largest U.S. Exchange", value: "Coinbase" },
          { label: "Best Wallet", value: "Xaman (XUMM)" },
          { label: "Wallet Reserve", value: "10 XRP required" },
          { label: "Min Purchase", value: "~$1-10 on most exchanges" },
          { label: "Best Security", value: "Ledger hardware wallet" },
        ]} />

        <SectionNav items={[
          { id: "steps", label: "Step by Step" },
          { id: "exchanges", label: "Exchanges" },
          { id: "wallets", label: "Wallets" },
          { id: "security", label: "Security" },
          { id: "mistakes", label: "Mistakes to Avoid" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* STEP BY STEP */}
          <RevealSection id="steps">
            <h2 className="text-2xl font-bold text-text-primary">Step-by-Step: How to Buy XRP</h2>
            <div className="mt-6 space-y-4">
              {[
                { num: "1", title: "Choose an Exchange", desc: "Pick a regulated cryptocurrency exchange that supports XRP. For beginners, we recommend Uphold for simplicity or Coinbase for security." },
                { num: "2", title: "Create & Verify Your Account", desc: "Sign up and complete KYC verification with a government-issued ID. Typically takes 5-15 minutes." },
                { num: "3", title: "Deposit Funds", desc: "Add money via bank transfer (ACH), debit/credit card, wire, or Apple/Google Pay. Bank transfers are free but take 1-3 days; cards are instant." },
                { num: "4", title: "Buy XRP", desc: "Search for 'XRP', enter the amount, and place your order at market price or set a limit order." },
                { num: "5", title: "Secure Your XRP", desc: "Transfer to a self-custody wallet like Xaman for long-term storage. 'Not your keys, not your crypto.'" },
              ].map((step, i) => (
                <div key={step.num} className="flex gap-5 rounded-xl border border-white/[0.06]/60 bg-black p-6  transition-all duration-300 hover:border-xrp-accent/20 hover:shadow-[0_4px_20px_rgba(0,180,255,0.04)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-xrp-accent/10">
                    <span className="font-mono text-lg font-bold text-xrp-accent">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{step.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* EXCHANGES */}
          <RevealSection id="exchanges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Where to Buy XRP: Exchange Comparison</h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              All of these exchanges support XRP and are available to most users.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {exchanges.map((ex) => (
                <a
                  key={ex.name}
                  href={ex.url}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className={`flex flex-col rounded-xl border p-5  transition-colors ${
                    ex.recommended
                      ? "border-xrp-accent/30 bg-gradient-to-br from-xrp-accent/5 to-transparent sm:col-span-2"
                      : "border-white/[0.06]/60 bg-black"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-text-primary">{ex.name}</h3>
                    {ex.recommended ? (
                      <span className="rounded-full border border-xrp-accent/20 bg-xrp-accent/10 px-2.5 py-0.5 text-xs font-semibold text-xrp-accent">★ Recommended</span>
                    ) : null}
                    <span className="ml-auto text-xs text-text-secondary">↗</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{ex.desc}</p>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-text-primary">Detailed Exchange Comparison</h3>
              <div className="mt-4">
                <DataTable
                  headers={["Exchange", "Best For", "Fees", "U.S. Available"]}
                  rows={[
                    ["Uphold", "Beginners", "Spread-based (no fee)", "Yes"],
                    ["Coinbase", "Security-conscious", "0.5-1.5%", "Yes"],
                    ["Kraken", "Active traders", "0.16-0.26%", "Yes"],
                    ["Bitstamp", "EU users", "0.3-0.5%", "Yes"],
                    ["Binance", "Low fees, advanced", "0.1%", "Partial"],
                    ["Crypto.com", "Mobile users", "0.075-0.4%", "Yes"],
                  ]}
                  highlightCol={0}
                />
              </div>
            </div>
          </RevealSection>

          {/* WALLETS */}
          <RevealSection id="wallets" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best XRP Wallets</h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              While exchanges are fine for trading, <strong className="text-text-primary">self-custody wallets</strong> are recommended for long-term XRP storage.
            </p>

            <div className="mt-4">
              <HighlightBox title="10 XRP Wallet Reserve" variant="warning">
                <p>XRP wallets require a <strong className="text-text-primary">10 XRP reserve</strong> to activate an account on the XRP Ledger. This reserve is locked (not spendable) and acts as anti-spam protection. You&apos;ll need to send at least 10 XRP to activate a new wallet.</p>
              </HighlightBox>
            </div>

            <div className="mt-6 space-y-3">
              {wallets.map((w) => (
                <div key={w.name} className="rounded-xl border border-white/[0.06]/60 bg-black p-5  transition-all duration-300 hover:border-xrp-accent/20">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-text-primary">{w.name}</h3>
                    <span className="rounded-full border border-white/[0.06] bg-[#111113] px-2 py-0.5 text-[10px] font-semibold text-text-secondary">{w.type}</span>
                    <span className="ml-auto text-xs font-medium text-xrp-accent">{w.best}</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* SECURITY */}
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Essential Security Tips</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Enable Two-Factor Authentication (2FA)", desc: "Use an authenticator app (Google Authenticator, Authy) — not SMS, which can be SIM-swapped." },
                { title: "Never Share Your Seed Phrase", desc: "Your seed phrase is the master key to your wallet. Write it on paper, store securely, and never share it. No legitimate service will ever ask for it." },
                { title: "Verify URLs Carefully", desc: "Bookmark the correct exchange/wallet URLs. Phishing sites are the #1 way people lose crypto." },
                { title: "Start Small", desc: "Get comfortable with the process before investing larger sums. Practice with a small test transaction first." },
                { title: "Use Hardware for Large Holdings", desc: "If holding significant XRP long-term, a Ledger or Trezor provides the highest security by keeping keys offline." },
              ]} variant="check" />
            </div>
          </RevealSection>

          {/* HOW TRANSACTIONS WORK */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Do XRP Transactions Work After You Buy?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Once you own <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link>, you can send it to anyone with an XRPL address in 3-5 seconds for less than $0.01:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "1. Initiate", desc: "Send from your exchange or wallet (like Xaman)" },
                { title: "2. Broadcast", desc: "Transaction is sent to the XRPL's 150+ validators" },
                { title: "3. Consensus", desc: "Validators agree on validity in 3-5 seconds" },
                { title: "4. Recorded", desc: "Permanently on the ledger — visible on XRPScan" },
              ]} />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              You can also use the XRPL&apos;s built-in DEX, access NFTs, and interact with the growing ecosystem — all from your wallet.
            </p>
          </RevealSection>

          {/* BEFORE INVESTING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Should You Know Before Investing in XRP?</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Volatility", desc: "Crypto prices can swing 10-20% in a day. Only invest what you can afford to lose." },
                { title: "Research", desc: "Understand what XRP is, how Ripple uses it, and the role of escrow in supply management." },
                { title: "Tax Implications", desc: "Crypto gains are taxable in most jurisdictions. Keep records of purchases and sales." },
                { title: "Time Horizon", desc: "If you believe in XRP's long-term story, short-term fluctuations matter less." },
                { title: "Diversification", desc: "Don't put all your investment capital into any single asset." },
              ]} variant="warn" />
            </div>
          </RevealSection>

          {/* COMMON MISTAKES */}
          <RevealSection id="mistakes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Mistakes Beginners Make</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="Not verifying the correct XRP token" reality="Search specifically for 'XRP' — not 'XRP Classic' or other scam tokens. The real XRP is native to the XRP Ledger." />
              <MisconceptionCard myth="Leaving large holdings on exchanges" reality="Exchanges can be hacked or freeze withdrawals. Transfer to a self-custody wallet like Xaman for long-term holding." />
              <MisconceptionCard myth="Forgetting about the 10 XRP wallet reserve" reality="XRPL accounts need 10 XRP to activate. Don't be surprised when 10 XRP appears 'locked' — it's a protocol feature." />
              <MisconceptionCard myth="Panic selling during dips" reality="XRP's price is volatile. Have a plan before you buy. Understand what you own by reading our what-is-XRP guide." />
              <MisconceptionCard myth="Sharing seed phrases or private keys" reality="No legitimate service will ever ask for your seed phrase. If someone asks, it's a scam. Period." />
              <MisconceptionCard myth="Using SMS for 2FA" reality="SMS is vulnerable to SIM swapping. Use an authenticator app (Google Authenticator, Authy) for much stronger security." />
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Before you buy, make sure you understand what you&apos;re investing in. These guides cover everything you need to know:
            </p>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Understand XRP before you buy" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company building on XRP" },
              { href: "/learn/escrow", label: "Escrow Explained", desc: "How XRP supply is managed" },
              { href: "/learn/rlusd", label: "RLUSD & XRP", desc: "How Ripple's stablecoin helps XRP" },
              { href: "/learn/history", label: "XRP History & Timeline", desc: "From 2011 to present" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions using XRP" },
              { href: "/best/xrp-wallets", label: "Best XRP Wallets", desc: "Top wallet picks for 2026" },
              { href: "/best/xrp-exchanges", label: "Best XRP Exchanges", desc: "Where to buy XRP safely" },
              { href: "/answers/is-it-too-late-to-buy-xrp", label: "Is It Too Late to Buy XRP?", desc: "Timing considerations" },
              { href: "/learn/faq", label: "FAQ", desc: "Common questions answered" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Deepen Your Knowledge"
          description="Now that you know how to buy XRP, understand what makes it unique — from the technology to the team to the $150 trillion market opportunity."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="What is XRP? →"
          secondaryHref="/learn/what-is-ripple"
          secondaryLabel="What is Ripple?"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
        </p>
      </div>
    </>
  );
}

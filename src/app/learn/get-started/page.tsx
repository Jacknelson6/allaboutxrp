import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import Link from "next/link";

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
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Buy XRP",
    description: "A step-by-step guide to purchasing XRP cryptocurrency for beginners.",
    url: "https://allaboutxrp.com/learn/get-started",
    step: [
      { "@type": "HowToStep", position: 1, name: "Choose an Exchange", text: "Select a reputable cryptocurrency exchange that supports XRP trading, such as Uphold, Coinbase, Kraken, or Bitstamp." },
      { "@type": "HowToStep", position: 2, name: "Create & Verify Account", text: "Sign up and complete identity verification (KYC) with a government-issued ID." },
      { "@type": "HowToStep", position: 3, name: "Deposit Funds", text: "Add funds via bank transfer, debit card, or other supported payment method." },
      { "@type": "HowToStep", position: 4, name: "Buy XRP", text: "Search for XRP and place your buy order at market or limit price." },
      { "@type": "HowToStep", position: 5, name: "Secure Your XRP", text: "Consider transferring to a self-custody wallet like Xaman (XUMM) for long-term storage." },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://allaboutxrp.com/learn" },
      { "@type": "ListItem", position: 3, name: "Get Started" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best exchange to buy XRP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For beginners, Uphold is recommended for its simplicity and direct XRP purchases with no trading fees. Coinbase is the largest U.S. exchange with strong security. Kraken offers advanced features with low fees. Bitstamp is well-established with good XRP liquidity.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum amount of XRP I can buy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most exchanges allow you to buy fractional XRP — you can start with as little as $1-10 worth. Note that XRP wallets require a 10 XRP reserve to activate an account on the XRP Ledger.",
        },
      },
      {
        "@type": "Question",
        name: "What wallet should I use for XRP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xaman (formerly XUMM) is the most popular XRP wallet — it's a self-custody mobile wallet built specifically for the XRP Ledger. For hardware security, Ledger and Trezor both support XRP. You can also use the XRPL's built-in DEX through Xaman.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to buy XRP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buying XRP from a regulated exchange is generally safe. Use exchanges with strong security, enable two-factor authentication, and consider transferring to a self-custody wallet for long-term holding. Never share your private keys or seed phrase.",
        },
      },
    ],
  },
];

const exchanges = [
  { name: "Uphold", description: "Buy XRP directly with USD, EUR, GBP. No trading fees on spreads. Best for beginners — simple interface and instant purchases.", url: "https://uphold.com", recommended: true },
  { name: "Coinbase", description: "Largest U.S. exchange with strong security and insurance. Easy interface, wide asset selection, and mobile app.", url: "https://coinbase.com", recommended: false },
  { name: "Kraken", description: "Established exchange with advanced trading features, low fees, and strong security track record. Good for intermediate users.", url: "https://kraken.com", recommended: false },
  { name: "Bitstamp", description: "One of the oldest exchanges (founded 2011). EU-regulated with excellent XRP liquidity and competitive fees.", url: "https://bitstamp.net", recommended: false },
  { name: "Binance", description: "World's largest exchange by volume. Lowest fees, most trading pairs. Not available in all U.S. states.", url: "https://binance.com", recommended: false },
  { name: "Crypto.com", description: "Popular mobile-first exchange with a Visa debit card. Earn interest on XRP holdings. Good all-around platform.", url: "https://crypto.com", recommended: false },
];

const wallets = [
  { name: "Xaman (XUMM)", type: "Mobile (Self-Custody)", description: "The most popular XRP wallet. Built specifically for the XRPL with built-in DEX access, NFT support, and full self-custody. Free.", best: "Best overall for XRP" },
  { name: "Ledger", type: "Hardware", description: "Industry-leading hardware wallet supporting XRP. Keeps private keys offline for maximum security. Starts at ~$79.", best: "Best for security" },
  { name: "Trezor", type: "Hardware", description: "Open-source hardware wallet with XRP support. Excellent security with a user-friendly interface. Starts at ~$69.", best: "Best open-source option" },
  { name: "Trust Wallet", type: "Mobile (Self-Custody)", description: "Multi-chain mobile wallet with XRP support. Backed by Binance. Good for managing multiple cryptocurrencies.", best: "Best multi-chain wallet" },
];

export default function GetStartedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/learn" className="hover:text-xrp-accent transition-colors">Learn</Link></li>
            <li>/</li>
            <li className="text-text-primary font-medium">Get Started</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          <span className="gradient-text">How to Buy XRP</span>: Beginner&apos;s Guide
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          Want to know <strong>how to buy XRP</strong>? This complete <strong>XRP beginner guide</strong> walks you through everything — from choosing an exchange to securing your tokens in a wallet. Whether you&apos;re new to crypto or just new to XRP, you&apos;ll be set up in minutes.
        </p>

        <div className="mt-6"><Disclaimer /></div>

        <article className="mt-12 space-y-12">
          {/* Step-by-Step */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Step-by-Step: How to Buy XRP</h2>
            <div className="mt-6 space-y-4">
              {[
                { num: "1", title: "Choose an Exchange", desc: "Pick a regulated cryptocurrency exchange that supports XRP. For beginners, we recommend Uphold for its simplicity, or Coinbase for its security. See the full comparison below." },
                { num: "2", title: "Create & Verify Your Account", desc: "Sign up with your email and complete KYC (Know Your Customer) verification. You'll need a government-issued ID (driver's license or passport) and sometimes proof of address. This typically takes 5-15 minutes." },
                { num: "3", title: "Deposit Funds", desc: "Add money to your exchange account via bank transfer (ACH), debit/credit card, wire transfer, or Apple Pay/Google Pay. Bank transfers are usually free but take 1-3 days; cards are instant but may have higher fees." },
                { num: "4", title: "Buy XRP", desc: "Search for 'XRP' on the exchange, enter the amount you want to buy, and place your order. You can buy at 'market price' (current price) or set a 'limit order' (buy when it reaches a specific price)." },
                { num: "5", title: "Secure Your XRP", desc: "For long-term holding, transfer your XRP to a self-custody wallet like Xaman (XUMM). This means you control your private keys — not the exchange. Remember: 'Not your keys, not your crypto.'" },
              ].map((step) => (
                <div key={step.num} className="flex gap-5 rounded-xl border border-surface-border bg-surface-card/50 p-6 backdrop-blur-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-xrp-accent/10">
                    <span className="font-mono text-lg font-bold text-xrp-accent">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-text-primary">{step.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Where to Buy */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Where to Buy XRP: Exchange Comparison</h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              All of these exchanges support XRP and are available to most users. Choose based on your experience level, location, and preferred features.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {exchanges.map((ex) => (
                <a
                  key={ex.name}
                  href={ex.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card-glow flex flex-col rounded-xl border p-5 backdrop-blur-sm transition-colors hover:border-xrp-accent/30 ${
                    ex.recommended
                      ? "border-xrp-accent/30 bg-gradient-to-br from-xrp-accent/5 to-transparent sm:col-span-2"
                      : "border-surface-border bg-surface-card/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-bold text-text-primary">{ex.name}</h3>
                    {ex.recommended && (
                      <span className="rounded-full border border-xrp-accent/20 bg-xrp-accent/10 px-2.5 py-0.5 text-xs font-semibold text-xrp-accent">
                        ★ Recommended
                      </span>
                    )}
                    <span className="ml-auto text-xs text-text-secondary">↗</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{ex.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Wallets */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Best XRP Wallets</h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              While exchanges are fine for trading, <strong>self-custody wallets</strong> are recommended for long-term XRP storage. With a self-custody wallet, you hold your own private keys — meaning only you can access your funds.
            </p>

            <div className="mt-2 rounded-lg border border-warning/20 bg-warning/5 p-4 text-sm text-text-secondary">
              <strong className="text-warning">Important:</strong> XRP wallets require a <strong>10 XRP reserve</strong> to activate an account on the XRP Ledger. This reserve is locked (not spendable) and acts as anti-spam protection. When setting up a new wallet, you&apos;ll need to send at least 10 XRP to activate it.
            </div>

            <div className="mt-6 space-y-3">
              {wallets.map((w) => (
                <div key={w.name} className="rounded-xl border border-surface-border bg-surface-card/50 p-5 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display font-semibold text-text-primary">{w.name}</h3>
                    <span className="rounded-full border border-surface-border bg-surface-elevated px-2 py-0.5 text-[10px] font-semibold text-text-secondary">{w.type}</span>
                    <span className="ml-auto text-xs font-medium text-xrp-accent">{w.best}</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{w.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security Tips */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Essential Security Tips</h2>
            <div className="mt-6 space-y-3">
              {[
                { title: "Enable Two-Factor Authentication (2FA)", desc: "Always enable 2FA on your exchange accounts. Use an authenticator app (Google Authenticator, Authy) — not SMS, which can be SIM-swapped." },
                { title: "Never Share Your Seed Phrase", desc: "Your seed phrase (recovery phrase) is the master key to your wallet. Write it down on paper, store it securely, and never share it with anyone. No legitimate service will ever ask for it." },
                { title: "Verify URLs Carefully", desc: "Always double-check you're on the real exchange or wallet website. Bookmark the correct URLs. Phishing sites are the #1 way people lose crypto." },
                { title: "Start Small", desc: "When learning, start with a small amount. Get comfortable with the process before investing larger sums. Practice sending a small test transaction first." },
                { title: "Use a Hardware Wallet for Large Holdings", desc: "If you're holding significant amounts of XRP long-term, a hardware wallet (Ledger, Trezor) provides the highest level of security by keeping your keys offline." },
              ].map((tip) => (
                <div key={tip.title} className="rounded-xl border border-surface-border bg-surface-card/50 p-5 backdrop-blur-sm">
                  <h3 className="font-display font-semibold text-text-primary">{tip.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Understanding XRP */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">What You&apos;re Buying: XRP Basics</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Before investing, make sure you understand what <Link href="/learn/what-is-xrp" className="text-xrp-accent">XRP</Link> is:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Speed:</strong> Transactions settle in 3-5 seconds</li>
              <li><strong>Cost:</strong> Fees are less than $0.01</li>
              <li><strong>Supply:</strong> Fixed at 100 billion XRP — no inflation</li>
              <li><strong>Use case:</strong> Cross-border payments, institutional settlement, bridge currency</li>
              <li><strong>Company:</strong> <Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple</Link> builds products on the XRP Ledger but doesn&apos;t control it</li>
              <li><strong>Legal status:</strong> Not a security when sold on exchanges (per the 2023 Torres ruling)</li>
            </ul>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Learn more: <Link href="/learn/what-is-xrp" className="text-xrp-accent">What is XRP? →</Link> | <Link href="/learn/history" className="text-xrp-accent">XRP History →</Link> | <Link href="/escrow" className="text-xrp-accent">Escrow Explained →</Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="rounded-2xl border border-surface-border bg-surface-card/30 p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What is the best exchange to buy XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  For beginners, Uphold is recommended for its simplicity and direct XRP purchases. Coinbase is the largest U.S. exchange with strong security. Kraken offers advanced features with low fees. Choose based on your location and experience level.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What is the minimum amount of XRP I can buy?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Most exchanges let you buy fractional XRP — as little as $1-10 worth. However, if you transfer to a self-custody wallet, you&apos;ll need at least 10 XRP to activate an account on the XRP Ledger.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What wallet should I use for XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Xaman (formerly XUMM) is the most popular XRP wallet — a free, self-custody mobile wallet built specifically for the XRP Ledger. For hardware security, Ledger and Trezor both support XRP.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Is it safe to buy XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Buying from a regulated exchange is generally safe. Enable 2FA, use strong passwords, and consider self-custody for long-term holding. All crypto investments carry risk — never invest more than you can afford to lose.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Why do I need 10 XRP to activate a wallet?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  The 10 XRP reserve is a protocol-level feature of the XRP Ledger designed to prevent spam and bloating. This reserve is locked in your account and not spendable, but it ensures only serious users create accounts on the network.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-surface-border bg-gradient-to-br from-surface-card/50 to-xrp-accent/[0.02] p-8 text-center backdrop-blur-sm">
            <h2 className="font-display text-xl font-bold text-text-primary">Ready to Learn More?</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Now that you know how to buy XRP, deepen your knowledge with our comprehensive guides.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/learn/what-is-xrp" className="rounded-lg bg-xrp-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-xrp-accent/90">
                What is XRP?
              </Link>
              <Link href="/learn/what-is-ripple" className="rounded-lg border border-surface-border bg-surface-card px-4 py-2 text-sm font-semibold text-text-primary transition-all hover:bg-surface-elevated">
                What is Ripple?
              </Link>
              <Link href="/learn/history" className="rounded-lg border border-surface-border bg-surface-card px-4 py-2 text-sm font-semibold text-text-primary transition-all hover:bg-surface-elevated">
                XRP History
              </Link>
            </div>
          </section>
        </article>

        <p className="mt-12 text-xs text-text-secondary/60">
          <em>Last updated: February 2026. This is educational content, not financial advice. Always do your own research.</em>
        </p>
      </div>
    </>
  );
}

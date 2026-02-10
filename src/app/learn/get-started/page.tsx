import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildBreadcrumbSchema, buildFAQSchema, buildHowToSchema } from "@/lib/utils/seo";

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
  buildFAQSchema([
    { question: "What is the best exchange to buy XRP?", answer: "For beginners, Uphold is recommended for its simplicity and direct XRP purchases. Coinbase is the largest U.S. exchange with strong security. Kraken offers advanced features with low fees." },
    { question: "What is the minimum amount of XRP I can buy?", answer: "Most exchanges allow fractional XRP — as little as $1-10 worth. Note that XRP wallets require a 10 XRP reserve to activate an account on the XRP Ledger." },
    { question: "What wallet should I use for XRP?", answer: "Xaman (formerly XUMM) is the most popular XRP wallet — a self-custody mobile wallet built for the XRP Ledger. For hardware security, Ledger and Trezor both support XRP." },
    { question: "Is it safe to buy XRP?", answer: "Buying from a regulated exchange is generally safe. Enable 2FA, use strong passwords, and consider self-custody for long-term holding. Never share your private keys or seed phrase." },
  ]),
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
      <div className="mx-auto max-w-4xl px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/learn" className="hover:text-xrp-accent transition-colors">Learn</Link></li>
            <li>/</li>
            <li className="text-text-primary font-medium">Get Started</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          <span className="gradient-text">How to Buy XRP</span>: Beginner&apos;s Guide
        </h1>
        <div className="mt-4">
          <AuthorByline date="2026-02-10" />
        </div>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          Want to know <strong>how to buy XRP</strong>? This complete <strong>XRP beginner guide</strong> walks you through everything — from choosing an exchange to securing your tokens in a wallet. Whether you&apos;re new to crypto or just new to XRP, you&apos;ll be set up in minutes.
        </p>

        <div className="mt-6"><Disclaimer /></div>

        <article className="cv-auto mt-12 space-y-12">
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
                    {ex.recommended ? (
                      <span className="rounded-full border border-xrp-accent/20 bg-xrp-accent/10 px-2.5 py-0.5 text-xs font-semibold text-xrp-accent">
                        ★ Recommended
                      </span>
                    ) : null}
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

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Which Exchange Is Best for Buying XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The best exchange depends on your experience level, location, and what features matter to you. Here&apos;s how they compare:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-left">
                    <th className="pb-3 font-semibold text-text-primary">Exchange</th>
                    <th className="pb-3 font-semibold text-text-primary">Best For</th>
                    <th className="pb-3 font-semibold text-text-primary">Fees</th>
                    <th className="pb-3 font-semibold text-text-primary">U.S. Available</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Uphold</td>
                    <td className="py-3">Beginners</td>
                    <td className="py-3">Spread-based (no trading fee)</td>
                    <td className="py-3">Yes</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Coinbase</td>
                    <td className="py-3">Security-conscious</td>
                    <td className="py-3">0.5-1.5% (varies)</td>
                    <td className="py-3">Yes</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Kraken</td>
                    <td className="py-3">Active traders</td>
                    <td className="py-3">0.16-0.26%</td>
                    <td className="py-3">Yes</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Bitstamp</td>
                    <td className="py-3">EU users</td>
                    <td className="py-3">0.3-0.5%</td>
                    <td className="py-3">Yes</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Binance</td>
                    <td className="py-3">Low fees, advanced</td>
                    <td className="py-3">0.1%</td>
                    <td className="py-3">Partial (Binance.US)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Crypto.com</td>
                    <td className="py-3">Mobile users</td>
                    <td className="py-3">0.075-0.4%</td>
                    <td className="py-3">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Common Mistakes Beginners Make When Buying XRP</h2>
            <div className="mt-4 space-y-3">
              {[
                { mistake: "Not verifying the correct XRP token", fix: "On some exchanges, search specifically for 'XRP' — not 'XRP Classic' or other scam tokens. The real XRP is native to the XRP Ledger." },
                { mistake: "Leaving large holdings on exchanges", fix: "Exchanges can be hacked or freeze withdrawals. For long-term holding, transfer to a self-custody wallet like Xaman." },
                { mistake: "Forgetting about the 10 XRP wallet reserve", fix: "XRPL accounts need 10 XRP to activate. Don't be surprised when 10 XRP appears 'locked' in your wallet — it's a protocol feature." },
                { mistake: "Panic selling during dips", fix: "XRP's price has historically been volatile. Have a plan before you buy. Understand what you own by reading our guide on what XRP is." },
                { mistake: "Sharing seed phrases or private keys", fix: "No legitimate service, exchange, or support team will ever ask for your seed phrase. If someone asks, it's a scam." },
                { mistake: "Not enabling 2FA", fix: "SMS 2FA is vulnerable to SIM swapping. Use an authenticator app (Google Authenticator, Authy) for much stronger security." },
              ].map((item) => (
                <div key={item.mistake} className="rounded-xl border border-danger/20 bg-danger/5 p-4">
                  <div className="font-semibold text-text-primary">❌ {item.mistake}</div>
                  <div className="mt-1 text-sm text-text-secondary">✅ {item.fix}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Do XRP Transactions Work After You Buy?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Once you own <Link href="/learn/what-is-xrp" className="text-xrp-accent">XRP</Link>, you can send it to anyone with an XRPL address in 3-5 seconds for less than $0.01. Here&apos;s what happens under the hood:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6 text-text-secondary">
              <li><strong>You initiate a transaction</strong> — either from an exchange or your wallet (like Xaman)</li>
              <li><strong>The transaction is broadcast</strong> to the XRP Ledger&apos;s network of 150+ validators</li>
              <li><strong>Validators reach consensus</strong> on the transaction&apos;s validity in 3-5 seconds</li>
              <li><strong>The transaction is permanently recorded</strong> on the ledger — visible to anyone via <a href="https://xrpscan.com" target="_blank" rel="noopener noreferrer" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">XRPScan ↗</a></li>
              <li><strong>A tiny fee is burned</strong> (typically 0.00001 XRP) — making XRP slightly more scarce with every transaction</li>
            </ol>
            <p className="mt-3 text-text-secondary leading-relaxed">
              You can also use the XRPL&apos;s built-in decentralized exchange (DEX) to trade tokens, access NFTs, and interact with the growing XRPL ecosystem — all from your wallet. Understand more about the technology: <Link href="/learn/what-is-xrp" className="text-xrp-accent">What is XRP? →</Link>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">What Should You Know Before Investing in XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Before putting money into XRP — or any cryptocurrency — consider these key factors:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Volatility:</strong> Crypto prices can swing 10-20% in a day. Only invest what you can afford to lose.</li>
              <li><strong>Research:</strong> Understand <Link href="/learn/what-is-xrp" className="text-xrp-accent">what XRP is</Link>, how <Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple</Link> uses it, and the role of <Link href="/escrow" className="text-xrp-accent">escrow</Link> in supply management.</li>
              <li><strong>Tax implications:</strong> Crypto gains are taxable in most jurisdictions. Keep records of your purchases and sales.</li>
              <li><strong>Time horizon:</strong> If you believe in XRP&apos;s long-term institutional adoption story, short-term price fluctuations matter less. Review <Link href="/learn/history" className="text-xrp-accent">XRP&apos;s history</Link> for perspective.</li>
              <li><strong>Diversification:</strong> Don&apos;t put all your investment capital into any single asset.</li>
            </ul>
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

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. This is educational content, not financial advice. Always do your own research before investing.</em>
        </p>
      </div>
    </>
  );
}

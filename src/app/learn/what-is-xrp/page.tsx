import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "What is XRP? Complete Guide to XRP Cryptocurrency",
  description:
    "What is XRP? Learn how XRP works, its use cases, tokenomics, and why it's built for fast global payments. Your complete XRP guide for 2026.",
  openGraph: {
    title: "What is XRP? Complete Cryptocurrency Guide | AllAboutXRP",
    description:
      "Everything you need to know about XRP — the digital asset built for fast, low-cost global payments on the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/what-is-xrp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is XRP? Complete Guide | AllAboutXRP",
    description:
      "Learn what XRP is, how it works, and why it matters. Comprehensive guide covering XRP explained simply.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/what-is-xrp",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "What is XRP? Complete Guide to XRP Cryptocurrency",
    description: "A comprehensive guide explaining what XRP is, how it works, its tokenomics, use cases, and role in the future of global payments.",
    url: "https://allaboutxrp.com/learn/what-is-xrp",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "What is XRP?" },
  ]),
  buildFAQSchema([
    { question: "What is XRP in simple terms?", answer: "XRP is a digital currency designed for fast, low-cost global payments. It settles transactions in 3-5 seconds with near-zero fees on the XRP Ledger, a decentralized blockchain." },
    { question: "Is XRP the same as Ripple?", answer: "No. XRP is a decentralized digital asset on the XRP Ledger. Ripple is a private company that uses XRP in its products. XRP would continue to exist even if Ripple ceased operations." },
    { question: "How many XRP tokens exist?", answer: "100 billion XRP were created at genesis. No more can ever be minted. XRP is slightly deflationary because small amounts are burned with every transaction." },
    { question: "Is XRP a good investment?", answer: "XRP has real utility in cross-border payments, growing institutional adoption, and regulatory clarity after the SEC case. However, all cryptocurrency investments carry risk. Do your own research." },
    { question: "What makes XRP different from Bitcoin?", answer: "XRP settles in 3-5 seconds vs. Bitcoin's 10+ minutes, costs fractions of a cent vs. dollars, handles 1,500+ TPS vs. Bitcoin's ~7, and uses an energy-efficient consensus protocol instead of proof-of-work mining." },
  ]),
];

export default function WhatIsXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/learn" className="hover:text-xrp-accent transition-colors">Learn</Link></li>
            <li>/</li>
            <li className="text-text-primary font-medium">What is XRP?</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          What is <span className="gradient-text">XRP</span>? The Complete Guide
        </h1>
        <div className="mt-4">
          <AuthorByline date="2026-02-10" />
        </div>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          <strong>What is XRP?</strong> XRP is a digital asset native to the XRP Ledger (XRPL), an open-source, decentralized blockchain purpose-built for payments. Created in 2012, XRP was designed to move money globally in seconds for fractions of a cent — solving the inefficiencies of traditional cross-border payments that can take days and cost significant fees.
        </p>

        <div className="mt-6"><Disclaimer /></div>

        {/* Key Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Settlement Time", value: "3-5 sec" },
            { label: "Transaction Fee", value: "< $0.01" },
            { label: "Throughput", value: "1,500+ TPS" },
            { label: "Total Supply", value: "100B (fixed)" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-surface-border bg-surface-card/50 p-4 text-center backdrop-blur-sm">
              <div className="font-display text-xl font-bold text-xrp-accent">{stat.value}</div>
              <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <article className="prose-custom mt-12 space-y-10">
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">XRP Explained: The Basics</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP is a <strong>cryptocurrency</strong> — a digital asset that uses cryptography and blockchain technology to enable secure, peer-to-peer transactions without intermediaries. But XRP isn&apos;t just another cryptocurrency. It was specifically engineered to solve one of the biggest problems in global finance: moving money across borders quickly and cheaply.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Today&apos;s international payment system relies on infrastructure built decades ago. Sending money from the United States to Japan through traditional banking channels can take 3-5 business days and cost $25-50 in fees. XRP completes the same transfer in 3-5 <em>seconds</em> for less than a fraction of a cent.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger processes approximately 1,500 transactions per second — compared to Bitcoin&apos;s ~7 TPS and Ethereum&apos;s ~30 TPS. This throughput makes XRP practical for real-world payment applications at scale.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">How XRP Works</h2>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">The XRP Ledger Consensus Protocol</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Unlike Bitcoin, which uses energy-intensive proof-of-work (PoW) mining, the XRP Ledger uses a unique <strong>Federated Consensus Protocol</strong>. A network of independent validators agrees on the order and validity of XRP transactions every 3-5 seconds. This approach is:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Fast:</strong> Transactions confirm in 3-5 seconds, not minutes or hours</li>
              <li><strong>Energy-efficient:</strong> No mining required — the XRPL uses 120,000x less energy than Bitcoin</li>
              <li><strong>Decentralized:</strong> Over 150 validators globally, with Ripple operating only ~6% of them</li>
              <li><strong>Reliable:</strong> The XRPL has operated continuously since 2012 with zero downtime, closing over 90 million ledgers</li>
            </ul>

            <h3 className="mt-8 font-display text-xl font-semibold text-text-primary">Bridge Currency for Cross-Border Payments</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              XRP&apos;s primary use case is as a <strong>bridge currency</strong> for international payments. Here&apos;s how it works: a sender converts their local currency to XRP, the XRP is transferred across the XRPL in seconds, and the recipient&apos;s financial institution converts the XRP to their local currency. This eliminates the need for pre-funded nostro/vostro accounts — freeing up trillions of dollars currently locked in the global banking system.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-ripple" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">Ripple&apos;s</Link> On-Demand Liquidity (ODL) product leverages this bridge currency function, enabling financial institutions to send cross-border payments without maintaining accounts in destination currencies.
            </p>

            <h3 className="mt-8 font-display text-xl font-semibold text-text-primary">Native Features of the XRP Ledger</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Beyond simple payments, the XRPL includes powerful built-in features:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Decentralized Exchange (DEX):</strong> A built-in order book for trading any XRPL-issued asset</li>
              <li><strong>Escrow:</strong> Time-locked and condition-based <Link href="/escrow" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">escrow contracts</Link> enforced by the protocol</li>
              <li><strong>NFTs (XLS-20):</strong> Native NFT minting and trading since October 2022</li>
              <li><strong>Automated Market Maker (AMM):</strong> Native AMM functionality for decentralized liquidity</li>
              <li><strong>Token Issuance:</strong> Anyone can issue tokens on the XRPL (stablecoins, CBDCs, tokenized assets)</li>
              <li><strong>Multi-signing:</strong> Require multiple parties to authorize a transaction</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">XRP Tokenomics</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong>100 billion XRP</strong> were created when the XRP Ledger launched in 2012. This is a fixed, hard-capped supply — no new XRP can ever be minted. Here&apos;s how the supply breaks down as of February 2026:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-left">
                    <th className="pb-3 font-semibold text-text-primary">Category</th>
                    <th className="pb-3 font-semibold text-text-primary">Amount</th>
                    <th className="pb-3 font-semibold text-text-primary">Details</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Total Supply</td>
                    <td className="py-3">100B XRP</td>
                    <td className="py-3">Fixed forever — no inflation</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Circulating Supply</td>
                    <td className="py-3">~60B XRP</td>
                    <td className="py-3">Available on the open market</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">In Escrow</td>
                    <td className="py-3">~33.9B XRP</td>
                    <td className="py-3"><Link href="/escrow" className="text-xrp-accent">Ripple&apos;s escrow system</Link></td>
                  </tr>
                  <tr>
                    <td className="py-3">Burned (Fees)</td>
                    <td className="py-3">~14.26M XRP</td>
                    <td className="py-3">Permanently destroyed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP is <strong>deflationary</strong> by design. Every transaction on the XRPL burns a small amount of XRP (typically 0.00001 XRP) as a fee. These burned tokens are permanently destroyed, gradually reducing the total supply over time. Over 14 million XRP have been burned to date through transaction fees.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">XRP vs. Bitcoin vs. Ethereum</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-left">
                    <th className="pb-3 font-semibold text-text-primary">Feature</th>
                    <th className="pb-3 font-semibold text-text-primary">XRP</th>
                    <th className="pb-3 font-semibold text-text-primary">Bitcoin</th>
                    <th className="pb-3 font-semibold text-text-primary">Ethereum</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Settlement Time</td>
                    <td className="py-3 text-xrp-accent font-medium">3-5 seconds</td>
                    <td className="py-3">10-60 minutes</td>
                    <td className="py-3">12-15 seconds</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Transaction Fee</td>
                    <td className="py-3 text-xrp-accent font-medium">&lt; $0.01</td>
                    <td className="py-3">$1-50+</td>
                    <td className="py-3">$0.50-100+</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Throughput</td>
                    <td className="py-3 text-xrp-accent font-medium">1,500+ TPS</td>
                    <td className="py-3">~7 TPS</td>
                    <td className="py-3">~30 TPS</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Consensus</td>
                    <td className="py-3">Federated Consensus</td>
                    <td className="py-3">Proof of Work</td>
                    <td className="py-3">Proof of Stake</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Total Supply</td>
                    <td className="py-3">100B (fixed)</td>
                    <td className="py-3">21M (capped)</td>
                    <td className="py-3">~120M (variable)</td>
                  </tr>
                  <tr>
                    <td className="py-3">Primary Use Case</td>
                    <td className="py-3">Payments & Bridging</td>
                    <td className="py-3">Store of Value</td>
                    <td className="py-3">Smart Contracts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">XRP Use Cases</h2>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Cross-Border Payments</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              XRP&apos;s primary use case is enabling fast, low-cost international money transfers. <Link href="/learn/partnerships" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">Ripple&apos;s partner network</Link> spans over 55 countries and includes major banks and payment providers. Through On-Demand Liquidity, XRP serves as the bridge currency — eliminating the need for pre-funded accounts in destination currencies.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Institutional Settlement</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              With Ripple&apos;s acquisition of Hidden Road (now Ripple Prime), post-trade settlement for institutional clients is migrating to the XRP Ledger. This means a portion of over $3 trillion in annual clearing volume could eventually settle on the XRPL.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Stablecoin Infrastructure</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Ripple&apos;s RLUSD stablecoin, launched in December 2024, operates on the XRP Ledger. When RLUSD trading pairs lack direct liquidity, XRP serves as the bridge — creating organic, recurring demand from real financial activity.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Tokenized Assets</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The XRP Ledger supports tokenization of real-world assets — including real estate, gold, treasury bills, and more. Partners like Archax, Meld Gold, and Zoniqx are building tokenized asset infrastructure on the XRPL.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Central Bank Digital Currencies (CBDCs)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Ripple is working with over 20 central banks globally on CBDC pilot programs. The XRP Ledger&apos;s speed, low cost, and compliance features make it a natural platform for issuing and managing digital currencies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Who Created XRP and the XRP Ledger?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger was created by three developers: <strong>David Schwartz</strong> (now Ripple&apos;s CTO, known online as &quot;JoelKatz&quot;), <strong>Jed McCaleb</strong> (who later co-founded Stellar), and <strong>Arthur Britto</strong>. Development began in 2011 as they sought to build a faster, more energy-efficient alternative to Bitcoin that didn&apos;t require mining.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The XRPL went live on June 2, 2012, with all 100 billion XRP created at genesis. Shortly after, <strong>Chris Larsen</strong> — a serial fintech entrepreneur who had co-founded E-Loan and Prosper Marketplace — joined the team. Together they formed OpenCoin (later renamed to <Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple</Link>) in September 2012 to build commercial applications on the XRP Ledger.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Importantly, <strong>the XRP Ledger was created before Ripple the company existed</strong>. The XRPL is open-source and decentralized — it would continue to operate even if Ripple ceased to exist. Learn about the people behind it on our <Link href="/learn/leadership" className="text-xrp-accent">Ripple Leadership</Link> page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Is XRP Different from Other Cryptocurrencies?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP stands apart from most cryptocurrencies in several fundamental ways:
            </p>
            <ol className="mt-3 list-decimal space-y-3 pl-6 text-text-secondary">
              <li><strong>Purpose-built for payments:</strong> While Bitcoin was designed as &quot;digital gold&quot; and Ethereum as a smart contract platform, XRP was engineered specifically for fast, low-cost value transfer. Every design decision optimizes for payment speed and efficiency.</li>
              <li><strong>No mining:</strong> XRP uses a Federated Consensus Protocol instead of energy-intensive proof-of-work mining. This means no miners, no block rewards, and no energy waste — the XRPL uses 120,000x less energy than Bitcoin.</li>
              <li><strong>Pre-mined fixed supply:</strong> All 100 billion XRP existed from day one. There&apos;s no ongoing issuance or inflation schedule. Combined with the deflationary burn mechanism, XRP&apos;s supply only decreases over time.</li>
              <li><strong>Enterprise adoption:</strong> XRP has one of the strongest enterprise adoption stories in crypto, with <Link href="/learn/partnerships" className="text-xrp-accent">hundreds of financial institution partnerships</Link> and a company (<Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple</Link>) valued at $50 billion building on it.</li>
              <li><strong>Regulatory clarity:</strong> The 2023 Torres ruling established that XRP on exchanges is not a security — a level of legal clarity that most cryptocurrencies lack. This has paved the way for <Link href="/learn/history" className="text-xrp-accent">ETF filings and institutional products</Link>.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Does XRP&apos;s Escrow System Work?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In December 2017, Ripple placed <strong>55 billion XRP</strong> into cryptographic escrow on the XRP Ledger — over half the total supply. This was designed to provide predictability and transparency about XRP&apos;s supply schedule. Every month, up to 1 billion XRP unlocks automatically (enforced by the protocol), but Ripple typically re-escrows 60-80% immediately. Only 200-300 million XRP enters potential circulation each month.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              As of February 2026, approximately <strong>33.9 billion XRP</strong> remains in escrow. The system has operated exactly as designed for over 8 years. Read our comprehensive deep dive: <Link href="/escrow" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">XRP Escrow: The Complete Guide →</Link>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Can XRP Be Used for Everyday Payments?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While XRP was primarily designed for institutional cross-border payments, it can absolutely be used for everyday transactions. With 3-5 second settlement and fees under $0.01, it&apos;s one of the most practical cryptocurrencies for daily use. The <strong>Xaman wallet</strong> (formerly XUMM) makes it easy to send and receive XRP, and the XRPL&apos;s built-in DEX allows trading directly from your wallet.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The growing ecosystem of XRPL tokens, NFTs, and Ripple&apos;s RLUSD stablecoin expands what you can do on the network. Ready to try it? Check our <Link href="/learn/get-started" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">step-by-step guide to buying XRP</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">The SEC Case and Regulatory Clarity</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In December 2020, the SEC sued Ripple Labs, alleging that XRP was an unregistered security. After years of litigation, <strong>Judge Analisa Torres ruled in July 2023</strong> that XRP sold on public exchanges to retail investors is <strong>not a security</strong>. This was a landmark decision for the entire cryptocurrency industry.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              In August 2024, Ripple was ordered to pay $125 million in civil penalties for institutional sales — far less than the SEC&apos;s original demand of nearly $2 billion. Following this clarity, major U.S. exchanges like Coinbase and Kraken relisted XRP, and multiple firms filed applications for spot XRP ETFs.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Learn more about XRP&apos;s journey in our <Link href="/learn/history" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">complete history and timeline</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">XRP in 2026 and Beyond</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              With the SEC case largely resolved, XRP is entering a new chapter. Key developments to watch:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>XRP Spot ETFs:</strong> Multiple applications filed by Bitwise, Canary Capital, 21Shares, and WisdomTree</li>
              <li><strong>XRP Futures:</strong> Listed on CME with futures-based ETFs already trading</li>
              <li><strong>Institutional Adoption:</strong> Ripple&apos;s <Link href="/acquisitions" className="text-xrp-accent">acquisition strategy</Link> creating a full-stack financial infrastructure</li>
              <li><strong>RLUSD Growth:</strong> Stablecoin market cap surpassing $1.26 billion</li>
              <li><strong>Global Regulatory Clarity:</strong> Favorable regulations in the US, UK, Singapore, UAE, and beyond</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Why XRP Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The global cross-border payments market moves over <strong>$150 trillion annually</strong>, yet the infrastructure behind it is decades old. International wire transfers still take 3-5 business days, cost $25-50 in fees, and require trillions locked in pre-funded nostro/vostro accounts. XRP was designed to fix this — offering settlement in seconds for fractions of a cent.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Beyond payments, XRP represents a shift toward an &quot;Internet of Value&quot; — a world where money moves as easily as information. With <Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple&apos;s</Link> growing institutional infrastructure, RLUSD stablecoin, and potential ETF products, XRP is positioned at the intersection of traditional finance and blockchain technology.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Common Mistakes to Avoid</h2>
            <div className="mt-4 space-y-3">
              {[
                { mistake: "Confusing Ripple with XRP", fix: "Ripple is a company; XRP is a decentralized digital asset. They are related but distinct." },
                { mistake: "Believing XRP has unlimited supply", fix: "XRP has a fixed supply of 100 billion. No more can ever be created. It's actually deflationary." },
                { mistake: "Thinking escrow unlocks crash the price", fix: "Monthly escrow unlocks are fully predictable and priced in. 60-80% is re-escrowed immediately." },
                { mistake: "Storing XRP only on exchanges", fix: "For long-term holding, use a self-custody wallet like Xaman. 'Not your keys, not your crypto.'" },
                { mistake: "Ignoring the 10 XRP wallet reserve", fix: "XRPL accounts require a 10 XRP reserve to activate. Factor this in when setting up a new wallet." },
              ].map((item) => (
                <div key={item.mistake} className="rounded-xl border border-danger/20 bg-danger/5 p-4">
                  <div className="font-semibold text-text-primary">❌ {item.mistake}</div>
                  <div className="mt-1 text-sm text-text-secondary">✅ {item.fix}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12 rounded-2xl border border-surface-border bg-surface-card/30 p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What is XRP in simple terms?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  XRP is a digital currency designed for fast, low-cost global payments. It settles transactions in 3-5 seconds with near-zero fees on the XRP Ledger, a decentralized blockchain. Think of it as the &quot;email of money&quot; — making value transfer as easy and fast as sending an email.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Is XRP the same as Ripple?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  No. XRP is a decentralized digital asset on the XRP Ledger. <Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple</Link> is a private company that uses XRP in its products. XRP would continue to exist even if Ripple ceased operations. Learn more in our <Link href="/learn/what-is-ripple" className="text-xrp-accent">What is Ripple?</Link> guide.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">How many XRP tokens exist?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  100 billion XRP were created at genesis. No more can ever be minted. Approximately 60 billion are in circulation, ~33.9 billion are in <Link href="/escrow" className="text-xrp-accent">Ripple&apos;s escrow</Link>, and over 14 million have been permanently burned through transaction fees.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Is XRP a good investment?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  XRP has real utility in cross-border payments, growing institutional adoption, regulatory clarity, and potential ETF products. However, all cryptocurrency investments carry risk. Do your own research and never invest more than you can afford to lose.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What makes XRP different from Bitcoin?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  XRP settles in 3-5 seconds vs. Bitcoin&apos;s 10+ minutes, costs fractions of a cent vs. dollars, handles 1,500+ TPS vs. ~7, and uses an energy-efficient consensus protocol instead of proof-of-work mining. Bitcoin is designed as a store of value; XRP is designed for payments.
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">How do I buy XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  You can buy XRP on major exchanges like Uphold, Coinbase, Kraken, and Bitstamp. Check our <Link href="/learn/get-started" className="text-xrp-accent">beginner&apos;s guide to buying XRP</Link> for step-by-step instructions.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Continue Learning</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
                { href: "/learn/history", label: "XRP History & Timeline", desc: "From 2011 to present" },
                { href: "/escrow", label: "Escrow Explained", desc: "Ripple's 55B XRP escrow" },
                { href: "/learn/get-started", label: "How to Buy XRP", desc: "Beginner's guide" },
                { href: "/learn/partnerships", label: "Partnerships", desc: "Ripple's global network" },
                { href: "/acquisitions", label: "Acquisitions", desc: "Ripple's $3.7B strategy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card-glow flex flex-col rounded-xl border border-surface-border bg-surface-card/50 p-4 backdrop-blur-sm transition-colors hover:border-xrp-accent/30"
                >
                  <span className="font-display font-semibold text-text-primary">{link.label}</span>
                  <span className="mt-1 text-sm text-text-secondary">{link.desc}</span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Conclusion */}
        <section className="mt-12 rounded-2xl border border-surface-border bg-gradient-to-br from-surface-card/50 to-xrp-accent/[0.02] p-8 text-center backdrop-blur-sm">
          <h2 className="font-display text-xl font-bold text-text-primary">Start Your XRP Journey</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-2xl mx-auto">
            XRP is more than a cryptocurrency — it&apos;s the foundation of a new financial infrastructure being built by a $50 billion company with over 300 institutional partners. Ready to get started?
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/learn/get-started" className="rounded-lg bg-xrp-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-xrp-accent/90 hover:shadow-lg hover:shadow-xrp-accent/25">
              How to Buy XRP →
            </Link>
            <Link href="/learn/what-is-ripple" className="rounded-lg border border-surface-border bg-surface-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-elevated">
              Learn About Ripple
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, Ripple official announcements, CoinMarketCap, SEC court filings, XRPScan on-chain data.</em>
        </p>
      </div>
    </>
  );
}

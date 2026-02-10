import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import { LearnHero, StatPill, SectionNav, LearnCTA, LearnLinkGrid } from "@/components/learn/LearnPageShell";

export const metadata: Metadata = {
  title: "What is Ripple? Ripple vs XRP Explained",
  description:
    "What is Ripple? Learn how Ripple Labs works, its products, and the key difference between Ripple and XRP. Complete guide updated for 2026.",
  openGraph: {
    title: "What is Ripple? Ripple vs XRP Explained | AllAboutXRP",
    description:
      "Everything about Ripple — the company, the technology, RippleNet, ODL, RLUSD, and how it differs from XRP.",
    url: "https://allaboutxrp.com/learn/what-is-ripple",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Ripple? Complete Guide | AllAboutXRP",
    description: "Ripple vs XRP explained. Learn about Ripple Labs, its products, and how it uses the XRP Ledger.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/what-is-ripple" },
};

const schemas = [
  buildArticleSchema({
    headline: "What is Ripple? Ripple vs XRP Explained",
    description: "A comprehensive guide to Ripple Labs, its products, and the distinction between Ripple and XRP.",
    url: "https://allaboutxrp.com/learn/what-is-ripple",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "What is Ripple?" },
  ]),
  buildFAQSchema([
    { question: "What is the difference between Ripple and XRP?", answer: "Ripple is a private technology company headquartered in San Francisco. XRP is a decentralized digital asset on the XRP Ledger. Ripple uses XRP in its products but does not own or control the XRP Ledger. XRP would continue to function if Ripple ceased to exist." },
    { question: "What does Ripple actually do?", answer: "Ripple provides enterprise solutions for cross-border payments, digital asset custody, prime brokerage, treasury management, and stablecoins. Its flagship products include Ripple Payments, Ripple Custody (Metaco), Ripple Prime (Hidden Road), and RLUSD stablecoin." },
    { question: "Who owns Ripple?", answer: "Ripple is a private company. Co-founder Chris Larsen serves as Executive Chairman. Key investors include Fortress Investment Group, Citadel Securities, Pantera Capital, Galaxy Digital, and others. As of early 2026, Ripple is valued at approximately $50 billion." },
    { question: "Is Ripple a bank?", answer: "No. Ripple is a technology company that provides payment infrastructure to banks and financial institutions. It holds various regulatory licenses including a NY BitLicense and ~40 U.S. money transmitter licenses, but it is not a bank." },
  ]),
];

export default function WhatIsRipplePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="What is"
          titleAccent="Ripple?"
          subtitle="Ripple is a San Francisco-based technology company building enterprise solutions for cross-border payments, digital asset custody, prime brokerage, and stablecoin infrastructure — valued at approximately $50 billion."
          breadcrumbLabel="What is Ripple?"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-10" />
          </div>
        </LearnHero>

        <SectionNav items={[
          { id: "vs-xrp", label: "Ripple vs XRP" },
          { id: "history", label: "History" },
          { id: "products", label: "Products" },
          { id: "revenue", label: "Revenue" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-6"><Disclaimer /></div>

        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

        {/* Company Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Valuation" value="~$50B" delay={0} />
          <StatPill label="Employees" value="~1,400" delay={0.06} />
          <StatPill label="Countries" value="40+" delay={0.12} />
          <StatPill label="Payments Processed" value="$90B+" delay={0.18} />
        </div>

        <article className="prose-editorial cv-auto mt-14 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple vs. XRP: The Key Difference</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              This is the single most important distinction to understand: <strong>Ripple and XRP are not the same thing.</strong>
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-left">
                    <th className="pb-3 font-semibold text-text-primary">Aspect</th>
                    <th className="pb-3 font-semibold text-text-primary">Ripple</th>
                    <th className="pb-3 font-semibold text-text-primary">XRP</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">What is it?</td>
                    <td className="py-3">Private technology company</td>
                    <td className="py-3">Decentralized digital asset</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Headquarters</td>
                    <td className="py-3">San Francisco, CA</td>
                    <td className="py-3">Exists on the XRP Ledger (global)</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Created</td>
                    <td className="py-3">September 2012 (as OpenCoin)</td>
                    <td className="py-3">June 2012 (XRPL genesis)</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Controlled by</td>
                    <td className="py-3">Board of directors, shareholders</td>
                    <td className="py-3">No one — decentralized protocol</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Can it disappear?</td>
                    <td className="py-3">Yes (like any company)</td>
                    <td className="py-3">No — XRPL runs independently</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Legal status</td>
                    <td className="py-3">Corporation</td>
                    <td className="py-3"><Link href="/learn/what-is-xrp" className="text-xrp-accent">Not a security</Link> (per Torres ruling)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger was actually created <em>before</em> the company. David Schwartz, Jed McCaleb, and Arthur Britto built the XRPL and then formed OpenCoin (later Ripple) to develop commercial applications on top of it. Ripple is the largest contributor to the XRPL ecosystem, but it is one of many participants — not the owner or controller.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple&apos;s History</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple&apos;s journey spans over a decade of evolution from a small startup to a global financial infrastructure company:
            </p>
            <ul className="mt-4 space-y-3 text-text-secondary">
              <li><strong>2012:</strong> Founded as OpenCoin by Chris Larsen, Jed McCaleb, and Arthur Britto</li>
              <li><strong>2013:</strong> Rebranded to Ripple Labs; raised first angel funding; McCaleb departed (later founded Stellar)</li>
              <li><strong>2015:</strong> Simplified name to &quot;Ripple&quot;; focused on enterprise blockchain payments</li>
              <li><strong>2016:</strong> Landmark partnership with SBI Holdings in Japan</li>
              <li><strong>2017:</strong> Brad Garlinghouse becomes CEO; 55 billion XRP placed in <Link href="/escrow" className="text-xrp-accent">escrow</Link></li>
              <li><strong>2018:</strong> Launched xRapid (now On-Demand Liquidity) using XRP as bridge currency</li>
              <li><strong>2019:</strong> MoneyGram partnership; continued global expansion</li>
              <li><strong>2020:</strong> SEC files lawsuit against Ripple</li>
              <li><strong>2023:</strong> Judge Torres rules XRP is not a security on exchanges; Metaco acquired for $250M</li>
              <li><strong>2024:</strong> $125M SEC penalty; RLUSD stablecoin launches; XRP ETF filings begin</li>
              <li><strong>2025:</strong> Hidden Road ($1.25B), Rail ($200M), GTreasury ($1B), and Palisade acquired</li>
            </ul>
            <p className="mt-3 text-text-secondary">
              See our full <Link href="/learn/history" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">XRP & Ripple timeline</Link> for every milestone.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple&apos;s Products and Services</h2>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Ripple Payments (On-Demand Liquidity)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Ripple&apos;s flagship product enables cross-border payments using <Link href="/learn/what-is-xrp" className="text-xrp-accent">XRP</Link> as a bridge currency. Instead of pre-funding accounts in every destination currency, financial institutions can use XRP to instantly source liquidity on demand. This frees up trillions of dollars locked in nostro/vostro accounts globally.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Ripple Custody (Metaco)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Acquired in 2023 for $250 million, Metaco&apos;s Harmonize platform provides institutional-grade digital asset custody trusted by major banks including Citibank, BBVA, BNP Paribas, and Société Générale. Combined with Standard Custody and Palisade, Ripple offers the most comprehensive custody solution in crypto.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Ripple Prime (Hidden Road)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Acquired in 2025 for $1.25 billion, this global multi-asset prime brokerage clears over $3 trillion annually for 300+ institutional clients. Ripple is migrating post-trade settlement to the XRP Ledger — making it the first crypto company to own a global prime brokerage.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">Ripple Treasury (GTreasury)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Acquired in 2025 for $1 billion, this enterprise treasury management platform with 40+ years of Fortune 500 experience integrates blockchain-based settlement into corporate cash management — connecting business payments to XRP liquidity.
            </p>

            <h3 className="mt-6 font-display text-xl font-semibold text-text-primary">RLUSD Stablecoin</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Launched in December 2024 with NYDFS approval, RLUSD is a USD-backed stablecoin issued on both the XRP Ledger and Ethereum. With BNY Mellon as custodian for reserves and a market cap exceeding $1.26 billion, RLUSD adds a stable-value asset to the XRPL ecosystem.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Does Ripple Make Money?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple generates revenue through multiple channels, which have evolved significantly as the company has grown:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-6 text-text-secondary">
              <li><strong>Payment processing fees:</strong> Ripple charges fees for cross-border payment services through Ripple Payments (formerly ODL)</li>
              <li><strong>XRP sales:</strong> Ripple sells <Link href="/learn/what-is-xrp" className="text-xrp-accent">XRP</Link> from its <Link href="/escrow" className="text-xrp-accent">escrow holdings</Link> — primarily through OTC/institutional channels, not on open exchanges</li>
              <li><strong>Custody fees:</strong> Ripple Custody (Metaco) charges institutional clients for digital asset custody services</li>
              <li><strong>Prime brokerage:</strong> Ripple Prime (Hidden Road) generated $100M+ in revenue in 2024 from clearing and brokerage services</li>
              <li><strong>Treasury management:</strong> Ripple Treasury (GTreasury) provides enterprise treasury solutions to Fortune 500 companies</li>
              <li><strong>Stablecoin:</strong> RLUSD generates revenue through issuance, redemption, and the yield on reserve assets</li>
            </ol>
            <p className="mt-3 text-text-secondary leading-relaxed">
              This diversified revenue model is a key differentiator from most crypto companies. Ripple is not dependent on token price appreciation — it&apos;s building recurring revenue from financial infrastructure services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">What Is the Difference Between RippleNet, ODL, and RLUSD?</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-left">
                    <th className="pb-3 font-semibold text-text-primary">Product</th>
                    <th className="pb-3 font-semibold text-text-primary">What It Does</th>
                    <th className="pb-3 font-semibold text-text-primary">Uses XRP?</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">RippleNet</td>
                    <td className="py-3">Global payments network connecting banks and payment providers. Messaging layer for payment instructions.</td>
                    <td className="py-3">Optional</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">ODL (On-Demand Liquidity)</td>
                    <td className="py-3">Uses XRP as a bridge currency for instant cross-border settlement without pre-funded accounts.</td>
                    <td className="py-3 text-xrp-accent font-medium">Yes — core use</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">RLUSD</td>
                    <td className="py-3">USD-backed stablecoin on XRPL and Ethereum. For settlement, collateral, and payments.</td>
                    <td className="py-3">XRP bridges when liquidity needed</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3 font-medium">Ripple Custody</td>
                    <td className="py-3">Institutional-grade digital asset custody (Metaco + Standard Custody + Palisade).</td>
                    <td className="py-3">Supports XRP custody</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Ripple Prime</td>
                    <td className="py-3">Multi-asset prime brokerage clearing $3T+ annually. Post-trade settlement migrating to XRPL.</td>
                    <td className="py-3">Settlement on XRPL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Does Ripple Compare to SWIFT?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the dominant messaging network for international bank transfers, connecting 11,000+ institutions. But SWIFT only sends <em>messages</em> — it doesn&apos;t actually move money. The actual settlement still relies on correspondent banking, which is slow and expensive.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-left">
                    <th className="pb-3 font-semibold text-text-primary">Feature</th>
                    <th className="pb-3 font-semibold text-text-primary">Ripple + XRP</th>
                    <th className="pb-3 font-semibold text-text-primary">SWIFT</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Settlement Time</td>
                    <td className="py-3 text-xrp-accent font-medium">3-5 seconds</td>
                    <td className="py-3">1-5 business days</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Cost</td>
                    <td className="py-3 text-xrp-accent font-medium">&lt; $0.01</td>
                    <td className="py-3">$25-50+ per transfer</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Pre-funding Required</td>
                    <td className="py-3 text-xrp-accent font-medium">No (XRP bridges)</td>
                    <td className="py-3">Yes (nostro/vostro accounts)</td>
                  </tr>
                  <tr className="border-b border-surface-border/30">
                    <td className="py-3">Transparency</td>
                    <td className="py-3">Real-time on-chain tracking</td>
                    <td className="py-3">Limited visibility</td>
                  </tr>
                  <tr>
                    <td className="py-3">Network</td>
                    <td className="py-3">55+ countries, growing</td>
                    <td className="py-3">200+ countries, established</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Ripple isn&apos;t necessarily trying to replace SWIFT entirely, but rather to provide a faster, cheaper alternative for specific corridors — particularly in remittance-heavy regions. See which institutions are already using Ripple on our <Link href="/learn/partnerships" className="text-xrp-accent">partnerships page</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple&apos;s Acquisition Strategy</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Since 2023, Ripple has spent over <strong>$3.7 billion on acquisitions</strong>, assembling a full-stack financial infrastructure covering payments, custody, prime brokerage, treasury, and stablecoins. No other crypto company has built this comprehensive a platform.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Read our in-depth analysis in the <Link href="/acquisitions" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">Acquisitions deep dive</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple&apos;s Leadership</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple is led by a team of fintech veterans, cryptography experts, and Wall Street alumni:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>Brad Garlinghouse</strong> — CEO since 2017; former AOL, Yahoo, Hightail executive</li>
              <li><strong>Chris Larsen</strong> — Executive Chairman & Co-Founder; serial fintech entrepreneur</li>
              <li><strong>David Schwartz</strong> — CTO; co-creator of the XRP Ledger</li>
              <li><strong>Monica Long</strong> — President; with Ripple since 2013</li>
              <li><strong>Stuart Alderoty</strong> — Chief Legal Officer; led SEC lawsuit defense</li>
              <li><strong>Jon Bilich</strong> — CFO; former Morgan Stanley</li>
            </ul>
            <p className="mt-3 text-text-secondary">
              See full profiles on our <Link href="/learn/leadership" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">Leadership Team</Link> page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Regulatory Status</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple holds one of the most comprehensive regulatory license portfolios in the crypto industry:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>New York BitLicense</strong></li>
              <li><strong>New York Limited Purpose Trust Charter</strong> (one of only nine in existence)</li>
              <li><strong>~40 U.S. Money Transmitter Licenses</strong></li>
              <li><strong>Singapore Major Payment Institution License</strong></li>
              <li><strong>Irish VASP Registration</strong></li>
              <li><strong>UK regulatory approval</strong> (2025)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple by the Numbers (2026)</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="text-text-secondary">
                  {[
                    ["Valuation", "~$50 billion"],
                    ["Global Rank", "9th most valuable private company"],
                    ["Total Acquisition Spend", "$3.7+ billion"],
                    ["Employees", "~1,400 across 40+ countries"],
                    ["Payments Processed", "$90+ billion"],
                    ["RLUSD Market Cap", "$1.26 billion"],
                    ["Ripple Prime Clearing", "$3+ trillion annually"],
                    ["Key Investors", "Fortress, Citadel Securities, Pantera, Galaxy Digital"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-surface-border/30">
                      <td className="py-3 font-medium text-text-primary">{label}</td>
                      <td className="py-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Why Ripple Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple matters because it&apos;s building the bridge between traditional finance and blockchain technology. While many crypto companies focus on retail speculation, Ripple is systematically assembling the infrastructure that <strong>banks, corporations, and governments</strong> need to operate in a blockchain-enabled world — custody, prime brokerage, payments, treasury management, and stablecoins.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              No other crypto company has this combination of regulatory licenses, institutional partnerships, and full-stack financial infrastructure. Ripple&apos;s success or failure will significantly influence whether blockchain technology achieves mainstream adoption in global finance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Common Mistakes to Avoid</h2>
            <div className="mt-4 space-y-3">
              {[
                { mistake: "Saying 'I bought Ripple'", fix: "You buy XRP (the token), not Ripple (the company). Ripple is a private company — you can't buy its stock on exchanges." },
                { mistake: "Thinking Ripple controls XRP", fix: "Ripple is a major XRPL participant but operates only ~6% of validators. The network is decentralized." },
                { mistake: "Assuming all Ripple partners use XRP", fix: "Some partners use RippleNet messaging only. ODL partners specifically use XRP as a bridge currency." },
                { mistake: "Ignoring the regulatory picture", fix: "Ripple's extensive license portfolio is a major competitive advantage. Regulation matters for institutional adoption." },
              ].map((item) => (
                <div key={item.mistake} className="mistake-card rounded-xl border border-danger/20 bg-danger/5 p-4">
                  <div className="font-semibold text-text-primary">❌ {item.mistake}</div>
                  <div className="mt-1 text-sm text-text-secondary">✅ {item.fix}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="learn-faq mt-12 rounded-2xl border border-surface-border bg-surface-card/30 p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What is the difference between Ripple and XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Ripple is a private technology company. XRP is a decentralized digital asset on the XRP Ledger. Ripple uses XRP in its products but doesn&apos;t own or control the XRP Ledger. XRP would continue to function if Ripple ceased to exist.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What does Ripple actually do?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Ripple provides enterprise solutions for cross-border payments, digital asset custody, prime brokerage, treasury management, and stablecoins. It has processed over $90 billion in global payments and serves clients in 55+ countries.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Who owns Ripple?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Ripple is a privately held company. Co-founder Chris Larsen serves as Executive Chairman. Key investors include Fortress Investment Group, Citadel Securities, Pantera Capital, and Galaxy Digital. The company is valued at approximately $50 billion.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Is Ripple a bank?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  No. Ripple is a technology company that provides payment infrastructure to banks and financial institutions. It holds various regulatory licenses but is not itself a bank.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Did Ripple win the SEC lawsuit?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Largely, yes. In July 2023, Judge Torres ruled that XRP sold on public exchanges is not a security. Ripple paid a $125 million penalty for institutional sales — far less than the SEC&apos;s $2 billion demand. The ruling was a landmark moment for the crypto industry.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
              { href: "/learn/leadership", label: "Leadership Team", desc: "Who runs Ripple" },
              { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions" },
              { href: "/learn/history", label: "History & Timeline", desc: "2011 to present" },
              { href: "/escrow", label: "Escrow Explained", desc: "55B XRP lockup system" },
            ]} />
          </section>
        </article>

        <LearnCTA
          title="Dive Deeper Into the Ripple Ecosystem"
          description="Explore Ripple's partnerships, leadership team, and the $3.7B acquisition strategy reshaping institutional finance."
          primaryHref="/learn/partnerships"
          primaryLabel="Explore Partnerships →"
          secondaryHref="/acquisitions"
          secondaryLabel="Acquisition Strategy"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, SEC court filings, CoinMarketCap, BusinessWire, Financial Times, Ripple Quarterly Reports.</em>
        </p>
      </div>
    </>
  );
}

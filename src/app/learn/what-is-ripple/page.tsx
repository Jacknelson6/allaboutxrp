import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import Link from "next/link";

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
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What is Ripple? Ripple vs XRP Explained",
    description: "A comprehensive guide to Ripple Labs, its products, and the distinction between Ripple and XRP.",
    url: "https://allaboutxrp.com/learn/what-is-ripple",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
    author: { "@type": "Organization", name: "AllAboutXRP" },
    publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
      { "@type": "ListItem", position: 2, name: "Learn", item: "https://allaboutxrp.com/learn" },
      { "@type": "ListItem", position: 3, name: "What is Ripple?" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between Ripple and XRP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ripple is a private technology company headquartered in San Francisco. XRP is a decentralized digital asset on the XRP Ledger. Ripple uses XRP in its products but does not own or control the XRP Ledger. XRP would continue to function if Ripple ceased to exist.",
        },
      },
      {
        "@type": "Question",
        name: "What does Ripple actually do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ripple provides enterprise solutions for cross-border payments, digital asset custody, prime brokerage, treasury management, and stablecoins. Its flagship products include Ripple Payments (cross-border transfers using XRP), Ripple Custody (Metaco), Ripple Prime (Hidden Road), and RLUSD stablecoin.",
        },
      },
      {
        "@type": "Question",
        name: "Who owns Ripple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ripple is a private company. Co-founder Chris Larsen serves as Executive Chairman. Key investors include Fortress Investment Group, Citadel Securities, Pantera Capital, Galaxy Digital, and others. As of early 2026, Ripple is valued at approximately $50 billion.",
        },
      },
      {
        "@type": "Question",
        name: "Is Ripple a bank?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Ripple is a technology company that provides payment infrastructure to banks and financial institutions. It holds various regulatory licenses including a NY BitLicense and ~40 U.S. money transmitter licenses, but it is not a bank.",
        },
      },
    ],
  },
];

export default function WhatIsRipplePage() {
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
            <li className="text-text-primary font-medium">What is Ripple?</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          What is <span className="gradient-text">Ripple</span>? The Complete Guide
        </h1>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          <strong>What is Ripple?</strong> Ripple is a San Francisco-based technology company that builds enterprise solutions for cross-border payments, digital asset custody, prime brokerage, and stablecoin infrastructure. Founded in 2012, Ripple has grown into one of the most important companies in the blockchain industry — valued at approximately $50 billion as of early 2026.
        </p>

        <div className="mt-6"><Disclaimer /></div>

        {/* Company Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Valuation", value: "~$50B" },
            { label: "Employees", value: "~1,400" },
            { label: "Countries", value: "40+" },
            { label: "Payments Processed", value: "$90B+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-surface-border bg-surface-card/50 p-4 text-center backdrop-blur-sm">
              <div className="font-display text-xl font-bold text-xrp-accent">{stat.value}</div>
              <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        <article className="prose-custom mt-12 space-y-10">
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

          {/* FAQ */}
          <section className="mt-12 rounded-2xl border border-surface-border bg-surface-card/30 p-6 md:p-8">
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
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
                { href: "/learn/leadership", label: "Leadership Team", desc: "Who runs Ripple" },
                { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
                { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions" },
                { href: "/learn/history", label: "History & Timeline", desc: "2011 to present" },
                { href: "/escrow", label: "Escrow Explained", desc: "55B XRP lockup system" },
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

        <p className="mt-12 text-xs text-text-secondary/60">
          <em>Last updated: February 2026. Sources: Ripple.com, SEC filings, CoinMarketCap, BusinessWire, Financial Times.</em>
        </p>
      </div>
    </>
  );
}

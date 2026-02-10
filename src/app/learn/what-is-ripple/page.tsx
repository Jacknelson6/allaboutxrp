import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList,
} from "@/components/learn/LearnPageShell";

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
    { question: "What is the difference between Ripple and XRP?", answer: "Ripple is a private technology company headquartered in San Francisco. XRP is a decentralized digital asset on the XRP Ledger. Ripple uses XRP in its products but does not own or control the XRP Ledger." },
    { question: "What does Ripple actually do?", answer: "Ripple provides enterprise solutions for cross-border payments, digital asset custody, prime brokerage, treasury management, and stablecoins." },
    { question: "Who owns Ripple?", answer: "Ripple is a private company. Co-founder Chris Larsen serves as Executive Chairman. Key investors include Fortress Investment Group, Citadel Securities, Pantera Capital, Galaxy Digital." },
    { question: "Is Ripple a bank?", answer: "No. Ripple is a technology company that provides payment infrastructure to banks and financial institutions." },
  ]),
];

const faqItems = [
  { q: "What is the difference between Ripple and XRP?", a: "Ripple is a private technology company. XRP is a decentralized digital asset on the XRP Ledger. Ripple uses XRP in its products but doesn't own or control the XRP Ledger. XRP would continue to function if Ripple ceased to exist." },
  { q: "What does Ripple actually do?", a: "Ripple provides enterprise solutions for cross-border payments, digital asset custody, prime brokerage, treasury management, and stablecoins. It has processed over $90 billion in global payments and serves clients in 55+ countries." },
  { q: "Who owns Ripple?", a: "Ripple is a privately held company. Co-founder Chris Larsen serves as Executive Chairman. Key investors include Fortress Investment Group, Citadel Securities, Pantera Capital, and Galaxy Digital. Valued at approximately $50 billion." },
  { q: "Is Ripple a bank?", a: "No. Ripple is a technology company that provides payment infrastructure to banks and financial institutions. It holds various regulatory licenses but is not itself a bank." },
  { q: "Did Ripple win the SEC lawsuit?", a: "Largely, yes. In July 2023, Judge Torres ruled that XRP sold on public exchanges is not a security. Ripple paid a $125 million penalty — far less than the SEC's $2 billion demand." },
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
          <div className="mt-5"><AuthorByline date="2026-02-10" /></div>
        </LearnHero>

        <SectionNav items={[
          { id: "vs-xrp", label: "Ripple vs XRP" },
          { id: "history", label: "History" },
          { id: "products", label: "Products" },
          { id: "revenue", label: "Revenue" },
          { id: "swift", label: "vs SWIFT" },
          { id: "mistakes", label: "Common Mistakes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-6"><Disclaimer /></div>

        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        <div className="pointer-events-none absolute inset-0 noise-overlay" />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Valuation" value="~$50B" delay={0} />
          <StatPill label="Employees" value="~1,400" delay={0.06} />
          <StatPill label="Countries" value="40+" delay={0.12} />
          <StatPill label="Payments Processed" value="$90B+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* RIPPLE VS XRP */}
          <RevealSection id="vs-xrp">
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple vs. XRP: The Key Difference</h2>
            <div className="mt-4">
              <HighlightBox title="Critical Distinction" variant="warning">
                <p><strong className="text-text-primary">Ripple and XRP are not the same thing.</strong> The XRP Ledger was created <em>before</em> the company. Ripple is the largest contributor to the XRPL ecosystem, but it is one of many participants — not the owner or controller.</p>
              </HighlightBox>
            </div>
            <div className="mt-6">
              <DataTable
                headers={["Aspect", "Ripple", "XRP"]}
                rows={[
                  ["What is it?", "Private technology company", "Decentralized digital asset"],
                  ["Headquarters", "San Francisco, CA", "Exists on the XRP Ledger (global)"],
                  ["Created", "September 2012 (as OpenCoin)", "June 2012 (XRPL genesis)"],
                  ["Controlled by", "Board of directors, shareholders", "No one — decentralized protocol"],
                  ["Can it disappear?", "Yes (like any company)", "No — XRPL runs independently"],
                  ["Legal status", "Corporation", "Not a security (per Torres ruling)"],
                ]}
              />
            </div>
          </RevealSection>

          {/* HISTORY */}
          <RevealSection id="history" delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple&apos;s History: A Decade of Evolution</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "2012", desc: "Founded as OpenCoin by Chris Larsen, Jed McCaleb, and Arthur Britto" },
                { title: "2013", desc: "Rebranded to Ripple Labs; raised first angel funding; McCaleb departed (later founded Stellar)" },
                { title: "2015", desc: "Simplified name to \"Ripple\"; focused on enterprise blockchain payments" },
                { title: "2016–2017", desc: "SBI Holdings partnership; Brad Garlinghouse becomes CEO; 55B XRP placed in escrow" },
                { title: "2018–2019", desc: "Launched xRapid (now ODL); MoneyGram partnership" },
                { title: "2020", desc: "SEC files lawsuit against Ripple" },
                { title: "2023", desc: "Judge Torres rules XRP is not a security; Metaco acquired for $250M" },
                { title: "2024", desc: "$125M SEC penalty; RLUSD stablecoin launches; ETF filings begin" },
                { title: "2025", desc: "Hidden Road ($1.25B), Rail ($200M), GTreasury ($1B), Palisade acquired" },
              ]} variant="zap" />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              See our full <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">XRP &amp; Ripple timeline</Link> for every milestone.
            </p>
          </RevealSection>

          {/* PRODUCTS */}
          <RevealSection id="products" delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple&apos;s Products and Services</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Ripple Payments (ODL)", desc: "Cross-border payments using XRP as a bridge currency. Frees up trillions locked in nostro/vostro accounts globally." },
                { title: "Ripple Custody (Metaco)", desc: "Institutional-grade digital asset custody trusted by Citibank, BBVA, BNP Paribas, and Société Générale. Acquired for $250M." },
                { title: "Ripple Prime (Hidden Road)", desc: "Global multi-asset prime brokerage clearing $3T+ annually. Post-trade settlement migrating to the XRP Ledger. Acquired for $1.25B." },
                { title: "Ripple Treasury (GTreasury)", desc: "Enterprise treasury management with 40+ years of Fortune 500 experience. Integrates blockchain settlement. Acquired for $1B." },
                { title: "RLUSD Stablecoin", desc: "USD-backed stablecoin on XRPL and Ethereum. NYDFS-approved with BNY Mellon as custodian. Market cap exceeding $1.26B." },
                { title: "Ripple CBDC Platform", desc: "Working with 20+ central banks globally on CBDC pilot programs built on XRP Ledger technology." },
              ]} />
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-text-primary">Product Comparison</h3>
              <div className="mt-4">
                <DataTable
                  headers={["Product", "What It Does", "Uses XRP?"]}
                  rows={[
                    ["RippleNet", "Global payments network connecting banks", "Optional"],
                    ["ODL", "Instant cross-border settlement via XRP bridge", "Yes — core use"],
                    ["RLUSD", "USD-backed stablecoin for settlement & collateral", "XRP bridges when needed"],
                    ["Ripple Custody", "Institutional digital asset custody", "Supports XRP custody"],
                    ["Ripple Prime", "Prime brokerage clearing $3T+ annually", "Settlement on XRPL"],
                  ]}
                  highlightCol={2}
                />
              </div>
            </div>
          </RevealSection>

          {/* REVENUE */}
          <RevealSection id="revenue" delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Does Ripple Make Money?</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Payment processing fees", desc: "Fees for cross-border payment services through Ripple Payments" },
                { title: "XRP sales", desc: "Institutional/OTC sales from escrow holdings — not on open exchanges" },
                { title: "Custody fees", desc: "Institutional clients pay for Metaco/Standard Custody/Palisade services" },
                { title: "Prime brokerage", desc: "Hidden Road generated $100M+ in 2024 from clearing and brokerage" },
                { title: "Treasury management", desc: "GTreasury provides enterprise solutions to Fortune 500 companies" },
                { title: "Stablecoin revenue", desc: "RLUSD issuance, redemption, and yield on reserve assets" },
              ]} variant="check" />
            </div>
            <div className="mt-5">
              <HighlightBox title="Key Differentiator" variant="info">
                <p>This diversified revenue model sets Ripple apart from most crypto companies. Ripple is not dependent on token price appreciation — it&apos;s building <strong className="text-text-primary">recurring revenue from financial infrastructure services</strong>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* VS SWIFT */}
          <RevealSection id="swift" delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">How Does Ripple Compare to SWIFT?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              SWIFT connects 11,000+ institutions but only sends <em>messages</em> — it doesn&apos;t move money. Settlement relies on slow, expensive correspondent banking.
            </p>
            <div className="mt-5">
              <DataTable
                headers={["Feature", "Ripple + XRP", "SWIFT"]}
                rows={[
                  ["Settlement Time", "3-5 seconds", "1-5 business days"],
                  ["Cost", "< $0.01", "$25-50+ per transfer"],
                  ["Pre-funding Required", "No (XRP bridges)", "Yes (nostro/vostro)"],
                  ["Transparency", "Real-time on-chain tracking", "Limited visibility"],
                  ["Network", "55+ countries, growing", "200+ countries, established"],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              See which institutions are already using Ripple on our <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">partnerships page</Link>.
            </p>
          </RevealSection>

          {/* BY THE NUMBERS */}
          <RevealSection delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">Ripple by the Numbers (2026)</h2>
            <div className="mt-5">
              <DataTable
                headers={["Metric", "Value"]}
                rows={[
                  ["Valuation", "~$50 billion"],
                  ["Global Rank", "9th most valuable private company"],
                  ["Total Acquisition Spend", "$3.7+ billion"],
                  ["Employees", "~1,400 across 40+ countries"],
                  ["Payments Processed", "$90+ billion"],
                  ["RLUSD Market Cap", "$1.26 billion"],
                  ["Ripple Prime Clearing", "$3+ trillion annually"],
                  ["Key Investors", "Fortress, Citadel Securities, Pantera, Galaxy Digital"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* REGULATORY STATUS */}
          <RevealSection delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">Regulatory License Portfolio</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "New York BitLicense" },
                { title: "NY Limited Purpose Trust Charter", desc: "One of only nine in existence" },
                { title: "~40 U.S. Money Transmitter Licenses" },
                { title: "Singapore Major Payment Institution License" },
                { title: "Irish VASP Registration" },
                { title: "UK Regulatory Approval (2025)" },
              ]} variant="check" />
            </div>
          </RevealSection>

          {/* WHY RIPPLE MATTERS */}
          <RevealSection delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">Why Does Ripple Matter?</h2>
            <div className="mt-4">
              <HighlightBox title="The Bridge Between TradFi & Blockchain" variant="accent" large>
                <p>Ripple matters because it&apos;s building the bridge between traditional finance and blockchain technology. While many crypto companies focus on retail speculation, Ripple is systematically assembling the infrastructure that <strong className="text-text-primary">banks, corporations, and governments</strong> need to operate in a blockchain-enabled world.</p>
                <p className="mt-3">No other crypto company has this combination of regulatory licenses, institutional partnerships, and full-stack financial infrastructure. Explore the <Link href="/acquisitions" className="text-xrp-accent underline decoration-xrp-accent/30">$3.7B acquisition strategy</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* COMMON MISTAKES */}
          <RevealSection id="mistakes" delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">Common Mistakes to Avoid</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="I bought Ripple" reality="You buy XRP (the token), not Ripple (the company). Ripple is a private company — you can't buy its stock on exchanges." />
              <MisconceptionCard myth="Ripple controls XRP" reality="Ripple is a major XRPL participant but operates only ~6% of validators. The network is decentralized." />
              <MisconceptionCard myth="All Ripple partners use XRP" reality="Some partners use RippleNet messaging only. ODL partners specifically use XRP as a bridge currency." />
              <MisconceptionCard myth="Ripple is just another crypto startup" reality="Ripple holds 40+ regulatory licenses, has $3.7B+ in acquisitions, and is valued at $50 billion with real recurring revenue." />
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="font-display text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
              { href: "/learn/leadership", label: "Leadership Team", desc: "Who runs Ripple" },
              { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions" },
              { href: "/learn/history", label: "History & Timeline", desc: "2011 to present" },
              { href: "/escrow", label: "Escrow Explained", desc: "55B XRP lockup system" },
            ]} />
          </RevealSection>
        </div>

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

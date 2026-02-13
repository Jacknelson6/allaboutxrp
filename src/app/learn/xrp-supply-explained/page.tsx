import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Supply & Inflation Explained",
  description:
    "Understand XRP's fixed 100B supply, escrow releases, burn mechanism, and why XRP is deflationary. Complete supply breakdown for 2026.",
  keywords: ["XRP supply", "XRP circulating supply", "XRP inflation", "XRP escrow supply", "XRP tokenomics"],
  openGraph: {
    title: "XRP Supply & Inflation Explained | AllAboutXRP",
    description:
      "Complete breakdown of XRP's 100B fixed supply, monthly escrow releases, deflationary burn mechanism, and supply comparison to Bitcoin.",
    url: "https://allaboutxrp.com/learn/xrp-supply-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Supply & Inflation Explained | AllAboutXRP",
    description:
      "XRP's fixed 100B supply, escrow releases, and deflationary burn mechanism explained simply.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-supply-explained",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Supply & Inflation Explained",
    description: "A complete guide to XRP's fixed supply, escrow system, burn mechanism, and how it compares to Bitcoin's supply model.",
    url: "https://allaboutxrp.com/learn/xrp-supply-explained",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Supply Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-supply-explained" }),
  buildFAQSchema([
    { question: "What is the total supply of XRP?", answer: "100 billion XRP were created at the XRP Ledger's genesis in 2012. No more can ever be created. The actual total is slightly less due to transaction fee burns — over 14 million XRP have been permanently destroyed." },
    { question: "How much XRP is in circulation?", answer: "Approximately 60 billion XRP is in circulation as of early 2026. The remaining supply is held in Ripple's cryptographically enforced escrow system." },
    { question: "Is XRP inflationary?", answer: "No, XRP is deflationary. No new XRP can be minted, and every transaction burns a small amount of XRP as a fee. The total supply decreases over time." },
    { question: "How does XRP escrow work?", answer: "In December 2017, Ripple locked 55 billion XRP into on-ledger escrow. Up to 1 billion XRP unlocks monthly, but Ripple typically re-escrows 60-80%. About 33.9 billion remains in escrow as of 2026." },
    { question: "How does XRP supply compare to Bitcoin?", answer: "Bitcoin has a 21 million cap reached through mining over ~140 years. XRP's 100 billion was created at genesis with no mining. Both are deflationary — Bitcoin through halving events, XRP through fee burns." },
  ]),
];

const faqItems = [
  { q: "What is the total supply of XRP?", a: "100 billion XRP were created at the XRP Ledger's genesis in 2012. No more can ever be created. The actual total is slightly less than 100 billion due to transaction fee burns — over 14 million XRP have been permanently destroyed to date." },
  { q: "How much XRP is in circulation?", a: "Approximately 60 billion XRP is in circulation as of early 2026. The remaining supply is held in Ripple's cryptographically enforced escrow system, with up to 1 billion unlocking monthly." },
  { q: "Is XRP inflationary?", a: "No, XRP is actually deflationary. No new XRP can ever be minted, and every transaction on the XRPL burns a small amount of XRP as a fee. Over time, the total supply only decreases." },
  { q: "How does XRP escrow work?", a: "In December 2017, Ripple locked 55 billion XRP into on-ledger escrow contracts enforced by the protocol itself. Up to 1 billion XRP unlocks automatically each month, but Ripple typically re-escrows 60-80% immediately. About 33.9 billion XRP remains in escrow." },
  { q: "Can Ripple create more XRP?", a: "No. It is cryptographically impossible to create new XRP. The XRP Ledger's protocol does not have a minting function. All 100 billion XRP that will ever exist were created at genesis in 2012." },
];

export default function XRPSupplyExplainedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Supply &"
          titleAccent="Inflation Explained"
          subtitle="XRP has a fixed supply of 100 billion tokens created at genesis — no mining, no minting, no inflation. Here's the complete breakdown of how XRP's supply works, including escrow, burns, and how it compares to Bitcoin."
          breadcrumbLabel="XRP Supply Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">100 billion XRP</strong> were created at launch — no more can ever be minted. ~60B circulates, ~33.9B is in <Link href="/learn/escrow" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s escrow</Link>, and 14M+ have been permanently burned via transaction fees. XRP is <strong className="text-text-primary">deflationary by design</strong>. Estimated reading time: <strong className="text-text-primary">8 minutes</strong>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Total Supply at Genesis", value: "100 billion XRP" },
          { label: "Circulating Supply", value: "~60 billion XRP" },
          { label: "In Escrow", value: "~33.9 billion XRP" },
          { label: "Burned (All-Time)", value: "~14.26 million XRP" },
          { label: "Monthly Escrow Unlock", value: "Up to 1 billion XRP" },
          { label: "Typical Re-Escrow Rate", value: "60-80%" },
          { label: "Mining/Minting", value: "None — impossible" },
          { label: "Supply Trend", value: "Deflationary (decreasing)" },
        ]} />

        <SectionNav items={[
          { id: "total-supply", label: "Total Supply" },
          { id: "circulating", label: "Circulating Supply" },
          { id: "escrow", label: "Escrow System" },
          { id: "burn", label: "Burn Mechanism" },
          { id: "vs-bitcoin", label: "vs. Bitcoin" },
          { id: "fud", label: "FUD Debunked" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Total Supply" value="100B" delay={0} />
          <StatPill label="Circulating" value="~60B" delay={0.06} />
          <StatPill label="In Escrow" value="~33.9B" delay={0.12} />
          <StatPill label="Burned" value="14.26M+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== TOTAL SUPPLY ===== */}
          <RevealSection id="total-supply">
            <h2 className="text-2xl font-bold text-text-primary">XRP Total Supply: 100 Billion (Fixed Forever)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">XRP Ledger</Link> launched on June 2, 2012, all <strong className="text-text-primary">100 billion XRP</strong> were created in the genesis ledger. This is fundamentally different from Bitcoin, where new coins are slowly mined over ~140 years.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL protocol has <strong className="text-text-primary">no minting function</strong>. It is cryptographically impossible for anyone — including Ripple — to create new XRP. The code simply doesn&apos;t allow it. This makes XRP&apos;s supply one of the most predictable in all of cryptocurrency.
            </p>

            <div className="mt-6">
              <HighlightBox title="Key Distinction" variant="accent">
                <p>Unlike Ethereum (which can issue new ETH through staking rewards) or various inflationary tokens, <strong className="text-text-primary">XRP&apos;s supply can only decrease over time</strong> — never increase. Every transaction permanently burns a small amount of XRP.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== CIRCULATING SUPPLY ===== */}
          <RevealSection id="circulating" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Circulating Supply vs. Total Supply</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Not all 100 billion XRP is freely available on the market. The supply breaks down into several categories:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Category", "Amount", "Status"]}
                rows={[
                  ["Circulating Supply", "~60 billion XRP", "Available on exchanges and in wallets"],
                  ["Ripple Escrow", "~33.9 billion XRP", "Locked in on-ledger escrow contracts"],
                  ["Ripple Holdings", "~6 billion XRP", "Ripple's operational holdings"],
                  ["Burned (Fees)", "~14.26 million XRP", "Permanently destroyed"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              The circulating supply increases gradually as Ripple uses or sells XRP from escrow releases, but this is predictable and transparent. All escrow contracts and releases are visible on-chain via <a href="https://xrpscan.com" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPScan</a> or any XRPL explorer.
            </p>
          </RevealSection>

          {/* ===== ESCROW ===== */}
          <RevealSection id="escrow" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Escrow System: Predictable Supply Releases</h2>

            <div className="mt-5">
              <GlowCard
                title="December 16, 2017"
                value="55,000,000,000 XRP"
                subtitle="Locked into cryptographically enforced escrow — the largest escrow in crypto history"
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              To address concerns about Ripple holding too much XRP, the company locked <strong className="text-text-primary">55 billion XRP</strong> (55% of total supply) into the XRPL&apos;s native escrow system. This isn&apos;t a company promise — it&apos;s <strong className="text-text-primary">enforced by the protocol itself</strong>.
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Monthly Unlocks", desc: "Up to 1 billion XRP unlocks on the 1st of each month — enforced by the XRPL protocol" },
                { title: "Re-Escrow", desc: "Ripple typically re-escrows 60-80% of unlocked XRP, returning it to the back of the queue" },
                { title: "Net Release", desc: "Only 200-300 million XRP typically enters potential circulation each month" },
                { title: "Transparent", desc: "Every escrow creation, release, and re-escrow is publicly visible on-chain" },
                { title: "Remaining", desc: "~33.9 billion XRP remains in escrow as of February 2026" },
              ]} variant="zap" />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              Read the full deep dive: <Link href="/learn/escrow" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">XRP Escrow: The Complete Guide →</Link>
            </p>
          </RevealSection>

          {/* ===== BURN MECHANISM ===== */}
          <RevealSection id="burn" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Burn Mechanism: XRP Is Deflationary</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every transaction on the XRP Ledger requires a small fee (typically 0.00001 XRP, or 10 &quot;drops&quot;). This fee is <strong className="text-text-primary">not paid to anyone</strong> — it is permanently destroyed. Burned XRP can never be recovered or recreated.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Metric", "Value"]}
                rows={[
                  ["Minimum Transaction Fee", "0.00001 XRP (10 drops)"],
                  ["Total XRP Burned (All-Time)", "~14.26 million XRP"],
                  ["Burn Rate", "Increases with network usage"],
                  ["Supply Direction", "Decreasing (deflationary)"],
                  ["Can Burned XRP Be Recovered?", "No — permanently destroyed"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Deflationary Math" variant="success">
                <p>At current usage levels, millions of XRP are burned each year. As XRPL adoption grows and transaction volume increases, the burn rate accelerates. Over decades, this could meaningfully reduce the total supply — making each remaining XRP <strong className="text-text-primary">slightly more scarce over time</strong>.</p>
              </HighlightBox>
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              The burn mechanism also serves as <strong className="text-text-primary">anti-spam protection</strong>. By requiring a fee for every transaction, it becomes economically impractical to flood the network with spam, while keeping legitimate transactions nearly free.
            </p>
          </RevealSection>

          {/* ===== VS BITCOIN ===== */}
          <RevealSection id="vs-bitcoin" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Supply vs. Bitcoin Supply</h2>

            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Bitcoin"]}
                rows={[
                  ["Total Supply", "100 billion", "21 million"],
                  ["Creation Method", "All at genesis", "Mining over ~140 years"],
                  ["New Token Creation", "Impossible", "Block rewards (halving every 4 years)"],
                  ["Current Issuance", "0 new XRP/day", "~450 BTC/day (2026)"],
                  ["Fee Model", "Burned (deflationary)", "Paid to miners"],
                  ["Supply Trend", "Decreasing", "Increasing until ~2140"],
                  ["Inflation Rate", "Negative (deflationary)", "~0.8% (2026, decreasing)"],
                  ["Supply Cap Method", "Protocol code", "Protocol code + halvings"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              Both XRP and <Link href="/learn/xrp-vs-bitcoin" className="text-xrp-accent underline decoration-xrp-accent/30">Bitcoin</Link> have hard-capped supplies, but they approach scarcity differently. Bitcoin releases new supply through mining and will continue doing so until approximately 2140. XRP&apos;s entire supply existed from day one and has been <em>decreasing</em> ever since through transaction fee burns.
            </p>
          </RevealSection>

          {/* ===== FUD DEBUNKED ===== */}
          <RevealSection id="fud" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Supply FUD Debunked</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="Ripple can print more XRP whenever they want" reality="Impossible. The XRPL protocol has no minting function. All 100 billion XRP were created at genesis and the code does not allow creation of new tokens." />
              <MisconceptionCard myth="Escrow unlocks dump billions of XRP on the market" reality="Monthly unlocks are predictable and priced in. Ripple re-escrows 60-80% immediately. Only 200-300M XRP enters potential circulation per month — and much of that is used for ODL, not market sales." />
              <MisconceptionCard myth="XRP has infinite supply because there are 100 billion" reality="100 billion is a fixed number that only decreases through burns. The large number is by design — XRP is meant for micropayments and institutional transfers where fractional amounts need to work at scale." />
              <MisconceptionCard myth="Ripple's XRP holdings make it centralized" reality="Ripple's escrow is enforced by the protocol, not by Ripple. They cannot access more than what unlocks monthly. This is more transparent and predictable than most crypto project treasuries." />
              <MisconceptionCard myth="XRP is inflationary like fiat currency" reality="XRP is the opposite of fiat. No entity can create new XRP, and every transaction permanently destroys a small amount. Over time, XRP becomes more scarce — not less." />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== SOURCES ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://xrpl.org/xrp.html" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL.org — XRP Overview & Supply Details</a></li>
              <li>• <a href="https://ripple.com/insights/explanation-ripples-xrp-escrow/" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">Ripple — Explanation of Ripple&apos;s XRP Escrow</a></li>
              <li>• <a href="https://xrpscan.com" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPScan — On-Chain Supply & Escrow Data</a></li>
              <li>• <a href="https://xrpl.org/transaction-cost.html" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL.org — Transaction Cost (Burn Mechanism)</a></li>
              <li>• <a href="https://coinmarketcap.com/currencies/xrp/" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">CoinMarketCap — XRP Circulating Supply Data</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/escrow", label: "XRP Escrow", desc: "Deep dive into Ripple's escrow" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Full tokenomics breakdown" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Side-by-side comparison" },
              { href: "/learn/xrp-myths", label: "XRP Myths Debunked", desc: "Common misconceptions" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "XRP's primary use case" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand XRP's Fundamentals"
          description="XRP's fixed, deflationary supply is just one piece of the puzzle. Explore XRP's tokenomics, escrow system, and real-world utility."
          primaryHref="/learn/xrp-tokenomics"
          primaryLabel="Full Tokenomics →"
          secondaryHref="/learn/escrow"
          secondaryLabel="Escrow Deep Dive"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple official announcements, XRPScan on-chain data, CoinMarketCap.</em>
        </p>
      </div>
    </>
  );
}

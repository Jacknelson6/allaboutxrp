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
    dateModified: "2026-02-11",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "What is XRP?" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/what-is-xrp" }),
  buildFAQSchema([
    { question: "What is XRP in simple terms?", answer: "XRP is a digital currency designed for fast, low-cost global payments. It settles transactions in 3-5 seconds with near-zero fees on the XRP Ledger, a decentralized blockchain." },
    { question: "Is XRP the same as Ripple?", answer: "No. XRP is a decentralized digital asset on the XRP Ledger. Ripple is a private company that uses XRP in its products. XRP would continue to exist even if Ripple ceased operations." },
    { question: "How many XRP tokens exist?", answer: "100 billion XRP were created at genesis. No more can ever be minted. XRP is slightly deflationary because small amounts are burned with every transaction." },
    { question: "Is XRP a good investment?", answer: "XRP has real utility in cross-border payments, growing institutional adoption, and regulatory clarity after the SEC case. However, all cryptocurrency investments carry risk. Do your own research." },
    { question: "What makes XRP different from Bitcoin?", answer: "XRP settles in 3-5 seconds vs. Bitcoin's 10+ minutes, costs fractions of a cent vs. dollars, handles 1,500+ TPS vs. Bitcoin's ~7, and uses an energy-efficient consensus protocol instead of proof-of-work mining." },
  ]),
];

const faqItems = [
  { q: "What is XRP in simple terms?", a: "XRP is a digital currency designed for fast, low-cost global payments. It settles transactions in 3-5 seconds with near-zero fees on the XRP Ledger, a decentralized blockchain. Think of it as the \"email of money\" — making value transfer as easy and fast as sending an email." },
  { q: "Is XRP the same as Ripple?", a: "No. XRP is a decentralized digital asset on the XRP Ledger. Ripple is a private company that uses XRP in its products. XRP would continue to exist even if Ripple ceased operations." },
  { q: "How many XRP tokens exist?", a: "100 billion XRP were created at genesis. No more can ever be minted. Approximately 60 billion are in circulation, ~33.9 billion are in Ripple's escrow, and over 14 million have been permanently burned through transaction fees." },
  { q: "Is XRP a good investment?", a: "XRP has real utility in cross-border payments, growing institutional adoption, regulatory clarity, and potential ETF products. However, all cryptocurrency investments carry risk. Do your own research and never invest more than you can afford to lose." },
  { q: "What makes XRP different from Bitcoin?", a: "XRP settles in 3-5 seconds vs. Bitcoin's 10+ minutes, costs fractions of a cent vs. dollars, handles 1,500+ TPS vs. ~7, and uses an energy-efficient consensus protocol instead of proof-of-work mining. Bitcoin is designed as a store of value; XRP is designed for payments." },
  { q: "How do I buy XRP?", a: "You can buy XRP on major exchanges like Uphold, Coinbase, Kraken, and Bitstamp. Check our beginner's guide to buying XRP at /learn/get-started for step-by-step instructions." },
];

export default function WhatIsXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="What is"
          titleAccent="XRP?"
          subtitle="XRP is a digital asset native to the XRP Ledger (XRPL), an open-source, decentralized blockchain purpose-built for payments. Created in 2012, XRP was designed to move money globally in seconds for fractions of a cent."
          breadcrumbLabel="What is XRP?"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" />
            <LastUpdated date="February 11, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP</strong> is a cryptocurrency built for fast, low-cost global payments on the <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. It settles in 3-5 seconds, costs less than $0.01 per transaction, and handles 1,500+ TPS. All 100 billion XRP were created at launch — no more can ever be minted. <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> uses XRP as a bridge currency for cross-border payments across 55+ countries.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Created", value: "June 2, 2012" },
          { label: "Total Supply", value: "100 billion (fixed)" },
          { label: "Settlement Time", value: "3-5 seconds" },
          { label: "Transaction Fee", value: "< $0.01" },
          { label: "Consensus", value: "Federated Consensus Protocol" },
          { label: "Throughput", value: "1,500+ TPS" },
          { label: "Creators", value: "David Schwartz, Jed McCaleb, Arthur Britto" },
          { label: "Legal Status", value: "Not a security (Torres ruling, 2023)" },
        ]} />

        <SectionNav items={[
          { id: "basics", label: "The Basics" },
          { id: "how-it-works", label: "How It Works" },
          { id: "tokenomics", label: "Tokenomics" },
          { id: "vs-others", label: "Comparisons" },
          { id: "use-cases", label: "Use Cases" },
          { id: "creators", label: "Creators" },
          { id: "sec-case", label: "SEC Case" },
          { id: "mistakes", label: "Common Mistakes" },
          { id: "faq", label: "FAQ" },
        ]} />


        {/* Key Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Settlement Time" value="3-5 sec" delay={0} />
          <StatPill label="Transaction Fee" value="< $0.01" delay={0.06} />
          <StatPill label="Throughput" value="1,500+ TPS" delay={0.12} />
          <StatPill label="Total Supply" value="100B (fixed)" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== THE BASICS ===== */}
          <RevealSection id="basics">
            <h2 className="text-2xl font-bold text-text-primary">XRP Explained: The Basics</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP is a <strong className="text-text-primary">cryptocurrency</strong> — a digital asset that uses cryptography and blockchain technology to enable secure, peer-to-peer transactions without intermediaries. But XRP isn&apos;t just another cryptocurrency. It was specifically engineered to solve one of the biggest problems in global finance: moving money across borders quickly and cheaply.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Today&apos;s international payment system relies on infrastructure built decades ago. Sending money from the United States to Japan through traditional banking channels can take 3-5 business days and cost $25-50 in fees. XRP completes the same transfer in 3-5 <em>seconds</em> for less than a fraction of a cent.
            </p>

            <div className="mt-6">
              <HighlightBox title="Key Insight" variant="accent">
                <p>The XRP Ledger processes approximately <strong className="text-text-primary">1,500 transactions per second</strong> — compared to Bitcoin&apos;s ~7 TPS and Ethereum&apos;s ~30 TPS. This throughput makes XRP practical for real-world payment applications at scale.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== HOW IT WORKS ===== */}
          <RevealSection id="how-it-works" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Does XRP Work?</h2>

            <h3 className="mt-6 text-xl font-semibold text-text-primary">The XRP Ledger Consensus Protocol</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Unlike Bitcoin, which uses energy-intensive proof-of-work (PoW) mining, the XRP Ledger uses a unique <strong className="text-text-primary">Federated Consensus Protocol</strong>. A network of independent validators agrees on the order and validity of XRP transactions every 3-5 seconds.
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Fast", desc: "Transactions confirm in 3-5 seconds, not minutes or hours" },
                { title: "Energy-efficient", desc: "No mining required — the XRPL uses 120,000x less energy than Bitcoin" },
                { title: "Decentralized", desc: "Over 150 validators globally, with Ripple operating only ~6% of them" },
                { title: "Reliable", desc: "The XRPL has operated continuously since 2012 with zero downtime, closing over 90 million ledgers" },
              ]} variant="zap" />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Bridge Currency for Cross-Border Payments</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              XRP&apos;s primary use case is as a <strong className="text-text-primary">bridge currency</strong> for international payments. A sender converts their local currency to XRP, the XRP is transferred across the XRPL in seconds, and the recipient&apos;s financial institution converts the XRP to their local currency. This eliminates the need for pre-funded nostro/vostro accounts — freeing up trillions of dollars currently locked in the global banking system.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-ripple" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">Ripple&apos;s</Link> On-Demand Liquidity (ODL) product leverages this bridge currency function, enabling financial institutions to send cross-border payments without maintaining accounts in destination currencies.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Native Features of the XRP Ledger</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Beyond simple payments, the XRPL includes powerful built-in features:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={3} items={[
                { title: "Decentralized Exchange", desc: "A built-in order book for trading any XRPL-issued asset", mono: false },
                { title: "Escrow", desc: "Time-locked and condition-based escrow contracts enforced by the protocol" },
                { title: "NFTs (XLS-20)", desc: "Native NFT minting and trading since October 2022" },
                { title: "AMM", desc: "Native Automated Market Maker functionality for decentralized liquidity" },
                { title: "Token Issuance", desc: "Issue stablecoins, CBDCs, and tokenized assets on the XRPL" },
                { title: "Multi-signing", desc: "Require multiple parties to authorize a transaction for security" },
              ]} />
            </div>
          </RevealSection>

          {/* ===== TOKENOMICS ===== */}
          <RevealSection id="tokenomics" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Tokenomics: Supply Breakdown</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">100 billion XRP</strong> were created when the XRP Ledger launched in 2012. This is a fixed, hard-capped supply — no new XRP can ever be minted. Approximately 33.9 billion XRP remains in <Link href="/people" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s escrow system</Link>. Here&apos;s how the supply breaks down as of February 2026:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Category", "Amount", "Details"]}
                rows={[
                  ["Total Supply", "100B XRP", "Fixed forever — no inflation"],
                  ["Circulating Supply", "~60B XRP", "Available on the open market"],
                  ["In Escrow", "~33.9B XRP", "Ripple's escrow system"],
                  ["Burned (Fees)", "~14.26M XRP", "Permanently destroyed"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Deflationary by Design" variant="success">
                <p>Every transaction on the XRPL burns a small amount of XRP (typically 0.00001 XRP) as a fee. These burned tokens are <strong className="text-text-primary">permanently destroyed</strong>, gradually reducing the total supply over time. Over 14 million XRP have been burned to date.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== COMPARISONS ===== */}
          <RevealSection id="vs-others" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP vs. Bitcoin vs. Ethereum: How Do They Compare?</h2>

            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Bitcoin", "Ethereum"]}
                rows={[
                  ["Settlement Time", "3-5 seconds", "10-60 minutes", "12-15 seconds"],
                  ["Transaction Fee", "< $0.01", "$1-50+", "$0.50-100+"],
                  ["Throughput", "1,500+ TPS", "~7 TPS", "~30 TPS"],
                  ["Consensus", "Federated Consensus", "Proof of Work", "Proof of Stake"],
                  ["Total Supply", "100B (fixed)", "21M (capped)", "~120M (variable)"],
                  ["Primary Use Case", "Payments & Bridging", "Store of Value", "Smart Contracts"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="How Is XRP Different?" variant="info">
                <ol className="list-decimal pl-4 space-y-2">
                  <li><strong className="text-text-primary">Purpose-built for payments:</strong> While Bitcoin was designed as &quot;digital gold&quot; and Ethereum as a smart contract platform, XRP was engineered specifically for fast, low-cost value transfer.</li>
                  <li><strong className="text-text-primary">No mining:</strong> XRP uses Federated Consensus instead of energy-intensive proof-of-work mining — 120,000x less energy than Bitcoin.</li>
                  <li><strong className="text-text-primary">Pre-mined fixed supply:</strong> All 100 billion XRP existed from day one. Combined with the deflationary burn mechanism, XRP&apos;s supply only decreases over time.</li>
                  <li><strong className="text-text-primary">Enterprise adoption:</strong> <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">Hundreds of financial institution partnerships</Link> and a company valued at $50 billion.</li>
                  <li><strong className="text-text-primary">Regulatory clarity:</strong> The 2023 Torres ruling established that XRP on exchanges is not a security — paving the way for <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">ETF filings and institutional products</Link>.</li>
                </ol>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== USE CASES ===== */}
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Are XRP&apos;s Use Cases?</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Cross-Border Payments", desc: "Ripple's partner network spans 55+ countries. Through ODL, XRP serves as the bridge currency — eliminating the need for pre-funded accounts in destination currencies." },
                { title: "Institutional Settlement", desc: "With Ripple's acquisition of Hidden Road (now Ripple Prime), over $3 trillion in annual clearing volume could eventually settle on the XRPL." },
                { title: "Stablecoin Infrastructure", desc: "Ripple's RLUSD stablecoin (launched Dec 2024) operates on XRPL. Learn more about how RLUSD helps XRP in our dedicated guide." },
                { title: "Tokenized Assets", desc: "The XRPL supports tokenization of real-world assets — real estate, gold, treasury bills. Partners like Archax, Meld Gold, and Zoniqx are building on XRPL." },
                { title: "Central Bank Digital Currencies", desc: "Ripple is working with 20+ central banks globally on CBDC pilot programs. The XRPL's speed, low cost, and compliance features make it a natural platform." },
                { title: "Everyday Payments", desc: "With 3-5 second settlement and fees under $0.01, XRP is one of the most practical cryptocurrencies for daily use via the Xaman wallet." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== CREATORS ===== */}
          <RevealSection id="creators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Who Created XRP and the XRP Ledger?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger was created by three developers: <strong className="text-text-primary">David Schwartz</strong> (now Ripple&apos;s CTO, known online as &quot;JoelKatz&quot;), <strong className="text-text-primary">Jed McCaleb</strong> (who later co-founded Stellar), and <strong className="text-text-primary">Arthur Britto</strong>. Development began in 2011 as they sought to build a faster, more energy-efficient alternative to Bitcoin.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The XRPL went live on June 2, 2012, with all 100 billion XRP created at genesis. <strong className="text-text-primary">Chris Larsen</strong> joined the team and together they formed OpenCoin (later renamed to <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link>) in September 2012.
            </p>

            <div className="mt-5">
              <HighlightBox title="Important Distinction" variant="warning">
                <p><strong className="text-text-primary">The XRP Ledger was created before Ripple the company existed.</strong> The XRPL is open-source and decentralized — it would continue to operate even if Ripple ceased to exist. Learn about the team on our <Link href="/learn/leadership" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Leadership</Link> page.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== ESCROW ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Does XRP&apos;s Escrow System Work?</h2>

            <div className="mt-5">
              <GlowCard
                title="December 16, 2017"
                value="55,000,000,000 XRP"
                subtitle="Locked into cryptographically enforced escrow contracts on the XRP Ledger"
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              Every month, up to 1 billion XRP unlocks automatically (enforced by the protocol), but Ripple typically re-escrows 60-80% immediately. Only 200-300 million XRP enters potential circulation each month. As of February 2026, approximately <strong className="text-text-primary">33.9 billion XRP</strong> remains in escrow.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Read our comprehensive deep dive: <Link href="/people" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">XRP Escrow: The Complete Guide →</Link>
            </p>
          </RevealSection>

          {/* ===== SEC CASE ===== */}
          <RevealSection id="sec-case" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The SEC Case and Regulatory Clarity</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In December 2020, the SEC sued Ripple Labs, alleging that XRP was an unregistered security. After years of litigation, <strong className="text-text-primary">Judge Analisa Torres ruled in July 2023</strong> that XRP sold on public exchanges to retail investors is <strong className="text-text-primary">not a security</strong>. This was a landmark decision for the entire cryptocurrency industry.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              In August 2024, Ripple was ordered to pay $125 million in civil penalties — far less than the SEC&apos;s original demand of nearly $2 billion. Following this clarity, major U.S. exchanges relisted XRP, and multiple firms filed for spot XRP ETFs.
            </p>
            <p className="mt-3 text-sm text-text-secondary">
              Learn more in our <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">complete history and timeline</Link>.
            </p>
          </RevealSection>

          {/* ===== 2026 AND BEYOND ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP in 2026 and Beyond</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              With the SEC case largely resolved, XRP is entering a new chapter. Key developments to watch:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "XRP Spot ETFs", desc: "Multiple applications filed by Bitwise, Canary Capital, 21Shares, and WisdomTree" },
                { title: "XRP Futures", desc: "Listed on CME with futures-based ETFs already trading" },
                { title: "Institutional Adoption", desc: "Ripple's acquisition strategy creating full-stack financial infrastructure" },
                { title: "RLUSD Growth", desc: "Stablecoin market cap surpassing $1.26 billion" },
                { title: "Global Regulatory Clarity", desc: "Favorable regulations in the US, UK, Singapore, UAE, and beyond" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== WHY XRP MATTERS ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Does XRP Matter?</h2>
            <div className="mt-5">
              <HighlightBox title="$150 Trillion Opportunity" variant="accent" large>
                <p>The global cross-border payments market moves over <strong className="text-text-primary">$150 trillion annually</strong>, yet the infrastructure behind it is decades old. International wire transfers still take 3-5 business days, cost $25-50 in fees, and require trillions locked in pre-funded accounts. XRP was designed to fix this — offering settlement in seconds for fractions of a cent.</p>
                <p className="mt-3">Beyond payments, XRP represents a shift toward an &quot;Internet of Value&quot; — a world where money moves as easily as information. With <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s</Link> growing institutional infrastructure, RLUSD stablecoin, and potential ETF products, XRP is positioned at the intersection of traditional finance and blockchain technology.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== COMMON MISTAKES ===== */}
          <RevealSection id="mistakes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Mistakes to Avoid</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="Ripple and XRP are the same thing" reality="Ripple is a company; XRP is a decentralized digital asset. They are related but distinct. XRP would continue to exist even if Ripple ceased operations." />
              <MisconceptionCard myth="XRP has unlimited supply" reality="XRP has a fixed supply of 100 billion. No more can ever be created. It's actually deflationary — transaction fees permanently burn XRP." />
              <MisconceptionCard myth="Escrow unlocks crash the price" reality="Monthly escrow unlocks are fully predictable and priced in. 60-80% is re-escrowed immediately. Only 200-300M enters potential circulation." />
              <MisconceptionCard myth="You should store XRP only on exchanges" reality="For long-term holding, use a self-custody wallet like Xaman. 'Not your keys, not your crypto.'" />
              <MisconceptionCard myth="I can use all my XRP — the wallet reserve doesn't matter" reality="XRPL accounts require a 10 XRP reserve to activate. Factor this in when setting up a new wallet." />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/history", label: "XRP History & Timeline", desc: "From 2011 to present" },
              { href: "/escrow", label: "Escrow Explained", desc: "Ripple's 55B XRP escrow" },
              { href: "/learn/get-started", label: "How to Buy XRP", desc: "Beginner's guide" },
              { href: "/learn/rlusd", label: "RLUSD & XRP", desc: "How the stablecoin helps XRP" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Ripple's global network" },
            ]} />
          </RevealSection>
        </div>

        {/* Conclusion CTA */}
        <LearnCTA
          title="Start Your XRP Journey"
          description="XRP is more than a cryptocurrency — it's the foundation of a new financial infrastructure being built by a $50 billion company with over 300 institutional partners. Ready to get started?"
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/what-is-ripple"
          secondaryLabel="Learn About Ripple"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 11, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, Ripple official announcements, CoinMarketCap, SEC court filings, XRPScan on-chain data.</em>
        </p>
      </div>
    </>
  );
}

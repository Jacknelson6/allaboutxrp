import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList, GlowCard,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Tokenomics: Supply, Escrow & Burns (2026)",
  description:
    "XRP tokenomics explained — total supply, circulating supply, Ripple escrow, burn rate, and distribution. Complete 2026 guide.",
  openGraph: {
    title: "XRP Tokenomics: Supply, Escrow & Burns | AllAboutXRP",
    description:
      "Everything about XRP's economics — 100B fixed supply, escrow system, deflationary burns, and distribution breakdown.",
    url: "https://allaboutxrp.com/learn/xrp-tokenomics",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Tokenomics Explained | AllAboutXRP",
    description: "Complete guide to XRP supply, escrow, burns, and distribution in 2026.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-tokenomics",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Tokenomics: Supply, Escrow & Burns",
    description: "A comprehensive guide to XRP tokenomics covering total supply, circulating supply, Ripple's escrow system, transaction fee burns, and distribution history.",
    url: "https://allaboutxrp.com/learn/xrp-tokenomics",
    datePublished: "2026-02-11",
    dateModified: "2026-02-11",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Tokenomics" },
  ]),
  buildFAQSchema([
    { question: "How many XRP exist?", answer: "100 billion XRP were created at genesis in 2012. This is a fixed, hard-capped supply — no more XRP can ever be minted. The total supply is actually slightly less than 100 billion because transaction fees permanently burn XRP." },
    { question: "How much XRP is in circulation?", answer: "As of early 2026, approximately 57-58 billion XRP are in circulation. The remainder is primarily held in Ripple's escrow system (~33.9 billion) or held by Ripple directly." },
    { question: "What is XRP escrow?", answer: "In December 2017, Ripple locked 55 billion XRP into cryptographic escrow contracts on the XRPL. Up to 1 billion XRP unlocks each month, but Ripple typically re-escrows 60-80% immediately. As of 2026, approximately 33.9 billion XRP remains in escrow." },
    { question: "Is XRP inflationary or deflationary?", answer: "XRP is deflationary. No new XRP can be created, and every transaction burns a small amount of XRP as a fee (typically 0.00001 XRP). Over 14 million XRP have been permanently burned to date. The total supply only decreases over time." },
    { question: "How is XRP distributed?", answer: "Of the original 100 billion XRP: 80 billion was allocated to Ripple (now largely in escrow or distributed), and 20 billion was given to the three co-founders. Distribution has occurred through sales, partnerships, grants, and ecosystem development." },
    { question: "What happens when all escrow XRP is released?", answer: "The escrow releases are predictable and gradual — up to 1 billion per month. At current rates, escrow releases will continue for years. Released XRP is used for Ripple's operations, partnerships, and ecosystem development, with unused portions re-escrowed." },
  ]),
];

const faqItems = [
  { q: "How many XRP exist?", a: "100 billion XRP were created at the XRP Ledger's genesis in June 2012. This is a fixed, hard-capped supply — the protocol makes it impossible to mint additional XRP. The actual total supply is slightly less than 100 billion because transaction fees permanently burn (destroy) XRP with every transaction. Over 14 million XRP have been burned to date." },
  { q: "How much XRP is in circulation?", a: "As of early 2026, approximately 57-58 billion XRP are in general circulation. This number gradually increases as Ripple releases XRP from escrow for operations and partnerships. The circulating supply figure is tracked by data providers like CoinMarketCap and XRPScan." },
  { q: "What is XRP escrow and how does it work?", a: "In December 2017, Ripple locked 55 billion XRP into 55 cryptographic escrow contracts on the XRPL — 1 billion per month for 55 months. When each monthly escrow expires, up to 1 billion XRP becomes available to Ripple. However, Ripple typically uses only a fraction and re-escrows the rest, extending the escrow schedule. As of 2026, approximately 33.9 billion XRP remains in escrow." },
  { q: "Is XRP inflationary or deflationary?", a: "XRP is deflationary. No new XRP can ever be created (the supply is hard-coded), and every transaction on the XRPL burns a small amount of XRP as a fee — typically 0.00001 XRP per transaction. This means the total supply of XRP permanently decreases over time, making it a mildly deflationary asset." },
  { q: "How was XRP originally distributed?", a: "At genesis, the 100 billion XRP was distributed as follows: 80 billion to Ripple (then OpenCoin) for development and distribution, and 20 billion split among the three co-founders (Jed McCaleb, Chris Larsen, Arthur Britto). Ripple later locked 55 billion of its allocation into escrow in 2017." },
  { q: "Does Ripple dump XRP on the market?", a: "Ripple's XRP sales are transparent and reported quarterly. Monthly escrow unlocks are predictable and publicly visible on the blockchain. Ripple typically uses a small fraction of unlocked XRP for operations and re-escrows the rest. Quarterly reports show Ripple's net sales relative to total XRP market volume are typically well under 1%." },
  { q: "What happens when all escrow XRP is released?", a: "At the current rate, Ripple's escrow will continue releasing XRP for several more years. Even after all original escrow expires, the XRP re-escrowed by Ripple will continue on its own schedule. The releases are gradual and predictable — they don't represent a sudden supply shock." },
];

export default function XRPTokenomicsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP"
          titleAccent="Tokenomics"
          subtitle="Understanding XRP's supply, distribution, and economic model is essential for any XRP holder or researcher. Here's the complete breakdown of how XRP's tokenomics work — from the 100 billion fixed supply to the escrow system and deflationary burn mechanism."
          breadcrumbLabel="XRP Tokenomics"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" />
          </div>
        </LearnHero>

        {/* TL;DR */}
        <div className="mt-10 rounded-2xl border border-xrp-accent/20 bg-xrp-accent/5 p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-xrp-accent">TL;DR</h2>
          <p className="mt-3 text-text-secondary leading-relaxed">
            <strong className="text-text-primary">The short answer is:</strong> XRP has a fixed supply of 100 billion — no more can ever be created. Approximately 57-58 billion circulate freely, ~33.9 billion are locked in <Link href="/learn/escrow" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s escrow</Link>, and over 14 million have been permanently burned through transaction fees. XRP is mildly deflationary — the supply only shrinks over time.
          </p>
        </div>

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "supply", label: "Supply" },
          { id: "escrow", label: "Escrow" },
          { id: "burns", label: "Burns" },
          { id: "distribution", label: "Distribution" },
          { id: "comparison", label: "vs Others" },
          { id: "ripple-sales", label: "Ripple Sales" },
          { id: "reserves", label: "Reserves" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Total Supply" value="100B" />
          <StatPill label="Circulating" value="~58B" />
          <StatPill label="In Escrow" value="~33.9B" />
          <StatPill label="Burned" value=">14M" />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== OVERVIEW ===== */}
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP Tokenomics — Everything You Need to Know in 2026</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP, the native token of the XRP Ledger developed by Ripple Labs</Link>, has a unique economic model that sets it apart from most other cryptocurrencies. Unlike Bitcoin, which releases new tokens through mining over 130+ years, all 100 billion XRP were created at genesis in 2012. Unlike inflationary tokens with unlimited supply, XRP&apos;s total supply can only decrease through its deflationary burn mechanism.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Understanding XRP&apos;s tokenomics is critical for investors, developers, and anyone evaluating the asset. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger&apos;s</Link> economic design addresses supply transparency, predictable distribution, spam prevention, and long-term sustainability.
            </p>
          </RevealSection>

          {/* ===== SUPPLY ===== */}
          <RevealSection id="supply">
            <h2 className="text-2xl font-bold text-text-primary">Total Supply and Circulating Supply</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">100 billion XRP</strong> were created when the XRP Ledger launched on June 2, 2012. This is a hard-coded maximum — the XRPL protocol makes it technically impossible to create additional XRP. This stands in contrast to many other cryptocurrencies where supply can be changed through governance votes or protocol updates.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Category", "Amount (approx.)", "Percentage", "Details"]}
                rows={[
                  ["Total Created", "100,000,000,000", "100%", "Created at genesis, June 2012"],
                  ["Circulating Supply", "~57-58 billion", "~58%", "Available on the open market"],
                  ["Ripple Escrow", "~33.9 billion", "~34%", "Cryptographic time-locked escrow"],
                  ["Ripple (non-escrow)", "~8 billion", "~8%", "Ripple's operational holdings"],
                  ["Burned (Fees)", ">14 million", "<0.02%", "Permanently destroyed"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Fixed Supply = No Inflation" variant="success">
                <p>Unlike Ethereum (which can inflate through staking rewards) or fiat currencies (which central banks can print), <strong className="text-text-primary">XRP has zero inflation</strong>. The supply was fixed at genesis and can only decrease. This makes XRP one of the hardest-capped assets in the cryptocurrency space.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== ESCROW ===== */}
          <RevealSection id="escrow">
            <h2 className="text-2xl font-bold text-text-primary">Ripple&apos;s Escrow System Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The escrow system is one of the most important aspects of XRP&apos;s tokenomics. In December 2017, <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> locked <strong className="text-text-primary">55 billion XRP</strong> into cryptographic escrow contracts directly on the XRP Ledger to provide transparency and predictability about XRP supply.
            </p>

            <div className="mt-6">
              <GlowCard
                title="December 2017"
                value="55,000,000,000 XRP"
                subtitle="Locked into 55 monthly escrow contracts on the XRP Ledger"
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">How Escrow Works</h3>
            <div className="mt-5">
              <IconList items={[
                { title: "Monthly unlocks", desc: "Up to 1 billion XRP unlocks automatically each month. This is enforced by the XRPL protocol — Ripple cannot access escrow XRP early." },
                { title: "Partial use", desc: "Ripple typically uses only a fraction of the unlocked XRP for operational needs, partnerships, and ecosystem development." },
                { title: "Re-escrow", desc: "Unused XRP from monthly unlocks is re-escrowed at the back of the queue, extending the schedule. Ripple typically re-escrows 60-80% of each monthly unlock." },
                { title: "Full transparency", desc: "All escrow transactions are visible on the public blockchain. Anyone can verify the escrow balances on XRPScan or other XRPL explorers." },
                { title: "Current balance", desc: "As of February 2026, approximately 33.9 billion XRP remains in escrow — down from the original 55 billion." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Why Escrow Matters" variant="accent">
                <p>The escrow system ensures that Ripple cannot flood the market with XRP. Monthly releases are <strong className="text-text-primary">predictable and transparent</strong>, giving the market clear visibility into supply dynamics. This was a major step toward building trust with institutional investors and the broader market.</p>
              </HighlightBox>
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Monthly Escrow Schedule</h3>
            <div className="mt-4">
              <DataTable
                headers={["Event", "Amount", "Frequency"]}
                rows={[
                  ["Escrow unlock", "Up to 1 billion XRP", "Monthly (1st of each month)"],
                  ["Ripple usage", "200-400 million XRP (typical)", "Monthly"],
                  ["Re-escrowed", "600-800 million XRP (typical)", "Monthly"],
                  ["Net new circulation", "200-300 million XRP", "Monthly"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* ===== BURNS ===== */}
          <RevealSection id="burns">
            <h2 className="text-2xl font-bold text-text-primary">Transaction Fee Burns: XRP&apos;s Deflationary Mechanism</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every transaction on the XRP Ledger requires a small fee paid in XRP. Unlike other blockchains where transaction fees go to miners or validators, <strong className="text-text-primary">XRPL transaction fees are permanently burned</strong> — destroyed forever. This makes XRP a deflationary asset by design.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Metric", "Value"]}
                rows={[
                  ["Standard transaction fee", "0.00001 XRP (~12 drops)"],
                  ["Fee in USD", "Far less than $0.01"],
                  ["Total XRP burned to date", ">14 million XRP"],
                  ["Burn rate", "Varies with network activity"],
                  ["Fees paid to validators?", "No — 100% burned"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-4 text-text-secondary leading-relaxed">
              While the current burn rate is modest relative to the 100 billion total supply, it&apos;s important to understand the mechanism: as XRPL usage increases over time, the burn rate accelerates. A future with millions of daily transactions would burn significantly more XRP.
            </p>

            <div className="mt-6">
              <HighlightBox title="Why Burn Fees?" variant="info">
                <p>The fee burn serves two purposes: <strong className="text-text-primary">(1) Spam prevention</strong> — even tiny fees prevent attackers from flooding the network with worthless transactions. <strong className="text-text-primary">(2) Supply reduction</strong> — over time, the total supply of XRP decreases, potentially increasing the value of remaining XRP if demand stays constant or grows.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== DISTRIBUTION ===== */}
          <RevealSection id="distribution">
            <h2 className="text-2xl font-bold text-text-primary">Original Distribution of XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When the XRP Ledger launched in 2012, the 100 billion XRP was distributed among the creators and the company they would form:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Recipient", "Amount", "Percentage", "Notes"]}
                rows={[
                  ["Ripple (OpenCoin)", "80 billion", "80%", "For company operations, distribution, and ecosystem development"],
                  ["Jed McCaleb", "9 billion", "9%", "Co-founder; subject to structured selling agreement"],
                  ["Chris Larsen", "5.19 billion", "5.19%", "Co-founder and first CEO"],
                  ["Arthur Britto", "~5.81 billion", "~5.81%", "Co-founder; much donated to charitable foundations"],
                ]}
                highlightCol={1}
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Jed McCaleb&apos;s XRP</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              When Jed McCaleb left Ripple in 2013 to co-found Stellar, he retained his 9 billion XRP allocation. To prevent market disruption, Ripple and McCaleb agreed to a structured selling schedule that limited the rate at which he could sell. McCaleb&apos;s selling was tracked publicly by the community via the &quot;Tacostand&quot; wallet. His remaining XRP was fully distributed by mid-2022.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">How Ripple Has Used Its XRP</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Over the years, Ripple has used its XRP allocation for:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Institutional sales", desc: "Strategic sales to financial institutions and partners, typically at negotiated prices with lockup periods" },
                { title: "Ecosystem grants", desc: "The XRPL Grants program, university partnerships, and developer incentives to grow the ecosystem" },
                { title: "Operational funding", desc: "XRP sales to fund Ripple's operations, though the company also generates revenue from its software products" },
                { title: "Market making", desc: "Providing liquidity for Ripple's On-Demand Liquidity (ODL) payment corridors" },
                { title: "Strategic investments", desc: "Investments in companies building on or adjacent to the XRP ecosystem" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== COMPARISON ===== */}
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">XRP Tokenomics vs. Other Cryptocurrencies</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Bitcoin", "Ethereum", "Solana"]}
                rows={[
                  ["Total Supply", "100B (fixed)", "21M (capped)", "~120M (variable)", "~580M (inflationary)"],
                  ["Issuance Model", "All at genesis", "Mining rewards", "Staking rewards", "Staking rewards"],
                  ["Inflation Rate", "0% (deflationary)", "~1.7% (decreasing)", "~0.5% (variable)", "~5-7%"],
                  ["Fee Model", "Burned (deflationary)", "Paid to miners", "Partially burned", "Partially burned"],
                  ["Supply Cap", "Hard cap (protocol-enforced)", "Hard cap (protocol-enforced)", "No hard cap", "No hard cap"],
                  ["Lockup Mechanism", "Ripple escrow", "None", "Staking lockup", "Staking lockup"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Key Takeaway" variant="accent">
                <p>XRP has one of the <strong className="text-text-primary">simplest and most transparent tokenomics models</strong> in crypto: fixed supply, no inflation, no mining rewards, no staking dilution, and transparent escrow releases. The total supply can only go down over time.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== RIPPLE SALES ===== */}
          <RevealSection id="ripple-sales">
            <h2 className="text-2xl font-bold text-text-primary">Ripple&apos;s XRP Sales and Transparency</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple publishes <strong className="text-text-primary">quarterly XRP Markets Reports</strong> that detail the company&apos;s XRP sales, escrow activity, and market observations. This level of transparency is notable in the crypto industry.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Quarterly Reports", desc: "Published on Ripple's website since 2016, these reports break down net XRP sales, escrow changes, and overall market conditions. Available at ripple.com/insights." },
                { title: "On-Chain Verification", desc: "All of Ripple's XRP holdings and escrow accounts are publicly visible on the XRP Ledger. Anyone can verify balances using XRPScan, Bithomp, or other XRPL explorers." },
                { title: "Sales Volume", desc: "Ripple's quarterly net XRP sales are typically well under 1% of total XRP trading volume. Sales occur through programmatic and OTC channels." },
                { title: "Institutional Focus", desc: "Post-SEC case, Ripple has focused on institutional sales with lockup periods rather than open-market programmatic sales, reducing sell pressure." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== RESERVES ===== */}
          <RevealSection id="reserves">
            <h2 className="text-2xl font-bold text-text-primary">XRPL Account Reserves and XRP Economics</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger&apos;s reserve system is part of its economic design. Every XRPL account must maintain minimum XRP balances to prevent spam and ensure network health. For more details, see our <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Wallets guide</Link>.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Reserve Type", "Current Amount", "Purpose"]}
                rows={[
                  ["Base Reserve", "10 XRP", "Required to activate any XRPL account"],
                  ["Owner Reserve", "2 XRP per object", "Per trust line, offer, escrow, NFT page, etc."],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              These reserves effectively remove XRP from active circulation. With millions of XRPL accounts and objects, a significant amount of XRP is locked in reserves across the network. The reserve amounts are set by validator vote and have been reduced in the past — from 20/5 XRP to the current 10/2 XRP in 2021.
            </p>
          </RevealSection>

          {/* ===== MISCONCEPTIONS ===== */}
          <RevealSection>
            <h2 className="text-2xl font-bold text-text-primary">Common Misconceptions</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="Ripple can create more XRP" reality="Impossible. The 100 billion supply is hard-coded into the XRPL protocol. No one — including Ripple — can create additional XRP." />
              <MisconceptionCard myth="Escrow unlocks crash the price" reality="Monthly escrow unlocks are fully predictable and transparent. Markets price this in. Ripple re-escrows 60-80% of each unlock. The net impact on circulating supply is gradual." />
              <MisconceptionCard myth="Ripple owns most of the XRP supply" reality="Ripple's holdings are largely in escrow with predictable release schedules. The majority of freely circulating XRP (57-58 billion) is distributed among millions of holders worldwide." />
              <MisconceptionCard myth="XRP has unlimited supply because 100 billion is so many" reality="Supply quantity is irrelevant — what matters is the fixed cap and deflationary mechanism. 100 billion units with a $2 price gives roughly the same market cap as 21 million Bitcoin at a much higher per-unit price." />
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
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/escrow", label: "Escrow Deep Dive", desc: "Detailed escrow mechanics" },
              { href: "/learn/xrp-ledger-explained", label: "XRPL Explained", desc: "How the ledger works" },
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Supply and economics compared" },
              { href: "/answers/how-many-xrp-are-there", label: "How Many XRP Exist?", desc: "Total supply breakdown" },
              { href: "/answers/will-xrp-reach-10-dollars", label: "Will XRP Reach $10?", desc: "Price potential analysis" },
              { href: "/tools/xrp-profit-calculator", label: "XRP Profit Calculator", desc: "Calculate potential gains" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand XRP Inside and Out"
          description="Now that you understand XRP's tokenomics, explore the technology behind the XRP Ledger or learn how to buy and store XRP."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="How XRPL Works →"
          secondaryHref="/learn/how-to-buy-xrp"
          secondaryLabel="Buy XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 11, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple Quarterly XRP Markets Reports, XRPScan on-chain data, CoinMarketCap.</em>
        </p>
      </div>
    </>
  );
}

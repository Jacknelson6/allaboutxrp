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
import UniqueInsight from "@/components/learn/UniqueInsight";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP ETF Explained: Everything You Need to Know",
  description:
    "What is an XRP ETF? Learn about XRP ETF filings, approval status, and what it means for XRP price. Complete 2026 guide.",
  keywords: ["XRP ETF", "XRP ETF approval", "Ripple ETF", "XRP exchange traded fund", "crypto ETF"],
  openGraph: {
    title: "XRP ETF Explained: Everything You Need to Know | AllAboutXRP",
    description:
      "Complete guide to XRP ETFs — filings, approval timeline, and price impact analysis.",
    url: "https://allaboutxrp.com/learn/xrp-etf",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP ETF Explained | AllAboutXRP",
    description:
      "What is an XRP ETF? Filing history, approval status, and what it means for price.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-etf",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP ETF Explained: Everything You Need to Know",
    description: "A comprehensive guide to XRP ETFs — what they are, filing history, current approval status, and price implications for XRP holders.",
    url: "https://allaboutxrp.com/learn/xrp-etf",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP ETF Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-etf" }),
  buildFAQSchema([
    { question: "What is an XRP ETF?", answer: "An XRP ETF (Exchange-Traded Fund) is a regulated investment product that tracks the price of XRP and trades on traditional stock exchanges, allowing investors to gain exposure to XRP without directly buying or storing the cryptocurrency." },
    { question: "Has an XRP ETF been approved?", answer: "As of early 2026, XRP futures ETFs are trading on U.S. markets. Multiple spot XRP ETF applications have been filed with the SEC by firms including Bitwise, 21Shares, Canary Capital, and WisdomTree, with decisions expected in 2026." },
    { question: "How would an XRP spot ETF affect price?", answer: "Bitcoin's spot ETF approval in January 2024 led to significant price appreciation due to institutional inflows. Analysts expect a similar dynamic for XRP, with estimates of billions in potential new capital flowing into XRP through ETF products." },
    { question: "What is the difference between a spot and futures XRP ETF?", answer: "A spot XRP ETF holds actual XRP tokens, directly impacting supply and demand. A futures ETF holds XRP futures contracts, providing price exposure without directly purchasing XRP. Spot ETFs are generally considered more impactful for price." },
    { question: "Who has filed for an XRP spot ETF?", answer: "Major firms including Bitwise, 21Shares, Canary Capital, WisdomTree, and Grayscale have filed for spot XRP ETFs with the SEC. Franklin Templeton and other major asset managers have also expressed interest." },
  ]),
];

const faqItems = [
  { q: "What is an XRP ETF?", a: "An XRP ETF (Exchange-Traded Fund) is a regulated investment product that tracks the price of XRP and trades on traditional stock exchanges like the NYSE or Nasdaq. It allows investors to gain exposure to XRP through their existing brokerage accounts — without needing to buy, store, or manage cryptocurrency directly." },
  { q: "Has an XRP ETF been approved?", a: "As of early 2026, XRP futures-based ETFs are already trading on U.S. markets. Multiple spot XRP ETF applications are under SEC review from firms including Bitwise, 21Shares, Canary Capital, and WisdomTree. Final decisions are expected throughout 2026." },
  { q: "How would an XRP spot ETF affect the price?", a: "Bitcoin's spot ETF approval in January 2024 preceded massive institutional inflows and significant price appreciation. Analysts estimate a spot XRP ETF could bring billions in new institutional capital, potentially driving substantial price appreciation. However, markets often 'price in' anticipated events." },
  { q: "What is the difference between a spot and futures XRP ETF?", a: "A spot XRP ETF holds actual XRP tokens in custody, directly affecting supply and demand. A futures ETF holds derivatives contracts that track XRP's price without purchasing the underlying asset. Spot ETFs are considered more impactful for price because they require buying real XRP." },
  { q: "Who has filed for an XRP spot ETF?", a: "Major asset managers including Bitwise, 21Shares, Canary Capital, WisdomTree, and Grayscale have filed spot XRP ETF applications with the SEC. This level of institutional interest signals strong confidence in XRP's regulatory standing." },
];

export default function XRPETFPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP ETF Explained:"
          titleAccent="Everything You Need to Know"
          subtitle="Exchange-traded funds (ETFs) are bringing XRP to Wall Street. Learn what XRP ETFs are, who's filed for them, the current approval status, and what it all means for XRP's price and adoption."
          breadcrumbLabel="XRP ETF Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>An <strong className="text-text-primary">XRP ETF</strong> lets investors buy XRP exposure through traditional stock exchanges. XRP futures ETFs are already trading, and multiple firms — including Bitwise, 21Shares, and WisdomTree — have filed for <strong className="text-text-primary">spot XRP ETFs</strong> with the SEC. Bitcoin&apos;s spot ETF saw over $30 billion in inflows in its first year. A spot XRP ETF could bring similar institutional capital to XRP. Learn about <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP fundamentals</Link> and the <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC vs Ripple case</Link> that made this possible.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Product Type", value: "Exchange-Traded Fund (ETF)" },
          { label: "Futures ETFs", value: "Trading since 2025" },
          { label: "Spot ETF Status", value: "Multiple applications under SEC review" },
          { label: "Key Filers", value: "Bitwise, 21Shares, Canary Capital, WisdomTree" },
          { label: "BTC ETF Inflows (Year 1)", value: "$30+ billion" },
          { label: "Regulatory Catalyst", value: "Torres ruling — XRP is not a security" },
        ]} />

        <SectionNav items={[
          { id: "what-is-etf", label: "What is an ETF?" },
          { id: "crypto-etfs", label: "Crypto ETFs" },
          { id: "xrp-etf-filings", label: "XRP ETF Filings" },
          { id: "spot-vs-futures", label: "Spot vs Futures" },
          { id: "price-impact", label: "Price Impact" },
          { id: "comparison", label: "BTC/ETH Comparison" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="BTC ETF Year 1 Inflows" value="$30B+" delay={0} />
          <StatPill label="Spot ETF Filers" value="5+" delay={0.06} />
          <StatPill label="Futures ETFs" value="Live" delay={0.12} />
          <StatPill label="SEC Clarity" value="✓" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* WHAT IS AN ETF */}
          <RevealSection id="what-is-etf">
            <h2 className="text-2xl font-bold text-text-primary">What is an ETF?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              An <strong className="text-text-primary">Exchange-Traded Fund (ETF)</strong> is an investment product that trades on stock exchanges just like regular stocks. ETFs hold underlying assets — stocks, bonds, commodities, or in this case, cryptocurrency — and allow investors to gain exposure without directly owning those assets.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For cryptocurrency, ETFs are significant because they bridge the gap between traditional finance (TradFi) and digital assets. Instead of navigating crypto exchanges, wallets, and private keys, investors can buy shares of an XRP ETF through their existing brokerage account — whether that&apos;s Fidelity, Schwab, or a retirement account.
            </p>
            <div className="mt-6">
              <HighlightBox title="Why ETFs Matter for XRP" variant="accent">
                <p>ETFs unlock access for <strong className="text-text-primary">institutional investors</strong> — pension funds, endowments, hedge funds, and registered investment advisors — many of whom are restricted from holding cryptocurrency directly but can hold regulated ETF products.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* CRYPTO ETFS */}
          <RevealSection id="crypto-etfs" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Crypto ETFs Work</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Crypto ETFs come in two main varieties: <strong className="text-text-primary">spot ETFs</strong> and <strong className="text-text-primary">futures ETFs</strong>. A spot ETF holds the actual cryptocurrency in custody, while a futures ETF holds derivatives contracts that track the asset&apos;s price.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The crypto ETF landscape changed dramatically in January 2024 when the SEC approved <strong className="text-text-primary">11 spot Bitcoin ETFs</strong> simultaneously. These products saw unprecedented demand, accumulating over $30 billion in net inflows in their first year. Spot Ethereum ETFs followed in mid-2024, further validating the crypto ETF model.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Bitcoin Spot ETFs (Jan 2024)", desc: "11 approved simultaneously — $30B+ inflows in year one" },
                { title: "Ethereum Spot ETFs (Mid 2024)", desc: "Multiple approved, bringing ETH to traditional portfolios" },
                { title: "XRP Futures ETFs (2025)", desc: "Now trading, providing initial institutional access" },
                { title: "XRP Spot ETFs (2026)", desc: "Multiple applications under SEC review — decisions pending" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* XRP ETF FILINGS */}
          <RevealSection id="xrp-etf-filings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP ETF Filing History</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The path to XRP ETFs was blocked for years by the <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC&apos;s lawsuit against Ripple</Link>. Once Judge Torres ruled in July 2023 that XRP sold on exchanges is not a security, the regulatory path cleared. Multiple major asset managers have since filed for spot XRP ETFs.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Firm", "Product Type", "Filing Date", "Status"]}
                rows={[
                  ["Bitwise", "Spot XRP ETF", "Oct 2024", "Under SEC review"],
                  ["Canary Capital", "Spot XRP ETF", "Oct 2024", "Under SEC review"],
                  ["21Shares", "Spot XRP ETF", "Nov 2024", "Under SEC review"],
                  ["WisdomTree", "Spot XRP ETF", "Dec 2024", "Under SEC review"],
                  ["Grayscale", "Spot XRP ETF (conversion)", "Jan 2025", "Under SEC review"],
                  ["Franklin Templeton", "Spot XRP ETF", "2025", "Under SEC review"],
                ]}
                highlightCol={3}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The SEC typically has up to 240 days from the initial filing to approve or deny a spot ETF application, with multiple extension windows. The level of institutional interest in XRP ETFs is unprecedented for an altcoin — signaling strong confidence in XRP&apos;s regulatory standing following the <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple case resolution</Link>.
            </p>
          </RevealSection>

          {/* SPOT VS FUTURES */}
          <RevealSection id="spot-vs-futures" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Spot ETF vs. Futures ETF: What&apos;s the Difference?</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "Spot ETF", "Futures ETF"]}
                rows={[
                  ["Holds", "Actual XRP tokens", "Futures contracts"],
                  ["Price Tracking", "Direct — mirrors spot price", "Indirect — may deviate"],
                  ["Supply Impact", "Buys real XRP → reduces supply", "No direct supply impact"],
                  ["Price Impact", "Higher — creates buy pressure", "Lower — synthetic exposure"],
                  ["Fees", "Generally lower", "Rolling costs add up"],
                  ["Availability", "Pending SEC approval", "Already trading"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Why Spot ETFs Matter More" variant="info">
                <p>When a spot ETF issuer receives investor inflows, they must <strong className="text-text-primary">purchase actual XRP</strong> on the open market to back those shares. This creates real buy pressure and reduces available supply. Bitcoin&apos;s spot ETFs demonstrated this effect — issuers were buying more BTC daily than miners produced, contributing to significant price appreciation.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* PRICE IMPACT */}
          <RevealSection id="price-impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Would XRP ETF Approval Mean for Price?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While past performance doesn&apos;t guarantee future results, the Bitcoin ETF experience provides a useful reference point. Key considerations:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Institutional Inflows", desc: "Bitcoin spot ETFs attracted $30B+ in year one. Even a fraction of that directed at XRP would represent massive new demand relative to XRP's market cap." },
                { title: "Supply Dynamics", desc: "XRP's circulating supply is ~60 billion, with ~33.9 billion in Ripple's escrow. ETF buying pressure on a relatively constrained free float could amplify price impact." },
                { title: "Legitimacy Effect", desc: "An SEC-approved ETF validates XRP as a legitimate institutional asset class, potentially unlocking allocations from funds that currently avoid crypto." },
                { title: "Retail Access", desc: "ETFs in retirement accounts (401k, IRA) open XRP exposure to millions of investors who would never use a crypto exchange." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Important Caveat" variant="warning">
                <p>Markets often &quot;price in&quot; anticipated events before they occur. Some of the XRP ETF premium may already be reflected in the current price. Additionally, ETF approval does not guarantee immediate price appreciation — short-term &quot;sell the news&quot; reactions are common. Always do your own research. See our <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">XRP price history</Link> for context on past market dynamics.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* COMPARISON */}
          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP ETF vs. Bitcoin &amp; Ethereum ETFs</h2>
            <div className="mt-6">
              <DataTable
                headers={["Metric", "Bitcoin ETF", "Ethereum ETF", "XRP ETF"]}
                rows={[
                  ["Spot Approval", "Jan 2024", "Mid 2024", "Pending (2026)"],
                  ["Year 1 Inflows", "$30B+", "$5B+", "TBD"],
                  ["Regulatory Clarity", "Commodity (CFTC)", "Commodity (CFTC)", "Not a security (Torres)"],
                  ["Number of Filers", "11 (at launch)", "8+", "6+"],
                  ["Futures ETFs First?", "Yes (Oct 2021)", "Yes", "Yes (2025)"],
                  ["Institutional Interest", "Very High", "High", "Growing rapidly"],
                ]}
                highlightCol={3}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The pattern is clear: futures ETFs launch first, followed by spot ETF approval. Bitcoin and Ethereum both followed this path, and XRP appears to be on the same trajectory. The key difference is that XRP&apos;s regulatory clarity comes from a <strong className="text-text-primary">federal court ruling</strong> rather than a CFTC commodity designation — which some analysts argue provides even stronger legal standing. <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s</Link> institutional relationships and growing enterprise adoption add further weight to the ETF narrative.
            </p>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* SOURCES */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=S-1&dateb=&owner=include&count=40&search_text=xrp&action=getcompany" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">SEC EDGAR — XRP ETF Filings</a></li>
              <li>• <a href="https://www.coindesk.com/policy/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">CoinDesk — Crypto Policy Coverage</a></li>
              <li>• <a href="https://ripple.com/insights/" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Insights — Official Blog</a></li>
              <li>• <a href="https://www.bloomberg.com/crypto" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Bloomberg — Crypto & ETF Coverage</a></li>
              <li>• <a href="https://casetext.com/case/sec-v-ripple-labs-inc-4" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v. Ripple Labs — Court Ruling</a></li>
            </ul>
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
              { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Banks & institutions" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise storage" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge currency" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
            ]} />
          </RevealSection>
        </div>

        <UniqueInsight title="XRP ETF Timeline: Our Realistic Assessment" verifiedDate="February 23, 2026">
          <p>Let's cut through the hype. As of February 2026, there are <strong className="text-white">7 active XRP ETF applications</strong> with the SEC: Grayscale, 21Shares, Bitwise, Canary Capital, WisdomTree, Franklin Templeton, and CoinShares. The first decision deadline (Grayscale's 19b-4) falls in Q3 2026. Bloomberg ETF analysts Eric Balchunas and James Seyffart put approval odds at 65% by October 2026 — we think that's roughly right, maybe slightly conservative given the new SEC leadership.</p>
          <p>Here's the math that matters: Bitcoin spot ETFs attracted $40B+ in their first year. Ethereum ETFs pulled in ~$8B. XRP's market cap is roughly 25% of ETH's. A conservative estimate: an XRP ETF could see <strong className="text-white">$3-6 billion in net inflows in year one</strong>. At current circulating supply (~57B XRP), even $4B of buying pressure represents ~3-4% of the entire float being absorbed by ETF custodians. That's mechanically bullish regardless of sentiment.</p>
          <p>The wildcard: XRP's post-SEC clarity actually makes it an <em>easier</em> approval than Solana or other altcoin ETF candidates. The Torres ruling explicitly classified secondary market XRP sales as non-securities. The SEC literally cannot argue XRP is an unregistered security in an ETF application after losing that argument in court. This is why we believe XRP will be the third crypto spot ETF approved — before SOL, before ADA, before any other altcoin.</p>
        </UniqueInsight>

        <LearnCTA
          title="Ready to Invest in XRP?"
          description="Whether you're waiting for the ETF or want to buy XRP directly, we've got you covered with step-by-step guides."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Best XRP Wallets"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: SEC EDGAR, CoinDesk, Bloomberg, Ripple Insights, court filings.</em>
        </p>
      </div>
    </>
  );
}

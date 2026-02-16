import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Is XRP a Security? The SEC Ruling Explained | AllAboutXRP",
  description:
    "Is XRP a security? Learn about the Howey Test, the SEC vs Ripple ruling, and what the court decided about XRP's legal status as a digital asset.",
  keywords: ["is XRP a security", "XRP Howey Test", "SEC XRP ruling", "XRP legal status", "XRP security classification", "Ripple SEC outcome"],
  openGraph: {
    title: "Is XRP a Security? The Definitive Legal Analysis",
    description:
      "The court ruled XRP is not a security when sold on exchanges. Here's what that means and why it matters for crypto regulation.",
    url: "https://allaboutxrp.com/learn/is-xrp-a-security",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is XRP a Security? The Complete Legal Breakdown",
    description: "Court ruling, Howey Test analysis, and what it means for XRP holders.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/is-xrp-a-security" },
};

const schemas = [
  buildArticleSchema({
    headline: "Is XRP a Security? The SEC Ruling Explained",
    description: "A comprehensive analysis of XRP's legal classification, the Howey Test, and the landmark SEC vs Ripple ruling.",
    url: "https://allaboutxrp.com/learn/is-xrp-a-security",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Is XRP a Security?" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/is-xrp-a-security" }),
  buildFAQSchema([
    { question: "Is XRP classified as a security?", answer: "No. In July 2023, Judge Analisa Torres ruled that XRP sold on public exchanges to retail buyers is not a security under the Howey Test. However, Ripple's direct institutional sales of XRP were found to be unregistered securities offerings. The case settled in 2025 with Ripple paying a reduced penalty." },
    { question: "What is the Howey Test and how does it apply to XRP?", answer: "The Howey Test is a four-part legal test from a 1946 Supreme Court case. It defines a security as (1) an investment of money, (2) in a common enterprise, (3) with an expectation of profits, (4) derived from the efforts of others. The court found that retail XRP buyers on exchanges did not meet all four prongs because they had no contract with or expectation from Ripple." },
    { question: "Did Ripple win or lose the SEC lawsuit?", answer: "It was a mixed outcome. Ripple won on the key question — retail sales of XRP are not securities transactions. But the court found that Ripple's direct sales to institutional investors were unregistered securities offerings. The case settled in 2025 with Ripple paying approximately $50 million, far less than the SEC's original demand." },
    { question: "Can the SEC still classify XRP as a security?", answer: "The court ruling established that XRP itself is not a security — it's a digital token. However, the manner in which it's sold can constitute a securities transaction. This distinction is crucial. Under the current pro-crypto regulatory environment and SEC leadership, further action against XRP is unlikely." },
    { question: "How does XRP's legal status compare to Bitcoin and Ethereum?", answer: "Bitcoin and Ethereum have been declared non-securities by the SEC (Bitcoin in 2018, Ethereum more recently). XRP now has judicial precedent that retail exchange sales are not securities transactions. All three are considered commodities or digital assets rather than securities when traded on secondary markets." },
  ]),
];

const faqItems = [
  { q: "Is XRP classified as a security?", a: "No. In July 2023, Judge Analisa Torres ruled that XRP sold on public exchanges to retail buyers is not a security under the Howey Test. However, Ripple's direct institutional sales of XRP were found to be unregistered securities offerings. The case settled in 2025 with Ripple paying a reduced penalty." },
  { q: "What is the Howey Test and how does it apply to XRP?", a: "The Howey Test is a four-part legal test from a 1946 Supreme Court case. It defines a security as (1) an investment of money, (2) in a common enterprise, (3) with an expectation of profits, (4) derived from the efforts of others. The court found that retail XRP buyers on exchanges did not meet all four prongs." },
  { q: "Did Ripple win or lose the SEC lawsuit?", a: "It was a mixed outcome. Ripple won on the key question — retail sales of XRP are not securities transactions. The case settled in 2025 with Ripple paying approximately $50 million, far less than the SEC's original demand." },
  { q: "Can the SEC still classify XRP as a security?", a: "The court ruling established that XRP itself is not a security — it's a digital token. However, the manner in which it's sold can constitute a securities transaction. Under the current pro-crypto regulatory environment, further action against XRP is unlikely." },
  { q: "How does XRP's legal status compare to Bitcoin and Ethereum?", a: "Bitcoin and Ethereum have been declared non-securities by the SEC. XRP now has judicial precedent that retail exchange sales are not securities transactions. All three are considered commodities or digital assets rather than securities on secondary markets." },
  { q: "What does this mean for XRP holders?", a: "The ruling is overwhelmingly positive for XRP holders. It means holding and trading XRP on exchanges is not a securities transaction. This paved the way for XRP ETF applications, exchange re-listings, and broader institutional adoption." },
];

export default function IsXRPASecurityPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Is XRP a Security?"
          titleAccent="The SEC Ruling Explained"
          subtitle="The question of whether XRP is a security dominated crypto regulation for years. In 2023, a federal judge delivered a landmark ruling that changed everything. Here's what the court decided and why it matters for XRP's future."
          breadcrumbLabel="Is XRP a Security?"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP is not a security</strong> when sold on public exchanges to retail buyers — that was the landmark ruling from Judge Analisa Torres in July 2023. The court applied the <strong className="text-text-primary">Howey Test</strong> and found that buying XRP on an exchange doesn&apos;t constitute an investment contract. However, Ripple&apos;s direct sales to institutional investors <em>were</em> found to be unregistered securities offerings. The <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC vs Ripple case</Link> settled in 2025, clearing the path for <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">XRP ETF approval</Link> and broader institutional adoption.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Court Ruling Date", value: "July 13, 2023" },
          { label: "Judge", value: "Analisa Torres (SDNY)" },
          { label: "Key Finding", value: "Retail XRP sales ≠ securities" },
          { label: "Institutional Sales", value: "Found to be unregistered offerings" },
          { label: "Settlement Amount", value: "~$50 million (reduced)" },
          { label: "SEC Original Demand", value: "$2 billion+" },
          { label: "Case Duration", value: "Dec 2020 – 2025" },
          { label: "Impact", value: "ETF applications, re-listings" },
        ]} />

        <SectionNav items={[
          { id: "howey-test", label: "The Howey Test" },
          { id: "court-ruling", label: "Court Ruling" },
          { id: "institutional-vs-retail", label: "Institutional vs Retail" },
          { id: "implications", label: "Implications" },
          { id: "comparison", label: "vs Other Cryptos" },
          { id: "future", label: "Future Regulation" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Case Length" value="4+ years" delay={0} />
          <StatPill label="Settlement" value="~$50M" delay={0.06} />
          <StatPill label="SEC Demand" value="$2B+" delay={0.12} />
          <StatPill label="Reduction" value="~97%" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="howey-test">
            <h2 className="text-2xl font-bold text-text-primary">What Is the Howey Test?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The Howey Test is the legal framework the SEC uses to determine whether something is a &quot;security&quot; — specifically an &quot;investment contract.&quot; It comes from the 1946 Supreme Court case <em>SEC v. W.J. Howey Co.</em>, and it has four prongs. All four must be met for something to qualify as a security:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "1. Investment of Money", desc: "The buyer must invest money or something of value. Buying XRP on an exchange clearly meets this prong." },
                { title: "2. Common Enterprise", desc: "The investment must be in a common enterprise where investors' fortunes are tied together. The court found this was met for XRP." },
                { title: "3. Expectation of Profits", desc: "Buyers must expect to profit from the investment. Many XRP buyers clearly purchase with profit expectations." },
                { title: "4. Efforts of Others", desc: "Profits must come from the efforts of a third party (like Ripple). This is where the retail vs institutional distinction became critical." },
              ]} />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              The crucial insight from the XRP case is that the <strong className="text-text-primary">same asset</strong> can be a security in one context and not in another. It&apos;s not about what XRP <em>is</em> — it&apos;s about <em>how it&apos;s sold</em>. When Ripple sold XRP directly to institutions with contracts and promises about future development, that looked like an investment contract. When someone buys XRP on Coinbase, there&apos;s no contract with Ripple and no promise of efforts.
            </p>
          </RevealSection>

          <RevealSection id="court-ruling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Landmark Court Ruling</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              On July 13, 2023, Judge Analisa Torres of the Southern District of New York issued a ruling that sent shockwaves through the crypto industry. The decision in <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC v. Ripple Labs</Link> was nuanced — neither a complete win nor loss for either side.
            </p>

            <div className="mt-6">
              <HighlightBox title="The Key Distinction" variant="accent">
                <p>Judge Torres drew a clear line between <strong className="text-text-primary">programmatic sales</strong> (retail exchanges) and <strong className="text-text-primary">institutional sales</strong> (direct contracts). Retail buyers on exchanges don&apos;t know if they&apos;re buying from Ripple, a market maker, or another trader — and they have no contract promising Ripple will use the proceeds to build the ecosystem. Without that connection to Ripple&apos;s efforts, the fourth prong of Howey fails.</p>
              </HighlightBox>
            </div>

            <div className="mt-6">
              <DataTable
                headers={["Aspect", "Ruling"]}
                rows={[
                  ["Retail exchange sales", "NOT securities transactions"],
                  ["Institutional direct sales", "Unregistered securities offerings"],
                  ["XRP token itself", "NOT inherently a security"],
                  ["Ripple executives (Garlinghouse, Larsen)", "Aiding & abetting charges dismissed"],
                  ["Penalty", "~$50M (settled), down from $2B+ demanded"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              The ruling was historic because it was the first time a federal court clearly stated that a <strong className="text-text-primary">digital token traded on secondary markets is not inherently a security</strong>. This created precedent that the crypto industry had been seeking for years. XRP&apos;s price surged over 70% in the days following the ruling.
            </p>
          </RevealSection>

          <RevealSection id="institutional-vs-retail" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Institutional Sales vs Retail Sales: Why It Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The distinction the court drew between institutional and retail sales is the most important legal concept to come out of the case. Understanding this distinction is essential for anyone interested in crypto regulation.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Factor", "Institutional Sales", "Retail (Exchange) Sales"]}
                rows={[
                  ["Contract with Ripple?", "Yes — direct agreements", "No — anonymous exchange trades"],
                  ["Buyer knows seller?", "Yes — negotiated with Ripple", "No — could be anyone"],
                  ["Lockup periods?", "Often included", "None — instant liquidity"],
                  ["Ripple promises?", "Marketing materials, roadmaps", "No direct communication"],
                  ["Howey Test result", "All 4 prongs met = SECURITY", "4th prong fails = NOT security"],
                ]}
                highlightCol={0}
              />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              This framework has massive implications beyond XRP. It suggests that <strong className="text-text-primary">most crypto tokens traded on public exchanges</strong> may not be securities — even if the initial coin offering (ICO) was. The token can &quot;transform&quot; from a security to a non-security as it moves to decentralized secondary markets.
            </p>

            <div className="mt-6">
              <HighlightBox title="Why This Matters for You" variant="info">
                <p>If you buy XRP on an exchange like Coinbase, Binance, or Kraken, you are <strong className="text-text-primary">not buying a security</strong>. You don&apos;t need to worry about securities regulations as a retail holder. This also means exchanges can freely list XRP without registering as securities exchanges — which is why multiple exchanges <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">re-listed XRP</Link> after the ruling.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="implications" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What the Ruling Means for XRP&apos;s Future</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The legal clarity from the SEC vs Ripple case has had cascading effects across the XRP ecosystem and the broader crypto industry:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "XRP ETF Applications", desc: "Multiple firms have filed for XRP ETFs with the SEC. Legal clarity that XRP isn't a security was the prerequisite for ETF approval. Learn more about the XRP ETF timeline." },
                { title: "Exchange Re-Listings", desc: "Coinbase, Kraken, Gemini, and other major exchanges re-listed XRP after the ruling, restoring liquidity and access for US traders." },
                { title: "Institutional Adoption Accelerated", desc: "Banks and financial institutions that were hesitant due to legal uncertainty began engaging with Ripple and XRP more openly." },
                { title: "Regulatory Precedent", desc: "The ruling is being cited in other SEC crypto cases. It challenges the SEC's approach of regulation by enforcement." },
                { title: "Price Impact", desc: "XRP surged from ~$0.47 to over $0.80 immediately after the ruling, and the legal clarity contributed to XRP reaching $3.65 in early 2025." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP vs Bitcoin vs Ethereum: Legal Status Comparison</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              How does XRP&apos;s legal status compare to other major cryptocurrencies? Here&apos;s where the three largest non-stablecoin cryptos stand:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Factor", "Bitcoin", "Ethereum", "XRP"]}
                rows={[
                  ["SEC Classification", "Commodity", "Commodity", "Not a security (retail)"],
                  ["Legal Basis", "SEC statement (2018)", "SEC statement / ETF approval", "Court ruling (2023)"],
                  ["ETF Status", "Approved (Jan 2024)", "Approved (May 2024)", "Applications filed"],
                  ["Pre-mine/ICO?", "No — mined from genesis", "ICO in 2014", "Pre-minted 100B tokens"],
                  ["Regulatory Risk", "Very low", "Low", "Low (post-settlement)"],
                  ["CFTC Oversight", "Yes — commodity", "Yes — commodity", "Likely commodity"],
                ]}
                highlightCol={3}
              />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              The key takeaway is that all three major cryptocurrencies now have strong legal standing in the United States. <Link href="/learn/xrp-vs-bitcoin" className="text-xrp-accent underline decoration-xrp-accent/30">Bitcoin</Link> and <Link href="/learn/xrp-vs-ethereum" className="text-xrp-accent underline decoration-xrp-accent/30">Ethereum</Link> were cleared through SEC statements and ETF approvals, while XRP was cleared through judicial precedent — arguably an even stronger form of legal clarity.
            </p>
          </RevealSection>

          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future of XRP Regulation</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              With the SEC case settled and a pro-crypto administration in Washington, XRP&apos;s regulatory outlook is the clearest it&apos;s ever been. Here&apos;s what to watch:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Comprehensive Crypto Legislation", desc: "Congress is working on bills like FIT21 that would create clear frameworks for digital assets, potentially classifying most tokens as commodities rather than securities." },
                { title: "XRP ETF Approval", desc: "With legal clarity established, multiple XRP ETF applications are under SEC review. Approval would bring massive institutional capital." },
                { title: "CFTC vs SEC Jurisdiction", desc: "The trend is toward CFTC oversight for spot crypto markets, which would further distance XRP from securities regulation." },
                { title: "Global Regulatory Alignment", desc: "The EU's MiCA framework, Japan's PSA classification, and other global regulations increasingly treat XRP as a payment token, not a security." },
                { title: "Ripple's Compliance Infrastructure", desc: "Ripple has built robust compliance tools including RLUSD and institutional custody, positioning XRP within regulated financial rails." },
              ]} variant="check" />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Bottom Line" variant="success">
                <p>XRP&apos;s legal status is effectively settled. The combination of judicial precedent (Torres ruling), SEC case settlement, pro-crypto regulatory leadership, and pending legislation means <strong className="text-text-primary">the &quot;is XRP a security?&quot; question has been answered: No, not when traded on public exchanges</strong>. The remaining regulatory developments are about formalizing this clarity into law.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/sec-vs-ripple-explained", label: "SEC vs Ripple Explained", desc: "Full case timeline and analysis" },
              { href: "/learn/xrp-etf", label: "XRP ETF", desc: "What ETF approval means for XRP" },
              { href: "/learn/what-is-xrp", label: "What Is XRP?", desc: "Complete XRP overview" },
              { href: "/learn/xrp-myths", label: "XRP Myths Debunked", desc: "Common misconceptions addressed" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply, distribution, and economics" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step purchase guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand XRP's Legal Standing"
          description="Now you know XRP isn't a security. Explore the full SEC vs Ripple case timeline or learn about the upcoming XRP ETF."
          primaryHref="/learn/sec-vs-ripple-explained"
          primaryLabel="SEC vs Ripple Deep Dive →"
          secondaryHref="/learn/xrp-etf"
          secondaryLabel="XRP ETF Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: SEC.gov, Court filings (SDNY), Ripple.com, CFTC.gov.</em>
        </p>
      </div>
    </>
  );
}

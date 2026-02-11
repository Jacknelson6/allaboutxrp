import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, TLDRBox, KeyFactsTable, LastUpdated, RevealSection, SectionNav, DataTable,
  FAQAccordion, HighlightBox, LearnCTA, LearnLinkGrid, GlowCard,
} from "@/components/learn/LearnPageShell";

export const metadata: Metadata = {
  title: "XRP Price History — A Complete Timeline (2012-2026)",
  description:
    "Complete XRP price history from 2012 to 2026. Year-by-year timeline covering every major event, price milestone, and the factors that shaped XRP's value.",
  openGraph: {
    title: "XRP Price History: Complete Timeline | AllAboutXRP",
    description: "The full story of XRP's price — from fractions of a cent in 2012 to today. Every major milestone, crash, and rally explained.",
    url: "https://allaboutxrp.com/learn/xrp-price-history",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Price History (2012-2026) | AllAboutXRP",
    description: "Complete timeline of XRP's price from creation to today — every milestone explained.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-price-history" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Price History: A Complete Timeline (2012-2026)",
    description: "A comprehensive year-by-year history of XRP's price from its creation in 2012 through 2026, covering every major event and price milestone.",
    url: "https://allaboutxrp.com/learn/xrp-price-history",
    datePublished: "2026-02-11",
    dateModified: "2026-02-11",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Price History" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-price-history" }),
  buildFAQSchema([
    { question: "What was XRP's all-time high?", answer: "XRP reached its all-time high of $3.84 on January 4, 2018, during the broader crypto bull run. At that price, XRP briefly surpassed Ethereum as the second-largest cryptocurrency by market cap." },
    { question: "What was XRP's all-time low?", answer: "XRP's all-time low was approximately $0.002802 in July 2014. Early trading volume was extremely low, and the broader crypto market was still in its infancy." },
    { question: "How much has XRP grown since launch?", answer: "From its earliest recorded price of ~$0.003 in 2013 to approximately $2.00 in February 2026, XRP has gained roughly 66,000%. However, from its 2018 all-time high of $3.84, XRP is still down approximately 48%." },
    { question: "Why did XRP crash in 2020?", answer: "XRP crashed in December 2020 after the SEC filed a lawsuit against Ripple Labs, alleging XRP was an unregistered security. The price dropped from ~$0.60 to ~$0.17, and several exchanges delisted XRP. The lawsuit was largely resolved in 2023-2025 in Ripple's favor." },
    { question: "Why did XRP surge in late 2024?", answer: "XRP surged approximately 580% from November 2024 to January 2025, driven by the SEC lawsuit resolution, growing institutional adoption, potential XRP ETF filings, and the broader crypto bull market. XRP reached ~$3.40 in January 2025." },
    { question: "Is XRP a good long-term investment based on its history?", answer: "XRP's price history shows extreme volatility — massive rallies followed by deep corrections. Long-term holders from 2013 have seen enormous gains, while those who bought the 2018 peak waited years to approach break-even. Past performance doesn't guarantee future results." },
  ]),
];

const faqItems = [
  { q: "What was XRP's all-time high?", a: "XRP reached $3.84 on January 4, 2018, during the crypto bull run. It briefly surpassed Ethereum as the second-largest cryptocurrency. In the 2024-2025 rally, XRP reached ~$3.40 — approaching but not quite surpassing the 2018 record." },
  { q: "What was XRP's all-time low?", a: "XRP's all-time low was approximately $0.002802 in July 2014. Early trading volume was extremely low and the crypto market was still nascent." },
  { q: "How much has XRP grown since launch?", a: "From ~$0.003 in 2013 to ~$2.00 in February 2026, XRP gained roughly 66,000%. However, from its 2018 ATH of $3.84, it's still down ~48%. Timing matters enormously in crypto." },
  { q: "Why did XRP crash in 2020?", a: "The SEC filed a lawsuit against Ripple Labs in December 2020, alleging XRP was an unregistered security. Price dropped from ~$0.60 to ~$0.17. Multiple exchanges delisted XRP. The case was largely resolved in Ripple's favor by 2023-2025." },
  { q: "Why did XRP surge in late 2024?", a: "XRP surged ~580% from Nov 2024 to Jan 2025, driven by SEC lawsuit resolution, institutional adoption growth, XRP ETF filings, and the broader crypto bull market. XRP reached ~$3.40 in January 2025." },
  { q: "Is XRP a good long-term investment based on its history?", a: "XRP's history shows extreme volatility — massive rallies followed by deep corrections. Long-term holders from 2013 saw enormous gains. Those who bought the 2018 peak waited 7+ years to approach break-even. Past performance doesn't guarantee future results." },
];

const yearlyData = [
  { year: "2012", range: "N/A (pre-trading)", event: "XRP Ledger created by David Schwartz, Jed McCaleb, and Arthur Britto. 100 billion XRP minted at genesis. Ripple Labs (originally OpenCoin) founded." },
  { year: "2013", range: "$0.003 - $0.06", event: "XRP began trading on exchanges. First wave of interest as Ripple attracted early VC funding. Price remained under $0.10 throughout the year." },
  { year: "2014", range: "$0.003 - $0.07", event: "XRP hit its all-time low of ~$0.0028 in July. Jed McCaleb departed Ripple (later founded Stellar). Market was in a bear phase following the Mt. Gox collapse." },
  { year: "2015", range: "$0.004 - $0.02", event: "Quiet year for XRP. Ripple focused on building bank partnerships. Fincen fined Ripple $700,000 for BSA violations — the company settled and implemented compliance measures." },
  { year: "2016", range: "$0.005 - $0.009", event: "XRP traded in a tight range near half a cent. Ripple launched its Interledger Protocol (ILP) and continued signing bank partnerships behind the scenes." },
  { year: "2017", range: "$0.006 - $3.65", event: "The year XRP exploded. Starting at less than $0.01, XRP surged to $3.65 by year-end — a 50,000%+ gain. Crypto mania, Ripple partnership announcements, and the 'bank coin' narrative drove unprecedented demand." },
  { year: "2018", range: "$0.25 - $3.84", event: "XRP hit its all-time high of $3.84 on January 4, briefly becoming the #2 crypto by market cap. The broader crypto crash then took hold — XRP fell 93% to ~$0.25 by year-end. The speculative bubble had burst." },
  { year: "2019", range: "$0.18 - $0.47", event: "Bear market continued. Ripple launched On-Demand Liquidity (ODL), giving XRP its first major commercial use case. Price stabilized in the $0.20-$0.40 range." },
  { year: "2020", range: "$0.11 - $0.76", event: "XRP rallied to $0.76 in November on the broader crypto recovery. Then disaster: the SEC filed suit against Ripple on December 22, alleging XRP was an unregistered security. Price crashed to ~$0.17. Multiple exchanges delisted XRP." },
  { year: "2021", range: "$0.17 - $1.96", event: "Despite the SEC lawsuit, XRP recovered to $1.96 in April amid the broader bull market. Ripple scored early legal victories. The case dragged on, keeping XRP volatile and below its 2018 highs." },
  { year: "2022", range: "$0.30 - $0.91", event: "Crypto winter hit hard. Bitcoin fell from $48K to $16K; XRP dropped to ~$0.30. But Ripple gained momentum in the SEC case. The Terra/Luna collapse and FTX bankruptcy shook the entire industry." },
  { year: "2023", range: "$0.30 - $0.93", event: "LANDMARK: Judge Torres ruled in July that XRP is NOT a security when sold on secondary markets. XRP spiked 75% in hours to $0.93. This ruling gave XRP regulatory clarity that no other altcoin had. Ripple settled parts of the SEC case." },
  { year: "2024", range: "$0.40 - $2.90", event: "XRP started the year around $0.60. The broader crypto bull market, driven by Bitcoin ETF approval, lifted all boats. XRP's breakout came in November-December: the SEC case neared final resolution, XRP ETF filings emerged, and price surged from ~$0.50 to $2.90. Ripple launched RLUSD." },
  { year: "2025", range: "$1.60 - $3.40", event: "XRP reached ~$3.40 in January — approaching its 2018 ATH. The 580% surge from Nov 2024 made XRP one of the best-performing major cryptos. Ripple expanded ODL to 55+ countries. RLUSD gained traction. XRP ETF filings progressed. Price consolidated in the $2-$3 range." },
  { year: "2026 (YTD)", range: "$1.80 - $2.50", event: "XRP entered 2026 around $2.00 after a correction from the January 2025 highs. 21Shares published a base case of $2.45 (50% probability). Key catalysts ahead: ETF decisions, RLUSD growth, and continued ODL expansion." },
];

export default function XRPPriceHistoryPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Price History:"
          titleAccent="A Complete Timeline"
          subtitle="From fractions of a cent to a top-5 cryptocurrency — the complete story of XRP's price journey from 2012 to 2026. Every rally, crash, milestone, and turning point explained."
          breadcrumbLabel="XRP Price History"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" />
            <LastUpdated date="February 11, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP</strong> was created in 2012 and first traded around $0.003 in 2013. It surged to an all-time high of <strong className="text-text-primary">$3.84 in January 2018</strong>, crashed 93%, survived the <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">SEC lawsuit</Link> (2020-2023), and rallied 580% in late 2024 to reach ~$3.40. As of February 2026, XRP trades around <strong className="text-text-primary">$2.00</strong> with analyst targets of <Link href="/answers/xrp-price-prediction-2026" className="text-xrp-accent underline decoration-xrp-accent/30">$2.45 (base case)</Link> for the year.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "All-Time High", value: "$3.84 (January 4, 2018)" },
          { label: "All-Time Low", value: "~$0.0028 (July 2014)" },
          { label: "Current Price", value: "~$2.00 (Feb 2026)" },
          { label: "2025 High", value: "~$3.40 (January 2025)" },
          { label: "Gain Since 2013", value: "~66,000%" },
          { label: "Largest Rally", value: "50,000%+ (2017)" },
          { label: "Largest Crash", value: "-93% (2018)" },
          { label: "SEC Lawsuit Impact", value: "-72% in weeks (Dec 2020)" },
        ]} />

        {/* At-a-Glance Milestones */}
        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          <GlowCard title="2013" value="$0.003" subtitle="First traded price" />
          <GlowCard title="2018" value="$3.84" subtitle="All-time high" />
          <GlowCard title="2020" value="SEC Suit" subtitle="Price crashed 72%" />
          <GlowCard title="2025" value="$3.40" subtitle="Post-lawsuit rally" />
        </div>

        <SectionNav items={[
          { id: "timeline", label: "Year-by-Year Timeline" },
          { id: "major-events", label: "Key Events Table" },
          { id: "lessons", label: "Lessons from History" },
          { id: "outlook", label: "2026 Outlook" },
          { id: "faq", label: "FAQ" },
        ]} />

        {/* Year-by-Year Timeline */}
        <RevealSection id="timeline" className="mt-14">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Year-by-Year XRP Price Timeline</h2>

          <div className="space-y-6">
            {yearlyData.map((y) => (
              <div key={y.year} className="relative pl-8 border-l-2 border-white/[0.06]">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-xrp-accent bg-black" />
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-lg font-bold text-xrp-accent">{y.year}</h3>
                  <span className="text-sm font-mono text-text-secondary">{y.range}</span>
                </div>
                <p className="text-[14px] text-text-secondary leading-relaxed">{y.event}</p>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Key Events Table */}
        <RevealSection id="major-events" className="mt-14">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Key Events and Their Price Impact</h2>
          <DataTable
            headers={["Date", "Event", "Price Before", "Price After", "Impact"]}
            highlightCol={1}
            rows={[
              ["Jan 2018", "All-time high reached", "$2.50", "$3.84", "+54%"],
              ["Dec 2018", "Crypto winter bottom", "$0.50", "$0.25", "-50%"],
              ["Nov 2019", "ODL (xRapid) launches", "$0.25", "$0.22", "Neutral (long-term catalyst)"],
              ["Mar 2020", "COVID crash", "$0.22", "$0.11", "-50%"],
              ["Nov 2020", "Pre-SEC rally", "$0.25", "$0.76", "+204%"],
              ["Dec 2020", "SEC lawsuit filed", "$0.60", "$0.17", "-72%"],
              ["Apr 2021", "Bull market recovery", "$0.45", "$1.96", "+336%"],
              ["Jul 2023", "Torres ruling (not a security)", "$0.47", "$0.93", "+98%"],
              ["Nov 2024", "SEC case resolution + ETF filings", "$0.50", "$2.90", "+480%"],
              ["Jan 2025", "2025 peak", "$2.90", "$3.40", "+17%"],
              ["Feb 2026", "Current consolidation", "$2.50", "~$2.00", "-20%"],
            ]}
          />
        </RevealSection>

        {/* Lessons */}
        <RevealSection id="lessons" className="mt-14">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Lessons from XRP&apos;s Price History</h2>

          <div className="space-y-4">
            <HighlightBox variant="info" title="1. Patience Has Been Rewarded — Eventually">
              <p>Investors who bought XRP in 2013-2016 at under $0.01 and held through every crash have seen life-changing returns. However, anyone who bought the January 2018 peak at $3.84 waited over 7 years to approach break-even. <strong className="text-text-primary">When you buy matters as much as what you buy.</strong></p>
            </HighlightBox>

            <HighlightBox variant="info" title="2. XRP Moves in Explosive Bursts">
              <p>XRP&apos;s price history shows a pattern of long periods of quiet followed by explosive moves. The 50,000%+ rally of 2017 and the 580% surge in late 2024 both happened within months. Most of XRP&apos;s returns have come from a few key periods — missing those windows dramatically changes outcomes.</p>
            </HighlightBox>

            <HighlightBox variant="info" title="3. Regulatory Events Drive Massive Volatility">
              <p>The SEC lawsuit (Dec 2020, -72%) and the Torres ruling (Jul 2023, +98%) show how powerfully regulatory events impact XRP. Unlike Bitcoin, which is largely immune to regulatory classification debates, XRP&apos;s price is tightly linked to its legal status. The current regulatory clarity is a significant positive change.</p>
            </HighlightBox>

            <HighlightBox variant="info" title="4. XRP Has Never Stayed Down Permanently">
              <p>Through the 2018 crash (-93%), the SEC lawsuit (-72%), the crypto winter (-50%), and COVID (-50%), XRP has always eventually recovered and reached new highs. This resilience reflects genuine utility and a dedicated holder base. However, <strong className="text-text-primary">past recovery does not guarantee future recovery</strong>.</p>
            </HighlightBox>

            <HighlightBox variant="warning" title="5. Extreme Caution Required">
              <p>XRP&apos;s history also shows the dangers of crypto investing: a 93% drawdown from ATH, years of stagnation, and sudden crashes on regulatory news. <strong className="text-text-primary">Never invest more than you can afford to lose.</strong> Past performance is not indicative of future results.</p>
            </HighlightBox>
          </div>
        </RevealSection>

        {/* 2026 Outlook */}
        <RevealSection id="outlook" className="mt-14">
          <h2 className="text-2xl font-bold text-text-primary mb-4">2026 Price Outlook</h2>
          <p className="text-[14px] text-text-secondary mb-4">
            After the explosive 2024-2025 rally, XRP has consolidated around $2.00 in early 2026. The question is whether XRP will push toward new all-time highs or continue correcting. Here&apos;s what analysts project:
          </p>

          <DataTable
            headers={["Source", "Bear Case", "Base Case", "Bull Case"]}
            highlightCol={0}
            rows={[
              ["21Shares", "$1.60", "$2.45", "$2.69"],
              ["Google Gemini", "—", "—", "$3-$4 (ceiling)"],
              ["Kraken", "—", "$2.26", "—"],
              ["Changelly", "$3.18", "$3.26", "$3.49"],
            ]}
          />

          <p className="text-[14px] text-text-secondary mt-4">
            For our complete analysis of 2026 predictions from these and other sources, see our dedicated <Link href="/answers/xrp-price-prediction-2026" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Price Prediction 2026</Link> page. To understand the <Link href="/learn/xrp-use-cases" className="text-xrp-accent underline decoration-xrp-accent/30">real-world use cases</Link> driving XRP&apos;s value, see our use cases guide.
          </p>
        </RevealSection>

        {/* Related */}
        <RevealSection className="mt-10">
          <h3 className="text-lg font-bold text-text-primary mb-3">Continue Learning</h3>
          <LearnLinkGrid links={[
            { href: "/answers/xrp-price-prediction-2026", label: "XRP Price Prediction 2026", desc: "What analysts forecast for this year." },
            { href: "/learn/what-is-xrp", label: "What Is XRP?", desc: "Complete guide to XRP cryptocurrency." },
            { href: "/learn/xrp-use-cases", label: "XRP Use Cases", desc: "How XRP is used in the real world." },
            { href: "/learn/history", label: "Ripple History", desc: "The full story of Ripple Labs." },
            { href: "/answers/will-xrp-reach-10-dollars", label: "Will XRP Reach $10?", desc: "Price potential breakdown." },
            { href: "/answers/is-xrp-a-good-investment", label: "Is XRP a Good Investment?", desc: "Analysis and considerations." },
            { href: "/tools/xrp-profit-calculator", label: "Profit Calculator", desc: "Calculate potential XRP gains." },
          ]} />
        </RevealSection>

        {/* FAQ */}
        <RevealSection id="faq" className="mt-14">
          <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </RevealSection>

        <LearnCTA
          title="Learn What Drives XRP's Value"
          description="Now that you understand XRP's price history, learn about the real-world use cases that drive its value."
          primaryHref="/learn/xrp-use-cases"
          primaryLabel="XRP Use Cases"
          secondaryHref="/learn/get-started"
          secondaryLabel="How to Buy XRP"
        />

        <p className="text-xs text-gray-600 text-center mt-12">
          Last Updated: February 11, 2026 · Historical prices are approximate and sourced from CoinGecko and CoinMarketCap.
        </p>
      </div>
    </>
  );
}

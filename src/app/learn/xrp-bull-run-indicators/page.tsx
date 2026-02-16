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
  title: "XRP Bull Run Indicators: How to Spot the Next Rally | AllAboutXRP",
  description: "Learn the key XRP bull run indicators — on-chain metrics, technical signals, and market sentiment markers that precede major XRP price rallies.",
  keywords: ["XRP bull run indicators","XRP rally signals","XRP bull market signs","when will XRP pump"],
  openGraph: {
    title: "XRP Bull Run Indicators: How to Spot the Next Rally",
    description: "Key XRP bull run indicators — on-chain metrics, technical signals, and sentiment markers that precede major rallies.",
    url: "https://allaboutxrp.com/learn/xrp-bull-run-indicators",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Bull Run Indicators: How to Spot the Next Rally", description: "Key XRP bull run indicators — on-chain metrics, technical signals, and sentiment markers." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-bull-run-indicators" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Bull Run Indicators: How to Spot the Next Rally", description: "Key XRP bull run indicators — on-chain metrics, technical signals, and sentiment markers that precede major rallies.", url: "https://allaboutxrp.com/learn/xrp-bull-run-indicators", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Bull Run Indicators" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-bull-run-indicators" }),
  buildFAQSchema([
    { question: "What signals indicate an XRP bull run is starting?", answer: "Key signals include rising whale accumulation, increasing active addresses, breaking key resistance levels, and growing social media volume." },
    { question: "How reliable are on-chain indicators for XRP?", answer: "On-chain metrics like active addresses and whale movements are among the most reliable leading indicators, though no single metric is perfect." },
    { question: "Does Bitcoin need to rally first for XRP to pump?", answer: "Historically yes. XRP typically lags Bitcoin by weeks to months. BTC breaks highs first, then capital rotates into altcoins." },
    { question: "What role does trading volume play?", answer: "Volume confirms price moves. A breakout on low volume often fails. Sustained high volume above resistance signals genuine momentum." },
    { question: "Can social media sentiment predict XRP rallies?", answer: "Extreme sentiment is a contrarian indicator. Peak euphoria = near top. Peak fear = near bottom. Moderate rising sentiment = healthy." },
  ]),
];

const faqItems = [
  { q: "What signals indicate an XRP bull run is starting?", a: "Key signals include rising whale accumulation, increasing active addresses, breaking key resistance levels, and growing social media volume." },
  { q: "How reliable are on-chain indicators for XRP?", a: "On-chain metrics like active addresses and whale movements are among the most reliable leading indicators, though no single metric is perfect." },
  { q: "Does Bitcoin need to rally first for XRP to pump?", a: "Historically yes. XRP typically lags Bitcoin by weeks to months. BTC breaks highs first, then capital rotates into altcoins." },
  { q: "What role does trading volume play?", a: "Volume confirms price moves. A breakout on low volume often fails. Sustained high volume above resistance signals genuine momentum." },
  { q: "Can social media sentiment predict XRP rallies?", a: "Extreme sentiment is a contrarian indicator. Peak euphoria = near top. Peak fear = near bottom. Moderate rising sentiment = healthy." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Bull Run Indicators" titleAccent="How to Spot the Next Rally" subtitle="On-chain metrics, technical signals, and sentiment markers that historically precede major XRP price moves." breadcrumbLabel="Bull Run Indicators">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Bull runs don't happen overnight — they give <strong className="text-text-primary">warning signs weeks in advance</strong>. Watch for <Link href="/learn/xrp-whale-tracking" className="text-xrp-accent underline decoration-xrp-accent/30">whale accumulation</Link>, rising active addresses, BTC dominance declining, and <Link href="/learn/xrp-technical-analysis-guide" className="text-xrp-accent underline decoration-xrp-accent/30">key technical breakouts</Link>. No single indicator is perfect — use a <strong className="text-text-primary">confluence of signals</strong>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Best On-Chain", value: "Active addresses + whale flows" },
          { label: "Best Technical", value: "Volume-confirmed breakout" },
          { label: "Best Sentiment", value: "Fear & Greed Index" },
          { label: "Leading Indicator", value: "BTC dominance declining" },
          { label: "Confirmation", value: "Multiple signals aligning" },
          { label: "Timeframe", value: "Weeks before major moves" },
        ]} />

        <SectionNav items={[
          { id: "onchain", label: "On-Chain" },
          { id: "technical", label: "Technical" },
          { id: "sentiment", label: "Sentiment" },
          { id: "macro", label: "Macro" },
          { id: "checklist", label: "Checklist" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Signal Type" value="On-Chain" delay={0.00} />
          <StatPill label="Signal Type" value="Technical" delay={0.06} />
          <StatPill label="Signal Type" value="Sentiment" delay={0.12} />
          <StatPill label="Signal Type" value="Macro" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="onchain">
            <h2 className="text-2xl font-bold text-text-primary">On-Chain Indicators</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> is transparent. On-chain data reveals what smart money is doing before price reacts.</p>
            <div className="mt-6"><DataTable headers={["Indicator","Bullish Signal","Where to Track"]} rows={[
              ["Active Addresses","Rising steadily for 2+ weeks","XRPL explorer / Santiment"],
              ["Whale Accumulation","Large wallets adding positions","Whale Alert / Bithomp"],
              ["Exchange Outflows","XRP leaving exchanges (holding)","CryptoQuant"],
              ["Escrow Activity","Ripple returning more to escrow","XRPL monitor"],
              ["New Wallets","Surge in new wallet creation","On-chain analytics"],
            ]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="technical" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Technical Indicators</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Chart patterns and <Link href="/learn/how-to-read-xrp-charts" className="text-xrp-accent underline decoration-xrp-accent/30">technical analysis</Link> provide entry timing once fundamentals align.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              { title: "Volume Breakout", desc: "Price breaks resistance on 3x+ average volume. The most reliable technical signal." },
              { title: "Golden Cross", desc: "50-day MA crosses above 200-day MA. Signals long-term trend reversal." },
              { title: "RSI Divergence", desc: "Price makes lower low but RSI makes higher low. Bullish momentum building." },
              { title: "Higher Lows", desc: "Consistent pattern of higher lows shows buyers stepping in at rising levels." },
            ]} /></div>
          </RevealSection>

          <RevealSection id="sentiment" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sentiment Indicators</h2>
            <div className="mt-6"><IconList items={[
              { title: "Fear & Greed Index", desc: "Extreme fear = buying opportunity. Extreme greed = caution. Best contrarian tool." },
              { title: "Social Volume", desc: "Rising but not euphoric social mentions suggest early accumulation phase." },
              { title: "Funding Rates", desc: "Negative funding = shorts paying longs. Potential short squeeze setup." },
              { title: "Google Trends", desc: "Rising search interest for 'XRP' and 'buy XRP' precedes retail FOMO waves." },
              { title: "YouTube/TikTok", desc: "When mainstream content creators cover XRP, retail wave is starting (or peaking)." },
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="macro" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Macro Indicators</h2>
            <div className="mt-6"><HighlightBox title="BTC Dominance is Key" variant="info"><p>When Bitcoin dominance peaks and starts declining, capital rotates into altcoins. This is the single most important macro signal for an XRP rally. Watch the <Link href="/learn/xrp-altseason-guide" className="text-xrp-accent underline decoration-xrp-accent/30">altseason</Link> trigger closely.</p></HighlightBox></div>
            <div className="mt-6"><DataTable headers={["Macro Factor","Bullish For XRP","Bearish For XRP"]} rows={[
              ["BTC Dominance","Declining from peak","Rising / above 60%"],
              ["Fed Policy","Rate cuts / dovish","Rate hikes / hawkish"],
              ["DXY (Dollar)","Weakening dollar","Strengthening dollar"],
              ["Stock Market","Risk-on / S&P rising","Risk-off / recession fears"],
            ]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="checklist" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Bull Run Checklist</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The more boxes checked, the higher conviction. 6+ out of 8 = strong bull signal.</p>
            <div className="mt-6"><IconList items={[
              { title: "BTC dominance declining", desc: "Capital rotating from Bitcoin into altcoins." },
              { title: "Active addresses rising", desc: "Growing network usage signals real demand." },
              { title: "Whales accumulating", desc: "Smart money positioning ahead of retail." },
              { title: "Exchange outflows rising", desc: "Investors moving XRP to self-custody (holding)." },
              { title: "Volume breakout", desc: "Price breaking resistance on heavy volume." },
              { title: "Funding rates negative", desc: "Short squeeze potential building." },
              { title: "Catalyst imminent", desc: "ETF decision, partnership announcement, or regulatory milestone." },
              { title: "Fear & Greed below 40", desc: "Market still fearful = room to run." },
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-price-history", label: "XRP Price History", desc: "Complete price timeline" },
              { href: "/learn/xrp-price-prediction", label: "XRP Price Prediction", desc: "Analyst forecasts" },
              { href: "/learn/xrp-price-potential", label: "XRP Price Potential", desc: "Realistic price analysis" },
              { href: "/learn/can-xrp-reach-100", label: "Can XRP Reach $100?", desc: "Math behind $100 XRP" },
              { href: "/learn/why-is-xrp-so-cheap", label: "Why Is XRP So Cheap?", desc: "Price vs value" },
              { href: "/learn/best-xrp-trading-pairs", label: "Best Trading Pairs", desc: "Optimize your trades" },
              { href: "/learn/how-to-read-xrp-charts", label: "How to Read XRP Charts", desc: "Chart reading basics" },
              { href: "/learn/xrp-swing-trading-guide", label: "Swing Trading Guide", desc: "Medium-term strategy" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Spot the Signals" description="Track these indicators to position ahead of the next rally." primaryHref="/learn/xrp-whale-tracking" primaryLabel="Whale Tracking →" secondaryHref="/learn/xrp-technical-analysis-guide" secondaryLabel="Technical Analysis" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

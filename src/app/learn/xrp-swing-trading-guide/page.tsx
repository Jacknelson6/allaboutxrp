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
  title: "XRP Swing Trading Guide: Medium-Term Strategy | AllAboutXRP",
  description: "Complete XRP swing trading guide. Entry/exit strategies, technical indicators, risk management, and XRP patterns.",
  keywords: ["XRP swing trading","swing trade XRP","XRP trading strategy","XRP trading guide"],
  openGraph: {
    title: "XRP Swing Trading Guide: Medium-Term Strategy",
    description: "Complete XRP swing trading guide. Entry/exit strategies, technical indicators, risk management, and XRP patterns.",
    url: "https://allaboutxrp.com/learn/xrp-swing-trading-guide",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Swing Trading Guide: Medium-Term Strategy", description: "Complete XRP swing trading guide. Entry/exit strategies, technical indicators, risk management, and XRP patterns." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-swing-trading-guide" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Swing Trading Guide: Medium-Term Strategy", description: "Complete XRP swing trading guide. Entry/exit strategies, technical indicators, risk management, and XRP patterns.", url: "https://allaboutxrp.com/learn/xrp-swing-trading-guide", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Swing Trading Guide" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-swing-trading-guide" }),
  buildFAQSchema([
    { question: "Is swing trading XRP profitable?", answer: "Can be with discipline and risk management. Start small and paper trade first." },
    { question: "How much money to start?", answer: "$500-1000 minimum is practical for meaningful returns with proper sizing." },
    { question: "Use leverage?", answer: "Beginners: no. Experienced: rarely exceed 2-3x. Leverage amplifies losses equally." },
    { question: "Best exchange?", answer: "Binance, Kraken, Coinbase for liquidity. XRPL DEX for token pairs." },
    { question: "Tax implications?", answer: "Each trade is taxable. Track carefully. See our tax guide." },
  ]),
];

const faqItems = [
  { q: "Is swing trading XRP profitable?", a: "Can be with discipline and risk management. Start small and paper trade first." },
  { q: "How much money to start?", a: "$500-1000 minimum is practical for meaningful returns with proper sizing." },
  { q: "Use leverage?", a: "Beginners: no. Experienced: rarely exceed 2-3x. Leverage amplifies losses equally." },
  { q: "Best exchange?", a: "Binance, Kraken, Coinbase for liquidity. XRPL DEX for token pairs." },
  { q: "Tax implications?", a: "Each trade is taxable. Track carefully. See our tax guide." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Swing Trading Guide" titleAccent="Medium-Term Strategy" subtitle="Capture XRP price swings over days to weeks. Entries, exits, risk management, and the best indicators." breadcrumbLabel="XRP Swing Trading Guide">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Swing trading captures <strong className="text-text-primary">price movements over days to weeks</strong>. No need to watch charts all day. Use <Link href="/learn/how-to-read-xrp-charts" className="text-xrp-accent underline decoration-xrp-accent/30">technical analysis</Link> for entries/exits at <strong className="text-text-primary">support and resistance</strong>. XRP&apos;s volatility makes it excellent for swing trading with proper risk management.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Timeframe", value: "Days to weeks" },
          { label: "Charts", value: "4H and Daily" },
          { label: "Indicators", value: "RSI, MACD, MAs" },
          { label: "Risk/Trade", value: "1-2% of portfolio" },
          { label: "Win Rate", value: "50-60% target" },
          { label: "Best For", value: "Part-time traders" },
        ]} />

        <SectionNav items={[
          { id: "what-is", label: "What Is It" },
          { id: "strategy", label: "Strategy" },
          { id: "indicators", label: "Indicators" },
          { id: "risk", label: "Risk Management" },
          { id: "xrp-tips", label: "XRP Tips" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Hold" value="Days-Weeks" delay={0.00} />
          <StatPill label="Chart" value="Daily" delay={0.06} />
          <StatPill label="Risk" value="1-2%" delay={0.12} />
          <StatPill label="Win" value="50-60%" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what-is">
            <h2 className="text-2xl font-bold text-text-primary">What Is Swing Trading?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Hold positions for days to weeks, capturing medium-term swings. Ideal for people with day jobs who can&apos;t watch <Link href="/learn/how-to-read-xrp-charts" className="text-xrp-accent underline decoration-xrp-accent/30">charts</Link> all day.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Time Commitment",desc:"Check charts 1-2x daily. Set alerts for key levels."},
              {title:"Profit Target",desc:"10-30% per swing. XRP can easily move this in a week."},
              {title:"Trading Pairs",desc:"XRP/USDT on CEXes or XRPL DEX for token pairs."},
              {title:"Risk/Reward",desc:"Minimum 2:1 ratio. Risk 1-2% of portfolio per trade."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="strategy" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Basic Strategy</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Identify trend",desc:"50-day and 200-day MAs on daily chart. Trade with the trend."},
              {title:"2. Find S/R levels",desc:"Mark where XRP has bounced or reversed. These are entry/exit zones."},
              {title:"3. Wait for pullback",desc:"In uptrend, buy at support. In downtrend, short at resistance."},
              {title:"4. Confirm with indicators",desc:"RSI oversold at support = buy signal. MACD crossover confirms timing."},
              {title:"5. Set stops and targets",desc:"Stop-loss below support. Take profit at next resistance."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="indicators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Indicators</h2>
            <div className="mt-6"><DataTable headers={["Indicator","Signal","XRP Use"]} rows={[
              ["RSI (14)","<30 oversold, >70 overbought","Buy RSI bounce from oversold at support"],
              ["MACD","Crossover signals","Enter on MACD cross above signal in uptrend"],
              ["50/200 MA","Trend direction","Long above 50MA, caution below 200MA"],
              ["Volume","Confirms moves","High-volume breakouts are reliable"],
              ["Fibonacci","Pullback levels","XRP often retraces to 0.618"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="risk" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risk Management</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Risk management separates profitable traders from gamblers. Even the best strategy loses 40-50% of trades. <Link href="/learn/xrp-exit-strategy" className="text-xrp-accent underline decoration-xrp-accent/30">Winners must be bigger than losers</Link>.</p>
            <div className="mt-6"><HighlightBox title="The 1% Rule" variant="warning"><p>Never risk more than 1-2% per trade. $10K portfolio = $100-200 max loss per trade. This ensures you survive losing streaks.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="xrp-tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP-Specific Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"News sensitivity",desc:"XRP reacts strongly to Ripple/SEC news. Always check before trading."},
              {title:"BTC correlation",desc:"XRP follows BTC with higher beta (bigger moves). Use BTC as macro filter."},
              {title:"Whale movements",desc:"Large holders move markets. Monitor via <Link href='/learn/xrp-whale-tracking' className='text-xrp-accent underline decoration-xrp-accent/30'>whale tracking</Link>."},
              {title:"Low-volume hours",desc:"Weekends and off-hours have lower volume and wider spreads."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/best-xrp-trading-pairs", label: "Best Trading Pairs", desc: "Optimize your trades" },
              { href: "/learn/how-to-read-xrp-charts", label: "How to Read XRP Charts", desc: "Chart reading basics" },
              { href: "/learn/xrp-technical-analysis-guide", label: "Technical Analysis", desc: "Advanced TA for XRP" },
              { href: "/learn/xrp-whale-tracking", label: "Whale Tracking", desc: "Follow the big money" },
              { href: "/learn/xrp-accumulation-zones", label: "Accumulation Zones", desc: "Strategic buy levels" },
              { href: "/learn/xrp-price-history", label: "XRP Price History", desc: "Complete price timeline" },
              { href: "/learn/xrp-price-prediction", label: "XRP Price Prediction", desc: "Analyst forecasts" },
              { href: "/learn/xrp-price-potential", label: "XRP Price Potential", desc: "Realistic price analysis" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Swing Trading" description="Learn the charts, manage risk, and capture XRP price swings." primaryHref="/learn/how-to-read-xrp-charts" primaryLabel="Chart Reading →" secondaryHref="/learn/xrp-technical-analysis-guide" secondaryLabel="TA Guide" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

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
  title: "How to Read XRP Charts: Technical Analysis Basics | AllAboutXRP",
  description: "Beginner guide to reading XRP price charts. Candlesticks, support/resistance, volume, RSI, MACD, and patterns.",
  keywords: ["read XRP charts","XRP technical analysis","XRP candlestick","XRP chart patterns"],
  openGraph: {
    title: "How to Read XRP Charts: Technical Analysis Basics",
    description: "Beginner guide to reading XRP price charts. Candlesticks, support/resistance, volume, RSI, MACD, and patterns.",
    url: "https://allaboutxrp.com/learn/how-to-read-xrp-charts",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "How to Read XRP Charts: Technical Analysis Basics", description: "Beginner guide to reading XRP price charts. Candlesticks, support/resistance, volume, RSI, MACD, and patterns." },
  alternates: { canonical: "https://allaboutxrp.com/learn/how-to-read-xrp-charts" },
};

const schemas = [
  buildArticleSchema({ headline: "How to Read XRP Charts: Technical Analysis Basics", description: "Beginner guide to reading XRP price charts. Candlesticks, support/resistance, volume, RSI, MACD, and patterns.", url: "https://allaboutxrp.com/learn/how-to-read-xrp-charts", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "How to Read XRP Charts" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-to-read-xrp-charts" }),
  buildFAQSchema([
    { question: "Best timeframe for XRP?", answer: "Daily for swing trading, 4H for short-term, weekly for long-term trends." },
    { question: "Is TA reliable for XRP?", answer: "Provides probabilities, not certainties. XRP is heavily influenced by news events." },
    { question: "Most important indicator?", answer: "Volume — confirms whether moves are genuine. RSI and MACD are most popular." },
    { question: "Free charting tools?", answer: "TradingView.com has excellent free charting. CoinGecko for basics." },
    { question: "What does overbought RSI mean?", answer: "RSI >70 = XRP rose sharply, may be due for pullback. Signal for caution, not guaranteed drop." },
  ]),
];

const faqItems = [
  { q: "Best timeframe for XRP?", a: "Daily for swing trading, 4H for short-term, weekly for long-term trends." },
  { q: "Is TA reliable for XRP?", a: "Provides probabilities, not certainties. XRP is heavily influenced by news events." },
  { q: "Most important indicator?", a: "Volume — confirms whether moves are genuine. RSI and MACD are most popular." },
  { q: "Free charting tools?", a: "TradingView.com has excellent free charting. CoinGecko for basics." },
  { q: "What does overbought RSI mean?", a: "RSI >70 = XRP rose sharply, may be due for pullback. Signal for caution, not guaranteed drop." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Read XRP Charts" titleAccent="Technical Analysis Basics" subtitle="Learn candlestick charts, identify patterns, and understand key indicators for XRP trading." breadcrumbLabel="How to Read XRP Charts">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Reading charts is essential for XRP trading. <strong className="text-text-primary">Candlestick charts</strong> show price action over time. <strong className="text-text-primary">RSI and MACD</strong> identify momentum. Understanding <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">price history</Link> and <strong className="text-text-primary">support/resistance</strong> helps you make better decisions.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Chart Type", value: "Candlestick (most common)" },
          { label: "Key Indicators", value: "RSI, MACD, Volume" },
          { label: "Timeframes", value: "1 min to 1 month" },
          { label: "S/R", value: "Key price levels" },
          { label: "Best Tool", value: "TradingView" },
          { label: "Difficulty", value: "Beginner-friendly" },
        ]} />

        <SectionNav items={[
          { id: "candlesticks", label: "Candlesticks" },
          { id: "support-resistance", label: "S/R Levels" },
          { id: "indicators", label: "Indicators" },
          { id: "patterns", label: "Patterns" },
          { id: "tools", label: "Tools" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Chart" value="Candles" delay={0.00} />
          <StatPill label="Tool" value="TradingView" delay={0.06} />
          <StatPill label="Key" value="RSI/MACD" delay={0.12} />
          <StatPill label="Timeframe" value="Daily" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="candlesticks">
            <h2 className="text-2xl font-bold text-text-primary">Understanding Candlesticks</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Each candle shows four data points: <strong className="text-text-primary">open, high, low, close (OHLC)</strong> for a time period. This is the foundation of <Link href="/learn/xrp-technical-analysis-guide" className="text-xrp-accent underline decoration-xrp-accent/30">technical analysis</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Green (Bullish)",desc:"Close > open. Body shows open (bottom) to close (top)."},
              {title:"Red (Bearish)",desc:"Close < open. Body shows open (top) to close (bottom)."},
              {title:"Wicks",desc:"Thin lines showing high and low reached during the period."},
              {title:"Timeframes",desc:"1 min, 5 min, 1 hour, 1 day, 1 week, 1 month."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="support-resistance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Support &amp; Resistance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">Support</strong> = price tends to stop falling and bounce. <strong className="text-text-primary">Resistance</strong> = tends to stop rising and pull back. These form from <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">historical price action</Link>.</p>
            <div className="mt-6"><HighlightBox title="Key XRP Levels" variant="accent"><p>Major historical levels: $0.50, $1.00, $1.96 (2021 high), $3.84 (2018 ATH). Expect increased volatility near these.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="indicators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Essential Indicators</h2>
            <div className="mt-6"><DataTable headers={["Indicator","Shows","Usage"]} rows={[
              ["RSI","Overbought (>70) / Oversold (<30)","Buy oversold, caution overbought"],
              ["MACD","Momentum direction","Bullish when MACD > signal"],
              ["Volume","Trading activity","Confirms trend strength"],
              ["50/200 MA","Trend direction","Golden cross = bullish"],
              ["Bollinger Bands","Volatility","Price at bands may reverse"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="patterns" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Patterns</h2>
            <div className="mt-6"><IconList items={[
              {title:"Double Bottom",desc:"W-shape = bullish reversal. Price bounces from same support twice."},
              {title:"Head & Shoulders",desc:"Three peaks, middle highest. Bearish when neckline breaks."},
              {title:"Bull Flag",desc:"Sharp rise + small consolidation. Often leads to another leg up."},
              {title:"Ascending Triangle",desc:"Higher lows against flat resistance. Typically bullish breakout."},
              {title:"Cup & Handle",desc:"U-shaped recovery + small pullback. Bullish continuation."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Charting Tools</h2>
            <div className="mt-6"><IconList items={[
              {title:"TradingView",desc:"Gold standard. Free tier. Advanced indicators and community ideas."},
              {title:"Coinigy",desc:"Professional multi-exchange charting platform."},
              {title:"CoinGecko/CMC",desc:"Simple charts for quick price checks."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/xrp-technical-analysis-guide", label: "TA Guide", desc: "Advanced analysis" },
            { href: "/learn/xrp-price-history", label: "Price History", desc: "Historical prices" },
            { href: "/learn/xrp-price-prediction", label: "Prediction", desc: "Future outlook" },
            { href: "/learn/xrp-swing-trading-guide", label: "Swing Trading", desc: "Trading strategies" },
            { href: "/learn/best-xrp-trading-pairs", label: "Trading Pairs", desc: "Best pairs" },
            { href: "/learn/xrp-bull-run-indicators", label: "Bull Run Signs", desc: "Cycle signals" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Master XRP Trading" description="Combine chart reading with fundamental analysis for better decisions." primaryHref="/learn/xrp-technical-analysis-guide" primaryLabel="TA Guide →" secondaryHref="/learn/xrp-price-history" secondaryLabel="Price History" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

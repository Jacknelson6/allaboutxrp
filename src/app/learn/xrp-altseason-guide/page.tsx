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
  title: "XRP Altseason Guide: When Altcoins Outperform Bitcoin | AllAboutXRP",
  description: "Complete XRP altseason guide. Learn what triggers altseason, how XRP performs during alt rallies, and how to position for maximum gains.",
  keywords: ["XRP altseason","altseason guide","when is altseason","XRP altcoin rally","altcoin season XRP"],
  openGraph: {
    title: "XRP Altseason Guide: When Altcoins Outperform Bitcoin",
    description: "Learn what triggers altseason, how XRP performs during alt rallies, and how to position for gains.",
    url: "https://allaboutxrp.com/learn/xrp-altseason-guide",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Altseason Guide: When Altcoins Outperform Bitcoin", description: "Learn what triggers altseason and how XRP performs during alt rallies." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-altseason-guide" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Altseason Guide: When Altcoins Outperform Bitcoin", description: "Complete XRP altseason guide covering triggers, XRP performance, and positioning strategies.", url: "https://allaboutxrp.com/learn/xrp-altseason-guide", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Altseason Guide" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-altseason-guide" }),
  buildFAQSchema([
    { question: "What is altseason?", answer: "A market phase where altcoins outperform Bitcoin. Typically 75%+ of top altcoins beat BTC over a 90-day period." },
    { question: "How does XRP perform during altseason?", answer: "XRP historically has explosive moves during altseason — often 300-1000%+ in previous cycles, though past performance doesn't guarantee future results." },
    { question: "What triggers altseason?", answer: "Bitcoin dominance peaking then declining, BTC consolidating after a big rally, and new retail money entering the market." },
    { question: "How long does altseason last?", answer: "Typically 2-6 months. The most explosive gains happen in a 4-8 week window. Timing exit is crucial." },
    { question: "Should I move Bitcoin to XRP during altseason?", answer: "Some traders rotate BTC profits into altcoins. This amplifies gains but increases risk. Never go all-in on any single trade." },
  ]),
];

const faqItems = [
  { q: "What is altseason?", a: "A market phase where altcoins outperform Bitcoin. Typically 75%+ of top altcoins beat BTC over a 90-day period." },
  { q: "How does XRP perform during altseason?", a: "XRP historically has explosive moves during altseason — often 300-1000%+ in previous cycles, though past performance doesn't guarantee future results." },
  { q: "What triggers altseason?", a: "Bitcoin dominance peaking then declining, BTC consolidating after a big rally, and new retail money entering the market." },
  { q: "How long does altseason last?", a: "Typically 2-6 months. The most explosive gains happen in a 4-8 week window. Timing exit is crucial." },
  { q: "Should I move Bitcoin to XRP during altseason?", a: "Some traders rotate BTC profits into altcoins. This amplifies gains but increases risk. Never go all-in on any single trade." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Altseason Guide" titleAccent="When Altcoins Outperform Bitcoin" subtitle="Understanding altseason cycles, XRP's historical performance, and how to position for the next altcoin rally." breadcrumbLabel="Altseason Guide">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Altseason is when altcoins <strong className="text-text-primary">outperform Bitcoin</strong>. It's triggered by declining <Link href="/learn/xrp-vs-bitcoin" className="text-xrp-accent underline decoration-xrp-accent/30">BTC dominance</Link> and capital rotation. XRP has historically delivered <strong className="text-text-primary">massive gains during altseason</strong>. Key: position <em>before</em> it starts, and have an <Link href="/learn/xrp-exit-strategy" className="text-xrp-accent underline decoration-xrp-accent/30">exit strategy</Link> ready.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Trigger", value: "BTC dominance declining" },
          { label: "Duration", value: "2 – 6 months" },
          { label: "XRP History", value: "300 – 1000%+ moves" },
          { label: "Peak Window", value: "4 – 8 weeks" },
          { label: "Key Metric", value: "Altcoin Season Index" },
          { label: "Risk", value: "Ends suddenly" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Is It" },
          { id: "triggers", label: "Triggers" },
          { id: "xrp-history", label: "XRP History" },
          { id: "positioning", label: "Positioning" },
          { id: "exit", label: "Exit Plan" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Trigger" value="BTC.D ↓" delay={0.00} />
          <StatPill label="Duration" value="2-6 mo" delay={0.06} />
          <StatPill label="XRP Gains" value="300%+" delay={0.12} />
          <StatPill label="Risk" value="High" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is Altseason?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Altseason occurs when the majority of altcoins outperform Bitcoin over a sustained period. The <Link href="/learn/xrp-market-cap-explained" className="text-xrp-accent underline decoration-xrp-accent/30">market cap</Link> rotation from BTC into alts creates explosive moves across the board.</p>
            <div className="mt-6"><HighlightBox title="Altcoin Season Index" variant="info"><p>The Blockchain Center's Altcoin Season Index tracks whether 75% of top 50 altcoins outperformed BTC over 90 days. Above 75 = altseason. Below 25 = Bitcoin season.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="triggers" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Triggers Altseason</h2>
            <div className="mt-6"><IconList items={[
              { title: "BTC Dominance Peaks", desc: "After Bitcoin rallies and dominance hits 55-65%, capital starts rotating into alts." },
              { title: "Bitcoin Consolidates", desc: "BTC moves sideways after a big run — traders seek higher returns in alts." },
              { title: "New Retail Inflows", desc: "New investors often buy cheaper altcoins first, driving altseason momentum." },
              { title: "Narrative Catalysts", desc: "ETF approvals, regulatory wins, or tech upgrades for specific alts trigger rotation." },
              { title: "Risk Appetite Rises", desc: "Macro environment supports risk-on positioning across all asset classes." },
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="xrp-history" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP During Past Altseasons</h2>
            <div className="mt-6"><DataTable headers={["Period","BTC Move","XRP Move","XRP vs BTC"]} rows={[
              ["Dec 2017 – Jan 2018","~2.5x","~36x (to $3.84)","14x outperformance"],
              ["Nov 2020 – Apr 2021","~3x","~7x (to $1.96)","2.3x outperformance"],
              ["Late 2024 – Early 2025","~2x","~5x","2.5x outperformance"],
            ]} highlightCol={2} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP tends to move late but explosively during altseasons, often outperforming in concentrated bursts. Review <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">price history</Link> for full context.</p>
          </RevealSection>

          <RevealSection id="positioning" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Position</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              { title: "Accumulate Early", desc: "Build your position during Bitcoin season when altcoins are cheap. DCA during fear." },
              { title: "Watch BTC Dominance", desc: "When BTC.D peaks and starts declining, altseason is approaching. Be ready." },
              { title: "Set Targets", desc: "Define profit-taking levels before FOMO kicks in. Use the scaling out method." },
              { title: "Diversify Slightly", desc: "Core XRP position + small positions in 2-3 correlated alts for broader exposure." },
            ]} /></div>
          </RevealSection>

          <RevealSection id="exit" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exit Plan</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Altseason ends fast. Have your <Link href="/learn/xrp-exit-strategy" className="text-xrp-accent underline decoration-xrp-accent/30">exit strategy</Link> before it starts.</p>
            <div className="mt-6"><HighlightBox title="Warning Signs Altseason is Ending" variant="warning"><p>Extreme euphoria on social media, Bitcoin dominance bottoming and rising, funding rates maxed out, "this time is different" everywhere. When your neighbor asks about XRP — it's late.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-bull-run-indicators", label: "Bull Run Indicators", desc: "Spot the signals" },
              { href: "/learn/xrp-exit-strategy", label: "Exit Strategy", desc: "Take profits" },
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Compare assets" },
              { href: "/learn/xrp-accumulation-zones", label: "Accumulation Zones", desc: "Entry levels" },
              { href: "/learn/xrp-2026-outlook", label: "2026 Outlook", desc: "Year ahead" },
              { href: "/learn/xrp-swing-trading-guide", label: "Swing Trading", desc: "Active strategies" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Prepare for Altseason" description="Position now, profit later. The best entries happen before the hype." primaryHref="/learn/xrp-bull-run-indicators" primaryLabel="Bull Indicators →" secondaryHref="/learn/xrp-accumulation-zones" secondaryLabel="Accumulation Zones" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}

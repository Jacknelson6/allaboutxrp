import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, GlowCard,
} from "@/components/learn/LearnPageShell";
import timelineData from "@/data/timeline.json";

export const metadata: Metadata = {
  title: "XRP History: Complete Ripple Timeline 2011-2026",
  description:
    "XRP history from 2011 to 2026. Complete Ripple timeline covering every major milestone, the SEC case, partnerships, and key price events.",
  openGraph: {
    title: "XRP History & Ripple Timeline | AllAboutXRP",
    description: "The complete XRP and Ripple history timeline — every milestone from the XRPL's creation to today.",
    url: "https://allaboutxrp.com/learn/history",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP History: Complete Timeline | AllAboutXRP",
    description: "Full XRP and Ripple timeline from 2011 to present. Every major milestone covered.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/history" },
};

const categoryColors: Record<string, string> = {
  technology: "border-xrp-accent/30 bg-xrp-accent/10 text-xrp-accent",
  company: "border-purple-400/30 bg-purple-500/10 text-purple-400",
  partnership: "border-success/30 bg-success/10 text-success",
  market: "border-warning/30 bg-warning/10 text-warning",
  regulation: "border-danger/30 bg-danger/10 text-danger",
};

const schemas = [
  buildArticleSchema({
    headline: "XRP History: Complete Ripple Timeline 2011-2026",
    description: "The complete history of XRP and Ripple from 2011 to 2026, covering every major milestone.",
    url: "https://allaboutxrp.com/learn/history",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "History & Timeline" },
  ]),
  buildFAQSchema([
    { question: "When was XRP created?", answer: "The XRP Ledger development began in 2011 by David Schwartz, Jed McCaleb, and Arthur Britto. The ledger went live on June 2, 2012, with all 100 billion XRP created at genesis." },
    { question: "What was XRP's all-time high price?", answer: "XRP reached its all-time high of $3.84 on January 4, 2018, during the 2017-2018 crypto bull run." },
    { question: "When did the SEC sue Ripple?", answer: "The SEC filed its lawsuit against Ripple on December 22, 2020. Judge Torres ruled in July 2023 that XRP on exchanges is not a security." },
    { question: "Who created XRP?", answer: "The XRP Ledger was created by David Schwartz (Ripple's CTO), Jed McCaleb (who later founded Stellar), and Arthur Britto." },
  ]),
];

const faqItems = [
  { q: "When was XRP created?", a: "Development of the XRP Ledger began in 2011. The ledger went live on June 2, 2012, with all 100 billion XRP created at genesis. The company OpenCoin (now Ripple) was founded in September 2012." },
  { q: "What was XRP's all-time high price?", a: "XRP reached $3.84 on January 4, 2018, during the 2017-2018 crypto bull run. It briefly became the second-largest cryptocurrency by market capitalization." },
  { q: "Who created XRP?", a: "The XRP Ledger was created by David Schwartz (Ripple's CTO), Jed McCaleb (who later founded Stellar), and Arthur Britto. Chris Larsen joined to co-found the company." },
  { q: "When did the SEC sue Ripple?", a: "The SEC filed suit on December 22, 2020. Judge Torres issued the landmark ruling on July 13, 2023, that XRP on exchanges is not a security. Ripple paid a $125M penalty in August 2024." },
];

const eventsByYear = timelineData.reduce((acc: Record<number, typeof timelineData>, event) => {
  if (!acc[event.year]) acc[event.year] = [];
  acc[event.year].push(event);
  return acc;
}, {} as Record<number, typeof timelineData>);

const years = Object.keys(eventsByYear).map(Number).sort((a, b) => a - b);

export default function HistoryPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-12">
        <LearnHero
          title="XRP History:"
          titleAccent="The Complete Timeline"
          subtitle="Every major milestone from the creation of the XRP Ledger in 2011 through the SEC lawsuit, court rulings, and XRP's emergence as institutional infrastructure."
          breadcrumbLabel="History &amp; Timeline"
        >
          <div className="mt-5"><AuthorByline date="2026-02-10" /></div>
        </LearnHero>

        <SectionNav items={[
          { id: "eras", label: "Eras" },
          { id: "timeline", label: "Full Timeline" },
          { id: "founding", label: "Founding Story" },
          { id: "sec", label: "SEC Case" },
          { id: "price", label: "Price History" },
          { id: "mistakes", label: "Misconceptions" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />
        <div className="mt-6"><Disclaimer /></div>

        <div className="cv-auto mt-10 space-y-14">
          {/* ERA OVERVIEW */}
          <RevealSection id="eras">
            <h2 className="text-2xl font-bold text-text-primary">The Eras of XRP</h2>
            <div className="mt-6">
              <FeatureGrid columns={3} items={[
                { title: "Genesis (2011-2013)", desc: "XRPL creation, OpenCoin founded, early funding" },
                { title: "Building (2014-2016)", desc: "Enterprise focus, SBI partnership, rebranding" },
                { title: "Bull Run (2017-2018)", desc: "All-time high $3.84, escrow, xRapid launch" },
                { title: "Expansion (2019-2020)", desc: "MoneyGram, ODL rollout, SEC lawsuit filed" },
                { title: "Legal Battle (2021-2023)", desc: "SEC case, Torres ruling, exchange relistings" },
                { title: "Institutional Era (2024-2026)", desc: "ETFs, RLUSD, $3.7B in acquisitions" },
              ]} />
            </div>
          </RevealSection>

          {/* FULL TIMELINE */}
          <RevealSection id="timeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Full Timeline</h2>
            <div className="mt-8 space-y-10">
              {years.map((year) => (
                <div key={year}>
                  <h3 className="text-xl font-bold text-xrp-accent">{year}</h3>
                  <div className="mt-4 space-y-4 border-l-2 border-surface-border pl-6">
                    {eventsByYear[year].map((event, i) => (
                      <div key={`${event.date}-${i}`} className="relative">
                        <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-surface-border bg-surface-primary" />
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono text-text-secondary">
                            {new Date(event.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${categoryColors[event.category] || "bg-surface-elevated text-text-secondary border-surface-border"}`}>
                            {event.category}
                          </span>
                          {event.significance === "high" ? (
                            <span className="text-[10px] font-semibold text-warning">★ Major</span>
                          ) : null}
                        </div>
                        <h4 className="mt-1 font-semibold text-text-primary">{event.title}</h4>
                        <p className="mt-1 text-sm text-text-secondary leading-relaxed">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* FOUNDING STORY */}
          <RevealSection id="founding" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Founding Story</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger story began in 2011 when <strong className="text-text-primary">David Schwartz</strong>, a cryptographer with experience dating to the 1980s, joined forces with <strong className="text-text-primary">Jed McCaleb</strong> and <strong className="text-text-primary">Arthur Britto</strong> to build a faster, more energy-efficient alternative to Bitcoin.
            </p>
            <div className="mt-5">
              <GlowCard
                title="June 2, 2012"
                value="100,000,000,000 XRP"
                subtitle="Created at genesis — the XRP Ledger goes live with its entire fixed supply"
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Chris Larsen</strong>, a serial fintech entrepreneur, joined as co-founder and first CEO, bringing enterprise credibility. Together they formed OpenCoin (later <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link>) in September 2012. Learn more on our <Link href="/learn/leadership" className="text-xrp-accent underline decoration-xrp-accent/30">Leadership page</Link>.
            </p>
          </RevealSection>

          {/* SEC CASE */}
          <RevealSection id="sec" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The SEC Lawsuit: A Turning Point</h2>
            <div className="mt-4">
              <HighlightBox title="December 22, 2020" variant="danger">
                <p>The SEC filed a lawsuit alleging Ripple raised $1.3 billion through unregistered sales of XRP as securities, naming CEO Brad Garlinghouse and co-founder Chris Larsen as co-defendants.</p>
              </HighlightBox>
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Major U.S. exchanges delisted or suspended XRP trading, dramatically reducing liquidity. But Ripple chose to fight rather than settle — a decision that proved pivotal.
            </p>
            <div className="mt-4">
              <HighlightBox title="July 13, 2023 — The Torres Ruling" variant="success">
                <p><strong className="text-text-primary">Judge Analisa Torres ruled that XRP sold on public exchanges to retail investors is not a security.</strong> This was a watershed moment — not just for XRP, but for the entire cryptocurrency industry. Exchanges relisted XRP within days, and the legal clarity paved the way for ETF filings and institutional adoption.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* INSTITUTIONAL ERA */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Institutional Era (2024-2026)</h2>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "XRP ETFs", desc: "Spot ETF applications from Bitwise, 21Shares, Canary Capital, WisdomTree; futures ETFs launched May 2025" },
                { title: "RLUSD Stablecoin", desc: "Launched December 2024, surpassing $1.26B market cap" },
                { title: "$3.7B in Acquisitions", desc: "Hidden Road, Rail, GTreasury, Palisade — full-stack financial infrastructure" },
                { title: "Mastercard Partnership", desc: "RLUSD settling fiat card transactions on the XRPL" },
              ]} />
            </div>
          </RevealSection>

          {/* PRICE HISTORY */}
          <RevealSection id="price" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Has XRP&apos;s Price Changed Over Time?</h2>
            <div className="mt-5">
              <DataTable
                headers={["Period", "Price Range", "Key Driver"]}
                rows={[
                  ["2012-2016", "$0.001 - $0.02", "Early development, minimal liquidity"],
                  ["2017", "$0.006 → $2.30", "Crypto bull run, SBI partnership, escrow"],
                  ["Jan 2018", "ATH: $3.84", "Peak of 2017-2018 bull run"],
                  ["2018-2020", "$0.15 - $0.70", "Crypto winter, building phase"],
                  ["Dec 2020 - Jul 2023", "$0.20 - $0.90", "SEC lawsuit suppression"],
                  ["Jul 2023", "$0.47 → $0.94", "Torres ruling — 100% spike in 24 hours"],
                  ["2024-2026", "$0.50+", "ETF filings, RLUSD, institutional adoption"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* KEY MOMENTS */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Five Most Important Moments in XRP History</h2>
            <div className="mt-5 space-y-4">
              {[
                { num: "1", title: "XRPL Genesis (June 2012)", desc: "Creation of all 100 billion XRP and launch of a blockchain that would operate 14+ years without downtime." },
                { num: "2", title: "55 Billion XRP Escrow (Dec 2017)", desc: "Ripple locked over half the total supply in cryptographic escrow — the most transparent supply management in crypto." },
                { num: "3", title: "SEC Lawsuit Filed (Dec 2020)", desc: "The most consequential regulatory event in cryptocurrency history, leading to years of uncertainty but ultimately forcing legal clarity." },
                { num: "4", title: "Torres Ruling (July 2023)", desc: "XRP on exchanges ruled not a security — a watershed moment for all of crypto, leading to immediate relistings." },
                { num: "5", title: "Institutional Infrastructure (2025)", desc: "Ripple's $3.7B acquisition spree transformed it from a payments startup into a full-stack financial infrastructure provider." },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 rounded-xl border border-surface-border/60 bg-black p-5 ">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-xrp-accent/10 font-mono text-sm font-bold text-xrp-accent">{item.num}</span>
                  <div>
                    <h3 className="font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* COMMUNITY */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Did the XRP Community Develop?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP community — the &quot;XRP Army&quot; — is one of the most dedicated in cryptocurrency. Forged through years of the SEC lawsuit and price suppression, the community developed a unique culture of patience, conviction, and cryptic puzzle-solving.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The <Link href="/riddlers" className="text-xrp-accent underline decoration-xrp-accent/30">Riddler tradition</Link> involving figures like BearableGuy123 and Mr. Pool is unlike anything in other crypto communities. See who&apos;s worth following on our <Link href="/people" className="text-xrp-accent underline decoration-xrp-accent/30">XRP People to Follow</Link> page.
            </p>
          </RevealSection>

          {/* MISCONCEPTIONS */}
          <RevealSection id="mistakes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Misconceptions About XRP History</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="XRP was created by Ripple" reality="The XRPL was built before Ripple existed. Schwartz, McCaleb, and Britto created the ledger; they then formed the company." />
              <MisconceptionCard myth="The SEC lawsuit proved XRP is a security" reality="The opposite — the Torres ruling established that XRP on exchanges is NOT a security." />
              <MisconceptionCard myth="XRP is 'dead' because of years of low prices" reality="Price suppression during the SEC era masked massive infrastructure building. Ripple spent $3.7B on acquisitions in 2025 alone." />
            </div>
          </RevealSection>

          {/* FAQ */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* CONTINUE LEARNING */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
              { href: "/learn/leadership", label: "Leadership Team", desc: "The people behind Ripple" },
              { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
              { href: "/escrow", label: "Escrow Explained", desc: "55B XRP lockup system" },
              { href: "/learn/get-started", label: "How to Buy XRP", desc: "Start your journey" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Story Continues"
          description="From a 2011 whiteboard concept to a $50 billion financial infrastructure company — XRP's story is still being written."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="What is XRP? →"
          secondaryHref="/news/recaps"
          secondaryLabel="Latest News"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple official announcements, SEC court filings, CoinMarketCap, CoinDesk, XRPScan.</em>
        </p>
      </div>
    </>
  );
}

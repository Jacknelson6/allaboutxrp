import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
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
    { question: "What was XRP's all-time high price?", answer: "XRP reached its all-time high of $3.84 on January 4, 2018, during the 2017-2018 crypto bull run, briefly becoming the second-largest cryptocurrency by market cap." },
    { question: "When did the SEC sue Ripple?", answer: "The SEC filed its lawsuit against Ripple on December 22, 2020. Judge Torres ruled in July 2023 that XRP on exchanges is not a security." },
    { question: "Who created XRP?", answer: "The XRP Ledger was created by David Schwartz (Ripple's CTO), Jed McCaleb (who later founded Stellar), and Arthur Britto. Chris Larsen joined them to co-found OpenCoin, which became Ripple." },
  ]),
];

// Group events by year
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
      <div className="mx-auto max-w-4xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/learn" className="hover:text-xrp-accent transition-colors">Learn</Link></li>
            <li>/</li>
            <li className="text-text-primary font-medium">History & Timeline</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          <span className="gradient-text">XRP History</span>: The Complete Timeline
        </h1>
        <div className="mt-4">
          <AuthorByline date="2026-02-10" />
        </div>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          The complete <strong>XRP history</strong> and <strong>Ripple history timeline</strong> from the very beginning. From the creation of the XRP Ledger in 2011 through the SEC lawsuit, landmark court rulings, institutional adoption, and the emergence of XRP as a cornerstone of digital finance — every major milestone documented.
        </p>

        <div className="mt-6"><Disclaimer /></div>

        {/* Era Overview */}
        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-text-primary">The Eras of XRP</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { era: "2011-2013", title: "Genesis", desc: "XRPL creation, OpenCoin founded, early funding" },
              { era: "2014-2016", title: "Building", desc: "Enterprise focus, SBI partnership, rebranding" },
              { era: "2017-2018", title: "Bull Run", desc: "All-time high $3.84, escrow, xRapid launch" },
              { era: "2019-2020", title: "Expansion", desc: "MoneyGram, ODL rollout, SEC lawsuit filed" },
              { era: "2021-2023", title: "Legal Battle", desc: "SEC case, Torres ruling, exchange relistings" },
              { era: "2024-2026", title: "Institutional Era", desc: "ETFs, RLUSD, $3.7B in acquisitions" },
            ].map((item) => (
              <div key={item.era} className="rounded-xl border border-surface-border bg-surface-card/50 p-4 backdrop-blur-sm">
                <div className="text-xs font-semibold text-xrp-accent">{item.era}</div>
                <div className="mt-1 font-display font-bold text-text-primary">{item.title}</div>
                <div className="mt-1 text-sm text-text-secondary">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Timeline */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold text-text-primary">Full Timeline</h2>

          <div className="mt-8 space-y-10">
            {years.map((year) => (
              <div key={year}>
                <h3 className="font-display text-xl font-bold text-xrp-accent">{year}</h3>
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
                        {event.significance === "high" && (
                          <span className="text-[10px] font-semibold text-warning">★ Major</span>
                        )}
                      </div>
                      <h4 className="mt-1 font-display font-semibold text-text-primary">{event.title}</h4>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Context Sections */}
        <article className="mt-16 space-y-10">
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">The Founding Story</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger story began in 2011 when <strong>David Schwartz</strong>, a cryptographer with experience dating to the 1980s, joined forces with <strong>Jed McCaleb</strong> (creator of Mt. Gox and later Stellar) and <strong>Arthur Britto</strong> to build a faster, more energy-efficient alternative to Bitcoin.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Their innovation was the Federated Consensus Protocol — a mechanism that could confirm transactions in seconds without the energy-intensive mining process that Bitcoin required. When the XRPL went live on June 2, 2012, all 100 billion XRP were created at genesis. 80 billion XRP were gifted to the newly formed company, OpenCoin (later <Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple</Link>).
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              <strong>Chris Larsen</strong>, a serial fintech entrepreneur who had co-founded E-Loan and Prosper Marketplace, joined as co-founder and first CEO, bringing enterprise credibility and business strategy to the technical vision. Learn more about the team on our <Link href="/learn/leadership" className="text-xrp-accent">Leadership page</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">The SEC Lawsuit: A Turning Point</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              On December 22, 2020, the SEC filed a lawsuit alleging Ripple raised $1.3 billion through unregistered sales of XRP as securities, naming CEO Brad Garlinghouse and co-founder Chris Larsen as co-defendants. What followed was one of the most consequential legal battles in cryptocurrency history.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Major U.S. exchanges delisted or suspended XRP trading, dramatically reducing liquidity. But Ripple chose to fight rather than settle — a decision that proved pivotal when <strong>Judge Analisa Torres ruled on July 13, 2023</strong> that XRP sold on public exchanges to retail investors is <strong>not a security</strong>.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The ruling was a watershed moment — not just for XRP, but for the entire cryptocurrency industry. Exchanges relisted XRP within days, and the legal clarity paved the way for ETF filings, institutional adoption, and Ripple&apos;s aggressive <Link href="/acquisitions" className="text-xrp-accent">acquisition strategy</Link> in 2025.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">The Institutional Era (2024-2026)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              With regulatory clarity achieved, XRP entered an unprecedented period of institutional adoption:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li><strong>XRP ETFs:</strong> Spot ETF applications from Bitwise, 21Shares, Canary Capital, and WisdomTree; futures ETFs launched in May 2025 following CME listing</li>
              <li><strong>RLUSD:</strong> Ripple&apos;s stablecoin launched December 2024, surpassing $1.26B market cap</li>
              <li><strong>$3.7B in Acquisitions:</strong> Hidden Road, Rail, GTreasury, and Palisade — building a full-stack financial infrastructure</li>
              <li><strong>Mastercard Partnership:</strong> RLUSD used for settling fiat card transactions on the XRPL</li>
              <li><strong>Global Expansion:</strong> Ripple now operates in 40+ countries with ~1,400 employees</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Why XRP&apos;s History Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Understanding XRP&apos;s history is essential for evaluating its future. The SEC lawsuit, for example, created years of price suppression and uncertainty — but also resulted in the most important legal precedent in crypto history. Each era of XRP&apos;s development has built on the last, and the institutional infrastructure being assembled in 2025-2026 is the culmination of over a decade of work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Common Misconceptions About XRP History</h2>
            <div className="mt-4 space-y-3">
              {[
                { mistake: "XRP was created by Ripple", fix: "The XRPL was built before Ripple existed. Schwartz, McCaleb, and Britto created the ledger; they then formed the company." },
                { mistake: "The SEC lawsuit proved XRP is a security", fix: "The opposite — the Torres ruling established that XRP on exchanges is NOT a security." },
                { mistake: "XRP is 'dead' because of years of low prices", fix: "Price suppression during the SEC era masked massive infrastructure building. Ripple spent $3.7B on acquisitions in 2025 alone." },
              ].map((item) => (
                <div key={item.mistake} className="rounded-xl border border-danger/20 bg-danger/5 p-4">
                  <div className="font-semibold text-text-primary">❌ {item.mistake}</div>
                  <div className="mt-1 text-sm text-text-secondary">✅ {item.fix}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12 rounded-2xl border border-surface-border bg-surface-card/30 p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">When was XRP created?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Development of the XRP Ledger began in 2011. The ledger went live on June 2, 2012, with all 100 billion XRP created at genesis. The company OpenCoin (now <Link href="/learn/what-is-ripple" className="text-xrp-accent">Ripple</Link>) was founded in September 2012.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">What was XRP&apos;s all-time high price?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  XRP reached $3.84 on January 4, 2018, during the 2017-2018 crypto bull run. It briefly became the second-largest cryptocurrency by market capitalization.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Who created XRP?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  The XRP Ledger was created by David Schwartz (Ripple&apos;s CTO), Jed McCaleb (who later founded Stellar), and Arthur Britto. Chris Larsen joined to co-found the company.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">When did the SEC sue Ripple?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  The SEC filed suit on December 22, 2020. Judge Torres issued the landmark ruling on July 13, 2023, that XRP on exchanges is not a security. Ripple paid a $125M penalty in August 2024.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mt-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Continue Learning</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
                { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
                { href: "/learn/leadership", label: "Leadership Team", desc: "The people behind Ripple" },
                { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
                { href: "/escrow", label: "Escrow Explained", desc: "55B XRP lockup system" },
                { href: "/learn/get-started", label: "How to Buy XRP", desc: "Start your journey" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card-glow flex flex-col rounded-xl border border-surface-border bg-surface-card/50 p-4 backdrop-blur-sm transition-colors hover:border-xrp-accent/30"
                >
                  <span className="font-display font-semibold text-text-primary">{link.label}</span>
                  <span className="mt-1 text-sm text-text-secondary">{link.desc}</span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <section className="mt-12 rounded-2xl border border-surface-border bg-gradient-to-br from-surface-card/50 to-xrp-accent/[0.02] p-8 text-center backdrop-blur-sm">
          <h2 className="font-display text-xl font-bold text-text-primary">The Story Continues</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-2xl mx-auto">
            From a 2011 whiteboard concept to a $50 billion financial infrastructure company — XRP&apos;s story is still being written. Stay informed and explore more.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/learn/what-is-xrp" className="rounded-lg bg-xrp-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-xrp-accent/90">
              What is XRP? →
            </Link>
            <Link href="/news/recaps" className="rounded-lg border border-surface-border bg-surface-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-elevated">
              Latest News
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple official announcements, SEC court filings, CoinMarketCap, CoinDesk, XRPScan.</em>
        </p>
      </div>
    </>
  );
}

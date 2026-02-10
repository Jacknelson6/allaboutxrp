import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import Disclaimer from "@/components/shared/Disclaimer";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import { LearnHero, SectionNav, LearnCTA, LearnLinkGrid } from "@/components/learn/LearnPageShell";

export const metadata: Metadata = {
  title: "Ripple Leadership: Who Runs Ripple in 2026",
  description:
    "Meet Ripple's leadership team — Brad Garlinghouse, David Schwartz, Monica Long, and the executives driving XRP adoption. Updated 2026.",
  openGraph: {
    title: "Ripple Leadership Team | AllAboutXRP",
    description: "Complete profiles of Ripple's executive team — the people behind XRP and the XRP Ledger ecosystem.",
    url: "https://allaboutxrp.com/learn/leadership",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Runs Ripple? Leadership Team | AllAboutXRP",
    description: "Meet the executives leading Ripple — Brad Garlinghouse, David Schwartz, Monica Long, and more.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/leadership" },
};

const schemas = [
  buildArticleSchema({
    headline: "Ripple Leadership: Who Runs Ripple in 2026",
    description: "Complete profiles of Ripple's executive leadership team and XRP Ledger co-creators.",
    url: "https://allaboutxrp.com/learn/leadership",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Leadership" },
  ]),
  buildFAQSchema([
    { question: "Who is the CEO of Ripple?", answer: "Brad Garlinghouse has served as CEO since January 2017. He led Ripple through the SEC lawsuit and the company's expansion to a $50 billion valuation." },
    { question: "Who created the XRP Ledger?", answer: "The XRP Ledger was created by David Schwartz (Ripple's CTO), Jed McCaleb (who later founded Stellar), and Arthur Britto. Development began in 2011." },
    { question: "Who founded Ripple?", answer: "Ripple (originally OpenCoin) was co-founded in September 2012 by Chris Larsen, Jed McCaleb, and Arthur Britto." },
  ]),
];

interface Leader {
  name: string;
  title: string;
  description: string;
  background: string;
  xHandle?: string;
  highlight?: boolean;
}

const executiveTeam: Leader[] = [
  {
    name: "Brad Garlinghouse",
    title: "Chief Executive Officer",
    description: "Brad Garlinghouse has served as CEO since January 2017, steering Ripple through its most consequential period — including the SEC lawsuit (where he was named as a co-defendant), the landmark Torres ruling, and the company's transformation into a $50 billion financial infrastructure giant. Under his leadership, Ripple expanded to 55+ countries, launched RLUSD, and executed $3.7B+ in acquisitions.",
    background: "Before Ripple, Garlinghouse was President of AOL's Consumer Applications division, CEO of Hightail (formerly YouSendIt), and held senior roles at Yahoo, where he authored the famous 'Peanut Butter Manifesto' calling for strategic focus. He holds an MBA from Harvard Business School.",
    xHandle: "bgarlinghouse",
    highlight: true,
  },
  {
    name: "Chris Larsen",
    title: "Executive Chairman & Co-Founder",
    description: "Chris Larsen co-founded OpenCoin (now Ripple) in September 2012 and served as its first CEO until 2016. A serial fintech entrepreneur, he was also named as a co-defendant in the SEC's 2020 lawsuit. His XRP holdings at various price peaks reportedly made him one of the wealthiest individuals in cryptocurrency.",
    background: "Before Ripple, Larsen co-founded E-Loan (one of the first online mortgage companies) and Prosper Marketplace (a pioneering peer-to-peer lending platform). He has been a vocal advocate for the US to take a leadership position in digital assets and blockchain.",
    highlight: true,
  },
  {
    name: "David Schwartz",
    title: "Chief Technology Officer",
    description: "David Schwartz is one of the three original creators of the XRP Ledger and has served as Ripple's CTO since the company's earliest days. Known in the community by his handle 'JoelKatz,' he designed the XRPL's consensus protocol and continues to oversee all technical strategy. He is widely regarded as one of the foremost experts on the XRP Ledger's architecture.",
    background: "A cryptographer with experience dating to the 1980s, Schwartz has deep expertise in distributed systems, consensus algorithms, and cryptographic protocols. He is a frequent speaker at industry conferences and an active presence on social media, where his occasionally cryptic tweets have become part of XRP lore.",
    xHandle: "JoelKatz",
    highlight: true,
  },
  {
    name: "Monica Long",
    title: "President",
    description: "Monica Long joined Ripple in September 2013 as one of the company's first dozen employees. She advanced from Director of Communications through VP and SVP of Marketing before being promoted to President. She leads Ripple's Business, Product, and Engineering teams and has been instrumental in the company's enterprise sales strategy and expansion into stablecoins and custody.",
    background: "One of the longest-tenured executives at Ripple, Long has overseen the company's evolution from a small payments startup to a full-stack financial infrastructure provider. She is a key spokesperson for Ripple at industry events and conferences.",
    highlight: true,
  },
  {
    name: "Stuart Alderoty",
    title: "Chief Legal Officer",
    description: "Stuart Alderoty joined Ripple as General Counsel and has served as Chief Legal Officer. He played a central role in Ripple's defense against the SEC lawsuit, coordinating legal strategy throughout the multi-year case that resulted in the July 2023 Torres ruling — a landmark decision for the crypto industry.",
    background: "Before Ripple, Alderoty was General Counsel at HSBC North America and CIT Group, and Managing Partner at American Express. His deep experience in financial services regulation made him uniquely suited to navigate the SEC battle. He has been an outspoken critic of 'regulation by enforcement' in crypto.",
  },
  {
    name: "Jon Bilich",
    title: "Chief Financial Officer",
    description: "Jon Bilich was promoted to CFO in January 2024 after joining Ripple in 2016. He oversees all financial planning, strategy, and reporting. His capital markets background aligns directly with Ripple's push into institutional finance, prime brokerage, and treasury management.",
    background: "Before Ripple, Bilich worked at Morgan Stanley in investment banking and capital markets. His Wall Street pedigree reflects Ripple's strategic shift toward institutional adoption.",
  },
];

const seniorLeaders: Leader[] = [
  {
    name: "Eric van Miltenburg",
    title: "SVP, Strategic Accounts",
    description: "Leads Ripple's relationships with key strategic enterprise accounts, driving adoption of Ripple Payments and custody solutions.",
    background: "Extensive experience in enterprise sales and strategic partnerships in the fintech space.",
  },
  {
    name: "Eric Jeck",
    title: "SVP, Corporate Development",
    description: "Drives Ripple's M&A strategy and business growth, having played a key role in the $3.7B+ acquisition spree including Hidden Road, GTreasury, and Palisade.",
    background: "Corporate development and strategic partnerships background.",
  },
  {
    name: "Kiersten Hollars",
    title: "SVP, People, Places & Communications",
    description: "Oversees Ripple's HR, workplace strategy, and corporate communications across 40+ countries and ~1,400 employees.",
    background: "People operations and corporate communications leadership.",
  },
  {
    name: "Devraj Varadhan",
    title: "Head of Engineering",
    description: "Leads Ripple's engineering organization, overseeing development of Ripple Payments, custody, and XRPL-based products.",
    background: "Engineering leadership in distributed systems and fintech.",
  },
  {
    name: "Jack McDonald",
    title: "SVP, Stablecoins",
    description: "Former CEO of Standard Custody, now leads RLUSD strategy at Ripple. His acquisition by Ripple directly connected custody expertise to stablecoin operations.",
    background: "Digital asset custody and compliance expertise. Led Standard Custody before its acquisition by Ripple in 2024.",
  },
  {
    name: "Reece Merrick",
    title: "Managing Director, Middle East & Africa",
    description: "Leads Ripple's expansion across the Middle East and Africa, key regions for cross-border remittances and institutional adoption.",
    background: "Regional fintech leadership with focus on emerging markets.",
  },
];

const founders: Leader[] = [
  {
    name: "Arthur Britto",
    title: "Co-Creator, XRP Ledger",
    description: "Arthur Britto co-created the XRP Ledger alongside David Schwartz and Jed McCaleb. He was instrumental in designing XRP's economic model, including the fixed 100 billion token supply. Britto also co-founded PolySign, whose subsidiary Standard Custody was acquired by Ripple in 2024.",
    background: "Remained largely out of the public eye since the ledger's creation. His PolySign/Standard Custody technology was brought back under Ripple's roof through acquisition.",
  },
  {
    name: "Jed McCaleb",
    title: "Co-Creator, XRP Ledger (Departed 2013)",
    description: "Jed McCaleb initiated the XRP Ledger project and co-founded OpenCoin before departing in 2013 amid disagreements over company direction. He went on to co-found Stellar (XLM). His XRP holdings were governed by a structured sale agreement, with final distributions completed in 2022.",
    background: "Before XRP, McCaleb created Mt. Gox (the first major Bitcoin exchange) and later co-founded Stellar Development Foundation. One of the most influential figures in early cryptocurrency history.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="mx-auto max-w-4xl px-4 py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-xrp-accent transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/learn" className="hover:text-xrp-accent transition-colors">Learn</Link></li>
            <li>/</li>
            <li className="text-text-primary font-medium">Leadership</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          <span className="gradient-text">Ripple Leadership</span>: Who Runs Ripple
        </h1>
        <div className="mt-4">
          <AuthorByline date="2026-02-10" />
        </div>
        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
          <strong>Ripple&apos;s leadership</strong> team combines fintech veterans, cryptography experts, Wall Street alumni, and seasoned corporate executives. The team has guided Ripple through rapid growth, the landmark SEC lawsuit, and the company&apos;s transformation into a $50 billion financial infrastructure provider. Here&apos;s <strong>who runs Ripple</strong>.
        </p>

        <div className="mt-6"><Disclaimer /></div>

        <article className="cv-auto mt-12 space-y-12">
          {/* Executive Team */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Executive Team</h2>
            <div className="mt-6 space-y-6">
              {executiveTeam.map((leader) => (
                <div
                  key={leader.name}
                  className={`rounded-xl border p-6 backdrop-blur-sm ${
                    leader.highlight
                      ? "border-xrp-accent/30 bg-gradient-to-r from-xrp-accent/5 to-transparent"
                      : "border-surface-border bg-surface-card/50"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-bold text-text-primary">{leader.name}</h3>
                    <span className="rounded-full border border-xrp-accent/20 bg-xrp-accent/10 px-3 py-0.5 text-xs font-semibold text-xrp-accent">
                      {leader.title}
                    </span>
                    {leader.xHandle ? (
                      <a
                        href={`https://x.com/${leader.xHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-text-secondary hover:text-xrp-accent transition-colors"
                      >
                        @{leader.xHandle} ↗
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-3 text-text-secondary leading-relaxed">{leader.description}</p>
                  <p className="mt-2 text-sm text-text-secondary/80 leading-relaxed">
                    <strong>Background:</strong> {leader.background}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Senior Leaders */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Senior Leadership</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {seniorLeaders.map((leader) => (
                <div key={leader.name} className="rounded-xl border border-surface-border bg-surface-card/50 p-5 backdrop-blur-sm">
                  <h3 className="font-display font-semibold text-text-primary">{leader.name}</h3>
                  <span className="text-xs font-medium text-xrp-accent">{leader.title}</span>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{leader.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Co-Creators */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">XRP Ledger Co-Creators</h2>
            <p className="mt-2 text-text-secondary">The original architects of the XRP Ledger</p>
            <div className="mt-6 space-y-4">
              {founders.map((leader) => (
                <div key={leader.name} className="rounded-xl border border-surface-border bg-surface-card/50 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-bold text-text-primary">{leader.name}</h3>
                    <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-0.5 text-xs font-semibold text-purple-400">
                      {leader.title}
                    </span>
                  </div>
                  <p className="mt-3 text-text-secondary leading-relaxed">{leader.description}</p>
                  <p className="mt-2 text-sm text-text-secondary/80"><strong>Background:</strong> {leader.background}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What the Talent Signals */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">What Ripple&apos;s Talent Strategy Signals</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple&apos;s hiring patterns tell a clear story about where the company is headed: <strong>deep into regulated financial services</strong>.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li>Executives from <strong>Morgan Stanley, HSBC, American Express, Goldman Sachs</strong></li>
              <li>Legal leadership from <strong>top financial services firms</strong></li>
              <li>In late 2024, <strong>75% of new job openings shifted to the U.S.</strong>, signaling confidence in the post-SEC regulatory environment</li>
              <li>Key acquisition hires (Jack McDonald from Standard Custody) placed directly into senior product roles</li>
            </ul>
            <p className="mt-3 text-text-secondary leading-relaxed">
              This isn&apos;t a company hiring for retail hype. It&apos;s building for <strong>institutional adoption at scale</strong>.
            </p>
          </section>

          {/* Leadership Through Crisis */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Leadership Through the SEC Lawsuit</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple&apos;s leadership was tested significantly by the SEC lawsuit, which began in December 2020 and continued through 2025. Rather than settling early, the team chose to fight — a decision that proved consequential when <strong>Judge Torres ruled in July 2023</strong> that XRP sold on public exchanges is not a security.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              This legal clarity benefited not just Ripple but the broader crypto industry. The leadership team&apos;s willingness to litigate has been cited as a turning point for crypto regulation in the United States. Read the full story in our <Link href="/learn/history" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors">History & Timeline</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="rounded-2xl border border-surface-border bg-surface-card/30 p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-text-primary">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Who is the CEO of Ripple?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  Brad Garlinghouse has served as CEO since January 2017. He led Ripple through the SEC lawsuit, oversaw its expansion to 55+ countries, and guided the company to a ~$50 billion valuation.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Who created the XRP Ledger?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  The XRP Ledger was created by David Schwartz (Ripple&apos;s CTO), Jed McCaleb (who later founded Stellar), and Arthur Britto. Development began in 2011 and the ledger went live in June 2012.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Who founded Ripple?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  The company (originally OpenCoin) was co-founded in September 2012 by Chris Larsen, Jed McCaleb, and Arthur Britto. Larsen served as the first CEO and now serves as Executive Chairman.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">Who is JoelKatz?</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  JoelKatz is the online handle of David Schwartz, Ripple&apos;s CTO and co-creator of the XRP Ledger. He is a well-known figure in the XRP community, frequently engaging with developers and community members on social media.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section>
            <h2 className="font-display text-2xl font-bold text-text-primary">Continue Learning</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
                { href: "/learn/history", label: "History & Timeline", desc: "2011 to present" },
                { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
                { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions" },
                { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
                { href: "/riddlers", label: "Riddlers & Lore", desc: "Community culture" },
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
          <h2 className="font-display text-xl font-bold text-text-primary">Explore What They&apos;re Building</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-2xl mx-auto">
            This leadership team has assembled $3.7B+ in acquisitions and built partnerships across 55+ countries. See the results of their strategy.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link href="/acquisitions" className="rounded-lg bg-xrp-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-xrp-accent/90">
              Acquisition Strategy →
            </Link>
            <Link href="/learn/partnerships" className="rounded-lg border border-surface-border bg-surface-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-all hover:bg-surface-elevated">
              View Partnerships
            </Link>
          </div>
        </section>

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com/leadership, LinkedIn, SEC court filings, CoinPaper, CryptoRank, company announcements.</em>
        </p>
      </div>
    </>
  );
}

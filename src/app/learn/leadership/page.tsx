import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
} from "@/components/learn/LearnPageShell";

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
    { question: "Who created the XRP Ledger?", answer: "The XRP Ledger was created by David Schwartz, Jed McCaleb, and Arthur Britto. Development began in 2011." },
    { question: "Who founded Ripple?", answer: "Ripple (originally OpenCoin) was co-founded in September 2012 by Chris Larsen, Jed McCaleb, and Arthur Britto." },
  ]),
];

const faqItems = [
  { q: "Who is the CEO of Ripple?", a: "Brad Garlinghouse has served as CEO since January 2017. He led Ripple through the SEC lawsuit, oversaw its expansion to 55+ countries, and guided the company to a ~$50 billion valuation." },
  { q: "Who created the XRP Ledger?", a: "The XRP Ledger was created by David Schwartz (Ripple's CTO), Jed McCaleb (who later founded Stellar), and Arthur Britto. Development began in 2011 and the ledger went live in June 2012." },
  { q: "Who founded Ripple?", a: "The company (originally OpenCoin) was co-founded in September 2012 by Chris Larsen, Jed McCaleb, and Arthur Britto. Larsen served as the first CEO and now serves as Executive Chairman." },
  { q: "Who is JoelKatz?", a: "JoelKatz is the online handle of David Schwartz, Ripple's CTO and co-creator of the XRP Ledger. He is a well-known figure in the XRP community." },
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
    description: "Brad Garlinghouse has served as CEO since January 2017, steering Ripple through its most consequential period — including the SEC lawsuit (where he was named as a co-defendant), the landmark Torres ruling, and the company's transformation into a $50 billion financial infrastructure giant.",
    background: "Former President of AOL's Consumer Applications, CEO of Hightail, and senior roles at Yahoo (author of the 'Peanut Butter Manifesto'). MBA from Harvard Business School.",
    xHandle: "bgarlinghouse",
    highlight: true,
  },
  {
    name: "Chris Larsen",
    title: "Executive Chairman & Co-Founder",
    description: "Chris Larsen co-founded OpenCoin (now Ripple) in September 2012 and served as its first CEO until 2016. A serial fintech entrepreneur, also named as a co-defendant in the SEC's 2020 lawsuit.",
    background: "Co-founded E-Loan (one of the first online mortgage companies) and Prosper Marketplace (peer-to-peer lending pioneer). Vocal advocate for US leadership in digital assets.",
    highlight: true,
  },
  {
    name: "David Schwartz",
    title: "Chief Technology Officer",
    description: "One of the three original creators of the XRP Ledger. Known as 'JoelKatz,' he designed the XRPL's consensus protocol and continues to oversee all technical strategy. Widely regarded as the foremost expert on the XRP Ledger's architecture.",
    background: "Cryptographer with experience dating to the 1980s. Deep expertise in distributed systems, consensus algorithms, and cryptographic protocols. Active on social media — his cryptic tweets are part of XRP lore.",
    xHandle: "JoelKatz",
    highlight: true,
  },
  {
    name: "Monica Long",
    title: "President",
    description: "Joined Ripple in September 2013 as one of the first dozen employees. Advanced from Director of Communications through VP and SVP to President. Leads Business, Product, and Engineering teams.",
    background: "One of the longest-tenured Ripple executives. Instrumental in enterprise sales strategy and expansion into stablecoins and custody.",
    highlight: true,
  },
  {
    name: "Stuart Alderoty",
    title: "Chief Legal Officer",
    description: "Played a central role in Ripple's SEC lawsuit defense, coordinating legal strategy through the multi-year case resulting in the July 2023 Torres ruling. An outspoken critic of 'regulation by enforcement' in crypto.",
    background: "Former General Counsel at HSBC North America and CIT Group, and Managing Partner at American Express. Deep financial services regulation experience.",
  },
  {
    name: "Jon Bilich",
    title: "Chief Financial Officer",
    description: "Promoted to CFO in January 2024 after joining Ripple in 2016. Oversees all financial planning, strategy, and reporting. Capital markets background aligns with Ripple's institutional push.",
    background: "Former Morgan Stanley investment banking and capital markets. Wall Street pedigree reflecting Ripple's institutional shift.",
  },
];

const seniorLeaders: { name: string; title: string; desc: string }[] = [
  { name: "Eric van Miltenburg", title: "SVP, Strategic Accounts", desc: "Leads key enterprise account relationships for Ripple Payments and custody solutions" },
  { name: "Eric Jeck", title: "SVP, Corporate Development", desc: "Drives M&A strategy — key role in $3.7B+ acquisition spree (Hidden Road, GTreasury, Palisade)" },
  { name: "Kiersten Hollars", title: "SVP, People & Communications", desc: "Oversees HR, workplace strategy, and comms across 40+ countries and ~1,400 employees" },
  { name: "Devraj Varadhan", title: "Head of Engineering", desc: "Leads engineering for Ripple Payments, custody, and XRPL-based products" },
  { name: "Jack McDonald", title: "SVP, Stablecoins", desc: "Former Standard Custody CEO, now leads RLUSD strategy. Acquisition-to-leadership pipeline." },
  { name: "Reece Merrick", title: "MD, Middle East & Africa", desc: "Leads expansion in key remittance and institutional adoption regions" },
];

const founders: { name: string; title: string; desc: string; bg: string }[] = [
  {
    name: "Arthur Britto",
    title: "Co-Creator, XRP Ledger",
    desc: "Co-created the XRPL alongside Schwartz and McCaleb. Designed XRP's economic model including the fixed 100B supply. Co-founded PolySign (Standard Custody, acquired by Ripple 2024).",
    bg: "Largely out of public eye since the ledger's creation. His technology was brought back under Ripple's roof through acquisition.",
  },
  {
    name: "Jed McCaleb",
    title: "Co-Creator, XRP Ledger (Departed 2013)",
    desc: "Initiated the XRP Ledger project, departed in 2013 and co-founded Stellar (XLM). His XRP holdings were governed by a structured sale agreement, completed in 2022.",
    bg: "Created Mt. Gox (first major Bitcoin exchange). One of the most influential figures in early cryptocurrency history.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Ripple"
          titleAccent="Leadership"
          subtitle="Fintech veterans, cryptography experts, Wall Street alumni — the team that guided Ripple through the SEC lawsuit and built a $50 billion financial infrastructure provider."
          breadcrumbLabel="Leadership"
        >
          <div className="mt-5"><AuthorByline date="2026-02-10" /></div>
        </LearnHero>

        <SectionNav items={[
          { id: "executive", label: "Executive Team" },
          { id: "senior", label: "Senior Leaders" },
          { id: "creators", label: "XRPL Creators" },
          { id: "talent", label: "Talent Strategy" },
          { id: "sec-crisis", label: "SEC Leadership" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-12 space-y-14">
          {/* EXECUTIVE TEAM */}
          <RevealSection id="executive">
            <h2 className="text-2xl font-bold text-text-primary">Executive Team</h2>
            <div className="mt-6 space-y-5">
              {executiveTeam.map((leader, i) => (
                <div
                  key={leader.name}
                  className={`rounded-xl border p-6  transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,180,255,0.04)] ${
                    leader.highlight
                      ? "border-xrp-accent/30 bg-gradient-to-r from-xrp-accent/5 to-transparent"
                      : "border-white/[0.06]/60 bg-black hover:border-xrp-accent/20"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-text-primary">{leader.name}</h3>
                    <span className="rounded-full border border-xrp-accent/20 bg-xrp-accent/10 px-3 py-0.5 text-xs font-semibold text-xrp-accent">
                      {leader.title}
                    </span>
                    {leader.xHandle ? (
                      <a href={`https://x.com/${leader.xHandle}`} target="_blank" rel="noopener noreferrer" className="text-xs text-text-secondary hover:text-xrp-accent transition-colors">
                        @{leader.xHandle} ↗
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-3 text-text-secondary leading-relaxed">{leader.description}</p>
                  <p className="mt-2 text-sm text-text-secondary/80"><strong className="text-text-primary">Background:</strong> {leader.background}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* SENIOR LEADERS */}
          <RevealSection id="senior" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Senior Leadership</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={seniorLeaders.map((l) => ({ title: l.name, desc: `${l.title} — ${l.desc}` }))} />
            </div>
          </RevealSection>

          {/* XRPL CREATORS */}
          <RevealSection id="creators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Ledger Co-Creators</h2>
            <p className="mt-2 text-text-secondary">The original architects of the XRP Ledger</p>
            <div className="mt-6 space-y-4">
              {founders.map((f) => (
                <div key={f.name} className="rounded-xl border border-purple-400/20 bg-purple-500/[0.03] p-6 ">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-text-primary">{f.name}</h3>
                    <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-0.5 text-xs font-semibold text-purple-400">{f.title}</span>
                  </div>
                  <p className="mt-3 text-text-secondary leading-relaxed">{f.desc}</p>
                  <p className="mt-2 text-sm text-text-secondary/80"><strong className="text-text-primary">Background:</strong> {f.bg}</p>
                </div>
              ))}
            </div>
          </RevealSection>

          {/* TALENT STRATEGY */}
          <RevealSection id="talent" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Does Ripple&apos;s Talent Strategy Signal?</h2>
            <div className="mt-4">
              <HighlightBox title="Building for Institutional Adoption" variant="accent" large>
                <p>Ripple&apos;s hiring patterns tell a clear story: <strong className="text-text-primary">deep into regulated financial services.</strong></p>
                <ul className="mt-3 list-disc pl-4 space-y-1">
                  <li>Executives from <strong className="text-text-primary">Morgan Stanley, HSBC, American Express, Goldman Sachs</strong></li>
                  <li>Legal leadership from <strong className="text-text-primary">top financial services firms</strong></li>
                  <li>In late 2024, <strong className="text-text-primary">75% of new job openings shifted to the U.S.</strong>, signaling confidence in post-SEC regulatory clarity</li>
                  <li>Acquisition hires placed directly into senior product roles</li>
                </ul>
                <p className="mt-3">This isn&apos;t a company hiring for retail hype. It&apos;s building for <strong className="text-text-primary">institutional adoption at scale</strong>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* SEC LEADERSHIP */}
          <RevealSection id="sec-crisis" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Leadership Through the SEC Lawsuit</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple&apos;s leadership was tested significantly by the SEC lawsuit (December 2020 – 2025). Rather than settling early, the team chose to fight — a decision that proved consequential when <strong className="text-text-primary">Judge Torres ruled in July 2023</strong> that XRP sold on public exchanges is not a security.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              This legal clarity benefited the broader crypto industry. The team&apos;s willingness to litigate has been cited as a turning point for crypto regulation in the United States. Read the full story in our <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">History &amp; Timeline</Link>.
            </p>
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
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
              { href: "/learn/history", label: "History & Timeline", desc: "2011 to present" },
              { href: "/acquisitions", label: "Acquisitions", desc: "$3.7B strategy deep dive" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
              { href: "/riddlers", label: "Riddlers & Lore", desc: "Community culture" },
              { href: "/learn/get-started", label: "How to Buy XRP", desc: "Start your XRP journey" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Convinced by the Team?"
          description="This leadership team has assembled $3.7B+ in acquisitions and built partnerships across 55+ countries. Ready to start accumulating XRP?"
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/acquisitions"
          secondaryLabel="Acquisition Strategy"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 10, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com/leadership, LinkedIn, SEC court filings, company announcements.</em>
        </p>
      </div>
    </>
  );
}

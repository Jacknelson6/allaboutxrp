import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Who Is Brad Garlinghouse? Ripple's CEO Profile",
  description: "Brad Garlinghouse profile — Ripple's CEO since 2017. Career history, SEC lawsuit leadership, and his vision for XRP's future.",
  keywords: ["Brad Garlinghouse", "Ripple CEO", "Brad Garlinghouse XRP", "Ripple CEO bio"],
  openGraph: {
    title: "Who Is Brad Garlinghouse? Ripple's CEO | AllAboutXRP",
    description: "Brad Garlinghouse — Ripple's CEO since 2017. Career, SEC lawsuit, and vision for XRP.",
    url: "https://allaboutxrp.com/learn/brad-garlinghouse",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brad Garlinghouse - Ripple CEO | AllAboutXRP",
    description: "Profile of Ripple's CEO Brad Garlinghouse — career history and XRP vision.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/brad-garlinghouse" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brad Garlinghouse",
  jobTitle: "Chief Executive Officer",
  worksFor: {
    "@type": "Organization",
    name: "Ripple Labs",
    url: "https://ripple.com",
  },
  description: "Brad Garlinghouse is the CEO of Ripple Labs, the company behind the XRP Ledger and RLUSD stablecoin. He has led Ripple since 2017 through the SEC lawsuit and into institutional crypto adoption.",
  url: "https://allaboutxrp.com/learn/brad-garlinghouse",
  sameAs: [
    "https://twitter.com/baboracles",
    "https://www.linkedin.com/in/bradgarlinghouse/",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "University of Kansas" },
    { "@type": "EducationalOrganization", name: "Harvard Business School" },
  ],
};

const schemas = [
  buildArticleSchema({
    headline: "Who Is Brad Garlinghouse? Ripple's CEO Profile",
    description: "Complete profile of Brad Garlinghouse — Ripple's CEO since 2017. Career history from AOL to Yahoo to Ripple, leadership through the SEC lawsuit, and his vision for XRP and institutional crypto.",
    url: "https://allaboutxrp.com/learn/brad-garlinghouse",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Brad Garlinghouse" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/brad-garlinghouse" }),
  personSchema,
  buildFAQSchema([
    { question: "Who is Brad Garlinghouse?", answer: "Brad Garlinghouse is the CEO of Ripple Labs, the company behind the XRP cryptocurrency, XRP Ledger, and RLUSD stablecoin. He has led Ripple since 2017, guiding the company through the SEC lawsuit, securing regulatory clarity for XRP, and expanding Ripple into a full-stack institutional crypto platform." },
    { question: "What is Brad Garlinghouse's background?", answer: "Garlinghouse graduated from the University of Kansas and earned his MBA from Harvard Business School. Before Ripple, he held senior roles at AOL, Hightail (CEO), and Yahoo — where he authored the famous 'Peanut Butter Manifesto' memo criticizing Yahoo's unfocused strategy." },
    { question: "What is the Peanut Butter Manifesto?", answer: "In 2006, while a Senior VP at Yahoo, Garlinghouse wrote an internal memo arguing that Yahoo was spreading its resources too thin — like peanut butter — across too many products instead of focusing. The memo leaked and became one of the most famous corporate memos in tech history." },
    { question: "How did Brad Garlinghouse handle the SEC lawsuit?", answer: "Garlinghouse chose to fight rather than settle, even as the lawsuit personally named him. He led Ripple through a 4+ year legal battle that resulted in a landmark ruling that XRP is not a security when sold on public exchanges — a precedent-setting victory for the entire crypto industry." },
    { question: "What is Brad Garlinghouse's vision for XRP?", answer: "Garlinghouse envisions XRP as the bridge currency for the global financial system, enabling instant cross-border payments at near-zero cost. He sees Ripple as an institutional crypto infrastructure company — not just a payments company — with XRP, RLUSD, custody, and prime brokerage forming a complete platform." },
  ]),
];

const faqItems = [
  { q: "Who is Brad Garlinghouse?", a: "CEO of Ripple Labs since 2017. Led Ripple through the SEC lawsuit, secured XRP's regulatory clarity, and expanded Ripple into a full-stack institutional crypto platform including payments, custody, stablecoins, and prime brokerage." },
  { q: "What is his background?", a: "University of Kansas grad, Harvard Business School MBA. Senior roles at AOL, CEO of Hightail, and SVP at Yahoo (where he wrote the famous 'Peanut Butter Manifesto'). Joined Ripple as COO in 2015, became CEO in 2017." },
  { q: "What is the Peanut Butter Manifesto?", a: "A 2006 internal Yahoo memo arguing the company was spreading resources too thin ('like peanut butter') across too many products. It leaked, became one of tech's most famous corporate memos, and showed Garlinghouse's strategic thinking." },
  { q: "How did he handle the SEC lawsuit?", a: "Chose to fight rather than settle despite being personally named. Led Ripple through 4+ years of litigation resulting in the landmark ruling that XRP is not a security on public exchanges — a precedent for the entire industry." },
  { q: "What is his vision for XRP?", a: "XRP as the bridge currency for global finance, enabling instant cross-border payments. Ripple as a full institutional crypto infrastructure company — payments + custody + stablecoin + prime brokerage." },
  { q: "Does Brad Garlinghouse own XRP?", a: "Yes. Garlinghouse has publicly stated he holds XRP. His XRP holdings were part of the SEC lawsuit allegations, though the court ultimately found no wrongdoing in his personal XRP sales." },
];

export default function BradGarlinghousePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Who Is Brad Garlinghouse?"
          titleAccent="Ripple's CEO Profile"
          subtitle="From Yahoo's Peanut Butter Manifesto to leading Ripple through crypto's biggest legal battle — the story of the man steering XRP's future."
          breadcrumbLabel="Brad Garlinghouse"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Brad Garlinghouse</strong> has been <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s</Link> CEO since 2017. A Harvard MBA with executive experience at AOL and Yahoo, he led Ripple through the <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC lawsuit</Link>, oversaw the $250M Metaco and <Link href="/learn/hidden-road-acquisition" className="text-xrp-accent underline decoration-xrp-accent/30">$1.25B Hidden Road</Link> acquisitions, and launched <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link>. He&apos;s transformed Ripple from a payments startup into an institutional crypto infrastructure company.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Full Name", value: "Bradley Kent Garlinghouse" },
          { label: "Role", value: "CEO, Ripple Labs" },
          { label: "CEO Since", value: "2017 (COO since 2015)" },
          { label: "Education", value: "U. of Kansas; Harvard Business School (MBA)" },
          { label: "Known For", value: "SEC lawsuit victory, Peanut Butter Manifesto" },
          { label: "X/Twitter", value: "@bgarlinghouse" },
        ]} />

        <SectionNav items={[
          { id: "early-career", label: "Early Career" },
          { id: "peanut-butter", label: "Peanut Butter Manifesto" },
          { id: "joining-ripple", label: "Joining Ripple" },
          { id: "sec-battle", label: "SEC Battle" },
          { id: "building-platform", label: "Building the Platform" },
          { id: "quotes", label: "Notable Quotes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Role" value="CEO" delay={0} />
          <StatPill label="Since" value="2017" delay={0.06} />
          <StatPill label="Education" value="Harvard MBA" delay={0.12} />
          <StatPill label="SEC Result" value="Victory" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="early-career">
            <h2 className="text-2xl font-bold text-text-primary">Early Career</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Brad Garlinghouse grew up in Topeka, Kansas and attended the <strong className="text-text-primary">University of Kansas</strong>, where he earned his bachelor&apos;s degree. He later earned his <strong className="text-text-primary">MBA from Harvard Business School</strong>.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              His career in tech began at <strong className="text-text-primary">AOL</strong>, where he served in leadership roles during the company&apos;s peak as the dominant internet platform. He moved through several roles in the tech industry, gaining experience in digital media, content platforms, and enterprise software.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Period", "Company", "Role"]}
                rows={[
                  ["Late 1990s-2000s", "AOL", "Senior leadership"],
                  ["2003-2008", "Yahoo", "SVP, Communications Products"],
                  ["2009-2012", "Hightail (YouSendIt)", "CEO"],
                  ["2012-2015", "Various boards/advisory", "Board member"],
                  ["2015-2017", "Ripple Labs", "COO"],
                  ["2017-present", "Ripple Labs", "CEO"],
                ]}
                highlightCol={2}
              />
            </div>
          </RevealSection>

          <RevealSection id="peanut-butter" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Peanut Butter Manifesto</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In November 2006, while serving as Senior VP at Yahoo, Garlinghouse wrote an internal memo titled <strong className="text-text-primary">&quot;The Peanut Butter Manifesto&quot;</strong>. In it, he argued that Yahoo was spreading its resources too thin — like peanut butter across too much bread — instead of making bold, focused strategic bets.
            </p>
            <div className="mt-6">
              <HighlightBox title="From the Manifesto" variant="accent">
                <p>&quot;I&apos;ve heard our strategy described as spreading peanut butter across the myriad opportunities that continue to evolve in the online world. The result: a thin layer of investment spread across everything we do and thus we focus on nothing in particular.&quot; — Brad Garlinghouse, 2006</p>
              </HighlightBox>
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The memo leaked to the press and became one of the most famous corporate documents in tech history. It cemented Garlinghouse&apos;s reputation as a clear-eyed strategic thinker willing to challenge the status quo — a trait he&apos;d bring to Ripple a decade later.
            </p>
          </RevealSection>

          <RevealSection id="joining-ripple" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Joining Ripple</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Garlinghouse joined Ripple as <strong className="text-text-primary">COO in 2015</strong>, when the company was still finding its identity. Under his operational leadership, Ripple refined its focus on cross-border payments and institutional adoption of XRP.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              He became <strong className="text-text-primary">CEO in 2017</strong>, just as crypto entered its historic bull run. Under his leadership, Ripple grew from a small payments startup to one of the most important companies in blockchain, signing over 300 financial institution partnerships across 40+ countries.
            </p>
            <div className="mt-6">
              <GlowCard
                title="Under Garlinghouse"
                value="300+ Partners"
                subtitle="Financial institution partnerships across 40+ countries"
              />
            </div>
          </RevealSection>

          <RevealSection id="sec-battle" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Leading Through the SEC Battle</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In December 2020, the SEC sued Ripple, Garlinghouse, and co-founder Chris Larsen for allegedly selling XRP as an unregistered security. <strong className="text-text-primary">Garlinghouse was personally named</strong> in the lawsuit.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While other crypto companies settled or retreated, Garlinghouse chose to fight. His decision to litigate rather than settle became a defining moment for both Ripple and the broader crypto industry.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "December 2020", desc: "SEC files lawsuit. Many expected Ripple to settle. Garlinghouse publicly declared Ripple would fight — and fight to win." },
                { title: "2021-2023", desc: "Years of intense litigation. Garlinghouse maintained public confidence while Ripple's legal team built the defense." },
                { title: "July 2023", desc: "Judge Torres rules XRP is NOT a security when sold on public exchanges — a landmark victory for XRP and the entire crypto industry." },
                { title: "2024-2025", desc: "Case moves toward final resolution. The ruling established critical legal precedent for how cryptocurrencies are classified in the US." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Garlinghouse on Fighting" variant="accent">
                <p>&quot;We felt very confident in our legal position. And I think the right thing to do — not just for Ripple and XRP — but for the broader crypto industry, was to stand and fight.&quot;</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="building-platform" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Building the Institutional Platform</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Under Garlinghouse&apos;s leadership, Ripple has transformed from a payments company into a <strong className="text-text-primary">full-stack institutional crypto platform</strong> through a series of strategic acquisitions and product launches:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Year", "Move", "Significance"]}
                rows={[
                  ["2023", "Metaco acquisition ($250M)", "Enterprise custody for banks"],
                  ["2024", "RLUSD launch (NYDFS approved)", "Regulated stablecoin"],
                  ["2025", "Hidden Road acquisition ($1.25B)", "Prime brokerage infrastructure"],
                  ["Ongoing", "XRPL ecosystem development", "DeFi, MPTs, credentials, oracles"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="quotes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Notable Quotes</h2>
            <div className="mt-6 space-y-4">
              <HighlightBox title="On XRP's Future" variant="info">
                <p>&quot;I&apos;m very long XRP. I think the utility of XRP as a bridge currency in cross-border payments is going to continue to grow dramatically.&quot;</p>
              </HighlightBox>
              <HighlightBox title="On Crypto Regulation" variant="info">
                <p>&quot;The United States needs regulatory clarity for crypto. You can&apos;t regulate by enforcement — you need clear rules that allow innovation while protecting consumers.&quot;</p>
              </HighlightBox>
              <HighlightBox title="On Ripple's Mission" variant="info">
                <p>&quot;We&apos;re building the infrastructure for the Internet of Value. The ability to move money as easily as information — that&apos;s what we&apos;re solving for.&quot;</p>
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
              { href: "/learn/david-schwartz", label: "David Schwartz", desc: "XRPL's chief architect" },
              { href: "/learn/what-is-ripple", label: "What Is Ripple?", desc: "Company overview" },
              { href: "/learn/sec-vs-ripple", label: "SEC vs Ripple", desc: "The full lawsuit story" },
              { href: "/learn/hidden-road-acquisition", label: "Hidden Road", desc: "Prime brokerage acquisition" },
              { href: "/learn/ripple-stablecoin-strategy", label: "Stablecoin Strategy", desc: "RLUSD and beyond" },
              { href: "/learn/what-is-xrp", label: "What Is XRP?", desc: "XRP explained" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Learn About Ripple"
          description="Brad Garlinghouse leads one of the most important companies in crypto. Learn about Ripple and XRP."
          primaryHref="/learn/what-is-ripple"
          primaryLabel="What Is Ripple? →"
          secondaryHref="/learn/what-is-xrp"
          secondaryLabel="What Is XRP?"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, Bloomberg, WSJ, public interviews.</em>
        </p>
      </div>
    </>
  );
}

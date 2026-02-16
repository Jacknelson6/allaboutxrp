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
  title: "Who Is David Schwartz? XRP Ledger's Chief Architect",
  description: "David Schwartz profile — the original architect of the XRP Ledger. His background, contributions, and ongoing role at Ripple.",
  keywords: ["David Schwartz", "David Schwartz XRP", "XRPL creator", "CTO Ripple", "Joel Katz"],
  openGraph: {
    title: "Who Is David Schwartz? XRPL Architect | AllAboutXRP",
    description: "David Schwartz — the original architect of the XRP Ledger. Background, contributions, and role at Ripple.",
    url: "https://allaboutxrp.com/learn/david-schwartz",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Schwartz - XRPL Creator | AllAboutXRP",
    description: "Profile of the chief architect who built the XRP Ledger.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/david-schwartz" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Schwartz",
  alternateName: "Joel Katz",
  jobTitle: "Chief Technology Officer",
  worksFor: {
    "@type": "Organization",
    name: "Ripple Labs",
    url: "https://ripple.com",
  },
  description: "David Schwartz is the CTO of Ripple Labs and the original architect of the XRP Ledger. Known online as 'JoelKatz', he designed the XRPL consensus protocol and has guided its technical evolution since 2011.",
  url: "https://allaboutxrp.com/learn/david-schwartz",
  sameAs: [
    "https://twitter.com/JoelKatz",
    "https://www.linkedin.com/in/davidaschwartz/",
  ],
};

const schemas = [
  buildArticleSchema({
    headline: "Who Is David Schwartz? XRP Ledger's Chief Architect",
    description: "Complete profile of David Schwartz — Ripple's CTO and original architect of the XRP Ledger. Career history from cryptography patents to building one of the most important blockchains in existence.",
    url: "https://allaboutxrp.com/learn/david-schwartz",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "David Schwartz" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/david-schwartz" }),
  personSchema,
  buildFAQSchema([
    { question: "Who is David Schwartz?", answer: "David Schwartz is the Chief Technology Officer (CTO) of Ripple Labs and the original architect of the XRP Ledger. Known online by the pseudonym 'JoelKatz', he designed the XRPL's consensus protocol in 2011 and has guided its technical evolution ever since. He's one of the three original creators of the XRP Ledger alongside Jed McCaleb and Arthur Britto." },
    { question: "Why is David Schwartz called Joel Katz?", answer: "JoelKatz was David Schwartz's online pseudonym used on various tech forums and communities before his identity became publicly known through Ripple. The pseudonym has become so well-known in the XRP community that many fans and community members still refer to him as JoelKatz." },
    { question: "What did David Schwartz do before Ripple?", answer: "Before Ripple, Schwartz was a software engineer and cryptographer. He held patents in areas including multi-level distributed computer network systems and was involved in early work on distributed computing, cryptographic systems, and cloud storage. He worked at various technology companies including WebMaster Incorporated." },
    { question: "What is David Schwartz's role at Ripple?", answer: "As CTO, Schwartz oversees Ripple's technology strategy and the technical development of the XRP Ledger. He's deeply involved in XRPL protocol design, amendment proposals, and ensuring the ledger evolves to meet institutional and developer needs. He also serves as a bridge between the technical community and Ripple's business goals." },
    { question: "Did David Schwartz create Bitcoin?", answer: "No. While some have speculated about his involvement due to his early cryptography work, Schwartz has consistently denied being Satoshi Nakamoto. He has said he became aware of Bitcoin around 2011 and was inspired to create a better, more efficient alternative — which became the XRP Ledger." },
  ]),
];

const faqItems = [
  { q: "Who is David Schwartz?", a: "CTO of Ripple Labs and original architect of the XRP Ledger. Known online as 'JoelKatz'. One of three XRPL creators alongside Jed McCaleb and Arthur Britto. Designed the consensus protocol in 2011." },
  { q: "Why is he called Joel Katz?", a: "JoelKatz was his online pseudonym on tech forums before Ripple made him publicly known. The XRP community still widely refers to him by this name." },
  { q: "What did he do before Ripple?", a: "Software engineer and cryptographer. Held patents in distributed computing and cryptographic systems. Worked at technology companies including WebMaster Incorporated." },
  { q: "What is his role at Ripple?", a: "As CTO, he oversees technology strategy and XRPL development. Deeply involved in protocol design, amendments, and bridging the technical community with Ripple's business goals." },
  { q: "Did he create Bitcoin?", a: "No. He's consistently denied being Satoshi Nakamoto. He became aware of Bitcoin around 2011 and was inspired to create a more efficient alternative — the XRP Ledger." },
  { q: "Is he active in the XRP community?", a: "Very much so. Schwartz is one of the most accessible CTOs in crypto, regularly engaging with the community on X/Twitter (@JoelKatz), answering technical questions, and sharing insights about XRPL development." },
];

export default function DavidSchwartzPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Who Is David Schwartz?"
          titleAccent="XRP Ledger's Chief Architect"
          subtitle="The cryptographer who designed one of the world's most important blockchains — and still guides its evolution today."
          breadcrumbLabel="David Schwartz"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">David Schwartz</strong> (aka &quot;JoelKatz&quot;) is Ripple&apos;s CTO and the original architect of the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. A cryptographer and distributed systems expert, he designed the <Link href="/learn/xrpl-consensus-mechanism" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL consensus protocol</Link> in 2011 — creating a blockchain that settles in 3-5 seconds without mining. He co-created the XRPL with Jed McCaleb and Arthur Britto.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Full Name", value: "David Schwartz" },
          { label: "Alias", value: "JoelKatz" },
          { label: "Role", value: "CTO, Ripple Labs" },
          { label: "Key Achievement", value: "Designed XRP Ledger (2011)" },
          { label: "Co-Creators", value: "Jed McCaleb, Arthur Britto" },
          { label: "X/Twitter", value: "@JoelKatz" },
        ]} />

        <SectionNav items={[
          { id: "background", label: "Background" },
          { id: "creating-xrpl", label: "Creating the XRPL" },
          { id: "technical-contributions", label: "Contributions" },
          { id: "community-engagement", label: "Community" },
          { id: "quotes", label: "Notable Quotes" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Role" value="CTO" delay={0} />
          <StatPill label="XRPL Built" value="2011" delay={0.06} />
          <StatPill label="Alias" value="JoelKatz" delay={0.12} />
          <StatPill label="Uptime" value="12+ years" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="background">
            <h2 className="text-2xl font-bold text-text-primary">Background & Early Career</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              David Schwartz&apos;s background is in <strong className="text-text-primary">cryptography and distributed computing</strong> — the exact intersection of skills needed to build a blockchain. Before the term &quot;blockchain&quot; even existed, Schwartz was working on cryptographic protocols, distributed network architectures, and secure communication systems.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              He holds patents related to <strong className="text-text-primary">multi-level distributed computer networks</strong> and worked at various technology companies, including WebMaster Incorporated. His deep expertise in distributed systems would prove foundational when he turned his attention to cryptocurrency.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Cryptography Expert", desc: "Deep background in cryptographic protocols, key management, and secure systems — long before Bitcoin existed." },
                { title: "Distributed Systems", desc: "Patented work in distributed computing architectures — the core challenge of any blockchain system." },
                { title: "Software Engineering", desc: "Decades of software development experience, from low-level systems programming to network architecture." },
                { title: "Early Crypto Pioneer", desc: "Discovered Bitcoin around 2011 and immediately saw both its potential and its limitations." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="creating-xrpl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Creating the XRP Ledger</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              When Schwartz discovered Bitcoin around 2011, he recognized its revolutionary potential but also its <strong className="text-text-primary">fundamental limitations</strong>: slow transaction speeds, enormous energy consumption, and an inability to scale for global payments. He set out to build something better.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "2011: The Vision", desc: "Schwartz began designing a new consensus algorithm that could achieve Bitcoin's decentralization without its energy waste and slow confirmation times." },
                { title: "2011-2012: Building", desc: "Working with Jed McCaleb and Arthur Britto, Schwartz built the XRP Ledger from scratch — including the novel consensus protocol that would become its defining feature." },
                { title: "2012: Launch", desc: "The XRP Ledger launched with 100 billion XRP pre-mined (no mining needed). The consensus protocol achieved finality in 3-5 seconds — revolutionary for its time." },
                { title: "2012-2013: OpenCoin → Ripple", desc: "The company initially called OpenCoin was renamed Ripple Labs. Schwartz continued as chief cryptographer, eventually becoming CTO." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <GlowCard
                title="The Result"
                value="Zero Downtime Since 2012"
                subtitle="The XRP Ledger has processed 90M+ ledgers without a single security breach"
              />
            </div>
          </RevealSection>

          <RevealSection id="technical-contributions" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Technical Contributions</h2>
            <div className="mt-6">
              <DataTable
                headers={["Contribution", "Significance"]}
                rows={[
                  ["XRPL Consensus Protocol", "Novel Byzantine agreement algorithm — 3-5 second finality without mining"],
                  ["Built-in DEX", "Protocol-native decentralized exchange with order book (2012)"],
                  ["Escrow System", "Time-locked and conditional XRP holds built into the protocol"],
                  ["Payment Channels", "Off-ledger payment streaming for micropayments"],
                  ["AMM Integration (XLS-30)", "Guided integration of native AMM with existing order book DEX"],
                  ["Multi-Purpose Tokens", "New tokenization standard for complex real-world assets"],
                  ["Technical Governance", "Stewarding the amendment process for protocol upgrades"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="community-engagement" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Community Engagement</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              What sets David Schwartz apart from most crypto CTOs is his <strong className="text-text-primary">extraordinary accessibility</strong>. As @JoelKatz on X/Twitter, he regularly:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Answers Technical Questions", desc: "Schwartz personally explains complex XRPL concepts to community members, from beginners to developers." },
                { title: "Participates in Debates", desc: "Engages in thoughtful discussions about XRPL design decisions, trade-offs, and future directions." },
                { title: "Shares Development Updates", desc: "Provides early insight into upcoming XRPL features and amendments before official announcements." },
                { title: "Defends with Humor", desc: "Known for wit and humor in addressing FUD, conspiracy theories, and misconceptions about XRP." },
              ]} />
            </div>
            <div className="mt-6">
              <HighlightBox title="Most Accessible CTO in Crypto" variant="accent">
                <p>Few CTOs of major crypto projects engage as directly and personally with their community as Schwartz. His willingness to explain, debate, and connect has earned him enormous respect in the XRP community and beyond.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="quotes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Notable Quotes</h2>
            <div className="mt-6 space-y-4">
              <HighlightBox title="On Building the XRPL" variant="info">
                <p>&quot;We wanted to take the revolutionary idea of Bitcoin — a decentralized, censorship-resistant digital asset — and solve its practical problems: speed, cost, and energy consumption.&quot;</p>
              </HighlightBox>
              <HighlightBox title="On Consensus vs Mining" variant="info">
                <p>&quot;Proof of work is an incredible innovation, but using the energy equivalent of a small country to process transactions isn&apos;t the future. Consensus gives you the same security guarantees without the waste.&quot;</p>
              </HighlightBox>
              <HighlightBox title="On Decentralization" variant="info">
                <p>&quot;Decentralization isn&apos;t binary — it&apos;s a spectrum. What matters is whether any single entity can control, stop, or censor the network. The XRPL passes that test.&quot;</p>
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
              { href: "/learn/brad-garlinghouse", label: "Brad Garlinghouse", desc: "Ripple's CEO" },
              { href: "/learn/what-is-ripple", label: "What Is Ripple?", desc: "Company overview" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How the XRPL works" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "The protocol he designed" },
              { href: "/learn/xrpl-decentralization", label: "XRPL Decentralization", desc: "Network decentralization" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Validator network" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore the Technology He Built"
          description="David Schwartz designed the XRP Ledger. Understand the technology behind it."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Explained →"
          secondaryHref="/learn/xrpl-consensus-mechanism"
          secondaryLabel="Consensus Protocol"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, public interviews, @JoelKatz on X/Twitter, patent filings.</em>
        </p>
      </div>
    </>
  );
}

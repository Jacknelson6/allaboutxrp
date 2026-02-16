import { Metadata } from "next";
import Image from "next/image";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ripple Software Stack: Complete Guide to Ripple's Products",
  description:
    "A complete overview of Ripple's software stack — from RippleNet and ODL to Ripple Prime, RLUSD, Custody, and Treasury. How all the pieces fit together and benefit XRP.",
  openGraph: {
    title: "Ripple Software Stack Overview | AllAboutXRP",
    description: "The evolution of Ripple's products and how each piece benefits XRP — from early payment protocols to a full-stack financial platform.",
    url: "https://allaboutxrp.com/learn/ripple-software-stack",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Software Stack | AllAboutXRP",
    description: "Every Ripple product explained and how they connect to XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/ripple-software-stack" },
};

const schemas = [
  buildArticleSchema({
    headline: "Ripple Software Stack: Complete Guide to Ripple's Products",
    description: "A comprehensive overview of Ripple's full product suite and how each component benefits XRP.",
    url: "https://allaboutxrp.com/learn/ripple-software-stack",
    datePublished: "2026-02-12",
    dateModified: "2026-02-12",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple Software Stack" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/ripple-software-stack" }),
  buildFAQSchema([
    { question: "What products does Ripple offer?", answer: "Ripple offers RippleNet (payments), On-Demand Liquidity (XRP bridge), Ripple Prime (institutional brokerage), Ripple Custody (Metaco), RLUSD (stablecoin), Ripple Treasury (GTreasury), and a CBDC platform." },
    { question: "How do Ripple's products benefit XRP?", answer: "Each product drives XRP utility: ODL uses XRP as a bridge currency, Ripple Prime settles on XRPL, RLUSD lives on XRPL, and Ripple Custody supports XRP. More products = more XRP demand." },
  ]),
];

const faqItems = [
  { q: "What products does Ripple offer?", a: "Ripple offers RippleNet (global payments), On-Demand Liquidity (XRP-powered settlement), Ripple Prime (institutional brokerage), Ripple Custody (Metaco), RLUSD (stablecoin), Ripple Treasury (GTreasury), and a CBDC platform." },
  { q: "How do Ripple's products benefit XRP?", a: "Each product drives XRP utility: ODL uses XRP as a bridge currency, Ripple Prime settles on XRPL, RLUSD lives on XRPL, Ripple Custody supports XRP. More products = more XRP ecosystem demand." },
  { q: "What happened to xCurrent, xRapid, and xVia?", a: "They were consolidated into RippleNet in 2019. xRapid became On-Demand Liquidity (ODL). xCurrent and xVia were merged into the core RippleNet product." },
  { q: "How much has Ripple spent on acquisitions?", a: "Over $3.7 billion — including Hidden Road ($1.25B), GTreasury ($1B), Metaco ($250M), Rail ($200M), Standard Custody ($100M), and Palisade." },
  { q: "Is Ripple just a payments company?", a: "Not anymore. Ripple has evolved from a payments company into a full-stack financial infrastructure provider covering payments, custody, brokerage, treasury, stablecoins, and CBDCs." },
];

export default function RippleSoftwareStackPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Ripple"
          titleAccent="Software Stack"
          subtitle="From a simple payment protocol to a $50B full-stack financial infrastructure company — here's how every Ripple product fits together and drives value to XRP."
          breadcrumbLabel="Ripple Software Stack"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-12" />
            <LastUpdated date="February 12, 2026" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/ripple-software-stack-hero.jpg"
            alt="Ripple's technology and software architecture"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <TLDRBox>
          <p>Ripple has evolved from a single payment protocol into a <strong className="text-text-primary">full-stack financial infrastructure company</strong>. Its products span payments (<Link href="/learn/ripplenet" className="text-xrp-accent underline decoration-xrp-accent/30">RippleNet</Link>), liquidity (<Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link>), brokerage (<Link href="/learn/ripple-prime" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Prime</Link>), stablecoins (<Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link>), custody, treasury, and CBDCs. Every piece connects back to the XRP Ledger.</p>
        </TLDRBox>

        <SectionNav items={[
          { id: "evolution", label: "Evolution" },
          { id: "products", label: "All Products" },
          { id: "how-connected", label: "How They Connect" },
          { id: "xrp-benefit", label: "XRP Benefits" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          {/* EVOLUTION */}
          <RevealSection id="evolution">
            <h2 className="text-2xl font-bold text-text-primary">The Evolution of Ripple&apos;s Software</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "2012–2014: Payment Protocol", desc: "Started as OpenCoin/Ripple Labs with a simple payment protocol for banks. Early XRPL development." },
                { title: "2015–2017: Enterprise Products", desc: "Launched xCurrent (messaging), xRapid (XRP liquidity), and xVia (API). Focused on bank partnerships." },
                { title: "2018–2019: RippleNet Unification", desc: "Consolidated all products under RippleNet. xRapid renamed to On-Demand Liquidity (ODL). 300+ partners onboarded." },
                { title: "2020–2023: Custody & Compliance", desc: "Acquired Metaco ($250M) for institutional custody. Navigated SEC lawsuit. Built regulatory license portfolio." },
                { title: "2024: Stablecoin Launch", desc: "RLUSD stablecoin launched on XRPL and Ethereum. NYDFS-approved. BNY Mellon as custodian." },
                { title: "2025: Full-Stack Finance", desc: "Hidden Road ($1.25B), GTreasury ($1B), Rail ($200M), Palisade acquired. Ripple becomes a complete financial infrastructure provider." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ALL PRODUCTS */}
          <RevealSection id="products" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple&apos;s Complete Product Suite</h2>
            <div className="mt-6">
              <DataTable
                headers={["Product", "What It Does", "Uses XRP/XRPL?", "Deep Dive"]}
                rows={[
                  ["RippleNet", "Global payment network — 300+ institutions, 55+ countries", "ODL uses XRP", "/learn/ripplenet"],
                  ["On-Demand Liquidity", "Instant cross-border settlement via XRP bridge", "Yes — core use", "/learn/on-demand-liquidity"],
                  ["Ripple Prime", "Institutional prime brokerage — $3T+ annual clearing", "Settlement on XRPL", "/learn/ripple-prime"],
                  ["RLUSD", "USD-backed stablecoin — NYDFS approved, $1.26B market cap", "Lives on XRPL + Ethereum", "/learn/rlusd"],
                  ["Ripple Custody", "Institutional digital asset custody (via Metaco)", "Supports XRP custody", "—"],
                  ["Ripple Treasury", "Enterprise treasury management (via GTreasury)", "Blockchain integration", "—"],
                  ["CBDC Platform", "Central bank digital currency pilot programs", "Built on XRPL tech", "—"],
                ]}
                highlightCol={2}
              />
            </div>
          </RevealSection>

          {/* HOW THEY CONNECT */}
          <RevealSection id="how-connected" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How All the Pieces Fit Together</h2>
            <div className="mt-5">
              <HighlightBox title="The Ripple Flywheel" variant="accent" large>
                <p className="mb-3">Ripple&apos;s products create a self-reinforcing ecosystem:</p>
                <p><strong className="text-text-primary">RippleNet</strong> brings institutions → <strong className="text-text-primary">ODL</strong> gives them XRP liquidity → <strong className="text-text-primary">RLUSD</strong> provides stablecoin settlement → <strong className="text-text-primary">Ripple Custody</strong> secures their assets → <strong className="text-text-primary">Ripple Prime</strong> handles their trading → <strong className="text-text-primary">Ripple Treasury</strong> manages their cash.</p>
                <p className="mt-3">Each product makes the others more valuable. A bank using RippleNet for payments can also custody assets with Ripple, trade via Ripple Prime, and use RLUSD for settlement — all on the XRP Ledger.</p>
              </HighlightBox>
            </div>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Payments Layer", desc: "RippleNet + ODL handle the movement of money across borders using XRP as the bridge." },
                { title: "Custody Layer", desc: "Ripple Custody (Metaco + Standard Custody + Palisade) secures digital assets for institutions." },
                { title: "Trading Layer", desc: "Ripple Prime provides institutional-grade brokerage, clearing, and settlement on XRPL." },
                { title: "Stablecoin Layer", desc: "RLUSD provides a stable settlement asset on XRPL, complementing XRP for different use cases." },
                { title: "Treasury Layer", desc: "GTreasury brings enterprise cash management with blockchain settlement integration." },
                { title: "Infrastructure Layer", desc: "Rail provides next-gen stablecoin payment infrastructure connecting all the pieces." },
              ]} />
            </div>
          </RevealSection>

          {/* XRP BENEFIT */}
          <RevealSection id="xrp-benefit" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Each Product Benefits XRP</h2>
            <div className="mt-5">
              <DataTable
                headers={["Product", "XRP Benefit"]}
                rows={[
                  ["RippleNet", "Onboards institutions to the XRP ecosystem; gateway to ODL adoption"],
                  ["ODL", "Direct XRP demand — every transaction buys and sells XRP"],
                  ["Ripple Prime", "XRPL becomes settlement layer for $3T+ in institutional clearing"],
                  ["RLUSD", "Drives XRPL transaction volume; RLUSD/XRP pairs add liquidity"],
                  ["Ripple Custody", "Makes it easy for institutions to hold XRP safely"],
                  ["Ripple Treasury", "Enterprises can integrate XRP into cash management"],
                  ["CBDC Platform", "Central banks build on XRPL technology, increasing network credibility"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-5">
              <HighlightBox title="The Bottom Line" variant="accent">
                <p>No other blockchain ecosystem has this level of institutional product coverage. Every product Ripple builds is another on-ramp for institutions to the XRP Ledger — and every institution on XRPL increases the network&apos;s value and XRP&apos;s utility.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ACQUISITION SPEND */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Building the Stack: $3.7B+ in Acquisitions</h2>
            <div className="mt-5">
              <DataTable
                headers={["Acquisition", "Year", "Price", "Product It Powers"]}
                rows={[
                  ["Hidden Road", "2025", "$1.25B", "Ripple Prime"],
                  ["GTreasury", "2025", "$1.0B", "Ripple Treasury"],
                  ["Metaco", "2023", "$250M", "Ripple Custody"],
                  ["Rail", "2025", "$200M", "Stablecoin Infrastructure"],
                  ["Standard Custody", "2024", "$100M", "Ripple Custody"],
                  ["Palisade", "2025", "Undisclosed", "Regulatory/Compliance"],
                ]}
                highlightCol={2}
              />
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              Full details on our <Link href="/learn/acquisitions" className="text-xrp-accent underline decoration-xrp-accent/30">acquisitions page</Link>.
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
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP as bridge currency" },
              { href: "/learn/ripple-prime", label: "Ripple Prime", desc: "Institutional brokerage" },
              { href: "/learn/rlusd", label: "RLUSD Stablecoin", desc: "USD-backed on XRPL" },
              { href: "/learn/acquisitions", label: "Acquisitions", desc: "$3.7B strategy" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "Company overview" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete XRP guide" },
              { href: "/learn/partnerships", label: "Partnerships", desc: "Who uses Ripple" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Full-Stack Financial Infrastructure"
          description="Ripple isn't just a payments company anymore — it's building the complete financial stack on the XRP Ledger."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/what-is-ripple"
          secondaryLabel="About Ripple"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 12, 2026. Written by the AllAboutXRP Editorial Team. Sources: Ripple.com, BusinessWire, Financial Times, acquisition announcements.</em>
        </p>
      </div>
    </>
  );
}

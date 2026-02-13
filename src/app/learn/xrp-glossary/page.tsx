import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  TLDRBox, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Glossary: A-Z of XRP & XRPL Terms",
  description:
    "Complete glossary of XRP and XRPL terms — from AMM to X-address. Every key concept explained simply for beginners and experts.",
  keywords: ["XRP glossary", "XRP terms", "XRPL glossary", "cryptocurrency glossary XRP"],
  openGraph: {
    title: "XRP Glossary: A-Z of XRP & XRPL Terms | AllAboutXRP",
    description:
      "The definitive glossary of XRP and XRP Ledger terminology — every key term explained clearly.",
    url: "https://allaboutxrp.com/learn/xrp-glossary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Glossary: A-Z Terms | AllAboutXRP",
    description:
      "Every XRP and XRPL term explained — from AMM to X-address. The complete glossary.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-glossary",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Glossary: A-Z of XRP & XRPL Terms",
    description: "A comprehensive glossary covering every important XRP and XRP Ledger term, from AMM to X-address.",
    url: "https://allaboutxrp.com/learn/xrp-glossary",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Glossary" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-glossary" }),
];

interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  link?: { href: string; label: string };
}

const glossaryTerms: GlossaryTerm[] = [
  { id: "amm", term: "AMM (Automated Market Maker)", definition: "A native XRPL feature that enables decentralized token swaps using liquidity pools instead of order books. Users can provide liquidity to AMM pools and earn fees from trades. Added to the XRPL via the AMM amendment.", link: { href: "/learn/xrp-ledger-explained", label: "Learn about the XRPL" } },
  { id: "amendment", term: "Amendment", definition: "A proposed change to the XRP Ledger protocol. Amendments require approval by at least 80% of validators over a two-week period before activating. This ensures no single entity can unilaterally change the network rules." },
  { id: "base-reserve", term: "Base Reserve", definition: "The minimum amount of XRP required to activate and maintain an account on the XRP Ledger. Currently set at 10 XRP. This reserve cannot be spent and serves as anti-spam protection." },
  { id: "bridge", term: "Bridge", definition: "Infrastructure that enables assets to move between the XRP Ledger and other blockchains (e.g., Ethereum, EVM sidechains). The XRPL supports cross-chain bridges for interoperability." },
  { id: "burn", term: "Burn", definition: "The permanent destruction of XRP through transaction fees. Every XRPL transaction burns a small amount of XRP (typically 0.00001 XRP) that can never be recovered, making XRP deflationary over time.", link: { href: "/learn/xrp-supply-explained", label: "XRP Supply Explained" } },
  { id: "cbdc", term: "CBDC (Central Bank Digital Currency)", definition: "A digital currency issued by a central bank. Ripple is working with 20+ central banks globally on CBDC pilots, many of which leverage XRPL technology for issuance and settlement." },
  { id: "clawback", term: "Clawback", definition: "An XRPL feature allowing token issuers to reclaim issued tokens from holder accounts. Primarily designed for regulatory compliance, enabling stablecoin issuers and regulated entities to meet legal requirements." },
  { id: "consensus", term: "Consensus (Federated Consensus Protocol)", definition: "The mechanism by which XRPL validators agree on the state of the ledger. Unlike proof-of-work (mining) or proof-of-stake, the XRPL uses a unique federated consensus where trusted validators reach agreement every 3-5 seconds.", link: { href: "/learn/xrp-ledger-explained", label: "XRPL Consensus Explained" } },
  { id: "dex", term: "DEX (Decentralized Exchange)", definition: "The XRP Ledger has a built-in decentralized exchange with a native order book. Any token issued on the XRPL can be traded directly on the DEX without third-party smart contracts or intermediaries." },
  { id: "drops", term: "Drops", definition: "The smallest unit of XRP. 1 XRP = 1,000,000 drops. Transaction fees are measured in drops — the standard fee is 10 drops (0.00001 XRP). Similar to how Bitcoin has satoshis." },
  { id: "escrow", term: "Escrow", definition: "A native XRPL feature that locks XRP with time-based or condition-based release criteria enforced by the protocol. Ripple locked 55 billion XRP in escrow in 2017 to provide supply predictability. About 33.9 billion remains in escrow.", link: { href: "/learn/escrow", label: "XRP Escrow Deep Dive" } },
  { id: "flare", term: "Flare", definition: "An EVM-compatible Layer 1 blockchain that airdropped FLR tokens to XRP holders. Flare aims to bring smart contract functionality to assets like XRP through its State Connector and FTSO systems." },
  { id: "gateway", term: "Gateway", definition: "An entity that issues IOUs (tokens) on the XRP Ledger representing real-world assets. Gateways serve as the bridge between the XRPL and traditional financial systems, similar to on-ramps in other crypto ecosystems." },
  { id: "hooks", term: "Hooks", definition: "Smart contract-like functionality for the XRP Ledger, currently in development on the Hooks amendment and Xahau sidechain. Hooks allow small pieces of code to execute before or after XRPL transactions." },
  { id: "ious", term: "IOUs (Issued Currencies / Trust Line Balances)", definition: "Tokens issued on the XRP Ledger by a gateway or issuer, representing any asset — fiat currencies, stablecoins, commodities, etc. IOUs require a trust line between the holder and the issuer." },
  { id: "ledger", term: "Ledger", definition: "A snapshot of the entire state of the XRP Ledger at a point in time. A new ledger is produced every 3-5 seconds through the consensus process. Over 90 million ledgers have been closed since 2012." },
  { id: "memo", term: "Memo", definition: "An optional data field attached to XRPL transactions. Memos can contain messages, references, or metadata. Often used by exchanges to identify deposits (destination tags serve a similar but distinct purpose)." },
  { id: "nft", term: "NFT (Non-Fungible Token / XLS-20)", definition: "Native NFT support on the XRPL, enabled by the XLS-20 amendment in October 2022. Unlike Ethereum NFTs, XRPL NFTs are minted and traded natively without smart contracts, with built-in royalty enforcement." },
  { id: "odl", term: "ODL (On-Demand Liquidity)", definition: "Ripple's flagship product that uses XRP as a bridge currency for real-time cross-border payments. ODL eliminates the need for pre-funded nostro/vostro accounts by converting between currencies via XRP in seconds.", link: { href: "/learn/on-demand-liquidity", label: "ODL Explained" } },
  { id: "owner-reserve", term: "Owner Reserve", definition: "An additional XRP reserve required for each object an account owns on the XRPL (trust lines, offers, escrows, etc.). Currently 2 XRP per object. This prevents ledger spam by making it costly to create many objects." },
  { id: "payment-channel", term: "Payment Channel", definition: "An XRPL feature enabling off-ledger micropayment streams between two parties. Payment channels allow thousands of transactions per second between two accounts, with only the opening and closing transactions recorded on-ledger." },
  { id: "reserve", term: "Reserve", definition: "The minimum XRP balance required by the XRPL. Consists of the base reserve (10 XRP to activate an account) plus the owner reserve (2 XRP per owned object). Reserves are not fees — they remain in your account." },
  { id: "ripple", term: "Ripple", definition: "A private technology company (Ripple Labs Inc.) that builds enterprise blockchain solutions using the XRP Ledger. Ripple is the largest corporate contributor to XRPL development but does not control the decentralized network.", link: { href: "/learn/what-is-ripple", label: "What is Ripple?" } },
  { id: "ripplenet", term: "RippleNet", definition: "Ripple's global payment network connecting banks and financial institutions. RippleNet includes messaging, settlement, and On-Demand Liquidity products for cross-border payments.", link: { href: "/learn/ripplenet", label: "RippleNet Explained" } },
  { id: "rlusd", term: "RLUSD", definition: "Ripple's USD-backed stablecoin, launched in December 2024. RLUSD operates on both the XRPL and Ethereum, backed 1:1 by USD deposits and U.S. Treasury bills. Market cap surpassed $1.26 billion by early 2026.", link: { href: "/learn/rlusd", label: "RLUSD Guide" } },
  { id: "sidechain", term: "Sidechain", definition: "A separate blockchain that operates alongside the XRPL mainnet, connected via a bridge. Sidechains can have different features or consensus rules while maintaining interoperability with the main XRPL. Xahau is a notable example." },
  { id: "trust-line", term: "Trust Line", definition: "A connection between two XRPL accounts that enables holding issued tokens (IOUs). Trust lines must be explicitly created by the token holder, ensuring users opt-in to holding specific assets. Each trust line requires an owner reserve of 2 XRP." },
  { id: "unl", term: "UNL (Unique Node List)", definition: "The set of validators that a node trusts for consensus. Each XRPL node operator can configure their own UNL. The default UNL is published by the XRPL Foundation and includes diverse, independent validators." },
  { id: "validator", term: "Validator", definition: "A server that participates in the XRPL consensus process, proposing and voting on transactions to include in each ledger. Over 150 validators operate globally, run by universities, exchanges, institutions, and individuals.", link: { href: "/learn/xrp-ledger-explained", label: "How Validators Work" } },
  { id: "wallet", term: "Wallet", definition: "Software or hardware that stores your XRP private keys and enables you to send and receive XRP. Popular XRP wallets include Xaman (formerly XUMM), Ledger, and Trezor.", link: { href: "/learn/xrp-wallets", label: "XRP Wallets Guide" } },
  { id: "x-address", term: "X-address", definition: "A unified address format for the XRP Ledger that combines the classic address and destination tag into a single string starting with 'X'. X-addresses reduce errors when sending to exchanges that require destination tags." },
  { id: "xahau", term: "Xahau", definition: "An XRPL sidechain that implements Hooks (smart contract-like functionality) and uses a burn-to-mint tokenomics model. Xahau enables more complex programmability while the main XRPL maintains its focus on speed and simplicity." },
  { id: "xaman", term: "Xaman (formerly XUMM)", definition: "The most popular self-custody wallet for the XRP Ledger, developed by XRPL Labs. Xaman supports all XRPL features including DEX trading, NFTs, token management, and payment signing." },
  { id: "xrp", term: "XRP", definition: "The native digital asset of the XRP Ledger. XRP is used for transaction fees (which are burned), as a bridge currency for cross-border payments, and as the base asset for the XRPL's built-in DEX. 100 billion XRP were created at genesis — no more can ever be minted.", link: { href: "/learn/what-is-xrp", label: "What is XRP?" } },
  { id: "xrpl", term: "XRPL (XRP Ledger)", definition: "An open-source, decentralized blockchain launched in 2012 specifically designed for payments and tokenization. The XRPL uses Federated Consensus, settles transactions in 3-5 seconds, and includes a native DEX, AMM, NFTs, escrow, and more.", link: { href: "/learn/xrp-ledger-explained", label: "XRPL Explained" } },
  { id: "xrpl-foundation", term: "XRPL Foundation", definition: "An independent, non-profit organization that supports the development and adoption of the XRP Ledger. The foundation publishes the default UNL, funds development grants, and operates independently from Ripple." },
  { id: "xls", term: "XLS (XRP Ledger Standard)", definition: "A specification format for proposed features and standards on the XRP Ledger, similar to Ethereum's ERC standards. Notable examples include XLS-20 (NFTs), XLS-30 (AMM), and XLS-38 (Cross-Chain Bridge)." },
];

export default function XRPGlossaryPage() {
  // Group terms by first letter
  const grouped = glossaryTerms.reduce<Record<string, GlossaryTerm[]>>((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {});
  const letters = Object.keys(grouped).sort();

  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Glossary:"
          titleAccent="A-Z of XRP & XRPL Terms"
          subtitle="Every important XRP and XRP Ledger term explained clearly. From AMM to X-address, this is your complete reference guide to the XRP ecosystem."
          breadcrumbLabel="XRP Glossary"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>A comprehensive glossary of <strong className="text-text-primary">{glossaryTerms.length}+ terms</strong> covering everything in the <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> and <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL</Link> ecosystem. Use the letter navigation to jump to any section. Estimated reading time: <strong className="text-text-primary">15 minutes</strong> (reference — browse as needed).</p>
        </TLDRBox>

        {/* Letter navigation */}
        <SectionNav items={letters.map(l => ({ id: `letter-${l}`, label: l }))} />

        <div className="cv-auto mt-14 space-y-12">
          {letters.map((letter) => (
            <RevealSection key={letter} id={`letter-${letter}`}>
              <h2 className="text-3xl font-bold text-xrp-accent border-b border-white/10 pb-2 mb-6">{letter}</h2>
              <div className="space-y-8">
                {grouped[letter].map((term) => (
                  <div key={term.id} id={term.id}>
                    <h3 className="text-xl font-semibold text-text-primary">{term.term}</h3>
                    <p className="mt-2 text-text-secondary leading-relaxed">{term.definition}</p>
                    {term.link && (
                      <p className="mt-2">
                        <Link href={term.link.href} className="text-sm text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">
                          → {term.link.label}
                        </Link>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </RevealSection>
          ))}

          {/* ===== SOURCES ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://xrpl.org/docs" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL.org — Official Documentation</a></li>
              <li>• <a href="https://ripple.com/insights" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">Ripple Insights — Official Blog</a></li>
              <li>• <a href="https://github.com/XRPLF/rippled" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL Source Code — GitHub</a></li>
              <li>• <a href="https://foundation.xrpl.org" className="text-xrp-accent underline" target="_blank" rel="noopener noreferrer">XRPL Foundation</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How the XRPL works" },
              { href: "/learn/xrp-supply-explained", label: "XRP Supply Explained", desc: "Tokenomics breakdown" },
              { href: "/learn/xrp-myths", label: "XRP Myths Debunked", desc: "Common misconceptions" },
              { href: "/learn/get-started", label: "How to Get Started", desc: "Buy your first XRP" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "XRP's primary use case" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Master the XRP Ecosystem"
          description="Now that you know the terminology, dive deeper into how XRP and the XRPL are transforming global finance."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="Start Learning →"
          secondaryHref="/learn/xrp-ledger-explained"
          secondaryLabel="XRPL Deep Dive"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, Ripple Insights, XRPL Foundation, GitHub XRPLF/rippled.</em>
        </p>
      </div>
    </>
  );
}

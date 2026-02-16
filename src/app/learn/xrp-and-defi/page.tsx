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

const slug = "xrp-and-defi";
const title = "XRP and DeFi: The Full DeFi Ecosystem on XRPL (2026)";
const description = "The complete XRP DeFi ecosystem in 2026. AMM, DEX, lending, yield, and every DeFi protocol building on the XRP Ledger.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const datePublished = "2026-02-15";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished, dateModified: datePublished }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP & DeFi" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "Does XRP have DeFi?", answer: "Yes. The XRP Ledger has a native decentralized exchange (DEX) and automated market maker (AMM) built directly into the protocol. Additional DeFi protocols for lending, yield, and derivatives are being built on XRPL and its EVM sidechain." },
    { question: "What is the XRPL AMM?", answer: "The XRPL AMM (Automated Market Maker) is a native liquidity pool system built into the XRP Ledger protocol. It allows users to provide liquidity and earn trading fees without any third-party smart contracts." },
    { question: "Can you earn yield on XRP?", answer: "Yes. You can earn yield by providing liquidity to XRPL AMM pools, participating in DeFi protocols on the XRPL EVM sidechain, or lending XRP on supported platforms." },
    { question: "How is XRPL DeFi different from Ethereum DeFi?", answer: "XRPL DeFi features are built natively into the protocol rather than through smart contracts. This makes them faster, cheaper, and more secure — but currently less flexible than Ethereum's composable DeFi ecosystem." },
    { question: "Is XRPL DeFi safe?", answer: "Native XRPL DeFi features (DEX, AMM) are part of the validated protocol itself, reducing smart contract risk. However, all DeFi carries risks including impermanent loss, market volatility, and protocol bugs." },
  ]),
];

const faqItems = [
  { q: "Does XRP have DeFi?", a: "Yes. The XRP Ledger has a native DEX and AMM built into the protocol. The XRPL EVM sidechain adds Ethereum-compatible smart contracts for more complex DeFi applications like lending, derivatives, and yield farming." },
  { q: "What is the XRPL AMM?", a: "The XRPL AMM is a native automated market maker built directly into the ledger. Users can provide liquidity to pools and earn trading fees. Because it's protocol-native, there's no smart contract risk — it's validated by the same consensus that secures all XRP transactions." },
  { q: "Can you earn yield on XRP?", a: "Yes — through XRPL AMM liquidity provision, DeFi protocols on the EVM sidechain, or lending platforms. Yields vary based on pool selection, market conditions, and risk level." },
  { q: "How is XRPL DeFi different from Ethereum?", a: "XRPL DeFi is protocol-native (DEX and AMM are built into the ledger), making it faster and cheaper. Ethereum DeFi is more flexible through composable smart contracts but carries more smart contract risk and higher gas fees." },
  { q: "What DeFi protocols are on XRPL?", a: "Key protocols include the native XRPL DEX, the native AMM, Sologenic (tokenized assets), and various lending/yield platforms on the XRPL EVM sidechain. The ecosystem is growing rapidly in 2026." },
  { q: "Is impermanent loss a risk on XRPL AMM?", a: "Yes. Like all AMMs, XRPL liquidity providers face impermanent loss risk when token prices diverge. However, XRPL's AMM includes a unique auction mechanism that helps reduce losses compared to traditional AMM designs." },
];

export default function XRPAndDeFiPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP and"
          titleAccent="DeFi"
          subtitle="The XRP Ledger's DeFi ecosystem has evolved from a simple DEX to a comprehensive financial infrastructure with native AMMs, liquidity pools, and an EVM sidechain. Here's the complete picture in 2026."
          breadcrumbLabel="XRP & DeFi"
        >
          <div className="mt-5">
            <AuthorByline date={datePublished} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>The <strong className="text-text-primary">XRP Ledger has a full DeFi ecosystem</strong> — and it&apos;s different from Ethereum&apos;s. The <Link href="/learn/how-to-use-xrpl-dex" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DEX</Link> and <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">AMM</Link> are built natively into the protocol (not smart contracts), making them faster, cheaper, and more secure. The XRPL EVM sidechain adds Ethereum-compatible DeFi for more complex applications.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Native DEX", value: "Built into the XRPL protocol since 2012" },
          { label: "Native AMM", value: "Protocol-level liquidity pools (XLS-30)" },
          { label: "EVM Sidechain", value: "Ethereum-compatible smart contracts" },
          { label: "Transaction Fees", value: "~$0.0002 per transaction" },
          { label: "Settlement Speed", value: "3-5 seconds" },
          { label: "Smart Contract Risk", value: "None for native features" },
        ]} />

        <SectionNav items={[
          { id: "native-defi", label: "Native DeFi" },
          { id: "amm", label: "XRPL AMM" },
          { id: "evm", label: "EVM Sidechain" },
          { id: "ecosystem", label: "Ecosystem" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="DEX Age" value="12+ yrs" delay={0} />
          <StatPill label="Tx Fee" value="$0.0002" delay={0.06} />
          <StatPill label="Speed" value="3-5s" delay={0.12} />
          <StatPill label="Contract Risk" value="None*" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="native-defi">
            <h2 className="text-2xl font-bold text-text-primary">Native DeFi on XRPL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              What makes XRPL DeFi unique is that its core features are <strong className="text-text-primary">built directly into the protocol</strong>. The decentralized exchange isn&apos;t a smart contract that could have bugs — it&apos;s part of the validated ledger itself.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Native DEX", desc: "Order book-based decentralized exchange built into the protocol since 2012. Any token on XRPL can be traded peer-to-peer." },
                { title: "Native AMM", desc: "Automated market maker pools added via XLS-30 amendment. Provide liquidity and earn fees with protocol-level security." },
                { title: "Trust Lines", desc: "XRPL's trust line system enables any asset to be issued and traded on the ledger — tokens, stablecoins, and real-world assets." },
                { title: "Payment Channels", desc: "Off-ledger payment channels for high-frequency micropayment streams between parties." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="amm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL AMM: Protocol-Level Liquidity</h2>
            <div className="mt-5">
              <HighlightBox title="Why Native AMM Matters" variant="accent" large>
                <p>Unlike Ethereum where AMMs like Uniswap are smart contracts (with smart contract risk), the XRPL AMM is <strong>validated by the same consensus mechanism that secures XRP itself</strong>. No smart contract exploits, no rug pulls at the protocol level.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "Protocol-Level Security", desc: "AMM logic is validated by XRPL consensus — no smart contract vulnerabilities" },
                { title: "Continuous Auction Mechanism", desc: "Unique auction slot reduces arbitrage losses for liquidity providers" },
                { title: "Sub-Cent Fees", desc: "Provide liquidity and swap tokens for fractions of a penny" },
                { title: "Any Token Pair", desc: "Create pools for any XRPL-issued tokens, including RLUSD and real-world assets" },
              ]} variant="zap" />
            </div>
            <p className="mt-4 text-text-secondary">
              Learn more in our detailed <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AMM guide</Link>.
            </p>
          </RevealSection>

          <RevealSection id="evm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL EVM Sidechain</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For more complex DeFi applications — lending protocols, derivatives, yield aggregators — the XRPL EVM sidechain brings full Ethereum compatibility to the XRP ecosystem. Developers can deploy Solidity smart contracts while leveraging XRPL&apos;s speed and low costs.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Ethereum Compatibility", desc: "Deploy existing Solidity contracts with minimal modification. Use familiar tools like MetaMask, Hardhat, and Remix." },
                { title: "Bridge to XRPL", desc: "Seamless asset bridging between the EVM sidechain and the main XRP Ledger." },
                { title: "Low Gas Fees", desc: "EVM execution at a fraction of Ethereum mainnet costs." },
                { title: "DeFi Composability", desc: "Lending, borrowing, yield farming, and derivatives with full smart contract flexibility." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="ecosystem" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key DeFi Projects on XRPL</h2>
            <div className="mt-6">
              <DataTable
                headers={["Project", "Category", "Description"]}
                rows={[
                  ["XRPL Native DEX", "Exchange", "Built-in order book DEX for all XRPL tokens"],
                  ["XRPL Native AMM", "Liquidity", "Protocol-level automated market maker pools"],
                  ["Sologenic", "Tokenization", "Tokenized stocks and assets trading on XRPL"],
                  ["Orchestra Finance", "Lending", "Lending and borrowing protocol on XRPL"],
                  ["XPMarket", "NFT/DeFi", "NFT marketplace with DeFi features"],
                  ["RLUSD", "Stablecoin", "Ripple's regulated stablecoin for DeFi"],
                ]}
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "DeFi deep dive" },
              { href: "/learn/xrp-amm", label: "XRPL AMM", desc: "Liquidity pools explained" },
              { href: "/learn/how-to-use-xrpl-dex", label: "XRPL DEX Guide", desc: "Trade on the DEX" },
              { href: "/learn/rlusd", label: "RLUSD", desc: "Ripple's stablecoin" },
              { href: "/learn/xrp-smart-contracts", label: "XRP Smart Contracts", desc: "Smart logic on XRPL" },
              { href: "/learn/xrp-real-world-assets", label: "Real World Assets", desc: "RWA tokenization" },
              { href: "/learn/xrpl-trust-lines-explained", label: "Trust Lines", desc: "How XRPL tokens work" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Earn with XRP" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore XRP's DeFi Ecosystem"
          description="From native AMMs to EVM smart contracts — XRPL DeFi is growing fast."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-amm"
          secondaryLabel="Learn About AMMs"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}

import { gen } from './gen.mjs';

// Batch 1: How-to pages (6 pages)

gen("how-to-store-xrp-safely", {
title:"How to Store XRP Safely",accent:"Complete Security Guide",
subtitle:"Learn the safest ways to store your XRP — hardware wallets, cold storage, and essential security practices.",
desc:"How to store XRP safely using hardware wallets, cold storage, and security best practices. Protect your XRP investment.",
kw:["how to store XRP","XRP cold storage","XRP hardware wallet","store XRP safely","XRP security"],
facts:[{l:"Safest Method",v:"Hardware wallet (Ledger)"},{l:"Reserve",v:"10 XRP minimum"},{l:"Backup",v:"24-word recovery phrase"},{l:"Exchange Risk",v:"Not your keys, not your crypto"},{l:"Best Mobile",v:"Xaman (Xumm)"},{l:"2FA",v:"Always enable"}],
sections:[{id:"wallet-types",label:"Wallet Types"},{id:"hardware",label:"Hardware Wallets"},{id:"software",label:"Software Wallets"},{id:"exchange",label:"Exchange Storage"},{id:"security",label:"Security Tips"},{id:"faq",label:"FAQ"}],
stats:[{l:"Best",v:"Hardware"},{l:"Reserve",v:"10 XRP"},{l:"Backup",v:"24 words"},{l:"Cost",v:"$79+"}],
tldr:'Storing XRP safely means moving it off exchanges into wallets you control. <strong class="text-text-primary">Hardware wallets</strong> like Ledger offer the best security. For everyday use, <a href="/learn/xrp-wallets" class="text-xrp-accent underline decoration-xrp-accent/30">Xaman</a> balances security and convenience. Never share secret keys, always enable 2FA.',
body:`
          <RevealSection id="wallet-types">
            <h2 className="text-2xl font-bold text-text-primary">Types of XRP Wallets</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">There are three main ways to store XRP: <strong className="text-text-primary">hardware wallets</strong> (most secure), <strong className="text-text-primary">software wallets</strong> (convenient), and <strong className="text-text-primary">exchange wallets</strong> (least secure). The <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">right wallet</Link> depends on your holdings and usage.</p>
            <div className="mt-6"><FeatureGrid columns={3} items={[
              {title:"Hardware Wallets",desc:"Physical devices storing keys offline. Best for large holdings. Ledger Nano X, Trezor Model T."},
              {title:"Software Wallets",desc:"Phone/desktop apps. Good for daily use. Xaman, Trust Wallet, Exodus."},
              {title:"Exchange Wallets",desc:"On Coinbase, Binance etc. Convenient but risky — you don't own the keys."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="hardware" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hardware Wallets for XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Hardware wallets keep your private keys on a physical device that never connects directly to the internet. Even if your computer is compromised, your XRP remains safe. This is the gold standard for <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">long-term XRP storage</Link>.</p>
            <div className="mt-6"><DataTable headers={["Wallet","Price","XRP Support","Best For"]} rows={[
              ["Ledger Nano X","$149","Native","Most users"],
              ["Ledger Nano S Plus","$79","Native","Budget option"],
              ["Trezor Model T","$219","Via suite","Multi-crypto"],
              ["Tangem Card","$55","Native XRPL","Simple cold storage"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="software" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Software Wallets</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">For everyday use and <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DeFi</Link>, software wallets offer the best balance of security and convenience.</p>
            <div className="mt-6"><IconList items={[
              {title:"Xaman (Xumm)",desc:"Premier XRPL wallet. Full DEX, NFT support, token management. iOS and Android."},
              {title:"Trust Wallet",desc:"Multi-chain wallet with XRP support. Good for multi-crypto holders."},
              {title:"Exodus",desc:"Beautiful desktop and mobile wallet. Built-in exchange feature."},
              {title:"Crossmark",desc:"Browser extension for XRPL dApps and DEX interaction."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="exchange" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Should You Store XRP on an Exchange?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Keeping XRP on exchanges is convenient for trading but risky long-term. Exchange hacks, freezes, and bankruptcies (FTX) have cost billions. The rule: <strong className="text-text-primary">&quot;Not your keys, not your crypto.&quot;</strong></p>
            <div className="mt-6"><HighlightBox title="When Exchange Storage Is OK" variant="accent"><p>For small amounts you&apos;re actively trading, exchange storage is fine. For significant long-term holdings, move to a <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">personal wallet</Link>.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Essential Security Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Write down your recovery phrase",desc:"Store on paper or metal. Never digitally — no photos, cloud, or text files."},
              {title:"Enable 2FA everywhere",desc:"Use authenticator app (not SMS). Google Authenticator or Authy."},
              {title:"Verify addresses carefully",desc:"Double-check destination addresses. Include destination tags for exchanges. Transactions are irreversible."},
              {title:"Beware of scams",desc:"No one will ask for your keys. XRP giveaway scams are always fake."},
              {title:"Split large holdings",desc:"Distribute across hardware wallet, software wallet, and small exchange amount."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"What's the safest way to store XRP?",a:"Hardware wallets like Ledger Nano X. Private keys stay offline, protected from hacking."},
  {q:"What is the XRP reserve requirement?",a:"Every XRP wallet needs 10 XRP minimum reserve to stay active. This prevents ledger spam."},
  {q:"Can I store XRP on a Ledger?",a:"Yes. Ledger Nano X and S Plus both support XRP natively via Ledger Live."},
  {q:"What if I lose my hardware wallet?",a:"Recover using the 24-word phrase on a new device. Without it, funds are lost permanently."},
  {q:"Is Xaman wallet safe?",a:"Yes. Xaman stores keys locally with biometric auth. It's the most trusted XRPL wallet."},
],
related:[
  {href:"/learn/xrp-wallets",label:"XRP Wallets",desc:"Complete wallet guide"},
  {href:"/learn/how-to-buy-xrp",label:"How to Buy XRP",desc:"Purchase guide"},
  {href:"/learn/xrp-addresses-and-keys",label:"Addresses & Keys",desc:"Key management"},
  {href:"/learn/xrp-common-mistakes",label:"Common Mistakes",desc:"Avoid costly errors"},
  {href:"/learn/xrp-tax-guide",label:"XRP Tax Guide",desc:"Tax obligations"},
  {href:"/learn/what-is-xrp",label:"What Is XRP?",desc:"XRP fundamentals"},
],
cta:{title:"Secure Your XRP Today",desc:"Don't leave your XRP at risk. Get a hardware wallet and take control.",pri:{href:"/learn/xrp-wallets",label:"Wallet Guide →"},sec:{href:"/learn/how-to-buy-xrp",label:"Buy XRP"}},
});

gen("how-to-send-xrp", {
title:"How to Send XRP",accent:"Fast & Cheap Transfers",
subtitle:"Send XRP anywhere in 3-5 seconds for less than a penny. Step-by-step guide covering wallets, destination tags, and fees.",
desc:"How to send XRP step-by-step. Covers wallets, destination tags, fees, and common mistakes when transferring XRP.",
kw:["how to send XRP","send XRP","transfer XRP","XRP destination tag","XRP transaction"],
facts:[{l:"Speed",v:"3-5 seconds"},{l:"Cost",v:"~0.00001 XRP"},{l:"Dest. Tag",v:"Required for exchanges"},{l:"Min Send",v:"0.000001 XRP"},{l:"Irreversible",v:"Yes — always verify"},{l:"Availability",v:"24/7/365"}],
sections:[{id:"from-wallet",label:"From Wallet"},{id:"from-exchange",label:"From Exchange"},{id:"dest-tags",label:"Destination Tags"},{id:"fees",label:"Fees"},{id:"troubleshoot",label:"Troubleshooting"},{id:"faq",label:"FAQ"}],
stats:[{l:"Speed",v:"3-5 sec"},{l:"Fee",v:"<$0.01"},{l:"Uptime",v:"24/7"},{l:"Finality",v:"Instant"}],
tldr:'Sending XRP is fast, cheap, and simple. You need the recipient&apos;s <strong class="text-text-primary">XRP address</strong> and sometimes a <strong class="text-text-primary">destination tag</strong> (required for exchanges). Transactions settle in 3-5 seconds at near-zero cost. Use <a href="/learn/xrp-wallets" class="text-xrp-accent underline decoration-xrp-accent/30">Xaman</a> or an exchange. Always double-check — XRP transactions are irreversible.',
body:`
          <RevealSection id="from-wallet">
            <h2 className="text-2xl font-bold text-text-primary">Sending XRP from a Wallet</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Sending from a <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">personal wallet</Link> is straightforward. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> processes transactions in 3-5 seconds.</p>
            <div className="mt-6"><IconList items={[
              {title:"1. Open wallet app",desc:"Launch Xaman, Trust Wallet, or your XRPL wallet."},
              {title:"2. Tap Send",desc:"Select XRP as the asset to send."},
              {title:"3. Enter recipient address",desc:"Paste the XRP address (starts with 'r', 25-34 characters)."},
              {title:"4. Add destination tag",desc:"Required for exchanges. Without it, your XRP may be lost."},
              {title:"5. Confirm and send",desc:"Review everything, then confirm. Settlement in 3-5 seconds."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="from-exchange" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sending from an Exchange</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">After <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">buying XRP</Link>, you can withdraw from exchanges. The process includes additional verification steps.</p>
            <div className="mt-6"><DataTable headers={["Exchange","Withdrawal Fee","Processing","Min"]} rows={[
              ["Coinbase","Free-$0.15","Minutes","1 XRP"],
              ["Binance","0.25 XRP","Minutes","20 XRP"],
              ["Kraken","0.02 XRP","Minutes","25 XRP"],
              ["Uphold","Free","Instant","None"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="dest-tags" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Destination Tags Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">A <strong className="text-text-primary">destination tag</strong> identifies which user a payment belongs to. Exchanges use shared addresses, so the tag tells them whose account to credit. <strong className="text-text-primary">Forgetting it is the #1 cause of lost XRP.</strong></p>
            <div className="mt-6"><HighlightBox title="When You Need One" variant="warn"><p><strong>Always required:</strong> Sending to exchanges.<br /><strong>Usually not needed:</strong> Personal wallets.<br /><strong>When in doubt:</strong> Ask the recipient.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="fees" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Transaction Fees</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP has the lowest fees in crypto — ~0.00001 XRP per transaction. This fee is <Link href="/learn/xrp-burn-rate" className="text-xrp-accent underline decoration-xrp-accent/30">burned permanently</Link>. No gas wars like Ethereum.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Network Fee",desc:"~0.00001 XRP burned per transaction. Goes to no one."},
              {title:"Exchange Fees",desc:"Exchanges add withdrawal fees on top (varies by platform)."},
              {title:"No Gas Wars",desc:"Unlike Ethereum, XRP fees don't spike during high demand."},
              {title:"Fee Escalation",desc:"During extreme load, fees may temporarily increase but stay under $0.01."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="troubleshoot" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Troubleshooting</h2>
            <div className="mt-6"><IconList items={[
              {title:"Missing destination tag",desc:"Contact exchange support immediately with your transaction hash. Recovery is often possible."},
              {title:"Transaction not arriving",desc:"Check the hash on xrpscan.com. Usually wrong address or missing tag."},
              {title:"Below reserve",desc:"Can't send XRP that would bring wallet below 10 XRP reserve."},
              {title:"Wrong address",desc:"XRP addresses start with 'r'. Sent to a wrong valid address = unrecoverable."},
            ]} variant="warn" /></div>
          </RevealSection>`,
faq:[
  {q:"How long does it take to send XRP?",a:"3-5 seconds with instant finality. No confirmations needed like Bitcoin."},
  {q:"Do I always need a destination tag?",a:"Only for exchanges and services using shared addresses. Personal wallets typically don't need one."},
  {q:"How much does it cost to send XRP?",a:"Network fee is ~0.00001 XRP (fractions of a penny). Exchanges may charge additional withdrawal fees."},
  {q:"Can I reverse an XRP transaction?",a:"No. XRP transactions are final and irreversible once confirmed. Always double-check."},
  {q:"What's the minimum XRP I can send?",a:"0.000001 XRP (one drop). But receiving wallets must maintain 10 XRP reserve."},
],
related:[
  {href:"/learn/xrp-wallets",label:"XRP Wallets",desc:"Choose the right wallet"},
  {href:"/learn/how-to-buy-xrp",label:"How to Buy XRP",desc:"Purchase guide"},
  {href:"/learn/xrp-transaction-types",label:"Transaction Types",desc:"All XRPL transactions"},
  {href:"/learn/how-to-store-xrp-safely",label:"Store Safely",desc:"Security practices"},
  {href:"/learn/xrp-burn-rate",label:"Burn Rate",desc:"How fees are burned"},
  {href:"/learn/xrp-addresses-and-keys",label:"Addresses & Keys",desc:"Key management"},
],
cta:{title:"Ready to Send XRP?",desc:"Get a wallet and start sending XRP anywhere in seconds.",pri:{href:"/learn/xrp-wallets",label:"Get a Wallet →"},sec:{href:"/learn/how-to-buy-xrp",label:"Buy XRP"}},
});

gen("how-to-stake-xrp", {
title:"How to Stake XRP",accent:"Earn Yield on Your Holdings",
subtitle:"XRP doesn't use proof-of-stake, but there are several ways to earn passive income on your XRP.",
desc:"Can you stake XRP? Learn every way to earn yield — AMM liquidity, lending, and DeFi alternatives to traditional staking.",
kw:["how to stake XRP","XRP staking","XRP yield","earn XRP","XRP passive income"],
facts:[{l:"Traditional Staking",v:"Not supported (not PoS)"},{l:"AMM Yield",v:"Variable (fee-based)"},{l:"Lending",v:"2-8% APY"},{l:"Consensus",v:"Federated Byzantine Agreement"},{l:"Lock-up",v:"Depends on method"},{l:"Risk",v:"Low to High (varies)"}],
sections:[{id:"why-no-staking",label:"Why No Staking?"},{id:"amm",label:"AMM Liquidity"},{id:"lending",label:"Lending"},{id:"defi",label:"DeFi Options"},{id:"risks",label:"Risks"},{id:"faq",label:"FAQ"}],
stats:[{l:"PoS",v:"N/A"},{l:"AMM",v:"Variable"},{l:"Lending",v:"2-8%"},{l:"Risk",v:"Varies"}],
tldr:'XRP doesn&apos;t use proof-of-stake, so traditional staking isn&apos;t possible. However, earn yield through <strong class="text-text-primary">XRPL AMM liquidity</strong>, <strong class="text-text-primary">lending platforms</strong>, and <strong class="text-text-primary">DeFi protocols</strong>. The <a href="/learn/xrp-amm" class="text-xrp-accent underline decoration-xrp-accent/30">native AMM</a> lets you earn trading fees. Third-party platforms offer lending yields.',
body:`
          <RevealSection id="why-no-staking">
            <h2 className="text-2xl font-bold text-text-primary">Why Can&apos;t You Stake XRP?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Staking is a proof-of-stake feature. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> uses <strong className="text-text-primary">Federated Byzantine Agreement</strong> — validators don&apos;t need to lock up tokens. This makes XRP more energy-efficient but eliminates staking rewards.</p>
            <div className="mt-6"><HighlightBox title="XRP Consensus vs PoS" variant="accent"><p>The XRPL achieves consensus through trusted <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">validators</Link> agreeing in 3-5 seconds. No mining, no staking, no energy waste.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="amm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Earn with XRPL AMM</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AMM</Link> lets you deposit XRP paired with another token and earn trading fees. This is the most native way to earn yield.</p>
            <div className="mt-6"><IconList items={[
              {title:"Deposit token pairs",desc:"Provide equal value of XRP + another token to an AMM pool."},
              {title:"Earn trading fees",desc:"Fees from every trade distributed to liquidity providers proportionally."},
              {title:"No lock-up",desc:"Withdraw liquidity at any time. No minimum commitment."},
              {title:"Impermanent loss risk",desc:"Token price divergence can reduce value vs holding. Understand this risk."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="lending" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Lending Platforms</h2>
            <div className="mt-6"><DataTable headers={["Platform","Type","Est. APY","Risk"]} rows={[
              ["XRPL AMM","Decentralized","Variable","Medium"],
              ["Nexo","Centralized","4-8%","Medium-High"],
              ["Binance Earn","Centralized","1-5%","Medium"],
              ["Crypto.com","Centralized","2-6%","Medium"],
            ]} highlightCol={2} /></div>
          </RevealSection>
          <RevealSection id="defi" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">DeFi Yield Options</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DeFi ecosystem</Link> is growing. As <Link href="/learn/xrp-smart-contracts" className="text-xrp-accent underline decoration-xrp-accent/30">smart contracts</Link> expand, expect more yield strategies.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"AMM Pools",desc:"Provide liquidity, earn fees. Variable returns."},
              {title:"DEX Trading",desc:"Active trading on the XRPL DEX. Not passive but profitable with strategy."},
              {title:"Future: Hooks DeFi",desc:"XRPL Hooks will enable lending, borrowing, and yield farming."},
              {title:"Future: EVM Sidechain",desc:"Ethereum-style DeFi coming to XRP ecosystem."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="risks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Risks</h2>
            <div className="mt-6"><IconList items={[
              {title:"Platform risk",desc:"Centralized platforms can freeze, hack, or bankrupt (see FTX)."},
              {title:"Impermanent loss",desc:"AMM LPs face IL when token prices diverge."},
              {title:"Smart contract risk",desc:"DeFi protocols can have bugs or exploits."},
              {title:"Regulatory risk",desc:"Yield products face increasing regulatory scrutiny."},
              {title:"Variable rates",desc:"Yields fluctuate. High APY today doesn't guarantee tomorrow."},
            ]} variant="warn" /></div>
          </RevealSection>`,
faq:[
  {q:"Can you stake XRP?",a:"Not traditionally (no PoS). But earn yield through AMM liquidity, lending, and DeFi protocols."},
  {q:"Best way to earn passive income on XRP?",a:"XRPL AMM is most native/decentralized. Centralized lending is simpler but has platform risk."},
  {q:"Is XRP staking safe?",a:"Each method has different risks. AMM has IL risk. Centralized has counterparty risk. None are risk-free."},
  {q:"What APY can I earn?",a:"AMM: variable trading fees. Centralized: 2-8% APY depending on conditions."},
  {q:"Why doesn't XRP use PoS?",a:"XRPL's consensus is faster, more efficient, and doesn't require token lockups. 3-5 sec finality."},
],
related:[
  {href:"/learn/xrp-staking",label:"XRP Staking Deep Dive",desc:"Extended guide"},
  {href:"/learn/xrp-amm",label:"XRP AMM",desc:"AMM liquidity"},
  {href:"/learn/xrpl-defi",label:"XRPL DeFi",desc:"DeFi ecosystem"},
  {href:"/learn/xrp-wallets",label:"XRP Wallets",desc:"Store safely"},
  {href:"/learn/how-to-store-xrp-safely",label:"Store Safely",desc:"Security guide"},
  {href:"/learn/xrp-smart-contracts",label:"Smart Contracts",desc:"Future DeFi"},
],
cta:{title:"Start Earning on Your XRP",desc:"Explore the XRPL AMM and DeFi ecosystem to put your XRP to work.",pri:{href:"/learn/xrp-amm",label:"AMM Guide →"},sec:{href:"/learn/xrpl-defi",label:"XRPL DeFi"}},
});

gen("how-to-use-xrpl-dex", {
title:"How to Use the XRPL DEX",accent:"Decentralized Trading Guide",
subtitle:"Trade tokens on the XRP Ledger's built-in decentralized exchange — no intermediaries, no KYC, near-zero fees.",
desc:"Step-by-step guide to using the XRPL DEX. Trade tokens, place orders, and access DeFi on the XRP Ledger.",
kw:["XRPL DEX","how to use XRPL DEX","XRP decentralized exchange","trade on XRPL"],
facts:[{l:"Type",v:"Native DEX + AMM"},{l:"KYC",v:"Not required"},{l:"Fee",v:"Near-zero"},{l:"Speed",v:"3-5 seconds"},{l:"Pairs",v:"Any XRPL token"},{l:"Wallet",v:"Xaman / Sologenic"}],
sections:[{id:"what-is",label:"What Is It"},{id:"getting-started",label:"Getting Started"},{id:"orders",label:"Order Types"},{id:"hybrid",label:"AMM vs Orderbook"},{id:"tips",label:"Tips"},{id:"faq",label:"FAQ"}],
stats:[{l:"Type",v:"Native"},{l:"Fee",v:"~$0"},{l:"Speed",v:"3-5s"},{l:"KYC",v:"None"}],
tldr:'The <a href="/learn/xrp-ledger-explained" class="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</a> has a <strong class="text-text-primary">built-in DEX</strong> since 2012 — years before Uniswap. Combined with the <a href="/learn/xrp-amm" class="text-xrp-accent underline decoration-xrp-accent/30">native AMM</a>, it offers hybrid orderbook+AMM trading with near-zero fees and 3-5 second settlement.',
body:`
          <RevealSection id="what-is">
            <h2 className="text-2xl font-bold text-text-primary">What Is the XRPL DEX?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The XRPL has had a <strong className="text-text-primary">built-in decentralized exchange</strong> since launch in 2012. It features a traditional orderbook plus the <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">AMM</Link>, creating a unique <strong className="text-text-primary">hybrid trading system</strong>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Orderbook Trading",desc:"Limit and market orders like traditional exchanges. Full price control."},
              {title:"AMM Pools",desc:"Trade against automated liquidity pools for always-available liquidity."},
              {title:"Auto-Bridging",desc:"XRP bridges trades between any two tokens automatically."},
              {title:"Pathfinding",desc:"Ledger finds the cheapest route across all pools and orders."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="getting-started" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Getting Started</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Get an XRPL wallet",desc:"Download Xaman or use Sologenic.org. Fund with 10+ XRP for wallet reserve."},
              {title:"2. Set trust lines",desc:"To hold non-XRP tokens, set trust lines. Most wallets handle this automatically."},
              {title:"3. Open DEX",desc:"In Xaman, go to exchange. On Sologenic.org, connect wallet and browse pairs."},
              {title:"4. Place a trade",desc:"Select pair, choose amount, submit. Settles in 3-5 seconds."},
              {title:"5. Manage orders",desc:"View, cancel, or modify open orders. Unfilled orders cancelled at no cost."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="orders" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Order Types</h2>
            <div className="mt-6"><DataTable headers={["Type","How It Works","Best For"]} rows={[
              ["Market","Fills immediately at best price","Quick trades"],
              ["Limit","Fills at your price or better","Price control"],
              ["AMM Swap","Trade against pool liquidity","Always available"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="hybrid" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hybrid DEX + AMM</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL hybrid system</Link> auto-routes through whichever gives better price — orderbook, AMM, or combination.</p>
            <div className="mt-6"><HighlightBox title="Best of Both Worlds" variant="accent"><p>Orderbooks excel at large trades with precise pricing. AMMs provide always-available liquidity. The XRPL gives you both in one system — unique in crypto.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Trading Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Check liquidity",desc:"Low-liquidity pairs have high slippage. Stick to popular pairs."},
              {title:"Use limit orders",desc:"For larger trades, limits ensure your desired price without slippage."},
              {title:"Verify tokens",desc:"Anyone can issue XRPL tokens. Verify issuers before trading."},
              {title:"Mind reserves",desc:"Keep 10 XRP base reserve plus 2 XRP per trust line."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"Is the XRPL DEX safe?",a:"Built into the protocol — no smart contract exploits possible. But always verify tokens before trading."},
  {q:"Do I need KYC?",a:"No. The XRPL DEX is fully decentralized and permissionless."},
  {q:"What fees?",a:"Standard XRPL fee (~0.00001 XRP). AMM pools also charge a small trading fee."},
  {q:"Can I trade any token?",a:"Any XRPL-issued token can be traded. Includes stablecoins, meme tokens, and tokenized assets."},
  {q:"Best wallets for DEX?",a:"Xaman, Crossmark, and Sologenic. Sologenic has the most full-featured trading UI."},
],
related:[
  {href:"/learn/xrp-amm",label:"XRP AMM",desc:"Automated market maker"},
  {href:"/learn/xrpl-defi",label:"XRPL DeFi",desc:"Full ecosystem"},
  {href:"/learn/xrp-wallets",label:"XRP Wallets",desc:"Get a wallet"},
  {href:"/learn/xrpl-trust-lines-explained",label:"Trust Lines",desc:"How they work"},
  {href:"/learn/how-to-create-xrpl-token",label:"Create Token",desc:"Issue tokens"},
  {href:"/learn/xrp-transaction-types",label:"Transactions",desc:"All types"},
],
cta:{title:"Start Trading on the XRPL",desc:"Decentralized, fast, and nearly free. The original crypto DEX.",pri:{href:"/learn/xrp-wallets",label:"Get a Wallet →"},sec:{href:"/learn/xrp-amm",label:"XRPL AMM"}},
});

gen("how-to-create-xrpl-token", {
title:"How to Create an XRPL Token",accent:"Token Issuance Guide",
subtitle:"Issue your own token on the XRP Ledger in minutes. No smart contracts required — tokenization is native.",
desc:"Step-by-step guide to creating tokens on the XRP Ledger. Covers trust lines, token settings, and distribution.",
kw:["create XRPL token","issue XRP token","XRPL tokenization","XRP Ledger token"],
facts:[{l:"Cost",v:"~10 XRP (reserve)"},{l:"Contracts",v:"Not needed"},{l:"Time",v:"Minutes"},{l:"Trust Lines",v:"Required for holders"},{l:"Settings",v:"Freeze, clawback, fees"},{l:"Standard",v:"Native issued currencies"}],
sections:[{id:"overview",label:"Overview"},{id:"steps",label:"Steps"},{id:"settings",label:"Settings"},{id:"distribution",label:"Distribution"},{id:"use-cases",label:"Use Cases"},{id:"faq",label:"FAQ"}],
stats:[{l:"Cost",v:"~10 XRP"},{l:"Time",v:"Minutes"},{l:"Contracts",v:"None"},{l:"Type",v:"Native"}],
tldr:'Creating tokens on the <a href="/learn/xrp-ledger-explained" class="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</a> is a <strong class="text-text-primary">native protocol feature</strong>. Any account can issue tokens representing stablecoins, <a href="/learn/xrp-real-world-assets" class="text-xrp-accent underline decoration-xrp-accent/30">real-world assets</a>, or community tokens. Holders need trust lines, and issuers can configure freeze, clawback, and transfer fees.',
body:`
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Token Issuance on XRPL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Unlike Ethereum&apos;s ERC-20 smart contracts, the XRPL has <strong className="text-text-primary">token issuance built into the protocol</strong>. Tokens inherit XRPL speed, low fees, and trade immediately on the <Link href="/learn/how-to-use-xrpl-dex" className="text-xrp-accent underline decoration-xrp-accent/30">built-in DEX</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"No Smart Contracts",desc:"Native feature. No code to write, audit, or worry about exploits."},
              {title:"Instant DEX Listing",desc:"Token is immediately tradeable once issued."},
              {title:"Configurable Controls",desc:"Freeze, transfer fees, clawback at issuance."},
              {title:"Trust Line Model",desc:"Holders opt-in via trust lines. Prevents spam tokens."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="steps" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step-by-Step</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Create issuing account",desc:"New XRPL account for issuance. Fund with 10+ XRP for reserve."},
              {title:"2. Configure settings",desc:"Set DefaultRipple, decide freeze/clawback. Hard to change later."},
              {title:"3. Choose token code",desc:"3-char code (USD) or up to 160-bit hex for longer names."},
              {title:"4. Set up trust lines",desc:"Recipients create trust lines to your address for your token."},
              {title:"5. Send tokens",desc:"Issue by sending Payment from issuer to trust line holders. Created on send."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="settings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Token Settings</h2>
            <div className="mt-6"><DataTable headers={["Setting","Description","Use Case"]} rows={[
              ["Default Ripple","Allows token to flow through account","Required for most"],
              ["Global Freeze","Freeze all issued tokens","Regulatory compliance"],
              ["Individual Freeze","Freeze specific holder","AML/compliance"],
              ["Clawback","Reclaim from holders","Regulated assets"],
              ["Transfer Fee","Charge % on transfers","Revenue"],
              ["No Freeze","Permanently disable freeze","Decentralization"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="distribution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Distribution</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Distribute via payments, <Link href="/learn/xrp-airdrops" className="text-xrp-accent underline decoration-xrp-accent/30">airdrops</Link>, or the XRPL DEX. Use the <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">AMM</Link> to bootstrap liquidity.</p>
            <div className="mt-6"><HighlightBox title="Bootstrap Liquidity" variant="accent"><p>Create an AMM pool pairing your token with XRP or <Link href="/learn/rlusd-explained" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link>. Gives immediate price discovery and trading.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Use Cases</h2>
            <div className="mt-6"><IconList items={[
              {title:"Stablecoins",desc:"Dollar-pegged tokens. RLUSD is Ripple's example."},
              {title:"Real-World Assets",desc:"Tokenize real estate, commodities, securities."},
              {title:"Community Tokens",desc:"Governance or reward tokens for projects."},
              {title:"Loyalty Points",desc:"Brandcoin loyalty programs redeemable for goods."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"How much does it cost?",a:"~10 XRP for account reserve plus minimal fees. Much cheaper than Ethereum."},
  {q:"Do I need to code?",a:"No. Native feature — use wallet interfaces or API calls."},
  {q:"Can I control tokens after issuance?",a:"Yes if configured. Freeze, transfer fees, clawback all possible."},
  {q:"What's a trust line?",a:"Opt-in from a wallet to hold your token. Prevents spam, gives users control."},
  {q:"Immediately tradeable?",a:"Yes. Available on the XRPL DEX against any token with trust lines."},
],
related:[
  {href:"/learn/xrp-ledger-explained",label:"XRP Ledger",desc:"Technology overview"},
  {href:"/learn/xrpl-trust-lines-explained",label:"Trust Lines",desc:"How they work"},
  {href:"/learn/xrp-amm",label:"XRP AMM",desc:"Bootstrap liquidity"},
  {href:"/learn/xrp-real-world-assets",label:"Real-World Assets",desc:"Tokenize assets"},
  {href:"/learn/how-to-use-xrpl-dex",label:"XRPL DEX",desc:"Trade tokens"},
  {href:"/learn/rlusd-explained",label:"RLUSD",desc:"Ripple's stablecoin"},
],
cta:{title:"Build on the XRP Ledger",desc:"Create tokens, trade on the DEX, and explore the XRPL ecosystem.",pri:{href:"/learn/xrp-ledger-explained",label:"XRPL Guide →"},sec:{href:"/learn/xrpl-defi",label:"XRPL DeFi"}},
});

gen("how-to-read-xrp-charts", {
title:"How to Read XRP Charts",accent:"Technical Analysis Basics",
subtitle:"Learn candlestick charts, identify patterns, and understand key indicators for XRP trading.",
desc:"Beginner guide to reading XRP price charts. Candlesticks, support/resistance, volume, RSI, MACD, and patterns.",
kw:["read XRP charts","XRP technical analysis","XRP candlestick","XRP chart patterns"],
facts:[{l:"Chart Type",v:"Candlestick (most common)"},{l:"Key Indicators",v:"RSI, MACD, Volume"},{l:"Timeframes",v:"1 min to 1 month"},{l:"S/R",v:"Key price levels"},{l:"Best Tool",v:"TradingView"},{l:"Difficulty",v:"Beginner-friendly"}],
sections:[{id:"candlesticks",label:"Candlesticks"},{id:"support-resistance",label:"S/R Levels"},{id:"indicators",label:"Indicators"},{id:"patterns",label:"Patterns"},{id:"tools",label:"Tools"},{id:"faq",label:"FAQ"}],
stats:[{l:"Chart",v:"Candles"},{l:"Tool",v:"TradingView"},{l:"Key",v:"RSI/MACD"},{l:"Timeframe",v:"Daily"}],
tldr:'Reading charts is essential for XRP trading. <strong class="text-text-primary">Candlestick charts</strong> show price action over time. <strong class="text-text-primary">RSI and MACD</strong> identify momentum. Understanding <a href="/learn/xrp-price-history" class="text-xrp-accent underline decoration-xrp-accent/30">price history</a> and <strong class="text-text-primary">support/resistance</strong> helps you make better decisions.',
body:`
          <RevealSection id="candlesticks">
            <h2 className="text-2xl font-bold text-text-primary">Understanding Candlesticks</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Each candle shows four data points: <strong className="text-text-primary">open, high, low, close (OHLC)</strong> for a time period. This is the foundation of <Link href="/learn/xrp-technical-analysis-guide" className="text-xrp-accent underline decoration-xrp-accent/30">technical analysis</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Green (Bullish)",desc:"Close > open. Body shows open (bottom) to close (top)."},
              {title:"Red (Bearish)",desc:"Close < open. Body shows open (top) to close (bottom)."},
              {title:"Wicks",desc:"Thin lines showing high and low reached during the period."},
              {title:"Timeframes",desc:"1 min, 5 min, 1 hour, 1 day, 1 week, 1 month."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="support-resistance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Support &amp; Resistance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">Support</strong> = price tends to stop falling and bounce. <strong className="text-text-primary">Resistance</strong> = tends to stop rising and pull back. These form from <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">historical price action</Link>.</p>
            <div className="mt-6"><HighlightBox title="Key XRP Levels" variant="accent"><p>Major historical levels: $0.50, $1.00, $1.96 (2021 high), $3.84 (2018 ATH). Expect increased volatility near these.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="indicators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Essential Indicators</h2>
            <div className="mt-6"><DataTable headers={["Indicator","Shows","Usage"]} rows={[
              ["RSI","Overbought (>70) / Oversold (<30)","Buy oversold, caution overbought"],
              ["MACD","Momentum direction","Bullish when MACD > signal"],
              ["Volume","Trading activity","Confirms trend strength"],
              ["50/200 MA","Trend direction","Golden cross = bullish"],
              ["Bollinger Bands","Volatility","Price at bands may reverse"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="patterns" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Patterns</h2>
            <div className="mt-6"><IconList items={[
              {title:"Double Bottom",desc:"W-shape = bullish reversal. Price bounces from same support twice."},
              {title:"Head & Shoulders",desc:"Three peaks, middle highest. Bearish when neckline breaks."},
              {title:"Bull Flag",desc:"Sharp rise + small consolidation. Often leads to another leg up."},
              {title:"Ascending Triangle",desc:"Higher lows against flat resistance. Typically bullish breakout."},
              {title:"Cup & Handle",desc:"U-shaped recovery + small pullback. Bullish continuation."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="tools" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Charting Tools</h2>
            <div className="mt-6"><IconList items={[
              {title:"TradingView",desc:"Gold standard. Free tier. Advanced indicators and community ideas."},
              {title:"Coinigy",desc:"Professional multi-exchange charting platform."},
              {title:"CoinGecko/CMC",desc:"Simple charts for quick price checks."},
            ]} variant="check" /></div>
          </RevealSection>`,
faq:[
  {q:"Best timeframe for XRP?",a:"Daily for swing trading, 4H for short-term, weekly for long-term trends."},
  {q:"Is TA reliable for XRP?",a:"Provides probabilities, not certainties. XRP is heavily influenced by news events."},
  {q:"Most important indicator?",a:"Volume — confirms whether moves are genuine. RSI and MACD are most popular."},
  {q:"Free charting tools?",a:"TradingView.com has excellent free charting. CoinGecko for basics."},
  {q:"What does overbought RSI mean?",a:"RSI >70 = XRP rose sharply, may be due for pullback. Signal for caution, not guaranteed drop."},
],
related:[
  {href:"/learn/xrp-technical-analysis-guide",label:"TA Guide",desc:"Advanced analysis"},
  {href:"/learn/xrp-price-history",label:"Price History",desc:"Historical prices"},
  {href:"/learn/xrp-price-prediction",label:"Prediction",desc:"Future outlook"},
  {href:"/learn/xrp-swing-trading-guide",label:"Swing Trading",desc:"Trading strategies"},
  {href:"/learn/best-xrp-trading-pairs",label:"Trading Pairs",desc:"Best pairs"},
  {href:"/learn/xrp-bull-run-indicators",label:"Bull Run Signs",desc:"Cycle signals"},
],
cta:{title:"Master XRP Trading",desc:"Combine chart reading with fundamental analysis for better decisions.",pri:{href:"/learn/xrp-technical-analysis-guide",label:"TA Guide →"},sec:{href:"/learn/xrp-price-history",label:"Price History"}},
});

console.log("\nBatch 1 complete (6 how-to pages)");

import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "7 Best XRP Wallets in 2026 — Secure Storage Reviewed",
  description:
    "Compare the 7 best XRP wallets for 2026 including Ledger Nano X, XUMM (Xaman), Trust Wallet, and more. Expert reviews with pros, cons, and security ratings.",
  openGraph: {
    title: "7 Best XRP Wallets in 2026 | AllAboutXRP",
    description: "Expert-reviewed XRP wallets — hardware, mobile, and desktop options compared.",
    url: "https://allaboutxrp.com/best/xrp-wallets",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Best XRP Wallets in 2026 | AllAboutXRP",
    description: "Expert-reviewed XRP wallets — hardware, mobile, and desktop options compared.",
  },
  alternates: { canonical: "https://allaboutxrp.com/best/xrp-wallets" },
  robots: { index: false, follow: true },
};

const wallets = [
  {
    name: "Ledger Nano X",
    bestFor: "Overall Security",
    keyFeature: "Bluetooth + Secure Element chip",
    rating: 9.5,
    type: "Hardware",
    price: "$149",
    xrpNative: "Via Ledger Live",
    platforms: "Windows, macOS, Linux, iOS, Android",
    coins: "5,500+",
    url: "https://www.ledger.com",
    verdict: "The gold standard for XRP cold storage — unmatched security with Bluetooth convenience.",
    pros: ["Military-grade Secure Element chip", "Bluetooth for mobile use", "Supports 5,500+ assets", "Excellent track record"],
    cons: ["Premium price at $149", "Learning curve for beginners", "Bluetooth adds minor attack surface"],
    analysis: [
      "The Ledger Nano X remains the top recommendation for anyone serious about securing their XRP holdings. It stores your private keys on a certified Secure Element chip (CC EAL5+), the same technology used in passports and credit cards. This means even if your computer is compromised, your XRP stays safe.",
      "Bluetooth connectivity sets the Nano X apart from other hardware wallets, allowing you to manage your XRP portfolio from your phone via Ledger Live. The companion app provides a clean interface for sending, receiving, and even swapping XRP. You can also access XRPL DEX functionality through third-party integrations.",
      "The 10-year reserve requirement on XRPL (currently 1 XRP) is handled transparently in Ledger Live, and you can manage multiple XRP accounts. For anyone holding significant XRP, the $149 investment is negligible compared to the security it provides.",
    ],
  },
  {
    name: "Trezor Model T",
    bestFor: "Open-Source Security",
    keyFeature: "Full touchscreen + open-source firmware",
    rating: 9.2,
    type: "Hardware",
    price: "$219",
    xrpNative: "Via Trezor Suite",
    platforms: "Windows, macOS, Linux (web interface)",
    coins: "1,800+",
    url: "https://trezor.io",
    verdict: "Premium open-source hardware wallet with touchscreen — ideal for users who value transparency.",
    pros: ["Fully open-source firmware", "Color touchscreen for verification", "Excellent Trezor Suite interface", "Strong community trust"],
    cons: ["Higher price at $219", "No Bluetooth connectivity", "Fewer supported coins than Ledger"],
    analysis: [
      "The Trezor Model T appeals to XRP holders who prioritize transparency and open-source security. Unlike Ledger's proprietary Secure Element approach, Trezor's firmware is fully auditable — anyone can review the code that protects your assets. For many in the crypto community, this transparency is non-negotiable.",
      "XRP management through Trezor Suite is straightforward. The full-color touchscreen lets you verify transaction details directly on the device, eliminating the risk of man-in-the-middle attacks. You'll see the exact XRP destination address and amount before confirming with a physical button press.",
      "The trade-off is price ($219 vs. Ledger's $149) and the lack of Bluetooth. You'll need a USB-C cable for every transaction. For a pure cold storage solution where you're not making frequent transactions, this is barely an inconvenience.",
    ],
  },
  {
    name: "Trust Wallet",
    bestFor: "Mobile Convenience",
    keyFeature: "Free + built-in DEX access",
    rating: 8.8,
    type: "Mobile (Hot)",
    price: "Free",
    xrpNative: "Yes",
    platforms: "iOS, Android, Browser Extension",
    coins: "10M+ tokens",
    url: "https://trustwallet.com",
    verdict: "The best free mobile wallet for XRP with an intuitive interface and built-in exchange.",
    pros: ["Completely free to use", "Built-in swap and DEX browser", "Backed by Binance", "Extremely user-friendly"],
    cons: ["Hot wallet (less secure than hardware)", "Backed by centralized exchange", "No desktop app"],
    analysis: [
      "Trust Wallet is the go-to choice for XRP holders who want a free, easy-to-use mobile wallet. Acquired by Binance in 2018, it has grown into one of the most popular non-custodial wallets in crypto, supporting virtually every blockchain and token including native XRP.",
      "The app handles XRP's unique requirements well — it clearly explains the 1 XRP reserve requirement during setup and provides a clean interface for managing your XRPL account. The built-in swap feature lets you exchange XRP for other assets without leaving the app.",
      "As a hot wallet, Trust Wallet stores your private keys on your device. This is inherently less secure than hardware wallet storage. For smaller amounts of XRP that you want quick access to, it's excellent. For long-term holdings, consider pairing it with a hardware wallet.",
    ],
  },
  {
    name: "XUMM (Xaman)",
    bestFor: "XRP Ledger Power Users",
    keyFeature: "Full XRPL integration + xApps ecosystem",
    rating: 9.0,
    type: "Mobile (Hot)",
    price: "Free (Pro: $60/year)",
    xrpNative: "Yes — XRPL-native",
    platforms: "iOS, Android",
    coins: "XRP + XRPL tokens only",
    url: "https://xaman.app",
    verdict: "The definitive XRP Ledger wallet — purpose-built for the XRPL ecosystem with unmatched native features.",
    pros: ["Built specifically for XRPL", "xApps ecosystem for DeFi", "Trust Lines management", "Tangem card integration"],
    cons: ["XRP Ledger tokens only", "Pro features require subscription", "Steeper learning curve for XRPL features"],
    analysis: [
      "XUMM (recently rebranded to Xaman) is the wallet built by XRPL Labs specifically for the XRP Ledger. If you're deeply embedded in the XRP ecosystem, nothing else comes close. It provides native access to every XRPL feature: Trust Lines, DEX trading, escrow, payment channels, and the growing xApps ecosystem.",
      "The xApps platform is where Xaman truly shines. These are mini-applications that run inside the wallet, giving you access to XRPL DeFi protocols, NFT marketplaces, and AMM liquidity pools without ever leaving the app. For XRPL AMM yield farming (the closest thing to \"staking\" XRP), Xaman is essential.",
      "The free version covers everything most users need. Xaman Pro ($60/year) adds features like push notifications for incoming payments, enhanced security profiles, and premium xApps. If you're actively using XRPL DeFi, the Pro subscription pays for itself quickly.",
    ],
  },
  {
    name: "Exodus",
    bestFor: "Desktop + Beautiful UI",
    keyFeature: "Built-in exchange + portfolio tracker",
    rating: 8.5,
    type: "Desktop + Mobile",
    price: "Free",
    xrpNative: "Yes",
    platforms: "Windows, macOS, Linux, iOS, Android",
    coins: "300+",
    url: "https://www.exodus.com",
    verdict: "A beautifully designed multi-asset wallet with built-in exchange — great for XRP beginners.",
    pros: ["Stunning user interface", "Desktop and mobile sync", "Built-in exchange", "Trezor hardware wallet integration"],
    cons: ["Not open-source", "Higher swap fees than exchanges", "Limited XRPL-specific features"],
    analysis: [
      "Exodus stands out for its gorgeous design and cross-platform experience. Available on every major platform, it lets you manage your XRP alongside 300+ other assets with a unified portfolio view. The built-in exchange makes it easy to swap between assets without visiting an external exchange.",
      "For XRP specifically, Exodus handles the basics well — sending, receiving, and the account reserve. However, it doesn't offer advanced XRPL features like Trust Lines or DEX access. If you're just holding XRP as part of a diversified portfolio, Exodus is a great fit.",
      "A notable feature is Trezor integration. You can pair Exodus with a Trezor hardware wallet to get the beautiful Exodus interface with hardware-level security. This combination is one of the best experiences available for managing XRP.",
    ],
  },
  {
    name: "Coinbase Wallet",
    bestFor: "Exchange Integration",
    keyFeature: "Seamless Coinbase exchange connection",
    rating: 8.3,
    type: "Mobile + Extension",
    price: "Free",
    xrpNative: "Yes",
    platforms: "iOS, Android, Chrome Extension",
    coins: "100,000+ tokens",
    url: "https://www.coinbase.com/wallet",
    verdict: "The easiest path from buying XRP on Coinbase to self-custody — ideal for Coinbase users.",
    pros: ["Seamless Coinbase integration", "Non-custodial (you hold keys)", "DApp browser", "Backed by public company"],
    cons: ["Tied to Coinbase ecosystem", "Limited XRPL features", "Extension can be clunky"],
    analysis: [
      "Coinbase Wallet (not to be confused with the Coinbase exchange app) is a self-custody wallet where you control your private keys. Its killer feature is seamless integration with the Coinbase exchange — you can transfer XRP between your exchange account and wallet with a few taps.",
      "For users who buy XRP on Coinbase and want to move to self-custody, this is the path of least resistance. The wallet supports XRP natively and provides a clean interface for basic operations. The Chrome extension also enables web3 interactions.",
      "The downside is limited XRPL-specific functionality. You won't find Trust Line management, DEX access, or AMM features. If you're a casual XRP holder who wants basic self-custody with exchange convenience, Coinbase Wallet delivers.",
    ],
  },
  {
    name: "Tangem",
    bestFor: "Simplest Hardware Wallet",
    keyFeature: "NFC card form factor — no battery, no screen",
    rating: 8.7,
    type: "Hardware (NFC Card)",
    price: "$54.90 (2-card set)",
    xrpNative: "Via Tangem app",
    platforms: "iOS, Android (NFC required)",
    coins: "6,000+",
    url: "https://tangem.com",
    verdict: "The most accessible hardware wallet — tap-to-sign with a credit card-sized device.",
    pros: ["Credit card form factor", "No battery or charging needed", "Very affordable for hardware", "EAL6+ certified chip"],
    cons: ["Requires NFC-capable phone", "No screen for verification", "Less established brand"],
    analysis: [
      "Tangem takes a radically different approach to hardware wallets. Instead of a USB device with a screen, it's a credit card-sized NFC card. You tap it against your phone to sign transactions. There's no battery, no charging, no cables — just a card you keep in your physical wallet.",
      "The security credentials are impressive: the chip is EAL6+ certified (higher than Ledger's EAL5+) and stores your private key in a way that even Tangem can't extract. The card is rated for 25+ years of use. For XRP holders who want hardware security without the complexity, Tangem is a revelation.",
      "The trade-off is the lack of an on-device screen. Transaction verification happens on your phone screen, which means you're trusting that the Tangem app is showing you accurate information. The Tangem app has been audited, but purists may prefer a device with its own display. At $54.90 for a 2-card backup set, it's the most affordable hardware wallet option.",
    ],
  },
];

const faqItems = [
  {
    q: "What is the safest way to store XRP?",
    a: "The safest way to store XRP is on a hardware wallet like the Ledger Nano X or Trezor Model T. These devices keep your private keys offline, protecting them from hackers and malware. For maximum security, use a hardware wallet and store your recovery phrase in a secure physical location.",
  },
  {
    q: "Do I need to keep 1 XRP in my wallet?",
    a: "Yes. The XRP Ledger requires a minimum reserve of 1 XRP (previously 10 XRP, reduced in 2024) to activate an account. This reserve is locked and cannot be spent. Each Trust Line or other object on your account requires an additional 0.2 XRP reserve.",
  },
  {
    q: "What happens if I lose my XRP wallet?",
    a: "If you have your recovery phrase (seed phrase), you can restore your wallet on any compatible device. If you lose both your wallet and recovery phrase, your XRP is permanently inaccessible. Always store your recovery phrase in a secure, offline location.",
  },
  {
    q: "Is XUMM (Xaman) safe to use?",
    a: "Yes. XUMM (Xaman) is developed by XRPL Labs, a well-respected team in the XRP community. It's a non-custodial wallet, meaning you control your private keys. The app has undergone security audits and has been used by millions of XRPL users.",
  },
  {
    q: "Can I store XRP on a Trezor wallet?",
    a: "Yes. Both the Trezor Model T and Trezor Safe 3 support XRP natively through the Trezor Suite application. You can send, receive, and manage XRP directly from the Trezor interface.",
  },
  {
    q: "What's the difference between a hot wallet and a cold wallet?",
    a: "A hot wallet is connected to the internet (like Trust Wallet or Exodus), offering convenience but more exposure to online threats. A cold wallet (like Ledger or Trezor) stores keys offline, providing superior security. Many users keep small amounts in a hot wallet for daily use and larger holdings in cold storage.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://allaboutxrp.com/best" },
    { "@type": "ListItem", position: 3, name: "XRP Wallets", item: "https://allaboutxrp.com/best/xrp-wallets" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Best XRP Wallets in 2026",
  description: "Expert comparison of the 7 best wallets for storing XRP securely in 2026.",
  url: "https://allaboutxrp.com/best/xrp-wallets",
  datePublished: "2026-02-11",
  dateModified: "2026-02-11",
  author: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
  publisher: { "@type": "Organization", name: "AllAboutXRP", url: "https://allaboutxrp.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best XRP Wallets 2026",
  itemListElement: wallets.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: w.name,
    url: w.url,
  })),
};

export default function BestXRPWalletsPage() {
  return (
    <>
      <SEOSchema schema={[breadcrumbSchema, articleSchema, faqSchema, itemListSchema]} />
      <main className="min-h-screen bg-black">
        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/best" className="hover:text-white transition-colors">Best</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">XRP Wallets</span>
          </nav>

          <p className="text-sm text-zinc-500 mb-4">Last Updated: February 11, 2026</p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            7 Best XRP Wallets in 2026
          </h1>
          <p className="text-lg text-zinc-400 mb-6 max-w-2xl">
            We tested and compared the top wallets for storing XRP — from hardware cold storage to
            mobile hot wallets. Here are our picks for security, usability, and XRP-specific features.
          </p>


          {/* Quick Picks Table */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">⚡ Quick Picks</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm text-left">
                <thead className="bg-zinc-900 text-zinc-400 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Wallet</th>
                    <th className="px-4 py-3">Best For</th>
                    <th className="px-4 py-3">Key Feature</th>
                    <th className="px-4 py-3 text-center">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {wallets.map((w) => (
                    <tr key={w.name} className="bg-zinc-950 hover:bg-zinc-900/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">{w.name}</td>
                      <td className="px-4 py-3 text-zinc-400">{w.bestFor}</td>
                      <td className="px-4 py-3 text-zinc-400">{w.keyFeature}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-block rounded-full bg-[#0085FF]/10 px-2 py-0.5 font-mono text-[#0085FF] font-semibold">
                          {w.rating}/10
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How We Evaluated */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">How We Evaluated</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We assessed each wallet across five criteria, weighted by importance to XRP holders:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Security (35%)", "Key storage method, encryption, audit history, and track record against hacks."],
                ["XRP Features (25%)", "Native XRPL support, Trust Lines, DEX access, AMM integration."],
                ["Ease of Use (20%)", "Setup experience, interface clarity, and documentation quality."],
                ["Platform Support (10%)", "Available operating systems, mobile apps, and browser extensions."],
                ["Value (10%)", "Price relative to features and security provided."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                  <p className="text-xs text-zinc-500">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Individual Reviews */}
          {wallets.map((w, idx) => (
            <section key={w.name} className="mb-16" id={w.name.toLowerCase().replace(/[\s()]/g, "-")}>
              <h2 className="text-2xl font-bold text-white mb-2">
                {idx + 1}. {w.name}
              </h2>
              {/* Verdict */}
              <div className="rounded-lg border-l-4 border-[#0085FF] bg-[#0085FF]/5 px-4 py-3 mb-6">
                <p className="text-sm font-medium text-[#0085FF]">
                  🏆 Verdict: {w.verdict}
                </p>
              </div>

              {/* Pros/Cons */}
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <div className="rounded-lg border border-green-900/30 bg-green-950/10 p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-2">✅ Pros</h3>
                  <ul className="space-y-1">
                    {w.pros.map((p) => (
                      <li key={p} className="text-sm text-zinc-400">• {p}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-red-900/30 bg-red-950/10 p-4">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">❌ Cons</h3>
                  <ul className="space-y-1">
                    {w.cons.map((c) => (
                      <li key={c} className="text-sm text-zinc-400">• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Specs */}
              <div className="overflow-x-auto rounded-lg border border-zinc-800 mb-6">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-zinc-800">
                    {[
                      ["Type", w.type],
                      ["Price", w.price],
                      ["XRP Support", w.xrpNative],
                      ["Platforms", w.platforms],
                      ["Supported Assets", w.coins],
                    ].map(([label, val]) => (
                      <tr key={label} className="bg-zinc-950">
                        <td className="px-4 py-2 font-medium text-zinc-400 w-40">{label}</td>
                        <td className="px-4 py-2 text-white font-mono text-xs">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Analysis */}
              {w.analysis.map((para, i) => (
                <p key={i} className="text-zinc-400 leading-relaxed mb-4">{para}</p>
              ))}

              <a
                href={w.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-[#0085FF] px-4 py-2 text-sm font-medium text-white hover:bg-[#0085FF]/80 transition-colors"
              >
                Visit {w.name} →
              </a>
            </section>
          ))}

          {/* Full Comparison Table */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Full Comparison Table</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-xs text-left">
                <thead className="bg-zinc-900 text-zinc-400 uppercase">
                  <tr>
                    <th className="px-3 py-3">Wallet</th>
                    <th className="px-3 py-3">Type</th>
                    <th className="px-3 py-3">Price</th>
                    <th className="px-3 py-3">Assets</th>
                    <th className="px-3 py-3">XRPL Native</th>
                    <th className="px-3 py-3 text-center">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {wallets.map((w) => (
                    <tr key={w.name} className="bg-zinc-950 hover:bg-zinc-900/50">
                      <td className="px-3 py-2 font-medium text-white">{w.name}</td>
                      <td className="px-3 py-2 text-zinc-400">{w.type}</td>
                      <td className="px-3 py-2 text-zinc-400 font-mono">{w.price}</td>
                      <td className="px-3 py-2 text-zinc-400">{w.coins}</td>
                      <td className="px-3 py-2 text-zinc-400">{w.xrpNative}</td>
                      <td className="px-3 py-2 text-center font-mono text-[#0085FF]">{w.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">How to Choose the Right XRP Wallet</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              The best wallet depends on your specific needs. Use this decision framework:
            </p>
            <div className="space-y-4">
              {[
                ["🔒 Maximum security?", "Go with Ledger Nano X or Trezor Model T. Hardware wallets are non-negotiable for large holdings."],
                ["📱 Daily XRP transactions?", "XUMM (Xaman) is purpose-built for XRPL with the deepest feature set."],
                ["🆓 Free and simple?", "Trust Wallet offers a polished experience at zero cost."],
                ["💻 Desktop portfolio management?", "Exodus provides the best cross-platform experience with beautiful design."],
                ["💳 Simplest hardware wallet?", "Tangem's NFC card is the easiest cold storage option at the lowest price."],
                ["🔄 Coinbase user?", "Coinbase Wallet provides seamless transfer between exchange and self-custody."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                  <p className="text-sm text-zinc-400">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 leading-relaxed mt-6">
              Many experienced XRP holders use a combination: a hardware wallet for long-term storage and a
              mobile wallet like Xaman for daily XRPL interactions. Learn more about XRP fundamentals in our{" "}
              <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">What is XRP?</Link> guide,
              or get started with our{" "}
              <Link href="/learn/get-started" className="text-[#0085FF] hover:underline">beginner&apos;s guide</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-zinc-900/50 transition-colors">
                    {f.q}
                    <span className="ml-2 text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-lg font-semibold text-white mb-4">Continue Learning</h2>
            <div className="flex flex-wrap gap-3">
              {[
                ["/learn/what-is-xrp", "What is XRP?"],
                ["/learn/xrp-wallets", "XRP Wallets Guide"],
                ["/learn/how-to-buy-xrp", "How to Buy XRP"],
                ["/best/xrp-exchanges", "Best XRP Exchanges"],
                ["/best/hardware-wallets-for-xrp", "Best Hardware Wallets"],
                ["/answers/is-xrp-a-good-investment", "Is XRP a Good Investment?"],
                ["/answers/how-fast-is-xrp", "How Fast is XRP?"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 hover:border-[#0085FF] hover:text-[#0085FF] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

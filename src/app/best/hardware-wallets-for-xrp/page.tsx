import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";

export const metadata: Metadata = {
  title: "5 Best Hardware Wallets for XRP in 2026 — Cold Storage Compared",
  description:
    "Compare the 5 best hardware wallets for XRP cold storage in 2026. Ledger vs Trezor vs Tangem — security features, prices, and expert recommendations.",
  openGraph: {
    title: "5 Best Hardware Wallets for XRP in 2026 | AllAboutXRP",
    description: "Expert comparison of Ledger, Trezor, and Tangem hardware wallets for XRP storage.",
    url: "https://allaboutxrp.com/best/hardware-wallets-for-xrp",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Best Hardware Wallets for XRP in 2026 | AllAboutXRP",
    description: "Expert comparison of Ledger, Trezor, and Tangem hardware wallets for XRP storage.",
  },
  alternates: { canonical: "https://allaboutxrp.com/best/hardware-wallets-for-xrp" },
};

const wallets = [
  {
    name: "Ledger Nano X",
    bestFor: "Best Overall",
    keyFeature: "Bluetooth + Secure Element (CC EAL5+)",
    rating: 9.5,
    price: "$149",
    connectivity: "USB-C + Bluetooth",
    chip: "Secure Element (CC EAL5+)",
    display: "128×64 px OLED",
    battery: "Yes (Bluetooth use)",
    coins: "5,500+",
    dimensions: "72mm × 18.6mm × 11.75mm",
    weight: "34g",
    companion: "Ledger Live (Desktop + Mobile)",
    url: "https://www.ledger.com",
    verdict: "The best all-around hardware wallet for XRP — Bluetooth convenience meets bank-grade security.",
    pros: ["Bluetooth for mobile management", "CC EAL5+ Secure Element", "5,500+ supported assets", "Mature Ledger Live ecosystem"],
    cons: ["$149 price point", "Proprietary firmware (not open-source)", "Bluetooth is an additional attack vector (minor)"],
    analysis: [
      "The Ledger Nano X has been the benchmark hardware wallet since its release, and in 2026 it remains the top recommendation for XRP holders who want both security and convenience. The CC EAL5+ certified Secure Element chip stores your private keys in tamper-resistant silicon — the same technology protecting your passport and bank cards.",
      "What sets the Nano X apart is Bluetooth connectivity. You can manage your XRP from the Ledger Live mobile app without any cables. This is particularly useful for XRP holders who use the XRPL DEX or interact with DeFi protocols — you can sign transactions on the go while keeping your keys hardware-secured.",
      "Ledger Live provides a comprehensive XRP management experience: send, receive, view transaction history, and manage your XRPL account reserve. The app clearly displays the 1 XRP minimum reserve and any additional reserves from Trust Lines. For users who hold multiple cryptocurrencies alongside XRP, the Nano X can store up to 100 apps simultaneously.",
    ],
  },
  {
    name: "Ledger Nano S Plus",
    bestFor: "Best Budget Ledger",
    keyFeature: "Same Secure Element as Nano X at half the price",
    rating: 9.0,
    price: "$79",
    connectivity: "USB-C only",
    chip: "Secure Element (CC EAL5+)",
    display: "128×64 px OLED",
    battery: "No",
    coins: "5,500+",
    dimensions: "62.39mm × 17.40mm × 8.24mm",
    weight: "21g",
    companion: "Ledger Live (Desktop only for signing)",
    url: "https://www.ledger.com",
    verdict: "All the security of the Nano X at half the price — the best value hardware wallet for XRP.",
    pros: ["Same CC EAL5+ Secure Element as Nano X", "Half the price at $79", "Compact and lightweight", "100 app capacity"],
    cons: ["No Bluetooth (USB-C only)", "No battery — requires cable for every use", "No mobile signing (desktop only for transactions)"],
    analysis: [
      "The Ledger Nano S Plus is the smart choice for XRP holders who prioritize security over convenience. It uses the exact same CC EAL5+ Secure Element chip as the more expensive Nano X, providing identical cryptographic security for your XRP private keys. The only things you give up are Bluetooth and a battery.",
      "For many XRP holders — especially those using their hardware wallet primarily for cold storage rather than daily transactions — the lack of Bluetooth is irrelevant. You plug it into your computer via USB-C, sign a transaction in Ledger Live, and put it back in a drawer. The security is identical to the $149 Nano X.",
      "At $79, the Nano S Plus is the most cost-effective way to get Ledger's security for your XRP. It supports the same 5,500+ assets and holds up to 100 apps. If you don't need Bluetooth mobile management and want to save $70, this is the clear choice. Pair it with the Ledger Live desktop app for a complete XRP management experience.",
    ],
  },
  {
    name: "Trezor Model T",
    bestFor: "Best Open-Source Option",
    keyFeature: "Fully open-source firmware + color touchscreen",
    rating: 9.2,
    price: "$219",
    connectivity: "USB-C",
    chip: "STM32F427 (no Secure Element)",
    display: "240×240 px color touchscreen",
    battery: "No",
    coins: "1,800+",
    dimensions: "64mm × 39mm × 10mm",
    weight: "22g",
    companion: "Trezor Suite (Desktop + Web)",
    url: "https://trezor.io",
    verdict: "The gold standard for open-source hardware security — fully auditable firmware with a premium touchscreen.",
    pros: ["100% open-source firmware", "Color touchscreen for secure verification", "Trezor Suite is excellent", "Shamir Backup support"],
    cons: ["$219 is the highest price on this list", "No Secure Element (uses passphrase instead)", "No Bluetooth", "Fewer supported coins"],
    analysis: [
      "The Trezor Model T represents a fundamentally different security philosophy than Ledger. Where Ledger relies on a proprietary Secure Element chip, Trezor makes its entire firmware open-source and auditable. Every line of code protecting your XRP can be independently verified by security researchers. For many in the crypto community, this transparency is worth more than any certification.",
      "The color touchscreen is a significant security feature, not just a luxury. When you send XRP, the full destination address and amount are displayed on the device's own screen. You verify and confirm directly on the Trezor, making it impossible for malware on your computer to trick you into sending to the wrong address. The touchscreen also enables secure PIN entry and passphrase input.",
      "Trezor's approach to security without a Secure Element relies on strong passphrases and Shamir Backup — a method of splitting your recovery phrase into multiple shares that can be distributed across locations. This is particularly appealing for XRP holders with significant positions who want geographic distribution of their backup. Trezor Suite handles XRP natively with a clean, professional interface.",
    ],
  },
  {
    name: "Trezor Safe 3",
    bestFor: "Best Mid-Range Trezor",
    keyFeature: "Secure Element + open-source at $79",
    rating: 8.8,
    price: "$79",
    connectivity: "USB-C",
    chip: "Secure Element (EAL6+) + open-source firmware",
    display: "Monochrome OLED",
    battery: "No",
    coins: "1,800+",
    dimensions: "59mm × 32mm × 7.4mm",
    weight: "13g",
    companion: "Trezor Suite (Desktop + Web)",
    url: "https://trezor.io",
    verdict: "Trezor's best value — combines a Secure Element with open-source firmware for the first time.",
    pros: ["EAL6+ Secure Element chip", "Open-source firmware", "Very affordable at $79", "Smallest and lightest option"],
    cons: ["No touchscreen (button navigation only)", "Monochrome display is basic", "Newer product — less track record"],
    analysis: [
      "The Trezor Safe 3 represents a milestone for Trezor: it's the first Trezor device to include a Secure Element chip while maintaining open-source firmware. Previously, you had to choose between Ledger's Secure Element (proprietary) or Trezor's open-source approach (no Secure Element). The Safe 3 gives you both.",
      "At $79, it matches the Ledger Nano S Plus in price while offering the EAL6+ certified Secure Element — actually a higher certification than Ledger's EAL5+. The open-source firmware means the community can verify that the Secure Element is being used properly and that there are no backdoors.",
      "The trade-off compared to the Model T is the display — you get a monochrome OLED instead of a color touchscreen, and navigation uses physical buttons. For pure XRP cold storage, this is perfectly adequate. The Safe 3 is the smallest hardware wallet on this list at just 13g, making it easy to store or carry discreetly. XRP is fully supported through Trezor Suite.",
    ],
  },
  {
    name: "Tangem",
    bestFor: "Simplest Cold Storage",
    keyFeature: "Credit card NFC — tap to sign, no battery",
    rating: 8.7,
    price: "$54.90 (2-card set)",
    connectivity: "NFC only",
    chip: "Samsung S3D350A (EAL6+)",
    display: "None (phone screen)",
    battery: "No battery needed",
    coins: "6,000+",
    dimensions: "85.6mm × 54mm × 0.8mm (credit card)",
    weight: "6g per card",
    companion: "Tangem App (iOS + Android)",
    url: "https://tangem.com",
    verdict: "The most accessible hardware wallet — credit card simplicity with EAL6+ security.",
    pros: ["Credit card form factor — fits in any wallet", "No battery, cables, or charging ever", "EAL6+ Samsung chip", "Most affordable option at $54.90 for 2 cards"],
    cons: ["No on-device screen for verification", "Requires NFC-capable smartphone", "Less established than Ledger/Trezor", "Can't verify addresses on device"],
    analysis: [
      "Tangem reimagines what a hardware wallet can be. Instead of a USB device with buttons and a screen, it's a credit card. You tap it against your NFC-capable phone to sign transactions. There's nothing to charge, no cables to carry, no firmware to update. The simplicity is revolutionary, and it's making hardware wallets accessible to people who would never buy a traditional one.",
      "The security is surprisingly robust. The Samsung S3D350A chip is EAL6+ certified — higher than both Ledger and older Trezor models. Your XRP private key is generated on the card during setup and never leaves the chip. Even Tangem can't extract it. The cards are rated for 25+ years of operation and are resistant to water, dust, and extreme temperatures.",
      "The primary trade-off is the lack of an on-device screen. When you send XRP, you verify the transaction details on your phone screen (via the Tangem app) rather than on the hardware device itself. This means you're trusting your phone's display, which is theoretically less secure than verifying on a dedicated hardware screen. For most users, the Tangem app's security audits mitigate this concern. At $54.90 for a 2-card backup set, it's the cheapest entry point to hardware-secured XRP storage.",
    ],
  },
];

const faqItems = [
  {
    q: "Do hardware wallets support XRP natively?",
    a: "Yes. All five hardware wallets on this list — Ledger Nano X, Ledger Nano S Plus, Trezor Model T, Trezor Safe 3, and Tangem — support XRP natively through their respective companion apps (Ledger Live, Trezor Suite, Tangem App).",
  },
  {
    q: "Is Ledger or Trezor better for XRP?",
    a: "Both are excellent. Ledger offers Bluetooth convenience and a proprietary Secure Element. Trezor offers open-source firmware and (with the Model T) a touchscreen. If transparency matters most, choose Trezor. If mobile convenience matters most, choose Ledger Nano X.",
  },
  {
    q: "Can my hardware wallet be hacked?",
    a: "Hardware wallets are designed to resist hacking. Your private keys never leave the device. The main risks are physical theft combined with a weak PIN, phishing attacks that trick you into entering your seed phrase, and supply chain attacks (buying from unofficial sellers). Always buy directly from the manufacturer.",
  },
  {
    q: "What happens to my XRP if my hardware wallet breaks?",
    a: "Your XRP is on the blockchain, not on the device. As long as you have your recovery phrase (seed phrase), you can restore your wallet on any compatible device — even a different brand. The recovery phrase IS your wallet.",
  },
  {
    q: "How much XRP do I need to justify a hardware wallet?",
    a: "There's no minimum, but a common guideline is: if losing your XRP would meaningfully impact your finances, use a hardware wallet. At $54.90, even a Tangem card is worthwhile for holdings of a few hundred dollars or more.",
  },
  {
    q: "Can I use a hardware wallet with XUMM/Xaman?",
    a: "Tangem cards can be paired directly with the Xaman (XUMM) wallet app for signing transactions. Ledger and Trezor do not have direct Xaman integration — you would use their respective companion apps (Ledger Live, Trezor Suite) for XRP management.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://allaboutxrp.com/best" },
    { "@type": "ListItem", position: 3, name: "Hardware Wallets for XRP", item: "https://allaboutxrp.com/best/hardware-wallets-for-xrp" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 Best Hardware Wallets for XRP in 2026",
  description: "Detailed comparison of the 5 best hardware wallets for XRP cold storage.",
  url: "https://allaboutxrp.com/best/hardware-wallets-for-xrp",
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
  name: "Best Hardware Wallets for XRP 2026",
  itemListElement: wallets.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: w.name,
    url: w.url,
  })),
};

export default function BestHardwareWalletsPage() {
  return (
    <>
      <SEOSchema schema={[breadcrumbSchema, articleSchema, faqSchema, itemListSchema]} />
      <main className="min-h-screen bg-black">
        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/best" className="hover:text-white transition-colors">Best</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Hardware Wallets for XRP</span>
          </nav>

          <p className="text-sm text-zinc-500 mb-4">Last Updated: February 11, 2026</p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            5 Best Hardware Wallets for XRP in 2026
          </h1>
          <p className="text-lg text-zinc-400 mb-6 max-w-2xl">
            Hardware wallets are the gold standard for XRP security. We tested all major options —
            here&apos;s how Ledger, Trezor, and Tangem compare for XRP cold storage.
          </p>


          {/* Quick Picks */}
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
              Hardware wallets live or die by security. Our evaluation criteria for XRP cold storage:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Security Architecture (40%)", "Chip certification, firmware security model, supply chain protection."],
                ["XRP Compatibility (20%)", "Native XRP support, XRPL features, reserve handling."],
                ["Usability (20%)", "Setup experience, companion app quality, transaction signing flow."],
                ["Build Quality (10%)", "Physical durability, screen quality, form factor."],
                ["Value (10%)", "Price relative to security and features provided."],
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
            <section key={w.name} className="mb-16" id={w.name.toLowerCase().replace(/[\s+]/g, "-")}>
              <h2 className="text-2xl font-bold text-white mb-2">
                {idx + 1}. {w.name}
              </h2>
              <div className="rounded-lg border-l-4 border-[#0085FF] bg-[#0085FF]/5 px-4 py-3 mb-6">
                <p className="text-sm font-medium text-[#0085FF]">🏆 Verdict: {w.verdict}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <div className="rounded-lg border border-green-900/30 bg-green-950/10 p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-2">✅ Pros</h3>
                  <ul className="space-y-1">
                    {w.pros.map((p) => <li key={p} className="text-sm text-zinc-400">• {p}</li>)}
                  </ul>
                </div>
                <div className="rounded-lg border border-red-900/30 bg-red-950/10 p-4">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">❌ Cons</h3>
                  <ul className="space-y-1">
                    {w.cons.map((c) => <li key={c} className="text-sm text-zinc-400">• {c}</li>)}
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto rounded-lg border border-zinc-800 mb-6">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-zinc-800">
                    {[
                      ["Price", w.price],
                      ["Connectivity", w.connectivity],
                      ["Security Chip", w.chip],
                      ["Display", w.display],
                      ["Battery", w.battery],
                      ["Supported Assets", w.coins],
                      ["Dimensions", w.dimensions],
                      ["Weight", w.weight],
                      ["Companion App", w.companion],
                    ].map(([label, val]) => (
                      <tr key={label} className="bg-zinc-950">
                        <td className="px-4 py-2 font-medium text-zinc-400 w-40">{label}</td>
                        <td className="px-4 py-2 text-white font-mono text-xs">{String(val)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {w.analysis.map((para, i) => (
                <p key={i} className="text-zinc-400 leading-relaxed mb-4">{para}</p>
              ))}

              <a
                href={w.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
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
                    <th className="px-3 py-3">Price</th>
                    <th className="px-3 py-3">Chip</th>
                    <th className="px-3 py-3">Display</th>
                    <th className="px-3 py-3">Connectivity</th>
                    <th className="px-3 py-3">Open Source</th>
                    <th className="px-3 py-3 text-center">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {wallets.map((w) => (
                    <tr key={w.name} className="bg-zinc-950 hover:bg-zinc-900/50">
                      <td className="px-3 py-2 font-medium text-white">{w.name}</td>
                      <td className="px-3 py-2 text-zinc-400 font-mono">{w.price}</td>
                      <td className="px-3 py-2 text-zinc-400 text-xs">{w.chip}</td>
                      <td className="px-3 py-2 text-zinc-400">{w.display}</td>
                      <td className="px-3 py-2 text-zinc-400">{w.connectivity}</td>
                      <td className="px-3 py-2 text-zinc-400">{w.name.includes("Trezor") ? "Yes" : w.name === "Tangem" ? "Partial" : "No"}</td>
                      <td className="px-3 py-2 text-center font-mono text-[#0085FF]">{w.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">How to Choose the Right Hardware Wallet</h2>
            <div className="space-y-4">
              {[
                ["🏆 Best overall?", "Ledger Nano X — Bluetooth + Secure Element is the winning combination."],
                ["💰 Best value?", "Ledger Nano S Plus or Trezor Safe 3 — both $79 with excellent security."],
                ["🔓 Want open-source?", "Trezor Model T (fully open) or Trezor Safe 3 (open + Secure Element)."],
                ["💳 Simplest possible?", "Tangem — credit card form factor, tap to sign, nothing to charge."],
                ["📱 Need mobile signing?", "Ledger Nano X (Bluetooth) or Tangem (NFC)."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                  <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                  <p className="text-sm text-zinc-400">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 leading-relaxed mt-6">
              Whichever hardware wallet you choose, you&apos;re making a significant upgrade over exchange custody
              or software wallets. See our full{" "}
              <Link href="/best/xrp-wallets" className="text-[#0085FF] hover:underline">XRP wallet comparison</Link> for
              software options, or learn about{" "}
              <Link href="/learn/what-is-xrp" className="text-[#0085FF] hover:underline">how XRP works</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((f) => (
                <details key={f.q} className="group rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-zinc-900/50 transition-colors">
                    {f.q}
                    <span className="ml-2 text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-zinc-400 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-lg font-semibold text-white mb-4">Continue Learning</h2>
            <div className="flex flex-wrap gap-3">
              {[
                ["/learn/xrp-wallets", "XRP Wallets Guide"],
                ["/learn/how-to-buy-xrp", "How to Buy XRP"],
                ["/best/xrp-wallets", "All XRP Wallets"],
                ["/best/xrp-exchanges", "Best XRP Exchanges"],
                ["/learn/xrp-staking", "XRP Staking"],
                ["/answers/how-fast-is-xrp", "How Fast is XRP?"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 hover:border-[#0085FF] hover:text-[#0085FF] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </section>
          {/* Affiliate Disclosure */}
          <div className="mt-16 rounded-lg border border-yellow-900/50 bg-yellow-950/20 px-4 py-3 text-sm text-yellow-200/80">
            📋 This page may contain affiliate links. We may earn a commission at no extra cost to you.
          </div>
        </article>
      </main>
    </>
  );
}

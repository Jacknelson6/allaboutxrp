import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";

export const metadata: Metadata = {
  title: "Best XRP Products & Services — Expert Reviews & Comparisons",
  description:
    "Find the best wallets, exchanges, hardware wallets, and earning platforms for XRP. Expert reviews, side-by-side comparisons, and honest recommendations.",
  openGraph: {
    title: "Best XRP Products & Services | AllAboutXRP",
    description:
      "Expert-reviewed wallets, exchanges, and tools for the XRP ecosystem.",
    url: "https://allaboutxrp.com/best",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best XRP Products & Services | AllAboutXRP",
    description:
      "Expert-reviewed wallets, exchanges, and tools for the XRP ecosystem.",
  },
  alternates: { canonical: "https://allaboutxrp.com/best" },
};

const listicles = [
  {
    href: "/best/xrp-wallets",
    title: "7 Best XRP Wallets in 2026",
    description:
      "From hardware cold storage to mobile hot wallets — find the safest place to store your XRP.",
    badge: "7 Reviewed",
  },
  {
    href: "/best/xrp-exchanges",
    title: "8 Best Exchanges to Buy XRP in 2026",
    description:
      "Compare fees, features, and availability across the top cryptocurrency exchanges for buying XRP.",
    badge: "8 Reviewed",
  },
  {
    href: "/best/hardware-wallets-for-xrp",
    title: "5 Best Hardware Wallets for XRP in 2026",
    description:
      "Dedicated hardware wallet comparison for maximum XRP security with offline key storage.",
    badge: "5 Reviewed",
  },
  {
    href: "/best/xrp-staking-platforms",
    title: "Best Ways to Earn Yield on XRP in 2026",
    description:
      "XRP doesn't have native staking, but there are legitimate ways to earn yield. We break them all down.",
    badge: "Yield Guide",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://allaboutxrp.com/best" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Best XRP Products & Services",
  description: "Expert reviews and comparisons of the best wallets, exchanges, and earning platforms for XRP.",
  url: "https://allaboutxrp.com/best",
};

export default function BestHubPage() {
  return (
    <>
      <SEOSchema schema={[breadcrumbSchema, collectionSchema]} />
      <main className="min-h-screen bg-black">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Best</span>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Best XRP Products &amp; Services
          </h1>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Expert-reviewed wallets, exchanges, hardware wallets, and earning platforms for
            the XRP ecosystem. Every product is independently evaluated.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {listicles.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-[#0085FF]/50 hover:bg-zinc-900/50"
              >
                <span className="inline-block rounded-full bg-[#0085FF]/10 px-3 py-1 text-xs font-medium text-[#0085FF] mb-3">
                  {item.badge}
                </span>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-[#0085FF] transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#0085FF]">
                  Read review →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-xl font-semibold text-white mb-3">How We Review</h2>
            <p className="text-zinc-400 leading-relaxed">
              Every product on AllAboutXRP is independently researched and evaluated. We consider
              security, ease of use, fees, XRP-specific features, community reputation, and
              regulatory compliance. We may earn affiliate commissions, but this never influences
              our rankings or recommendations.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="/learn/what-is-xrp" className="text-sm text-[#0085FF] hover:underline">
                What is XRP? →
              </Link>
              <Link href="/learn/get-started" className="text-sm text-[#0085FF] hover:underline">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

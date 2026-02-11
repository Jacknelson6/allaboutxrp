import { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";

export const metadata: Metadata = {
  title: "Free XRP Tools — Calculators & Utilities",
  description:
    "Free XRP tools: profit/loss calculator, transaction fee calculator, and more. No sign-up required.",
  openGraph: {
    title: "Free XRP Tools | AllAboutXRP",
    description: "Free calculators and utilities for XRP investors and users.",
    url: "https://allaboutxrp.com/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free XRP Tools | AllAboutXRP",
    description: "Free calculators and utilities for XRP investors and users.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools" },
};

const tools = [
  {
    href: "/tools/xrp-profit-calculator",
    title: "XRP Profit Calculator",
    description: "Calculate your profit or loss on XRP trades. Input buy price, sell price, and amount — see ROI instantly.",
    badge: "Calculator",
  },
  {
    href: "/tools/xrp-fee-calculator",
    title: "XRP Transaction Fee Calculator",
    description: "See how much XRP transactions really cost. Compare fees across hundreds or thousands of transactions.",
    badge: "Calculator",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allaboutxrp.com" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://allaboutxrp.com/tools" },
  ],
};

export default function ToolsHubPage() {
  return (
    <>
      <SEOSchema schema={breadcrumbSchema} />
      <main className="min-h-screen bg-black">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Tools</span>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Free XRP Tools
          </h1>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
            Free calculators and utilities for XRP investors. No sign-up required — everything runs in your browser.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-[#0085FF]/50 hover:bg-zinc-900/50"
              >
                <span className="inline-block rounded-full bg-[#0085FF]/10 px-3 py-1 text-xs font-medium text-[#0085FF] mb-3">
                  {tool.badge}
                </span>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-[#0085FF] transition-colors">
                  {tool.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">{tool.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#0085FF]">
                  Open tool →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/learn/what-is-xrp" className="text-sm text-[#0085FF] hover:underline">What is XRP? →</Link>
            <Link href="/best" className="text-sm text-[#0085FF] hover:underline">Best XRP Products →</Link>
          </div>
        </div>
      </main>
    </>
  );
}

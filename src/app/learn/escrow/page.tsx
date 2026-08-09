import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EscrowContent from "@/app/escrow/EscrowContent";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import { buildArticleSchema, buildBreadcrumbSchema, buildSpeakableSchema } from "@/lib/utils/seo";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Escrow — How Ripple's Escrow System Works",
  description: "Learn how Ripple's XRP escrow system works, its monthly release schedule, and its impact on XRP supply.",
  alternates: { canonical: "https://allaboutxrp.com/learn/escrow" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Escrow: How Ripple's Escrow System Works",
    description: "A comprehensive guide to Ripple's XRP escrow system, monthly release schedule, and impact on supply.",
    url: "https://allaboutxrp.com/learn/escrow",
    datePublished: "2026-02-10",
    dateModified: "2026-07-27",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Escrow" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/escrow" }),
];

const relatedLinks = [
  { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply, distribution & burns" },
  { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
  { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
  { href: "/learn/rlusd", label: "RLUSD Stablecoin", desc: "Ripple's USD-backed stablecoin" },
  { href: "/learn/xrp-supply-explained", label: "How Many XRP Exist?", desc: "Total supply breakdown" },
  { href: "/learn/xrp-wallets", label: "Best XRP Wallets", desc: "Where to store your XRP" },
];

export default function EscrowLearnPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEOSchema schema={schemas} />
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <div className="mx-auto max-w-4xl pb-6">
          <AuthorByline date="2026-02-10" modified="2026-08-08" />
        </div>
        <EscrowContent />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 text-text-secondary leading-relaxed">
            <h2 className="text-xl font-bold text-text-primary">How to evaluate an escrow release</h2>
            <p className="mt-3">A scheduled unlock is not the same thing as an open-market sale. Check the originating escrow transaction, the amount returned to new escrows, transfers to Ripple-controlled accounts, and exchange inflows before drawing a conclusion about sell pressure. Our <Link href="/learn/escrow" className="text-xrp-accent underline decoration-xrp-accent/30">live escrow tracker</Link> is designed to make those on-ledger events inspectable without presenting an unsupported price-correlation claim.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <h2 className="text-xl font-bold text-white mb-6">Continue Learning</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-[#0085FF]/30 hover:bg-white/[0.04]">
                <div className="flex-1">
                  <span className="text-sm font-medium text-white group-hover:text-[#0085FF] transition-colors">{link.label}</span>
                  <p className="text-xs text-[#888] mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-[#0085FF] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

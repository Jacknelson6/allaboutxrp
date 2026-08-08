import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RiddlersContent from "@/app/riddlers/RiddlersContent";
import AuthorByline from "@/components/shared/AuthorByline";
import SEOSchema from "@/components/shared/SEOSchema";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/utils/seo";

export const dynamic = "force-static";

const relatedLinks = [
  { href: "/learn/history", label: "XRP History", desc: "The full timeline from 2012" },
  { href: "/learn/trusted-sources", label: "Trusted Sources", desc: "Curated XRP community voices" },
  { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
  { href: "/learn/key-people", label: "Key People", desc: "XRP ecosystem leaders" },
  { href: "/learn/is-xrp-a-good-investment", label: "Is XRP a Good Investment?", desc: "Analysis and considerations" },
  { href: "/best/xrp-wallets", label: "Best XRP Wallets", desc: "Store your XRP safely" },
];

const schemas = [
  buildArticleSchema({
    headline: "XRP Riddlers: History, Claims, and Context",
    description: "A historical guide to XRP riddler accounts, their community impact, and how to separate documented facts from speculation.",
    url: "https://allaboutxrp.com/learn/riddlers",
    datePublished: "2026-02-10",
    dateModified: "2026-08-08",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP riddlers" },
  ]),
];

export default function RiddlersPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEOSchema schema={schemas} />
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Learn
        </Link>
      </div>
      <RiddlersContent />
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="mx-auto max-w-4xl border-t border-white/[0.06] pt-5">
          <AuthorByline date="2026-02-10" modified="2026-08-08" />
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

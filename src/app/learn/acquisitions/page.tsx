import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AcquisitionsContent from "@/app/acquisitions/AcquisitionsContent";
import AuthorByline from "@/components/shared/AuthorByline";
import SEOSchema from "@/components/shared/SEOSchema";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/utils/seo";

export const dynamic = "force-static";

const relatedLinks = [
  { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
  { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions using XRP" },
  { href: "/learn/leadership", label: "Leadership Team", desc: "Who runs Ripple" },
  { href: "/learn/history", label: "XRP History", desc: "Complete timeline since 2011" },
  { href: "/learn/how-banks-use-xrp", label: "What Banks Use XRP?", desc: "Institutional adoption" },
  { href: "/learn/how-to-buy-xrp", label: "Best XRP Exchanges", desc: "Where to buy XRP" },
];

const schemas = [
  buildArticleSchema({
    headline: "Ripple Acquisitions and Company Expansion",
    description: "Track Ripple acquisitions and what each deal adds to its payments, custody, stablecoin, and institutional infrastructure.",
    url: "https://allaboutxrp.com/learn/acquisitions",
    datePublished: "2026-02-10",
    dateModified: "2026-08-08",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple acquisitions" },
  ]),
];

export default function AcquisitionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEOSchema schema={schemas} />
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Learn
        </Link>
      </div>
      <AcquisitionsContent />
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="mx-auto max-w-4xl border-t border-white/[0.06] pt-5">
          <AuthorByline date="2026-02-10" modified="2026-08-08" />
        </div>
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <h2 className="text-xl font-bold text-white mb-6">Continue Learning</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group flex items-center gap-3  border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-[#0085FF]/30 hover:bg-white/[0.04]">
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

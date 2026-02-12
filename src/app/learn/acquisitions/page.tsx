import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AcquisitionsContent from "@/app/acquisitions/AcquisitionsContent";

export const dynamic = "force-static";

const relatedLinks = [
  { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
  { href: "/learn/partnerships", label: "Partnerships", desc: "Banks & institutions using XRP" },
  { href: "/learn/leadership", label: "Leadership Team", desc: "Who runs Ripple" },
  { href: "/learn/history", label: "XRP History", desc: "Complete timeline since 2011" },
  { href: "/answers/what-banks-use-xrp", label: "What Banks Use XRP?", desc: "Institutional adoption" },
  { href: "/best/xrp-exchanges", label: "Best XRP Exchanges", desc: "Where to buy XRP" },
];

export default function AcquisitionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Learn
        </Link>
      </div>
      <AcquisitionsContent />
      <div className="mx-auto max-w-7xl px-4 pb-20">
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

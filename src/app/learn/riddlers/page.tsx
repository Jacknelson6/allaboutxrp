import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RiddlersContent from "@/app/riddlers/RiddlersContent";

export const dynamic = "force-static";

const relatedLinks = [
  { href: "/learn/history", label: "XRP History", desc: "The full timeline from 2012" },
  { href: "/learn/trusted-sources", label: "Trusted Sources", desc: "Curated XRP community voices" },
  { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
  { href: "/learn/key-people", label: "Key People", desc: "XRP ecosystem leaders" },
  { href: "/answers/is-xrp-a-good-investment", label: "Is XRP a Good Investment?", desc: "Analysis and considerations" },
  { href: "/best/xrp-wallets", label: "Best XRP Wallets", desc: "Store your XRP safely" },
];

export default function RiddlersPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="mb-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/riddlers-hero.jpg"
            alt="The mysterious XRP Riddler community"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Learn
        </Link>
      </div>
      <RiddlersContent />
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

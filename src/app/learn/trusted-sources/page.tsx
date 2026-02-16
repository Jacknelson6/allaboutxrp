"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Users, ExternalLink, ArrowRight } from "lucide-react";
import rawData from "@/data/xrp-accounts.json";

interface Account {
  handle: string;
  displayName: string;
  platform: string;
  url: string;
  avatarUrl: string;
  category: string;
  tags: string[];
  whyFollow: string;
  verified: boolean;
  priority: number;
}

interface AccountsData {
  accounts: Account[];
  categories: Record<string, { label: string; description: string; icon: string }>;
}

const data = rawData as AccountsData;
const accounts = data.accounts;
const categoryList = ["All", ...Object.values(data.categories).map((c) => c.label)];

const categoryColors: Record<string, string> = {
  builders: "border-xrp-accent/30 bg-xrp-accent/10 text-xrp-accent",
  analysts: "border-success/30 bg-success/10 text-success",
  media: "border-purple-400/30 bg-purple-500/10 text-purple-400",
  official: "border-warning/30 bg-warning/10 text-warning",
  legal: "border-danger/30 bg-danger/10 text-danger",
  community: "border-blue-400/30 bg-blue-500/10 text-blue-400",
  ecosystem: "border-green-400/30 bg-green-500/10 text-green-400",
};

export default function TrustedSourcesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? accounts
    : accounts.filter((a) => {
        const catInfo = data.categories[a.category];
        return catInfo?.label === filter;
      });

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <div className="mb-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/trusted-sources-hero.jpg"
            alt="Trusted XRP research and data sources"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Learn
        </Link>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#0085FF]/10 p-2"><Users className="h-5 w-5 text-[#0085FF]" /></div>
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.03em] text-text-primary md:text-[32px]">Trusted Sources</h1>
              <p className="mt-0.5 text-text-secondary text-sm">{accounts.length} curated voices from the XRP ecosystem</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {categoryList.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                filter === cat ? "text-white" : "bg-[#0A0A0B] text-text-secondary hover:bg-[#111113] hover:text-text-primary"
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="trusted-filter"
                  className="absolute inset-0 rounded-full bg-[#0085FF]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((account, i) => (
              <motion.article
                key={account.handle}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="flex flex-col rounded-xl border border-white/[0.06] bg-black p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Image
                      src={account.avatarUrl || `https://unavatar.io/x/${account.handle}`}
                      alt={account.displayName}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-white/[0.06]"
                      unoptimized
                    />
                    {account.verified && (
                      <div className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[#0085FF] p-0.5">
                        <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-text-primary truncate">{account.displayName}</h3>
                    <p className="text-sm text-text-secondary">@{account.handle}</p>
                  </div>
                  <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${categoryColors[account.category] || "bg-[#111113] text-text-secondary border-white/[0.06]"}`}>
                    {data.categories[account.category]?.label || account.category}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm text-text-secondary leading-relaxed">{account.whyFollow}</p>
                {account.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {account.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-md bg-black px-2 py-0.5 text-[10px] text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] transition-all hover:gap-2"
                >
                  Follow on X <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <h2 className="text-xl font-bold text-white mb-6">Continue Learning</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/learn/riddlers", label: "XRP Riddlers", desc: "The legendary riddle community" },
              { href: "/learn/key-people", label: "Key People", desc: "XRP ecosystem leaders" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/history", label: "XRP History", desc: "Timeline from 2012 to today" },
              { href: "/answers/is-xrp-a-good-investment", label: "Is XRP a Good Investment?", desc: "Analysis and considerations" },
              { href: "/best/xrp-wallets", label: "Best XRP Wallets", desc: "Top wallet picks" },
            ].map((link) => (
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

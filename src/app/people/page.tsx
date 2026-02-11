"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Users, Building2, Lock, Eye, Handshake,
  ChevronDown, UserCircle, TrendingUp, Globe, Shield,
} from "lucide-react";
import rawData from "@/data/xrp-accounts.json";

// ── Richlist components ────────────────────────────────────────────────────
import TierChart from "@/components/richlist/TierChart";
import TierCalculator from "@/components/richlist/TierCalculator";
import TierFAQ from "@/components/richlist/TierFAQ";

// ── Existing content components ────────────────────────────────────────────
import AcquisitionsContent from "@/app/acquisitions/AcquisitionsContent";
import EscrowContent from "@/app/escrow/EscrowContent";
import RiddlersContent from "@/app/riddlers/RiddlersContent";

// ── Types & Data ───────────────────────────────────────────────────────────
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

// ── Section Nav ────────────────────────────────────────────────────────────
const sections = [
  { id: "holders", label: "Holders", icon: <TrendingUp className="h-3.5 w-3.5" /> },
  { id: "trusted-sources", label: "Trusted Sources", icon: <Users className="h-3.5 w-3.5" /> },
  { id: "key-people", label: "Key People", icon: <UserCircle className="h-3.5 w-3.5" /> },
  { id: "partnerships", label: "Partnerships", icon: <Handshake className="h-3.5 w-3.5" /> },
  { id: "acquisitions", label: "Acquisitions", icon: <Building2 className="h-3.5 w-3.5" /> },
  { id: "escrow", label: "Escrow", icon: <Lock className="h-3.5 w-3.5" /> },
  { id: "riddlers", label: "Riddlers", icon: <Eye className="h-3.5 w-3.5" /> },
];

// ── Key People Data ────────────────────────────────────────────────────────
const keyPeople = [
  {
    name: "Brad Garlinghouse",
    title: "Chief Executive Officer",
    bio: "Former Yahoo and Hightail executive. Public face of Ripple, led the company through the SEC lawsuit and into a $50B+ valuation.",
    initials: "BG",
  },
  {
    name: "David Schwartz",
    title: "Chief Technology Officer",
    bio: "Co-creator of the XRP Ledger. Known as 'JoelKatz' in the community. Now CTO Emeritus, continuing to shape XRPL's technical direction.",
    initials: "DS",
  },
  {
    name: "Monica Long",
    title: "President",
    bio: "Joined Ripple in 2013. Oversees product, marketing, and business development. One of the longest-serving executives at the company.",
    initials: "ML",
  },
  {
    name: "Stuart Alderoty",
    title: "Chief Legal Officer",
    bio: "Former HSBC, CIT Group, and American Express. Led Ripple's defense in the landmark SEC lawsuit resulting in partial victory.",
    initials: "SA",
  },
];

// ── Partnerships Summary Data ──────────────────────────────────────────────
const partnershipHighlights = [
  { name: "SBI Holdings", type: "Strategic", region: "Japan", desc: "Japan's largest financial conglomerate. Co-created SBI Ripple Asia." },
  { name: "Mastercard", type: "Payments", region: "Global", desc: "Settling fiat card transactions using RLUSD on the XRP Ledger." },
  { name: "BNY Mellon", type: "Custody", region: "USA", desc: "Custodian for RLUSD stablecoin reserves." },
  { name: "Banco Santander", type: "Bank", region: "Spain", desc: "One Pay FX cross-border payment app via RippleNet." },
  { name: "Standard Chartered", type: "Bank", region: "UK", desc: "Cross-border payments using Ripple technology." },
  { name: "BBVA", type: "Bank", region: "Spain", desc: "Ripple Custody (Metaco Harmonize) for digital assets." },
  { name: "Citibank", type: "Bank", region: "USA", desc: "Ripple Custody (Metaco Harmonize) for institutional custody." },
  { name: "BNP Paribas", type: "Bank", region: "France", desc: "Europe's largest bank by assets, uses Ripple Custody." },
  { name: "Tranglo", type: "Payments", region: "SE Asia", desc: "40% Ripple-owned. $970M+ ODL volume across 25 corridors." },
  { name: "Archax", type: "Tokenization", region: "UK", desc: "FCA-regulated, tokenizing BlackRock fund on XRPL." },
  { name: "Republic of Palau", type: "CBDC", region: "Pacific", desc: "National stablecoin built on the XRP Ledger." },
  { name: "Hidden Road", type: "Prime Broker", region: "USA", desc: "$1.25B acquisition. $3T+ annual clearing, 300+ clients." },
];

// ── Main Page Component ────────────────────────────────────────────────────
export default function PeoplePage() {
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("holders");

  const filtered = filter === "All"
    ? accounts
    : accounts.filter((a) => {
        const catInfo = data.categories[a.category];
        return catInfo?.label === filter;
      });

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-[36px] font-bold tracking-[-0.04em] text-text-primary md:text-[48px]">
            XRP <span className="bg-gradient-to-r from-[#0085FF] to-blue-400 bg-clip-text text-transparent">People & Ecosystem</span>
          </h1>
          <p className="mt-2 text-text-secondary max-w-2xl">
            Holders, trusted voices, leadership, partnerships, acquisitions, escrow, and the legendary riddlers — everything about who&apos;s behind XRP.
          </p>
        </motion.div>
      </div>

      {/* Sticky Section Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/90 backdrop-blur-md" aria-label="Page sections">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                  activeSection === s.id
                    ? "bg-[#0085FF]/10 text-[#0085FF]"
                    : "text-text-secondary hover:bg-white/[0.04] hover:text-text-primary"
                }`}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HOLDERS                                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="holders" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeading
            icon={<TrendingUp className="h-5 w-5 text-[#0085FF]" />}
            title="XRP Holders"
            subtitle="Rich list, tier calculator, and holder distribution"
          />
          <div className="mt-8">
            <TierChart />
            <TierCalculator />
            <TierFAQ />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4"><div className="h-px bg-white/[0.06]" /></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: TRUSTED SOURCES                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="trusted-sources" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeading
            icon={<Users className="h-5 w-5 text-[#0085FF]" />}
            title="Trusted Sources"
            subtitle={`${accounts.length} curated voices from the XRP ecosystem`}
          />

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
                    layoutId="people-filter"
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
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4"><div className="h-px bg-white/[0.06]" /></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: KEY PEOPLE                                             */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="key-people" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeading
            icon={<UserCircle className="h-5 w-5 text-[#0085FF]" />}
            title="Key People"
            subtitle="Ripple's leadership team driving the XRP ecosystem"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyPeople.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/[0.06] bg-black p-6 hover:border-[#0085FF]/20 transition-colors"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-[#0085FF]/20 to-[#0085FF]/5 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#0085FF]">{person.initials}</span>
                </div>
                <h3 className="mt-4 text-center font-bold text-text-primary">{person.name}</h3>
                <p className="mt-1 text-center text-xs font-medium text-[#0085FF]">{person.title}</p>
                <p className="mt-3 text-xs text-text-secondary leading-relaxed text-center">{person.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/learn/leadership"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] hover:gap-2 transition-all"
            >
              View full leadership team <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4"><div className="h-px bg-white/[0.06]" /></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: PARTNERSHIPS                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="partnerships" className="scroll-mt-16">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeading
            icon={<Handshake className="h-5 w-5 text-[#0085FF]" />}
            title="Partnerships"
            subtitle="Banks, payment providers, and institutions across 55+ countries"
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 mb-6">
            {[
              { label: "Countries", value: "55+" },
              { label: "Payments Processed", value: "$90B+" },
              { label: "CBDC Pilots", value: "20+" },
              { label: "Institutional Clients", value: "300+" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-4 text-center">
                <p className="text-xl font-bold text-text-primary font-mono">{stat.value}</p>
                <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipHighlights.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-xl border border-white/[0.06] bg-black p-4 hover:border-[#0085FF]/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-text-primary text-sm">{p.name}</h3>
                  <span className="rounded-full border border-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-text-secondary">
                    {p.type}
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] text-text-secondary">{p.region}</p>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/learn/partnerships"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] hover:gap-2 transition-all"
            >
              View all partnerships <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4"><div className="h-px bg-white/[0.06]" /></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: ACQUISITIONS                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="acquisitions" className="scroll-mt-16">
        <AcquisitionsContent />
      </section>

      <div className="mx-auto max-w-7xl px-4"><div className="h-px bg-white/[0.06]" /></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: ESCROW                                                 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="escrow" className="scroll-mt-16">
        <EscrowContent />
      </section>

      <div className="mx-auto max-w-7xl px-4"><div className="h-px bg-white/[0.06]" /></div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: RIDDLERS                                               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="riddlers" className="scroll-mt-16">
        <RiddlersContent />
      </section>
    </div>
  );
}

// ── Shared Section Heading ─────────────────────────────────────────────────
function SectionHeading({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-[#0085FF]/10 p-2">{icon}</div>
        <div>
          <h2 className="text-[28px] font-bold tracking-[-0.03em] text-text-primary md:text-[32px]">{title}</h2>
          <p className="mt-0.5 text-text-secondary text-sm">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen, Rocket, Search, ArrowRight, Clock,
  GraduationCap, Layers, HelpCircle, History,
  Users, Handshake, Coins, Lock, Play,
} from "lucide-react";
import { useState } from "react";
import SEOSchema from "@/components/shared/SEOSchema";
import faqData from "@/data/faq.json";

/* ── FAQ Schema (preserved for SEO) ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item: { question: string; answer: string }) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/* ── Article Data ── */
type Article = {
  href: string;
  title: string;
  desc: string;
  category: "Basics" | "Deep Dives";
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  glowColor: string;
  borderHover: string;
  featured?: boolean;
};

const articles: Article[] = [
  {
    href: "/learn/what-is-xrp",
    title: "What is XRP?",
    desc: "The complete guide to XRP — what it is, how it works, and why it matters for global payments.",
    category: "Basics",
    icon: Coins,
    gradient: "from-[#0085FF] to-[#00C2FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(0,133,255,0.3)]",
    borderHover: "hover:border-[#0085FF]/50",
    featured: true,
  },
  {
    href: "/learn/what-is-ripple",
    title: "What is Ripple?",
    desc: "Understand Ripple Labs — the company behind RippleNet, On-Demand Liquidity, and the XRP ecosystem.",
    category: "Basics",
    icon: Layers,
    gradient: "from-[#0085FF] to-[#6366F1]",
    glowColor: "hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
    borderHover: "hover:border-[#6366F1]/50",
    featured: true,
  },
  {
    href: "/learn/get-started",
    title: "How to Get Started",
    desc: "Step-by-step guide to buying, storing, and using XRP for the first time.",
    category: "Basics",
    icon: Play,
    gradient: "from-[#06B6D4] to-[#0085FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    borderHover: "hover:border-[#06B6D4]/50",
    featured: true,
  },
  {
    href: "/learn/faq",
    title: "Frequently Asked Questions",
    desc: "Quick answers to the most common questions about XRP, Ripple, and the XRP Ledger.",
    category: "Basics",
    icon: HelpCircle,
    gradient: "from-[#8B5CF6] to-[#6366F1]",
    glowColor: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    borderHover: "hover:border-[#8B5CF6]/50",
  },
  {
    href: "/learn/history",
    title: "History of XRP",
    desc: "From OpenCoin to Ripple Labs — the full timeline of XRP's evolution since 2011.",
    category: "Deep Dives",
    icon: History,
    gradient: "from-[#0085FF] to-[#06B6D4]",
    glowColor: "hover:shadow-[0_0_30px_rgba(0,133,255,0.3)]",
    borderHover: "hover:border-[#0085FF]/50",
  },
  {
    href: "/learn/leadership",
    title: "Ripple Leadership",
    desc: "Meet the executives and key figures driving Ripple's vision forward.",
    category: "Deep Dives",
    icon: Users,
    gradient: "from-[#6366F1] to-[#8B5CF6]",
    glowColor: "hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]",
    borderHover: "hover:border-[#6366F1]/50",
  },
  {
    href: "/learn/partnerships",
    title: "Partnerships",
    desc: "Banks, payment providers, and institutions using RippleNet and XRP worldwide.",
    category: "Deep Dives",
    icon: Handshake,
    gradient: "from-[#06B6D4] to-[#0085FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    borderHover: "hover:border-[#06B6D4]/50",
  },
  {
    href: "/learn/rlusd",
    title: "RLUSD Stablecoin",
    desc: "Ripple's USD-backed stablecoin — what it is, how it works, and its role in the ecosystem.",
    category: "Deep Dives",
    icon: Coins,
    gradient: "from-[#0085FF] to-[#00C2FF]",
    glowColor: "hover:shadow-[0_0_30px_rgba(0,133,255,0.3)]",
    borderHover: "hover:border-[#0085FF]/50",
  },
  {
    href: "/learn/escrow",
    title: "XRP Escrow",
    desc: "How Ripple's 55-billion XRP escrow system works and its impact on supply.",
    category: "Deep Dives",
    icon: Lock,
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    glowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    borderHover: "hover:border-[#EC4899]/50",
  },
];

const categories = ["All", "Basics", "Deep Dives"] as const;

/* ── Article Card Component ── */
function ArticleCard({ article, index, large }: { article: Article; index: number; large?: boolean }) {
  const Icon = article.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.5, ease: "easeOut" }}
    >
      <Link
        href={article.href}
        className={`group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 h-full ${article.borderHover} ${article.glowColor} hover:scale-[1.02] hover:bg-white/[0.04] ${large ? "p-8" : "p-6"}`}
      >
        <div className="flex items-start justify-between">
          <div className={`rounded-xl bg-gradient-to-br ${article.gradient} ${large ? "p-4" : "p-3"} w-fit`}>
            <Icon className={`${large ? "h-7 w-7" : "h-5 w-5"} text-white`} />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#0085FF]/60 font-medium bg-[#0085FF]/[0.08] px-2 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        <h3 className={`${large ? "mt-5 text-xl" : "mt-4 text-lg"} font-bold text-white`}>{article.title}</h3>
        <p className={`mt-2 text-sm text-[#888] leading-relaxed flex-1`}>{article.desc}</p>
        <div className={`${large ? "mt-6" : "mt-4"} inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 group-hover:text-white group-hover:gap-2.5 transition-all duration-300`}>
          Read article <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Page ── */
export default function LearnPage() {
  const [filter, setFilter] = useState<string>("All");

  const featured = articles.filter((a) => a.featured);
  const filtered = filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <>
      <SEOSchema schema={faqSchema} />
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Dot grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Hero gradient glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,133,255,0.15)_0%,_transparent_70%)]" />
          <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(99,102,241,0.1)_0%,_transparent_70%)]" />
          <div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-[radial-gradient(circle,_rgba(6,182,212,0.08)_0%,_transparent_70%)]" />
        </div>

        {/* ── Hero ── */}
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#0085FF]/20 bg-[#0085FF]/[0.06] px-4 py-1.5">
              <GraduationCap className="h-4 w-4 text-[#0085FF]" />
              <span className="text-xs font-medium text-[#0085FF]">Knowledge Base</span>
            </div>
            <h1 className="text-[40px] font-bold tracking-[-0.04em] text-white md:text-[56px] leading-tight">
              Learn Everything About{" "}
              <span className="bg-gradient-to-r from-[#0085FF] via-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">
                XRP
              </span>
            </h1>
            <p className="mt-4 text-[#888] max-w-2xl text-lg leading-relaxed">
              Your comprehensive resource for understanding XRP, Ripple, and the XRP Ledger.
              From beginner guides to deep dives — everything in one place.
            </p>
          </motion.div>
        </div>

        {/* ── Featured Articles ── */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Rocket className="h-5 w-5 text-[#0085FF]" />
            <h2 className="text-lg font-bold text-white">Start Here</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article, i) => (
              <ArticleCard key={article.href} article={article} index={i} large />
            ))}
          </div>
        </div>

        {/* ── Categories ── */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-[#0085FF]" />
              <h2 className="text-lg font-bold text-white">Browse by Category</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Basics */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <div className="rounded-xl bg-gradient-to-br from-[#0085FF] to-[#06B6D4] p-3 w-fit">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">Basics</h3>
                <p className="mt-1 text-sm text-[#888]">Essential guides for getting started with XRP.</p>
                <ul className="mt-4 space-y-2">
                  {articles.filter((a) => a.category === "Basics").map((a) => (
                    <li key={a.href}>
                      <Link href={a.href} className="text-sm text-[#0085FF]/80 hover:text-[#0085FF] transition-colors flex items-center gap-1.5">
                        <ArrowRight className="h-3 w-3" /> {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deep Dives */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <div className="rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-3 w-fit">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">Deep Dives</h3>
                <p className="mt-1 text-sm text-[#888]">In-depth analysis and detailed breakdowns.</p>
                <ul className="mt-4 space-y-2">
                  {articles.filter((a) => a.category === "Deep Dives").map((a) => (
                    <li key={a.href}>
                      <Link href={a.href} className="text-sm text-[#6366F1]/80 hover:text-[#6366F1] transition-colors flex items-center gap-1.5">
                        <ArrowRight className="h-3 w-3" /> {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coming Soon */}
              <div className="rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01] p-6 flex flex-col items-center justify-center text-center">
                <div className="rounded-xl bg-white/[0.04] p-3 w-fit">
                  <Clock className="h-5 w-5 text-[#888]" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white/40">Coming Soon</h3>
                <p className="mt-1 text-sm text-[#666]">
                  More articles, listicles, and guides are on the way. Stay tuned.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── All Articles ── */}
        <div className="relative mx-auto max-w-7xl px-4 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-lg font-bold text-white">All Articles</h2>
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      filter === cat
                        ? "bg-[#0085FF] text-white"
                        : "bg-white/[0.04] text-[#888] hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, i) => (
                <ArticleCard key={article.href} article={article} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

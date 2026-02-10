"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Check, Plus, Search, Users, CheckCircle2 } from "lucide-react";
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

interface Category {
  label: string;
  description: string;
  icon: string;
  color: string;
}

interface AccountsData {
  accounts: Account[];
  categories: Record<string, Category>;
}

const data = rawData as AccountsData;

function getFollowed(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem("xrp-followed");
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function saveFollowed(set: Set<string>) {
  localStorage.setItem("xrp-followed", JSON.stringify([...set]));
}

export default function XFeed() {
  const [followed, setFollowed] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showChecklist, setShowChecklist] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setFollowed(getFollowed());
    setMounted(true);
  }, []);

  const toggleFollow = (handle: string) => {
    setFollowed((prev) => {
      const next = new Set(prev);
      if (next.has(handle)) next.delete(handle);
      else next.add(handle);
      saveFollowed(next);
      return next;
    });
  };

  const categories = [
    { key: "all", label: "All", color: "#00A3FF" },
    ...Object.entries(data.categories).map(([key, cat]) => ({
      key,
      label: cat.label,
      color: cat.color,
    })),
  ];

  let filtered = data.accounts;
  if (activeCategory !== "all") {
    filtered = filtered.filter((a) => a.category === activeCategory);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.displayName.toLowerCase().includes(q) ||
        a.handle.toLowerCase().includes(q) ||
        a.whyFollow.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  // Sort by priority, then alphabetical
  filtered = [...filtered].sort((a, b) => a.priority - b.priority || a.displayName.localeCompare(b.displayName));

  const followedCount = mounted ? followed.size : 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
            XRP Community <span className="gradient-text">Feed</span>
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Curated voices from the XRP ecosystem. Check off accounts you follow.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowChecklist(!showChecklist)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
              showChecklist
                ? "border-xrp-accent/30 bg-xrp-accent/10 text-xrp-accent"
                : "border-surface-border bg-surface-card text-text-secondary hover:text-text-primary"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Checklist</span>
            {mounted && followedCount > 0 && (
              <span className="rounded-full bg-xrp-accent/20 px-1.5 py-0.5 text-[10px] font-bold text-xrp-accent">
                {followedCount}/{data.accounts.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category filters */}
      <div id="follow-checklist" className="flex flex-wrap gap-1.5 mb-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              activeCategory === cat.key
                ? "bg-xrp-accent/15 text-xrp-accent border border-xrp-accent/30"
                : "border border-surface-border bg-surface-card/50 text-text-secondary hover:text-text-primary hover:border-surface-border"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary/50" />
        <input
          type="text"
          placeholder="Search accounts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-surface-border bg-surface-card/50 py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-xrp-accent/30 focus:outline-none focus:ring-1 focus:ring-xrp-accent/20"
        />
      </div>

      {/* Feed cards */}
      <div className="space-y-2">
        {filtered.map((account, i) => {
          const cat = data.categories[account.category];
          const isFollowed = mounted && followed.has(account.handle);

          return (
            <motion.div
              key={account.handle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              className={`group relative rounded-xl border p-4 transition-all ${
                showChecklist && isFollowed
                  ? "border-success/20 bg-success/[0.03]"
                  : "border-surface-border bg-surface-card/50 hover:bg-surface-card hover:border-surface-border"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Checklist checkbox */}
                {showChecklist && (
                  <button
                    onClick={() => toggleFollow(account.handle)}
                    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                      isFollowed
                        ? "border-success bg-success text-white"
                        : "border-surface-border hover:border-xrp-accent/50"
                    }`}
                  >
                    {isFollowed && <Check className="h-3 w-3" />}
                  </button>
                )}

                {/* Avatar */}
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-surface-elevated">
                  <Image
                    src={account.avatarUrl}
                    alt={account.displayName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-text-primary truncate">{account.displayName}</span>
                    {account.verified && (
                      <svg className="h-3.5 w-3.5 shrink-0 text-xrp-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    )}
                    <span className="text-xs text-text-secondary/50 truncate">@{account.handle}</span>
                    {cat && (
                      <span
                        className="hidden sm:inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                      >
                        {cat.label}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed line-clamp-2">{account.whyFollow}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {account.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-md bg-surface-elevated/80 px-1.5 py-0.5 text-[10px] text-text-secondary/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Follow on X link */}
                <a
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1.5 rounded-lg border border-surface-border bg-surface-elevated/50 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-xrp-accent/30 hover:text-xrp-accent"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Follow</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <Users className="mx-auto h-8 w-8 text-text-secondary/30" />
          <p className="mt-3 text-sm text-text-secondary">No accounts match your search.</p>
        </div>
      )}

    </div>
  );
}

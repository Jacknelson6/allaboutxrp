"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Check, Plus, X, Filter, Search, Users, CheckCircle2 } from "lucide-react";
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

function getSuggestions(): { name: string; handle: string; reason: string }[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("xrp-suggestions");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export default function XFeed() {
  const [followed, setFollowed] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestModal, setShowSuggestModal] = useState(false);
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
          <button
            onClick={() => setShowSuggestModal(true)}
            className="flex items-center gap-1.5 rounded-lg border border-surface-border bg-surface-card px-3 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-xrp-accent/30 hover:text-xrp-accent"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Suggest</span>
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

                {/* Follow link */}
                <a
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg border border-surface-border bg-surface-elevated/50 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-xrp-accent/30 hover:text-xrp-accent"
                >
                  <span className="hidden sm:inline">Follow</span>
                  <ExternalLink className="h-3.5 w-3.5 sm:hidden" />
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

      {/* Suggest account modal */}
      <SuggestModal open={showSuggestModal} onClose={() => setShowSuggestModal(false)} />
    </div>
  );
}

function SuggestModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!handle.trim()) return;
    const suggestions = getSuggestions();
    suggestions.push({ name: name.trim(), handle: handle.trim(), reason: reason.trim() });
    localStorage.setItem("xrp-suggestions", JSON.stringify(suggestions));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setHandle("");
      setReason("");
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="w-full max-w-md rounded-xl border border-surface-border bg-surface-card p-6 shadow-2xl shadow-black/40"
            onClick={(e) => e.stopPropagation()}
            id="suggest"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold text-text-primary">Suggest an Account</h3>
              <button onClick={onClose} className="rounded-lg p-1 text-text-secondary hover:text-text-primary">
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
                <p className="mt-3 text-sm text-text-secondary">Thanks! Suggestion saved.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Display name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-surface-border bg-surface-primary px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-xrp-accent/30 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="@handle (required)"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full rounded-lg border border-surface-border bg-surface-primary px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-xrp-accent/30 focus:outline-none"
                />
                <textarea
                  placeholder="Why should we feature them?"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-surface-border bg-surface-primary px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:border-xrp-accent/30 focus:outline-none resize-none"
                />
                <button
                  onClick={submit}
                  disabled={!handle.trim()}
                  className="w-full rounded-lg bg-xrp-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-xrp-accent-bright disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit Suggestion
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getSuggestionsClient(): { name: string; handle: string; reason: string }[] {
  try {
    const stored = localStorage.getItem("xrp-suggestions");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

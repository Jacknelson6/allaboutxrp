"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
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

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "XRP Twitter Accounts to Follow",
  description: "Curated list of the most informative XRP and Ripple accounts on X/Twitter.",
  numberOfItems: accounts.length,
  itemListElement: accounts.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: a.displayName,
    url: a.url,
  })),
};

const categoryColors: Record<string, string> = {
  builders: "bg-xrp-accent/20 text-xrp-accent",
  analysts: "bg-success/20 text-success",
  media: "bg-purple-500/20 text-purple-400",
  official: "bg-warning/20 text-warning",
  legal: "bg-danger/20 text-danger",
  community: "bg-blue-500/20 text-blue-400",
  ecosystem: "bg-green-500/20 text-green-400",
};

export default function PeoplePage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All"
    ? accounts
    : accounts.filter((a) => {
        const catInfo = data.categories[a.category];
        return catInfo?.label === filter;
      });

  return (
    <>
      <SEOSchema schema={itemListSchema} />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
          XRP People to Follow
        </h1>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Curated accounts from builders, analysts, legal experts, and community leaders in the XRP ecosystem.
          Stay informed by following the most trusted voices.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {categoryList.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-xrp-accent text-white"
                  : "bg-surface-card text-text-secondary hover:bg-surface-elevated"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          {filtered.map((account) => (
            <article
              key={account.handle}
              className="flex flex-col rounded-xl border border-surface-border bg-surface-card p-5 transition-colors hover:bg-surface-elevated"
            >
              <div className="flex items-start gap-3">
                <Image
                  src={account.avatarUrl || `https://unavatar.io/x/${account.handle}`}
                  alt={account.displayName}
                  width={48}
                  height={48}
                  className="rounded-full"
                  unoptimized
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-text-primary truncate">{account.displayName}</h3>
                  <p className="text-sm text-text-secondary">@{account.handle}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[account.category] || "bg-surface-elevated text-text-secondary"}`}>
                  {data.categories[account.category]?.label || account.category}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm text-text-secondary leading-relaxed">{account.whyFollow}</p>
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-xrp-accent hover:text-xrp-accent-dim transition-colors"
              >
                Follow on X <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";

import { Share2, Link2 } from "lucide-react";
import { useState } from "react";

export default function ShareButtons({ date, title }: { date: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://allaboutxrp.com/news/recaps/${date}`;

  const shareOnX = () => {
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 mb-8">
      <button
        onClick={shareOnX}
        className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card/50 px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary hover:border-xrp-accent/30 transition-colors"
      >
        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Share on X
      </button>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card/50 px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary hover:border-xrp-accent/30 transition-colors"
      >
        <Link2 className="h-3.5 w-3.5" />
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}

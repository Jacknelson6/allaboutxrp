"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { useParams } from "next/navigation";
import { useAuth } from "@/lib/supabase/auth-context";
import DigestPaywall from "@/components/digest/DigestPaywall";

interface DigestContent {
  title?: string;
  raw_text?: string;
  xrp_open?: number;
  xrp_close?: number;
  xrp_change_pct?: number;
  sentiment?: string;
  model_used?: string;
  week_range?: string;
  // Legacy structured fields
  key_news?: Array<{ title: string; summary: string; url?: string; source?: string }>;
  price_changes?: { high?: string; low?: string; close?: string; change_pct?: string; notes?: string };
  price_prediction?: { direction?: string; reasoning?: string };
  macro_analysis?: string[];
}

interface Digest {
  id: string;
  title: string;
  slug: string;
  week_start: string;
  week_end: string;
  content: DigestContent;
  html_content?: string;
  published_at: string;
}

interface DigestMeta {
  slug: string;
  title: string;
}

function formatDate(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function formatPrice(n: number | undefined | null): string {
  if (n == null || n === 0) return "";
  return `$${n.toFixed(4)}`;
}

/** Convert digest content object to readable text for paywall preview */
function contentToText(content: DigestContent): string {
  const parts: string[] = [];
  if (content.raw_text) {
    // Strip markdown formatting for clean preview text
    const clean = content.raw_text
      .replace(/^#{1,6}\s+/gm, "") // headers
      .replace(/\*\*(.+?)\*\*/g, "$1") // bold
      .replace(/\*(.+?)\*/g, "$1") // italic
      .replace(/^>\s*/gm, "") // blockquotes
      .replace(/^-{3,}$/gm, "") // horizontal rules
      .replace(/\|[^|]*\|/g, "") // table rows
      .replace(/\n{3,}/g, "\n\n") // excess newlines
      .trim();
    parts.push(clean.slice(0, 500));
  } else {
    if (content.key_news) {
      content.key_news.forEach((n) => {
        parts.push(`${n.title}: ${n.summary}`);
      });
    }
    if (content.price_changes?.notes) {
      parts.push(content.price_changes.notes);
    }
    if (content.price_prediction?.reasoning) {
      parts.push(content.price_prediction.reasoning);
    }
    if (content.macro_analysis) {
      parts.push(...content.macro_analysis);
    }
  }
  return parts.join(" ");
}

function SentimentBadge({ sentiment }: { sentiment?: string }) {
  if (!sentiment) return null;
  const config: Record<string, { label: string; color: string; bg: string }> = {
    bullish: { label: "Bullish", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
    bearish: { label: "Bearish", color: "text-red-400", bg: "bg-red-400/10 border-red-400/20" },
    neutral: { label: "Neutral", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/20" },
  };
  const c = config[sentiment] ?? config.neutral;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${c.bg} ${c.color}`}>
      {c.label}
    </span>
  );
}

export default function DigestDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user, isPro, loading: authLoading, proLoading } = useAuth();
  const [digest, setDigest] = useState<Digest | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [allDigests, setAllDigests] = useState<DigestMeta[]>([]);

  useEffect(() => {
    Promise.all([
      fetch(`/api/digests/${slug}`).then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      }),
      fetch("/api/digests").then((r) => r.json()),
    ])
      .then(([d, all]) => {
        setDigest(d);
        setAllDigests(all.map((x: DigestMeta) => ({ slug: x.slug, title: x.title })));
      })
      .catch(() => {
        setError("Digest not found.");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading || authLoading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#0085FF] border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  if (error || !digest) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-3">Not Found</h1>
          <p className="text-gray-400 mb-6">{error || "This digest doesn't exist."}</p>
          <Link href="/digest" className="text-[#0085FF] hover:underline">
            ← Back to Digests
          </Link>
        </div>
      </main>
    );
  }

  // Show paywall if not pro
  const isSubscribed = isPro && !proLoading;

  if (!isSubscribed && !proLoading) {
    return (
      <main className="min-h-screen bg-black px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/digest" className="text-[#0085FF] text-sm hover:underline mb-6 inline-block">
            ← All Digests
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{digest.title || "Weekly Digest"}</h1>
          <p className="text-gray-500 mb-8">
            {formatDate(digest.week_start)} – {formatDate(digest.week_end)}
          </p>
          <DigestPaywall
            contentHtml={contentToText(digest.content)}
            slug={slug}
          />
        </div>
      </main>
    );
  }

  const { content } = digest;
  const currentIdx = allDigests.findIndex((d) => d.slug === slug);
  const prevDigest = currentIdx < allDigests.length - 1 ? allDigests[currentIdx + 1] : null;
  const nextDigest = currentIdx > 0 ? allDigests[currentIdx - 1] : null;

  // Price data from content (skip if zero/missing)
  const hasPrice = content.xrp_open && content.xrp_open > 0 && content.xrp_close && content.xrp_close > 0;
  const changePct = content.xrp_change_pct;
  const changePositive = changePct != null && changePct >= 0;

  function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: digest!.title, url });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  }

  // Clean html_content
  let cleanHtml = digest.html_content || "";
  if (cleanHtml) {
    // Remove the baked-in header div (week range + price line + border) since we render our own header
    cleanHtml = cleanHtml.replace(
      /<div[^>]*border-bottom[^>]*>[\s\S]*?<\/div>/i,
      ""
    );
    // Remove "$0 → $0" price line (including HTML entity →)
    cleanHtml = cleanHtml.replace(
      /<p[^>]*>XRP\s*\$0[^<]*<\/p>/gi,
      ""
    );
    // Convert "---" paragraph separators to <hr> elements
    cleanHtml = cleanHtml.replace(
      /<p[^>]*>\s*-{3,}\s*<\/p>/gi,
      '<hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0;" />'
    );
    // Convert pipe-separated table lines to actual HTML tables
    cleanHtml = cleanHtml.replace(
      /(<p[^>]*>\|\s*.+?\|<\/p>\s*(?:<div[^>]*><\/div>\s*)?)+/gi,
      (match) => {
        const rows = match
          .match(/<p[^>]*>\|(.+?)\|<\/p>/gi)
          ?.map(row => {
            const cells = row.replace(/<\/?p[^>]*>/gi, "").split("|").filter(c => c.trim());
            return cells.map(c => c.trim());
          })
          .filter(row => row.length > 0 && !row.every(c => /^-+$/.test(c))) || [];
        
        if (rows.length === 0) return match;
        
        const headerRow = rows[0];
        const bodyRows = rows.slice(1);
        
        let table = '<table style="width:100%;border-collapse:collapse;font-size:14px;margin:16px 0;">';
        table += '<thead><tr>';
        headerRow.forEach(cell => {
          table += `<th style="text-align:left;color:#fff;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.1);font-weight:600;">${cell}</th>`;
        });
        table += '</tr></thead><tbody>';
        bodyRows.forEach(row => {
          table += '<tr>';
          row.forEach(cell => {
            table += `<td style="padding:8px 12px;color:#ccc;border-bottom:1px solid rgba(255,255,255,0.05);">${cell}</td>`;
          });
          table += '</tr>';
        });
        table += '</tbody></table>';
        return table;
      }
    );
    // Wrap orphan <li> elements in <ul>
    cleanHtml = cleanHtml.replace(
      /(<li[^>]*>[\s\S]*?<\/li>\s*(?:<div[^>]*><\/div>\s*)*)+/gi,
      (match) => `<ul style="list-style:disc;padding-left:20px;margin:12px 0;">${match}</ul>`
    );
    // Remove empty spacer divs between list items inside ul
    cleanHtml = cleanHtml.replace(
      /(<ul[^>]*>)([\s\S]*?)(<\/ul>)/gi,
      (_, open, inner, close) => {
        const cleaned = inner.replace(/<div[^>]*>\s*<\/div>/gi, "");
        return open + cleaned + close;
      }
    );
    // Convert > blockquote-style paragraphs
    cleanHtml = cleanHtml.replace(
      /<p([^>]*)>&gt;\s*([\s\S]*?)<\/p>/gi,
      '<blockquote style="border-left:3px solid #0085FF;padding:12px 16px;margin:16px 0;background:rgba(0,133,255,0.05);border-radius:0 8px 8px 0;"><p$1>$2</p></blockquote>'
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-10 md:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <Link href="/digest" className="text-[#0085FF] text-sm hover:underline mb-6 inline-block">
          ← All Digests
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0085FF]/10 border border-[#0085FF]/20 text-[#0085FF] text-xs font-medium">
              <span>📡</span> Weekly Digest
            </div>
            <SentimentBadge sentiment={content.sentiment} />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
            {digest.title || "Weekly Digest"}
          </h1>
          <p className="text-gray-500">
            {formatDate(digest.week_start)} – {formatDate(digest.week_end)}
          </p>
        </div>

        {/* Price Summary Card (only if we have real price data) */}
        {hasPrice && (
          <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">XRP Price This Week</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-white text-lg font-semibold">{formatPrice(content.xrp_open)}</span>
                  <span className="text-gray-500">→</span>
                  <span className="text-white text-lg font-semibold">{formatPrice(content.xrp_close)}</span>
                  {changePct != null && changePct !== 0 && (
                    <span className={`text-sm font-medium ${changePositive ? "text-green-400" : "text-red-400"}`}>
                      {changePositive ? "+" : ""}{changePct.toFixed(2)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TradingView Mini Chart */}
        <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.06]">
          <Script
            src="https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js"
            strategy="lazyOnload"
          />
          {/* @ts-expect-error - TradingView web component */}
          <tv-mini-chart
            symbol="BINANCE:XRPUSDT"
            width="100%"
            height="220"
            locale="en"
            dateRange="1M"
            colorTheme="dark"
            isTransparent="true"
            autosize="false"
            largeChartUrl="https://allaboutxrp.com/live-chart"
          />
        </div>

        {/* Render html_content if available, otherwise fall back to structured content */}
        {cleanHtml ? (
          <div
            className="prose prose-invert prose-sm md:prose-base max-w-none
              prose-headings:text-[#0085FF] prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-strong:text-white
              prose-li:text-gray-300
              prose-a:text-[#0085FF] prose-a:no-underline hover:prose-a:underline
              [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm
              [&_th]:text-left [&_th]:text-white [&_th]:p-2 [&_th]:border-b [&_th]:border-white/10
              [&_td]:p-2 [&_td]:text-gray-300 [&_td]:border-b [&_td]:border-white/[0.05]"
            dangerouslySetInnerHTML={{ __html: cleanHtml }}
          />
        ) : (
          <>
            {/* Key News */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span>🔑</span> Key News
              </h2>
              {content.key_news && content.key_news.length > 0 ? (
                <ul className="space-y-3">
                  {content.key_news.map((item, i) => (
                    <li key={i} className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <h3 className="text-white font-medium mb-1">
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#0085FF] transition-colors">
                            {item.title || "Untitled"} ↗
                          </a>
                        ) : (
                          item.title || "Untitled"
                        )}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.summary || "No summary available."}</p>
                      {item.source && <span className="text-gray-600 text-xs mt-1 inline-block">{item.source}</span>}
                    </li>
                  ))}
                </ul>
              ) : content.raw_text ? (
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {content.raw_text.slice(0, 2000)}
                    {content.raw_text.length > 2000 && "..."}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">No content available for this digest.</p>
              )}
            </section>

            {/* Price Action */}
            {content.price_changes && (
              <section className="mb-10">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>📊</span> Price Action
                </h2>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
                    {content.price_changes.high && (
                      <div>
                        <p className="text-gray-500 text-xs uppercase">High</p>
                        <p className="text-white font-semibold">{content.price_changes.high}</p>
                      </div>
                    )}
                    {content.price_changes.low && (
                      <div>
                        <p className="text-gray-500 text-xs uppercase">Low</p>
                        <p className="text-white font-semibold">{content.price_changes.low}</p>
                      </div>
                    )}
                    {content.price_changes.close && (
                      <div>
                        <p className="text-gray-500 text-xs uppercase">Close</p>
                        <p className="text-white font-semibold">{content.price_changes.close}</p>
                      </div>
                    )}
                    {content.price_changes.change_pct && (
                      <div>
                        <p className="text-gray-500 text-xs uppercase">Change</p>
                        <p className={`font-semibold ${content.price_changes.change_pct.startsWith("-") ? "text-red-400" : "text-green-400"}`}>
                          {content.price_changes.change_pct}
                        </p>
                      </div>
                    )}
                  </div>
                  {content.price_changes.notes && (
                    <p className="text-gray-400 text-sm">{content.price_changes.notes}</p>
                  )}
                </div>
              </section>
            )}

            {/* Price Outlook */}
            {content.price_prediction && (content.price_prediction.direction || content.price_prediction.reasoning) && (
              <section className="mb-10">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🔮</span> Price Outlook
                </h2>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  {content.price_prediction.direction && (
                    <p className="text-white font-medium mb-2">
                      Direction: <span className="text-[#0085FF]">{content.price_prediction.direction}</span>
                    </p>
                  )}
                  {content.price_prediction.reasoning && (
                    <p className="text-gray-400 text-sm">{content.price_prediction.reasoning}</p>
                  )}
                </div>
              </section>
            )}

            {/* Macro Watch */}
            {content.macro_analysis && content.macro_analysis.length > 0 && (
              <section className="mb-10">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🌍</span> Macro Watch
                </h2>
                <ul className="space-y-2">
                  {content.macro_analysis.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 text-sm">
                      <span className="text-[#0085FF] mt-0.5">•</span>
                      <span>{item || "No data available."}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}

        {/* Share & Manage */}
        <div className="flex items-center gap-4 mb-10 pt-6 border-t border-white/[0.06]">
          <button
            onClick={handleShare}
            className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white text-sm hover:bg-white/[0.1] transition-colors"
          >
            Share this digest
          </button>
          {isPro && (
            <button
              onClick={async () => {
                const res = await fetch("/api/stripe/portal", { method: "POST" });
                const data = await res.json();
                if (data.url) window.location.href = data.url;
              }}
              className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-gray-400 text-sm hover:bg-white/[0.1] transition-colors"
            >
              Manage subscription
            </button>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-white/[0.06]">
          {prevDigest ? (
            <Link href={`/digest/${prevDigest.slug}`} className="text-[#0085FF] text-sm hover:underline">
              ← Previous
            </Link>
          ) : (
            <span />
          )}
          {nextDigest ? (
            <Link href={`/digest/${nextDigest.slug}`} className="text-[#0085FF] text-sm hover:underline">
              Next →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}

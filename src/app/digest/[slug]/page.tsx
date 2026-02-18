"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAuth } from "@/lib/supabase/auth-context";
import DigestPaywall from "@/components/digest/DigestPaywall";

interface DigestContent {
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
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

/** Convert digest content object to readable text for paywall preview */
function contentToText(content: DigestContent): string {
  const parts: string[] = [];
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
  return parts.join(" ");
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{digest.title}</h1>
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

  function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: digest!.title, url });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  }

  return (
    <main className="min-h-screen bg-black px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/digest" className="text-[#0085FF] text-sm hover:underline mb-6 inline-block">
          ← All Digests
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{digest.title}</h1>
        <p className="text-gray-500 mb-8">
          {formatDate(digest.week_start)} – {formatDate(digest.week_end)}
        </p>

        {/* Render html_content if available, otherwise fall back to structured content */}
        {digest.html_content ? (
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: digest.html_content }}
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
                            {item.title} ↗
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.summary}</p>
                      {item.source && <span className="text-gray-600 text-xs mt-1 inline-block">{item.source}</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Nothing major this week.</p>
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
            {content.price_prediction && (
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
                      <span>{item}</span>
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

'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface NewsArticle {
  title: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  source: string;
  url: string;
  date: string;
}

interface SentimentData {
  overall: number;
  label: 'Bullish' | 'Bearish' | 'Neutral';
  articles: NewsArticle[];
  lastUpdated: string;
}

export default function NewsSentiment() {
  const [data, setData] = useState<SentimentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSentiment() {
      try {
        const res = await fetch('/api/news-sentiment');
        if (!res.ok) throw new Error('Failed');
        const json = await res.json();
        setData({
          ...json,
          lastUpdated: new Date(json.lastUpdated).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        });
      } catch {
        // Silent fail
      } finally {
        setLoading(false);
      }
    }

    fetchSentiment();
    const interval = setInterval(fetchSentiment, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
        <div className="animate-pulse space-y-3">
          <div className="h-3 w-32 bg-white/10 rounded" />
          <div className="h-8 w-20 bg-white/10 rounded" />
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-3 bg-white/5 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const sentimentColor = data.label === 'Bullish' ? 'text-green-400' : data.label === 'Bearish' ? 'text-red-400' : 'text-yellow-400';
  const sentimentBg = data.label === 'Bullish' ? 'bg-green-500/10 border-green-500/20' : data.label === 'Bearish' ? 'bg-red-500/10 border-red-500/20' : 'bg-yellow-500/10 border-yellow-500/20';
  const SentimentIcon = data.label === 'Bullish' ? TrendingUp : data.label === 'Bearish' ? TrendingDown : Minus;

  const bullishPct = Math.round((data.articles.filter(a => a.sentiment === 'bullish').length / data.articles.length) * 100);
  const bearishPct = Math.round((data.articles.filter(a => a.sentiment === 'bearish').length / data.articles.length) * 100);
  const neutralPct = 100 - bullishPct - bearishPct;

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-white/40 uppercase tracking-widest">News Sentiment</p>
        <span className="text-[10px] text-white/20">{data.lastUpdated}</span>
      </div>

      {/* Overall sentiment badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${sentimentBg} mb-4`}>
        <SentimentIcon className={`h-4 w-4 ${sentimentColor}`} />
        <span className={`text-sm font-semibold ${sentimentColor}`}>{data.label}</span>
      </div>

      {/* Sentiment bar */}
      <div className="flex rounded-full overflow-hidden h-2 mb-2">
        {bullishPct > 0 && <div className="bg-green-500/80 transition-all duration-500" style={{ width: `${bullishPct}%` }} />}
        {neutralPct > 0 && <div className="bg-yellow-500/50 transition-all duration-500" style={{ width: `${neutralPct}%` }} />}
        {bearishPct > 0 && <div className="bg-red-500/80 transition-all duration-500" style={{ width: `${bearishPct}%` }} />}
      </div>
      <div className="flex justify-between text-[10px] text-white/30 mb-4">
        <span>{bullishPct}% Bullish</span>
        {neutralPct > 0 && <span>{neutralPct}% Neutral</span>}
        <span>{bearishPct}% Bearish</span>
      </div>

      {/* Recent headlines */}
      <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Based on {data.articles.length} recent articles</p>
      <div className="space-y-1.5 max-h-[240px] overflow-y-auto">
        {data.articles.map((article, i) => {
          const dotColor = article.sentiment === 'bullish' ? 'bg-green-400' : article.sentiment === 'bearish' ? 'bg-red-400' : 'bg-yellow-400';
          return (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 py-1.5 px-1 rounded hover:bg-white/[0.03] transition-colors group"
            >
              <div className={`h-1.5 w-1.5 rounded-full ${dotColor} mt-1.5 shrink-0`} />
              <div className="min-w-0">
                <p className="text-xs text-white/70 leading-snug line-clamp-2 group-hover:text-white/90 transition-colors">
                  {article.title}
                </p>
                <p className="text-[10px] text-white/20 mt-0.5">{article.source} · {article.date}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Users } from 'lucide-react';

interface CommunityData {
  bullish: number;
  bearish: number;
  label: 'Bullish' | 'Bearish' | 'Neutral';
  source: string;
}

export default function CommunitySentiment() {
  const [data, setData] = useState<CommunityData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSentiment() {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/ripple?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false'
        );
        if (!res.ok) throw new Error('Failed');
        const json = await res.json();

        const up = json.sentiment_votes_up_percentage ?? 50;
        const down = json.sentiment_votes_down_percentage ?? 50;

        let label: 'Bullish' | 'Bearish' | 'Neutral' = 'Neutral';
        if (up > 60) label = 'Bullish';
        else if (down > 60) label = 'Bearish';

        setData({
          bullish: Math.round(up),
          bearish: Math.round(down),
          label,
          source: 'CoinGecko',
        });
      } catch {
        // silent
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
          <div className="h-3 w-36 bg-white/10 rounded" />
          <div className="h-8 w-20 bg-white/10 rounded" />
        </div>
      </div>
    );
  }

  if (!data) return null;

  const sentimentColor = data.label === 'Bullish' ? 'text-green-400' : data.label === 'Bearish' ? 'text-red-400' : 'text-yellow-400';
  const sentimentBg = data.label === 'Bullish' ? 'bg-green-500/10 border-green-500/20' : data.label === 'Bearish' ? 'bg-red-500/10 border-red-500/20' : 'bg-yellow-500/10 border-yellow-500/20';
  const SentimentIcon = data.label === 'Bullish' ? TrendingUp : data.label === 'Bearish' ? TrendingDown : Users;

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-white/40 uppercase tracking-widest">Community Sentiment</p>
        <span className="text-[10px] text-white/20">{data.source}</span>
      </div>

      {/* Overall badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${sentimentBg} mb-4`}>
        <SentimentIcon className={`h-4 w-4 ${sentimentColor}`} />
        <span className={`text-sm font-semibold ${sentimentColor}`}>{data.label}</span>
      </div>

      {/* Bar with inline labels */}
      <div className="flex rounded-full overflow-hidden h-6 mb-2">
        <div className="bg-green-500/80 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500" style={{ width: `${data.bullish}%` }}>
          {data.bullish > 15 && `${data.bullish}%`}
        </div>
        <div className="bg-red-500/80 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500" style={{ width: `${data.bearish}%` }}>
          {data.bearish > 15 && `${data.bearish}%`}
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-white/40">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-500/80" /> Bullish</span>
        <span className="flex items-center gap-1">Bearish <span className="h-2 w-2 rounded-full bg-red-500/80" /></span>
      </div>
    </div>
  );
}

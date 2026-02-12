'use client';

import { TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useXRPPrice } from '@/hooks/useXRPPrice';

export default function MiniChartPreview() {
  const { data } = useXRPPrice();
  const positive = (data?.change24h ?? 0) >= 0;

  return (
    <Link href="/live-chart">
      <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] p-6 overflow-hidden hover:bg-[#1D1F23] transition-colors cursor-pointer group">
        {/* Gradient background glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="h-10 w-10 rounded-lg bg-[#0085FF]/15 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-[#0085FF]" />
            </div>
          </div>
          
          <h3 className="text-[15px] font-bold text-text-primary mb-1">
            Advanced <span className="text-[#0085FF]">Charts</span>
          </h3>
          
          {/* Quick stats */}
          <div className="mb-4 space-y-1.5">
            <p className="text-[13px] text-text-secondary">
              24h Change: <span className={`font-bold ${positive ? 'text-success' : 'text-danger'}`}>
                {positive ? '+' : ''}{data?.change24h?.toFixed(2) ?? '—'}%
              </span>
            </p>
            <p className="text-[13px] text-text-secondary">
              TradingView & Market Data
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#0085FF] group-hover:gap-3 transition-all">
            View Charts
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Blue glow effect */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
      </div>
    </Link>
  );
}

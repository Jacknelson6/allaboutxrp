'use client';

import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import { useXRPLStream } from '@/lib/globe/useXRPLStream';
import StatsBar from '@/components/globe/StatsBar';
import TransactionFeed from '@/components/globe/TransactionFeed';
import LoadingScreen from '@/components/globe/LoadingScreen';

const Globe = dynamic(() => import('@/components/globe/Globe'), {
  ssr: false,
  loading: () => <LoadingScreen />,
});

export default function LiveContent() {
  const { transactions, arcs, stats, removeArc } = useXRPLStream();
  const [showFeed, setShowFeed] = useState(true);

  return (
    <div className="fixed inset-0 flex flex-col bg-[#000000] z-40">
      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* Main Content */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Globe */}
        <div className="flex-1 relative">
          <Suspense fallback={<LoadingScreen />}>
            <Globe arcs={arcs} onArcComplete={removeArc} />
          </Suspense>

          {/* Logo overlay */}
          <div className="absolute top-4 left-4 z-10">
            <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#F0F0F0]">All About </span>
              <span className="text-[#0085FF]">XRP</span>
            </h1>
            <p className="text-[10px] text-[#888888] font-mono tracking-widest uppercase mt-0.5">
              Real-Time XRPL Visualizer
            </p>
          </div>

          {/* Back to site link */}
          <a
            href="/"
            className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-[#0A0A0B] border border-[rgba(255,255,255,0.08)] rounded-lg text-xs font-mono text-[#888888] hover:text-[#F0F0F0] hover:border-[#0085FF]/50 transition-colors"
          >
            ← Back to Site
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setShowFeed(!showFeed)}
            className="absolute bottom-4 right-4 z-10 md:hidden px-4 py-2.5 min-h-[44px] bg-[#0A0A0B] border border-[rgba(255,255,255,0.08)] rounded-lg text-sm font-mono text-[#888888]"
          >
            {showFeed ? 'Hide Feed' : 'Show Feed'}
          </button>

          {/* Powered by */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
            <span className="text-[10px] text-[#888888] font-mono tracking-wider">
              Powered by XRPL
            </span>
          </div>
        </div>

        {/* Transaction Feed Sidebar */}
        <div
          className={`
            w-full sm:w-80 bg-[#0A0A0B]/95 border-l border-[rgba(255,255,255,0.08)]
            transition-transform duration-300
            ${showFeed ? 'translate-x-0' : 'translate-x-full'}
            fixed md:relative right-0 top-0 bottom-0 md:translate-x-0 z-20
            ${!showFeed ? 'md:block hidden' : ''}
          `}
          style={{ marginTop: 'inherit' }}
        >
          <TransactionFeed transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

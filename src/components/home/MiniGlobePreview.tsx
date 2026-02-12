'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Globe = dynamic(() => import('@/components/globe/Globe'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
    </div>
  ),
});

const noop = () => {};

export default function MiniGlobePreview() {
  return (
    <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden group">
      {/* Globe preview - non-interactive */}
      <Link href="/live">
        <div className="relative h-[200px] w-full pointer-events-none">
          <div className="absolute inset-0">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF]" />
              </div>
            }>
              <Globe arcs={[]} onArcComplete={noop} />
            </Suspense>
          </div>
        </div>
      </Link>

      {/* Content below globe */}
      <div className="relative z-10 px-5 pb-5 pt-3">
        <h3 className="text-[15px] font-bold text-text-primary mb-1">
          Real-Time XRPL <span className="text-[#0085FF]">Globe</span>
        </h3>
        <p className="text-[13px] text-text-secondary mb-3">
          Visualize live transactions across the XRP Ledger worldwide.
        </p>
        <Link href="/live" className="flex items-center gap-2 text-[13px] font-medium text-[#0085FF] hover:gap-3 transition-all">
          Explore Live
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Blue glow effect */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
    </div>
  );
}

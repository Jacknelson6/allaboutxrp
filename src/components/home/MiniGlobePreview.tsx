'use client';

import { Globe as GlobeIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MiniGlobePreview() {
  return (
    <Link href="/live">
      <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] p-6 overflow-hidden hover:bg-[#1D1F23] transition-colors cursor-pointer group">
        {/* Gradient background glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="h-10 w-10 rounded-lg bg-[#0085FF]/15 flex items-center justify-center">
              <GlobeIcon className="h-5 w-5 text-[#0085FF]" />
            </div>
          </div>
          
          <h3 className="text-[15px] font-bold text-text-primary mb-1">
            Real-Time XRPL <span className="text-[#0085FF]">Globe</span>
          </h3>
          <p className="text-[13px] text-text-secondary mb-4">
            Visualize live transactions across the XRP Ledger worldwide.
          </p>
          
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#0085FF] group-hover:gap-3 transition-all">
            Explore Live
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Blue glow effect */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0085FF]/10 rounded-full blur-3xl -z-0" />
      </div>
    </Link>
  );
}

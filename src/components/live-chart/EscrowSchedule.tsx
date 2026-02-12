'use client';

import Link from 'next/link';
import { Lock, Unlock } from 'lucide-react';

// Show past unlocks + next 2 upcoming months
const pastUnlocks = [
  { date: 'Jan 1, 2026', amount: 800, status: 'released' as const },
  { date: 'Feb 1, 2026', amount: 800, status: 'released' as const },
];

const escrowSchedule = [
  { date: 'Mar 1, 2026', amount: 800, status: 'upcoming' as const },
  { date: 'Apr 1, 2026', amount: 800, status: 'upcoming' as const },
];

const allUnlocks = [...pastUnlocks, ...escrowSchedule];

export default function EscrowSchedule() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
      <h2 className="text-lg font-bold mb-1">
        XRP <span className="text-[#0085FF]">Escrow</span> Schedule
      </h2>
      <div className="mt-3 space-y-2">
        {allUnlocks.map((unlock, i) => {
          const isReleased = unlock.status === 'released';
          return (
            <div
              key={unlock.date}
              className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                isReleased
                  ? 'bg-white/[0.02] opacity-50'
                  : i === pastUnlocks.length
                  ? 'bg-[#0085FF]/[0.08] border border-[#0085FF]/20'
                  : 'bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center gap-3">
                {isReleased ? (
                  <Unlock className="h-4 w-4 text-green-400" />
                ) : (
                  <Lock className="h-4 w-4 text-[#0085FF]" />
                )}
                <div>
                  <span className="text-sm font-medium text-white">{unlock.date}</span>
                  {i === pastUnlocks.length && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider bg-[#0085FF]/20 text-[#0085FF] px-1.5 py-0.5 rounded-full font-semibold">
                      Next
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-sm font-semibold text-white/80">
                  {unlock.amount}M XRP
                </span>
                <span className={`ml-2 text-[10px] uppercase tracking-wider ${
                  isReleased ? 'text-green-400' : 'text-white/30'
                }`}>
                  {isReleased ? 'Released' : 'Locked'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-3">
        <p className="text-xs text-white/30">
          Ripple typically sells or re-escrows the majority of each monthly unlock.
          On average, ~200-300M XRP enters circulation per month.
        </p>
        <Link
          href="/learn/escrow"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0085FF] hover:text-[#0085FF]/80 transition-colors"
        >
          Learn more about what escrow is →
        </Link>
      </div>
    </div>
  );
}

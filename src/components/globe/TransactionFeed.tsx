'use client';

import { XRPLTransaction } from '@/lib/globe/xrpl-stream';
import { getLabelForAddress, truncateAddress } from '@/lib/globe/known-accounts';
import { getArcColor } from '@/lib/globe/geo-utils';

function formatAmount(amount: number): string {
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(2)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(1)}K`;
  return amount.toFixed(2);
}

function formatTime(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

interface Props {
  transactions: XRPLTransaction[];
}

export default function TransactionFeed({ transactions }: Props) {
  const payments = transactions.filter(tx => tx.type === 'Payment' && tx.amount > 0);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.08)]">
        <h2 className="text-sm font-semibold text-[#F0F0F0] tracking-wider uppercase font-mono">
          Live Transactions
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {payments.length === 0 && (
          <div className="px-4 py-8 text-center text-[#888888] text-sm">
            Waiting for transactions...
          </div>
        )}
        {payments.map((tx) => {
          const color = getArcColor(tx.amount);
          const senderLabel = getLabelForAddress(tx.account);
          const destLabel = getLabelForAddress(tx.destination);

          return (
            <a
              key={tx.id}
              href={`https://xrpscan.com/tx/${tx.hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 border-b border-[#21262d] hover:bg-[#1c2128] transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold font-mono" style={{ color }}>
                  {formatAmount(tx.amount)} XRP
                </span>
                <span className="text-[10px] text-[#888888] font-mono">
                  {formatTime(tx.timestamp)}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#888888]">
                <span className={senderLabel ? 'text-[#58a6ff]' : ''}>
                  {senderLabel || truncateAddress(tx.account)}
                </span>
                <span className="text-[rgba(255,255,255,0.08)]">→</span>
                <span className={destLabel ? 'text-[#58a6ff]' : ''}>
                  {destLabel || truncateAddress(tx.destination)}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

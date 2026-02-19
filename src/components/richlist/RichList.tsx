'use client';

import { useEffect, useState } from 'react';
import ScrollHint from '@/components/shared/ScrollHint';

interface RichListEntry {
  address: string;
  balance: number;
  label?: string;
  rank?: number;
  escrow?: number;
  percentage?: number;
  isKnown?: boolean;
}

const ROWS_PER_PAGE = 10;

function Pagination({ currentPage, totalPages, totalItems, perPage, onPageChange }: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
  onPageChange: (page: number) => void;
}) {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalItems);
  const pages: (number | '...')[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }
  return (
    <div className="flex items-center justify-between px-2 pt-4 pb-2 border-t border-white/[0.06]">
      <span className="text-xs text-white/30">Showing {start} - {end} of {totalItems}</span>
      <div className="flex items-center gap-1">
        <button onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="px-2 py-1 text-xs rounded-md text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">‹</button>
        {pages.map((p, i) =>
          p === '...' ? (
            <span key={`dots-${i}`} className="px-1 text-xs text-white/30">…</span>
          ) : (
            <button key={p} onClick={() => onPageChange(p)} className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${p === currentPage ? 'bg-[#0085FF] text-black' : 'text-white/50 hover:text-white hover:bg-white/[0.06]'}`}>{p}</button>
          )
        )}
        <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="px-2 py-1 text-xs rounded-md text-white/40 hover:text-white hover:bg-white/[0.06] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">›</button>
      </div>
    </div>
  );
}

export default function RichList() {
  const [entries, setEntries] = useState<RichListEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchRichList() {
      try {
        const res = await fetch('/api/xrp/richlist?limit=50');
        if (!res.ok) throw new Error('Failed');
        const json = await res.json();
        setEntries(json.data || []);
      } catch {
        // silent
      } finally {
        setLoading(false);
      }
    }
    fetchRichList();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
        <h2 className="text-lg font-bold text-text-primary mb-4">XRP Rich List</h2>
        <div className="animate-pulse space-y-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-8 bg-white/5 rounded" />
          ))}
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(entries.length / ROWS_PER_PAGE);
  const paged = entries.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE);

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
      <h2 className="text-lg font-bold text-text-primary mb-1">XRP Rich List</h2>
      <p className="text-sm text-white/40 mb-4">Top wallets ranked by XRP balance</p>

      <ScrollHint>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left">
              <th className="py-2 pr-4 text-xs text-white/40 font-medium w-12">#</th>
              <th className="py-2 pr-4 text-xs text-white/40 font-medium">Address</th>
              <th className="py-2 text-xs text-white/40 font-medium text-right">Balance (XRP)</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((entry, i) => {
              const idx = (page - 1) * ROWS_PER_PAGE + i;
              return (
              <tr key={entry.address} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                <td className="py-3 pr-4 text-white/30 font-mono text-xs">{entry.rank ?? idx + 1}</td>
                <td className="py-3 pr-4">
                  <a
                    href={`https://livenet.xrpl.org/accounts/${entry.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#0085FF] hover:text-[#0085FF]/80 transition-colors"
                  >
                    {entry.address.slice(0, 8)}...{entry.address.slice(-6)}
                  </a>
                  {entry.label && (
                    <span className="ml-2 text-[10px] text-white/30 bg-white/[0.04] px-1.5 py-0.5 rounded">
                      {entry.label}
                    </span>
                  )}
                </td>
                <td className="py-3 text-right font-mono text-xs text-white/70">
                  {entry.balance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </ScrollHint>

      {entries.length > ROWS_PER_PAGE && (
        <Pagination currentPage={page} totalPages={totalPages} totalItems={entries.length} perPage={ROWS_PER_PAGE} onPageChange={setPage} />
      )}

      {entries.length === 0 && !loading && (
        <p className="text-center text-white/30 text-sm py-8">Unable to load rich list data</p>
      )}
    </div>
  );
}

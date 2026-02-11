'use client';

import { useEffect, useState } from 'react';

interface RichListEntry {
  account: string;
  balance: number;
  label?: string;
}

export default function RichList() {
  const [entries, setEntries] = useState<RichListEntry[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
      <h2 className="text-lg font-bold text-text-primary mb-1">XRP Rich List</h2>
      <p className="text-sm text-white/40 mb-4">Top wallets ranked by XRP balance</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left">
              <th className="py-2 pr-4 text-xs text-white/40 font-medium w-12">#</th>
              <th className="py-2 pr-4 text-xs text-white/40 font-medium">Address</th>
              <th className="py-2 text-xs text-white/40 font-medium text-right">Balance (XRP)</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr key={entry.account} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                <td className="py-3 pr-4 text-white/30 font-mono text-xs">{i + 1}</td>
                <td className="py-3 pr-4">
                  <a
                    href={`https://livenet.xrpl.org/accounts/${entry.account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#0085FF] hover:text-[#0085FF]/80 transition-colors"
                  >
                    {entry.account.slice(0, 8)}...{entry.account.slice(-6)}
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
            ))}
          </tbody>
        </table>
      </div>

      {entries.length === 0 && !loading && (
        <p className="text-center text-white/30 text-sm py-8">Unable to load rich list data</p>
      )}
    </div>
  );
}

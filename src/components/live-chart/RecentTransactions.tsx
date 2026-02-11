'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  amount: number;
  time: Date;
}

function truncate(s: string, start = 6, end = 4) {
  if (s.length <= start + end + 3) return s;
  return `${s.slice(0, start)}...${s.slice(-end)}`;
}

function amountColor(xrp: number): string {
  if (xrp >= 1_000_000) return 'text-red-400';
  if (xrp >= 100_000) return 'text-orange-400';
  if (xrp >= 10_000) return 'text-yellow-400';
  if (xrp >= 1_000) return 'text-green-400';
  return 'text-white/60';
}

function timeAgo(d: Date): string {
  const s = Math.floor((Date.now() - d.getTime()) / 1000);
  if (s < 5) return 'just now';
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  return `${Math.floor(s / 3600)}h ago`;
}

export default function RecentTransactions() {
  const [txns, setTxns] = useState<Transaction[]>([]);
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const txnsRef = useRef<Transaction[]>([]);

  const addTxn = useCallback((tx: Transaction) => {
    txnsRef.current = [tx, ...txnsRef.current].slice(0, 20);
    setTxns([...txnsRef.current]);
  }, []);

  useEffect(() => {
    let ws: WebSocket;
    let reconnectTimer: NodeJS.Timeout;

    function connect() {
      ws = new WebSocket('wss://xrplcluster.com');
      wsRef.current = ws;

      ws.onopen = () => {
        setConnected(true);
        ws.send(JSON.stringify({
          command: 'subscribe',
          streams: ['transactions'],
        }));
      };

      ws.onmessage = (evt) => {
        try {
          const data = JSON.parse(evt.data);
          if (data.type === 'transaction' && data.validated && data.transaction) {
            const t = data.transaction;
            if (t.TransactionType === 'Payment' && typeof t.Amount === 'string') {
              const amountXRP = parseInt(t.Amount, 10) / 1_000_000;
              if (amountXRP >= 1) {
                addTxn({
                  hash: t.hash,
                  from: t.Account,
                  to: t.Destination,
                  amount: amountXRP,
                  time: new Date(),
                });
              }
            }
          }
        } catch { /* ignore parse errors */ }
      };

      ws.onclose = () => {
        setConnected(false);
        reconnectTimer = setTimeout(connect, 3000);
      };

      ws.onerror = () => ws.close();
    }

    connect();

    return () => {
      clearTimeout(reconnectTimer);
      if (wsRef.current) wsRef.current.close();
    };
  }, [addTxn]);

  // Update time display
  const [, setTick] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">
          Recent <span className="text-[#0085FF]">Transactions</span>
        </h2>
        <span className={`flex items-center gap-1.5 text-xs ${connected ? 'text-green-400' : 'text-red-400'}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${connected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          {connected ? 'Live' : 'Connecting…'}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] text-white/30 uppercase tracking-widest border-b border-white/[0.06]">
              <th className="pb-3 pr-4">Hash</th>
              <th className="pb-3 pr-4">From</th>
              <th className="pb-3 pr-4">To</th>
              <th className="pb-3 pr-4 text-right">Amount</th>
              <th className="pb-3 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {txns.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-white/30">
                  {connected ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/10 border-t-[#0085FF] mx-auto mb-2" />
                      Waiting for transactions…
                    </>
                  ) : (
                    'Connecting to XRPL…'
                  )}
                </td>
              </tr>
            ) : (
              txns.map((tx) => (
                <tr key={tx.hash} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4">
                    <a
                      href={`https://livenet.xrpl.org/transactions/${tx.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#0085FF] hover:underline"
                    >
                      {truncate(tx.hash, 6, 4)}
                    </a>
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs text-white/50">{truncate(tx.from)}</td>
                  <td className="py-3 pr-4 font-mono text-xs text-white/50">{truncate(tx.to)}</td>
                  <td className={`py-3 pr-4 text-right font-mono text-xs font-semibold ${amountColor(tx.amount)}`}>
                    {tx.amount.toLocaleString('en-US', { maximumFractionDigits: 0 })} XRP
                  </td>
                  <td className="py-3 text-right text-xs text-white/30">{timeAgo(tx.time)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { subscribe, XRPLTransaction } from './xrpl-stream';

const MAX_TRANSACTIONS = 100;
const MAX_ARCS = 150;
const STATS_WINDOW = 5 * 60 * 1000;
const ARC_DRIP_INTERVAL = 80;

export interface Stats {
  tps: number;
  totalXrpMoved: number;
  largestTx: number;
  connected: boolean;
}

export function useXRPLStream() {
  const [transactions, setTransactions] = useState<XRPLTransaction[]>([]);
  const [arcs, setArcs] = useState<XRPLTransaction[]>([]);
  const [stats, setStats] = useState<Stats>({ tps: 0, totalXrpMoved: 0, largestTx: 0, connected: false });

  const recentTxTimes = useRef<number[]>([]);
  const recentAmounts = useRef<{ amount: number; time: number }[]>([]);
  const incomingBuffer = useRef<XRPLTransaction[]>([]);
  const arcQueue = useRef<XRPLTransaction[]>([]);
  const batchTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const arcDripTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const processBatch = useCallback(() => {
    const batch = incomingBuffer.current.splice(0);
    if (batch.length === 0) return;

    setTransactions(prev => [...batch, ...prev].slice(0, MAX_TRANSACTIONS));

    // Show all transaction types on the globe, not just payments
    arcQueue.current.push(...batch);

    const now = Date.now();
    recentTxTimes.current.push(...batch.map(() => now));
    recentTxTimes.current = recentTxTimes.current.filter(t => now - t < 10_000);

    for (const tx of batch) {
      if (tx.amount > 0) {
        recentAmounts.current.push({ amount: tx.amount, time: now });
      }
    }
    recentAmounts.current = recentAmounts.current.filter(a => now - a.time < STATS_WINDOW);

    const totalXrp = recentAmounts.current.reduce((s, a) => s + a.amount, 0);
    const largest = recentAmounts.current.reduce((m, a) => Math.max(m, a.amount), 0);

    setStats({
      tps: Math.round(recentTxTimes.current.length / 10 * 10) / 10,
      totalXrpMoved: totalXrp,
      largestTx: largest,
      connected: true,
    });
  }, []);

  const dripArc = useCallback(() => {
    if (arcQueue.current.length === 0) return;
    // Drip up to 3 arcs at once to keep up with high throughput
    const count = Math.min(arcQueue.current.length, 3);
    const batch = arcQueue.current.splice(0, count);
    setArcs(prev => [...batch, ...prev].slice(0, MAX_ARCS));
  }, []);

  useEffect(() => {
    batchTimer.current = setInterval(processBatch, 200);
    arcDripTimer.current = setInterval(dripArc, ARC_DRIP_INTERVAL);
    const unsub = subscribe((tx) => {
      incomingBuffer.current.push(tx);
    });

    return () => {
      unsub();
      if (batchTimer.current) clearInterval(batchTimer.current);
      if (arcDripTimer.current) clearInterval(arcDripTimer.current);
    };
  }, [processBatch, dripArc]);

  const removeArc = useCallback((id: string) => {
    setArcs(prev => prev.filter(a => a.id !== id));
  }, []);

  return { transactions, arcs, stats, removeArc };
}

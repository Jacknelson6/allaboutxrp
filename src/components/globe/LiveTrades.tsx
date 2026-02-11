'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trade {
  id: string;
  price: number;
  qty: number;
  time: number;
  isBuy: boolean;
}

export default function LiveTrades() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const connect = () => {
      const ws = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          const trade: Trade = {
            id: String(data.t),
            price: parseFloat(data.p),
            qty: parseFloat(data.q),
            time: data.T,
            isBuy: !data.m, // m=true means market sell
          };
          setTrades((prev) => [trade, ...prev].slice(0, 20));
        } catch {
          // ignore parse errors
        }
      };

      ws.onclose = () => {
        setTimeout(connect, 3000);
      };
    };

    connect();
    return () => {
      wsRef.current?.close();
    };
  }, []);

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="h-full flex flex-col bg-black rounded-xl border border-white/[0.06] overflow-hidden">
      <div className="px-3 py-2.5 border-b border-white/[0.06] flex items-center justify-between shrink-0">
        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Live Trades</span>
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
      </div>
      <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-x-3 px-3 py-1.5 text-[10px] text-white/30 uppercase tracking-wider border-b border-white/[0.04] shrink-0">
        <span>Price</span>
        <span className="text-right">Qty</span>
        <span className="text-right">Time</span>
        <span className="w-1" />
      </div>
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
          <AnimatePresence initial={false}>
            {trades.map((trade) => (
              <motion.div
                key={trade.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-[1fr_1fr_auto_auto] gap-x-3 px-3 py-1 text-[11px] font-mono hover:bg-white/[0.02] transition-colors"
              >
                <span className={trade.isBuy ? 'text-green-400' : 'text-red-400'}>
                  ${trade.price.toFixed(4)}
                </span>
                <span className="text-right text-white/60">
                  {trade.qty.toFixed(1)}
                </span>
                <span className="text-right text-white/30">
                  {formatTime(trade.time)}
                </span>
                <span className={`w-1 h-1 rounded-full self-center ${trade.isBuy ? 'bg-green-400' : 'bg-red-400'}`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

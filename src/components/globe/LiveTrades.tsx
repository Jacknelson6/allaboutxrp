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

/**
 * Live XRP trades sourced from the XRP Ledger directly.
 * Subscribes to XRPL transaction stream and filters for Payment/OfferCreate.
 */
export default function LiveTrades() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const idRef = useRef(0);

  useEffect(() => {
    const connect = () => {
      const ws = new WebSocket('wss://xrplcluster.com');
      wsRef.current = ws;

      ws.onopen = () => {
        ws.send(JSON.stringify({
          command: 'subscribe',
          streams: ['transactions'],
        }));
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          const tx = msg?.transaction;
          if (!tx) return;

          // Filter for XRP payments with USD destination (DEX trades)
          if (tx.TransactionType === 'Payment' && tx.Amount && typeof tx.Amount === 'string') {
            const xrpAmount = parseInt(tx.Amount) / 1_000_000;
            if (xrpAmount < 10) return; // skip dust
            
            const trade: Trade = {
              id: String(++idRef.current),
              price: 0, // raw XRP transfer, no price
              qty: xrpAmount,
              time: Date.now(),
              isBuy: true,
            };
            setTrades((prev) => [trade, ...prev].slice(0, 20));
          }

          // OfferCreate on the DEX
          if (tx.TransactionType === 'OfferCreate') {
            const gets = tx.TakerGets;
            const pays = tx.TakerPays;
            
            let xrpAmount = 0;
            let usdAmount = 0;
            let isBuy = false;

            // XRP for USD (selling XRP)
            if (typeof gets === 'string' && typeof pays === 'object' && pays?.currency === 'USD') {
              xrpAmount = parseInt(gets) / 1_000_000;
              usdAmount = parseFloat(pays.value);
              isBuy = false;
            }
            // USD for XRP (buying XRP)
            else if (typeof pays === 'string' && typeof gets === 'object' && gets?.currency === 'USD') {
              xrpAmount = parseInt(pays) / 1_000_000;
              usdAmount = parseFloat(gets.value);
              isBuy = true;
            }

            if (xrpAmount > 10 && usdAmount > 0) {
              const price = usdAmount / xrpAmount;
              if (price > 0.01 && price < 1000) {
                const trade: Trade = {
                  id: String(++idRef.current),
                  price,
                  qty: xrpAmount,
                  time: Date.now(),
                  isBuy,
                };
                setTrades((prev) => [trade, ...prev].slice(0, 20));
              }
            }
          }
        } catch {
          // ignore
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
                  {trade.price > 0 ? `$${trade.price.toFixed(4)}` : '—'}
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

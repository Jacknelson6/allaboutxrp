"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, ArrowRight, Mail } from "lucide-react";
import { useXRPPrice } from "@/hooks/useXRPPrice";
import TradeModal from "@/components/shared/TradeModal";

const trendingTopics = [
  { category: "XRP Ecosystem", title: "RLUSD hits $1.5B market cap", posts: "12.4K posts" },
  { category: "Legal", title: "SEC case officially dismissed", posts: "45.2K posts" },
  { category: "Partnerships", title: "Société Générale x Ripple", posts: "8.7K posts" },
  { category: "Technology", title: "XRP Ledger AMM goes live", posts: "6.1K posts" },
  { category: "Market", title: "$XRP breaks $2.50 resistance", posts: "23.8K posts" },
];

const recommendedAccounts = [
  { name: "Ripple", handle: "Ripple", avatar: "https://unavatar.io/twitter/Ripple" },
  { name: "Brad Garlinghouse", handle: "bgarlinghouse", avatar: "https://unavatar.io/twitter/bgarlinghouse" },
  { name: "David Schwartz", handle: "JoelKatz", avatar: "https://unavatar.io/twitter/JoelKatz" },
  { name: "Wietse Wind", handle: "WietseWind", avatar: "https://unavatar.io/twitter/WietseWind" },
];

function LivePriceWidget({ compact = false }: { compact?: boolean }) {
  const { data, flash } = useXRPPrice();
  const [modalOpen, setModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <span className="font-mono text-text-secondary">XRP $--.--</span>
      </div>
    );
  }

  const positive = data.change24h >= 0;
  const Icon = positive ? TrendingUp : TrendingDown;
  const flashColor = flash === "up" ? "text-success" : flash === "down" ? "text-danger" : "text-text-primary";

  if (compact) {
    return (
      <button onClick={() => setModalOpen(true)} className="flex items-center gap-3 text-sm">
        <span className="text-text-secondary text-[13px]">XRP</span>
        <span className={`font-mono font-bold text-[15px] transition-colors duration-300 ${flashColor}`}>
          ${data.price.toFixed(4)}
        </span>
        <span className={`flex items-center gap-1 text-xs font-medium ${positive ? "text-success" : "text-danger"}`}>
          <Icon className="h-3 w-3" />
          {positive ? "+" : ""}{data.change24h.toFixed(2)}%
        </span>
        <TradeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} priceInfo={data} />
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="w-full rounded-2xl border border-[#2F3336] bg-[#16181C] p-4 text-left hover:bg-[#1D1F23] transition-colors"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-bold text-text-primary">XRP / USDT</span>
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
        </div>
        <div className={`font-mono text-[28px] font-bold transition-colors duration-300 ${flashColor}`}>
          ${data.price.toFixed(4)}
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className={`flex items-center gap-1 text-[13px] font-medium ${positive ? "text-success" : "text-danger"}`}>
            <Icon className="h-3.5 w-3.5" />
            {positive ? "+" : ""}{data.change24h.toFixed(2)}%
          </span>
          <span className="text-[13px] text-text-secondary">24h</span>
        </div>
        <div className="mt-3 flex justify-between text-[12px] text-text-secondary">
          <span>H: ${data.high24h.toFixed(4)}</span>
          <span>L: ${data.low24h.toFixed(4)}</span>
        </div>
      </button>
      <TradeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} priceInfo={data} />
    </>
  );
}

export default function RightSidebar({ mobilePrice = false }: { mobilePrice?: boolean }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aaxrp-newsletter-subscribed");
      if (saved === "true") setSubscribed(true);
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    const existing = JSON.parse(localStorage.getItem("aaxrp-newsletter-email") || "[]");
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem("aaxrp-newsletter-email", JSON.stringify(existing));
    }
    localStorage.setItem("aaxrp-newsletter-subscribed", "true");
    setSubscribed(true);
  };

  // Mobile: just show compact price
  if (mobilePrice) {
    return <LivePriceWidget compact />;
  }

  return (
    <div className="sticky top-0 h-screen overflow-y-auto py-3 px-5">
      {/* Live Price */}
      <LivePriceWidget />

      {/* What's happening */}
      <div className="mt-4 rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden">
        <h3 className="px-4 py-3 text-[19px] font-extrabold text-text-primary">What&apos;s happening</h3>
        {trendingTopics.map((topic, i) => (
          <div
            key={i}
            className="px-4 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer border-t border-[#2F3336]/50"
          >
            <span className="text-[13px] text-text-secondary">{topic.category}</span>
            <p className="text-[15px] font-bold text-text-primary leading-tight mt-0.5">{topic.title}</p>
            <span className="text-[13px] text-text-secondary">{topic.posts}</span>
          </div>
        ))}
      </div>

      {/* Who to follow */}
      <div className="mt-4 rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden">
        <h3 className="px-4 py-3 text-[19px] font-extrabold text-text-primary">Who to follow</h3>
        {recommendedAccounts.map((account) => (
          <div
            key={account.handle}
            className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.03] transition-colors border-t border-[#2F3336]/50"
          >
            <div className="h-10 w-10 rounded-full bg-[#333] overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={account.avatar} alt={account.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-bold text-text-primary truncate">{account.name}</p>
              <p className="text-[13px] text-text-secondary truncate">@{account.handle}</p>
            </div>
            <a
              href={`https://x.com/${account.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-text-primary text-black px-4 py-1.5 text-[13px] font-bold hover:bg-white/90 transition-colors"
            >
              Follow
            </a>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-4 rounded-2xl border border-[#2F3336] bg-[#16181C] p-4">
        <h3 className="text-[15px] font-bold text-text-primary mb-2">Daily XRP Briefing</h3>
        {subscribed ? (
          <p className="text-[13px] text-success">Subscribed ✓</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-[#2F3336] bg-black px-3 py-2 text-[13px] text-text-primary placeholder:text-text-secondary/50 outline-none focus:border-xrp-accent/50 transition-colors"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-xrp-accent text-white px-3 py-2 text-[13px] font-bold hover:bg-xrp-accent-bright transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
            </button>
          </form>
        )}
      </div>

      {/* Footer links */}
      <div className="mt-4 px-4 pb-4 text-[12px] text-text-secondary/50 leading-relaxed">
        <a href="/learn/faq" className="hover:underline">FAQ</a> · <a href="/donate" className="hover:underline">Donate</a> · <a href="/learn" className="hover:underline">Learn</a>
        <br />© 2026 AllAboutXRP
      </div>
    </div>
  );
}

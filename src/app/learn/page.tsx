"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen, Rocket, ArrowRight,
  GraduationCap, HelpCircle, History,
  Users, Handshake, Coins, Lock, Building2, UserCircle, Eye, Globe,
  Layers, Play, Search, ScrollText, Shield, Wallet, BarChart3,
  TrendingUp, Zap, Scale, Calculator, MessageCircle, Award,
  MapPin, LineChart, Target, BookMarked, Lightbulb,
} from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import faqData from "@/data/faq.json";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item: { question: string; answer: string }) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

type Card = {
  href: string;
  title: string;
  desc: string;
  emoji: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  featured?: boolean;
};

const basics: Card[] = [
  { href: "/learn/what-is-xrp", title: "What is XRP?", desc: "The digital asset powering global payments", emoji: "💎", icon: Coins, gradient: "from-[#0085FF] to-[#00C2FF]", featured: true },
  { href: "/learn/what-is-ripple", title: "What is Ripple?", desc: "The company behind XRP technology", emoji: "🏢", icon: Layers, gradient: "from-[#0085FF] to-[#6366F1]", featured: true },
  { href: "/learn/get-started", title: "How to Get Started", desc: "Buy your first XRP step by step", emoji: "🚀", icon: Play, gradient: "from-[#06B6D4] to-[#0085FF]", featured: true },
  { href: "/learn/how-to-buy-xrp", title: "How to Buy XRP", desc: "Complete buying guide for beginners", emoji: "💰", icon: Wallet, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/faq", title: "FAQ", desc: "Answers to common XRP questions", emoji: "❓", icon: HelpCircle, gradient: "from-[#8B5CF6] to-[#6366F1]" },
  { href: "/learn/xrp-vs-bitcoin", title: "XRP vs Bitcoin", desc: "How they compare side by side", emoji: "⚡", icon: Zap, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/xrp-vs-solana", title: "XRP vs Solana", desc: "Speed, fees, and use cases compared", emoji: "⚡", icon: Zap, gradient: "from-[#9333EA] to-[#06B6D4]" },
  { href: "/learn/xrp-vs-ethereum", title: "XRP vs Ethereum", desc: "Payments vs smart contracts", emoji: "🔷", icon: Layers, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/xrp-vs-stellar", title: "XRP vs Stellar", desc: "Cross-border payment rivals", emoji: "⭐", icon: Zap, gradient: "from-[#06B6D4] to-[#10B981]" },
  { href: "/learn/xrp-vs-cardano", title: "XRP vs Cardano", desc: "Payments vs smart contracts", emoji: "🔵", icon: Layers, gradient: "from-[#0085FF] to-[#8B5CF6]" },
  { href: "/learn/xrp-vs-hedera", title: "XRP vs Hedera", desc: "Enterprise crypto comparison", emoji: "♯", icon: Zap, gradient: "from-[#6366F1] to-[#06B6D4]" },
  { href: "/learn/ripple-vs-xrp", title: "Ripple vs XRP", desc: "The key difference explained", emoji: "🔀", icon: Layers, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/how-does-xrp-work", title: "How Does XRP Work?", desc: "Technology explained simply", emoji: "⚙️", icon: Globe, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/can-xrp-be-mined", title: "Can XRP Be Mined?", desc: "Why XRP uses consensus", emoji: "⛏️", icon: HelpCircle, gradient: "from-[#F59E0B] to-[#EF4444]" },
];

const deepDives: Card[] = [
  { href: "/learn/history", title: "History of XRP", desc: "From 2012 to today — the full story", emoji: "📜", icon: History, gradient: "from-[#0085FF] to-[#06B6D4]" },
  { href: "/learn/xrp-ledger-explained", title: "XRP Ledger Explained", desc: "How the XRPL consensus works", emoji: "🔗", icon: Globe, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/xrp-tokenomics", title: "XRP Tokenomics", desc: "Supply, distribution & escrow mechanics", emoji: "📊", icon: BarChart3, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/escrow", title: "XRP Escrow", desc: "Ripple's 55B XRP escrow system", emoji: "🔒", icon: Lock, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/xrp-staking", title: "XRP Staking", desc: "Earn yield on your XRP holdings", emoji: "🌱", icon: TrendingUp, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/xrp-use-cases", title: "XRP Use Cases", desc: "Real-world applications beyond payments", emoji: "🌐", icon: Globe, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/xrp-price-history", title: "XRP Price History", desc: "Major price milestones over the years", emoji: "📈", icon: TrendingUp, gradient: "from-[#0085FF] to-[#6366F1]" },
  { href: "/learn/xrp-price-prediction", title: "XRP Price Prediction", desc: "What analysts are saying", emoji: "🔮", icon: Search, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/xrp-price-potential", title: "XRP Price Potential", desc: "Can XRP hit $100? The real math", emoji: "💎", icon: TrendingUp, gradient: "from-[#F59E0B] to-[#10B981]" },
  { href: "/learn/xrp-vs-swift", title: "XRP vs SWIFT", desc: "Legacy payments vs crypto speed", emoji: "⚡", icon: Zap, gradient: "from-[#EF4444] to-[#0085FF]" },
  { href: "/learn/how-banks-use-xrp", title: "How Banks Use XRP", desc: "Cross-border payments explained", emoji: "🏦", icon: Building2, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/banks-using-xrp", title: "Banks Using XRP", desc: "Complete list of partner institutions", emoji: "🏛️", icon: Building2, gradient: "from-[#0085FF] to-[#10B981]" },
  { href: "/learn/xrp-escrow-explained", title: "Escrow Deep Dive", desc: "The 1 billion XRP monthly unlock", emoji: "🔓", icon: Lock, gradient: "from-[#F59E0B] to-[#8B5CF6]" },
  { href: "/learn/xrp-wallets", title: "XRP Wallets Guide", desc: "Choosing the right wallet for you", emoji: "👛", icon: Wallet, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/cross-border-payments", title: "Cross-Border Payments", desc: "Why XRP changes everything", emoji: "🌍", icon: Globe, gradient: "from-[#10B981] to-[#0085FF]" },
  { href: "/learn/xrp-supply-explained", title: "XRP Supply Explained", desc: "Supply, inflation & burn mechanics", emoji: "🔥", icon: BarChart3, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/xrp-myths", title: "XRP Myths Debunked", desc: "Common misconceptions fact-checked", emoji: "🛡️", icon: Shield, gradient: "from-[#EF4444] to-[#F59E0B]" },
  { href: "/learn/xrp-glossary", title: "XRP Glossary", desc: "A-Z of XRP & XRPL terms", emoji: "📖", icon: ScrollText, gradient: "from-[#6366F1] to-[#06B6D4]" },
  { href: "/learn/xrp-etf", title: "XRP ETF Explained", desc: "ETF filings, approval status & price impact", emoji: "📋", icon: ScrollText, gradient: "from-[#0085FF] to-[#10B981]" },
  { href: "/learn/xrp-tax-guide", title: "XRP Tax Guide 2026", desc: "Capital gains, reporting & cost basis", emoji: "🧾", icon: Calculator, gradient: "from-[#F59E0B] to-[#06B6D4]" },
  { href: "/learn/sec-vs-ripple", title: "SEC vs Ripple", desc: "Complete lawsuit timeline & rulings", emoji: "⚖️", icon: Scale, gradient: "from-[#6366F1] to-[#EC4899]" },
  { href: "/learn/sec-vs-ripple-explained", title: "SEC Case Explained", desc: "The case that changed crypto forever", emoji: "📜", icon: Scale, gradient: "from-[#EC4899] to-[#6366F1]" },
  { href: "/learn/ripple-ipo", title: "Ripple IPO", desc: "What happens when Ripple goes public", emoji: "📈", icon: TrendingUp, gradient: "from-[#10B981] to-[#0085FF]" },
  { href: "/learn/xrpl-defi", title: "XRPL DeFi & AMM", desc: "Decentralized finance on the XRP Ledger", emoji: "🔄", icon: Layers, gradient: "from-[#06B6D4] to-[#8B5CF6]" },
  { href: "/learn/xrp-stablecoin-ecosystem", title: "Stablecoin Ecosystem", desc: "RLUSD and stablecoins on XRPL", emoji: "💵", icon: Coins, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/xrp-addresses-and-keys", title: "Addresses & Keys", desc: "How XRP accounts and keys work", emoji: "🔑", icon: Lock, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/xrp-transaction-types", title: "Transaction Types", desc: "Every XRPL transaction explained", emoji: "📋", icon: ScrollText, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/xrpl-validators", title: "Validators & Consensus", desc: "How XRPL reaches agreement", emoji: "🛡️", icon: Shield, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/is-xrp-a-security", title: "Is XRP a Security?", desc: "The SEC ruling explained", emoji: "⚖️", icon: Scale, gradient: "from-[#6366F1] to-[#EC4899]" },
  { href: "/learn/xrp-iso-20022", title: "XRP & ISO 20022", desc: "The global payments standard", emoji: "📋", icon: ScrollText, gradient: "from-[#0085FF] to-[#06B6D4]" },
  { href: "/learn/can-xrp-reach-100", title: "Can XRP Reach $100?", desc: "Realistic price analysis", emoji: "💯", icon: TrendingUp, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/why-is-xrp-so-cheap", title: "Why Is XRP So Cheap?", desc: "Price vs value explained", emoji: "🤔", icon: HelpCircle, gradient: "from-[#8B5CF6] to-[#6366F1]" },
  { href: "/learn/xrp-market-cap-explained", title: "Market Cap Explained", desc: "Understanding crypto valuations", emoji: "📊", icon: BarChart3, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/xrp-energy-consumption", title: "XRP Energy Usage", desc: "250,000x greener than Bitcoin", emoji: "🌱", icon: Globe, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/xrp-burn-rate", title: "XRP Burn Rate", desc: "Deflationary fee mechanism", emoji: "🔥", icon: Zap, gradient: "from-[#EF4444] to-[#F59E0B]" },
  { href: "/learn/xrp-nfts", title: "XRP NFTs", desc: "Native NFTs on the XRPL", emoji: "🖼️", icon: Layers, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/xrp-smart-contracts", title: "Smart Contracts", desc: "Hooks & EVM sidechain", emoji: "📝", icon: ScrollText, gradient: "from-[#6366F1] to-[#0085FF]" },
  { href: "/learn/xrp-amm", title: "XRP AMM", desc: "Native automated market maker", emoji: "🔄", icon: Layers, gradient: "from-[#06B6D4] to-[#8B5CF6]" },
  { href: "/learn/xrp-real-world-assets", title: "Real-World Assets", desc: "Tokenization on the XRPL", emoji: "🏠", icon: Building2, gradient: "from-[#10B981] to-[#0085FF]" },
  { href: "/learn/xrp-airdrops", title: "XRP Airdrops", desc: "How to get free XRPL tokens", emoji: "🎁", icon: Coins, gradient: "from-[#EC4899] to-[#8B5CF6]" },
];

const rippleSoftware: Card[] = [
  { href: "/learn/ripple-software-stack", title: "Ripple Software Stack", desc: "Complete product suite overview", emoji: "🏗️", icon: Layers, gradient: "from-[#0085FF] to-[#6366F1]", featured: true },
  { href: "/learn/ripplenet", title: "RippleNet", desc: "Global payment network for banks", emoji: "🌐", icon: Globe, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/on-demand-liquidity", title: "On-Demand Liquidity", desc: "XRP as a bridge currency", emoji: "⚡", icon: Zap, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/ripple-prime", title: "Ripple Prime", desc: "Institutional prime brokerage", emoji: "🏦", icon: Building2, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/rlusd", title: "RLUSD Stablecoin", desc: "Ripple's USD-backed stablecoin", emoji: "💵", icon: Coins, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/rlusd-explained", title: "RLUSD Explained", desc: "Could it flip USDC?", emoji: "💰", icon: Coins, gradient: "from-[#06B6D4] to-[#10B981]" },
  { href: "/learn/cbdcs-and-xrp", title: "CBDCs & XRP", desc: "Bridge currency for central banks", emoji: "🏛️", icon: Building2, gradient: "from-[#6366F1] to-[#06B6D4]" },
];

const ecosystem: Card[] = [
  { href: "/learn/leadership", title: "Ripple Leadership", desc: "Key executives driving Ripple forward", emoji: "👔", icon: Users, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/partnerships", title: "Partnerships", desc: "Banks & institutions using XRP", emoji: "🤝", icon: Handshake, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/acquisitions", title: "Acquisitions", desc: "Strategic acquisitions by Ripple", emoji: "🏗️", icon: Building2, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/key-people", title: "Key People", desc: "Leaders of the XRP ecosystem", emoji: "👥", icon: UserCircle, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/trusted-sources", title: "Trusted Sources", desc: "Curated XRP community voices", emoji: "✅", icon: Shield, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/riddlers", title: "Riddlers", desc: "The legendary XRP riddle community", emoji: "🧩", icon: Eye, gradient: "from-[#8B5CF6] to-[#EC4899]" },
];

const howTo: Card[] = [
  { href: "/learn/how-to-store-xrp-safely", title: "Store XRP Safely", desc: "Hardware wallets & security best practices", emoji: "🔐", icon: Lock, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/how-to-send-xrp", title: "Send XRP", desc: "Fast transfers in 3-5 seconds", emoji: "📤", icon: Zap, gradient: "from-[#0085FF] to-[#06B6D4]" },
  { href: "/learn/how-to-stake-xrp", title: "Stake XRP", desc: "Earn yield on your holdings", emoji: "🌱", icon: TrendingUp, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/how-to-use-xrpl-dex", title: "Use the XRPL DEX", desc: "Decentralized trading guide", emoji: "🔄", icon: Layers, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/how-to-create-xrpl-token", title: "Create an XRPL Token", desc: "Token issuance in minutes", emoji: "🪙", icon: Coins, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/how-to-read-xrp-charts", title: "Read XRP Charts", desc: "Technical analysis basics", emoji: "📊", icon: BarChart3, gradient: "from-[#8B5CF6] to-[#EC4899]" },
];

const trading: Card[] = [
  { href: "/learn/xrp-dollar-cost-averaging", title: "Dollar Cost Averaging", desc: "The simplest investment strategy", emoji: "📅", icon: Target, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/xrp-swing-trading-guide", title: "Swing Trading Guide", desc: "Capture medium-term price swings", emoji: "📈", icon: TrendingUp, gradient: "from-[#0085FF] to-[#6366F1]" },
  { href: "/learn/xrp-technical-analysis-guide", title: "Technical Analysis Guide", desc: "Advanced TA for XRP", emoji: "📉", icon: LineChart, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/best-xrp-trading-pairs", title: "Best Trading Pairs", desc: "Optimize your trades", emoji: "🔀", icon: Layers, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/xrp-whale-tracking", title: "Whale Tracking", desc: "Follow the big money", emoji: "🐋", icon: Search, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/xrp-accumulation-zones", title: "Accumulation Zones", desc: "Strategic buy levels", emoji: "🎯", icon: Target, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/xrp-exit-strategy", title: "Exit Strategy", desc: "Know when to take profits", emoji: "🚪", icon: Scale, gradient: "from-[#EF4444] to-[#F59E0B]" },
];

const globalAdoption: Card[] = [
  { href: "/learn/xrp-japan-sbi", title: "Japan & SBI Holdings", desc: "Japan's XRP champion", emoji: "🇯🇵", icon: Globe, gradient: "from-[#EF4444] to-[#F59E0B]" },
  { href: "/learn/xrp-middle-east-adoption", title: "Middle East Adoption", desc: "UAE, Saudi & Gulf expansion", emoji: "🕌", icon: MapPin, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/xrp-africa-remittances", title: "Africa Remittances", desc: "Transforming African payments", emoji: "🌍", icon: Globe, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/xrp-southeast-asia", title: "Southeast Asia", desc: "ASEAN adoption & corridors", emoji: "🌏", icon: MapPin, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/xrp-european-regulation", title: "European Regulation", desc: "MiCA & EU framework", emoji: "🇪🇺", icon: Scale, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/xrp-institutional-custody", title: "Institutional Custody", desc: "Enterprise-grade storage", emoji: "🏦", icon: Building2, gradient: "from-[#8B5CF6] to-[#EC4899]" },
];

const technology: Card[] = [
  { href: "/learn/xrpl-consensus-mechanism", title: "Consensus Mechanism", desc: "How XRP achieves agreement", emoji: "🔗", icon: Globe, gradient: "from-[#0085FF] to-[#06B6D4]" },
  { href: "/learn/xrpl-sidechains", title: "XRPL Sidechains", desc: "EVM sidechain & scaling", emoji: "🔀", icon: Layers, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/xrpl-payment-channels", title: "Payment Channels", desc: "Off-ledger micropayments", emoji: "⚡", icon: Zap, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/learn/xrpl-trust-lines-explained", title: "Trust Lines Explained", desc: "How token holding works", emoji: "🤝", icon: Handshake, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/xrpl-decentralization", title: "Decentralization", desc: "Centralization debate answered", emoji: "🌐", icon: Globe, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/learn/xrp-interledger-protocol", title: "Interledger Protocol", desc: "Connecting all payment networks", emoji: "🔗", icon: Layers, gradient: "from-[#8B5CF6] to-[#EC4899]" },
];

const marketAnalysis: Card[] = [
  { href: "/learn/xrp-2026-outlook", title: "XRP 2026 Outlook", desc: "Price, adoption & catalysts", emoji: "🔮", icon: Search, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/learn/xrp-bull-run-indicators", title: "Bull Run Indicators", desc: "Spot the next rally", emoji: "🐂", icon: TrendingUp, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/xrp-altseason-guide", title: "Altseason Guide", desc: "When altcoins outperform Bitcoin", emoji: "🌊", icon: BarChart3, gradient: "from-[#0085FF] to-[#6366F1]" },
  { href: "/learn/crypto-regulation-xrp-impact", title: "Regulation Impact", desc: "How laws shape XRP's future", emoji: "⚖️", icon: Scale, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/xrp-spot-etf-vs-futures-etf", title: "Spot ETF vs Futures ETF", desc: "Understanding the difference", emoji: "📋", icon: ScrollText, gradient: "from-[#F59E0B] to-[#EF4444]" },
];

const beginnerGuides: Card[] = [
  { href: "/learn/xrp-for-beginners", title: "XRP for Beginners", desc: "Complete starter guide", emoji: "🎓", icon: BookMarked, gradient: "from-[#0085FF] to-[#06B6D4]", featured: true },
  { href: "/learn/xrp-common-mistakes", title: "Common Mistakes", desc: "Avoid costly errors", emoji: "⚠️", icon: Shield, gradient: "from-[#EF4444] to-[#F59E0B]" },
  { href: "/learn/xrp-vs-stocks", title: "XRP vs Stocks", desc: "Comparing asset classes", emoji: "📊", icon: BarChart3, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/learn/xrp-portfolio-allocation", title: "Portfolio Allocation", desc: "How much XRP should you own?", emoji: "🥧", icon: Target, gradient: "from-[#10B981] to-[#06B6D4]" },
  { href: "/learn/crypto-wallets-for-xrp", title: "Wallets for XRP", desc: "Complete wallet comparison", emoji: "👛", icon: Wallet, gradient: "from-[#8B5CF6] to-[#EC4899]" },
];

const bestPicks: Card[] = [
  { href: "/best/xrp-wallets", title: "Best XRP Wallets", desc: "Top wallet picks for 2026", emoji: "👛", icon: Wallet, gradient: "from-[#0085FF] to-[#06B6D4]" },
  { href: "/best/xrp-exchanges", title: "Best XRP Exchanges", desc: "Where to buy XRP safely", emoji: "🏦", icon: Building2, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/best/hardware-wallets-for-xrp", title: "Best Hardware Wallets", desc: "Cold storage for maximum security", emoji: "🔐", icon: Lock, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/best/xrp-staking-platforms", title: "Best Staking Platforms", desc: "Earn yield on your XRP", emoji: "🌱", icon: TrendingUp, gradient: "from-[#10B981] to-[#06B6D4]" },
];

const answers: Card[] = [
  { href: "/answers/is-xrp-a-good-investment", title: "Is XRP a Good Investment?", desc: "Analysis and considerations", emoji: "🤔", icon: Scale, gradient: "from-[#0085FF] to-[#06B6D4]" },
  { href: "/answers/will-xrp-reach-10-dollars", title: "Will XRP Reach $10?", desc: "Price potential breakdown", emoji: "🎯", icon: TrendingUp, gradient: "from-[#F59E0B] to-[#EF4444]" },
  { href: "/answers/xrp-price-prediction-2026", title: "XRP Price Prediction 2026", desc: "Expert forecasts for this year", emoji: "🔮", icon: Search, gradient: "from-[#8B5CF6] to-[#EC4899]" },
  { href: "/answers/is-xrp-a-security", title: "Is XRP a Security?", desc: "The SEC case explained", emoji: "⚖️", icon: Scale, gradient: "from-[#6366F1] to-[#8B5CF6]" },
  { href: "/answers/what-banks-use-xrp", title: "What Banks Use XRP?", desc: "Institutional adoption tracker", emoji: "🏛️", icon: Building2, gradient: "from-[#06B6D4] to-[#0085FF]" },
  { href: "/answers/how-fast-is-xrp", title: "How Fast is XRP?", desc: "Speed comparison with other cryptos", emoji: "⚡", icon: Zap, gradient: "from-[#F59E0B] to-[#EF4444]" },
];

const tools: Card[] = [
  { href: "/tools/xrp-profit-calculator", title: "Profit Calculator", desc: "Calculate potential XRP gains", emoji: "🧮", icon: Calculator, gradient: "from-[#0085FF] to-[#06B6D4]" },
  { href: "/tools/xrp-fee-calculator", title: "Fee Calculator", desc: "Estimate XRP transaction fees", emoji: "💸", icon: Calculator, gradient: "from-[#6366F1] to-[#8B5CF6]" },
];

function CardGrid({ cards, sectionId }: { cards: Card[]; sectionId: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const isFeatured = card.featured;
        return (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.4 }}
            className={isFeatured ? "sm:col-span-1" : ""}
          >
            <Link
              href={card.href}
              className={`group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#0085FF]/30 hover:shadow-[0_0_30px_rgba(0,133,255,0.15)] hover:scale-[1.02] hover:bg-white/[0.04] ${isFeatured ? "p-7" : "p-5"} h-full`}
            >
              <div className="flex items-start justify-between">
                <div className={`flex items-center gap-3`}>
                  <span className={`${isFeatured ? "text-2xl" : "text-xl"}`}>{card.emoji}</span>
                  <div className={`rounded-lg bg-gradient-to-br ${card.gradient} p-2 w-fit`}>
                    <Icon className={`${isFeatured ? "h-5 w-5" : "h-4 w-4"} text-white`} />
                  </div>
                </div>
              </div>
              <h3 className={`${isFeatured ? "mt-4 text-lg" : "mt-3 text-base"} font-bold text-white`}>{card.title}</h3>
              <p className="mt-1 text-sm text-[#888] line-clamp-1 flex-1">{card.desc}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/40 group-hover:text-[#0085FF] group-hover:gap-2 transition-all duration-300">
                Read more <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, colorClass = "text-[#0085FF]", bgClass = "bg-[#0085FF]/10", viewAllHref }: { icon: React.ComponentType<{ className?: string }>; title: string; colorClass?: string; bgClass?: string; viewAllHref?: string }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={`rounded-lg p-2 ${bgClass}`}>
          <Icon className={`h-5 w-5 ${colorClass}`} />
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4 min-w-[60px]" />
      </div>
      {viewAllHref && (
        <Link href={viewAllHref} className="text-sm font-medium text-[#0085FF] hover:text-[#0085FF]/80 transition-colors flex items-center gap-1">
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}

export default function LearnPage() {
  return (
    <>
      <SEOSchema schema={faqSchema} />
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Dot grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Hero gradient glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,133,255,0.15)_0%,_transparent_70%)]" />
          <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(99,102,241,0.1)_0%,_transparent_70%)]" />
        </div>

        {/* Hero */}
        <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:pt-12 md:pt-20 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#0085FF]/20 bg-[#0085FF]/[0.06] px-4 py-1.5">
              <GraduationCap className="h-4 w-4 text-[#0085FF]" />
              <span className="text-xs font-medium text-[#0085FF]">Knowledge Base</span>
            </div>
            <h1 className="text-[40px] font-bold tracking-[-0.04em] text-white md:text-[56px] leading-tight">
              Learn Everything About{" "}
              <span className="bg-gradient-to-r from-[#0085FF] via-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">XRP</span>
            </h1>
            <p className="mt-4 text-[#888] max-w-2xl text-lg">
              Guides, deep dives, tools, and answers — your complete XRP resource library.
            </p>
          </motion.div>
        </div>

        {/* Basics */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={Rocket} title="Start Here" />
          <CardGrid cards={basics} sectionId="basics" />
        </div>

        {/* Beginner Guides */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={BookMarked} title="Beginner Guides" colorClass="text-[#10B981]" bgClass="bg-[#10B981]/10" />
          <CardGrid cards={beginnerGuides} sectionId="beginner" />
        </div>

        {/* How-To Guides */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={Lightbulb} title="How-To Guides" colorClass="text-[#F59E0B]" bgClass="bg-[#F59E0B]/10" />
          <CardGrid cards={howTo} sectionId="how-to" />
        </div>

        {/* Trading & Investment */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={LineChart} title="Trading & Investment" colorClass="text-[#EF4444]" bgClass="bg-[#EF4444]/10" />
          <CardGrid cards={trading} sectionId="trading" />
        </div>

        {/* Market Analysis */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={TrendingUp} title="Market Analysis & Trends" colorClass="text-[#8B5CF6]" bgClass="bg-[#8B5CF6]/10" />
          <CardGrid cards={marketAnalysis} sectionId="market" />
        </div>

        {/* Deep Dives */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={Search} title="Deep Dives" colorClass="text-[#6366F1]" bgClass="bg-[#6366F1]/10" />
          <CardGrid cards={deepDives} sectionId="deep-dives" />
        </div>

        {/* Technology */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={Globe} title="Technology Deep Dives" colorClass="text-[#06B6D4]" bgClass="bg-[#06B6D4]/10" />
          <CardGrid cards={technology} sectionId="technology" />
        </div>

        {/* Global Adoption */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={MapPin} title="Global Adoption" colorClass="text-[#F59E0B]" bgClass="bg-[#F59E0B]/10" />
          <CardGrid cards={globalAdoption} sectionId="global" />
        </div>

        {/* Ripple Software */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={Layers} title="Ripple Software" colorClass="text-[#EC4899]" bgClass="bg-[#EC4899]/10" />
          <CardGrid cards={rippleSoftware} sectionId="ripple-software" />
        </div>

        {/* Ecosystem */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={Users} title="Community & Ecosystem" colorClass="text-[#06B6D4]" bgClass="bg-[#06B6D4]/10" />
          <CardGrid cards={ecosystem} sectionId="ecosystem" />
        </div>

        {/* Best Picks */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={Award} title="Best Picks" colorClass="text-[#EC4899]" bgClass="bg-[#EC4899]/10" viewAllHref="/best" />
          <CardGrid cards={bestPicks} sectionId="best" />
        </div>

        {/* Answers */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16">
          <SectionHeader icon={MessageCircle} title="Quick Answers" colorClass="text-[#F59E0B]" bgClass="bg-[#F59E0B]/10" viewAllHref="/answers" />
          <CardGrid cards={answers} sectionId="answers" />
        </div>

        {/* Tools */}
        <div className="relative mx-auto max-w-7xl px-4 pb-24">
          <SectionHeader icon={Calculator} title="Tools" colorClass="text-[#10B981]" bgClass="bg-[#10B981]/10" viewAllHref="/tools" />
          <CardGrid cards={tools} sectionId="tools" />
        </div>
      </div>
    </>
  );
}

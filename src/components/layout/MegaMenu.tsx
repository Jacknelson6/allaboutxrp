"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Menu,
  ShieldCheck,
  WalletCards,
  X,
} from "lucide-react";
import PriceWidget from "../shared/PriceWidget";

const learnGroups = [
  {
    title: "Start here",
    icon: BookOpen,
    items: [
      { label: "What is XRP?", href: "/learn/what-is-xrp", desc: "The asset and its purpose" },
      { label: "How XRP works", href: "/learn/how-does-xrp-work", desc: "Transactions and consensus" },
      { label: "XRP vs Ripple", href: "/learn/what-is-ripple", desc: "Asset, ledger, and company" },
    ],
  },
  {
    title: "Use XRP",
    icon: WalletCards,
    items: [
      { label: "How to buy XRP", href: "/learn/how-to-buy-xrp", desc: "A risk-aware process" },
      { label: "XRP wallets", href: "/learn/xrp-wallets", desc: "Custody and security" },
      { label: "Store XRP safely", href: "/learn/how-to-store-xrp-safely", desc: "Protect keys and backups" },
    ],
  },
  {
    title: "Research",
    icon: ShieldCheck,
    items: [
      { label: "XRP Ledger", href: "/learn/xrp-ledger-explained", desc: "Network architecture" },
      { label: "Supply and escrow", href: "/learn/xrp-supply-explained", desc: "Distribution and mechanics" },
      { label: "Trusted sources", href: "/learn/trusted-sources", desc: "Where we verify claims" },
    ],
  },
];

const primaryLinks = [
  { href: "/answers", label: "Answers" },
  { href: "/news", label: "News" },
  { href: "/live-chart", label: "Live data" },
  { href: "/tools", label: "Tools" },
];

export default function MegaMenu() {
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const pathname = usePathname();
  const learnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setLearnOpen(false);
      setMobileOpen(false);
      setMobileLearnOpen(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (learnRef.current && !learnRef.current.contains(target)) setLearnOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setLearnOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const navLink = (href: string) =>
    `flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold transition-colors ${
      isActive(href) ? "bg-black/[0.055] text-text-primary" : "text-text-secondary hover:bg-black/[0.035] hover:text-text-primary"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-surface-border bg-[#fbfaf7]/95 backdrop-blur-md" aria-label="Main navigation">
        <div className="site-container flex min-h-[4.25rem] items-center justify-between gap-4">
          <Link href="/" className="flex min-h-11 shrink-0 items-center" aria-label="AllAboutXRP home">
            <Image
              src="/aaxrp-logo.png"
              alt="All About XRP"
              width={1299}
              height={138}
              priority
              unoptimized
              className="site-logo h-auto w-[166px] sm:w-[184px]"
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            <div ref={learnRef} className="relative">
              <button
                type="button"
                onClick={() => setLearnOpen((value) => !value)}
                className={`flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold transition-colors ${
                  learnOpen || pathname.startsWith("/learn")
                    ? "bg-black/[0.055] text-text-primary"
                    : "text-text-secondary hover:bg-black/[0.035] hover:text-text-primary"
                }`}
                aria-expanded={learnOpen}
                aria-controls="desktop-learn-menu"
              >
                Learn
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${learnOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              {learnOpen ? (
                <div
                  id="desktop-learn-menu"
                  className="absolute left-1/2 top-full mt-2 w-[720px] -translate-x-1/2 rounded-xl border border-surface-border bg-surface-card p-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                >
                  <div className="grid grid-cols-3 gap-5">
                    {learnGroups.map((group) => (
                      <section key={group.title} aria-labelledby={`nav-${group.title.replaceAll(" ", "-").toLowerCase()}`}>
                        <div className="mb-3 flex items-center gap-2 text-text-primary">
                          <group.icon className="h-4 w-4 text-xrp-accent" strokeWidth={1.8} aria-hidden="true" />
                          <h2 id={`nav-${group.title.replaceAll(" ", "-").toLowerCase()}`} className="font-sans text-xs font-semibold uppercase tracking-[0.08em]">
                            {group.title}
                          </h2>
                        </div>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <Link key={item.href} href={item.href} className="block min-h-14 rounded-lg px-3 py-2 transition-colors hover:bg-black/[0.04]">
                              <span className="block text-sm font-semibold text-text-primary">{item.label}</span>
                              <span className="mt-0.5 block text-xs text-text-secondary">{item.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-surface-border pt-4">
                    <p className="text-xs text-text-secondary">Source-led education, from fundamentals to XRPL mechanics.</p>
                    <Link href="/learn" className="text-link text-sm">
                      Learning center <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>

            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href} className={navLink(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <PriceWidget />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="hidden min-[350px]:block"><PriceWidget compact /></div>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-surface-border text-text-primary transition-colors hover:bg-black/[0.04]"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-[105px] z-50 overflow-y-auto bg-surface-primary lg:hidden">
            <div className="site-container py-4">
              <Link href="/" className={navLink("/")}>Home</Link>
              <div className="border-y border-surface-border">
                <button
                  type="button"
                  onClick={() => setMobileLearnOpen((value) => !value)}
                  className="flex min-h-14 w-full items-center justify-between px-3 text-sm font-semibold text-text-primary"
                  aria-expanded={mobileLearnOpen}
                >
                  Learn
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileLearnOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {mobileLearnOpen ? (
                  <div className="grid gap-1 pb-3 sm:grid-cols-2">
                    {learnGroups.flatMap((group) => group.items).map((item) => (
                      <Link key={item.href} href={item.href} className="flex min-h-12 items-center rounded-lg px-3 text-sm text-text-secondary hover:bg-black/[0.04] hover:text-text-primary">
                        {item.label}
                      </Link>
                    ))}
                    <Link href="/learn" className="flex min-h-12 items-center rounded-lg px-3 text-sm font-semibold text-xrp-accent-bright">
                      View all guides
                    </Link>
                  </div>
                ) : null}
              </div>
              {primaryLinks.map((item) => (
                <Link key={item.href} href={item.href} className={`${navLink(item.href)} border-b border-surface-border`}>
                  {item.label}
                </Link>
              ))}
              <Link href="/editorial" className={`${navLink("/editorial")} border-b border-surface-border`}>
                Editorial standards
              </Link>
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-surface-border bg-surface-card p-4 text-sm text-text-secondary">
                <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-xrp-accent" aria-hidden="true" />
                AllAboutXRP is independent and is not affiliated with Ripple Labs.
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
}

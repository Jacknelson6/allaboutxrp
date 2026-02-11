"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, BookOpen, Lightbulb, HelpCircle, Coins, Building2, History, Users, Handshake, Rocket, FileQuestion, ScrollText, Lock, Globe, UserCircle, Eye, ArrowRight } from "lucide-react";
import PriceWidget from "../shared/PriceWidget";

const learnCategories = [
  {
    title: "Basics",
    icon: BookOpen,
    items: [
      { label: "FAQ", href: "/learn/faq", desc: "Answers to common XRP questions", icon: FileQuestion },
      { label: "What is XRP?", href: "/learn/what-is-xrp", desc: "The digital asset powering global payments", icon: Coins },
      { label: "What is Ripple?", href: "/learn/what-is-ripple", desc: "The company behind XRP technology", icon: Building2 },
    ],
  },
  {
    title: "Deep Dives",
    icon: Lightbulb,
    items: [
      { label: "History", href: "/learn/history", desc: "XRP's journey from 2012 to today", icon: History },
      { label: "Leadership", href: "/learn/leadership", desc: "The people steering Ripple & XRPL", icon: Users },
      { label: "Partnerships", href: "/learn/partnerships", desc: "Banks & institutions using XRP", icon: Handshake },
      { label: "Escrow", href: "/learn/escrow", desc: "How Ripple's monthly unlocks work", icon: Lock },
    ],
  },
  {
    title: "Ecosystem",
    icon: Globe,
    items: [
      { label: "Acquisitions", href: "/learn/acquisitions", desc: "Strategic acquisitions powering Ripple", icon: Building2 },
      { label: "Key People", href: "/learn/key-people", desc: "Ripple's leadership team", icon: UserCircle },
      { label: "Trusted Sources", href: "/learn/trusted-sources", desc: "Curated voices from the community", icon: Users },
      { label: "Riddlers", href: "/learn/riddlers", desc: "The legendary XRP riddle community", icon: Eye },
    ],
  },
  {
    title: "Resources",
    icon: HelpCircle,
    items: [
      { label: "Best Wallets", href: "/best/xrp-wallets", desc: "Top XRP wallet picks", icon: Lock },
      { label: "Best Exchanges", href: "/best/xrp-exchanges", desc: "Where to buy XRP", icon: Building2 },
      { label: "Tools", href: "/tools", desc: "Calculators & utilities", icon: ScrollText },
      { label: "Answers", href: "/answers", desc: "Quick answers to top questions", icon: HelpCircle },
    ],
  },
];

// Flat list for mobile
const learnItems = learnCategories.flatMap((cat) => cat.items.map((item) => ({ label: item.label, href: item.href })));

export default function MegaMenu() {
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const pathname = usePathname();
  const learnRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Measure nav height for mobile overlay positioning
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLearnOpen(false);
    setMobileLearnOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setLearnOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLearnOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setLearnOpen(false), 150);
  };

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileLearnOpen(false);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/90 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="text-[17px] font-semibold tracking-tight text-text-primary">
          All<span className="text-xrp-accent">About</span>XRP
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="/"
            className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
              pathname === "/" ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Home
          </Link>

          <Link
            href="/live-chart"
            className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
              isActive("/live-chart") ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Live Chart
          </Link>

          {/* Learn dropdown */}
          <div
            className="relative"
            ref={learnRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                learnOpen || pathname.startsWith("/learn")
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              onClick={() => setLearnOpen(!learnOpen)}
              aria-expanded={learnOpen}
            >
              Learn
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${learnOpen ? "rotate-180" : ""}`} />
            </button>

            {learnOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 w-[800px] rounded-xl border border-white/[0.08] bg-[#0A0A0B] p-5 shadow-2xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-4 gap-6">
                  {learnCategories.map((cat) => (
                    <div key={cat.title}>
                      <div className="flex items-center gap-1.5 mb-3">
                        <cat.icon className="h-3.5 w-3.5 text-xrp-accent" />
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">{cat.title}</span>
                      </div>
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`group block rounded-lg px-2.5 py-2 transition-colors duration-150 ${
                              isActive(item.href)
                                ? "bg-xrp-accent/10"
                                : "hover:bg-white/[0.04]"
                            }`}
                            onClick={() => setLearnOpen(false)}
                          >
                            <div className="flex items-center gap-2">
                              <item.icon className={`h-3.5 w-3.5 ${isActive(item.href) ? "text-xrp-accent" : "text-white/30 group-hover:text-white/50"}`} />
                              <span className={`text-[13px] font-medium ${isActive(item.href) ? "text-xrp-accent" : "text-text-primary"}`}>
                                {item.label}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-center">
                  <Link
                    href="/learn"
                    onClick={() => setLearnOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0085FF] hover:text-[#0085FF]/80 transition-colors"
                  >
                    Explore All Learn Pages
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/how-to-start"
            className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
              isActive("/how-to-start") ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            How to Start
          </Link>

          <Link
            href="/donate"
            className="ml-3 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-text-primary transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.12]"
          >
            Donate
          </Link>
          <div className="ml-3">
            <PriceWidget />
          </div>
        </div>

        {/* Mobile hamburger — 44x44 min touch target */}
        <div className="flex items-center gap-3 lg:hidden">
          <PriceWidget compact />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-colors active:bg-white/[0.08]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
      <div
        className="fixed inset-x-0 bottom-0 z-[60] overflow-y-auto overscroll-contain bg-black lg:hidden"
        style={{ top: navHeight || 56 }}
        aria-hidden={false}
      >
        <div className="flex flex-col px-5 py-4 gap-0.5">
          <Link
            href="/"
            onClick={closeMobile}
            className={`flex items-center min-h-[48px] px-2 text-[15px] font-medium border-b border-white/[0.04] transition-colors active:bg-white/[0.04] ${
              pathname === "/" ? "text-xrp-accent" : "text-text-primary"
            }`}
          >
            Home
          </Link>

          <Link
            href="/live-chart"
            onClick={closeMobile}
            className={`flex items-center min-h-[48px] px-2 text-[15px] font-medium border-b border-white/[0.04] transition-colors active:bg-white/[0.04] ${
              isActive("/live-chart") ? "text-xrp-accent" : "text-text-primary"
            }`}
          >
            Live Chart
          </Link>

          {/* Learn accordion */}
          <div className="border-b border-white/[0.04]">
            <button
              onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
              className="flex w-full items-center justify-between min-h-[48px] px-2 text-left active:bg-white/[0.04] transition-colors"
              aria-expanded={mobileLearnOpen}
            >
              <span className={`text-[15px] font-medium ${mobileLearnOpen || pathname.startsWith("/learn") ? "text-xrp-accent" : "text-text-primary"}`}>
                Learn
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileLearnOpen ? "rotate-180 text-xrp-accent" : "text-text-secondary"}`} />
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                mobileLearnOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-0.5 pb-3 pl-3">
                  {learnItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      className={`flex items-center rounded-lg px-3 min-h-[44px] text-[14px] transition-colors active:bg-white/[0.04] ${
                        isActive(item.href)
                          ? "text-xrp-accent"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/how-to-start"
            onClick={closeMobile}
            className={`flex items-center min-h-[48px] px-2 text-[15px] font-medium border-b border-white/[0.04] transition-colors active:bg-white/[0.04] ${
              isActive("/how-to-start") ? "text-xrp-accent" : "text-text-primary"
            }`}
          >
            How to Start
          </Link>

          <div className="pt-5">
            <Link
              href="/donate"
              onClick={closeMobile}
              className="btn-primary w-full"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
      )}
    </nav>
  );
}

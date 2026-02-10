"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import PriceWidget from "../shared/PriceWidget";

const learnItems = [
  { label: "What is XRP?", href: "/learn/what-is-xrp" },
  { label: "What is Ripple?", href: "/learn/what-is-ripple" },
  { label: "History", href: "/learn/history" },
  { label: "Partnerships", href: "/learn/partnerships" },
  { label: "Leadership", href: "/learn/leadership" },
  { label: "Get Started", href: "/learn/get-started" },
  { label: "Escrow", href: "/escrow" },
  { label: "RLUSD", href: "/learn/rlusd" },
  { label: "Riddlers", href: "/riddlers" },
  { label: "Acquisitions", href: "/acquisitions" },
  { label: "FAQ", href: "/learn/faq" },
];

export default function MegaMenu() {
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const pathname = usePathname();
  const learnRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setLearnOpen(false);
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLearnOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setLearnOpen(false), 150);
  };

  const linkClass = (href: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      pathname === href || pathname.startsWith(href + "/")
        ? "text-text-primary"
        : "text-text-secondary hover:text-text-primary"
    }`;

  return (
    <nav
      className="sticky top-0 z-50 border-b border-surface-border bg-black"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-text-primary">
          All<span className="text-xrp-accent">About</span>XRP
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/live" className={linkClass("/live")}>
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" />
              Globe
            </span>
          </Link>

          <Link href="/richlist" className={linkClass("/richlist")}>
            Rich List
          </Link>

          <Link href="/news/recaps" className={linkClass("/news")}>
            Analysis
          </Link>

          {/* Learn dropdown */}
          <div
            className="relative"
            ref={learnRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                learnOpen || pathname.startsWith("/learn")
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              onClick={() => setLearnOpen(!learnOpen)}
              aria-expanded={learnOpen}
            >
              Learn
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${learnOpen ? "rotate-180" : ""}`} />
            </button>

            {learnOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-surface-border bg-black py-1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {learnItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-text-secondary hover:bg-white/[0.03] hover:text-text-primary transition-colors"
                    onClick={() => setLearnOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/donate"
            className="ml-2 rounded-full bg-xrp-accent px-4 py-1.5 text-sm font-bold text-white hover:bg-xrp-accent-bright transition-colors"
          >
            Donate
          </Link>
          <div className="ml-3">
            <PriceWidget />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <PriceWidget compact />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[53px] z-40 overflow-y-auto bg-black lg:hidden">
          <div className="flex flex-col px-4 py-4 gap-1">
            <Link
              href="/live"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 py-3 text-base font-semibold text-text-primary border-b border-surface-border"
            >
              <Globe className="h-4 w-4" />
              Globe
            </Link>

            <Link
              href="/richlist"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-semibold text-text-primary border-b border-surface-border"
            >
              Rich List
            </Link>

            <Link
              href="/news/recaps"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-semibold text-text-primary border-b border-surface-border"
            >
              Analysis
            </Link>

            {/* Learn accordion */}
            <div className="border-b border-surface-border">
              <button
                onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
                className="flex w-full items-center justify-between py-3 text-left"
                aria-expanded={mobileLearnOpen}
              >
                <span className={`text-base font-semibold ${mobileLearnOpen ? "text-xrp-accent" : "text-text-primary"}`}>
                  Learn
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileLearnOpen ? "rotate-180 text-xrp-accent" : "text-text-secondary"}`} />
              </button>
              {mobileLearnOpen && (
                <div className="flex flex-col gap-0.5 pb-3 pl-2">
                  {learnItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
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

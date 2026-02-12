"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PriceWidget from "../shared/PriceWidget";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/live-chart", label: "Live Chart" },
  { href: "/people", label: "People" },
];

const learnLinks = [
  { href: "/learn", label: "Overview" },
  { href: "/learn/what-is-xrp", label: "What is XRP?" },
  { href: "/learn/what-is-ripple", label: "What is Ripple?" },
  { href: "/learn/rlusd", label: "RLUSD" },
  { href: "/learn/history", label: "History" },
  { href: "/learn/leadership", label: "Leadership" },
  { href: "/learn/partnerships", label: "Partnerships" },
  { href: "/learn/get-started", label: "How to Invest in XRP" },
  { href: "/learn/faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const learnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setLearnOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isLearnActive = pathname.startsWith("/learn");

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06]/50 bg-black  "
          : "border-b border-transparent bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-1.5 transition-opacity hover:opacity-80">
          <span className="text-[13px] font-medium text-white/50 uppercase tracking-[0.2em] leading-none" style={{ fontFamily: 'var(--font-display)' }}>All About</span>
          <img src="/xrp-wordmark.svg" alt="XRP" className="h-[14px] inline-block" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {mainLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-x-1 -bottom-[13px] h-[2px] bg-gradient-to-r from-transparent via-xrp-accent to-transparent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Learn dropdown */}
          <div ref={learnRef} className="relative">
            <button
              onClick={() => setLearnOpen(!learnOpen)}
              className={`relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors ${
                isLearnActive
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Learn
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${learnOpen ? "rotate-180" : ""}`} />
              {isLearnActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-[13px] h-[2px] bg-gradient-to-r from-transparent via-xrp-accent to-transparent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </button>
            <AnimatePresence>
              {learnOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-52 rounded-xl border border-white/[0.06]/50 bg-black/95 backdrop-blur-xl py-2 shadow-xl"
                >
                  {learnLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setLearnOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-xrp-accent bg-xrp-accent/10"
                          : "text-text-secondary hover:text-text-primary hover:bg-[#0A0A0B]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* How to Invest in XRP */}
          <Link
            href="/how-to-start"
            className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
              pathname === "/how-to-start"
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            How to Invest in XRP
            {pathname === "/how-to-start" && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-x-1 -bottom-[13px] h-[2px] bg-gradient-to-r from-transparent via-xrp-accent to-transparent"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
          </Link>

          {/* Donate button */}
          <Link
            href="/donate"
            className="ml-2 rounded-lg bg-[#0085FF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
          >
            Donate
          </Link>

          <div className="ml-3">
            <PriceWidget />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <PriceWidget compact />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-secondary transition-colors hover:bg-[#0A0A0B] hover:text-text-primary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/[0.06]/50 bg-black  md:hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 min-h-[44px] flex items-center text-sm transition-colors ${
                    pathname === link.href
                      ? "bg-xrp-accent/10 text-xrp-accent"
                      : "text-text-secondary hover:bg-[#0A0A0B] hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Learn accordion */}
              <button
                onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
                className={`flex items-center justify-between rounded-lg px-3 py-3 min-h-[44px] text-sm transition-colors ${
                  isLearnActive
                    ? "bg-xrp-accent/10 text-xrp-accent"
                    : "text-text-secondary hover:bg-[#0A0A0B] hover:text-text-primary"
                }`}
              >
                Learn
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileLearnOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileLearnOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {learnLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => { setOpen(false); setMobileLearnOpen(false); }}
                        className={`block rounded-lg px-3 py-2.5 min-h-[44px] flex items-center text-sm transition-colors ${
                          pathname === link.href
                            ? "text-xrp-accent"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/how-to-start"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 min-h-[44px] flex items-center text-sm transition-colors ${
                  pathname === "/how-to-start"
                    ? "bg-xrp-accent/10 text-xrp-accent"
                    : "text-text-secondary hover:bg-[#0A0A0B] hover:text-text-primary"
                }`}
              >
                How to Invest in XRP
              </Link>

              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-xrp-accent/10 px-3 py-2.5 text-sm font-semibold text-xrp-accent text-center border border-xrp-accent/20"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

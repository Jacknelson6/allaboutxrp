"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PriceWidget from "../shared/PriceWidget";
import { useAuth } from "@/lib/supabase/auth-context";
import AuthModal from "@/components/auth/AuthModal";

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
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const pathname = usePathname();
  const learnRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const { user, loading, signOut } = useAuth();

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
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isLearnActive = pathname.startsWith("/learn");

  const truncatedEmail = user?.email
    ? user.email.length > 16 ? user.email.slice(0, 16) + "..." : user.email
    : "";

  return (
    <>
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
            <span className="text-[20px] font-normal text-white/50 uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-display)', lineHeight: '1' }}>All About</span>
            <svg viewBox="0 0 2499.1 698" xmlns="http://www.w3.org/2000/svg" className="inline-block" style={{ height: '1.2em', width: 'auto', verticalAlign: 'middle', marginTop: '-2px' }}><g fill="#ffffff"><path d="m704.1 0h119.3l-248.3 251c-89.9 90.9-235.5 90.9-325.4 0l-248.2-251h119.3l188.6 190.7c56 56.9 147.6 57.6 204.5 1.6.5-.5 1.1-1.1 1.6-1.6zm-584.8 698h-119.3l249.8-252.6c89.9-90.9 235.5-90.9 325.4 0l249.7 252.6h-119.3l-190.1-192.2c-56-56.9-147.6-57.6-204.5-1.6-.5.5-1.1 1.1-1.6 1.6z"/><path d="m2276.7 0h.1c30.5.6 59.1 6.6 85.7 18 27.1 10.7 50.9 25.6 71.2 44.6 20.5 19.1 36.5 41.6 48 67.4 11.6 25.4 17.4 52.3 17.4 80.7 0 29-6.1 56.6-18.4 82.6-11.5 25.3-27.9 47.7-48.9 67.3-20.4 19-44.6 34.2-72.2 45.5h-.1c-27.3 10.8-56.6 16.2-87.8 16.2h-260.4v273.3h-91.6v-695.6zm-5 338c18.4 0 35.8-3.3 52.3-9.9 16.7-6.6 31.2-15.7 43.6-27.3 12.4-11.5 22.3-25.2 29.3-40.6 7.1-15.3 10.6-31.8 10.6-49.5 0-17.1-3.5-33.3-10.6-48.6-7-15.3-17-29.1-29.3-40.6-12.4-11.6-26.9-20.6-43.6-27.3-16.5-6.6-33.9-9.9-52.3-9.9h-260.4v253.7z"/><path d="m1254.2 423.8c45.9 0 89.4 19.4 118.2 52.8l189.2 219.1h117.8l-258.8-303.7c-28.8-33.8-72.5-53.5-118.8-53.5h-179.3v-253.1h260.4c18.4 0 35.8 3.3 52.3 9.9 16.7 6.7 31.2 15.8 43.6 27.3l.2.2c12.3 10.9 22 24 29.1 39.5 7.1 15.3 10.6 31.8 10.6 49.6 0 17.7-3.6 34.2-10.6 49.5-4.3 8.9-9.5 17.3-15.7 25l59.6 66.5c.7-.8 1.5-1.6 2.2-2.4 17.6-19 31.2-40.1 40.7-63.5 10.2-23.6 15.3-48.7 15.3-75.2 0-28.4-5.8-55.4-17.4-80.8-11.5-25.9-27.5-48.4-48-67.5-20.4-19-44.1-34.1-71.1-45.5-26.7-11.4-55.3-17.4-85.9-18h-311.3c-12.6 0-23.6 4.7-32.6 13.2-8.7 8.1-13.2 18.1-13.2 29.5v652.9h91.6v-271.8z"/></g></svg>
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

            {/* Sign Up / Account button */}
            {!loading && (
              user ? (
                <div ref={accountRef} className="relative ml-2">
                  <button
                    onClick={() => setAccountOpen(!accountOpen)}
                    className="flex items-center gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-sm text-white transition-colors hover:bg-white/[0.04]"
                  >
                    <User className="h-4 w-4 text-[#0085FF]" />
                    <span className="hidden lg:inline">{truncatedEmail}</span>
                    <ChevronDown className={`h-3 w-3 transition-transform ${accountOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {accountOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-white/[0.06] bg-black/95 backdrop-blur-xl py-2 shadow-xl"
                      >
                        <Link
                          href="/digest"
                          onClick={() => setAccountOpen(false)}
                          className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-[#0A0A0B] transition-colors"
                        >
                          My Account
                        </Link>
                        <button
                          onClick={() => { signOut(); setAccountOpen(false); }}
                          className="flex w-full items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-red-400 hover:bg-[#0A0A0B] transition-colors"
                        >
                          <LogOut className="h-3.5 w-3.5" />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="ml-2 rounded-lg bg-[#0085FF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0070DD] transition-colors"
                >
                  Sign Up
                </button>
              )
            )}

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

                {/* Mobile Sign Up / Account */}
                {!loading && (
                  user ? (
                    <div className="mt-2 flex flex-col gap-1">
                      <Link
                        href="/digest"
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-[#0A0A0B] flex items-center gap-2"
                      >
                        <User className="h-4 w-4 text-[#0085FF]" />
                        My Account
                      </Link>
                      <button
                        onClick={() => { signOut(); setOpen(false); }}
                        className="rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:text-red-400 flex items-center gap-2"
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => { setShowAuthModal(true); setOpen(false); }}
                      className="mt-2 rounded-lg bg-xrp-accent/10 px-3 py-2.5 text-sm font-semibold text-xrp-accent text-center border border-xrp-accent/20"
                    >
                      Sign Up
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}

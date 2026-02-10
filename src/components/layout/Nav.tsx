"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PriceWidget from "../shared/PriceWidget";

const navLinks = [
  { href: "/", label: "What is XRP?" },
  { href: "/escrow", label: "Escrow" },
  { href: "/acquisitions", label: "Acquisitions" },
  { href: "/riddlers", label: "Riddlers" },
  { href: "/people", label: "People" },
  { href: "/richlist", label: "Rich List" },
  { href: "/get-started", label: "Get Started" },
  { href: "/live", label: "Live Globe" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-surface-border/50 bg-surface-primary/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="group flex items-center gap-1 font-display text-xl font-bold text-text-primary">
          <span className="gradient-text transition-opacity group-hover:opacity-80">All</span>
          <span>About</span>
          <span className="gradient-text transition-opacity group-hover:opacity-80">XRP</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
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
          <div className="ml-3">
            <PriceWidget />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <PriceWidget compact />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary"
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
            className="overflow-hidden border-t border-surface-border/50 bg-surface-primary/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    pathname === link.href
                      ? "bg-xrp-accent/10 text-xrp-accent"
                      : "text-text-secondary hover:bg-surface-card hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PriceWidget from "../shared/PriceWidget";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    label: "Track",
    items: [
      { label: "Live Charts", href: "/live", description: "Real-time XRP price and trading data" },
      { label: "3D Globe", href: "/live", description: "Visualize live XRPL transactions" },
      { label: "Rich List", href: "/richlist", description: "Top XRP holders and distribution" },
    ],
  },
  {
    label: "Analysis",
    items: [
      { label: "Daily Recaps", href: "/news/recaps", description: "AI-generated daily XRP news summaries" },
      { label: "Ripple Corporate News", href: "/news", description: "Official Ripple announcements" },
      { label: "Brad Garlinghouse", href: "https://x.com/bgarlinghouse", description: "CEO updates and commentary", external: true },
      { label: "Events & Sponsorships", href: "/news", description: "Conferences and events" },
      { label: "Partnerships & Acquisitions", href: "/acquisitions", description: "Latest deals and partnerships" },
      { label: "Regulatory / SEC Updates", href: "/news", description: "Legal and regulatory developments" },
    ],
  },
  {
    label: "Learn",
    items: [
      { label: "What is XRP?", href: "/learn/what-is-xrp", description: "The basics of XRP and how it works" },
      { label: "What is Ripple?", href: "/learn/what-is-ripple", description: "The company behind RippleNet" },
      { label: "RLUSD & XRP", href: "/learn/rlusd", description: "How Ripple's stablecoin helps XRP" },
      { label: "History & Timeline", href: "/learn/history", description: "Key milestones from 2011 to now" },
      { label: "Escrow Explained", href: "/escrow", description: "How Ripple's 55B XRP escrow works" },
      { label: "Partnerships", href: "/learn/partnerships", description: "Ripple's global partner network" },
      { label: "Leadership Team", href: "/learn/leadership", description: "Key people behind Ripple & XRPL" },
      { label: "Acquisitions", href: "/acquisitions", description: "Companies Ripple has acquired" },
      { label: "Riddlers & Lore", href: "/riddlers", description: "Community riddles and mysteries" },
      { label: "FAQ", href: "/learn/faq", description: "Frequently asked questions" },
      { label: "Get Started / How to Buy", href: "/learn/get-started", description: "Start your XRP journey" },
    ],
  },
];

export default function MegaMenu() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenSection(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenSection(null), 150);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-surface-border/40 bg-surface-primary/70 shadow-2xl shadow-black/30 backdrop-blur-2xl"
          : "border-b border-transparent bg-surface-primary/40 backdrop-blur-lg"
      }`}
      aria-label="Main navigation"
      ref={menuRef}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-0.5 font-display text-xl font-bold tracking-tight text-text-primary">
          <span className="gradient-text transition-all duration-300 group-hover:opacity-80">All</span>
          <span className="text-text-primary/90">About</span>
          <span className="gradient-text transition-all duration-300 group-hover:opacity-80">XRP</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {menuSections.map((section) => (
            <div
              key={section.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(section.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                  openSection === section.label
                    ? "text-xrp-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setOpenSection(openSection === section.label ? null : section.label)}
                aria-expanded={openSection === section.label}
              >
                {section.label}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${openSection === section.label ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openSection === section.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2"
                    onMouseEnter={() => handleMouseEnter(section.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="min-w-[340px] rounded-2xl border border-surface-border/50 bg-surface-card/90 p-2.5 shadow-2xl shadow-black/50 backdrop-blur-2xl">
                      {/* Subtle glow at top */}
                      <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-xrp-accent/40 to-transparent" />
                      
                      <div className="mb-2 px-3 pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary/50">{section.label}</span>
                      </div>
                      <div className="grid gap-0.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-xrp-accent/[0.06]"
                            onClick={() => setOpenSection(null)}
                          >
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-surface-elevated/80 text-text-secondary transition-all duration-200 group-hover/item:bg-xrp-accent/15 group-hover/item:text-xrp-accent">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <div>
                              <span className="text-[13px] font-medium text-text-primary transition-colors duration-200 group-hover/item:text-xrp-accent">
                                {item.label}
                                {item.external && <span className="ml-1 text-[10px] text-text-secondary/60">↗</span>}
                              </span>
                              {item.description && (
                                <p className="mt-0.5 text-[11px] text-text-secondary/60 leading-relaxed">{item.description}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            href="/donate"
            className="btn-primary ml-3 !px-4 !py-2 text-[13px]"
          >
            <Heart className="h-3.5 w-3.5" />
            <span>Donate</span>
          </Link>
          <div className="ml-3">
            <PriceWidget />
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <PriceWidget compact />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[57px] z-40 overflow-y-auto bg-surface-primary/98 backdrop-blur-2xl lg:hidden"
          >
            {/* Atmospheric gradient */}
            <div className="pointer-events-none absolute inset-0 bg-mesh-1 opacity-50" />
            
            <div className="relative flex flex-col px-5 py-5 gap-1">
              {menuSections.map((section, sIdx) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sIdx * 0.08 }}
                  className="border-b border-surface-border/20"
                >
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === section.label ? null : section.label)}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={mobileAccordion === section.label}
                  >
                    <span className={`font-display text-lg font-semibold tracking-tight ${mobileAccordion === section.label ? "text-xrp-accent" : "text-text-primary"}`}>
                      {section.label}
                    </span>
                    <motion.div animate={{ rotate: mobileAccordion === section.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className={`h-5 w-5 ${mobileAccordion === section.label ? "text-xrp-accent" : "text-text-secondary"}`} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileAccordion === section.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5 pb-4 pl-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={item.external ? "noopener noreferrer" : undefined}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-5"
              >
                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-base"
                >
                  <Heart className="h-4 w-4" />
                  <span>Donate</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

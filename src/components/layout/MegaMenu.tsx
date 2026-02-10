"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
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
    label: "Learn",
    items: [
      { label: "What is XRP?", href: "/#what-is-xrp", description: "The basics of XRP and how it works" },
      { label: "What is Ripple?", href: "/#what-is-ripple", description: "The company behind RippleNet" },
      { label: "History & Timeline", href: "/#timeline", description: "Key milestones from 2011 to now" },
      { label: "Escrow Explained", href: "/escrow", description: "How Ripple's 55B XRP escrow works" },
      { label: "Partnerships", href: "/#vision", description: "Ripple's global partner network" },
      { label: "Leadership Team", href: "/people", description: "Key people behind Ripple & XRPL" },
      { label: "Acquisitions", href: "/acquisitions", description: "Companies Ripple has acquired" },
      { label: "Riddlers & Lore", href: "/riddlers", description: "Community riddles and mysteries" },
      { label: "FAQ", href: "/learn/faq", description: "Frequently asked questions" },
      { label: "Get Started / How to Buy", href: "/get-started", description: "Start your XRP journey" },
    ],
  },
  {
    label: "Track",
    items: [
      { label: "Live Charts", href: "/live", description: "Real-time XRP price and trading data" },
      { label: "3D Globe", href: "/live", description: "Visualize live XRPL transactions" },
      { label: "Rich List", href: "/richlist", description: "Top XRP holders and distribution" },
    ],
  },
  {
    label: "News",
    items: [
      { label: "Ripple Corporate News", href: "/news", description: "Official Ripple announcements" },
      { label: "Brad Garlinghouse", href: "https://x.com/bgarlinghouse", description: "CEO updates and commentary", external: true },
      { label: "Events & Sponsorships", href: "/news", description: "Conferences and events" },
      { label: "Partnerships & Acquisitions", href: "/acquisitions", description: "Latest deals and partnerships" },
      { label: "Regulatory / SEC Updates", href: "/news", description: "Legal and regulatory developments" },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "X/Twitter Feed", href: "/", description: "Curated community feed" },
      { label: "Follow Checklist", href: "/#follow-checklist", description: "Track who you follow" },
      { label: "Add/Suggest Accounts", href: "/#suggest", description: "Suggest accounts to feature" },
    ],
  },
  {
    label: "Support Us",
    items: [
      { label: "Donate XRP (Xaman)", href: "/donate", description: "Send XRP directly" },
      { label: "Donate via PayPal/Stripe", href: "/donate", description: "Support with fiat currency" },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-surface-border/50 bg-surface-primary/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-b border-transparent bg-surface-primary/60 backdrop-blur-md"
      }`}
      aria-label="Main navigation"
      ref={menuRef}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1 font-display text-xl font-bold text-text-primary">
          <span className="gradient-text transition-opacity group-hover:opacity-80">All</span>
          <span>About</span>
          <span className="gradient-text transition-opacity group-hover:opacity-80">XRP</span>
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
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  openSection === section.label
                    ? "text-xrp-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setOpenSection(openSection === section.label ? null : section.label)}
                aria-expanded={openSection === section.label}
              >
                {section.label}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openSection === section.label ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openSection === section.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2"
                    onMouseEnter={() => handleMouseEnter(section.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="min-w-[320px] rounded-xl border border-surface-border/60 bg-surface-card/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                      <div className="mb-1.5 px-3 pt-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary/60">{section.label}</span>
                      </div>
                      <div className="grid gap-0.5">
                        {section.items.map((item) => (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-surface-elevated/80"
                            onClick={() => setOpenSection(null)}
                          >
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-xrp-accent/10 text-xrp-accent transition-colors group-hover:bg-xrp-accent/20">
                              <ChevronRight className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-text-primary group-hover:text-xrp-accent transition-colors">
                                {item.label}
                                {item.external && <span className="ml-1 text-xs text-text-secondary">↗</span>}
                              </span>
                              {item.description && (
                                <p className="mt-0.5 text-xs text-text-secondary/70 leading-relaxed">{item.description}</p>
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[57px] z-40 overflow-y-auto bg-surface-primary/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {menuSections.map((section) => (
                <div key={section.label} className="border-b border-surface-border/30 last:border-0">
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === section.label ? null : section.label)}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={mobileAccordion === section.label}
                  >
                    <span className={`font-display text-lg font-semibold ${mobileAccordion === section.label ? "text-xrp-accent" : "text-text-primary"}`}>
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
                              {item.description && (
                                <span className="ml-2 text-xs text-text-secondary/50">{item.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import PriceWidget from "../shared/PriceWidget";

interface MenuItem {
  label: string;
  href: string;
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
      { label: "Live Charts", href: "/live" },
      { label: "3D Globe", href: "/live" },
      { label: "Rich List", href: "/richlist" },
    ],
  },
  {
    label: "Analysis",
    items: [
      { label: "Daily Recaps", href: "/news/recaps" },
      { label: "Ripple News", href: "/news" },
      { label: "Acquisitions", href: "/acquisitions" },
    ],
  },
  {
    label: "Learn",
    items: [
      { label: "What is XRP?", href: "/learn/what-is-xrp" },
      { label: "What is Ripple?", href: "/learn/what-is-ripple" },
      { label: "RLUSD", href: "/learn/rlusd" },
      { label: "History", href: "/learn/history" },
      { label: "Escrow", href: "/escrow" },
      { label: "Partnerships", href: "/learn/partnerships" },
      { label: "Leadership", href: "/learn/leadership" },
      { label: "Riddlers", href: "/riddlers" },
      { label: "FAQ", href: "/learn/faq" },
      { label: "Get Started", href: "/learn/get-started" },
    ],
  },
];

export default function MegaMenu() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenSection(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
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
      className="sticky top-0 z-50 border-b border-surface-border bg-black"
      aria-label="Main navigation"
      ref={menuRef}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-text-primary">
          All<span className="text-xrp-accent">About</span>XRP
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
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
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setOpenSection(openSection === section.label ? null : section.label)}
                aria-expanded={openSection === section.label}
              >
                {section.label}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openSection === section.label ? "rotate-180" : ""}`} />
              </button>

              {openSection === section.label && (
                <div
                  className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-surface-border bg-black py-1"
                  onMouseEnter={() => handleMouseEnter(section.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {section.items.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="block px-4 py-2 text-sm text-text-secondary hover:bg-white/[0.03] hover:text-text-primary transition-colors"
                      onClick={() => setOpenSection(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/people"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              pathname === "/people" ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            People
          </Link>

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
            {menuSections.map((section) => (
              <div key={section.label} className="border-b border-surface-border">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === section.label ? null : section.label)}
                  className="flex w-full items-center justify-between py-3 text-left"
                  aria-expanded={mobileAccordion === section.label}
                >
                  <span className={`text-base font-semibold ${mobileAccordion === section.label ? "text-xrp-accent" : "text-text-primary"}`}>
                    {section.label}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileAccordion === section.label ? "rotate-180 text-xrp-accent" : "text-text-secondary"}`} />
                </button>
                {mobileAccordion === section.label && (
                  <div className="flex flex-col gap-0.5 pb-3 pl-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.href + item.label}
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
            ))}
            <Link
              href="/people"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-semibold text-text-primary border-b border-surface-border"
            >
              People
            </Link>
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

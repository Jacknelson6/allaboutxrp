"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import PriceWidget from "../shared/PriceWidget";

const navLinks = [
  { href: "/", label: "What is XRP?" },
  { href: "/people", label: "People" },
  { href: "/news", label: "News" },
  { href: "/richlist", label: "Rich List" },
  { href: "/get-started", label: "Get Started" },
  { href: "/donate", label: "Donate" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-surface-border bg-surface-primary/95 backdrop-blur-md" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-text-primary">
          <span className="text-xrp-accent">All</span>About<span className="text-xrp-accent">XRP</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
          <PriceWidget />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <PriceWidget compact />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-card"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-surface-border bg-surface-primary md:hidden">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

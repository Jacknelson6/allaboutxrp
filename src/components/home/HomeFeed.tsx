"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Globe,
  BarChart3,
  List,
  TrendingUp,
  Building2,
  GraduationCap,
  Rocket,
  Heart,
  Menu,
  X,
} from "lucide-react";
import XFeed from "./XFeed";
import RightSidebar from "./RightSidebar";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Globe, label: "Globe", href: "/live" },
  { icon: BarChart3, label: "Charts", href: "/charts" },
  { icon: List, label: "Rich List", href: "/richlist" },
  { icon: TrendingUp, label: "Analysis", href: "/news/recaps" },
  { icon: Building2, label: "Acquisitions", href: "/acquisitions" },
  { icon: GraduationCap, label: "Learn", href: "/learn" },
  { icon: Rocket, label: "Get Started", href: "/learn/get-started" },
];

function LeftSidebar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="sticky top-0 flex flex-col h-screen py-3 px-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 px-3 py-3 mb-2">
          <span className="text-xl font-bold text-text-primary tracking-tight">
            All<span className="text-xrp-accent">About</span>XRP
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-3 py-2.5 rounded-full text-[15px] text-text-primary hover:bg-white/[0.06] transition-colors duration-200"
            >
              <item.icon className="h-[22px] w-[22px]" strokeWidth={1.75} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Donate */}
        <Link
          href="/donate"
          className="flex items-center justify-center gap-2 mx-2 mb-3 py-3 rounded-full bg-xrp-accent text-white text-[15px] font-bold hover:bg-xrp-accent-bright transition-colors duration-200"
        >
          <Heart className="h-4 w-4" />
          Donate
        </Link>
      </div>
    </div>
  );
}

function MobileHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-2.5 border-b border-[#2F3336] bg-black/90 backdrop-blur-xl">
      <button onClick={onMenuOpen} className="p-1.5 text-text-primary">
        <Menu className="h-5 w-5" />
      </button>
      <span className="text-[15px] font-bold text-text-primary">
        All<span className="text-xrp-accent">About</span>XRP
      </span>
      <div className="w-8" />
    </div>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 left-0 z-[101] h-full w-[280px] bg-black border-r border-[#2F3336] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2F3336]">
          <span className="text-[15px] font-bold text-text-primary">
            All<span className="text-xrp-accent">About</span>XRP
          </span>
          <button onClick={onClose} className="p-1.5 text-text-primary">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-0.5 p-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-4 px-3 py-3 rounded-full text-[17px] text-text-primary hover:bg-white/[0.06] transition-colors"
            >
              <item.icon className="h-[22px] w-[22px]" strokeWidth={1.75} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#2F3336]">
          <Link
            href="/donate"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3 rounded-full bg-xrp-accent text-white text-[15px] font-bold"
          >
            <Heart className="h-4 w-4" />
            Donate
          </Link>
        </div>
      </div>
    </>
  );
}

export default function HomeFeed() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Mobile header */}
      <MobileHeader onMenuOpen={() => setDrawerOpen(true)} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Mobile price widget */}
      <div className="lg:hidden px-4 py-2 border-b border-[#2F3336]">
        <RightSidebar mobilePrice />
      </div>

      {/* Three-column layout */}
      <div className="mx-auto max-w-[1280px] flex">
        {/* Left sidebar - desktop only */}
        <LeftSidebar className="hidden lg:block w-[250px] shrink-0 border-r border-[#2F3336]" />

        {/* Center feed */}
        <div className="flex-1 min-w-0 max-w-[600px] border-r border-[#2F3336]">
          <XFeed />
        </div>

        {/* Right sidebar - desktop only */}
        <div className="hidden lg:block w-[350px] shrink-0">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

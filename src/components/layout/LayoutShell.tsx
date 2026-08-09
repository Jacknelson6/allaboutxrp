"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import BackToTop from "@/components/shared/BackToTop";
import EditorialReviewPanel from "@/components/shared/EditorialReviewPanel";

interface LayoutShellProps {
  megaMenu: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export default function LayoutShell({ megaMenu, footer, children }: LayoutShellProps) {
  const pathname = usePathname();
  const isLive = pathname === "/live";
  const pageOwnsMain =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/corrections" ||
    pathname.startsWith("/authors/") ||
    pathname === "/answers" ||
    pathname === "/learn/xrp-price-prediction" ||
    pathname === "/editorial" ||
    pathname === "/get-started" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms" ||
    pathname.startsWith("/best") ||
    pathname.startsWith("/learn") ||
    pathname.startsWith("/tools");

  if (isLive) {
    return <main id="main-content" className="min-h-screen">{children}</main>;
  }

  return (
    <>
      {megaMenu}
      {pageOwnsMain ? (
        <div className="min-h-[80vh]">{children}</div>
      ) : (
        <main id="main-content" className="min-h-[80vh]">{children}</main>
      )}
      <EditorialReviewPanel pathname={pathname} />
      {footer}
      <BackToTop />
    </>
  );
}

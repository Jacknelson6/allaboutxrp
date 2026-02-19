"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import BackToTop from "@/components/shared/BackToTop";

interface LayoutShellProps {
  megaMenu: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export default function LayoutShell({ megaMenu, footer, children }: LayoutShellProps) {
  const pathname = usePathname();
  const isLive = pathname === "/live";

  if (isLive) {
    return <main id="main-content" className="min-h-screen">{children}</main>;
  }

  return (
    <>
      {megaMenu}
      <main id="main-content" className="min-h-[80vh]">{children}</main>
      {footer}
      <BackToTop />
    </>
  );
}

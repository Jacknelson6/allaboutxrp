"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutShellProps {
  megaMenu: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export default function LayoutShell({ megaMenu, footer, children }: LayoutShellProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
    );
  }

  return (
    <>
      {megaMenu}
      <main id="main-content" className="min-h-[80vh]">
        {children}
      </main>
      {footer}
    </>
  );
}

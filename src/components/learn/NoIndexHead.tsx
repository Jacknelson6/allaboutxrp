"use client";

import { usePathname } from "next/navigation";
import { NOINDEX_PATHS } from "@/lib/seo/noindex-pages";

/**
 * Injects <meta name="robots" content="noindex, nofollow"> for paths in the noindex set.
 * Must be rendered inside a client component since it reads the current pathname.
 */
export default function NoIndexHead() {
  const pathname = usePathname();
  if (!NOINDEX_PATHS.has(pathname)) return null;
  return <meta name="robots" content="noindex, nofollow" />;
}

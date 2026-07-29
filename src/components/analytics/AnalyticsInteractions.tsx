"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function cleanLinkText(link: HTMLAnchorElement) {
  return (link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100);
}

export default function AnalyticsInteractions() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const destination = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);

      if (link.dataset.sourceLink === "true") {
        trackEvent("source_clicked", {
          source_domain: destination.hostname,
          source_url: destination.href,
          page_path: current.pathname,
        });
        return;
      }

      if (destination.origin === current.origin && destination.pathname.startsWith("/learn/")) {
        trackEvent("guide_clicked", {
          destination_path: destination.pathname,
          link_text: cleanLinkText(link),
          page_path: current.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

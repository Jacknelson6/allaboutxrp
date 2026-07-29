"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const NewsFeed = dynamic(() => import("./NewsFeed"), {
  ssr: false,
  loading: () => <NewsFeedPlaceholder />,
});

const RightSidebar = dynamic(() => import("./RightSidebar"), {
  ssr: false,
  loading: () => <SidebarPlaceholder />,
});

function NewsFeedPlaceholder() {
  return (
    <div className="min-h-[34rem] border-y border-surface-border" aria-hidden="true">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="grid gap-3 border-b border-surface-border py-6 last:border-b-0 sm:grid-cols-[8rem_1fr]">
          <div className="h-3 w-20 rounded bg-white/[0.05]" />
          <div className="space-y-3">
            <div className="h-4 w-4/5 rounded bg-white/[0.07]" />
            <div className="h-3 w-full rounded bg-white/[0.04]" />
            <div className="h-3 w-2/3 rounded bg-white/[0.04]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SidebarPlaceholder() {
  return (
    <div className="min-h-[40rem] space-y-4" aria-hidden="true">
      <div className="h-[25rem] rounded-xl border border-surface-border bg-surface-card" />
      <div className="h-40 rounded-xl border border-surface-border bg-surface-card" />
    </div>
  );
}

export default function DeferredHomeContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const syncViewport = () => setIsDesktop(media.matches);
    const viewportFrame = window.requestAnimationFrame(syncViewport);
    media.addEventListener("change", syncViewport);

    const target = containerRef.current;
    if (!target || !("IntersectionObserver" in window)) {
      const fallbackTimer = window.setTimeout(() => setReady(true), 0);
      return () => {
        window.cancelAnimationFrame(viewportFrame);
        window.clearTimeout(fallbackTimer);
        media.removeEventListener("change", syncViewport);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(target);
    return () => {
      window.cancelAnimationFrame(viewportFrame);
      observer.disconnect();
      media.removeEventListener("change", syncViewport);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]"
      aria-busy={!ready}
    >
      <div className="min-w-0 overflow-hidden">
        {ready ? <NewsFeed /> : <NewsFeedPlaceholder />}
      </div>
      <div className="hidden lg:block">
        <div className="sticky top-24">
          {ready && isDesktop ? <RightSidebar /> : <SidebarPlaceholder />}
        </div>
      </div>
    </div>
  );
}

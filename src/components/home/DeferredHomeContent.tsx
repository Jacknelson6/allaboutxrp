"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const NewsFeed = dynamic(() => import("./NewsFeed"), {
  ssr: false,
  loading: () => <NewsFeedPlaceholder />,
});

function NewsFeedPlaceholder() {
  return (
    <div className="min-h-[34rem] border-y border-surface-border" aria-hidden="true">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="grid gap-3 border-b border-surface-border py-6 last:border-b-0 sm:grid-cols-[8rem_1fr]">
          <div className="h-3 w-20 rounded bg-black/[0.05]" />
          <div className="space-y-3">
            <div className="h-4 w-4/5 rounded bg-black/[0.07]" />
            <div className="h-3 w-full rounded bg-black/[0.04]" />
            <div className="h-3 w-2/3 rounded bg-black/[0.04]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DeferredHomeContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const target = containerRef.current;
    if (!target || !("IntersectionObserver" in window)) {
      const fallbackTimer = window.setTimeout(() => setReady(true), 0);
      return () => {
        window.clearTimeout(fallbackTimer);
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
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-w-0"
      aria-busy={!ready}
    >
      <div className="min-w-0 overflow-hidden">
        {ready ? <NewsFeed /> : <NewsFeedPlaceholder />}
      </div>
    </div>
  );
}

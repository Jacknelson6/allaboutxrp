"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroArtwork() {
  const artworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const artwork = artworkRef.current;
    const canvas = artwork?.closest<HTMLElement>(".premium-hero-canvas");
    if (!artwork || !canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame = 0;
    const update = () => {
      animationFrame = 0;
      const rect = canvas.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.72)));
      artwork.style.setProperty("--hero-scroll", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (animationFrame === 0) animationFrame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={artworkRef} className="hero-artwork" aria-hidden="true">
      <div className="hero-image-plane">
        <Image src="/images/xrp-ascii-bank-hero.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-day" />
        <Image src="/images/xrp-ascii-bank-hero-night.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-night" />
      </div>
      <div className="hero-gradual-blur">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

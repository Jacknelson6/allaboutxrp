"use client";

import { useRef } from "react";
import Image from "next/image";

export default function HeroArtwork() {
  const artworkRef = useRef<HTMLDivElement>(null);

  const updateDistortion = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = artworkRef.current;
    if (!node || event.pointerType === "touch") return;
    const bounds = node.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    node.style.setProperty("--hero-x", x.toFixed(3));
    node.style.setProperty("--hero-y", y.toFixed(3));
  };

  const resetDistortion = () => {
    artworkRef.current?.style.setProperty("--hero-x", "0");
    artworkRef.current?.style.setProperty("--hero-y", "0");
  };

  return (
    <div
      ref={artworkRef}
      className="hero-artwork"
      onPointerMove={updateDistortion}
      onPointerLeave={resetDistortion}
      aria-hidden="true"
    >
      <Image src="/images/xrp-ascii-bank-hero.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-day" />
      <Image src="/images/xrp-ascii-bank-hero-night.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-night" />
      <Image src="/images/xrp-ascii-bank-hero.webp" alt="" fill unoptimized sizes="100vw" className="hero-image hero-image-glitch hero-image-glitch-day" />
      <Image src="/images/xrp-ascii-bank-hero-night.webp" alt="" fill unoptimized sizes="100vw" className="hero-image hero-image-glitch hero-image-glitch-night" />
    </div>
  );
}

import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <div className="hero-image-plane">
        <Image src="/images/xrp-ascii-bank-hero.webp" alt="" fill priority unoptimized sizes="(min-width: 1280px) 1152px, calc(100vw - 32px)" className="hero-image" />
        <span className="hero-night-treatment" />
      </div>
    </div>
  );
}

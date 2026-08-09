import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <div className="hero-image-plane">
        <Image src="/images/xrp-ascii-bank-hero.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-day" />
        <Image src="/images/xrp-ascii-bank-hero-night.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-night" />
      </div>
    </div>
  );
}

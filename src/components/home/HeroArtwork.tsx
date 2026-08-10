export default function HeroArtwork() {
  return (
    <div className="hero-artwork" aria-hidden="true">
      <div className="hero-image-plane">
        <picture className="hero-picture">
          <source media="(max-width: 767px)" srcSet="/images/xrp-ascii-bank-hero-mobile.webp" type="image/webp" />
          <img
            src="/images/xrp-ascii-bank-hero-1152.webp"
            alt=""
            width="1152"
            height="648"
            decoding="async"
            fetchPriority="high"
            className="hero-image"
          />
        </picture>
        <span className="hero-night-treatment" />
      </div>
    </div>
  );
}

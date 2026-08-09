import Image from "next/image";
import { getGuideArtworkByLabel } from "@/lib/editorial-art";

export default function GuideArtwork({ breadcrumbLabel }: { breadcrumbLabel: string }) {
  const artwork = getGuideArtworkByLabel(breadcrumbLabel);
  if (!artwork) return null;

  return (
    <figure className="guide-artwork mt-10 border-y border-surface-border bg-surface-elevated">
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={artwork.width}
        height={artwork.height}
        priority
        unoptimized
        sizes="(min-width: 1024px) 896px, calc(100vw - 2rem)"
        className="h-auto w-full"
      />
    </figure>
  );
}

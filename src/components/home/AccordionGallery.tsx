"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface AccordionGalleryItem {
  image: string;
  label: string;
  link: string;
  eyebrow?: string;
}

interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  expandRatio?: number;
  trigger?: "hover" | "click";
}

export default function AccordionGallery({ items, defaultIndex = 0, expandRatio = 0.52, trigger = "hover" }: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="accordion-gallery" style={{ "--gallery-expanded": `${expandRatio * 100}%` } as React.CSSProperties}>
      {items.map((item, index) => {
        const active = index === activeIndex;
        return (
          <Link
            key={item.link}
            href={item.link}
            className="accordion-gallery-item"
            data-active={active}
            onMouseEnter={trigger === "hover" ? () => setActiveIndex(index) : undefined}
            onFocus={() => setActiveIndex(index)}
            onClick={trigger === "click" ? () => setActiveIndex(index) : undefined}
            aria-label={`${item.label}: open related coverage`}
          >
            <Image src={item.image} alt="" fill unoptimized sizes="(min-width: 768px) 52vw, 100vw" className="object-cover" />
            <span className="accordion-gallery-scrim" />
            <span className="accordion-gallery-label">
              {item.eyebrow ? <span>{item.eyebrow}</span> : null}
              <strong>{item.label}</strong>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

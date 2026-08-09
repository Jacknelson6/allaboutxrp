"use client";

import Link from "next/link";
import { useRef } from "react";

interface SpecularButtonProps {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  tint?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
}

export default function SpecularButton({
  href,
  children,
  size = "lg",
  tint = "#ffffff",
  lineColor = "#ffffff",
  baseColor = "#1c1b18",
  intensity = 1,
  shineSize = 10,
  shineFade = 40,
  thickness = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
}: SpecularButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const moveShine = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (!followMouse || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--shine-x", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--shine-y", `${event.clientY - rect.top}px`);
  };

  return (
    <Link
      ref={ref}
      href={href}
      className="specular-button"
      data-size={size}
      onPointerMove={moveShine}
      style={{
        "--specular-tint": tint,
        "--specular-line": lineColor,
        "--specular-base": baseColor,
        "--specular-intensity": intensity,
        "--specular-size": `${shineSize}px`,
        "--specular-fade": `${shineFade}px`,
        "--specular-thickness": `${thickness}px`,
        "--specular-speed": `${speed}s`,
        "--specular-proximity": `${proximity}px`,
      } as React.CSSProperties}
    >
      <span>{children}</span>
    </Link>
  );
}

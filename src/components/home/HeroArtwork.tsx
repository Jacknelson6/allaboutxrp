"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const BAYER_8X8 = [
  0, 32, 8, 40, 2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44, 4, 36, 14, 46, 6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
  3, 35, 11, 43, 1, 33, 9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47, 7, 39, 13, 45, 5, 37,
  63, 31, 55, 23, 61, 29, 53, 21,
];

type PaletteColor = readonly [number, number, number];

const PICO_8_PALETTE: readonly PaletteColor[] = [
  [0, 0, 0], [29, 43, 83], [126, 37, 83], [0, 135, 81],
  [171, 82, 54], [95, 87, 79], [194, 195, 199], [255, 241, 232],
  [255, 0, 77], [255, 163, 0], [255, 236, 39], [0, 228, 54],
  [41, 173, 255], [131, 118, 156], [255, 119, 168], [255, 204, 170],
];

const LEDGER_GLYPHS = "XRPL01";
const paletteCache = new Map<number, PaletteColor>();

const SOURCES = [
  { src: "/images/xrp-ascii-bank-hero.webp", className: "hero-dither-day" },
  { src: "/images/xrp-ascii-bank-hero-night.webp", className: "hero-dither-night" },
] as const;

function drawOrderedDither(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  width: number,
  height: number,
  phase: number,
  pointer: { x: number; y: number } | null,
) {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context || width === 0 || height === 0) return;

  const renderWidth = Math.min(480, Math.max(280, Math.round(width * 0.38)));
  const renderHeight = Math.max(1, Math.round(renderWidth * (height / width)));
  canvas.width = renderWidth;
  canvas.height = renderHeight;

  const imageRatio = image.naturalWidth / image.naturalHeight;
  const canvasRatio = renderWidth / renderHeight;
  let sourceWidth = image.naturalWidth;
  let sourceHeight = image.naturalHeight;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > canvasRatio) {
    sourceWidth = image.naturalHeight * canvasRatio;
    sourceX = (image.naturalWidth - sourceWidth) / 2;
  } else {
    sourceHeight = image.naturalWidth / canvasRatio;
    sourceY = (image.naturalHeight - sourceHeight) / 2;
  }

  context.filter = "contrast(1.46)";
  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    renderWidth,
    renderHeight,
  );
  context.filter = "none";

  const pixels = context.getImageData(0, 0, renderWidth, renderHeight);

  const nearestPaletteColor = (red: number, green: number, blue: number) => {
    const key = ((red >> 3) << 10) | ((green >> 3) << 5) | (blue >> 3);
    const cached = paletteCache.get(key);
    if (cached) return cached;

    let closest: PaletteColor = PICO_8_PALETTE[0];
    let closestDistance = Number.POSITIVE_INFINITY;
    for (const color of PICO_8_PALETTE) {
      const distance = (red - color[0]) ** 2 + (green - color[1]) ** 2 + (blue - color[2]) ** 2;
      if (distance < closestDistance) {
        closest = color;
        closestDistance = distance;
      }
    }
    paletteCache.set(key, closest);
    return closest;
  };

  for (let y = 0; y < renderHeight; y += 1) {
    for (let x = 0; x < renderWidth; x += 1) {
      const pixel = (y * renderWidth + x) * 4;
      const matrixX = (x + phase) & 7;
      const matrixY = (y + phase * 3) & 7;
      const threshold = (BAYER_8X8[matrixY * 8 + matrixX] / 64 - 0.5) * 56 + 6;
      const normalizedX = x / renderWidth - 0.5;
      const normalizedY = y / renderHeight - 0.5;
      const edge = Math.min(1, Math.hypot(normalizedX, normalizedY) * 1.65);
      const vignette = 1 - edge * edge * 0.38;
      const red = Math.max(0, Math.min(255, pixels.data[pixel] * vignette + threshold));
      const green = Math.max(0, Math.min(255, pixels.data[pixel + 1] * vignette + threshold));
      const blue = Math.max(0, Math.min(255, pixels.data[pixel + 2] * vignette + threshold));
      const color = nearestPaletteColor(red, green, blue);
      pixels.data[pixel] = color[0];
      pixels.data[pixel + 1] = color[1];
      pixels.data[pixel + 2] = color[2];
    }
  }

  context.putImageData(pixels, 0, 0);

  if (pointer) {
    const cursorX = pointer.x * renderWidth;
    const cursorY = pointer.y * renderHeight;
    const cell = Math.max(8, Math.round(renderWidth / 54));
    const radius = Math.min(renderWidth, renderHeight) * 0.23;
    context.font = `700 ${cell}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    for (let y = cell / 2; y < renderHeight; y += cell) {
      for (let x = cell / 2; x < renderWidth; x += cell) {
        const distance = Math.hypot(x - cursorX, y - cursorY);
        if (distance > radius) continue;
        const falloff = 1 - distance / radius;
        const hash = Math.abs(Math.imul(Math.round(x), 73856093) ^ Math.imul(Math.round(y), 19349663));
        const glyph = LEDGER_GLYPHS[(hash + phase) % LEDGER_GLYPHS.length];
        const sampleX = Math.min(renderWidth - 1, Math.max(0, Math.round(x)));
        const sampleY = Math.min(renderHeight - 1, Math.max(0, Math.round(y)));
        const sample = (sampleY * renderWidth + sampleX) * 4;
        const luminance = pixels.data[sample] * 0.299 + pixels.data[sample + 1] * 0.587 + pixels.data[sample + 2] * 0.114;
        context.fillStyle = luminance > 132
          ? `rgba(29, 43, 83, ${0.28 + falloff * 0.68})`
          : `rgba(255, 241, 232, ${0.24 + falloff * 0.7})`;
        context.fillText(glyph, x, y);
      }
    }
  }
}

export default function HeroArtwork() {
  const artworkRef = useRef<HTMLDivElement>(null);
  const canvasesRef = useRef<Array<HTMLCanvasElement | null>>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const phaseRef = useRef(0);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const artwork = artworkRef.current;
    if (!artwork) return;

    let cancelled = false;
    const images = SOURCES.map(({ src }) => {
      const image = new window.Image();
      image.decoding = "async";
      image.src = src;
      return image;
    });
    imagesRef.current = images;

    const render = () => {
      if (cancelled) return;
      const { width, height } = artwork.getBoundingClientRect();
      images.forEach((image, index) => {
        const canvas = canvasesRef.current[index];
        if (canvas && image.complete && image.naturalWidth > 0) {
          drawOrderedDither(canvas, image, width, height, phaseRef.current, pointerRef.current);
        }
      });
    };

    images.forEach((image) => image.addEventListener("load", render));
    const resizeObserver = new ResizeObserver(render);
    resizeObserver.observe(artwork);
    render();

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
      images.forEach((image) => image.removeEventListener("load", render));
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const renderPhase = () => {
    const artwork = artworkRef.current;
    if (!artwork) return;
    const { width, height } = artwork.getBoundingClientRect();
    imagesRef.current.forEach((image, index) => {
      const canvas = canvasesRef.current[index];
      if (canvas && image.complete && image.naturalWidth > 0) {
        drawOrderedDither(canvas, image, width, height, phaseRef.current, pointerRef.current);
      }
    });
  };

  const startDither = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: (event.clientX - bounds.left) / bounds.width,
      y: (event.clientY - bounds.top) / bounds.height,
    };
    renderPhase();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      phaseRef.current = (phaseRef.current + 1) & 3;
      renderPhase();
    }, 130);
  };

  const stopDither = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;
    phaseRef.current = 0;
    pointerRef.current = null;
    renderPhase();
  };

  const moveDither = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)),
      y: Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)),
    };
    if (animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(() => {
        animationFrameRef.current = null;
        renderPhase();
      });
    }
  };

  return (
    <div
      ref={artworkRef}
      className="hero-artwork"
      onPointerEnter={startDither}
      onPointerMove={moveDither}
      onPointerLeave={stopDither}
      aria-hidden="true"
    >
      <Image src="/images/xrp-ascii-bank-hero.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-day" />
      <Image src="/images/xrp-ascii-bank-hero-night.webp" alt="" fill priority unoptimized sizes="100vw" className="hero-image hero-image-night" />
      {SOURCES.map(({ src, className }, index) => (
        <canvas
          key={src}
          ref={(canvas) => { canvasesRef.current[index] = canvas; }}
          className={`hero-dither ${className}`}
        />
      ))}
    </div>
  );
}

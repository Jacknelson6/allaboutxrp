"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
}

export function AnimateIn({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export { motion };

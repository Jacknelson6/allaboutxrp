/**
 * Minimal classname joiner used by every primitive in this directory.
 * Deliberately dependency-free (no clsx/tailwind-merge) — falsy values are
 * dropped, arrays are flattened, everything else is coerced to a string and
 * space-joined in call order.
 */
export type ClassValue = string | number | null | undefined | false | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const walk = (value: ClassValue) => {
    if (!value && value !== 0) return;
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    out.push(String(value));
  };

  inputs.forEach(walk);
  return out.join(" ");
}

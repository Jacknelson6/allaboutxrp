/**
 * Shared class strings for the homepage composition.
 *
 * These are not new design decisions — they are the exact label / dek / note
 * recipes already baked into the src/components/ui primitives (Public Sans,
 * 650 weight, 0.04em tracking for labels; secondary ink for supporting copy),
 * hoisted so the homepage sections stay literally consistent with them.
 */

/** Uppercase editorial label: Public Sans 650, 0.04em tracking. */
export const LABEL = "font-sans text-xs font-[650] uppercase tracking-[0.04em] text-text-secondary";

/** Same label, cobalt — used for section eyebrows rendered outside SectionHeader. */
export const LABEL_ACCENT = "font-sans text-xs font-[650] uppercase tracking-[0.04em] text-cobalt";

/** Standfirst / deck copy under a headline. */
export const DEK = "text-base leading-7 text-text-secondary";

/** Small methodological or provenance note. */
export const NOTE = "text-xs leading-6 text-text-secondary";

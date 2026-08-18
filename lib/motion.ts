import type { CSSProperties } from "react";

/** Stagger delay index for `.reveal-item` / `.reveal-line` (see app/globals.css). */
export function revealStyle(index: number): CSSProperties {
  return { "--reveal-i": index } as CSSProperties;
}

/** Stagger delay index for the hero's load-time `.hero-rise` cascade. */
export function heroStyle(index: number): CSSProperties {
  return { "--hero-i": index } as CSSProperties;
}

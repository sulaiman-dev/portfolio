"use client"

import { useReducedMotion } from "framer-motion"

/** Prefer Framer's reduced-motion signal; treat null as "allow motion". */
export function usePrefersReducedMotion() {
  return Boolean(useReducedMotion())
}

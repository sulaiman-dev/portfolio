import { siteConfig } from "@/data/site"

/** Shared CTA URL for the scoping call. Update `siteConfig.cta.href` once. */
export function getScopingCallUrl() {
  return siteConfig.cta.href
}

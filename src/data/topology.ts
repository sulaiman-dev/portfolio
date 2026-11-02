import { projects } from "@/data/projects"

/** Visual route hops for Trace the System — derived from existing project work. */
export const topologyRoutes = {
  "adza-ai": {
    hops: ["Shopify", "Meta", "AI Studio"],
    terminal: "Dashboard",
  },
  puppydog: {
    hops: ["OpenAI", "HubSpot", "Slack"],
    terminal: "Extension",
  },
  "caspar-ai": {
    hops: ["Cognito", "APIs", "WebSockets"],
    terminal: "Dashboard",
  },
} as const

export type TopologySlug = keyof typeof topologyRoutes

export const topologyProjects = projects.filter((project) =>
  Object.prototype.hasOwnProperty.call(topologyRoutes, project.slug)
)

export function getTopologyRoute(slug: string) {
  return topologyRoutes[slug as TopologySlug] ?? null
}

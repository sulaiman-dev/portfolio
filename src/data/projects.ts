import type { CompactExperience, Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "adza-ai",
    name: "Adza AI",
    tagline: "SaaS video ads platform",
    summary:
      "End-to-end product work across frontend, NestJS APIs, third-party integrations, AI Studio, and admin tooling.",
    contributions: [
      "React frontend",
      "NestJS backend",
      "Shopify integration",
      "Meta integration",
      "AI Studio integration",
      "Template pipeline",
      "Remotion integration",
      "Admin dashboard",
    ],
    featured: true,
    href: "/work/adza-ai",
  },
  {
    slug: "puppydog",
    name: "Puppydog",
    tagline: "Chrome extension + GTM automation",
    summary:
      "Deep integration surface across LLMs, CRMs, GTM tools, analytics, and Remotion video workflows.",
    contributions: [
      "Chrome Extension",
      "OpenAI integration",
      "Claude integration",
      "Gemini integration",
      "ElevenLabs integration",
      "HubSpot integration",
      "Salesforce integration",
      "Slack integration",
      "Apollo integration",
      "Clay integration",
      "PostHog",
      "Pendo",
      "Remotion",
    ],
    href: "/work/puppydog",
  },
  {
    slug: "caspar-ai",
    name: "Caspar AI",
    tagline: "Healthcare dashboard product",
    summary:
      "Full dashboard implementation with live data, charts, and authenticated API surfaces.",
    contributions: [
      "Entire dashboard implementation",
      "API integrations",
      "Recharts",
      "WebSockets",
      "Amazon Cognito",
    ],
    href: "/work/caspar-ai",
  },
]

export const compactExperience: CompactExperience[] = [
  {
    name: "PenAndCards",
    note: "Product engineering across SaaS surfaces",
  },
  {
    name: "Paro",
    note: "Additional SaaS delivery experience",
  },
]

export const openSource = [
  {
    name: "freeCodeCamp",
    detail: "Top Contributor 2024",
    href: "https://www.freecodecamp.org/",
  },
  {
    name: "React Node Web Scraper",
    detail: "Supporting open-source project",
    href: "https://github.com/",
  },
] as const

export function getFeaturedProject() {
  return projects.find((project) => project.featured) ?? projects[0]
}

export function getSelectedProjects() {
  return projects.filter((project) => !project.featured)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

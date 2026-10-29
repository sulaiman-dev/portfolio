import type { ProjectScreenshots } from "@/types/screenshot"

export const screenshots: ProjectScreenshots[] = [
  {
    project: "adza-ai",
    shots: [
      { id: "dashboard", label: "Dashboard", src: null, placeholderTone: "blue" },
      {
        id: "integrations",
        label: "Integrations",
        src: null,
        placeholderTone: "indigo",
      },
      {
        id: "ai-studio",
        label: "AI Studio",
        src: null,
        placeholderTone: "teal",
      },
      {
        id: "admin",
        label: "Admin Panel",
        src: null,
        placeholderTone: "slate",
      },
    ],
  },
  {
    project: "puppydog",
    shots: [
      { id: "dashboard", label: "Dashboard", src: null, placeholderTone: "indigo" },
      {
        id: "extension",
        label: "Chrome Extension",
        src: null,
        placeholderTone: "blue",
      },
      {
        id: "integrations",
        label: "Integrations",
        src: null,
        placeholderTone: "teal",
      },
      {
        id: "video-workflow",
        label: "Video Workflow",
        src: null,
        placeholderTone: "slate",
      },
    ],
  },
  {
    project: "caspar-ai",
    shots: [
      { id: "dashboard", label: "Dashboard", src: null, placeholderTone: "teal" },
      { id: "charts", label: "Charts", src: null, placeholderTone: "blue" },
      {
        id: "detail",
        label: "Detail View",
        src: null,
        placeholderTone: "indigo",
      },
    ],
  },
]

export function getProjectScreenshots(slug: string) {
  return screenshots.find((entry) => entry.project === slug)
}

export function getPrimaryShot(slug: string) {
  return getProjectScreenshots(slug)?.shots[0] ?? null
}

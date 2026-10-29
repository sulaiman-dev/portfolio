export type PlaceholderTone = "blue" | "slate" | "indigo" | "teal"

export interface ScreenshotShot {
  id: string
  label: string
  /** Real asset path under /public. Null = placeholder. */
  src: string | null
  placeholderTone?: PlaceholderTone
}

export interface ProjectScreenshots {
  project: string
  shots: ScreenshotShot[]
}

export interface Project {
  slug: string
  name: string
  tagline: string
  summary: string
  contributions: string[]
  featured?: boolean
  href: string
}

export interface CompactExperience {
  name: string
  note: string
}

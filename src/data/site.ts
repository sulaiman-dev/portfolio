export const siteConfig = {
  name: "Sulaiman",
  title: "Sulaiman | Product Engineer",
  description:
    "I build integrations, dashboards, and automation workflows for SaaS products.",
  url: "https://sulaiman.dev",
  identity: {
    primary: "Product Engineer",
    secondary: "Full Stack Engineer",
  },
  cta: {
    label: "Book a 20-Minute Scoping Call",
    // Replace with your Calendly (or equivalent) URL
    href: "https://calendly.com/",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Open Source", href: "/open-source" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    github: "https://github.com/sulaiman-dev",
    linkedin: "https://www.linkedin.com/in/sulaiman-shinwari/",
    twitter: "https://twitter.com/SulaimanKS5",
  },
} as const

export type NavItem = (typeof siteConfig.nav)[number]

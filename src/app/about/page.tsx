import { Section } from "@/components/layout/Section"
import { siteConfig } from "@/data/site"

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <Section spacing="lg">
      <h1>About</h1>
      <p className="mt-4 max-w-2xl">
        {siteConfig.identity.primary} building integrations, dashboards, and
        automation workflows for SaaS products. I integrate LLMs into products
        but do not work as an ML or AI research engineer.
      </p>
    </Section>
  )
}

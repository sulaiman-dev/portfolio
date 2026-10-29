import { Section } from "@/components/layout/Section"

export const metadata = {
  title: "Services",
}

export default function ServicesPage() {
  return (
    <Section spacing="lg">
      <h1>Services</h1>
      <p className="mt-4 max-w-2xl">
        Integration engineering, dashboard development, and workflow automation
        for SaaS products.
      </p>
    </Section>
  )
}

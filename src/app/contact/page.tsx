import { Section } from "@/components/layout/Section"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <Section spacing="lg" containerClassName="space-y-6">
      <h1>Need help building integrations, dashboards or workflow automation?</h1>
      <p className="max-w-2xl text-lg">
        Available for select freelance projects and remote opportunities.
      </p>
      <a
        href={siteConfig.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ size: "lg" }), "inline-flex")}
      >
        {siteConfig.cta.label}
      </a>
    </Section>
  )
}

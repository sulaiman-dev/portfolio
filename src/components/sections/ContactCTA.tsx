import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export function ContactCTA() {
  return (
    <Section
      id="contact"
      spacing="lg"
      className="border-t border-border bg-atmosphere"
      aria-labelledby="contact-heading"
      containerClassName="max-w-3xl space-y-5 text-center sm:space-y-6"
      containerSize="md"
    >
      <Reveal className="space-y-5 sm:space-y-6">
        <h2 id="contact-heading" className="text-balance">
          Need help building integrations, dashboards or workflow automation?
        </h2>
        <p className="mx-auto max-w-xl text-base sm:text-lg">
          Available for select freelance projects and remote opportunities.
        </p>
        <a
          href={siteConfig.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "interactive-press inline-flex w-full sm:w-auto"
          )}
        >
          {siteConfig.cta.label}
        </a>
      </Reveal>
    </Section>
  )
}

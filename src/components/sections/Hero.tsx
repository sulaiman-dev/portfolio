import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { FadeIn } from "@/components/motion/FadeIn"
import { HeroShowcase } from "@/components/sections/HeroShowcase"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <Section
      spacing="lg"
      className="bg-atmosphere"
      aria-labelledby="hero-heading"
      containerClassName="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16"
    >
      <div className="space-y-6 sm:space-y-8">
        <FadeIn>
          <p className="font-display text-sm font-medium text-accent">
            {siteConfig.identity.primary}
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h1 id="hero-heading" className="max-w-3xl text-balance">
            I build integrations, dashboards, and automation workflows for SaaS
            products.
          </h1>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="max-w-xl text-base sm:text-lg">
            Full Stack Engineer with 5+ years of experience shipping SaaS
            products, integrations, and production workflows.
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "interactive-press w-full sm:w-auto"
              )}
            >
              {siteConfig.cta.label}
            </a>
            <Link
              href="/work/adza-ai"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "interactive-press w-full sm:w-auto"
              )}
            >
              See How I Built Adza AI
            </Link>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} y={16} className="min-w-0">
        <HeroShowcase />
      </FadeIn>
    </Section>
  )
}

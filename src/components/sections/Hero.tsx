import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { FadeIn } from "@/components/motion/FadeIn"
import { TopologyBackdrop } from "@/components/topology/TopologyBackdrop"
import { TraceTheSystem } from "@/components/topology/TraceTheSystem"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-field"
      aria-labelledby="hero-heading"
    >
      <TopologyBackdrop />

      <Container className="relative grid items-start gap-10 py-16 sm:py-20 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-28">
        <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 border border-field bg-surface/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              {siteConfig.name} · map legend
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
              {siteConfig.identity.primary}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 id="hero-heading" className="max-w-xl text-balance">
              I build integrations, dashboards, and automation workflows for SaaS
              products.
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="max-w-md text-base sm:text-lg">
              Full Stack Engineer with 5+ years of experience shipping SaaS
              products, integrations, and production workflows.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
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

        <FadeIn delay={0.18} y={16} className="min-w-0">
          <TraceTheSystem />
        </FadeIn>
      </Container>
    </section>
  )
}

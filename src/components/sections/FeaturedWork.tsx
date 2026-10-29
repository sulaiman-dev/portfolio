import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { ScaleIn } from "@/components/motion/ScaleIn"
import { ContributionList } from "@/components/work/ContributionList"
import { ScreenshotGallery } from "@/components/work/ScreenshotGallery"
import { getFeaturedProject } from "@/data/projects"
import { getProjectScreenshots } from "@/data/screenshots"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FeaturedWork() {
  const project = getFeaturedProject()
  const shots = getProjectScreenshots(project.slug)?.shots ?? []

  return (
    <Section
      id="work"
      spacing="md"
      className="bg-surface/30"
      aria-labelledby="featured-heading"
      containerClassName="space-y-8 sm:space-y-10"
    >
      <Reveal className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Featured work
          </p>
          <h2 id="featured-heading">{project.name}</h2>
          <p className="text-base sm:text-lg">{project.summary}</p>
        </div>
        <Link
          href={project.href}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "interactive-press w-full shrink-0 sm:w-auto"
          )}
        >
          Full case study
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <ContributionList items={project.contributions} />
      </Reveal>

      {shots.length > 0 ? (
        <ScaleIn>
          <ScreenshotGallery projectName={project.name} shots={shots} />
        </ScaleIn>
      ) : null}
    </Section>
  )
}

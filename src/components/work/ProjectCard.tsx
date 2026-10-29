import Link from "next/link"
import { ProjectScreenshot } from "@/components/media/ProjectScreenshot"
import { ContributionList } from "@/components/work/ContributionList"
import { getPrimaryShot } from "@/data/screenshots"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  className?: string
  highlightLimit?: number
}

export function ProjectCard({
  project,
  className,
  highlightLimit = 6,
}: ProjectCardProps) {
  const shot = getPrimaryShot(project.slug)
  const highlights = project.contributions.slice(0, highlightLimit)

  return (
    <article className={cn("group space-y-5", className)}>
      {shot ? (
        <Link
          href={project.href}
          className="media-hover block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${project.name} case study`}
        >
          <ProjectScreenshot
            projectName={project.name}
            shot={shot}
            url={`${project.slug.replace(/-ai$/, "")}.app`}
          />
        </Link>
      ) : null}
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {project.tagline}
          </p>
          <h3>
            <Link
              href={project.href}
              className="transition-colors hover:text-accent"
            >
              {project.name}
            </Link>
          </h3>
        </div>
        <p>{project.summary}</p>
        <ContributionList items={highlights} compact />
        <Link
          href={project.href}
          className="inline-flex text-sm font-medium text-accent transition-colors hover:underline"
        >
          View case study
          <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  )
}

import { ProjectScreenshot } from "@/components/media/ProjectScreenshot"
import { getTopologyRoute } from "@/data/topology"
import { cn } from "@/lib/utils"
import type { ScreenshotShot } from "@/types/screenshot"

interface ScreenshotGalleryProps {
  projectName: string
  projectSlug?: string
  shots: ScreenshotShot[]
  className?: string
}

export function ScreenshotGallery({
  projectName,
  projectSlug,
  shots,
  className,
}: ScreenshotGalleryProps) {
  const route = projectSlug ? getTopologyRoute(projectSlug) : null

  return (
    <ul
      className={cn(
        "grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4",
        className
      )}
    >
      {shots.map((shot, index) => (
        <li key={shot.id} className="media-hover min-w-0">
          <ProjectScreenshot
            projectName={projectName}
            shot={shot}
            caption={`${projectName.toUpperCase()} / ${shot.label.toUpperCase()} / ${String(index + 1).padStart(2, "0")}`}
            hops={route ? [...route.hops] : undefined}
            pin={index % 2 === 0}
          />
        </li>
      ))}
    </ul>
  )
}

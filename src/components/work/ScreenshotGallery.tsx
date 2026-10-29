import { ProjectScreenshot } from "@/components/media/ProjectScreenshot"
import { cn } from "@/lib/utils"
import type { ScreenshotShot } from "@/types/screenshot"

interface ScreenshotGalleryProps {
  projectName: string
  shots: ScreenshotShot[]
  className?: string
}

export function ScreenshotGallery({
  projectName,
  shots,
  className,
}: ScreenshotGalleryProps) {
  return (
    <ul
      className={cn("grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4", className)}
    >
      {shots.map((shot) => (
        <li key={shot.id} className="media-hover min-w-0">
          <ProjectScreenshot
            projectName={projectName}
            shot={shot}
            url={`${projectName.toLowerCase().replace(/\s+/g, "")}.app / ${shot.id}`}
          />
        </li>
      ))}
    </ul>
  )
}

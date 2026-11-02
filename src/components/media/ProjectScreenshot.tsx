import Image from "next/image"
import { SchematicFrame } from "@/components/media/SchematicFrame"
import { PlaceholderFrame } from "@/components/media/PlaceholderFrame"
import { cn } from "@/lib/utils"
import type { ScreenshotShot } from "@/types/screenshot"

interface ProjectScreenshotProps {
  projectName: string
  shot: ScreenshotShot
  /** Schematic legend — formerly browser URL */
  caption?: string
  className?: string
  framed?: boolean
  pin?: boolean
  hops?: string[]
}

function buildCaption(projectName: string, shot: ScreenshotShot, caption?: string) {
  if (caption) return caption
  const project = projectName.replace(/\s+/g, " ").toUpperCase()
  const label = shot.label.toUpperCase()
  const index = shot.id.slice(0, 2).toUpperCase()
  return `${project} / ${label} / ${index}`
}

export function ProjectScreenshot({
  projectName,
  shot,
  caption,
  className,
  framed = true,
  pin = true,
  hops,
}: ProjectScreenshotProps) {
  const media = shot.src ? (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
      <Image
        src={shot.src}
        alt={`${projectName} — ${shot.label}`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 720px"
      />
    </div>
  ) : (
    <PlaceholderFrame
      project={projectName}
      label={shot.label}
      tone={shot.placeholderTone}
      hops={hops}
    />
  )

  if (!framed) {
    return <div className={cn(className)}>{media}</div>
  }

  return (
    <SchematicFrame
      className={className}
      caption={buildCaption(projectName, shot, caption)}
      pin={pin}
    >
      {media}
    </SchematicFrame>
  )
}

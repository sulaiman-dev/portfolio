import Image from "next/image"
import { BrowserChrome } from "@/components/media/BrowserChrome"
import { PlaceholderFrame } from "@/components/media/PlaceholderFrame"
import { cn } from "@/lib/utils"
import type { ScreenshotShot } from "@/types/screenshot"

interface ProjectScreenshotProps {
  projectName: string
  shot: ScreenshotShot
  url?: string
  className?: string
  framed?: boolean
}

export function ProjectScreenshot({
  projectName,
  shot,
  url,
  className,
  framed = true,
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
    />
  )

  if (!framed) {
    return <div className={cn(className)}>{media}</div>
  }

  return (
    <BrowserChrome className={className} url={url}>
      {media}
    </BrowserChrome>
  )
}

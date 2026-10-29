import { cn } from "@/lib/utils"
import type { PlaceholderTone } from "@/types/screenshot"

const toneClasses: Record<PlaceholderTone, string> = {
  blue: "from-accent/25 via-surface to-surface-elevated",
  slate: "from-muted-foreground/20 via-surface to-surface-elevated",
  indigo: "from-blue-500/20 via-surface to-surface-elevated",
  teal: "from-cyan-500/20 via-surface to-surface-elevated",
}

interface PlaceholderFrameProps {
  project: string
  label: string
  tone?: PlaceholderTone
  className?: string
}

export function PlaceholderFrame({
  project,
  label,
  tone = "blue",
  className,
}: PlaceholderFrameProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden bg-gradient-to-br p-6 sm:p-8",
        toneClasses[tone],
        className
      )}
      role="img"
      aria-label={`${project} — ${label} placeholder`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div className="relative space-y-1">
        <p className="font-display text-sm font-medium text-foreground">
          {project}
        </p>
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </p>
      </div>
      <div className="relative space-y-3">
        <div className="h-2 w-1/3 rounded-full bg-foreground/10" />
        <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-16 rounded-md border border-border/60 bg-background/40" />
          <div className="h-16 rounded-md border border-border/60 bg-background/40" />
          <div className="h-16 rounded-md border border-border/60 bg-background/40" />
        </div>
      </div>
    </div>
  )
}

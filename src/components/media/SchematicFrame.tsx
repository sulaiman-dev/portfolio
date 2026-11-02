import { cn } from "@/lib/utils"

interface SchematicFrameProps {
  children: React.ReactNode
  className?: string
  /** Mono legend, e.g. ADZA / DASHBOARD / 01 */
  caption: string
  pin?: boolean
}

function RegistrationMark({ className }: { className?: string }) {
  return (
    <span
      className={cn("pointer-events-none absolute h-3 w-3 text-field", className)}
      aria-hidden
    >
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
    </span>
  )
}

export function SchematicFrame({
  children,
  className,
  caption,
  pin = true,
}: SchematicFrameProps) {
  return (
    <figure className={cn("min-w-0", pin && "schematic-pin", className)}>
      <div className="relative border border-field bg-surface">
        <RegistrationMark className="-left-1.5 -top-1.5" />
        <RegistrationMark className="-right-1.5 -top-1.5" />
        <RegistrationMark className="-bottom-1.5 -left-1.5" />
        <RegistrationMark className="-bottom-1.5 -right-1.5" />

        <div className="flex items-center justify-between gap-3 border-b border-field px-3 py-2">
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {caption}
          </p>
          <span className="flex items-center gap-1.5" aria-hidden>
            <span className="h-1.5 w-1.5 rounded-full bg-signal/80" />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal">
              live
            </span>
          </span>
        </div>

        <div className="relative">{children}</div>
      </div>
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  )
}

import { cn } from "@/lib/utils"

/** Thin topology rule used as a section separator accent. */
export function RouteRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-3", className)}
      aria-hidden
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      <span className="h-px flex-1 bg-gradient-to-r from-signal/50 via-field to-transparent" />
    </div>
  )
}

import { cn } from "@/lib/utils"

interface ContributionListProps {
  items: string[]
  className?: string
  compact?: boolean
}

export function ContributionList({
  items,
  className,
  compact = false,
}: ContributionListProps) {
  return (
    <ul
      className={cn(
        compact ? "flex flex-wrap gap-2" : "grid gap-2 sm:grid-cols-2",
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={
            compact
              ? "border border-field bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              : "flex items-start gap-2 text-sm text-muted-foreground"
          }
        >
          {!compact ? (
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
              aria-hidden
            />
          ) : null}
          {item}
        </li>
      ))}
    </ul>
  )
}

import { cn } from "@/lib/utils"
import type { CompactExperience as CompactExperienceItem } from "@/types/project"

interface CompactExperienceProps {
  items: CompactExperienceItem[]
  className?: string
}

export function CompactExperience({ items, className }: CompactExperienceProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Additional experience
      </p>
      <ul className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="font-display text-sm font-medium text-foreground">
              {item.name}
            </span>
            <span className="text-sm text-muted-foreground">{item.note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

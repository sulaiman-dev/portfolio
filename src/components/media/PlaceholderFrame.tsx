import { cn } from "@/lib/utils"
import type { PlaceholderTone } from "@/types/screenshot"

const toneGlow: Record<PlaceholderTone, string> = {
  blue: "from-signal/20 via-transparent to-transparent",
  slate: "from-muted-foreground/15 via-transparent to-transparent",
  indigo: "from-signal-bright/15 via-transparent to-transparent",
  teal: "from-signal/25 via-transparent to-transparent",
}

interface PlaceholderFrameProps {
  project: string
  label: string
  tone?: PlaceholderTone
  className?: string
  /** Extra hop labels for topology density */
  hops?: string[]
}

export function PlaceholderFrame({
  project,
  label,
  tone = "teal",
  className,
  hops = ["API", "Queue", "UI"],
}: PlaceholderFrameProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden bg-surface p-5 sm:p-7",
        className
      )}
      role="img"
      aria-label={`${project} — ${label} placeholder`}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br",
          toneGlow[tone]
        )}
        aria-hidden
      />

      {/* Field grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--field) / 0.7) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--field) / 0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {/* Topology motif */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 400 250"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 200 C 90 200, 90 80, 160 80 S 230 180, 300 120 S 360 60, 380 60"
          className="route-path-muted"
          stroke="currentColor"
          style={{ color: "hsl(var(--field))" }}
        />
        <path
          d="M40 200 C 90 200, 90 80, 160 80 S 230 180, 300 120"
          className="route-path"
          stroke="currentColor"
          strokeOpacity="0.55"
          style={{ color: "hsl(var(--signal))" }}
        />
        {[
          [40, 200],
          [160, 80],
          [300, 120],
          [380, 60],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r={i === 3 ? 6 : 4}
              fill="hsl(var(--background))"
              stroke={i === 3 ? "hsl(var(--amber))" : "hsl(var(--signal))"}
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>

      <div className="relative space-y-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
          node · payload
        </p>
        <p className="font-display text-sm font-medium text-foreground">
          {project}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </p>
      </div>

      <div className="relative flex flex-wrap gap-2">
        {hops.map((hop) => (
          <span
            key={hop}
            className="border border-field bg-background/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
          >
            {hop}
          </span>
        ))}
      </div>
    </div>
  )
}

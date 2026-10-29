import { cn } from "@/lib/utils"

interface BrowserChromeProps {
  children: React.ReactNode
  className?: string
  url?: string
}

export function BrowserChrome({
  children,
  className,
  url = "app.example.com",
}: BrowserChromeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-surface shadow-[0_0_0_1px_hsl(var(--border)/0.4)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface-elevated px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md border border-border bg-background px-2.5 py-1 text-center font-mono text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

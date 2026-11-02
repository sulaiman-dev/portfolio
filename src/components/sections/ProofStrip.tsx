import { Section } from "@/components/layout/Section"
import { Stagger, StaggerItem } from "@/components/motion/Stagger"
import { proofItems } from "@/data/proof"

export function ProofStrip() {
  return (
    <Section
      spacing="sm"
      className="border-b border-field bg-surface/60"
      aria-label="Highlights"
    >
      <Stagger className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {proofItems.map((item) => (
          <StaggerItem key={item.label} className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-signal"
                aria-hidden
              />
              <p className="font-display text-base font-semibold text-foreground sm:text-lg">
                {item.label}
              </p>
            </div>
            <p className="pl-3.5 text-sm text-muted-foreground">{item.detail}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

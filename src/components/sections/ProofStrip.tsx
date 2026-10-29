import { Section } from "@/components/layout/Section"
import { Stagger, StaggerItem } from "@/components/motion/Stagger"
import { proofItems } from "@/data/proof"

export function ProofStrip() {
  return (
    <Section
      spacing="sm"
      className="border-y border-border bg-surface/50"
      aria-label="Highlights"
    >
      <Stagger className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {proofItems.map((item) => (
          <StaggerItem key={item.label} className="space-y-1">
            <p className="font-display text-base font-semibold text-foreground sm:text-lg">
              {item.label}
            </p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

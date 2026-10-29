import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Stagger, StaggerItem } from "@/components/motion/Stagger"
import { processSteps } from "@/data/process"

export function HowIWork() {
  return (
    <Section
      id="about"
      spacing="md"
      className="border-y border-border bg-surface/30"
      aria-labelledby="process-heading"
      containerClassName="space-y-8 sm:space-y-10"
    >
      <Reveal className="max-w-2xl space-y-3">
        <h2 id="process-heading">How I work</h2>
        <p>
          A practical product loop — clarify the problem, design durable
          systems, ship in slices, then tighten with feedback.
        </p>
      </Reveal>

      <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <StaggerItem key={step.id} className="space-y-3">
            <p className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3>{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

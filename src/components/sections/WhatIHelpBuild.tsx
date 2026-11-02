import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { Stagger, StaggerItem } from "@/components/motion/Stagger"
import { RouteRule } from "@/components/topology/RouteRule"
import { capabilities, llmDisclaimer } from "@/data/services"

export function WhatIHelpBuild() {
  return (
    <Section
      id="services"
      spacing="md"
      aria-labelledby="services-heading"
      containerClassName="space-y-8 sm:space-y-10"
    >
      <Reveal className="max-w-2xl space-y-3">
        <RouteRule className="max-w-xs" />
        <h2 id="services-heading">What I help build</h2>
        <p>
          Product engineering focused on the connective tissue of SaaS —
          integrations, dashboards, and the workflows that keep them running.
        </p>
      </Reveal>

      <Stagger className="grid gap-8 sm:gap-10 md:grid-cols-3">
        {capabilities.map((capability) => (
          <StaggerItem
            key={capability.id}
            className="space-y-4 border border-field bg-surface/40 p-5"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              <h3>{capability.title}</h3>
            </div>
            <ul className="space-y-2">
              {capability.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span
                    className="mt-1.5 h-px w-3 shrink-0 bg-field"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <p className="max-w-3xl border-l border-signal/50 pl-4 text-sm italic text-muted-foreground">
          {llmDisclaimer}
        </p>
      </Reveal>
    </Section>
  )
}

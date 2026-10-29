import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { openSource } from "@/data/projects"

export function OpenSource() {
  return (
    <Section
      id="open-source"
      spacing="md"
      aria-labelledby="oss-heading"
      containerClassName="space-y-8 sm:space-y-10"
    >
      <Reveal className="max-w-2xl space-y-3">
        <h2 id="oss-heading">Open source & community</h2>
        <p>
          Contributing where it compounds — community learning and practical
          tooling.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="divide-y divide-border border-y border-border">
          {openSource.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {item.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.detail}
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

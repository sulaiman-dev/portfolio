import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { CompactExperience } from "@/components/work/CompactExperience"
import { ProjectCard } from "@/components/work/ProjectCard"
import { compactExperience, getSelectedProjects } from "@/data/projects"

export function SelectedWork() {
  const selected = getSelectedProjects()

  return (
    <Section
      spacing="md"
      aria-labelledby="selected-heading"
      containerClassName="space-y-10 sm:space-y-12"
    >
      <Reveal className="max-w-2xl space-y-3">
        <h2 id="selected-heading">Selected work</h2>
        <p>
          Additional SaaS delivery across extensions, integrations, and
          production dashboards.
        </p>
      </Reveal>

      <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
        {selected.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <CompactExperience items={compactExperience} />
      </Reveal>
    </Section>
  )
}

import { Section } from "@/components/layout/Section"

export const metadata = {
  title: "Work",
}

export default function WorkPage() {
  return (
    <Section spacing="lg">
      <h1>Work</h1>
      <p className="mt-4 max-w-2xl">
        Case studies for Adza AI, Puppydog, Caspar AI, and selected experience.
        Content lands in the next implementation phase.
      </p>
    </Section>
  )
}

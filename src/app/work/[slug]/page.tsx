import { notFound } from "next/navigation"
import { Section } from "@/components/layout/Section"

const KNOWN_SLUGS = ["adza-ai", "puppydog", "caspar-ai"] as const

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

  return { title }
}

export default async function WorkSlugPage({ params }: PageProps) {
  const { slug } = await params

  if (!KNOWN_SLUGS.includes(slug as (typeof KNOWN_SLUGS)[number])) {
    notFound()
  }

  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

  return (
    <Section spacing="lg">
      <h1>{title}</h1>
      <p className="mt-4 max-w-2xl">
        Case study placeholder. Full write-up and screenshots come in a later
        phase.
      </p>
    </Section>
  )
}

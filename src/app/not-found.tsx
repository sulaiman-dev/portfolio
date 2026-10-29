import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <Section spacing="lg" containerClassName="space-y-6 text-center">
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className={cn(buttonVariants(), "inline-flex")}>
        Back home
      </Link>
    </Section>
  )
}

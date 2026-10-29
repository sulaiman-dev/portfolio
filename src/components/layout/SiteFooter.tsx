import Link from "next/link"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/Container"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-8 py-10 sm:py-12 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Social" className="flex gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            X
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

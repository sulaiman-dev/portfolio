"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/Container"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    firstLinkRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={siteConfig.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "interactive-press")}
          >
            <span className="lg:hidden">Book a call</span>
            <span className="hidden lg:inline">{siteConfig.cta.label}</span>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-1 py-4" as="nav" aria-label="Mobile">
          {siteConfig.nav.map((item, index) => (
            <Link
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "default" }),
              "mt-2 w-full interactive-press"
            )}
            onClick={() => setOpen(false)}
          >
            {siteConfig.cta.label}
          </a>
        </Container>
      </div>
    </header>
  )
}

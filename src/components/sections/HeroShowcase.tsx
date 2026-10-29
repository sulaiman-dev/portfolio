"use client"

import { useCallback, useId, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ProjectScreenshot } from "@/components/media/ProjectScreenshot"
import { projects } from "@/data/projects"
import { getPrimaryShot } from "@/data/screenshots"
import { cn } from "@/lib/utils"

const showcaseProjects = projects.slice(0, 3)

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const active = showcaseProjects[activeIndex]
  const shot = getPrimaryShot(active.slug)

  const selectIndex = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const onTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let next = index

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault()
      next = (index + 1) % showcaseProjects.length
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault()
      next = (index - 1 + showcaseProjects.length) % showcaseProjects.length
    } else if (event.key === "Home") {
      event.preventDefault()
      next = 0
    } else if (event.key === "End") {
      event.preventDefault()
      next = showcaseProjects.length - 1
    } else {
      return
    }

    selectIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label="Featured projects"
        className="flex gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {showcaseProjects.map((project, index) => {
          const selected = index === activeIndex
          return (
            <button
              key={project.slug}
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              id={`${baseId}-tab-${project.slug}`}
              aria-controls={`${baseId}-panel`}
              onClick={() => selectIndex(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={cn(
                "shrink-0 rounded-md px-3 py-2 text-sm transition-colors",
                selected
                  ? "bg-surface-elevated text-foreground ring-1 ring-border"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {project.name}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.slug}`}
        className="media-hover"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {shot ? (
              <ProjectScreenshot
                projectName={active.name}
                shot={shot}
                url={`${active.slug.replace(/-ai$/, "")}.app`}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="text-foreground">{active.name}</span>
          {" — "}
          {active.tagline}
        </p>
      </div>
    </div>
  )
}

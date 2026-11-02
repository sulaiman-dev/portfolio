"use client"

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { ProjectScreenshot } from "@/components/media/ProjectScreenshot"
import { getPrimaryShot } from "@/data/screenshots"
import {
  getTopologyRoute,
  topologyProjects,
  type TopologySlug,
} from "@/data/topology"
import { cn } from "@/lib/utils"

const VIEW_W = 640
const VIEW_H = 220

function buildPath(hopCount: number) {
  const start = { x: 36, y: VIEW_H / 2 }
  const end = { x: VIEW_W - 36, y: VIEW_H / 2 }
  const total = hopCount + 2 // core + hops + terminal
  const points = Array.from({ length: total }, (_, i) => {
    const t = i / (total - 1)
    const x = start.x + (end.x - start.x) * t
    const y =
      start.y +
      Math.sin(t * Math.PI) * (i % 2 === 0 ? -28 : 28) * (i === 0 || i === total - 1 ? 0 : 1)
    return { x, y }
  })

  const d = points
    .map((point, i) => `${i === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ")

  return { d, points }
}

export function TraceTheSystem() {
  const [activeSlug, setActiveSlug] = useState<TopologySlug>(
    topologyProjects[0].slug as TopologySlug
  )
  const [traceKey, setTraceKey] = useState(0)
  const [pathLength, setPathLength] = useState(400)
  const pathRef = useRef<SVGPathElement>(null)
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const active = topologyProjects.find((p) => p.slug === activeSlug)!
  const route = getTopologyRoute(activeSlug)!
  const shot = getPrimaryShot(active.slug)
  const { d, points } = useMemo(
    () => buildPath(route.hops.length),
    [route.hops.length]
  )

  const labels = ["SaaS", ...route.hops, route.terminal]

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
    }
  }, [d, traceKey])

  const selectSlug = useCallback((slug: TopologySlug) => {
    setActiveSlug(slug)
    setTraceKey((value) => value + 1)
  }, [])

  const onTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let next = index
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault()
      next = (index + 1) % topologyProjects.length
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault()
      next = (index - 1 + topologyProjects.length) % topologyProjects.length
    } else if (event.key === "Home") {
      event.preventDefault()
      next = 0
    } else if (event.key === "End") {
      event.preventDefault()
      next = topologyProjects.length - 1
    } else {
      return
    }
    const project = topologyProjects[next]
    selectSlug(project.slug as TopologySlug)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
          Trace the system
        </p>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
          Select node · route signal
        </p>
      </div>

      <div
        role="tablist"
        aria-label="System nodes"
        className="flex flex-wrap gap-2"
      >
        {topologyProjects.map((project, index) => {
          const selected = project.slug === activeSlug
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
              onClick={() => selectSlug(project.slug as TopologySlug)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={cn(
                "border px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors",
                selected
                  ? "border-amber bg-surface text-foreground node-pulse"
                  : "border-field text-muted-foreground hover:border-signal/50 hover:text-foreground"
              )}
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-70" />
              {project.name}
            </button>
          )
        })}
      </div>

      <div
        className="relative overflow-hidden border border-field bg-surface/80"
        aria-hidden
      >
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="h-[140px] w-full sm:h-[180px]"
          role="presentation"
        >
          <path d={d} className="route-path-muted" stroke="hsl(var(--field))" />
          <path
            key={traceKey}
            ref={pathRef}
            d={d}
            className={cn("route-path", !reduceMotion && "route-draw")}
            stroke="hsl(var(--signal))"
            style={
              {
                "--route-length": pathLength,
                strokeDasharray: reduceMotion ? undefined : pathLength,
                strokeDashoffset: reduceMotion ? 0 : undefined,
              } as React.CSSProperties
            }
          />
          {points.map((point, i) => {
            const isTerminal = i === points.length - 1
            const isCore = i === 0
            return (
              <g key={`${traceKey}-${i}`}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isTerminal || isCore ? 7 : 5}
                  fill="hsl(var(--background))"
                  stroke={
                    isTerminal
                      ? "hsl(var(--amber))"
                      : isCore
                        ? "hsl(var(--signal-bright))"
                        : "hsl(var(--signal))"
                  }
                  strokeWidth="1.5"
                />
                <text
                  x={point.x}
                  y={point.y + (i % 2 === 0 ? -14 : 22)}
                  textAnchor="middle"
                  className="fill-muted-foreground"
                  style={{
                    fontSize: "9px",
                    fontFamily: "var(--font-geist-mono), monospace",
                    letterSpacing: "0.08em",
                  }}
                >
                  {labels[i]}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.slug}`}
        key={traceKey}
        className={cn(!reduceMotion && "payload-arrive")}
      >
        {shot ? (
          <ProjectScreenshot
            projectName={active.name}
            shot={shot}
            caption={`${active.name.toUpperCase()} / ${route.terminal.toUpperCase()} / 01`}
            hops={[...route.hops]}
            pin
          />
        ) : null}
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          <span className="text-foreground">{active.name}</span>
          {" — "}
          {active.tagline}
        </p>
      </div>
    </div>
  )
}

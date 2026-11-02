"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Route offset — slight lateral drift along the topology edge */
  x?: number
  y?: number
  once?: boolean
  amount?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  x = 12,
  y = 8,
  once = true,
  amount = 0.2,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

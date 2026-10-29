import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"

type SectionSpacing = "sm" | "md" | "lg" | "none"

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-10 sm:py-12 md:py-16",
  md: "py-14 sm:py-16 md:py-24",
  lg: "py-16 sm:py-24 md:py-32",
}

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  containerClassName?: string
  spacing?: SectionSpacing
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  contained?: boolean
  as?: "section" | "div" | "header" | "footer"
  "aria-labelledby"?: string
}

export function Section({
  children,
  id,
  className,
  containerClassName,
  spacing = "md",
  containerSize = "lg",
  contained = true,
  as: Tag = "section",
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("scroll-mt-20", spacingClasses[spacing], className)}
    >
      {contained ? (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      ) : (
        children
      )}
    </Tag>
  )
}

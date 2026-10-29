import { cn } from "@/lib/utils"

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full"

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
}

type ContainerProps<T extends React.ElementType = "div"> = {
  children: React.ReactNode
  className?: string
  size?: ContainerSize
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">

export function Container<T extends React.ElementType = "div">({
  children,
  className,
  size = "lg",
  as,
  ...props
}: ContainerProps<T>) {
  const Tag = as || "div"

  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

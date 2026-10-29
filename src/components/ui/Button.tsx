import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,border-color,transform,opacity] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:bg-accent/90",
        secondary:
          "bg-surface text-foreground border border-border hover:bg-surface-elevated hover:border-border",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-surface",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-surface",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 min-h-10 px-5 py-2",
        sm: "h-9 min-h-9 rounded-md px-3 text-xs",
        lg: "h-12 min-h-12 rounded-md px-6 text-base sm:px-8",
        icon: "h-10 w-10 min-h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { buttonVariants }

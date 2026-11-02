import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-signal text-accent-foreground hover:bg-signal-bright shadow-[inset_0_0_0_1px_hsl(var(--signal)/0.3)]",
        secondary:
          "bg-surface text-foreground border border-field hover:border-signal/40 hover:text-foreground",
        outline:
          "border border-field bg-transparent text-foreground hover:border-signal/50 hover:bg-surface",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-surface",
        link: "text-signal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 min-h-10 px-5 py-2",
        sm: "h-9 min-h-9 px-3 text-xs",
        lg: "h-12 min-h-12 px-6 text-base sm:px-8",
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

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  thumbIcon?: React.ReactNode
  iconTrue?: React.ReactNode
  iconFalse?: React.ReactNode
  thumbClassName?: string
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, thumbIcon, iconFalse, iconTrue, thumbClassName, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <div className="absolute left-1 [&>*]:size-4">
      {iconFalse}
    </div>
    <div className="absolute right-1 [&>*]:size-4">
      {iconTrue}
    </div>
    <SwitchPrimitives.Thumb
      className={cn(
        "flex items-center justify-center pointer-events-none  h-7 w-7 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:-translate-x-0 [&>*]:size-4",
        thumbClassName
      )}
    >{thumbIcon}</SwitchPrimitives.Thumb>

  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

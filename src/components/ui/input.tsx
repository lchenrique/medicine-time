import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, addonAfter, addonBefore,  ...props }, ref) => {
    return (
      <div className="flex items-center relative w-full">
        {addonBefore && <div className="absolute left-2" >{addonBefore}</div>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            addonBefore? "pl-7":"", addonAfter? "pr-7":"",  className
          )}
          ref={ref}
          {...props}
        />
        {addonAfter && <div className="absolute right-2" >{addonAfter}</div>}
      </div>

    )
  }
)
Input.displayName = "Input"

export { Input }

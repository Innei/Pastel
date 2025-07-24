import * as React from 'react'

import { cn } from '../../utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ref, className, type, ...props }: InputProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  }
Input.displayName = 'Input'

export { Input }
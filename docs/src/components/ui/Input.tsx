import * as React from 'react'

import { cn } from '../../utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
  ref,
  className,
  type,
  ...props
}: InputProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-8 w-full rounded-[6px] border border-border bg-background px-3 text-[13px] text-text placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:shadow-(--shadow-notion-ring) disabled:cursor-not-allowed disabled:opacity-50 transition-shadow',
        className,
      )}
      {...props}
    />
  )
}
Input.displayName = 'Input'

export { Input }

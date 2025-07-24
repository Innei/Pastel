import * as React from 'react'

import { cn } from '../../utils/cn'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ ref, className, ...props }: TextareaProps & { ref?: React.RefObject<HTMLTextAreaElement | null> }) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  }
Textarea.displayName = 'Textarea'

export { Textarea }
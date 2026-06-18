import * as React from 'react'

import { cn } from '../../utils/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({
  ref,
  className,
  ...props
}: TextareaProps & { ref?: React.RefObject<HTMLTextAreaElement | null> }) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-20 w-full rounded-[6px] border border-border bg-background px-3 py-2 text-[13px] text-text placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:shadow-(--shadow-notion-ring) disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-shadow',
        className,
      )}
      {...props}
    />
  )
}
Textarea.displayName = 'Textarea'

export { Textarea }

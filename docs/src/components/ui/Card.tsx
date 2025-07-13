import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('bg-background border border-border rounded-lg', className)}
      {...props}
    />
  ),
)

Card.displayName = 'Card'

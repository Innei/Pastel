import type { HTMLAttributes} from 'react';

import { cn } from '../../utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = ({ ref, className, ...props }: CardProps & { ref?: React.RefObject<HTMLDivElement | null> }) => (
    <div
      ref={ref}
      className={cn('bg-background border border-border rounded-lg', className)}
      {...props}
    />
  )

Card.displayName = 'Card'

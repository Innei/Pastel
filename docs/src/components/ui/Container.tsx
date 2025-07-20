import type { HTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl', className)}
      {...props}
    />
  )
}
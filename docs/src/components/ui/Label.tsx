import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'

import { cn } from '../../utils/cn'

const Label = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof LabelPrimitive.Root> | null> }) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-sm font-medium text-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

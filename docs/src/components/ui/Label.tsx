import * as React from 'react'

import { cn } from '../../utils/cn'

const Label = ({
  ref,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & {
  ref?: React.RefObject<HTMLLabelElement | null>
}) => (
  <label
    ref={ref}
    className={cn(
      'text-[13px] font-medium text-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
)

export { Label }

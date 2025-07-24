import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '../../utils/cn'

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showValue?: boolean
  valueFormatter?: (value: number) => string
}

const Slider = ({ ref, className, showValue = false, valueFormatter, ...props }: SliderProps & { ref?: React.RefObject<React.ElementRef<typeof SliderPrimitive.Root> | null> }) => (
  <div className="relative flex flex-col space-y-2">
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-background-secondary border border-border">
        <SliderPrimitive.Range className="absolute h-full bg-accent" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-white bg-accent shadow-lg ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 active:scale-95" />
    </SliderPrimitive.Root>
    {showValue && (
      <div className="flex justify-center">
        <span className="text-xs text-text-secondary font-medium">
          {valueFormatter
            ? valueFormatter(props.value?.[0] ?? props.defaultValue?.[0] ?? 0)
            : props.value?.[0] ?? props.defaultValue?.[0] ?? 0}
        </span>
      </div>
    )}
  </div>
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
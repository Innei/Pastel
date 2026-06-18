import { Slider as SliderPrimitive } from '@base-ui/react/slider'
import * as React from 'react'

import { cn } from '../../utils/cn'

interface SliderProps extends Omit<
  React.ComponentProps<typeof SliderPrimitive.Root>,
  'className' | 'render'
> {
  className?: string
  showValue?: boolean
  valueFormatter?: (value: number) => string
}

const Slider = ({
  ref,
  className,
  showValue = false,
  valueFormatter,
  ...props
}: SliderProps & {
  ref?: React.RefObject<HTMLDivElement | null>
}) => {
  const initial = Array.isArray(props.value)
    ? props.value
    : Array.isArray(props.defaultValue)
      ? props.defaultValue
      : [typeof props.value === 'number' ? props.value : 0]
  const [currentValue, setCurrentValue] = React.useState<number[]>(initial)

  React.useEffect(() => {
    if (Array.isArray(props.value)) {
      setCurrentValue(props.value)
    } else if (typeof props.value === 'number') {
      setCurrentValue([props.value])
    }
  }, [props.value])

  const handleValueChange = (
    newValue: number | readonly number[],
    ...rest: unknown[]
  ) => {
    const next = Array.isArray(newValue) ? [...newValue] : [newValue as number]
    setCurrentValue(next)
    ;(
      props.onValueChange as ((value: any, ...rest: any[]) => void) | undefined
    )?.(newValue, ...rest)
  }

  return (
    <div className="relative flex flex-col space-y-2">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          'relative flex w-full touch-none select-none items-center',
          className,
        )}
        {...props}
        onValueChange={handleValueChange}
      >
        <SliderPrimitive.Control className="flex h-5 w-full items-center">
          <SliderPrimitive.Track className="relative h-1.5 w-full overflow-hidden rounded-full border border-border bg-background-secondary">
            <SliderPrimitive.Indicator className="absolute h-full bg-accent" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-white bg-accent shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Control>
      </SliderPrimitive.Root>
      {showValue && (
        <div className="flex justify-center">
          <span className="text-xs text-text-secondary font-medium">
            {valueFormatter ? valueFormatter(currentValue[0]) : currentValue[0]}
          </span>
        </div>
      )}
    </div>
  )
}

export { Slider }

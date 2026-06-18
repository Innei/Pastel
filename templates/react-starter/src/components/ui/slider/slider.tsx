import { Slider as SliderPrimitive } from '@base-ui/react/slider';

import { cn } from '~/lib/cn';

export type SliderProps = Omit<
  React.ComponentProps<typeof SliderPrimitive.Root>,
  'className' | 'render'
> & {
  className?: string;
};

export const Slider = ({ className, ...props }: SliderProps) => (
  <SliderPrimitive.Root {...props} className={cn('relative w-full', className)}>
    <SliderPrimitive.Control className="flex h-5 w-full items-center">
      <SliderPrimitive.Track className="relative h-1 w-full overflow-hidden rounded-full bg-fill-tertiary">
        <SliderPrimitive.Indicator className="absolute h-full rounded-full bg-accent" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(
          'block size-3.5 rounded-full border border-border bg-background shadow-sm',
          'transition-shadow duration-150',
          'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring)',
          'data-[dragging]:shadow-(--shadow-notion-ring)',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        )}
      />
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
);

export { SliderPrimitive };

import { Meter as MeterPrimitive } from '@base-ui/react/meter';

import { cn } from '~/lib/cn';

export type MeterProps = Omit<
  React.ComponentProps<typeof MeterPrimitive.Root>,
  'className' | 'render'
> & {
  className?: string;
};

export const Meter = ({ className, ...props }: MeterProps) => (
  <MeterPrimitive.Root {...props} className={cn('relative w-full', className)}>
    <MeterPrimitive.Track className="relative h-1.5 w-full overflow-hidden rounded-full bg-fill-tertiary">
      <MeterPrimitive.Indicator className="h-full rounded-full bg-accent transition-[width] duration-200 ease-out" />
    </MeterPrimitive.Track>
  </MeterPrimitive.Root>
);

export { MeterPrimitive };

import { Progress as ProgressPrimitive } from '@base-ui/react/progress';

import { cn } from '~/lib/cn';

export type ProgressProps = Omit<
  React.ComponentProps<typeof ProgressPrimitive.Root>,
  'className' | 'render'
> & {
  className?: string;
};

export const Progress = ({ className, ...props }: ProgressProps) => (
  <ProgressPrimitive.Root {...props} className={cn('relative w-full', className)}>
    <ProgressPrimitive.Track className="relative h-1.5 w-full overflow-hidden rounded-full bg-fill-tertiary">
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full rounded-full bg-accent transition-[width,transform] duration-200 ease-out',
          'data-[indeterminate]:w-1/3 data-[indeterminate]:animate-[notion-progress-indeterminate_1.4s_ease-in-out_infinite]',
        )}
      />
    </ProgressPrimitive.Track>
  </ProgressPrimitive.Root>
);

export { ProgressPrimitive };

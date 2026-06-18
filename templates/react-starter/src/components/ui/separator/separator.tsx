import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';

import { cn } from '~/lib/cn';

export type SeparatorProps = Omit<
  React.ComponentProps<typeof SeparatorPrimitive>,
  'className'
> & {
  className?: string;
};

export const Separator = ({
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive
    {...props}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      className,
    )}
  />
);

export { SeparatorPrimitive };

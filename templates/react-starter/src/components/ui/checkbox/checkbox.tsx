import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { Check, Minus } from 'lucide-react';

import { cn } from '~/lib/cn';

export type CheckboxProps = Omit<
  React.ComponentProps<typeof CheckboxPrimitive.Root>,
  'className' | 'render'
> & {
  className?: string;
};

export const Checkbox = ({ className, ...props }: CheckboxProps) => (
  <CheckboxPrimitive.Root
    {...props}
    className={cn(
      'group inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-border bg-background',
      'transition-[background-color,border-color,box-shadow] duration-150',
      'focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-(--shadow-notion-ring)',
      'data-[checked]:border-accent data-[checked]:bg-accent',
      'data-[indeterminate]:border-accent data-[indeterminate]:bg-accent',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[invalid]:border-red',
      className,
    )}
  >
    <CheckboxPrimitive.Indicator className="inline-flex items-center justify-center text-white">
      <Check className="size-3 group-data-[indeterminate]:hidden" strokeWidth={3} />
      <Minus className="hidden size-3 group-data-[indeterminate]:block" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { CheckboxPrimitive };

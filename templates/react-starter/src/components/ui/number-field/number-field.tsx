import { NumberField as NumberFieldPrimitive } from '@base-ui/react/number-field';
import { Minus, Plus } from 'lucide-react';

import { cn } from '~/lib/cn';

export type NumberFieldProps = Omit<
  React.ComponentProps<typeof NumberFieldPrimitive.Root>,
  'className' | 'render'
> & {
  className?: string;
};

export const NumberField = ({ className, ...props }: NumberFieldProps) => (
  <NumberFieldPrimitive.Root {...props} className={cn('w-fit', className)}>
    <NumberFieldPrimitive.Group
      className={cn(
        'inline-flex h-8 items-center rounded-[6px] border border-border bg-background',
        'focus-within:border-accent focus-within:shadow-(--shadow-notion-ring)',
        'transition-shadow data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      )}
    >
      <NumberFieldPrimitive.Decrement
        className={cn(
          'flex h-full w-7 items-center justify-center text-text-tertiary',
          'transition-colors hover:bg-fill-secondary hover:text-text',
          'rounded-l-[5px] disabled:pointer-events-none disabled:opacity-40',
        )}
      >
        <Minus className="size-3.5" />
      </NumberFieldPrimitive.Decrement>
      <NumberFieldPrimitive.Input
        className={cn(
          'h-full w-16 border-x border-border bg-transparent px-2 text-center text-[13px] text-text tabular-nums',
          'focus:outline-none',
        )}
      />
      <NumberFieldPrimitive.Increment
        className={cn(
          'flex h-full w-7 items-center justify-center text-text-tertiary',
          'transition-colors hover:bg-fill-secondary hover:text-text',
          'rounded-r-[5px] disabled:pointer-events-none disabled:opacity-40',
        )}
      >
        <Plus className="size-3.5" />
      </NumberFieldPrimitive.Increment>
    </NumberFieldPrimitive.Group>
  </NumberFieldPrimitive.Root>
);

export { NumberFieldPrimitive };

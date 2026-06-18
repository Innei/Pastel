import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

export const RadioGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) => (
  <RadioGroupPrimitive
    {...props}
    className={cn('flex flex-col gap-2', className as string)}
  />
);

export type RadioProps = Omit<
  React.ComponentProps<typeof RadioPrimitive.Root>,
  'className' | 'render'
> & {
  className?: string;
};

export const Radio = ({ className, ...props }: RadioProps) => (
  <RadioPrimitive.Root
    {...props}
    className={cn(
      'inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-border bg-background',
      'transition-[background-color,border-color,box-shadow] duration-150',
      'focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-(--shadow-notion-ring)',
      'data-[checked]:border-accent',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
  >
    <RadioPrimitive.Indicator className="size-2 rounded-full bg-accent" />
  </RadioPrimitive.Root>
);

export interface RadioItemProps {
  children: ReactNode;
  disabled?: boolean;
  value: string;
}

export const RadioItem = ({ value, disabled, children }: RadioItemProps) => (
  <label className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text data-[disabled]:cursor-default data-[disabled]:opacity-50">
    <Radio disabled={disabled} value={value} />
    <span>{children}</span>
  </label>
);

export { RadioGroupPrimitive, RadioPrimitive };

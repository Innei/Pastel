import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';

import { cn } from '~/lib/cn';

const toggleClassName = cn(
  'inline-flex h-7 items-center justify-center gap-1.5 rounded-[5px] px-2 text-[12.5px] font-medium text-text-secondary',
  'transition-colors duration-150 hover:bg-fill-secondary hover:text-text',
  'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring)',
  'data-[pressed]:bg-fill-secondary data-[pressed]:text-text',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
);

export const Toggle = <Value extends string = string>({
  className,
  ...props
}: React.ComponentProps<typeof TogglePrimitive<Value>>) => (
  <TogglePrimitive<Value>
    {...props}
    className={cn(toggleClassName, className as string)}
  />
);

export const ToggleGroup = <Value extends string = string>({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive<Value>>) => (
  <ToggleGroupPrimitive<Value>
    {...props}
    className={cn(
      'inline-flex items-center gap-0.5 rounded-[8px] border border-border bg-background p-1',
      className as string,
    )}
  />
);

export { ToggleGroupPrimitive,TogglePrimitive };

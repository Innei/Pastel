import { Switch as SwitchPrimitive } from '@base-ui/react/switch';

import { cn } from '~/lib/cn';

export type SwitchProps = Omit<
  React.ComponentProps<typeof SwitchPrimitive.Root>,
  'className' | 'render'
> & {
  className?: string;
};

export const Switch = ({ className, ...props }: SwitchProps) => (
  <SwitchPrimitive.Root
    {...props}
    className={cn(
      'inline-flex h-[18px] w-7 shrink-0 cursor-pointer items-center rounded-full p-0.5',
      'bg-fill-tertiary transition-colors duration-150',
      'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring)',
      'data-[checked]:bg-accent',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'size-3.5 rounded-full bg-white shadow-sm transition-transform duration-150',
        'data-[checked]:translate-x-2.5',
      )}
    />
  </SwitchPrimitive.Root>
);

export { SwitchPrimitive };

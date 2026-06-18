import { Popover as PopoverPrimitive } from '@base-ui/react/popover';

import { cn } from '~/lib/cn';

import { popupTransitionClassName } from '../menu/shared';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverTitle = PopoverPrimitive.Title;
export const PopoverDescription = PopoverPrimitive.Description;
export const PopoverClose = PopoverPrimitive.Close;

export interface PopoverContentProps extends Omit<
  React.ComponentProps<typeof PopoverPrimitive.Popup>,
  'className'
> {
  align?: 'start' | 'center' | 'end';
  className?: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
}

export const PopoverContent = ({
  className,
  align = 'center',
  side = 'bottom',
  sideOffset = 8,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner align={align} className="z-50" side={side} sideOffset={sideOffset}>
      <PopoverPrimitive.Popup
        {...props}
        className={cn(
          'w-72 rounded-[10px] bg-background p-3 outline-none',
          'shadow-(--shadow-notion-popup)',
          popupTransitionClassName,
          className,
        )}
      />
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
);

export { PopoverPrimitive };

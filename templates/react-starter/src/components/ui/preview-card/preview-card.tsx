import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';

import { cn } from '~/lib/cn';

import { popupTransitionClassName } from '../menu/shared';

export const PreviewCard = PreviewCardPrimitive.Root;
export const PreviewCardTrigger = PreviewCardPrimitive.Trigger;

export interface PreviewCardContentProps
  extends Omit<React.ComponentProps<typeof PreviewCardPrimitive.Popup>, 'className'> {
  align?: 'start' | 'center' | 'end';
  className?: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
}

export const PreviewCardContent = ({
  className,
  align = 'center',
  side = 'bottom',
  sideOffset = 8,
  ...props
}: PreviewCardContentProps) => (
  <PreviewCardPrimitive.Portal>
    <PreviewCardPrimitive.Positioner
      align={align}
      className="z-50"
      side={side}
      sideOffset={sideOffset}
    >
      <PreviewCardPrimitive.Popup
        {...props}
        className={cn(
          'w-72 rounded-[10px] bg-background p-3 outline-none',
          'shadow-(--shadow-notion-popup)',
          popupTransitionClassName,
          className,
        )}
      />
    </PreviewCardPrimitive.Positioner>
  </PreviewCardPrimitive.Portal>
);

export { PreviewCardPrimitive };

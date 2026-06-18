import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import type { ReactElement, ReactNode } from 'react';

import { cn } from '~/lib/cn';

import { popupTransitionClassName } from '../menu/shared';

export interface TooltipProps {
  children: ReactElement;
  delay?: number;
  side?: 'top' | 'bottom' | 'left' | 'right';
  title: ReactNode;
}

export const Tooltip = ({ children, title, side = 'top', delay = 400 }: TooltipProps) => (
  <TooltipPrimitive.Root>
    <TooltipPrimitive.Trigger delay={delay} render={children} />
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner className="z-50" side={side} sideOffset={6}>
        <TooltipPrimitive.Popup
          className={cn(
            'rounded-[5px] px-2.5 py-1.5 text-[12px] font-medium',
            'bg-[oklch(0.3_0.005_286)] text-white dark:bg-fill dark:text-text',
            'shadow-(--shadow-notion-popup)',
            popupTransitionClassName,
          )}
        >
          {title}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  </TooltipPrimitive.Root>
);

export { TooltipPrimitive };

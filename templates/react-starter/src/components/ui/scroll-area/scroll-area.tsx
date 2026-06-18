import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';
import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

export interface ScrollAreaProps {
  children: ReactNode;
  className?: string;
  viewportClassName?: string;
}

export const ScrollArea = ({ className, viewportClassName, children }: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root
    className={cn('relative overflow-hidden', className)}
  >
    <ScrollAreaPrimitive.Viewport
      className={cn('size-full overscroll-contain rounded-[inherit]', viewportClassName)}
    >
      <ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      orientation="vertical"
      className={cn(
        'flex w-1.5 touch-none select-none p-0.5',
        'transition-colors',
      )}
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-text-tertiary/40 transition-colors hover:bg-text-tertiary/60" />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Scrollbar
      orientation="horizontal"
      className={cn(
        'flex h-1.5 touch-none select-none p-0.5',
        'transition-colors',
      )}
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-text-tertiary/40 transition-colors hover:bg-text-tertiary/60" />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner className="bg-transparent" />
  </ScrollAreaPrimitive.Root>
);

export { ScrollAreaPrimitive };

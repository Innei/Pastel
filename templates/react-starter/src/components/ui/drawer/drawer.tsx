import { Drawer as DrawerPrimitive } from '@base-ui/react/drawer';
import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

type DrawerSide = 'top' | 'bottom' | 'left' | 'right';

const SIDE_TO_SWIPE: Record<DrawerSide, 'up' | 'down' | 'left' | 'right'> = {
  bottom: 'down',
  left: 'left',
  right: 'right',
  top: 'up',
};

const sidePopupClassName: Record<DrawerSide, string> = {
  bottom:
    'inset-x-0 bottom-0 max-h-[85dvh] rounded-t-[12px] data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full',
  left: 'inset-y-0 left-0 max-w-sm w-[85vw] rounded-r-[12px] data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full',
  right:
    'inset-y-0 right-0 max-w-sm w-[85vw] rounded-l-[12px] data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full',
  top: 'inset-x-0 top-0 max-h-[85dvh] rounded-b-[12px] data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full',
};

export interface DrawerProps {
  children: ReactNode;
  description?: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  side?: DrawerSide;
  title?: ReactNode;
  trigger?: ReactNode;
}

export const Drawer = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  side = 'bottom',
  children,
}: DrawerProps) => (
  <DrawerPrimitive.Root
    open={open}
    swipeDirection={SIDE_TO_SWIPE[side]}
    onOpenChange={onOpenChange}
  >
    {trigger && <DrawerPrimitive.Trigger render={trigger as React.ReactElement} />}
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Backdrop
        className={cn(
          'fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]',
          'transition-opacity duration-200',
          'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        )}
      />
      <DrawerPrimitive.Popup
        className={cn(
          'fixed z-50 flex flex-col overflow-hidden bg-background outline-none',
          'shadow-(--shadow-notion-modal)',
          'transition-transform duration-300 ease-out',
          sidePopupClassName[side],
        )}
      >
        {side === 'bottom' && (
          <div className="flex justify-center pt-2">
            <span className="h-1 w-9 rounded-full bg-fill-tertiary" />
          </div>
        )}
        {(title || description) && (
          <div className="flex flex-col gap-1 px-4 pt-3 pb-1.5">
            {title && (
              <DrawerPrimitive.Title className="text-[14px] font-semibold text-text">
                {title}
              </DrawerPrimitive.Title>
            )}
            {description && (
              <DrawerPrimitive.Description className="text-[13px] text-text-secondary">
                {description}
              </DrawerPrimitive.Description>
            )}
          </div>
        )}
        <div className="overflow-y-auto px-4 pt-1.5 pb-4 text-[13px] text-text">
          {children}
        </div>
      </DrawerPrimitive.Popup>
    </DrawerPrimitive.Portal>
  </DrawerPrimitive.Root>
);

export { DrawerPrimitive };

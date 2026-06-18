import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { Menubar as MenubarPrimitive } from '@base-ui/react/menubar';

import { cn } from '~/lib/cn';

import { menuPopupClassName } from '../menu/shared';

export const Menubar = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive>) => (
  <MenubarPrimitive
    {...props}
    className={cn(
      'inline-flex items-center gap-0.5 rounded-[8px] border border-border bg-background p-0.5',
      className as string,
    )}
  />
);

export const MenubarMenu = MenuPrimitive.Root;

export const MenubarTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) => (
  <MenuPrimitive.Trigger
    {...props}
    className={cn(
      'inline-flex h-7 items-center rounded-[5px] px-2 text-[12.5px] font-medium text-text',
      'transition-colors duration-150 hover:bg-fill-secondary',
      'focus-visible:outline-none focus-visible:bg-fill-secondary',
      'data-[popup-open]:bg-fill-secondary',
      className as string,
    )}
  />
);

export const MenubarContent = ({
  className,
  align = 'start',
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Popup> & {
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner align={align} side="bottom" sideOffset={sideOffset}>
      <MenuPrimitive.Popup
        {...props}
        className={cn(menuPopupClassName, className as string)}
      />
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);

export { MenuPrimitive as MenubarItemPrimitive,MenubarPrimitive };

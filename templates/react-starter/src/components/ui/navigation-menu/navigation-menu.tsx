import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { ChevronDown } from 'lucide-react';

import { cn } from '~/lib/cn';

export const NavigationMenu = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) => (
  <NavigationMenuPrimitive.Root
    {...props}
    className={cn('relative flex items-center', className as string)}
  >
    {children}
  </NavigationMenuPrimitive.Root>
);

export const NavigationMenuList = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) => (
  <NavigationMenuPrimitive.List
    {...props}
    className={cn(
      'inline-flex items-center gap-0.5 rounded-[8px] border border-border bg-background p-0.5',
      className as string,
    )}
  />
);

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) => (
  <NavigationMenuPrimitive.Trigger
    {...props}
    className={cn(
      'group inline-flex h-7 items-center gap-1 rounded-[5px] px-2 text-[12.5px] font-medium text-text',
      'transition-colors duration-150 hover:bg-fill-secondary',
      'focus-visible:outline-none focus-visible:bg-fill-secondary',
      'data-[popup-open]:bg-fill-secondary',
      className as string,
    )}
  >
    {children}
    <ChevronDown className="size-3 text-text-tertiary transition-transform duration-200 group-data-[popup-open]:rotate-180" />
  </NavigationMenuPrimitive.Trigger>
);

export const NavigationMenuContent = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) => (
  <NavigationMenuPrimitive.Content
    {...props}
    className={cn(
      'p-3 transition-[opacity,transform] duration-200 ease-out',
      'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
      'data-[activation-direction=left]:data-[starting-style]:-translate-x-2',
      'data-[activation-direction=right]:data-[starting-style]:translate-x-2',
      className as string,
    )}
  />
);

export const NavigationMenuLink = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) => (
  <NavigationMenuPrimitive.Link
    {...props}
    className={cn(
      'flex flex-col gap-0.5 rounded-[6px] p-2 text-text transition-colors duration-150',
      'hover:bg-fill-secondary',
      'focus-visible:outline-none focus-visible:bg-fill-secondary',
      className as string,
    )}
  />
);

export const NavigationMenuViewport = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) => (
  <NavigationMenuPrimitive.Viewport
    {...props}
    className={cn(
      'relative h-(--popup-height) w-(--popup-width) overflow-hidden',
      'transition-[height,width] duration-200 ease-out',
      className as string,
    )}
  />
);

export const NavigationMenuPopup = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Popup>) => (
  <NavigationMenuPrimitive.Popup
    {...props}
    className={cn(
      'relative h-(--popup-height) w-(--popup-width) bg-background outline-none',
      'rounded-[10px] shadow-(--shadow-notion-popup)',
      'transition-[height,width] duration-200 ease-out',
      className as string,
    )}
  />
);

export const NavigationMenuPositioner = ({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Positioner>) => (
  <NavigationMenuPrimitive.Positioner
    sideOffset={sideOffset}
    {...props}
    className={cn('z-50', className as string)}
  />
);

export const NavigationMenuPortal = NavigationMenuPrimitive.Portal;

export { NavigationMenuPrimitive };

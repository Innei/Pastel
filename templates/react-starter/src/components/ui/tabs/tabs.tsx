import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';

import { cn } from '~/lib/cn';

export const Tabs = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root {...props} className={cn('flex flex-col gap-3', className as string)} />
);

export const TabsList = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    {...props}
    className={cn(
      'relative inline-flex items-center gap-1 border-b border-border',
      className as string,
    )}
  >
    {props.children}
    <TabsPrimitive.Indicator
      className={cn(
        '-bottom-px absolute left-0 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left)',
        'bg-accent transition-[translate,width] duration-200 ease-out',
      )}
    />
  </TabsPrimitive.List>
);

export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) => (
  <TabsPrimitive.Tab
    {...props}
    className={cn(
      'inline-flex h-8 items-center px-3 text-[13px] font-medium text-text-secondary',
      'rounded-t-[5px] transition-colors duration-150',
      'hover:text-text data-[selected]:text-text',
      'focus-visible:outline-none focus-visible:bg-fill-secondary',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className as string,
    )}
  />
);

export const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) => (
  <TabsPrimitive.Panel
    {...props}
    className={cn('text-[13px] text-text focus:outline-none', className as string)}
  />
);

export { TabsPrimitive };

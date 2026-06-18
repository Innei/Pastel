import { Toolbar as ToolbarPrimitive } from '@base-ui/react/toolbar';

import { cn } from '~/lib/cn';

export const Toolbar = ({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root>) => (
  <ToolbarPrimitive.Root
    {...props}
    className={cn(
      'inline-flex items-center gap-0.5 rounded-[8px] border border-border bg-background p-1',
      className as string,
    )}
  />
);

export const ToolbarGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Group>) => (
  <ToolbarPrimitive.Group
    {...props}
    className={cn('inline-flex items-center gap-0.5', className as string)}
  />
);

export const ToolbarButton = ({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Button>) => (
  <ToolbarPrimitive.Button
    {...props}
    className={cn(
      'inline-flex h-7 items-center justify-center gap-1.5 rounded-[5px] px-2 text-[12.5px] font-medium text-text',
      'transition-colors hover:bg-fill-secondary',
      'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring)',
      'data-[pressed]:bg-fill-secondary data-[pressed]:text-text',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className as string,
    )}
  />
);

export const ToolbarLink = ({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Link>) => (
  <ToolbarPrimitive.Link
    {...props}
    className={cn(
      'inline-flex h-7 items-center rounded-[5px] px-2 text-[12.5px] font-medium text-text-secondary',
      'transition-colors hover:bg-fill-secondary hover:text-text',
      'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring)',
      className as string,
    )}
  />
);

export const ToolbarSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) => (
  <ToolbarPrimitive.Separator
    {...props}
    className={cn('mx-1 h-4 w-px bg-border', className as string)}
  />
);

export { ToolbarPrimitive };

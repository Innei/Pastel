import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';
import { ChevronDown } from 'lucide-react';

import { cn } from '~/lib/cn';

export const Collapsible = CollapsiblePrimitive.Root;

export const CollapsibleTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) => (
  <CollapsiblePrimitive.Trigger
    {...props}
    className={cn(
      'group flex w-full items-center justify-between gap-3 py-2 text-left text-[13px] font-medium text-text',
      'transition-colors duration-150 hover:text-text-secondary',
      'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring) rounded-[4px]',
      className as string,
    )}
  >
    {children}
    <ChevronDown className="size-3.5 text-text-tertiary transition-transform duration-200 group-data-[panel-open]:rotate-180" />
  </CollapsiblePrimitive.Trigger>
);

export const CollapsibleContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Panel>) => (
  <CollapsiblePrimitive.Panel
    {...props}
    className={cn(
      'overflow-hidden text-[13px] text-text-secondary',
      'transition-[height,opacity] duration-200 ease-out',
      'h-(--collapsible-panel-height)',
      'data-[starting-style]:h-0 data-[ending-style]:h-0',
      'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
      className as string,
    )}
  >
    <div className="pb-2">{children}</div>
  </CollapsiblePrimitive.Panel>
);

export { CollapsiblePrimitive };

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '~/lib/cn';

export const Accordion = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) => (
  <AccordionPrimitive.Root
    {...props}
    className={cn('flex flex-col', className as string)}
  />
);

export const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    {...props}
    className={cn('border-b border-border last:border-b-0', className as string)}
  />
);

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="m-0">
    <AccordionPrimitive.Trigger
      {...props}
      className={cn(
        'group flex w-full items-center justify-between gap-3 py-2.5 text-left text-[13px] font-medium text-text',
        'transition-colors duration-150 hover:text-text-secondary',
        'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring) rounded-[4px]',
        className as string,
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          'size-3.5 shrink-0 text-text-tertiary',
          'transition-transform duration-200 group-data-[panel-open]:rotate-180',
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

export const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) => (
  <AccordionPrimitive.Panel
    {...props}
    className={cn(
      'overflow-hidden text-[13px] text-text-secondary',
      'transition-[height,opacity] duration-200 ease-out',
      'h-(--accordion-panel-height)',
      'data-[starting-style]:h-0 data-[ending-style]:h-0',
      'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
      className as string,
    )}
  >
    <div className="pb-3">{children}</div>
  </AccordionPrimitive.Panel>
);

export { AccordionPrimitive };

import { Select as SelectPrimitive } from '@base-ui/react/select'
import { Check, ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '../../utils/cn'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-8 w-full items-center justify-between rounded-[6px] border border-border bg-background px-3 text-[13px] text-text data-[placeholder]:text-text-tertiary focus:outline-none focus:border-accent focus:shadow-(--shadow-notion-ring) data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 transition-shadow',
      className as string,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className="opacity-50">
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
)

const SelectContent = ({
  ref,
  className,
  children,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup> & {
  sideOffset?: number
}) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner
      alignItemWithTrigger={false}
      className="z-50"
      sideOffset={sideOffset}
    >
      <SelectPrimitive.Popup
        ref={ref}
        className={cn(
          'relative max-h-96 min-w-[8rem] min-w-(--anchor-width) overflow-hidden rounded-[10px] bg-background p-1.5 text-text shadow-(--shadow-notion-popup) outline-none',
          'origin-(--transform-origin) transition-[transform,opacity] duration-150 ease-out',
          'data-[starting-style]:scale-[0.97] data-[starting-style]:opacity-0',
          'data-[ending-style]:scale-[0.97] data-[ending-style]:opacity-0',
          className as string,
        )}
        {...props}
      >
        {children}
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
)

const SelectLabel = ({
  ref,
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) => (
  <SelectPrimitive.GroupLabel
    ref={ref}
    className={cn('py-1 pl-7 pr-2 text-xs font-semibold', className as string)}
    {...props}
  />
)

const SelectItem = ({
  ref,
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-[5px] py-1.5 pl-7 pr-2.5 text-[13px] outline-none transition-colors data-[highlighted]:bg-fill-secondary data-[highlighted]:text-text data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
      className as string,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
)

const SelectSeparator = ({
  ref,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>
}) => (
  <div
    ref={ref}
    className={cn('mx-1.5 my-1 h-px bg-border', className)}
    role="separator"
    {...props}
  />
)

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

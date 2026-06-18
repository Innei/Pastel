import { Select as SelectPrimitive } from '@base-ui/react/select';
import { Check, ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

import { menuItemClassName, menuPopupClassName } from '../menu/shared';

export interface SelectOption<Value extends string = string> {
  disabled?: boolean;
  label: ReactNode;
  value: Value;
}

export interface SelectProps<Value extends string = string> {
  className?: string;
  defaultValue?: Value | null;
  disabled?: boolean;
  onValueChange?: (value: Value) => void;
  options: SelectOption<Value>[];
  placeholder?: ReactNode;
  value?: Value | null;
}

export const Select = <Value extends string = string>({
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = 'Select…',
  disabled,
  className,
}: SelectProps<Value>) => (
  <SelectPrimitive.Root
    defaultValue={defaultValue}
    disabled={disabled}
    items={options}
    value={value}
    onValueChange={(next) => onValueChange?.(next as Value)}
  >
    <SelectPrimitive.Trigger
      className={cn(
        'flex h-8 min-w-36 items-center justify-between gap-2 rounded-[6px] border border-border bg-background px-3 text-[13px] text-text',
        'focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-(--shadow-notion-ring)',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'transition-shadow',
        className,
      )}
    >
      <SelectPrimitive.Value
        className="truncate data-[placeholder]:text-text-tertiary"
        placeholder={placeholder}
      />
      <SelectPrimitive.Icon className="text-text-tertiary">
        <ChevronDown className="size-3.5" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner alignItemWithTrigger={false} className="z-50" sideOffset={6}>
        <SelectPrimitive.Popup className={cn(menuPopupClassName, 'min-w-(--anchor-width)')}>
          {options.map((option) => (
            <SelectPrimitive.Item
              className={cn(menuItemClassName, 'relative pr-8')}
              disabled={option.disabled}
              key={option.value}
              value={option.value}
            >
              <SelectPrimitive.ItemText className="truncate">
                {option.label}
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="absolute right-2 text-accent">
                <Check className="size-3.5" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);

export { SelectPrimitive };

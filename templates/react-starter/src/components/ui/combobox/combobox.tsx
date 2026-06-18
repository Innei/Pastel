import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { Check, ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

import { menuItemClassName, menuPopupClassName } from '../menu/shared';

export interface ComboboxOption<Value extends string = string> {
  disabled?: boolean;
  label: ReactNode;
  value: Value;
}

export interface ComboboxProps<Value extends string = string> {
  className?: string;
  defaultValue?: Value | null;
  disabled?: boolean;
  emptyText?: ReactNode;
  inputValue?: string;
  onInputValueChange?: (value: string) => void;
  onValueChange?: (value: Value | null) => void;
  options: ComboboxOption<Value>[];
  placeholder?: string;
  value?: Value | null;
}

export const Combobox = <Value extends string = string>({
  options,
  value,
  defaultValue,
  onValueChange,
  inputValue,
  onInputValueChange,
  placeholder = 'Search…',
  emptyText = 'No matches',
  disabled,
  className,
}: ComboboxProps<Value>) => (
  <ComboboxPrimitive.Root
    defaultValue={defaultValue ?? null}
    disabled={disabled}
    inputValue={inputValue}
    items={options}
    value={value ?? null}
    onInputValueChange={onInputValueChange}
    onValueChange={(next) => onValueChange?.(next as Value | null)}
  >
    <ComboboxPrimitive.InputGroup
      className={cn(
        'flex h-8 min-w-44 items-center gap-1.5 rounded-[6px] border border-border bg-background px-2.5',
        'focus-within:border-accent focus-within:shadow-(--shadow-notion-ring)',
        'transition-shadow data-[disabled]:opacity-50',
        className,
      )}
    >
      <ComboboxPrimitive.Input
        className="size-full bg-transparent text-[13px] text-text outline-none placeholder:text-text-tertiary"
        placeholder={placeholder}
      />
      <ComboboxPrimitive.Trigger className="shrink-0 text-text-tertiary">
        <ChevronDown className="size-3.5" />
      </ComboboxPrimitive.Trigger>
    </ComboboxPrimitive.InputGroup>
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner align="start" className="z-50" sideOffset={6}>
        <ComboboxPrimitive.Popup className={cn(menuPopupClassName, 'min-w-(--anchor-width)')}>
          <ComboboxPrimitive.Empty className="px-2.5 py-2 text-[12.5px] text-text-tertiary">
            {emptyText}
          </ComboboxPrimitive.Empty>
          <ComboboxPrimitive.List>
            {(item: ComboboxOption<Value>) => (
              <ComboboxPrimitive.Item
                className={cn(menuItemClassName, 'relative pr-8')}
                disabled={item.disabled}
                key={item.value}
                value={item.value}
              >
                <span className="truncate">{item.label}</span>
                <ComboboxPrimitive.ItemIndicator className="absolute right-2 text-accent">
                  <Check className="size-3.5" />
                </ComboboxPrimitive.ItemIndicator>
              </ComboboxPrimitive.Item>
            )}
          </ComboboxPrimitive.List>
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  </ComboboxPrimitive.Root>
);

export { ComboboxPrimitive };

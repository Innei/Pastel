import { Check, Minus } from 'lucide-react'
import { m } from 'motion/react'
import * as React from 'react'

import { microReboundPreset } from '../../constants/spring'
import { cn } from '../../utils/cn'

export interface CheckboxProps {
  checked?: boolean
  children?: React.ReactNode
  className?: string
  defaultChecked?: boolean
  description?: string
  disabled?: boolean
  id?: string
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'accent' | 'success'
}

const sizeClasses = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

const iconSizeClasses = {
  sm: 'w-2.5 h-2.5',
  md: 'w-3 h-3',
  lg: 'w-3.5 h-3.5',
}

const CheckboxComponent = ({
  ref,
  id,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  className,
  size = 'md',
  variant = 'accent',
  onChange,
  children,
  description,
  ...props
}: CheckboxProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
  // Support both controlled and uncontrolled components
  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked || false,
  )
  const isControlled = checked !== undefined
  const checkedValue = isControlled ? checked : internalChecked
  const isCheckedOrIndeterminate = checkedValue || indeterminate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return

    const newChecked = e.target.checked

    if (!isControlled) {
      setInternalChecked(newChecked)
    }

    if (onChange) {
      onChange(newChecked)
    }
  }

  const checkboxElement = (
    <div className="relative">
      <input
        checked={checkedValue}
        className="sr-only"
        disabled={disabled}
        id={id}
        ref={ref}
        type="checkbox"
        onChange={handleChange}
        {...props}
      />

      <div
        className={cn(
          'relative flex items-center justify-center rounded-[4px] border transition-[background-color,border-color,box-shadow] duration-150 cursor-pointer',
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed',
          isCheckedOrIndeterminate
            ? variant === 'accent'
              ? 'border-accent bg-accent'
              : variant === 'success'
                ? 'border-green bg-green'
                : 'border-foreground bg-foreground'
            : 'border-border bg-background hover:border-border-secondary',
          'focus-within:shadow-(--shadow-notion-ring) focus-within:border-accent',
          !children && !description && className,
        )}
      >
        {/* Checkmark or indeterminate icon */}
        {isCheckedOrIndeterminate && (
          <m.div
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center"
            exit={{ scale: 0, opacity: 0 }}
            initial={{ scale: 0, opacity: 0 }}
            transition={microReboundPreset}
          >
            {indeterminate ? (
              <Minus className={cn('text-white', iconSizeClasses[size])} />
            ) : (
              <Check className={cn('text-white', iconSizeClasses[size])} />
            )}
          </m.div>
        )}
      </div>
    </div>
  )

  // If no children or description, return just the checkbox
  if (!children && !description) {
    return checkboxElement
  }

  // Return checkbox with label wrapper
  return (
    <label
      htmlFor={id}
      className={cn(
        'group flex items-start gap-2.5 cursor-pointer select-none',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <div className="flex-shrink-0 pt-0.5">{checkboxElement}</div>

      {(children || description) && (
        <div className="flex-1 min-w-0 -mt-1">
          {children && (
            <span
              className={cn(
                'text-[13px] font-medium transition-colors leading-5',
                disabled
                  ? 'text-text-tertiary'
                  : 'text-text group-hover:text-foreground',
              )}
            >
              {children}
            </span>
          )}
          {description && (
            <p
              className={cn(
                'text-xs mt-0.5 transition-colors leading-4',
                disabled ? 'text-text-tertiary' : 'text-text-secondary',
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </label>
  )
}

CheckboxComponent.displayName = 'Checkbox'

export { CheckboxComponent as Checkbox }

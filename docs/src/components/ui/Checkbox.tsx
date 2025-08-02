import { Check, Minus } from 'lucide-react'
import { m } from 'motion/react'
import * as React from 'react'

import { microReboundPreset } from '../../constants/spring'
import { cn } from '../../utils/cn'

export interface CheckboxProps {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'accent' | 'success'
  onChange?: (checked: boolean) => void
  children?: React.ReactNode
  description?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

const iconSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4',
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
        ref={ref}
        id={id}
        type="checkbox"
        checked={checkedValue}
        disabled={disabled}
        onChange={handleChange}
        className="sr-only"
        {...props}
      />

      <m.div
        className={cn(
          'relative flex items-center justify-center rounded border-2 transition-all duration-200 cursor-pointer',
          sizeClasses[size],
          disabled && 'opacity-50 cursor-not-allowed',
          isCheckedOrIndeterminate
            ? variant === 'accent'
              ? 'border-accent bg-accent'
              : variant === 'success'
                ? 'border-green bg-green'
                : 'border-foreground bg-foreground'
            : 'border-border bg-background hover:border-border-secondary',
          'focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2',
          !children && !description && className,
        )}
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        transition={microReboundPreset}
      >
        {/* Checkmark or indeterminate icon */}
        {isCheckedOrIndeterminate && (
          <m.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={microReboundPreset}
            className="flex items-center justify-center"
          >
            {indeterminate ? (
              <Minus className={cn('text-white', iconSizeClasses[size])} />
            ) : (
              <Check className={cn('text-white', iconSizeClasses[size])} />
            )}
          </m.div>
        )}
      </m.div>
    </div>
  )

  // If no children or description, return just the checkbox
  if (!children && !description) {
    return checkboxElement
  }

  // Return checkbox with label wrapper
  return (
    <m.label
      htmlFor={id}
      className={cn(
        'group flex items-start gap-3 cursor-pointer select-none',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      whileHover={disabled ? {} : { x: 2 }}
      transition={microReboundPreset}
    >
      <div className="flex-shrink-0 pt-0.5">{checkboxElement}</div>

      {(children || description) && (
        <div className="flex-1 min-w-0 -mt-1">
          {children && (
            <span
              className={cn(
                'text-sm font-medium transition-colors leading-5',
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
    </m.label>
  )
}

CheckboxComponent.displayName = 'Checkbox'

export { CheckboxComponent as Checkbox }

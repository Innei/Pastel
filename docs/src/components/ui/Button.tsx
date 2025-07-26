import { m } from 'motion/react'
import type { ReactNode } from 'react'

import { microReboundPreset } from '../../constants/spring'
import { cn } from '../../utils/cn'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children?: ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  ref,
  className,
  variant = 'primary',
  size = 'md',
  asChild,
  children,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const variants = {
    primary: 'bg-text text-background hover:opacity-90',
    secondary:
      'bg-background text-text border border-border hover:bg-background-secondary',
    ghost: 'hover:bg-background-secondary',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  const buttonClasses = cn(
    'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (asChild && children) {
    // If asChild is true, apply classes to the child element
    const child = children as any
    if (child?.type === 'a') {
      return (
        <m.a
          {...child.props}
          className={cn(buttonClasses, child.props.className)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={microReboundPreset}
        >
          {child.props.children}
        </m.a>
      )
    }
  }

  return (
    <m.button
      ref={ref}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={microReboundPreset}
      {...props}
    >
      {children}
    </m.button>
  )
}

Button.displayName = 'Button'

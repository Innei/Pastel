import type { ReactNode } from 'react'

import { cn } from '../../utils/cn'

interface ButtonProps {
  asChild?: boolean
  children?: ReactNode
  className?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
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
    primary: 'bg-accent text-white hover:opacity-90',
    secondary:
      'bg-background text-text border border-border hover:bg-fill-tertiary',
    ghost: 'text-text hover:bg-fill-secondary',
    danger: 'bg-red text-white hover:opacity-90',
  }

  const sizes = {
    sm: 'h-7 px-2.5 text-[12.5px]',
    md: 'h-8 px-3 text-[13px]',
    lg: 'h-9 px-3.5 text-[13.5px]',
  }

  const buttonClasses = cn(
    'inline-flex items-center justify-center gap-1.5 font-medium rounded-[6px] transition-[background-color,opacity,box-shadow] duration-150 focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring) disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (asChild && children) {
    const child = children as any
    if (child?.type === 'a') {
      return (
        <a
          {...child.props}
          className={cn(buttonClasses, child.props.className)}
        >
          {child.props.children}
        </a>
      )
    }
  }

  return (
    <button className={buttonClasses} ref={ref} {...props}>
      {children}
    </button>
  )
}

Button.displayName = 'Button'

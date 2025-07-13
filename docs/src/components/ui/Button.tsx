import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild,
      children,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary: 'bg-black text-white hover:opacity-90',
      secondary:
        'bg-background text-black border border-border hover:bg-gray-50',
      ghost: 'hover:bg-gray-100',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    }

    const buttonClasses = cn(
      'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      className,
    )

    if (asChild && children) {
      // If asChild is true, apply classes to the child element
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
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

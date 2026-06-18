import type { ButtonHTMLAttributes } from 'react';

import { cn } from '~/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClassNames: Record<ButtonVariant, string> = {
  danger: 'bg-red text-white hover:opacity-90',
  ghost: 'text-text hover:bg-fill-secondary',
  primary: 'bg-accent text-white hover:opacity-90',
  secondary: 'border border-border bg-background text-text hover:bg-fill-tertiary',
};

const sizeClassNames: Record<ButtonSize, string> = {
  lg: 'h-9 px-3.5 text-[13.5px]',
  md: 'h-8 px-3 text-[13px]',
  sm: 'h-7 px-2.5 text-[12.5px]',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  ref?: React.RefObject<HTMLButtonElement | null>;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = ({
  ref,
  className,
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) => (
  <button
    disabled={disabled || loading}
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center gap-1.5 rounded-[6px] font-medium',
      'focus-visible:outline-none focus-visible:shadow-(--shadow-notion-ring)',
      'disabled:pointer-events-none disabled:opacity-50',
      'transition-[background-color,opacity,box-shadow] duration-150',
      variantClassNames[variant],
      sizeClassNames[size],
      className,
    )}
    {...props}
  >
    {loading && (
      <span className="size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
    )}
    {children}
  </button>
);
Button.displayName = 'Button';

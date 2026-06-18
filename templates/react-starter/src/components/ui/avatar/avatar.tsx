import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import type { ReactNode } from 'react';

import { cn } from '~/lib/cn';

type AvatarSize = 'sm' | 'md' | 'lg';

const sizeClassNames: Record<AvatarSize, string> = {
  lg: 'size-10 text-[14px]',
  md: 'size-8 text-[12.5px]',
  sm: 'size-6 text-[11px]',
};

export interface AvatarProps {
  alt?: string;
  className?: string;
  fallback?: ReactNode;
  shape?: 'circle' | 'square';
  size?: AvatarSize;
  src?: string;
}

export const Avatar = ({
  src,
  alt,
  fallback,
  size = 'md',
  shape = 'circle',
  className,
}: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn(
      'relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden',
      'bg-fill-secondary font-medium text-text-secondary',
      sizeClassNames[size],
      shape === 'circle' ? 'rounded-full' : 'rounded-[6px]',
      className,
    )}
  >
    {src && (
      <AvatarPrimitive.Image alt={alt} className="size-full object-cover" src={src} />
    )}
    <AvatarPrimitive.Fallback className="inline-flex size-full items-center justify-center">
      {fallback}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);

export { AvatarPrimitive };

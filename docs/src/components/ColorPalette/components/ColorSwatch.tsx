import { m } from 'motion/react'
import * as React from 'react'

interface ColorSwatchProps {
  name: string
  variants: {
    light: { srgb: string }
    dark: { srgb: string }
  }
  onClick: () => void
  showIcon?: boolean
  icon?: React.ReactNode
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  variants,
  onClick,
  showIcon = false,
  icon,
}) => {
  const displayName = name.replace('-', ' ')

  return (
    <m.div className="group" layout layoutId={name}>
      <button type="button" className="w-full text-left" onClick={onClick}>
        <div className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group-hover:scale-[1.02] border border-border relative">
          {/* Dark variant - bottom half */}
          <div
            className="h-1/2 w-full"
            style={{ backgroundColor: variants.dark.srgb }}
          />
          {/* Light variant - top half */}
          <div
            className="h-1/2 w-full"
            style={{ backgroundColor: variants.light.srgb }}
          />

          {/* Icon overlay for semantic colors */}
          {showIcon && icon && (
            <div className="absolute inset-0 flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
      </button>

      <p className="text-sm font-medium capitalize text-center">
        {displayName}
      </p>
    </m.div>
  )
}

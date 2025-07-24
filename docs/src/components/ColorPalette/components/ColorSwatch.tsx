import { Square, Type } from 'lucide-react'
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
  showTextIcon?: boolean
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  variants,
  onClick,
  showIcon = false,
  showTextIcon = false,
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
          {showIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              {showTextIcon ? (
                <Type className="w-6 h-6 text-white drop-shadow-lg" />
              ) : (
                <Square className="w-4 h-4 text-white/80 drop-shadow-lg" />
              )}
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

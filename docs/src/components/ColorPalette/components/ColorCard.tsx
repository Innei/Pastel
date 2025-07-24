import * as React from 'react'

import { CopyButton } from '../../ui/CopyButton'

interface ColorCardProps {
  colorName: string
  variants: any
  onClick: () => void
  onCopy?: (value: string) => void
  selectedChannel: 'oklch' | 'srgb' | 'p3'
  showLabels?: boolean
  aspectRatio?: string
  labelContent?: React.ReactNode
}

export const ColorCard: React.FC<ColorCardProps> = ({
  colorName,
  variants,
  onClick,
  onCopy,
  selectedChannel,
  showLabels = true,
  aspectRatio = 'aspect-square',
  labelContent,
}) => {
  const getColorValue = (colorVariant: any, mode: 'light' | 'dark') => {
    const colorData = colorVariant[mode]
    if (!colorData) return ''

    switch (selectedChannel) {
      case 'oklch': {
        return colorData.oklch || ''
      }
      case 'srgb': {
        return colorData.srgb || ''
      }
      case 'p3': {
        return colorData.p3 || colorData.srgb || ''
      }
      default: {
        return colorData.oklch || ''
      }
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="w-full text-left group"
        onClick={onClick}
      >
        <div
          className={`${aspectRatio} rounded-md overflow-hidden shadow hover:shadow-xl transition-all group-hover:scale-105 relative border border-border`}
        >
          {/* Dark variant - bottom right */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: variants.dark.srgb,
              clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          />
          {/* Light variant - top left */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: variants.light.srgb,
              clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
            }}
          />

          {/* Custom label content */}
          {labelContent && (
            <div className="absolute inset-0 flex items-center justify-center">
              {labelContent}
            </div>
          )}
        </div>
      </button>

      {showLabels && (
        <div className="space-y-1">
          <div className="px-1">
            <p className="text-sm font-medium capitalize">{colorName}</p>
            <p className="text-xs text-muted">
              {getColorValue(variants, 'light')}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Light:</span>
              <CopyButton
                value={getColorValue(variants, 'light')}
                label="Copy"
                onCopy={onCopy}
              />
            </div>
            <div className="text-xs text-text-secondary font-mono truncate">
              {getColorValue(variants, 'light')}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Dark:</span>
              <CopyButton
                value={getColorValue(variants, 'dark')}
                label="Copy"
                onCopy={onCopy}
              />
            </div>
            <div className="text-xs text-text-secondary font-mono truncate">
              {getColorValue(variants, 'dark')}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

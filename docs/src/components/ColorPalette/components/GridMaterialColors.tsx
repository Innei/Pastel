import { colorSystem } from '@pastel-palette/colors'
import { useTheme } from 'next-themes'
import * as React from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'

interface GridMaterialColorsProps {
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
}

interface MaterialSwatchProps {
  level: string
  variants: any
  selectedChannel: ColorChannel
  onClick: () => void

  isDark: boolean
}

const MaterialSwatch: React.FC<MaterialSwatchProps> = ({
  level,
  variants,

  onClick,
  selectedChannel,
  isDark,
}) => {
  return (
    <div className="group">
      <button type="button" className="w-full text-left" onClick={onClick}>
        <div className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group-hover:scale-[1.02] border border-border relative">
          {/* Background pattern to show transparency */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-blue-400" />

          {/* The actual material color overlay */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              backgroundColor:
                variants[isDark ? 'dark' : 'light'][selectedChannel],
            }}
          />

          {/* Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium capitalize text-center bg-background/90 px-2 py-1 rounded backdrop-blur-sm">
              {level.replaceAll(/([A-Z])/g, ' $1')}
            </span>
          </div>
        </div>
      </button>
      <p className="text-sm font-medium capitalize text-center">
        {level.replaceAll(/([A-Z])/g, ' $1')}
      </p>
    </div>
  )
}

export const GridMaterialColors: React.FC<GridMaterialColorsProps> = ({
  selectedVariant,
  selectedChannel,
  onColorClick,
}) => {
  const getMaterialColors = () => {
    switch (selectedVariant) {
      case 'regular': {
        return colorSystem.regular.material
      }
      case 'high-contrast': {
        return colorSystem['high-contrast'].material
      }
      case 'kawaii': {
        return colorSystem.kawaii.material
      }
      default: {
        return colorSystem.regular.material
      }
    }
  }

  const material = getMaterialColors()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="space-y-6">
      <div className="text-sm text-text-secondary">
        Material colors provide different levels of transparency for
        glass-morphism effects
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Object.entries(material).map(([level, variants]) => (
          <MaterialSwatch
            selectedChannel={selectedChannel}
            key={level}
            level={level}
            variants={variants}
            onClick={() =>
              onColorClick(`material-${level}`, 'material', variants)
            }
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  )
}

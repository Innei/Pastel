import { colorSystem } from '@pastel-palette/colors'
import { useTheme } from 'next-themes'
import * as React from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'
import { ColorCard } from './ColorCard'

interface MaterialColorsProps {
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
  onCopy: (value: string) => void
  
}

export const MaterialColors: React.FC<MaterialColorsProps> = ({
  selectedVariant,
  selectedChannel,
  onColorClick,
  onCopy,
  
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

  const isDark = useTheme().theme === 'dark'

  const renderLevelLabel = (level: string) => (
    <span className="text-xs font-medium capitalize text-center bg-background/90 px-2 py-1 rounded backdrop-blur-sm">
      {level.replaceAll(/([A-Z])/g, ' $1')}
    </span>
  )

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted mb-4">
        Material colors provide different levels of transparency for
        glass-morphism effects
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {Object.entries(material).map(([level, variants]) => (
          <ColorCard
            key={`material-${level}`}
            colorName={`material-${level}`}
            variants={variants}
            selectedChannel={selectedChannel}
            onClick={() =>
              onColorClick(`material-${level}`, 'material', variants)
            }
            onCopy={onCopy}
            
            labelContent={
              <div className="relative w-full h-full">
                {/* Background pattern to show transparency */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink to-blue" />

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
                  {renderLevelLabel(level)}
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  )
}

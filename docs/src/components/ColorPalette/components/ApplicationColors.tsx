import { colorSystem } from '@pastel-palette/colors'
import * as React from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'
import { ColorCard } from './ColorCard'

interface ApplicationColorsProps {
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
  onCopy: (value: string) => void
  
}

export const ApplicationColors: React.FC<ApplicationColorsProps> = ({
  selectedVariant,
  selectedChannel,
  onColorClick,
  onCopy,
  
}) => {
  const getApplicationColors = () => {
    switch (selectedVariant) {
      case 'regular': {
        return colorSystem.regular.application
      }
      case 'high-contrast': {
        return colorSystem['high-contrast'].application
      }
      case 'kawaii': {
        return colorSystem.kawaii.application
      }
      default: {
        return colorSystem.regular.application
      }
    }
  }

  const application = getApplicationColors()

  const renderSampleButton = () => (
    <span className="text-white font-medium bg-black/20 px-3 py-1 rounded backdrop-blur-sm">
      Sample Button
    </span>
  )

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted mb-4">
        Brand and accent colors for primary interactions and key UI elements
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.entries(application).map(([name, variants]) => (
          <div key={name} className="space-y-3">
            <h4 className="text-sm font-semibold capitalize">{name}</h4>
            <ColorCard
              colorName={`application-${name}`}
              variants={variants}
              selectedChannel={selectedChannel}
              onClick={() =>
                onColorClick(`application-${name}`, 'application', variants)
              }
              onCopy={onCopy}
              
              aspectRatio="aspect-[3/2]"
              labelContent={renderSampleButton()}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

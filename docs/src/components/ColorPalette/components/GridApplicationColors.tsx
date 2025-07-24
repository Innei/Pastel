import { colorSystem } from '@pastel-palette/colors'
import * as React from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'

interface GridApplicationColorsProps {
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
}

interface ApplicationSwatchProps {
  name: string
  variants: any

  onClick: () => void
}

const ApplicationSwatch: React.FC<ApplicationSwatchProps> = ({
  name,
  variants,

  onClick,
}) => {
  return (
    <div className="group">
      <button type="button" className="w-full text-left" onClick={onClick}>
        <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group-hover:scale-[1.02] border border-border relative">
          {/* Dark variant - bottom right triangle */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: variants.dark.srgb,
              clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          />
          {/* Light variant - top left triangle */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: variants.light.srgb,
              clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
            }}
          />

          {/* Sample content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-medium bg-black/20 px-2 py-1 rounded text-sm backdrop-blur-sm">
              {name}
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}

export const GridApplicationColors: React.FC<GridApplicationColorsProps> = ({
  selectedVariant,

  onColorClick,
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

  return (
    <div className="space-y-6">
      <div className="text-sm text-text-secondary">
        Brand and accent colors for primary interactions and key UI elements
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(application).map(([name, variants]) => (
          <ApplicationSwatch
            key={name}
            name={name}
            variants={variants}
            onClick={() =>
              onColorClick(`application-${name}`, 'application', variants)
            }
          />
        ))}
      </div>
    </div>
  )
}

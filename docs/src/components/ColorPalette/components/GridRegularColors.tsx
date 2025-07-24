import { colorSystem } from '@pastel-palette/colors'
import * as React from 'react'

import type { ColorCategory, ColorVariant, SortOrder } from '../types'
import { parseOKLCH } from '../utils/colorUtils'

interface GridRegularColorsProps {
  selectedVariant: ColorVariant
  sortOrder: SortOrder

  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
}

interface ColorSwatchProps {
  name: string
  variants: any

  onClick: () => void
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  variants,
  name,
  onClick,
}) => {
  return (
    <div className="group">
      <button type="button" className="w-full text-left" onClick={onClick}>
        <div className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group-hover:scale-[1.02] border border-border">
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
        </div>
      </button>
      <p className="text-sm font-medium capitalize text-center">{name}</p>
    </div>
  )
}

export const GridRegularColors: React.FC<GridRegularColorsProps> = ({
  selectedVariant,
  sortOrder,

  onColorClick,
}) => {
  const getColorsByVariant = () => {
    switch (selectedVariant) {
      case 'regular': {
        return colorSystem.regular.colors
      }
      case 'high-contrast': {
        return colorSystem['high-contrast'].colors
      }
      case 'kawaii': {
        return colorSystem.kawaii.colors
      }
      default: {
        return colorSystem.regular.colors
      }
    }
  }

  const getSortedColors = () => {
    const colors = getColorsByVariant()
    const colorEntries = Object.entries(colors)

    switch (sortOrder) {
      case 'alphabetical': {
        return colorEntries.sort(([a], [b]) => a.localeCompare(b))
      }
      case 'alphabetical-desc': {
        return colorEntries.sort(([a], [b]) => b.localeCompare(a))
      }
      case 'hue': {
        return colorEntries.sort(([, a], [, b]) => {
          const aHue = parseOKLCH(a.light.oklch).hue
          const bHue = parseOKLCH(b.light.oklch).hue
          return aHue - bHue
        })
      }
      case 'lightness': {
        return colorEntries.sort(([, a], [, b]) => {
          const aLightness = parseOKLCH(a.light.oklch).lightness
          const bLightness = parseOKLCH(b.light.oklch).lightness
          return bLightness - aLightness // Light to dark
        })
      }
      case 'saturation': {
        return colorEntries.sort(([, a], [, b]) => {
          const aChroma = parseOKLCH(a.light.oklch).chroma
          const bChroma = parseOKLCH(b.light.oklch).chroma
          return bChroma - aChroma // Vibrant to muted
        })
      }
      default: {
        return colorEntries
      }
    }
  }

  const sortedColors = getSortedColors()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {sortedColors.map(([name, variants]) => (
        <ColorSwatch
          key={name}
          name={name}
          variants={variants}
          onClick={() => onColorClick(name, 'regular', variants)}
        />
      ))}
    </div>
  )
}

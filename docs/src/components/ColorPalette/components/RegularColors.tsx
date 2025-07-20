import React from 'react'
import { colorPalette, kawaiiColorSystem } from '@pastel-palette/colors'
import { parseOKLCH } from '../utils/colorUtils'
import { ColorCard } from './ColorCard'
import type { ColorVariant, SortOrder, ColorChannel } from '../types'

interface RegularColorsProps {
  selectedVariant: ColorVariant
  sortOrder: SortOrder
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: string, data?: any) => void
  onCopy: (value: string) => void
  copiedColor: string | null
}

export const RegularColors: React.FC<RegularColorsProps> = ({
  selectedVariant,
  sortOrder,
  selectedChannel,
  onColorClick,
  onCopy,
  copiedColor,
}) => {
  const getColorsByVariant = () => {
    switch (selectedVariant) {
      case 'regular':
        return colorPalette.colors.regular
      case 'high-contrast':
        return colorPalette.colors.regularHighContrast
      case 'kawaii':
        return kawaiiColorSystem.regularKawaii
      default:
        return colorPalette.colors.regular
    }
  }

  const getSortedColors = () => {
    const colors = getColorsByVariant()
    const colorEntries = Object.entries(colors)

    switch (sortOrder) {
      case 'alphabetical':
        return colorEntries.sort(([a], [b]) => a.localeCompare(b))

      case 'alphabetical-desc':
        return colorEntries.sort(([a], [b]) => b.localeCompare(a))

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

      case 'default':
      default:
        return colorEntries
    }
  }

  const sortedColors = getSortedColors()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {sortedColors.map(([name, variants]) => (
        <ColorCard
          key={name}
          colorName={name}
          variants={variants}
          selectedChannel={selectedChannel}
          onClick={() => onColorClick(name, 'regular')}
          onCopy={onCopy}
          copiedColor={copiedColor}
        />
      ))}
    </div>
  )
}
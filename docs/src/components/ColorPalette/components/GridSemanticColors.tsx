import { colorSystem } from '@pastel-palette/colors'
import * as React from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'
import { ColorSwatch } from './ColorSwatch'

interface GridSemanticColorsProps {
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  selectedCategory: ColorCategory
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
  onCopy: (value: string) => void
}

export const GridSemanticColors: React.FC<GridSemanticColorsProps> = ({
  selectedVariant,
  selectedCategory,
  onColorClick,
}) => {
  const getColorData = () => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'
    const themeData = colorSystem[variant] || colorSystem.regular

    switch (selectedCategory) {
      case 'element': {
        return themeData.element || {}
      }
      case 'background': {
        return themeData.background || {}
      }
      case 'fill': {
        return themeData.fill || {}
      }
      default: {
        return {}
      }
    }
  }

  const colorData = getColorData()

  // Flatten nested structure for grid display
  const flattenedColors = React.useMemo(() => {
    const flattened: Array<{
      name: string
      variants: any
      showTextIcon: boolean
    }> = []

    Object.entries(colorData).forEach(([type, variants]) => {
      if (typeof variants === 'object' && 'light' in variants) {
        // Direct color variants
        flattened.push({
          name: type,
          variants,
          showTextIcon: type.includes('text'),
        })
      } else {
        // Nested structure (like text.primary, text.secondary)
        Object.entries(variants).forEach(([level, colorVariants]) => {
          flattened.push({
            name: `${type}-${level}`,
            variants: colorVariants,
            showTextIcon: type.includes('text'),
          })
        })
      }
    })

    return flattened
  }, [colorData])

  const getCategoryDescription = () => {
    switch (selectedCategory) {
      case 'element': {
        return 'Interactive element colors for buttons, links, and UI components'
      }
      case 'background': {
        return 'Background colors for different surface levels and contexts'
      }
      case 'fill': {
        return 'Fill colors for icons, illustrations, and graphic elements'
      }
      default: {
        return 'Semantic colors for consistent UI patterns'
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-sm text-text-secondary">
        {getCategoryDescription()}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {flattenedColors.map(({ name, variants, showTextIcon }) => (
          <ColorSwatch
            key={name}
            name={name}
            variants={variants}
            onClick={() => onColorClick(name, selectedCategory, variants)}
            showIcon={true}
            showTextIcon={showTextIcon}
          />
        ))}
      </div>
    </div>
  )
}

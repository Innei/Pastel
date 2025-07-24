import { colorSystem } from '@pastel-palette/colors'
import { Brush, RectangleHorizontal, Square, Type } from 'lucide-react'
import * as React from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'
import { ColorSwatch } from './ColorSwatch'

interface GridSemanticColorsProps {
  selectedVariant: ColorVariant
  selectedCategory: ColorCategory
  selectedChannel?: ColorChannel
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
  onCopy?: (value: string) => void
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
      icon: React.ReactNode
    }> = []

    Object.entries(colorData).forEach(([type, variants]) => {
      // Determine the appropriate icon based on color type and category
      const getIcon = (colorType: string, category: ColorCategory) => {
        if (colorType.includes('text')) {
          return <Type className="w-6 h-6 text-white drop-shadow-lg" />
        }

        switch (category) {
          case 'element': {
            return <Square className="w-4 h-4 text-white/80 drop-shadow-lg" />
          }
          case 'background': {
            return (
              <RectangleHorizontal className="w-4 h-4 text-white/80 drop-shadow-lg" />
            )
          }
          case 'fill': {
            return <Brush className="w-4 h-4 text-white/80 drop-shadow-lg" />
          }
          default: {
            return <Square className="w-4 h-4 text-white/80 drop-shadow-lg" />
          }
        }
      }

      if (typeof variants === 'object' && 'light' in variants) {
        // Direct color variants
        flattened.push({
          name: type,
          variants,
          icon: getIcon(type, selectedCategory),
        })
      } else {
        // Nested structure (like text.primary, text.secondary)
        Object.entries(variants).forEach(([level, colorVariants]) => {
          flattened.push({
            name: `${type}-${level}`,
            variants: colorVariants,
            icon: getIcon(type, selectedCategory),
          })
        })
      }
    })

    return flattened
  }, [colorData, selectedCategory])

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
        {flattenedColors.map(({ name, variants, icon }) => (
          <ColorSwatch
            key={name}
            name={name}
            variants={variants}
            onClick={() => onColorClick(name, selectedCategory, variants)}
            showIcon={true}
            icon={icon}
          />
        ))}
      </div>
    </div>
  )
}

import { colorSystem } from '@pastel-palette/colors'
import { Square, Type } from 'lucide-react'
import * as React from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'

interface GridSemanticColorsProps {
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  selectedCategory: ColorCategory
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
  onCopy: (value: string) => void
}

interface SemanticSwatchProps {
  name: string
  variants: any

  onClick: () => void

  showTextIcon?: boolean
}

const SemanticSwatch: React.FC<SemanticSwatchProps> = ({
  name,
  variants,

  onClick,

  showTextIcon = false,
}) => {
  return (
    <div className="group">
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

          {/* Icon overlay */}
          {showTextIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Type className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
          )}
          {!showTextIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Square className="w-4 h-4 text-white/80 drop-shadow-lg" />
            </div>
          )}
        </div>
      </button>

      <p className="text-sm font-medium capitalize text-center">
        {name.replace('-', ' ')}
      </p>
    </div>
  )
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
          <SemanticSwatch
            key={name}
            name={name}
            variants={variants}
            onClick={() => onColorClick(name, selectedCategory, variants)}
            showTextIcon={showTextIcon}
          />
        ))}
      </div>
    </div>
  )
}

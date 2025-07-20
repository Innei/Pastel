import { Layers, Palette, Square, Type } from 'lucide-react'

import type { ColorSection } from '../types'

export const colorSections: ColorSection[] = [
  {
    id: 'regular',
    title: 'Regular Colors',
    description: 'Base color palette with light and dark variants',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    id: 'semantic',
    title: 'Semantic Colors',
    description: 'UI element colors for text, borders, backgrounds',
    icon: <Type className="w-5 h-5" />,
  },
  {
    id: 'material',
    title: 'Material Colors',
    description: 'Translucent layers with different opacity levels',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    id: 'application',
    title: 'Application Colors',
    description: 'Brand and accent colors for key interactions',
    icon: <Square className="w-5 h-5" />,
  },
]

export const colorVariantOptions = [
  {
    value: 'regular',
    label: 'Regular',
    description: 'Standard contrast colors',
  },
  {
    value: 'high-contrast',
    label: 'High Contrast',
    description: 'Enhanced contrast for accessibility',
  },
  {
    value: 'kawaii',
    label: 'Kawaii',
    description: 'Soft, low contrast pastel colors',
  },
]

export const sortOptions = [
  {
    value: 'default',
    label: 'Default',
    description: 'Original order',
  },
  {
    value: 'alphabetical',
    label: 'Alphabetical (A-Z)',
    description: 'Sort by name ascending',
  },
  {
    value: 'alphabetical-desc',
    label: 'Alphabetical (Z-A)',
    description: 'Sort by name descending',
  },
  {
    value: 'hue',
    label: 'By Hue',
    description: 'Sort by color wheel position',
  },
  {
    value: 'lightness',
    label: 'By Lightness',
    description: 'Sort from light to dark',
  },
  {
    value: 'saturation',
    label: 'By Saturation',
    description: 'Sort from vibrant to muted',
  },
]

export const colorChannelOptions = [
  {
    value: 'oklch',
    label: 'OKLCH',
    description: 'OKLCH color space (perceptually uniform)',
  },
  {
    value: 'srgb',
    label: 'sRGB',
    description: 'sRGB color space (standard)',
  },
  {
    value: 'p3',
    label: 'P3',
    description: 'Display P3 color space (wide gamut)',
  },
]

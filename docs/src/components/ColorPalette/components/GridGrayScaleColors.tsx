import { colorSystem } from '@pastel-palette/colors'
import { useMemo } from 'react'

import type { ColorCategory, ColorVariant } from '../types'

interface GridGrayScaleColorsProps {
  selectedVariant: ColorVariant
  selectedChannel: 'oklch' | 'srgb' | 'p3'
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
}

export function GridGrayScaleColors({
  selectedVariant,
  selectedChannel,
  onColorClick,
}: GridGrayScaleColorsProps) {
  const grayScaleColors = useMemo(() => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'

    const themeData = colorSystem[variant]
    return themeData?.grayScale || {}
  }, [selectedVariant])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-text mb-2">
          Gray Scale Colors
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          10-level grayscale colors from dark to light, perfect for creating
          depth and hierarchy in your design.
        </p>
      </div>

      <div className="grid grid-cols-10">
        {Object.entries(grayScaleColors)
          .sort(([a], [b]) => {
            const numA = Number.parseInt(a.replace('gray', ''))
            const numB = Number.parseInt(b.replace('gray', ''))
            return numA - numB
          })
          .map(([name, color]) => (
            <div
              key={name}
              onClick={() => onColorClick(name, 'grayScale', color)}
            >
              <div className="aspect-square overflow-hidden">
                <div
                  className="w-full h-1/2"
                  style={{ backgroundColor: color.light[selectedChannel] }}
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <div
                  className="w-full h-1/2"
                  style={{ backgroundColor: color.dark.srgb }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

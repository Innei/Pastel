import type { RegularColorName } from '@pastel-palette/colors'
import { colorSystem } from '@pastel-palette/colors'
import { toast } from 'sonner'

import { Modal } from '../ui/Modal'
import type { ColorCategory, ColorVariant } from './types'

interface ColorModalProps {
  isOpen: boolean
  onClose: () => void
  colorName: string
  colorType: ColorCategory
  colorVariant: ColorVariant
  colorData?: any
  onCopy: (value: string) => void
}

interface ColorInfo {
  usage: string
  pairsWith: string
}

const colorInfoMap: Record<string, ColorInfo> = {
  blue: {
    usage: 'Primary buttons, links, and informational content',
    pairsWith: 'White, gray, and neutral backgrounds',
  },
  pink: {
    usage: 'Accent elements, highlights, and secondary actions',
    pairsWith: 'Purple, white, and light backgrounds',
  },
  purple: {
    usage: 'Premium features, creative content, and brand elements',
    pairsWith: 'Pink, blue, and neutral backgrounds',
  },
  green: {
    usage: 'Success states, positive actions, and environmental themes',
    pairsWith: 'White, gray, and earth tone backgrounds',
  },
  orange: {
    usage: 'Warning states, call-to-action elements, and energetic content',
    pairsWith: 'Yellow, red, and warm neutral backgrounds',
  },
  yellow: {
    usage: 'Attention-grabbing elements, highlights, and sunny themes',
    pairsWith: 'Orange, green, and light backgrounds',
  },
  sky: {
    usage: 'Secondary buttons, calm backgrounds, and air/space themes',
    pairsWith: 'Blue, white, and cool neutral backgrounds',
  },
  red: {
    usage: 'Error states, urgent actions, and passionate content',
    pairsWith: 'White, gray, and warm neutral backgrounds',
  },
  brown: {
    usage: 'Earth tones, vintage aesthetics, and warm content',
    pairsWith: 'Orange, yellow, and natural backgrounds',
  },
  gray: {
    usage: 'Borders and separators',
    pairsWith: 'Steps 1-5 backgrounds',
  },
  neutral: {
    usage: 'Text, icons, and neutral elements',
    pairsWith: 'All background colors',
  },
  black: {
    usage: 'High contrast text and strong emphasis',
    pairsWith: 'White and light backgrounds',
  },
  white: {
    usage: 'Clean backgrounds and high contrast elements',
    pairsWith: 'All dark and colored backgrounds',
  },
}

export function ColorModal({
  isOpen,
  onClose,
  colorName,
  colorType,
  colorVariant,
  colorData,
  onCopy,
}: ColorModalProps) {
  const getColorVariants = () => {
    // If colorData is provided (for non-regular colors), use it directly
    if (colorData) {
      return colorData
    }

    // For regular colors, use the original logic
    if (colorType === 'regular') {
      switch (colorVariant) {
        case 'regular': {
          return colorSystem.regular.colors[colorName as RegularColorName]
        }
        case 'high-contrast': {
          return colorSystem['high-contrast'].colors[
            colorName as RegularColorName
          ]
        }
        case 'kawaii': {
          return colorSystem.kawaii.colors[colorName as RegularColorName]
        }
        default: {
          return colorSystem.regular.colors[colorName as RegularColorName]
        }
      }
    }

    // For other color types, return null if no colorData provided
    return null
  }

  const colorVariants = getColorVariants()
  const colorInfo = colorInfoMap[colorName] || {
    usage: 'Various UI elements and design applications',
    pairsWith: 'Complementary colors and neutral backgrounds',
  }

  const handleCopy = async (value: string) => {
    onCopy(value)
    toast.success('Copied to clipboard!')
  }

  const renderColorValue = (label: string, value: string) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text-secondary">{label}</span>
      </div>
      <button
        type="button"
        onClick={() => handleCopy(value)}
        className="w-full select-all text-left p-3 overflow-x-auto rounded-md border border-border hover:border-border-secondary hover:bg-background-secondary transition-all duration-200"
      >
        <pre className="text-sm font-mono text-text">
          <code className="mr-3">{value}</code>
        </pre>
      </button>
    </div>
  )

  return (
    <Modal
      title={`${colorName.toLocaleUpperCase()} - ${
        colorType === 'regular'
          ? colorVariant.replace('-', ' ').toUpperCase()
          : colorType.toUpperCase()
      }`}
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      {colorVariants && (
        <div className="space-y-6">
          {/* Color Preview */}
          <div className="relative">
            <div
              className="w-full h-32 rounded-lg shadow-sm"
              style={{ backgroundColor: colorVariants.light.srgb }}
            />
          </div>

          {/* Color Name */}
          <div>
            <h2 className="text-xl font-semibold capitalize mb-1">
              {colorName}
            </h2>
          </div>

          {/* Usage and Pairs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">
                Usage
              </h3>
              <p className="text-sm text-text-tertiary">{colorInfo.usage}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">
                Pairs with
              </h3>
              <p className="text-sm text-text-tertiary">
                {colorInfo.pairsWith}
              </p>
            </div>
          </div>

          {/* Color Values */}
          <div className="space-y-6">
            {/* Light variant */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Light Variant</h3>
              <div className="space-y-2">
                {renderColorValue('OKLCH', colorVariants.light.oklch)}
                {renderColorValue('sRGB', colorVariants.light.srgb)}
                {colorVariants.light.p3 &&
                  renderColorValue('Display P3', colorVariants.light.p3)}
              </div>
            </div>

            {/* Dark variant */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Dark Variant</h3>
              <div className="space-y-2">
                {renderColorValue('OKLCH', colorVariants.dark.oklch)}
                {renderColorValue('sRGB', colorVariants.dark.srgb)}
                {colorVariants.dark.p3 &&
                  renderColorValue('Display P3', colorVariants.dark.p3)}
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}

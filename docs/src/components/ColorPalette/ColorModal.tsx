import { colorPalette, type RegularColorName } from '@pastel-palette/colors'
import { Modal } from '../ui/Modal'
import { toast } from 'sonner'

interface ColorModalProps {
  isOpen: boolean
  onClose: () => void
  colorName: string
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
  onCopy,
}: ColorModalProps) {
  const colorVariants =
    colorPalette.colors.regular[colorName as RegularColorName]
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
        onClick={() => handleCopy(value)}
        className="w-full text-left p-3 rounded-md border border-border hover:border-border-secondary hover:bg-background-secondary transition-all duration-200"
      >
        <span className="text-sm font-mono text-text">{value}</span>
      </button>
    </div>
  )

  return (
    <Modal
      title={colorName.toLocaleUpperCase()}
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
              <h3 className="text-sm font-medium text-text-secondary mb-2">Usage</h3>
              <p className="text-sm text-text-tertiary">{colorInfo.usage}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">
                Pairs with
              </h3>
              <p className="text-sm text-text-tertiary">{colorInfo.pairsWith}</p>
            </div>
          </div>

          {/* Color Values */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-text-secondary">Color Values</h3>

            {/* Light Variant */}
            <div>
              <h4 className="text-sm font-medium text-text-tertiary mb-3">
                Light Variant
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {renderColorValue('Solid color', colorVariants.light.srgb)}
                  {renderColorValue(
                    'Alpha color',
                    colorVariants.light.srgb
                      .replace('rgb(', 'rgba(')
                      .replace(')', ', 1)'),
                  )}
                </div>
                <div className="space-y-3">
                  {colorVariants.light.p3 &&
                    renderColorValue('P3 color', colorVariants.light.p3)}
                  {colorVariants.light.p3 &&
                    renderColorValue(
                      'P3 alpha',
                      colorVariants.light.p3.replace(/\)$/, ' / 1)'),
                    )}
                </div>
              </div>
              <div className="pt-2">
                {renderColorValue('OKLCH', colorVariants.light.oklch)}
              </div>
            </div>

            {/* Dark Variant */}
            <div>
              <h4 className="text-sm font-medium text-text-tertiary mb-3">
                Dark Variant
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {renderColorValue('Solid color', colorVariants.dark.srgb)}
                  {renderColorValue(
                    'Alpha color',
                    colorVariants.dark.srgb
                      .replace('rgb(', 'rgba(')
                      .replace(')', ', 1)'),
                  )}
                </div>
                <div className="space-y-3">
                  {colorVariants.dark.p3 &&
                    renderColorValue('P3 color', colorVariants.dark.p3)}
                  {colorVariants.dark.p3 &&
                    renderColorValue(
                      'P3 alpha',
                      colorVariants.dark.p3.replace(/\)$/, ' / 1)'),
                    )}
                </div>
              </div>
              <div className="pt-2">
                {renderColorValue('OKLCH', colorVariants.dark.oklch)}
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}

import { useState } from 'react'
import { Palette, Type, Layers, Square, Eye } from 'lucide-react'
import { ColorModal } from './ColorModal'
import { colorPalette, kawaiiColorSystem } from '@pastel-palette/colors'

type ColorCategory = 'regular' | 'semantic' | 'material' | 'application'

interface ColorSection {
  id: ColorCategory
  title: string
  description: string
  icon: React.ReactNode
}

const colorSections: ColorSection[] = [
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

export function ColorGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<ColorCategory>('regular')
  const [modalColor, setModalColor] = useState<string | null>(null)
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const handleColorClick = (colorName: string) => {
    setModalColor(colorName)
  }

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedColor(value)
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const renderRegularColors = () => {
    // Use regular colors - CSS variables will automatically switch to high-contrast when data-contrast-mode="high-contrast"
    const colors = colorPalette.colors.regular

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Object.entries(colors).map(([name, variants]) => (
          <div key={name} className="space-y-2">
            <button
              className="w-full text-left group"
              onClick={() => handleColorClick(name)}
            >
              <div className="space-y-1">
                <div className="aspect-square rounded-md overflow-hidden shadow hover:shadow-xl transition-all group-hover:scale-105 relative">
                  {/* Dark variant - bottom right */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: variants.dark.srgb,
                      clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                  />
                  {/* Light variant - top left */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: variants.light.srgb,
                      clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                    }}
                  />
                </div>
                <div className="px-1">
                  <p className="text-sm font-medium capitalize">{name}</p>
                  <p className="text-xs text-muted">{variants.light.srgb}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    )
  }

  const renderSemanticColors = () => {
    const { background, element, fill } = kawaiiColorSystem

    return (
      <div className="space-y-8">
        {/* Background Colors */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Square className="w-4 h-4" />
            Background Colors
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {Object.entries(background).map(([level, variants]) => (
              <div key={level} className="space-y-2">
                <div className="aspect-[4/3] rounded-md overflow-hidden border border-border">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: variants.light.srgb }}
                  >
                    <span className="text-xs font-medium text-gray-700 capitalize">
                      {level}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(variants.light.srgb)}
                  className="w-full text-xs text-left hover:text-blue-600 transition-colors"
                >
                  {copiedColor === variants.light.srgb
                    ? 'Copied!'
                    : variants.light.srgb}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Element Colors */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Type className="w-4 h-4" />
            Element Colors
          </h4>
          <div className="space-y-4">
            {Object.entries(element).map(([type, variants]) => (
              <div key={type} className="space-y-2">
                <h5 className="text-sm font-medium capitalize">
                  {type.replace(/([A-Z])/g, ' $1')}
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {typeof variants === 'object' && 'light' in variants ? (
                    <div className="space-y-1">
                      <div
                        className="h-12 rounded border border-border flex items-center justify-center"
                        style={{
                          backgroundColor: (variants as any).light.srgb,
                        }}
                      >
                        {type.includes('text') && (
                          <span
                            className="text-sm"
                            style={{
                              color:
                                (variants as any).light.srgb ===
                                'rgb(255 255 255)'
                                  ? 'black'
                                  : 'white',
                            }}
                          >
                            Sample Text
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => handleCopy((variants as any).light.srgb)}
                        className="w-full text-xs text-left hover:text-blue-600 transition-colors"
                      >
                        {copiedColor === (variants as any).light.srgb
                          ? 'Copied!'
                          : (variants as any).light.srgb}
                      </button>
                    </div>
                  ) : (
                    Object.entries(variants).map(
                      ([level, colorVariants]: [string, any]) => (
                        <div key={level} className="space-y-1">
                          <div
                            className="h-12 rounded border border-border flex items-center justify-center"
                            style={{
                              backgroundColor: colorVariants.light.srgb,
                            }}
                          >
                            {type.includes('text') && (
                              <span
                                className="text-xs"
                                style={{
                                  color:
                                    colorVariants.light.srgb ===
                                    'rgb(255 255 255)'
                                      ? 'black'
                                      : 'white',
                                }}
                              >
                                {level}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleCopy(colorVariants.light.srgb)}
                            className="w-full text-xs text-left hover:text-blue-600 transition-colors"
                          >
                            {copiedColor === colorVariants.light.srgb
                              ? 'Copied!'
                              : colorVariants.light.srgb}
                          </button>
                        </div>
                      ),
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fill Colors */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Fill Colors
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.entries(fill).map(([level, variants]) => (
              <div key={level} className="space-y-2">
                <div className="aspect-[4/3] rounded-md overflow-hidden border border-border">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: variants.light.srgb }}
                  >
                    <span className="text-xs font-medium text-gray-700 capitalize">
                      {level}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(variants.light.srgb)}
                  className="w-full text-xs text-left hover:text-blue-600 transition-colors"
                >
                  {copiedColor === variants.light.srgb
                    ? 'Copied!'
                    : variants.light.srgb}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderMaterialColors = () => {
    const { material } = kawaiiColorSystem

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted mb-4">
          Material colors provide different levels of transparency for
          glass-morphism effects
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {Object.entries(material).map(([level, variants]) => (
            <div key={level} className="space-y-2">
              <div className="aspect-square rounded-lg overflow-hidden border border-border relative">
                {/* Background pattern to show transparency */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-blue-200"></div>
                <div
                  className="absolute inset-0 backdrop-blur-sm"
                  style={{ backgroundColor: variants.light.srgb }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-700 capitalize text-center">
                    {level.replace(/([A-Z])/g, ' $1')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(variants.light.srgb)}
                className="w-full text-xs text-left hover:text-blue-600 transition-colors"
              >
                {copiedColor === variants.light.srgb
                  ? 'Copied!'
                  : variants.light.srgb}
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderApplicationColors = () => {
    const { application } = colorPalette.colors

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted mb-4">
          Brand and accent colors for primary interactions and key UI elements
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {Object.entries(application).map(([name, variants]) => (
            <div key={name} className="space-y-3">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold capitalize">{name}</h4>
                <div className="aspect-[3/2] rounded-lg overflow-hidden border border-border">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: variants.light.srgb }}
                  >
                    <span className="text-white font-medium">
                      Sample Button
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => handleCopy(variants.light.srgb)}
                  className="w-full flex items-center justify-between p-2 rounded border border-border hover:bg-muted transition-colors"
                >
                  <span className="text-xs font-medium">Light</span>
                  <span className="text-xs text-muted font-mono">
                    {copiedColor === variants.light.srgb
                      ? 'Copied!'
                      : variants.light.srgb}
                  </span>
                </button>
                <button
                  onClick={() => handleCopy(variants.dark.srgb)}
                  className="w-full flex items-center justify-between p-2 rounded border border-border hover:bg-muted transition-colors"
                >
                  <span className="text-xs font-medium">Dark</span>
                  <span className="text-xs text-muted font-mono">
                    {copiedColor === variants.dark.srgb
                      ? 'Copied!'
                      : variants.dark.srgb}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderColorContent = () => {
    switch (selectedCategory) {
      case 'regular':
        return renderRegularColors()
      case 'semantic':
        return renderSemanticColors()
      case 'material':
        return renderMaterialColors()
      case 'application':
        return renderApplicationColors()
      default:
        return renderRegularColors()
    }
  }

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="border-b border-border">
        <nav className="flex space-x-8">
          {colorSections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setSelectedCategory(section.id)
                setModalColor(null)
              }}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedCategory === section.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-secondary hover:text-text-tertiary hover:border-border'
              }`}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Category Description */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">
          {colorSections.find((s) => s.id === selectedCategory)?.title}
        </h3>
        <p className="text-text-secondary">
          {colorSections.find((s) => s.id === selectedCategory)?.description}
        </p>
      </div>

      {/* Color Content */}
      {renderColorContent()}

      {/* Color Modal */}

      <ColorModal
        isOpen={!!modalColor}
        onClose={() => setModalColor(null)}
        colorName={modalColor || ''}
        onCopy={handleCopy}
      />
    </div>
  )
}

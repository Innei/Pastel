import { useState } from 'react'
import { Palette, Type, Layers, Square, Eye } from 'lucide-react'
import { ColorModal } from './ColorModal'
import { colorPalette, kawaiiColorSystem } from '@pastel-palette/colors'
import { Dropdown } from '../ui/Dropdown'

type ColorCategory = 'regular' | 'semantic' | 'material' | 'application'
type ColorVariant = 'regular' | 'high-contrast' | 'kawaii'
type SortOrder =
  | 'default'
  | 'alphabetical'
  | 'alphabetical-desc'
  | 'hue'
  | 'lightness'
  | 'saturation'

type ColorChannel = 'oklch' | 'srgb' | 'p3'

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

const colorVariantOptions = [
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

const sortOptions = [
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

const colorChannelOptions = [
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

export function ColorGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<ColorCategory>('regular')
  const [selectedVariant, setSelectedVariant] =
    useState<ColorVariant>('regular')
  const [sortOrder, setSortOrder] = useState<SortOrder>('default')
  const [selectedChannel, setSelectedChannel] = useState<ColorChannel>('oklch')
  const [modalColor, setModalColor] = useState<{
    name: string
    type: ColorCategory
    data?: any
  } | null>(null)
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const handleColorClick = (
    colorName: string,
    type: ColorCategory = 'regular',
    data?: any,
  ) => {
    setModalColor({ name: colorName, type, data })
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

  const parseOKLCH = (oklchString: string) => {
    const match = oklchString.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/)
    if (!match) return { lightness: 0, chroma: 0, hue: 0 }
    return {
      lightness: parseFloat(match[1]),
      chroma: parseFloat(match[2]),
      hue: parseFloat(match[3]),
    }
  }

  const getColorValue = (colorVariant: any, mode: 'light' | 'dark') => {
    const colorData = colorVariant[mode]
    if (!colorData) return ''

    switch (selectedChannel) {
      case 'oklch':
        return colorData.oklch || ''
      case 'srgb':
        return colorData.srgb || ''
      case 'p3':
        return colorData.p3 || colorData.srgb || ''
      default:
        return colorData.oklch || ''
    }
  }

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

  const renderRegularColors = () => {
    const sortedColors = getSortedColors()

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sortedColors.map(([name, variants]) => (
          <div key={name} className="space-y-2">
            <button
              className="w-full text-left group"
              onClick={() => handleColorClick(name, 'regular')}
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
                  <p className="text-xs text-muted">
                    {getColorValue(variants, 'light')}
                  </p>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Object.entries(background).map(([level, variants]) => (
              <div key={level} className="space-y-2">
                <button
                  className="w-full text-left group"
                  onClick={() =>
                    handleColorClick(
                      `background-${level}`,
                      'semantic',
                      variants,
                    )
                  }
                >
                  <div className="aspect-square rounded-md overflow-hidden shadow hover:shadow-xl transition-all group-hover:scale-105 relative border border-border">
                    {/* Dark variant - bottom right */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundColor: variants.dark.srgb,
                        clipPath:
                          'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
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
                    {/* Level label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium capitalize bg-background/80 px-2 py-1 rounded backdrop-blur-sm">
                        {level}
                      </span>
                    </div>
                  </div>
                </button>
                <div className="space-y-1">
                  <button
                    onClick={() => handleCopy(getColorValue(variants, 'light'))}
                    className="w-full text-xs text-left hover:text-accent transition-colors"
                  >
                    <span className="font-medium">Light:</span>{' '}
                    {copiedColor === getColorValue(variants, 'light')
                      ? 'Copied!'
                      : getColorValue(variants, 'light')}
                  </button>
                  <button
                    onClick={() => handleCopy(getColorValue(variants, 'dark'))}
                    className="w-full text-xs text-left hover:text-accent transition-colors"
                  >
                    <span className="font-medium">Dark:</span>{' '}
                    {copiedColor === getColorValue(variants, 'dark')
                      ? 'Copied!'
                      : getColorValue(variants, 'dark')}
                  </button>
                </div>
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
          <div className="space-y-6">
            {Object.entries(element).map(([type, variants]) => (
              <div key={type} className="space-y-3">
                <h5 className="text-sm font-medium capitalize">
                  {type.replace(/([A-Z])/g, ' $1')}
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {typeof variants === 'object' && 'light' in variants ? (
                    <div className="space-y-2">
                      <button
                        className="w-full text-left group"
                        onClick={() =>
                          handleColorClick(`${type}`, 'semantic', variants)
                        }
                      >
                        <div className="aspect-[4/3] rounded-md overflow-hidden shadow hover:shadow-xl transition-all group-hover:scale-105 relative border border-border">
                          {/* Dark variant - bottom right */}
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundColor: (variants as any).dark.srgb,
                              clipPath:
                                'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
                            }}
                          />
                          {/* Light variant - top left */}
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundColor: (variants as any).light.srgb,
                              clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                            }}
                          />
                          {/* Sample text for text colors */}
                          {type.includes('text') && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded backdrop-blur-sm">
                                Aa
                              </span>
                            </div>
                          )}
                        </div>
                      </button>
                      <div className="space-y-1">
                        <button
                          onClick={() =>
                            handleCopy(getColorValue(variants as any, 'light'))
                          }
                          className="w-full text-xs text-left hover:text-accent transition-colors"
                        >
                          <span className="font-medium">Light:</span>{' '}
                          {copiedColor ===
                          getColorValue(variants as any, 'light')
                            ? 'Copied!'
                            : getColorValue(variants as any, 'light')}
                        </button>
                        <button
                          onClick={() =>
                            handleCopy(getColorValue(variants as any, 'dark'))
                          }
                          className="w-full text-xs text-left hover:text-accent transition-colors"
                        >
                          <span className="font-medium">Dark:</span>{' '}
                          {copiedColor ===
                          getColorValue(variants as any, 'dark')
                            ? 'Copied!'
                            : getColorValue(variants as any, 'dark')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    Object.entries(variants).map(
                      ([level, colorVariants]: [string, any]) => (
                        <div key={level} className="space-y-2">
                          <button
                            className="w-full text-left group"
                            onClick={() =>
                              handleColorClick(
                                `${type}-${level}`,
                                'semantic',
                                colorVariants,
                              )
                            }
                          >
                            <div className="aspect-[4/3] rounded-md overflow-hidden shadow hover:shadow-xl transition-all group-hover:scale-105 relative border border-border">
                              {/* Dark variant - bottom right */}
                              <div
                                className="absolute inset-0"
                                style={{
                                  backgroundColor: colorVariants.dark.srgb,
                                  clipPath:
                                    'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                }}
                              />
                              {/* Light variant - top left */}
                              <div
                                className="absolute inset-0"
                                style={{
                                  backgroundColor: colorVariants.light.srgb,
                                  clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                                }}
                              />
                              {/* Level and text sample */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs font-medium capitalize bg-background/80 px-2 py-1 rounded backdrop-blur-sm">
                                  {type.includes('text')
                                    ? `${level} Aa`
                                    : level}
                                </span>
                              </div>
                            </div>
                          </button>
                          <div className="space-y-1">
                            <button
                              onClick={() =>
                                handleCopy(
                                  getColorValue(colorVariants, 'light'),
                                )
                              }
                              className="w-full text-xs text-left hover:text-accent transition-colors"
                            >
                              <span className="font-medium">Light:</span>{' '}
                              {copiedColor ===
                              getColorValue(colorVariants, 'light')
                                ? 'Copied!'
                                : getColorValue(colorVariants, 'light')}
                            </button>
                            <button
                              onClick={() =>
                                handleCopy(getColorValue(colorVariants, 'dark'))
                              }
                              className="w-full text-xs text-left hover:text-accent transition-colors"
                            >
                              <span className="font-medium">Dark:</span>{' '}
                              {copiedColor ===
                              getColorValue(colorVariants, 'dark')
                                ? 'Copied!'
                                : getColorValue(colorVariants, 'dark')}
                            </button>
                          </div>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Object.entries(fill).map(([level, variants]) => (
              <div key={level} className="space-y-2">
                <button
                  className="w-full text-left group"
                  onClick={() =>
                    handleColorClick(`fill-${level}`, 'semantic', variants)
                  }
                >
                  <div className="aspect-square rounded-md overflow-hidden shadow hover:shadow-xl transition-all group-hover:scale-105 relative border border-border">
                    {/* Dark variant - bottom right */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundColor: variants.dark.srgb,
                        clipPath:
                          'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
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
                    {/* Level label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium capitalize bg-background/80 px-2 py-1 rounded backdrop-blur-sm">
                        {level}
                      </span>
                    </div>
                  </div>
                </button>
                <div className="space-y-1">
                  <button
                    onClick={() => handleCopy(getColorValue(variants, 'light'))}
                    className="w-full text-xs text-left hover:text-accent transition-colors"
                  >
                    <span className="font-medium">Light:</span>{' '}
                    {copiedColor === getColorValue(variants, 'light')
                      ? 'Copied!'
                      : getColorValue(variants, 'light')}
                  </button>
                  <button
                    onClick={() => handleCopy(getColorValue(variants, 'dark'))}
                    className="w-full text-xs text-left hover:text-accent transition-colors"
                  >
                    <span className="font-medium">Dark:</span>{' '}
                    {copiedColor === getColorValue(variants, 'dark')
                      ? 'Copied!'
                      : getColorValue(variants, 'dark')}
                  </button>
                </div>
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
              <button
                className="w-full text-left group"
                onClick={() =>
                  handleColorClick(`material-${level}`, 'material', variants)
                }
              >
                <div className="aspect-square rounded-lg overflow-hidden border border-border shadow hover:shadow-xl transition-all group-hover:scale-105 relative">
                  {/* Background pattern to show transparency */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-blue-200"></div>

                  {/* Dark variant - bottom right */}
                  <div
                    className="absolute inset-0 backdrop-blur-sm"
                    style={{
                      backgroundColor: variants.dark.srgb,
                      clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                  />
                  {/* Light variant - top left */}
                  <div
                    className="absolute inset-0 backdrop-blur-sm"
                    style={{
                      backgroundColor: variants.light.srgb,
                      clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                    }}
                  />

                  {/* Level label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium capitalize text-center bg-background/90 px-2 py-1 rounded backdrop-blur-sm">
                      {level.replace(/([A-Z])/g, ' $1')}
                    </span>
                  </div>
                </div>
              </button>
              <div className="space-y-1">
                <button
                  onClick={() => handleCopy(variants.light.srgb)}
                  className="w-full text-xs text-left hover:text-accent transition-colors"
                >
                  <span className="font-medium">Light:</span>{' '}
                  {copiedColor === variants.light.srgb
                    ? 'Copied!'
                    : variants.light.srgb}
                </button>
                <button
                  onClick={() => handleCopy(variants.dark.srgb)}
                  className="w-full text-xs text-left hover:text-accent transition-colors"
                >
                  <span className="font-medium">Dark:</span>{' '}
                  {copiedColor === variants.dark.srgb
                    ? 'Copied!'
                    : variants.dark.srgb}
                </button>
              </div>
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
              <h4 className="text-sm font-semibold capitalize">{name}</h4>
              <button
                className="w-full text-left group"
                onClick={() =>
                  handleColorClick(
                    `application-${name}`,
                    'application',
                    variants,
                  )
                }
              >
                <div className="aspect-[3/2] rounded-lg overflow-hidden shadow hover:shadow-xl transition-all group-hover:scale-105 relative border border-border">
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
                  {/* Sample button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-medium bg-black/20 px-3 py-1 rounded backdrop-blur-sm">
                      Sample Button
                    </span>
                  </div>
                </div>
              </button>
              <div className="space-y-1">
                <button
                  onClick={() => handleCopy(variants.light.srgb)}
                  className="w-full text-xs text-left hover:text-accent transition-colors"
                >
                  <span className="font-medium">Light:</span>{' '}
                  {copiedColor === variants.light.srgb
                    ? 'Copied!'
                    : variants.light.srgb}
                </button>
                <button
                  onClick={() => handleCopy(variants.dark.srgb)}
                  className="w-full text-xs text-left hover:text-accent transition-colors"
                >
                  <span className="font-medium">Dark:</span>{' '}
                  {copiedColor === variants.dark.srgb
                    ? 'Copied!'
                    : variants.dark.srgb}
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
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              {colorSections.find((s) => s.id === selectedCategory)?.title}
            </h3>
            <p className="text-text-secondary">
              {
                colorSections.find((s) => s.id === selectedCategory)
                  ?.description
              }
            </p>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Color Variant Selector and Sort Options - Only show for regular colors */}
            {selectedCategory === 'regular' && (
              <>
                <div className="flex flex-col gap-2 min-w-[200px]">
                  <label className="text-sm font-medium text-text-secondary">
                    Color Variant
                  </label>
                  <Dropdown
                    options={colorVariantOptions}
                    value={selectedVariant}
                    onChange={(value) =>
                      setSelectedVariant(value as ColorVariant)
                    }
                    placeholder="Select color variant"
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-[200px]">
                  <label className="text-sm font-medium text-text-secondary">
                    Sort Order
                  </label>
                  <Dropdown
                    options={sortOptions}
                    value={sortOrder}
                    onChange={(value) => setSortOrder(value as SortOrder)}
                    placeholder="Select sort order"
                  />
                </div>
              </>
            )}

            {/* Color Channel Selector - Always visible */}
            <div className="flex flex-col gap-2 min-w-[200px]">
              <label className="text-sm font-medium text-text-secondary">
                Color Channel
              </label>
              <Dropdown
                options={colorChannelOptions}
                value={selectedChannel}
                onChange={(value) => setSelectedChannel(value as ColorChannel)}
                placeholder="Select color channel"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Color Content */}
      {renderColorContent()}

      {/* Color Modal */}

      {modalColor && (
        <ColorModal
          isOpen={!!modalColor}
          onClose={() => setModalColor(null)}
          colorName={modalColor.name}
          colorType={modalColor.type}
          colorVariant={selectedVariant}
          colorData={modalColor.data}
          onCopy={handleCopy}
        />
      )}
    </div>
  )
}

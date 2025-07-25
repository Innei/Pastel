import { colorSystem } from '@pastel-palette/colors'
import { Search } from 'lucide-react'
import type { ReactNode } from 'react'
import { useCallback, useMemo } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

import type {
  ColorCategory,
  ColorChannel,
  ColorVariant,
  SortOrder,
} from '../types'
import { colorSections } from '../utils/constants'

// Types
interface ColorData {
  light: {
    oklch: string
    srgb: string
    p3?: string
  }
  dark: {
    oklch: string
    srgb: string
    p3?: string
  }
}

// Custom hooks
const useColorDisplay = (data: ColorData, selectedChannel: ColorChannel) => {
  return useMemo(() => {
    const lightColor = data.light
    const darkColor = data.dark
    const displayColor = lightColor[selectedChannel] || lightColor.oklch

    return {
      lightColor,
      darkColor,
      displayColor,
      lightBackground: lightColor.srgb || lightColor.oklch,
      darkBackground: darkColor.srgb || darkColor.oklch,
    }
  }, [data, selectedChannel])
}

// Utilities
const getVariantData = (selectedVariant: ColorVariant) => {
  const variant =
    selectedVariant === 'regular'
      ? 'regular'
      : selectedVariant === 'high-contrast'
      ? 'high-contrast'
      : 'kawaii'
  return colorSystem[variant] || colorSystem.regular
}

const flattenNestedColors = (
  data: Record<string, any>,
  prefix: string,
): [string, ColorData][] => {
  const flattened: [string, ColorData][] = []

  try {
    Object.entries(data || {}).forEach(([key, value]) => {
      if (
        value &&
        typeof value === 'object' &&
        'light' in value &&
        'dark' in value
      ) {
        flattened.push([`${prefix}${key}`, value as ColorData])
      }
    })
  } catch (error) {
    console.warn('Error flattening nested colors:', error)
  }

  return flattened
}

// ColorSidebar Context
interface SelectedColor {
  name: string
  category: ColorCategory
  data?: ColorData
}

interface ColorSidebarContextType {
  // Props from parent
  selectedCategory: ColorCategory
  selectedColor: SelectedColor | null
  searchQuery: string

  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  sortOrder: SortOrder

  // Event handlers
  onCategoryChange: (category: ColorCategory) => void
  onColorSelect: (
    name: string,
    category: ColorCategory,
    data?: ColorData,
  ) => void
  onSearchChange: (query: string) => void

  // Methods
  getRegularColors: () => [string, ColorData][]
  getGrayScaleColors: () => [string, ColorData][]
  getElementColors: () => [string, ColorData][]
  getBackgroundColors: () => [string, ColorData][]
  getFillColors: () => [string, ColorData][]
  getMaterialColors: () => [string, ColorData][]
  getApplicationColors: () => [string, ColorData][]
  filterColors: (colors: [string, ColorData][]) => [string, ColorData][]
  sortColors: (colors: [string, ColorData][]) => [string, ColorData][]
}

const ColorSidebarContext = createContext<ColorSidebarContextType>(
  {} as ColorSidebarContextType,
)

// ColorSidebar Provider
interface ColorSidebarProviderProps {
  children: ReactNode
  selectedCategory: ColorCategory
  selectedColor: SelectedColor | null
  searchQuery: string

  onCategoryChange: (category: ColorCategory) => void
  onColorSelect: (
    name: string,
    category: ColorCategory,
    data?: ColorData,
  ) => void
  onSearchChange: (query: string) => void
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  sortOrder: SortOrder
}

const ColorSidebarProvider = ({
  children,
  selectedCategory,
  selectedColor,
  searchQuery,

  onCategoryChange,
  onColorSelect,
  onSearchChange,
  selectedVariant,
  selectedChannel,
  sortOrder,
}: ColorSidebarProviderProps) => {
  // Get colors for regular category
  const getRegularColors = useCallback((): [string, ColorData][] => {
    try {
      const themeData = getVariantData(selectedVariant)
      const colorData = themeData?.colors || {}
      return Object.entries(colorData).filter(
        ([, value]) =>
          value &&
          typeof value === 'object' &&
          'light' in value &&
          'dark' in value,
      ) as [string, ColorData][]
    } catch (error) {
      console.warn('Error getting regular colors:', error)
      return []
    }
  }, [selectedVariant])

  // Get colors for grayScale category
  const getGrayScaleColors = useCallback((): [string, ColorData][] => {
    try {
      const themeData = getVariantData(selectedVariant)
      const grayScaleData = themeData?.grayScale || {}
      return Object.entries(grayScaleData).filter(
        ([, value]) =>
          value &&
          typeof value === 'object' &&
          'light' in value &&
          'dark' in value,
      ) as [string, ColorData][]
    } catch (error) {
      console.warn('Error getting gray scale colors:', error)
      return []
    }
  }, [selectedVariant])

  // Get individual color categories
  const getElementColors = useCallback((): [string, ColorData][] => {
    try {
      const themeData = getVariantData(selectedVariant)
      const elementData = themeData?.element || {}
      return flattenNestedColors(elementData, '')
    } catch (error) {
      console.warn('Error getting element colors:', error)
      return []
    }
  }, [selectedVariant])

  const getBackgroundColors = useCallback((): [string, ColorData][] => {
    try {
      const themeData = getVariantData(selectedVariant)
      const backgroundData = themeData?.background || {}
      return flattenNestedColors(backgroundData, 'background-')
    } catch (error) {
      console.warn('Error getting background colors:', error)
      return []
    }
  }, [selectedVariant])

  const getFillColors = useCallback((): [string, ColorData][] => {
    try {
      const themeData = getVariantData(selectedVariant)
      const fillData = themeData?.fill || {}
      return flattenNestedColors(fillData, 'fill-')
    } catch (error) {
      console.warn('Error getting fill colors:', error)
      return []
    }
  }, [selectedVariant])

  const getMaterialColors = useCallback((): [string, ColorData][] => {
    try {
      const themeData = getVariantData(selectedVariant)
      const materialData = themeData?.material || {}
      return Object.entries(materialData).filter(
        ([, value]) =>
          value &&
          typeof value === 'object' &&
          'light' in value &&
          'dark' in value,
      ) as [string, ColorData][]
    } catch (error) {
      console.warn('Error getting material colors:', error)
      return []
    }
  }, [selectedVariant])

  const getApplicationColors = useCallback((): [string, ColorData][] => {
    try {
      const themeData = getVariantData(selectedVariant)
      const applicationData = themeData?.application || {}
      return Object.entries(applicationData).filter(
        ([, value]) =>
          value &&
          typeof value === 'object' &&
          'light' in value &&
          'dark' in value,
      ) as [string, ColorData][]
    } catch (error) {
      console.warn('Error getting application colors:', error)
      return []
    }
  }, [selectedVariant])

  // Filter colors based on search query
  const filterColors = useCallback(
    (colors: [string, ColorData][]): [string, ColorData][] => {
      if (!searchQuery) return colors

      return colors.filter(([name]) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    },
    [searchQuery],
  )

  // Sort colors based on sort order
  const sortColors = useCallback(
    (colors: [string, ColorData][]): [string, ColorData][] => {
      if (sortOrder === 'default') return colors

      return [...colors].sort(([nameA], [nameB]) => {
        switch (sortOrder) {
          case 'alphabetical': {
            return nameA.localeCompare(nameB)
          }
          case 'alphabetical-desc': {
            return nameB.localeCompare(nameA)
          }
          default: {
            return 0
          }
        }
      })
    },
    [sortOrder],
  )

  const value: ColorSidebarContextType = useMemo(
    () => ({
      selectedCategory,
      selectedColor,
      searchQuery,
      selectedVariant,
      selectedChannel,
      sortOrder,
      onCategoryChange,
      onColorSelect,
      onSearchChange,
      getRegularColors,
      getGrayScaleColors,
      getElementColors,
      getBackgroundColors,
      getFillColors,
      getMaterialColors,
      getApplicationColors,
      filterColors,
      sortColors,
    }),
    [
      selectedCategory,
      selectedColor,
      searchQuery,
      selectedVariant,
      selectedChannel,
      sortOrder,
      onCategoryChange,
      onColorSelect,
      onSearchChange,
      getRegularColors,
      getGrayScaleColors,
      getElementColors,
      getBackgroundColors,
      getFillColors,
      getMaterialColors,
      getApplicationColors,
      filterColors,
      sortColors,
    ],
  )

  return (
    <ColorSidebarContext.Provider value={value}>
      {children}
    </ColorSidebarContext.Provider>
  )
}

// ColorItem Component
interface ColorItemProps {
  name: string
  data: ColorData
  category: ColorCategory
}

const ColorItem = ({ name, data, category }: ColorItemProps) => {
  const selectedColor = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.selectedColor,
  )
  const selectedChannel = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.selectedChannel,
  )
  const onColorSelect = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.onColorSelect,
  )

  const { lightBackground, darkBackground } = useColorDisplay(
    data,
    selectedChannel,
  )

  const isSelected = useMemo(
    () => selectedColor?.name === name && selectedColor?.category === category,
    [selectedColor?.name, selectedColor?.category, name, category],
  )

  const handleClick = useCallback(() => {
    onColorSelect(name, category, data)
  }, [name, category, data, onColorSelect])

  return (
    <div
      className={`group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${
        isSelected ? 'bg-accent text-white' : 'hover:bg-background-secondary'
      }`}
      onClick={handleClick}
    >
      {/* Color Preview */}
      <div className="relative w-4 h-4 rounded-sm overflow-hidden border border-border flex-shrink-0">
        <div
          className="absolute inset-0"
          style={{
            background: lightBackground,
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: darkBackground,
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          }}
        />
      </div>

      {/* Color Name */}
      <span className="text-sm flex-1 truncate">{name}</span>
    </div>
  )
}

// CategoryHeader Component
interface CategorySection {
  id: ColorCategory
  title: string
  icon: ReactNode
}

interface CategoryHeaderProps {
  section: CategorySection
  colorCount: number
}

const CategoryHeader = ({ section, colorCount }: CategoryHeaderProps) => {
  const selectedCategory = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.selectedCategory,
  )
  const onCategoryChange = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.onCategoryChange,
  )

  const handleClick = useCallback(() => {
    onCategoryChange(section.id)
  }, [section.id, onCategoryChange])

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${
        selectedCategory === section.id
          ? 'bg-accent/10 text-accent'
          : 'hover:bg-background-secondary'
      }`}
      onClick={handleClick}
    >
      {section.icon}
      <span className="text-sm font-medium flex-1">{section.title}</span>
      <span className="text-xs text-text-secondary bg-background-secondary px-2 py-0.5 rounded">
        {colorCount}
      </span>
    </div>
  )
}

// SearchBar Component
const SearchBar = () => {
  const searchQuery = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.searchQuery,
  )
  const onSearchChange = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.onSearchChange,
  )

  return (
    <div className="p-4 border-b h-18 border-border">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
        <input
          type="text"
          placeholder="Search colors..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm bg-background-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
    </div>
  )
}

// ColorCategories Component
const ColorCategories = () => {
  const selectedCategory = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.selectedCategory,
  )
  const contextValue = useContextSelector(ColorSidebarContext, (ctx) => ({
    getRegularColors: ctx.getRegularColors,
    getGrayScaleColors: ctx.getGrayScaleColors,
    getElementColors: ctx.getElementColors,
    getBackgroundColors: ctx.getBackgroundColors,
    getFillColors: ctx.getFillColors,
    getMaterialColors: ctx.getMaterialColors,
    getApplicationColors: ctx.getApplicationColors,
    filterColors: ctx.filterColors,
    sortColors: ctx.sortColors,
  }))

  const getColorsForSection = useCallback(
    (sectionId: ColorCategory): [string, ColorData][] => {
      switch (sectionId) {
        case 'regular': {
          return contextValue.getRegularColors()
        }
        case 'grayScale': {
          return contextValue.getGrayScaleColors()
        }
        case 'element': {
          return contextValue.getElementColors()
        }
        case 'background': {
          return contextValue.getBackgroundColors()
        }
        case 'fill': {
          return contextValue.getFillColors()
        }
        case 'material': {
          return contextValue.getMaterialColors()
        }
        case 'application': {
          return contextValue.getApplicationColors()
        }
        default: {
          return []
        }
      }
    },
    [contextValue],
  )

  return (
    <div className="space-y-2">
      {colorSections.map((section) => {
        const colors = getColorsForSection(section.id as ColorCategory)
        const colorCount = colors.length

        return (
          <div key={section.id} className="space-y-1">
            <CategoryHeader
              section={section as CategorySection}
              colorCount={colorCount}
            />

            {selectedCategory === section.id && (
              <div className="ml-3 space-y-1">
                {contextValue
                  .sortColors(contextValue.filterColors(colors))
                  .map(([name, data]) => (
                    <ColorItem
                      key={name}
                      name={name}
                      data={data}
                      category={section.id as ColorCategory}
                    />
                  ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// Main ColorSidebar Component
interface ColorSidebarProps {
  selectedCategory: ColorCategory
  selectedColor: SelectedColor | null
  searchQuery: string

  onCategoryChange: (category: ColorCategory) => void
  onColorSelect: (
    name: string,
    category: ColorCategory,
    data?: ColorData,
  ) => void
  onSearchChange: (query: string) => void
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  sortOrder: SortOrder
}

export function ColorSidebar(props: ColorSidebarProps) {
  return (
    <ColorSidebarProvider {...props}>
      <div className="w-80 bg-background border-r border-border flex flex-col h-screen">
        <SearchBar />

        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{ height: 'calc(100vh - 140px)' }}
        >
          <ColorCategories />
        </div>
      </div>
    </ColorSidebarProvider>
  )
}

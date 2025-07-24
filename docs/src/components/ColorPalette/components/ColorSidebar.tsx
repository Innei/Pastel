import { colorSystem } from '@pastel-palette/colors'
import {
  Search,
} from 'lucide-react'
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

// ColorSidebar Context
interface ColorSidebarContextType {
  // Props from parent
  selectedCategory: ColorCategory
  selectedColor: { name: string; category: ColorCategory; data?: any } | null
  searchQuery: string

  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  sortOrder: SortOrder

  // Event handlers
  onCategoryChange: (category: ColorCategory) => void
  onColorSelect: (name: string, category: ColorCategory, data?: any) => void
  onSearchChange: (query: string) => void

  // Methods
  getRegularColors: () => [string, any][]
  getElementColors: () => [string, any][]
  getBackgroundColors: () => [string, any][]
  getFillColors: () => [string, any][]
  getMaterialColors: () => [string, any][]
  getApplicationColors: () => [string, any][]
  filterColors: (colors: [string, any][]) => [string, any][]
  sortColors: (colors: [string, any][]) => [string, any][]
}

const ColorSidebarContext = createContext<ColorSidebarContextType>(
  {} as ColorSidebarContextType,
)

// ColorSidebar Provider
interface ColorSidebarProviderProps {
  children: ReactNode
  selectedCategory: ColorCategory
  selectedColor: { name: string; category: ColorCategory; data?: any } | null
  searchQuery: string

  onCategoryChange: (category: ColorCategory) => void
  onColorSelect: (name: string, category: ColorCategory, data?: any) => void
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
  const getRegularColors = useCallback(() => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'

    const colorData = colorSystem[variant]?.colors || colorSystem.regular.colors
    return Object.entries(colorData)
  }, [selectedVariant])

  // Get individual color categories
  const getElementColors = useCallback(() => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'
    const themeData = colorSystem[variant] || colorSystem.regular
    return Object.entries(themeData.element || {})
  }, [selectedVariant])

  const getBackgroundColors = useCallback(() => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'
    const themeData = colorSystem[variant] || colorSystem.regular
    return Object.entries(themeData.background || {})
  }, [selectedVariant])

  const getFillColors = useCallback(() => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'
    const themeData = colorSystem[variant] || colorSystem.regular
    return Object.entries(themeData.fill || {})
  }, [selectedVariant])

  const getMaterialColors = useCallback(() => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'
    const themeData = colorSystem[variant] || colorSystem.regular
    return Object.entries(themeData.material || {})
  }, [selectedVariant])

  const getApplicationColors = useCallback(() => {
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'
    const themeData = colorSystem[variant] || colorSystem.regular
    return Object.entries(themeData.application || {})
  }, [selectedVariant])

  // Filter colors based on search query
  const filterColors = useCallback(
    (colors: [string, any][]) => {
      if (!searchQuery) return colors

      return colors.filter(([name]) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    },
    [searchQuery],
  )

  // Sort colors based on sort order
  const sortColors = useCallback(
    (colors: [string, any][]) => {
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
  data: any
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

  const isSelected =
    selectedColor?.name === name && selectedColor?.category === category
  const lightColor = data?.light || data
  const darkColor = data?.dark || data
  const displayColor = lightColor?.[selectedChannel] || lightColor?.oklch || ''

  return (
    <div
      className={`group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${
        isSelected ? 'bg-accent text-white' : 'hover:bg-background-secondary'
      }`}
      onClick={() => onColorSelect(name, category, data)}
    >
      {/* Color Preview */}
      <div className="relative w-4 h-4 rounded-sm overflow-hidden border border-border flex-shrink-0">
        {darkColor && (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: lightColor?.srgb || lightColor?.oklch || '',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: darkColor?.srgb || darkColor?.oklch || '',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
              }}
            />
          </>
        )}
        {!darkColor && (
          <div className="w-full h-full" style={{ background: displayColor }} />
        )}
      </div>

      {/* Color Name */}
      <span className="text-sm flex-1 truncate">{name}</span>
    </div>
  )
}

// CategoryHeader Component
interface CategoryHeaderProps {
  section: any
  colorCount: number
}

const CategoryHeader = ({
  section,
  colorCount,
}: CategoryHeaderProps) => {
  const selectedCategory = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.selectedCategory,
  )
  const onCategoryChange = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.onCategoryChange,
  )

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${
        selectedCategory === section.id
          ? 'bg-accent/10 text-accent'
          : 'hover:bg-background-secondary'
      }`}
      onClick={() => onCategoryChange(section.id)}
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
  const getRegularColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.getRegularColors,
  )
  const getElementColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.getElementColors,
  )
  const getBackgroundColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.getBackgroundColors,
  )
  const getFillColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.getFillColors,
  )
  const getMaterialColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.getMaterialColors,
  )
  const getApplicationColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.getApplicationColors,
  )
  const filterColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.filterColors,
  )
  const sortColors = useContextSelector(
    ColorSidebarContext,
    (ctx) => ctx.sortColors,
  )

  return (
    <div className="space-y-2">
      {colorSections.map((section) => {
        let colors: [string, any][] = []
        let colorCount = 0

        switch (section.id) {
          case 'regular':
            colors = getRegularColors()
            break
          case 'element':
            colors = getElementColors()
            break
          case 'background':
            colors = getBackgroundColors()
            break
          case 'fill':
            colors = getFillColors()
            break
          case 'material':
            colors = getMaterialColors()
            break
          case 'application':
            colors = getApplicationColors()
            break
        }
        
        colorCount = colors.length

        return (
          <div key={section.id} className="space-y-1">
            <CategoryHeader
              section={section}
              colorCount={colorCount}
            />

            {selectedCategory === section.id && (
              <div className="ml-3 space-y-1">
                {sortColors(filterColors(colors)).map(([name, data]) => (
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
  selectedColor: { name: string; category: ColorCategory; data?: any } | null
  searchQuery: string

  onCategoryChange: (category: ColorCategory) => void
  onColorSelect: (name: string, category: ColorCategory, data?: any) => void
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

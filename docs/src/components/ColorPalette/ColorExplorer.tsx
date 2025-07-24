import { Command, Search } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { ColorCanvas } from './components/ColorCanvas'
import { ColorSidebar } from './components/ColorSidebar'
import { ColorTimeline } from './components/ColorTimeline'
import { CommandPalette } from './components/CommandPalette'
import type {
  ColorCategory,
  ColorChannel,
  ColorVariant,
  SortOrder,
} from './types'

type SelectedColor = {
  name: string
  category: ColorCategory
  data?: any
} | null

export function ColorExplorer() {
  // Core state
  const [selectedCategory, setSelectedCategory] =
    useState<ColorCategory>('regular')
  const [selectedVariant, setSelectedVariant] =
    useState<ColorVariant>('regular')
  const [sortOrder, setSortOrder] = useState<SortOrder>('default')
  const [selectedChannel, setSelectedChannel] = useState<ColorChannel>('oklch')
  const [selectedColor, setSelectedColor] = useState<SelectedColor>(null)

  // UI state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [recentColors, setRecentColors] = useState<string[]>([])

  const [isMobile, setIsMobile] = useState(false)

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command palette shortcut (Cmd/Ctrl + K)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen(true)
      }

      // Escape to close command palette
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setIsCommandPaletteOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isCommandPaletteOpen, selectedColor])

  const handleColorSelect = useCallback(
    (colorName: string, category: ColorCategory, data?: any) => {
      const newSelection = { name: colorName, category, data }
      setSelectedColor(newSelection)

      // Add to recent colors
      setRecentColors((prev) => {
        const filtered = prev.filter((c) => c !== colorName)
        return [colorName, ...filtered].slice(0, 10)
      })
    },
    [],
  )

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Mobile Timeline Layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Color Explorer</h1>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsCommandPaletteOpen(true)}
                className="p-2 rounded-md hover:bg-background-secondary"
                title="Search colors (⌘K)"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="mt-3 flex gap-2 overflow-x-auto">
            <select
              value={selectedVariant}
              onChange={(e) =>
                setSelectedVariant(e.target.value as ColorVariant)
              }
              className="px-3 py-1 text-sm bg-background-secondary border border-border rounded-md"
            >
              <option value="regular">Regular</option>
              <option value="high-contrast">High Contrast</option>
              <option value="kawaii">Kawaii</option>
            </select>
            <select
              value={selectedChannel}
              onChange={(e) =>
                setSelectedChannel(e.target.value as ColorChannel)
              }
              className="px-3 py-1 text-sm bg-background-secondary border border-border rounded-md"
            >
              <option value="oklch">OKLCH</option>
              <option value="srgb">sRGB</option>
              <option value="p3">P3</option>
            </select>
          </div>
        </div>

        {/* Timeline Component */}
        <ColorTimeline
          selectedCategory={selectedCategory}
          selectedVariant={selectedVariant}
          selectedChannel={selectedChannel}
          onColorSelect={handleColorSelect}
          onCopy={handleCopy}
          onCategoryChange={setSelectedCategory}
        />

        {/* Command Palette */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onColorSelect={handleColorSelect}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          recentColors={recentColors}
          selectedChannel={selectedChannel}
          selectedVariant={selectedVariant}
          onCopy={handleCopy}
        />
      </div>
    )
  }

  // Desktop Sidebar + Canvas Layout
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <ColorSidebar
        selectedCategory={selectedCategory}
        selectedColor={selectedColor}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onColorSelect={handleColorSelect}
        onSearchChange={setSearchQuery}
        selectedVariant={selectedVariant}
        selectedChannel={selectedChannel}
        sortOrder={sortOrder}
      />

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border px-6 py-4 h-18">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Color Explorer</h1>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <kbd className="px-2 py-1 bg-background-secondary border border-border rounded text-xs">
                  ⌘K
                </kbd>
                <span>to search</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Controls */}
              <select
                value={selectedVariant}
                onChange={(e) =>
                  setSelectedVariant(e.target.value as ColorVariant)
                }
                className="px-3 py-2 bg-background-secondary border border-border rounded-md text-sm"
              >
                <option value="regular">Regular</option>
                <option value="high-contrast">High Contrast</option>
                <option value="kawaii">Kawaii</option>
              </select>

              <select
                value={selectedChannel}
                onChange={(e) =>
                  setSelectedChannel(e.target.value as ColorChannel)
                }
                className="px-3 py-2 bg-background-secondary border border-border rounded-md text-sm"
              >
                <option value="oklch">OKLCH</option>
                <option value="srgb">sRGB</option>
                <option value="p3">P3</option>
              </select>

              {selectedCategory === 'regular' && (
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                  className="px-3 py-2 bg-background-secondary border border-border rounded-md text-sm"
                >
                  <option value="default">Default</option>
                  <option value="alphabetical">A-Z</option>
                  <option value="alphabetical-desc">Z-A</option>
                  <option value="hue">By Hue</option>
                  <option value="lightness">By Lightness</option>
                  <option value="saturation">By Saturation</option>
                </select>
              )}

              <button
                type="button"
                onClick={() => setIsCommandPaletteOpen(true)}
                className="p-2 rounded-md hover:bg-background-secondary border border-border"
                title="Command Palette (⌘K)"
              >
                <Command className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <ColorCanvas
          selectedColor={selectedColor}
          selectedChannel={selectedChannel}
          selectedVariant={selectedVariant}
          onCopy={handleCopy}
        />
      </div>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onColorSelect={handleColorSelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        recentColors={recentColors}
        selectedChannel={selectedChannel}
        selectedVariant={selectedVariant}
        onCopy={handleCopy}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  )
}

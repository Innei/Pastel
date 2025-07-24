import { Command, Search } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/Select'
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
                  ⌘ K
                </kbd>
                <span>to Search</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Controls */}
              <Select
                value={selectedVariant}
                onValueChange={(value) =>
                  setSelectedVariant(value as ColorVariant)
                }
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="high-contrast">High Contrast</SelectItem>
                  <SelectItem value="kawaii">Kawaii</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={selectedChannel}
                onValueChange={(value) =>
                  setSelectedChannel(value as ColorChannel)
                }
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oklch">OKLCH</SelectItem>
                  <SelectItem value="srgb">sRGB</SelectItem>
                  <SelectItem value="p3">P3</SelectItem>
                </SelectContent>
              </Select>

              {selectedCategory === 'regular' && (
                <Select
                  value={sortOrder}
                  onValueChange={(value) => setSortOrder(value as SortOrder)}
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                    <SelectItem value="alphabetical-desc">Z-A</SelectItem>
                    <SelectItem value="hue">By Hue</SelectItem>
                    <SelectItem value="lightness">By Lightness</SelectItem>
                    <SelectItem value="saturation">By Saturation</SelectItem>
                  </SelectContent>
                </Select>
              )}

              <button
                type="button"
                onClick={() => setIsCommandPaletteOpen(true)}
                className="p-2 rounded-md hover:bg-background-secondary border border-border"
                title="Command Palette (⌘ + K)"
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

import { colorSystem } from '@pastel-palette/colors'
import { ArrowRight, Command, Search, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { ColorCategory, ColorChannel, ColorVariant } from '../types'
import { colorSections } from '../utils/constants'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  onColorSelect: (name: string, category: ColorCategory, data?: any) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  recentColors: string[]

  selectedChannel: ColorChannel
  selectedVariant: ColorVariant
  onCopy: (value: string) => void
  onCategoryChange?: (category: ColorCategory) => void
}

interface SearchResult {
  type: 'color' | 'action' | 'category'
  name: string
  category?: ColorCategory
  data?: any
  description?: string
  action?: () => void
  shortcut?: string
}

export function CommandPalette({
  isOpen,
  onClose,
  onColorSelect,
  searchQuery,
  onSearchChange,
  recentColors,
  selectedChannel,
  selectedVariant,
  onCopy,
  onCategoryChange,
}: CommandPaletteProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  // Export CSS functionality
  const exportAsCSS = () => {
    try {
      // Generate CSS variables for current variant
      const variant =
        selectedVariant === 'regular'
          ? 'regular'
          : selectedVariant === 'high-contrast'
          ? 'high-contrast'
          : 'kawaii'
      const theme = colorSystem[variant] || colorSystem.regular

      const cssLines: string[] = [
        '/* Generated color theme CSS variables */',
        ':root {',
        '  /* Regular colors */',
      ]

      // Regular colors
      Object.entries(theme.colors).forEach(([name, colorData]) => {
        const lightValue =
          colorData.light[selectedChannel] || colorData.light.srgb
        const darkValue = colorData.dark[selectedChannel] || colorData.dark.srgb
        cssLines.push(`  --color-${name}: ${lightValue};`)
        cssLines.push(`  --color-${name}-dark: ${darkValue};`)
      })

      cssLines.push('', '  /* Semantic colors */')

      // Element colors
      Object.entries(theme.element).forEach(([name, depthColors]) => {
        Object.entries(depthColors).forEach(([depth, colorData]) => {
          const lightValue =
            colorData.light[selectedChannel] || colorData.light.srgb
          const darkValue =
            colorData.dark[selectedChannel] || colorData.dark.srgb
          const varName = depth === 'primary' ? name : `${name}-${depth}`
          cssLines.push(`  --color-${varName}: ${lightValue};`)
          cssLines.push(`  --color-${varName}-dark: ${darkValue};`)
        })
      })

      // Background colors
      Object.entries(theme.background).forEach(([depth, colorData]) => {
        const lightValue =
          colorData.light[selectedChannel] || colorData.light.srgb
        const darkValue = colorData.dark[selectedChannel] || colorData.dark.srgb
        const varName =
          depth === 'primary' ? 'background' : `background-${depth}`
        cssLines.push(`  --color-${varName}: ${lightValue};`)
        cssLines.push(`  --color-${varName}-dark: ${darkValue};`)
      })

      // Fill colors
      Object.entries(theme.fill).forEach(([depth, colorData]) => {
        const lightValue =
          colorData.light[selectedChannel] || colorData.light.srgb
        const darkValue = colorData.dark[selectedChannel] || colorData.dark.srgb
        const varName = depth === 'primary' ? 'fill' : `fill-${depth}`
        cssLines.push(`  --color-${varName}: ${lightValue};`)
        cssLines.push(`  --color-${varName}-dark: ${darkValue};`)
      })

      // Material colors
      Object.entries(theme.material).forEach(([opacity, colorData]) => {
        const lightValue =
          colorData.light[selectedChannel] || colorData.light.srgb
        const darkValue = colorData.dark[selectedChannel] || colorData.dark.srgb
        cssLines.push(
          `  --color-material-${opacity.toLowerCase()}: ${lightValue};`,
        )
        cssLines.push(
          `  --color-material-${opacity.toLowerCase()}-dark: ${darkValue};`,
        )
      })

      // Application colors
      Object.entries(theme.application).forEach(([name, colorData]) => {
        const lightValue =
          colorData.light[selectedChannel] || colorData.light.srgb
        const darkValue = colorData.dark[selectedChannel] || colorData.dark.srgb
        cssLines.push(`  --color-${name}: ${lightValue};`)
        cssLines.push(`  --color-${name}-dark: ${darkValue};`)
      })

      cssLines.push('}')
      cssLines.push('')
      cssLines.push('/* Dark mode overrides */')
      cssLines.push('@media (prefers-color-scheme: dark) {')
      cssLines.push('  :root {')

      // Add dark mode overrides
      Object.entries(theme.colors).forEach(([name]) => {
        cssLines.push(`    --color-${name}: var(--color-${name}-dark);`)
      })

      Object.entries(theme.element).forEach(([name, depthColors]) => {
        Object.entries(depthColors).forEach(([depth]) => {
          const varName = depth === 'primary' ? name : `${name}-${depth}`
          cssLines.push(`    --color-${varName}: var(--color-${varName}-dark);`)
        })
      })

      Object.entries(theme.background).forEach(([depth]) => {
        const varName =
          depth === 'primary' ? 'background' : `background-${depth}`
        cssLines.push(`    --color-${varName}: var(--color-${varName}-dark);`)
      })

      Object.entries(theme.fill).forEach(([depth]) => {
        const varName = depth === 'primary' ? 'fill' : `fill-${depth}`
        cssLines.push(`    --color-${varName}: var(--color-${varName}-dark);`)
      })

      Object.entries(theme.material).forEach(([opacity]) => {
        cssLines.push(
          `    --color-material-${opacity.toLowerCase()}: var(--color-material-${opacity.toLowerCase()}-dark);`,
        )
      })

      Object.entries(theme.application).forEach(([name]) => {
        cssLines.push(`    --color-${name}: var(--color-${name}-dark);`)
      })

      cssLines.push('  }')
      cssLines.push('}')

      const cssContent = cssLines.join('\n')
      const blob = new Blob([cssContent], { type: 'text/css' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `color-theme-${variant}-${selectedChannel}.css`
      document.body.append(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Failed to export CSS:', error)
    }
  }

  // Navigate to category functionality
  const navigateToCategory = (categoryId: ColorCategory) => {
    if (onCategoryChange) {
      onCategoryChange(categoryId)
    }
  }

  // Get all available colors
  const getAllColors = (): SearchResult[] => {
    const results: SearchResult[] = []

    // Regular colors
    const variant =
      selectedVariant === 'regular'
        ? 'regular'
        : selectedVariant === 'high-contrast'
        ? 'high-contrast'
        : 'kawaii'
    const regularColorData =
      colorSystem[variant]?.colors || colorSystem.regular.colors

    Object.entries(regularColorData).forEach(([name, data]) => {
      results.push({
        type: 'color',
        name,
        category: 'regular',
        data,
        description: `Regular color • ${selectedChannel.toUpperCase()}`,
      })
    })

    // Semantic colors
    const themeData = colorSystem[variant] || colorSystem.regular
    const semanticCategories = ['element', 'background', 'fill', 'material', 'application']
    semanticCategories.forEach((category) => {
      const categoryData = themeData[category as keyof typeof themeData] || {}
      Object.entries(categoryData).forEach(([name, data]) => {
        results.push({
          type: 'color',
          name,
          category: category as ColorCategory,
          data,
          description: `${category.charAt(0).toUpperCase() + category.slice(1)} color`,
        })
      })
    })

    return results
  }

  // Search and filter results
  const getSearchResults = (): SearchResult[] => {
    const query = searchQuery.toLowerCase().trim()

    if (!query) {
      // Show recent and favorites when no search
      const results: SearchResult[] = []

      // Add quick actions
      results.push({
        type: 'action',
        name: 'Export colors as CSS',
        description: 'Download CSS variables for all colors',
        action: () => {
          exportAsCSS()
          onClose()
        },
      })

      // Add recent colors
      recentColors.slice(0, 5).forEach((colorName) => {
        const allColors = getAllColors()
        const colorResult = allColors.find((c) => c.name === colorName)
        if (colorResult) {
          results.push({
            ...colorResult,
            description: `Recent • ${colorResult.description}`,
          })
        }
      })

      return results
    }

    // Search in colors
    const allColors = getAllColors()
    const colorResults = allColors.filter(
      (color) =>
        color.name.toLowerCase().includes(query) ||
        color.description?.toLowerCase().includes(query),
    )

    // Search in categories
    const categoryResults = colorSections
      .filter(
        (section) =>
          section.title.toLowerCase().includes(query) ||
          section.description.toLowerCase().includes(query),
      )
      .map((section) => ({
        type: 'category' as const,
        name: section.title,
        category: section.id,
        description: section.description,
        action: () => {
          navigateToCategory(section.id)
          onClose()
        },
      }))

    // Search in actions
    const actionResults: SearchResult[] = []
    if (
      query.includes('export') ||
      query.includes('download') ||
      query.includes('css')
    ) {
      actionResults.push({
        type: 'action',
        name: 'Export colors as CSS',
        description: 'Download CSS variables for all colors',
        action: () => {
          exportAsCSS()
          onClose()
        },
      })
    }

    if (query.includes('copy') && colorResults.length > 0) {
      const firstColor = colorResults[0]
      if (firstColor.data) {
        const colorValue =
          firstColor.data.light?.[selectedChannel] ||
          firstColor.data.dark?.[selectedChannel] ||
          firstColor.data[selectedChannel] ||
          firstColor.data.oklch ||
          ''

        actionResults.push({
          type: 'action',
          name: `Copy ${firstColor.name}`,
          description: `Copy ${colorValue} to clipboard`,
          action: () => {
            onCopy(colorValue)
            onClose()
          },
          shortcut: '⌘C',
        })
      }
    }

    return [...colorResults, ...categoryResults, ...actionResults].slice(0, 10)
  }

  const results = getSearchResults()

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % results.length)
          break
        }
        case 'ArrowUp': {
          e.preventDefault()
          setSelectedIndex(
            (prev) => (prev - 1 + results.length) % results.length,
          )
          break
        }
        case 'Enter': {
          e.preventDefault()
          const selected = results[selectedIndex]
          if (selected) {
            if (selected.type === 'color') {
              onColorSelect(
                selected.name,
                selected.category || 'regular',
                selected.data,
              )
            } else if (selected.action) {
              selected.action()
            }
            onClose()
          }
          break
        }
        case 'Escape': {
          onClose()
          break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, onColorSelect, onClose])

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [selectedIndex])

  if (!isOpen) return null

  const ResultItem = ({
    result,
    index,
  }: {
    result: SearchResult
    index: number
  }) => {
    const isSelected = index === selectedIndex

    return (
      <div
        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
          isSelected ? 'bg-accent text-white' : 'hover:bg-background-secondary'
        }`}
        onClick={() => {
          if (result.type === 'color') {
            onColorSelect(
              result.name,
              result.category || 'regular',
              result.data,
            )
          } else if (result.action) {
            result.action()
          }
          onClose()
        }}
      >
        {/* Icon */}
        <div className="flex-shrink-0">
          {result.type === 'color' && (
            <div className="relative w-6 h-6 rounded-md border border-border overflow-hidden">
              {result.data?.light && result.data?.dark ? (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        result.data.light.srgb || result.data.light.oklch,
                      clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        result.data.dark.srgb || result.data.dark.oklch,
                      clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                    }}
                  />
                </>
              ) : (
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      result.data?.srgb || result.data?.oklch || '#ccc',
                  }}
                />
              )}
            </div>
          )}
          {result.type === 'action' && <Zap className="w-5 h-5" />}
          {result.type === 'category' && <Command className="w-5 h-5" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">{result.name}</div>
          {result.description && (
            <div
              className={`text-sm truncate ${
                isSelected ? 'text-white/70' : 'text-text-secondary'
              }`}
            >
              {result.description}
            </div>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {result.shortcut && (
            <kbd
              className={`px-2 py-1 text-xs rounded ${
                isSelected
                  ? 'bg-white/20 text-white'
                  : 'bg-background-secondary text-text-secondary'
              }`}
            >
              {result.shortcut}
            </kbd>
          )}
          <ArrowRight className="w-4 h-4 opacity-50" />
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Command Palette */}
      <div className="relative w-full max-w-2xl bg-background border border-border rounded-lg shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
          <Search className="w-5 h-5 text-text-secondary" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search colors, actions, or type a command..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-text-secondary"
          />
          <kbd className="px-2 py-1 text-xs bg-background-secondary border border-border rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={resultsRef} className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <ResultItem
                  key={`${result.type}-${result.name}-${index}`}
                  result={result}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-text-secondary">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
              <div className="text-sm">
                {searchQuery
                  ? 'No results found'
                  : 'Start typing to search colors...'}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-border bg-background-secondary/50">
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-background border border-border rounded">
                  ↑↓
                </kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-background border border-border rounded">
                  ↵
                </kbd>
                <span>Select</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span>Powered by</span>
              <Command className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

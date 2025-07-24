import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Copy, Eye } from 'lucide-react'
import { CopyButton } from '../../ui/CopyButton'

import { colorSystem } from '@pastel-palette/colors'
import { colorSections } from '../utils/constants'
import type { ColorCategory, ColorChannel, ColorVariant } from '../types'

interface ColorTimelineProps {
  selectedCategory: ColorCategory
  selectedVariant: ColorVariant
  selectedChannel: ColorChannel
  onColorSelect: (name: string, category: ColorCategory, data?: any) => void
  onCopy: (value: string) => void
  
  onCategoryChange: (category: ColorCategory) => void
}

export function ColorTimeline({
  selectedCategory,
  selectedVariant,
  selectedChannel,
  onColorSelect,
  onCopy,
  
  onCategoryChange,
}: ColorTimelineProps) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Get colors for the selected category
  const getColors = () => {
    if (selectedCategory === 'regular') {
      const variant = selectedVariant === 'regular' ? 'regular' : 
                     selectedVariant === 'high-contrast' ? 'high-contrast' : 'kawaii'
      const colorData = colorSystem[variant]?.colors || colorSystem.regular.colors
      return Object.entries(colorData).map(([name, data]) => ({ name, data, category: 'regular' as ColorCategory }))
    }
    
    // Handle other categories
    if (selectedCategory === 'element' || selectedCategory === 'background' || 
        selectedCategory === 'fill' || selectedCategory === 'material' || 
        selectedCategory === 'application') {
      const variant = selectedVariant === 'regular' ? 'regular' : 
                     selectedVariant === 'high-contrast' ? 'high-contrast' : 'kawaii'
      const themeData = colorSystem[variant] || colorSystem.regular
      
      let categoryData = {}
      switch (selectedCategory) {
        case 'element':
          categoryData = themeData.element || {}
          break
        case 'background':
          categoryData = themeData.background || {}
          break
        case 'fill':
          categoryData = themeData.fill || {}
          break
        case 'material':
          categoryData = themeData.material || {}
          break
        case 'application':
          categoryData = themeData.application || {}
          break
      }
      
      return Object.entries(categoryData).map(([name, data]) => ({ name, data, category: selectedCategory }))
    }
    
    return []
  }

  const colors = getColors()
  const currentColor = colors[currentColorIndex]

  // Navigate colors
  const navigateColor = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentColorIndex(prev => (prev - 1 + colors.length) % colors.length)
    } else {
      setCurrentColorIndex(prev => (prev + 1) % colors.length)
    }
  }

  // Auto-select current color
  useEffect(() => {
    if (currentColor) {
      onColorSelect(currentColor.name, currentColor.category, currentColor.data)
    }
  }, [currentColorIndex, currentColor, onColorSelect])

  // Handle touch gestures
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      navigateColor('next')
    }
    if (isRightSwipe) {
      navigateColor('prev')
    }
  }

  const getColorValue = (colorData: any): string => {
    if (!colorData) return ''
    const color = colorData.light || colorData
    return color[selectedChannel] || color.oklch || ''
  }

  const ColorCard = ({ 
    color, 
    isActive 
  }: { 
    color: { name: string; data: any; category: ColorCategory }
    isActive: boolean 
  }) => {
    const lightColor = color.data?.light || color.data
    const darkColor = color.data?.dark

    return (
      <div 
        className={`flex-shrink-0 w-72 mx-4 transition-all duration-300 ${
          isActive ? 'scale-105' : 'scale-95 opacity-60'
        }`}
      >
        <div className="bg-background-secondary border border-border rounded-xl overflow-hidden">
          {/* Color Preview */}
          <div className="relative h-48">
            {darkColor ? (
              <>
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: lightColor?.srgb || lightColor?.oklch,
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                  }}
                />
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: darkColor?.srgb || darkColor?.oklch,
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                  }}
                />
                <div className="absolute top-3 left-3 right-3 flex justify-between text-xs text-white/80 font-medium">
                  <span className="bg-black/20 px-2 py-1 rounded">Light</span>
                  <span className="bg-black/20 px-2 py-1 rounded">Dark</span>
                </div>
              </>
            ) : (
              <div 
                className="w-full h-full"
                style={{ background: lightColor?.srgb || lightColor?.oklch }}
              />
            )}
            
            {/* Actions Overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
              <button
                onClick={() => onColorSelect(color.name, color.category, color.data)}
                className="bg-white/90 text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>

          {/* Color Info */}
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{color.name}</h3>
                <p className="text-sm text-text-secondary capitalize">
                  {color.category} Color
                </p>
              </div>
            </div>

            {/* Color Values */}
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="text-xs text-text-secondary">Light Variant</div>
                <div className="flex items-center justify-between bg-background border border-border rounded-md p-2">
                  <code className="text-sm font-mono truncate">
                    {getColorValue(lightColor)}
                  </code>
                  <CopyButton
                    value={getColorValue(lightColor)}
                    label="Copy"
                    onCopy={onCopy}
                  />
                </div>
              </div>

              {darkColor && (
                <div className="space-y-1">
                  <div className="text-xs text-text-secondary">Dark Variant</div>
                  <div className="flex items-center justify-between bg-background border border-border rounded-md p-2">
                    <code className="text-sm font-mono truncate">
                      {getColorValue(darkColor)}
                    </code>
                    <CopyButton
                      value={getColorValue(darkColor)}
                      label="Copy"
                      onCopy={onCopy}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => onCopy(`bg-${color.name}`)}
                className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md hover:bg-background-secondary"
              >
                Copy Tailwind
              </button>
              <button
                onClick={() => onCopy(`--color-${color.name}: ${getColorValue(lightColor)};`)}
                className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md hover:bg-background-secondary"
              >
                Copy CSS
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Category Tabs */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex gap-2 overflow-x-auto">
          {colorSections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                onCategoryChange(section.id)
                setCurrentColorIndex(0)
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                selectedCategory === section.id
                  ? 'bg-accent text-white'
                  : 'bg-background-secondary text-text-secondary hover:text-text'
              }`}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Navigation */}
      {colors.length > 0 && (
        <>
          {/* Progress Indicator */}
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
              <span>{currentColorIndex + 1} of {colors.length}</span>
              <span className="capitalize">{selectedCategory} Colors</span>
            </div>
            <div className="w-full bg-background-secondary rounded-full h-1">
              <div 
                className="bg-accent h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentColorIndex + 1) / colors.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Color Timeline */}
          <div className="flex-1 relative">
            <div 
              ref={scrollRef}
              className="flex items-center h-full overflow-x-hidden py-8"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(calc(50% - ${currentColorIndex * 304}px - 144px))` 
                }}
              >
                {colors.map((color, index) => (
                  <ColorCard
                    key={color.name}
                    color={color}
                    isActive={index === currentColorIndex}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateColor('prev')}
              disabled={colors.length <= 1}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigateColor('next')}
              disabled={colors.length <= 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <button
                onClick={() => currentColor && onColorSelect(currentColor.name, currentColor.category, currentColor.data)}
                className="flex-1 px-4 py-3 bg-accent text-white rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Details
              </button>
              <button
                onClick={() => currentColor && onCopy(getColorValue(currentColor.data))}
                className="px-4 py-3 bg-background-secondary border border-border rounded-lg hover:bg-background-tertiary"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            
            {/* Swipe Hint */}
            <div className="mt-3 text-center text-xs text-text-secondary">
              ← Swipe to navigate colors →
            </div>
          </div>
        </>
      )}

      {/* Empty State */}
      {colors.length === 0 && (
        <div className="flex-1 flex items-center justify-center text-center p-8">
          <div className="space-y-4">
            <div className="text-text-secondary">No colors found in this category</div>
            <button
              onClick={() => onCategoryChange('regular')}
              className="px-4 py-2 bg-accent text-white rounded-lg"
            >
              View Regular Colors
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
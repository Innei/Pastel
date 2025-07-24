import { useState } from 'react'

import { Dropdown } from '../ui/Dropdown'
import { ColorModal } from './ColorModal'
import { GridApplicationColors } from './components/GridApplicationColors'
import { GridMaterialColors } from './components/GridMaterialColors'
import { GridRegularColors } from './components/GridRegularColors'
import { GridSemanticColors } from './components/GridSemanticColors'
import type {
  ColorCategory,
  ColorChannel,
  ColorVariant,
  SortOrder,
} from './types'
import {
  colorChannelOptions,
  colorSections,
  colorVariantOptions,
  sortOptions,
} from './utils/constants'

type ColorModalState = {
  name: string
  type: ColorCategory
  data?: any
} | null

export function ColorGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<ColorCategory>('regular')
  const [selectedVariant, setSelectedVariant] =
    useState<ColorVariant>('regular')
  const [sortOrder, setSortOrder] = useState<SortOrder>('default')
  const [selectedChannel, setSelectedChannel] = useState<ColorChannel>('oklch')
  const [modalColor, setModalColor] = useState<ColorModalState>(null)

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
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const renderColorContent = () => {
    switch (selectedCategory) {
      case 'regular': {
        return (
          <GridRegularColors
            selectedVariant={selectedVariant}
            sortOrder={sortOrder}
            onColorClick={handleColorClick}
          />
        )
      }

      case 'material': {
        return (
          <GridMaterialColors
            selectedVariant={selectedVariant}
            selectedChannel={selectedChannel}
            onColorClick={handleColorClick}
          />
        )
      }
      case 'application': {
        return (
          <GridApplicationColors
            selectedVariant={selectedVariant}
            selectedChannel={selectedChannel}
            onColorClick={handleColorClick}
          />
        )
      }
      case 'element':
      case 'background':
      case 'fill': {
        return (
          <GridSemanticColors
            selectedVariant={selectedVariant}
            selectedChannel={selectedChannel}
            selectedCategory={selectedCategory}
            onColorClick={handleColorClick}
            onCopy={handleCopy}
          />
        )
      }
      default: {
        return (
          <GridRegularColors
            selectedVariant={selectedVariant}
            sortOrder={sortOrder}
            onColorClick={handleColorClick}
          />
        )
      }
    }
  }

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="border-b border-border">
        <nav className="flex space-x-8 overflow-auto">
          {colorSections.map((section) => (
            <button
              type="button"
              key={section.id}
              onClick={() => {
                setSelectedCategory(section.id)
                setModalColor(null)
              }}
              className={`flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
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
            <div className="flex flex-col gap-2 min-w-[200px]">
              <label className="text-sm font-medium text-text-secondary">
                Color Variant
              </label>
              <Dropdown
                options={colorVariantOptions}
                value={selectedVariant}
                onChange={(value) => {
                  setSelectedVariant(value as ColorVariant)

                  document.documentElement.dataset.contrast =
                    value === 'high-contrast'
                      ? 'high'
                      : value === 'kawaii'
                      ? 'low'
                      : ''
                }}
                placeholder="Select color variant"
              />
            </div>
            {/* Color Variant Selector and Sort Options - Only show for regular colors */}
            {selectedCategory === 'regular' && (
              <>
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
      <ColorModal
        isOpen={!!modalColor}
        onClose={() => setModalColor(null)}
        colorName={modalColor?.name ?? ''}
        colorType={modalColor?.type ?? 'regular'}
        colorVariant={selectedVariant}
        colorData={modalColor?.data}
        onCopy={handleCopy}
      />
    </div>
  )
}

import { kawaiiColorSystem } from '@pastel-palette/colors'
import { Eye, Square, Type } from 'lucide-react'
import * as React from 'react'

import type { ColorCategory, ColorChannel } from '../types'
import { ColorCard } from './ColorCard'

interface SemanticColorsProps {
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: ColorCategory, data?: any) => void
  onCopy: (value: string) => void
  copiedColor: string | null
}

export const SemanticColors: React.FC<SemanticColorsProps> = ({
  selectedChannel,
  onColorClick,
  onCopy,
  copiedColor,
}) => {
  const { background, element, fill } = kawaiiColorSystem

  const renderColorLabel = (level: string, type?: string) => (
    <span className="text-xs font-medium capitalize bg-background/80 px-2 py-1 rounded backdrop-blur-sm">
      {type?.includes('text') ? `${level} Aa` : level}
    </span>
  )

  const renderTextLabel = () => (
    <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded backdrop-blur-sm">
      Aa
    </span>
  )

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
            <ColorCard
              key={`background-${level}`}
              colorName={`background-${level}`}
              variants={variants}
              selectedChannel={selectedChannel}
              onClick={() =>
                onColorClick(`background-${level}`, 'semantic', variants)
              }
              onCopy={onCopy}
              copiedColor={copiedColor}
              labelContent={renderColorLabel(level)}
            />
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
                {type.replaceAll(/([A-Z])/g, ' $1')}
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {typeof variants === 'object' && 'light' in variants ? (
                  <ColorCard
                    colorName={type}
                    variants={variants}
                    selectedChannel={selectedChannel}
                    onClick={() => onColorClick(type, 'semantic', variants)}
                    onCopy={onCopy}
                    copiedColor={copiedColor}
                    aspectRatio="aspect-[4/3]"
                    labelContent={
                      type.includes('text') ? renderTextLabel() : null
                    }
                  />
                ) : (
                  Object.entries(variants).map(([level, colorVariants]) => (
                    <ColorCard
                      key={`${type}-${level}`}
                      colorName={`${type}-${level}`}
                      variants={colorVariants}
                      selectedChannel={selectedChannel}
                      onClick={() =>
                        onColorClick(
                          `${type}-${level}`,
                          'semantic',
                          colorVariants,
                        )
                      }
                      onCopy={onCopy}
                      copiedColor={copiedColor}
                      aspectRatio="aspect-[4/3]"
                      labelContent={renderColorLabel(level, type)}
                    />
                  ))
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
            <ColorCard
              key={`fill-${level}`}
              colorName={`fill-${level}`}
              variants={variants}
              selectedChannel={selectedChannel}
              onClick={() =>
                onColorClick(`fill-${level}`, 'semantic', variants)
              }
              onCopy={onCopy}
              copiedColor={copiedColor}
              labelContent={renderColorLabel(level)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

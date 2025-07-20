import React from 'react'
import { kawaiiColorSystem } from '@pastel-palette/colors'
import { ColorCard } from './ColorCard'
import type { ColorChannel } from '../types'

interface MaterialColorsProps {
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: string, data?: any) => void
  onCopy: (value: string) => void
  copiedColor: string | null
}

export const MaterialColors: React.FC<MaterialColorsProps> = ({
  selectedChannel,
  onColorClick,
  onCopy,
  copiedColor,
}) => {
  const { material } = kawaiiColorSystem

  const renderLevelLabel = (level: string) => (
    <span className="text-xs font-medium capitalize text-center bg-background/90 px-2 py-1 rounded backdrop-blur-sm">
      {level.replace(/([A-Z])/g, ' $1')}
    </span>
  )

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted mb-4">
        Material colors provide different levels of transparency for glass-morphism effects
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {Object.entries(material).map(([level, variants]) => (
          <ColorCard
            key={`material-${level}`}
            colorName={`material-${level}`}
            variants={variants}
            selectedChannel={selectedChannel}
            onClick={() => onColorClick(`material-${level}`, 'material', variants)}
            onCopy={onCopy}
            copiedColor={copiedColor}
            labelContent={
              <div className="relative w-full h-full">
                {/* Background pattern to show transparency */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-blue-200" />
                
                {/* The actual material color overlay */}
                <div className="absolute inset-0 backdrop-blur-sm" 
                     style={{ backgroundColor: variants.light.srgb }} />
                
                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {renderLevelLabel(level)}
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  )
}
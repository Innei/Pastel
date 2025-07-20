import { colorPalette } from '@pastel-palette/colors'
import * as React from 'react'

import type { ColorChannel } from '../types'
import { ColorCard } from './ColorCard'

interface ApplicationColorsProps {
  selectedChannel: ColorChannel
  onColorClick: (colorName: string, type: string, data?: any) => void
  onCopy: (value: string) => void
  copiedColor: string | null
}

export const ApplicationColors: React.FC<ApplicationColorsProps> = ({
  selectedChannel,
  onColorClick,
  onCopy,
  copiedColor,
}) => {
  const { application } = colorPalette.colors

  const renderSampleButton = () => (
    <span className="text-white font-medium bg-black/20 px-3 py-1 rounded backdrop-blur-sm">
      Sample Button
    </span>
  )

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted mb-4">
        Brand and accent colors for primary interactions and key UI elements
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.entries(application).map(([name, variants]) => (
          <div key={name} className="space-y-3">
            <h4 className="text-sm font-semibold capitalize">{name}</h4>
            <ColorCard
              colorName={`application-${name}`}
              variants={variants}
              selectedChannel={selectedChannel}
              onClick={() =>
                onColorClick(
                  `application-${name}`,
                  'application',
                  variants,
                )
              }
              onCopy={onCopy}
              copiedColor={copiedColor}
              aspectRatio="aspect-[3/2]"
              labelContent={renderSampleButton()}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
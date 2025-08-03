import { m } from 'motion/react'
import { useState } from 'react'

import { Spring } from '../constants/spring'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

type ContrastLevel = 'regular' | 'low' | 'high'

const contrastOptions = [
  {
    value: 'regular' as const,
    label: 'Regular',
    description: 'Standard contrast colors',
  },
  {
    value: 'low' as const,
    label: 'Low Contrast',
    description: 'Softer, more subtle colors',
  },
  {
    value: 'high' as const,
    label: 'High Contrast',
    description: 'Enhanced accessibility colors',
  },
]

const demoColors = [
  'blue', // bg-blue
  'pink', // bg-pink
  'purple', // bg-purple
  'red', // bg-red
  'orange', // bg-orange
  'yellow', // bg-yellow
  'green', // bg-green
  'sky', // bg-sky
  'cyan', // bg-cyan
  'indigo', // bg-indigo
  'gray', // bg-gray
  'neutral', // bg-neutral
]

export function ContrastDemo() {
  const [contrastLevel, setContrastLevel] = useState<ContrastLevel>('regular')

  const getDataAttributes = (level: ContrastLevel) => {
    switch (level) {
      case 'low': {
        return { 'data-contrast': 'low' }
      }
      case 'high': {
        return { 'data-contrast': 'high' }
      }
      default: {
        return {}
      }
    }
  }

  return (
    <div className="space-y-8">
      {/* Contrast Level Selector */}
      <div className="flex flex-wrap gap-3">
        {contrastOptions.map((option) => (
          <Button
            key={option.value}
            variant={contrastLevel === option.value ? 'primary' : 'secondary'}
            onClick={() => setContrastLevel(option.value)}
            className="flex-1 min-w-fit"
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Current Selection Info */}
      <Card className="p-4">
        <h4 className="font-semibold mb-2">
          {contrastOptions.find((o) => o.value === contrastLevel)?.label}
        </h4>
        <p className="text-text-secondary text-sm">
          {contrastOptions.find((o) => o.value === contrastLevel)?.description}
        </p>
        {contrastLevel !== 'regular' && (
          <p className="text-xs text-text-tertiary mt-2">
            Applied with{' '}
            <code className="bg-material-thin px-1 rounded">
              data-contrast="{contrastLevel}"
            </code>
          </p>
        )}
      </Card>

      {/* Color Demonstrations */}
      <div {...getDataAttributes(contrastLevel)} className="space-y-6">
        {/* Color Swatches */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Color Swatches</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {demoColors.map((color, index) => (
              <m.div
                key={`${color}-${contrastLevel}`}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={Spring.smooth(0.3, index * 0.05)}
              >
                <div
                  className={`w-full h-16 rounded-lg bg-${color} border border-border`}
                  title={`${color} color`}
                />
                <div className="text-center">
                  <p className="text-sm font-medium capitalize">{color}</p>
                  <p className="text-xs text-text-secondary">bg-{color}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        {/* UI Components Demo */}
        <div>
          <h4 className="text-lg font-semibold mb-4">UI Components</h4>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Buttons */}
            <Card className="p-6">
              <h5 className="font-semibold mb-4">Buttons</h5>
              <div className="space-y-3">
                <div className="flex gap-3 flex-wrap">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    variant="secondary"
                    className="border-red text-red hover:bg-red/10"
                  >
                    Destructive
                  </Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </Card>

            {/* Form Elements */}
            <Card className="p-6">
              <h5 className="font-semibold mb-4">Form Elements</h5>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Text Input
                  </label>
                  <input
                    type="text"
                    placeholder="Enter text..."
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-text placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select
                  </label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Text Elements */}
            <Card className="p-6">
              <h5 className="font-semibold mb-4">Text Elements</h5>
              <div className="space-y-3">
                <p className="text-text">Primary text content</p>
                <p className="text-text-secondary">Secondary text content</p>
                <p className="text-text-tertiary">Tertiary text content</p>
                <a href="#" className="text-link hover:text-link-hover">
                  Link text
                </a>
              </div>
            </Card>

            {/* Status Colors */}
            <Card className="p-6">
              <h5 className="font-semibold mb-4">Status Colors</h5>
              <div className="space-y-3">
                <div className="p-3 bg-green/10 border border-green rounded-md">
                  <p className="text-green font-medium">Success message</p>
                </div>
                <div className="p-3 bg-yellow/10 border border-yellow rounded-md">
                  <p className="text-yellow font-medium">Warning message</p>
                </div>
                <div className="p-3 bg-red/10 border border-red rounded-md">
                  <p className="text-red font-medium">Error message</p>
                </div>
                <div className="p-3 bg-blue/10 border border-blue rounded-md">
                  <p className="text-blue font-medium">Info message</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

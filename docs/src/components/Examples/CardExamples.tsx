import { colorPalette } from '@pastel-palette/colors'

export default function CardExamples() {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">Cards</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-background border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text mb-2">Default Card</h3>
          <p className="text-text-secondary">
            A simple card using semantic background and border colors
          </p>
        </div>

        <div 
          className="rounded-xl p-6"
          style={{ 
            backgroundColor: colorPalette.colors.regular.pink.light.srgb,
            borderColor: colorPalette.colors.regular.pink.dark.srgb,
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          <h3 className="text-lg font-semibold mb-2">Pink Card</h3>
          <p className="opacity-80">
            Custom styled card with direct color imports
          </p>
        </div>

        <div className="bg-material-thick backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/10">
          <h3 className="text-lg font-semibold text-primary mb-2">Glass Card</h3>
          <p className="text-text-tertiary">
            Material design with beautiful blur effects
          </p>
        </div>

        <div className="bg-fill rounded-xl p-6 hover:bg-fill-secondary transition-colors">
          <h3 className="text-lg font-semibold text-text mb-2">Fill Card</h3>
          <p className="text-text-secondary">
            Using fill colors for subtle backgrounds
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple to-pink p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
          <p className="opacity-90">
            Beautiful gradient using Kawaii colors
          </p>
        </div>

        <div className="bg-element hover:bg-element-hover rounded-xl p-6 transition-colors cursor-pointer">
          <h3 className="text-lg font-semibold text-text mb-2">Interactive Card</h3>
          <p className="text-text-secondary">
            Hover me for smooth transitions
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h5 className="text-sm font-medium text-text-secondary mb-3">Nested Cards</h5>
        <div className="bg-background-secondary rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text mb-4">Parent Container</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-medium text-text mb-1">Nested Card 1</h4>
              <p className="text-sm text-text-secondary">Using depth hierarchy</p>
            </div>
            <div className="bg-background rounded-lg p-4">
              <h4 className="font-medium text-text mb-1">Nested Card 2</h4>
              <p className="text-sm text-text-secondary">Clean visual separation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
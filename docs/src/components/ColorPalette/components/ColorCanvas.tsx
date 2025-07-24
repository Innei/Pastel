import { calculateContrastRatio, parseRGB } from '@pastel-palette/colors'
import { Code, ExternalLink, Eye, Palette, Zap } from 'lucide-react'
import { useState } from 'react'

import { CopyButton } from '../../ui/CopyButton'
import type { ColorChannel, ColorVariant } from '../types'
import { getColorRecommendations } from '../utils/colorRecommendations'

interface ColorCanvasProps {
  selectedColor: { name: string; category: string; data?: any } | null
  selectedChannel: ColorChannel
  selectedVariant: ColorVariant
  onCopy?: (value: string) => void
}

export function ColorCanvas({
  selectedColor,
  selectedChannel,
  selectedVariant,
  onCopy,
}: ColorCanvasProps) {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'usage' | 'code' | 'accessibility'
  >('overview')

  if (!selectedColor) {
    return (
      <div className="flex-1 flex items-center justify-center text-center p-8">
        <div className="max-w-md space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-background-secondary flex items-center justify-center">
            <Palette className="w-8 h-8 text-text-secondary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-text-secondary">
              Select a color to explore
            </h3>
            <p className="text-sm text-text-tertiary">
              Choose a color from the sidebar to see detailed information, usage
              examples, and code snippets.
            </p>
          </div>
          <div className="flex justify-center gap-4 text-xs text-text-tertiary">
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-background-secondary border border-border rounded">
                ⌘K
              </kbd>
              <span>Quick search</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-background-secondary border border-border rounded">
                ⌘C
              </kbd>
              <span>Copy color</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { name, data } = selectedColor
  const lightColor = data?.light || data
  const darkColor = data?.dark || data

  const getColorValue = (colorData: any, channel: ColorChannel): string => {
    if (!colorData) return ''
    return colorData[channel] || colorData.oklch || ''
  }

  const calculateAccessibility = (colorValue: string) => {
    const rgbColor = parseRGB(colorValue)
    if (!rgbColor) return null

    const whiteBackground = { r: 255, g: 255, b: 255, a: 1 }
    const blackBackground = { r: 0, g: 0, b: 0, a: 1 }

    const whiteContrast = calculateContrastRatio(rgbColor, whiteBackground)
    const blackContrast = calculateContrastRatio(rgbColor, blackBackground)

    return {
      againstWhite: whiteContrast,
      againstBlack: blackContrast,
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold capitalize">{name}</h2>
            </div>
            <div className="text-sm text-text-secondary capitalize">
              {selectedColor.category} Color • {selectedVariant} Variant
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CopyButton
              value={getColorValue(lightColor, selectedChannel)}
              label="Copy Primary"
              variant="primary"
              onCopy={onCopy}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <nav className="flex px-6">
          {[
            { id: 'overview', label: 'Overview', icon: Eye },
            { id: 'usage', label: 'Usage', icon: Zap },
            { id: 'code', label: 'Code', icon: Code },
            { id: 'accessibility', label: 'Accessibility', icon: ExternalLink },
          ].map(({ id, label, icon: Icon }) => (
            <button
              type="button"
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-text-secondary hover:text-text hover:border-border'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Color Values List */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Color Values</h4>
              <div className="space-y-3">
                {/* Light Variant */}
                <div className="flex items-center gap-4 p-4 bg-background-secondary border border-border rounded-lg">
                  <div
                    className="w-12 h-12 rounded-lg border border-border flex-shrink-0"
                    style={{
                      background: lightColor?.srgb || lightColor?.oklch,
                    }}
                  />
                  <div className="flex-1">
                    <div className="font-medium">Light Variant</div>
                    <div className="text-sm text-text-secondary font-mono">
                      {getColorValue(lightColor, selectedChannel)}
                    </div>
                  </div>
                  <CopyButton
                    value={getColorValue(lightColor, selectedChannel)}
                    label="Copy"
                    onCopy={onCopy}
                  />
                </div>

                {/* Dark Variant */}
                {darkColor && (
                  <div className="flex items-center gap-4 p-4 bg-background-secondary border border-border rounded-lg">
                    <div
                      className="w-12 h-12 rounded-lg border border-border flex-shrink-0"
                      style={{
                        background: darkColor?.srgb || darkColor?.oklch,
                      }}
                    />
                    <div className="flex-1">
                      <div className="font-medium">Dark Variant</div>
                      <div className="text-sm text-text-secondary font-mono">
                        {getColorValue(darkColor, selectedChannel)}
                      </div>
                    </div>
                    <CopyButton
                      value={getColorValue(darkColor, selectedChannel)}
                      label="Copy"
                      onCopy={onCopy}
                    />
                  </div>
                )}

                {/* All Formats */}
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-text-secondary">
                    All Formats
                  </h5>
                  {['oklch', 'srgb', 'p3'].map((format) => {
                    const value =
                      lightColor?.[format as keyof typeof lightColor]
                    if (!value) return null

                    return (
                      <div
                        key={format}
                        className="flex items-center justify-between p-3 bg-background-secondary border border-border rounded-md"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium">
                            {format.toUpperCase()}
                          </div>
                          <div className="text-xs text-text-secondary font-mono">
                            {value}
                          </div>
                        </div>
                        <CopyButton
                          value={value}
                          label="Copy"
                          onCopy={onCopy}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quick Copy Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Quick Copy</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-background-secondary border border-border rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-code flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">CSS Variable</div>
                    <div className="text-sm text-text-secondary font-mono">
                      --color-{name}:{' '}
                      {getColorValue(lightColor, selectedChannel)};
                    </div>
                  </div>
                  <CopyButton
                    value={`--color-${name}: ${getColorValue(
                      lightColor,
                      selectedChannel,
                    )};`}
                    label="Copy"
                    onCopy={onCopy}
                  />
                </div>

                <div className="flex items-center gap-4 p-4 bg-background-secondary border border-border rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-code flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Tailwind Class</div>
                    <div className="text-sm text-text-secondary font-mono">
                      bg-{name}
                    </div>
                  </div>
                  <CopyButton
                    value={`bg-${name}`}
                    label="Copy"
                    onCopy={onCopy}
                  />
                </div>

                <div className="flex items-center gap-4 p-4 bg-background-secondary border border-border rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-code flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">JSON Format</div>
                    <div className="text-sm text-text-secondary font-mono">
                      "{name}": "{getColorValue(lightColor, selectedChannel)}"
                    </div>
                  </div>
                  <CopyButton
                    value={`"${name}": "${getColorValue(
                      lightColor,
                      selectedChannel,
                    )}"`}
                    label="Copy"
                    onCopy={onCopy}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'usage' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Usage Examples</h3>

              {/* UI Component Examples */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Buttons</h4>
                  <div className="flex gap-3">
                    <button
                      className="px-4 py-2 text-sm font-medium text-white rounded-md"
                      style={{
                        background: lightColor?.srgb || lightColor?.oklch,
                      }}
                    >
                      Primary Button
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium border rounded-md"
                      style={{
                        color: lightColor?.srgb || lightColor?.oklch,
                        borderColor: lightColor?.srgb || lightColor?.oklch,
                      }}
                    >
                      Outline Button
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Text & Links</h4>
                  <div className="space-y-1">
                    <p
                      className="text-sm"
                      style={{ color: lightColor?.srgb || lightColor?.oklch }}
                    >
                      This is colored text using {name}
                    </p>
                    <a
                      href="#"
                      className="text-sm underline"
                      style={{ color: lightColor?.srgb || lightColor?.oklch }}
                    >
                      This is a colored link
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Backgrounds</h4>
                  <div
                    className="p-4 rounded-md text-sm"
                    style={{
                      background: lightColor?.srgb || lightColor?.oklch,
                    }}
                  >
                    <div className="text-white">
                      Content with {name} background
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Recommendations</h4>
              <div className="space-y-2 text-sm text-text-secondary">
                {getColorRecommendations(name).recommendations.map(
                  (rec, index) => (
                    <div key={index}>• {rec}</div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Code Examples</h3>

              {/* CSS */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">CSS</h4>
                <div className="bg-gray-900 border border-border rounded-md p-4">
                  <pre className="text-sm font-mono">
                    <code>
                      <span className="text-red-400">:root</span>{' '}
                      <span className="text-white">{'{'}</span>
                      {'\n  '}
                      <span className="text-blue-300">--color-{name}</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-green-300">
                        {getColorValue(lightColor, selectedChannel)}
                      </span>
                      <span className="text-white">;</span>
                      {darkColor && (
                        <>
                          {'\n  '}
                          <span className="text-blue-300">
                            --color-{name}-dark
                          </span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-green-300">
                            {getColorValue(darkColor, selectedChannel)}
                          </span>
                          <span className="text-white">;</span>
                        </>
                      )}
                      {'\n'}
                      <span className="text-white">{'}'}</span>
                      {'\n\n'}
                      <span className="text-yellow-300">.btn-{name}</span>{' '}
                      <span className="text-white">{'{'}</span>
                      {'\n  '}
                      <span className="text-blue-300">background-color</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-purple-400">var</span>
                      <span className="text-white">(</span>
                      <span className="text-blue-300">--color-{name}</span>
                      <span className="text-white">);</span>
                      {'\n  '}
                      <span className="text-blue-300">color</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-green-300">white</span>
                      <span className="text-white">;</span>
                      {'\n'}
                      <span className="text-white">{'}'}</span>
                      {darkColor && (
                        <>
                          {'\n\n'}
                          <span className="text-red-400">@media</span>{' '}
                          <span className="text-white">(</span>
                          <span className="text-blue-300">
                            prefers-color-scheme
                          </span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-green-300">dark</span>
                          <span className="text-white">)</span>{' '}
                          <span className="text-white">{'{'}</span>
                          {'\n  '}
                          <span className="text-red-400">:root</span>{' '}
                          <span className="text-white">{'{'}</span>
                          {'\n    '}
                          <span className="text-blue-300">--color-{name}</span>
                          <span className="text-white">:</span>{' '}
                          <span className="text-purple-400">var</span>
                          <span className="text-white">(</span>
                          <span className="text-blue-300">
                            --color-{name}-dark
                          </span>
                          <span className="text-white">);</span>
                          {'\n  '}
                          <span className="text-white">{'}'}</span>
                          {'\n'}
                          <span className="text-white">{'}'}</span>
                        </>
                      )}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Tailwind */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Tailwind CSS</h4>
                <div className="bg-gray-900 border border-border rounded-md p-4">
                  <pre className="text-sm font-mono">
                    <code>
                      <span className="text-white">{'<'}</span>
                      <span className="text-red-400">button</span>{' '}
                      <span className="text-yellow-300">className</span>
                      <span className="text-white">=</span>
                      <span className="text-green-300">
                        "bg-{name} text-white hover:bg-{name}/90"
                      </span>
                      <span className="text-white">{'>'}</span>
                      {'\n  '}
                      <span className="text-white">Button</span>
                      {'\n'}
                      <span className="text-white">{'</'}</span>
                      <span className="text-red-400">button</span>
                      <span className="text-white">{'>'}</span>
                      {'\n\n'}
                      <span className="text-white">{'<'}</span>
                      <span className="text-red-400">div</span>{' '}
                      <span className="text-yellow-300">className</span>
                      <span className="text-white">=</span>
                      <span className="text-green-300">
                        "text-{name} border-{name}"
                      </span>
                      <span className="text-white">{'>'}</span>
                      {'\n  '}
                      <span className="text-white">
                        Colored text and border
                      </span>
                      {'\n'}
                      <span className="text-white">{'</'}</span>
                      <span className="text-red-400">div</span>
                      <span className="text-white">{'>'}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* React/JavaScript */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium">React/JavaScript</h4>
                <div className="bg-gray-900 border border-border rounded-md p-4">
                  <pre className="text-sm font-mono">
                    <code>
                      <span className="text-purple-400">import</span>{' '}
                      <span className="text-white">{'{'}</span>{' '}
                      <span className="text-blue-300">colorSystem</span>{' '}
                      <span className="text-white">{'}'}</span>{' '}
                      <span className="text-purple-400">from</span>{' '}
                      <span className="text-green-300">
                        '@pastel-palette/colors'
                      </span>
                      {'\n\n'}
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">{name}Color</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-blue-300">colorSystem</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-300">regular</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-300">colors</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-300">{name}</span>
                      {'\n\n'}
                      <span className="text-gray-500">
                        // Usage in component
                      </span>
                      {'\n'}
                      <span className="text-white">{'<'}</span>
                      <span className="text-red-400">div</span>{' '}
                      <span className="text-yellow-300">style</span>
                      <span className="text-white">=</span>
                      <span className="text-white">{'{'}</span>
                      <span className="text-white">{'{'}</span>
                      {'\n  '}
                      <span className="text-yellow-300">backgroundColor</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-blue-300">{name}Color</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-300">light</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-300">{selectedChannel}</span>
                      <span className="text-white">,</span>
                      {'\n  '}
                      <span className="text-yellow-300">color</span>
                      <span className="text-white">:</span>{' '}
                      <span className="text-green-300">'white'</span>
                      {'\n'}
                      <span className="text-white">{'}'}</span>
                      <span className="text-white">{'}'}</span>
                      <span className="text-white">{'>'}</span>
                      {'\n  '}
                      <span className="text-white">Content</span>
                      {'\n'}
                      <span className="text-white">{'</'}</span>
                      <span className="text-red-400">div</span>
                      <span className="text-white">{'>'}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'accessibility' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Accessibility Information</h3>

              {(() => {
                const accessibility = calculateAccessibility(
                  lightColor?.srgb || lightColor?.oklch || '',
                )
                if (!accessibility) {
                  return (
                    <div className="text-sm text-text-secondary">
                      Unable to calculate accessibility metrics for this color.
                    </div>
                  )
                }

                const { againstWhite, againstBlack } = accessibility

                return (
                  <>
                    {/* Contrast Ratios */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Contrast Ratios</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="text-sm text-text-secondary">
                            Against White Background
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white border border-border rounded-md">
                            <span
                              style={{
                                color: lightColor?.srgb || lightColor?.oklch,
                              }}
                            >
                              Sample Text
                            </span>
                            <div className="text-xs">
                              <span className="font-medium">
                                {againstWhite.ratio.toFixed(1)}:1
                              </span>
                              <span
                                className={`ml-2 ${
                                  againstWhite.passes.aa
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                }`}
                              >
                                {againstWhite.passes.aa ? '✓ AA' : '✗ AA'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm text-text-secondary">
                            Against Black Background
                          </div>
                          <div className="flex items-center justify-between p-3 bg-black border border-border rounded-md">
                            <span
                              className="px-2 py-1 rounded text-black"
                              style={{
                                backgroundColor:
                                  lightColor?.srgb || lightColor?.oklch,
                              }}
                            >
                              Sample Text
                            </span>
                            <div className="text-xs text-white">
                              <span className="font-medium">
                                {againstBlack.ratio.toFixed(1)}:1
                              </span>
                              <span
                                className={`ml-2 ${
                                  againstBlack.passes.aa
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                }`}
                              >
                                {againstBlack.passes.aa ? '✓ AA' : '✗ AA'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* WCAG Guidelines */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">WCAG Compliance</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              againstWhite.passes.aa
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                          />
                          <span>
                            AA Normal Text (4.5:1) -{' '}
                            {againstWhite.passes.aa ? '✓ Pass' : '✗ Fail'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              againstWhite.passes.largeTextAa
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                          />
                          <span>
                            AA Large Text (3:1) -{' '}
                            {againstWhite.passes.largeTextAa
                              ? '✓ Pass'
                              : '✗ Fail'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              againstWhite.passes.aaa
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                          />
                          <span>
                            AAA Normal Text (7:1) -{' '}
                            {againstWhite.passes.aaa ? '✓ Pass' : '✗ Fail'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Usage Guidelines */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">
                        Accessibility Guidelines
                      </h4>
                      <div className="space-y-2 text-sm text-text-secondary">
                        {againstWhite.passes.aa ? (
                          <div>
                            • Suitable for body text on white backgrounds
                          </div>
                        ) : (
                          <div>
                            • Not suitable for body text on white backgrounds -
                            insufficient contrast
                          </div>
                        )}
                        {againstWhite.passes.largeTextAa ? (
                          <div>
                            • Suitable for large text (18pt+ or 14pt+ bold) on
                            white backgrounds
                          </div>
                        ) : (
                          <div>
                            • Not suitable for large text on white backgrounds
                          </div>
                        )}
                        {againstWhite.passes.aaa ? (
                          <div>
                            • Meets enhanced AAA standard for maximum
                            accessibility
                          </div>
                        ) : (
                          <div>
                            • Consider darker variants for enhanced
                            accessibility (AAA compliance)
                          </div>
                        )}
                        <div>
                          • Always test with actual users and assistive
                          technologies
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

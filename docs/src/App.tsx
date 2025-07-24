import { useTheme } from 'next-themes'
// import { colorPalette } from '@pastel-palette/colors'
import { Toaster } from 'sonner'

import { ColorExplorer } from './components/ColorPalette/ColorExplorer'
import { ColorGrid } from './components/ColorPalette/ColorGrid'
import { AlertExamples } from './components/Examples/AlertExamples'
import { ButtonExamples } from './components/Examples/ButtonExamples'
import { CardExamples } from './components/Examples/CardExamples'
import { FormExamples } from './components/Examples/FormExamples'
import { Hero } from './components/Hero'
import { Footer } from './components/Layout/Footer'
import { Header } from './components/Layout/Header'
import { Container } from './components/ui/Container'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

function CopyCodeButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-background-tertiary rounded-md transition-colors"
      title="Copy to clipboard"
    >
      {isCopied ? (
        <Check className="w-4 h-4 text-green" />
      ) : (
        <Copy className="w-4 h-4 text-text-secondary hover:text-text" />
      )}
    </button>
  )
}

function App() {
  // Use regular colors - CSS variables will automatically switch to high-contrast when data-contrast-mode="high-contrast"
  // const currentColors = colorPalette.colors.regular
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

        {/* Installation Section */}
        <section
          id="installation"
          className="py-16 sm:py-24 lg:py-32 border-t border-border"
        >
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Installation
              </h2>
              <p className="text-lg text-text-secondary mb-12">
                Get started with Pastel Palette in your project with npm or
                pnpm.
              </p>

              <div className="space-y-8">
                {/* Package Installation */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Package Installation
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-background-secondary rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">npm</span>
                        <CopyCodeButton text="npm install @pastel-palette/tailwindcss" />
                      </div>
                      <code className="text-sm font-mono">
                        npm install @pastel-palette/tailwindcss
                      </code>
                    </div>
                    <div className="p-4 bg-background-secondary rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">pnpm</span>
                        <CopyCodeButton text="pnpm add @pastel-palette/tailwindcss" />
                      </div>
                      <code className="text-sm font-mono">
                        pnpm add @pastel-palette/tailwindcss
                      </code>
                    </div>
                  </div>
                </div>

                {/* TailwindCSS v4 Integration */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    TailwindCSS v4 Integration
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Import the generated theme CSS in your main CSS file. Choose
                    your preferred color space:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-background-secondary rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">
                          OKLCH (Recommended)
                        </span>
                        <CopyCodeButton text="@import '@pastel-palette/tailwindcss/dist/theme-oklch.css';" />
                      </div>
                      <code className="text-sm font-mono">
                        @import '@pastel-palette/tailwindcss/dist/theme-oklch.css';
                      </code>
                    </div>
                    <div className="p-4 bg-background-secondary rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">
                          sRGB (Fallback)
                        </span>
                        <CopyCodeButton text="@import '@pastel-palette/tailwindcss/dist/theme-srgb.css';" />
                      </div>
                      <code className="text-sm font-mono">
                        @import '@pastel-palette/tailwindcss/dist/theme-srgb.css';
                      </code>
                    </div>
                    <div className="p-4 bg-background-secondary rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">
                          P3 (Wide Gamut)
                        </span>
                        <CopyCodeButton text="@import '@pastel-palette/tailwindcss/dist/theme-p3.css';" />
                      </div>
                      <code className="text-sm font-mono">
                        @import '@pastel-palette/tailwindcss/dist/theme-p3.css';
                      </code>
                    </div>
                  </div>
                </div>

                {/* Usage Examples */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Basic Usage
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Three ways to use Pastel colors in your project:
                  </p>
                  
                  <div className="space-y-6">
                    {/* CSS Variables */}
                    <div>
                      <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                        CSS Variables
                      </h4>
                      <div className="bg-fill rounded-xl border border-border overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-background-secondary border-b border-border">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow rounded-full"></div>
                            <div className="w-3 h-3 bg-green rounded-full"></div>
                            <span className="ml-2 text-sm text-text-secondary font-mono">styles.css</span>
                          </div>
                          <CopyCodeButton text={`.button {
  background-color: var(--color-accent);
  color: var(--color-white);
  border: 1px solid var(--color-border);
}

.card {
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}`} />
                        </div>
                        <div className="p-4">
                          <pre className="text-sm font-mono text-text overflow-x-auto">
                            <code>
                              <span className="text-purple">.button</span> <span className="text-text-secondary">{'{'}</span>{'\n'}
                              {'  '}<span className="text-blue">background-color</span><span className="text-text-secondary">:</span> <span className="text-green">var(--color-accent)</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">color</span><span className="text-text-secondary">:</span> <span className="text-green">var(--color-white)</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">border</span><span className="text-text-secondary">:</span> <span className="text-orange">1px solid</span> <span className="text-green">var(--color-border)</span><span className="text-text-secondary">;</span>{'\n'}
                              <span className="text-text-secondary">{'}'}</span>{'\n\n'}
                              <span className="text-purple">.card</span> <span className="text-text-secondary">{'{'}</span>{'\n'}
                              {'  '}<span className="text-blue">background-color</span><span className="text-text-secondary">:</span> <span className="text-green">var(--color-background-secondary)</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">border</span><span className="text-text-secondary">:</span> <span className="text-orange">1px solid</span> <span className="text-green">var(--color-border)</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">color</span><span className="text-text-secondary">:</span> <span className="text-green">var(--color-text)</span><span className="text-text-secondary">;</span>{'\n'}
                              <span className="text-text-secondary">{'}'}</span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    {/* JSX ClassNames */}
                    <div>
                      <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-pink rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                        JSX with TailwindCSS Classes
                      </h4>
                      <div className="bg-fill rounded-xl border border-border overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-background-secondary border-b border-border">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow rounded-full"></div>
                            <div className="w-3 h-3 bg-green rounded-full"></div>
                            <span className="ml-2 text-sm text-text-secondary font-mono">Button.tsx</span>
                          </div>
                          <CopyCodeButton text={`// Using semantic colors
<button className="bg-accent text-white border border-border hover:opacity-90">
  Click me
</button>

// Using specific colors
<div className="bg-background-secondary text-text border border-border-secondary">
  <h3 className="text-text">Card Title</h3>
  <p className="text-text-secondary">Card description</p>
</div>`} />
                        </div>
                        <div className="p-4">
                          <pre className="text-sm font-mono text-text overflow-x-auto">
                            <code>
                              <span className="text-text-secondary">// Using semantic colors</span>{'\n'}
                              <span className="text-text-secondary">{'<'}</span><span className="text-blue">button</span> <span className="text-purple">className</span><span className="text-text-secondary">=</span><span className="text-green">"bg-accent text-white border border-border hover:opacity-90"</span><span className="text-text-secondary">{'>'}</span>{'\n'}
                              {'  '}Click me{'\n'}
                              <span className="text-text-secondary">{'</'}</span><span className="text-blue">button</span><span className="text-text-secondary">{'>'}</span>{'\n\n'}
                              <span className="text-text-secondary">// Using specific colors</span>{'\n'}
                              <span className="text-text-secondary">{'<'}</span><span className="text-blue">div</span> <span className="text-purple">className</span><span className="text-text-secondary">=</span><span className="text-green">"bg-background-secondary text-text border border-border-secondary"</span><span className="text-text-secondary">{'>'}</span>{'\n'}
                              {'  '}<span className="text-text-secondary">{'<'}</span><span className="text-blue">h3</span> <span className="text-purple">className</span><span className="text-text-secondary">=</span><span className="text-green">"text-text"</span><span className="text-text-secondary">{'>'}</span>Card Title<span className="text-text-secondary">{'</'}</span><span className="text-blue">h3</span><span className="text-text-secondary">{'>'}</span>{'\n'}
                              {'  '}<span className="text-text-secondary">{'<'}</span><span className="text-blue">p</span> <span className="text-purple">className</span><span className="text-text-secondary">=</span><span className="text-green">"text-text-secondary"</span><span className="text-text-secondary">{'>'}</span>Card description<span className="text-text-secondary">{'</'}</span><span className="text-blue">p</span><span className="text-text-secondary">{'>'}</span>{'\n'}
                              <span className="text-text-secondary">{'</'}</span><span className="text-blue">div</span><span className="text-text-secondary">{'>'}</span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    {/* PostCSS @apply */}
                    <div>
                      <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-purple rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                        PostCSS with @apply
                      </h4>
                      <div className="bg-fill rounded-xl border border-border overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-background-secondary border-b border-border">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow rounded-full"></div>
                            <div className="w-3 h-3 bg-green rounded-full"></div>
                            <span className="ml-2 text-sm text-text-secondary font-mono">components.css</span>
                          </div>
                          <CopyCodeButton text={`.btn-primary {
  @apply bg-accent text-white border border-border;
  @apply hover:opacity-90 focus:ring-2 focus:ring-accent;
}

.card {
  @apply bg-background-secondary border border-border;
  @apply text-text rounded-lg p-4;
}

.input {
  @apply bg-background border border-border;
  @apply text-text placeholder:text-text-tertiary;
  @apply focus:border-accent focus:ring-1 focus:ring-accent;
}`} />
                        </div>
                        <div className="p-4">
                          <pre className="text-sm font-mono text-text overflow-x-auto">
                            <code>
                              <span className="text-purple">.btn-primary</span> <span className="text-text-secondary">{'{'}</span>{'\n'}
                              {'  '}<span className="text-blue">@apply</span> <span className="text-green">bg-accent text-white border border-border</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">@apply</span> <span className="text-green">hover:opacity-90 focus:ring-2 focus:ring-accent</span><span className="text-text-secondary">;</span>{'\n'}
                              <span className="text-text-secondary">{'}'}</span>{'\n\n'}
                              <span className="text-purple">.card</span> <span className="text-text-secondary">{'{'}</span>{'\n'}
                              {'  '}<span className="text-blue">@apply</span> <span className="text-green">bg-background-secondary border border-border</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">@apply</span> <span className="text-green">text-text rounded-lg p-4</span><span className="text-text-secondary">;</span>{'\n'}
                              <span className="text-text-secondary">{'}'}</span>{'\n\n'}
                              <span className="text-purple">.input</span> <span className="text-text-secondary">{'{'}</span>{'\n'}
                              {'  '}<span className="text-blue">@apply</span> <span className="text-green">bg-background border border-border</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">@apply</span> <span className="text-green">text-text placeholder:text-text-tertiary</span><span className="text-text-secondary">;</span>{'\n'}
                              {'  '}<span className="text-blue">@apply</span> <span className="text-green">focus:border-accent focus:ring-1 focus:ring-accent</span><span className="text-text-secondary">;</span>{'\n'}
                              <span className="text-text-secondary">{'}'}</span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Color Palette Section */}
        <section
          id="palette"
          className="py-16 sm:py-24 lg:py-32 border-t border-border"
        >
          <Container>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Color palette
              </h2>
              <p className="text-lg text-text-secondary">
                A complete set of colors for building beautiful interfaces.
              </p>
            </div>
            <ColorGrid />
          </Container>

          <div className="hidden xl:block px-8 my-32">
            <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Color explorer
            </h2>
            <p className="text-lg text-text-secondary text-center">
              Explore the color palette in detail.
            </p>
            <ColorExplorer />
          </div>
        </section>

        {/* Examples Section */}
        <section
          id="examples"
          className="py-16 sm:py-24 lg:py-32 border-t border-border"
        >
          <Container>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Component examples
              </h2>
              <p className="text-lg text-text-secondary">
                See how Pastel colors work across different UI components.
              </p>
            </div>

            <div className="space-y-24">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                  Buttons
                </h3>
                <ButtonExamples />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                  Cards
                </h3>
                <CardExamples />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                  Forms
                </h3>
                <FormExamples />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
                  Alerts
                </h3>
                <AlertExamples />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <Toaster
        theme={theme as 'light' | 'dark' | 'system'}
        toastOptions={{
          style: {
            background: 'var(--color-background)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text)',
          },
        }}
      />
    </div>
  )
}

export default App

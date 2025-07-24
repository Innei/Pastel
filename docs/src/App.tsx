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

function App() {
  // Use regular colors - CSS variables will automatically switch to high-contrast when data-contrast-mode="high-contrast"
  // const currentColors = colorPalette.colors.regular
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

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

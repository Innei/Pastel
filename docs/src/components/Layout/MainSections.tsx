import { ColorExplorer } from '../ColorPalette/ColorExplorer'
import { ColorGrid } from '../ColorPalette/ColorGrid'
import { AlertExamples } from '../Examples/AlertExamples'
import { ButtonExamples } from '../Examples/ButtonExamples'
import { CardExamples } from '../Examples/CardExamples'
import { FormExamples } from '../Examples/FormExamples'
import { Container } from '../ui/Container'

export function MainSections() {
  return (
    <>
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

        <div className="hidden xl:block px-8 max-w-[1440px] mx-auto my-32">
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
    </>
  )
}

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import ColorGrid from './components/ColorPalette/ColorGrid'
import ButtonExamples from './components/Examples/ButtonExamples'
import CardExamples from './components/Examples/CardExamples'
import FormExamples from './components/Examples/FormExamples'
import AlertExamples from './components/Examples/AlertExamples'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2">Kawaii Color System</h2>
          <p className="text-text-secondary mb-8">
            A beautiful, pastel-inspired color palette for modern applications
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Color Palette</h3>
            <ColorGrid />
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Examples</h3>
          
          <div className="space-y-12">
            <ButtonExamples />
            <CardExamples />
            <FormExamples />
            <AlertExamples />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
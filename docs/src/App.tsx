import { useTheme } from 'next-themes'
// import { colorPalette } from '@pastel-palette/colors'
import { Toaster } from 'sonner'

import { Hero } from './components/Hero'
import { Footer } from './components/Layout/Footer'
import { Header } from './components/Layout/Header'
import { InstallSection } from './components/Layout/InstallSection'
import { MainSections } from './components/Layout/MainSections'

function App() {
  // Use regular colors - CSS variables will automatically switch to high-contrast when data-contrast-mode="high-contrast"
  // const currentColors = colorPalette.colors.regular
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

        <InstallSection />

        <MainSections />
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

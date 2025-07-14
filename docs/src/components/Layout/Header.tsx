import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, Grid2x2 } from 'lucide-react'
import { Container } from '../ui/Container'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all ${
        scrolled ? 'bg-background/80 backdrop-blur-md !border-border' : ''
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <Grid2x2 className="w-6 h-6" />
              <span className="font-semibold text-lg">Pastel</span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm text-text-secondary hover:text-black transition-colors"
              >
                Features
              </a>
              <a
                href="#examples"
                className="text-sm text-text-secondary hover:text-black transition-colors"
              >
                Examples
              </a>
              <a
                href="#installation"
                className="text-sm text-text-secondary hover:text-black transition-colors"
              >
                Installation
              </a>
              <a
                href="https://github.com/your-repo/pastel"
                className="text-sm text-text-secondary hover:text-black transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-background-secondary"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            <button className="md:hidden p-2 rounded-md hover:bg-background-secondary">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}

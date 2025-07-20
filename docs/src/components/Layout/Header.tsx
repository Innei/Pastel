import { useState, useEffect } from 'react'
import { Menu, Grid2x2, Github } from 'lucide-react'
import { Container } from '../ui/Container'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                Features
              </a>
              <a
                href="#examples"
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                Examples
              </a>
              <a
                href="#installation"
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                Installation
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-repo/pastel"
              className="p-2 rounded-md hover:bg-background-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <button className="md:hidden p-2 rounded-md hover:bg-background-secondary">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}

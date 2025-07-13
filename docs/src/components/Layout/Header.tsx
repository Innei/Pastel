import ThemeToggle from '../ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center mx-auto px-4">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="currentColor" className="text-pink"/>
              <circle cx="11" cy="13" r="2" fill="white"/>
              <circle cx="21" cy="13" r="2" fill="white"/>
              <path d="M10 20C10 20 13 23 16 23C19 23 22 20 22 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h1 className="text-lg font-semibold">Pastel Palette</h1>
          </div>
          
          <nav className="flex items-center gap-6">
            <a 
              href="#palette" 
              className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
            >
              Palette
            </a>
            <a 
              href="#examples" 
              className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
            >
              Examples
            </a>
            <a 
              href="https://github.com/innei/pastel-palette" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
            >
              GitHub
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-text-secondary">
            <p>© 2024 Pastel Palette. Made with 💖</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://github.com/innei/pastel-palette" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://npmjs.com/package/@pastel-palette/colors" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text transition-colors"
            >
              npm
            </a>
            <a 
              href="#" 
              className="text-text-secondary hover:text-text transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
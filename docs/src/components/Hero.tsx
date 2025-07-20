import { Container } from './ui/Container'
import { ArrowRight, Star, Palette, Zap } from 'lucide-react'
import pkg from '../../../package.json'
export function Hero() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient using semantic colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary via-background-tertiary to-fill dark:from-background-secondary/80 dark:via-background-tertiary/60 dark:to-fill/80" />

      {/* Animated gradient orbs using project colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Modern Color System</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                A thoughtfully crafted
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue">
                  {' '}
                  color system
                </span>{' '}
                for modern interfaces
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary max-w-lg">
                Pastel provides a comprehensive color palette designed for
                accessibility, consistency, and visual harmony across your
                applications.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">Beautiful</p>
                  <p className="text-xs text-text-secondary">
                    Carefully crafted
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue/10 text-blue">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">Accessible</p>
                  <p className="text-xs text-text-secondary">WCAG compliant</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple/10 text-purple">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text">Consistent</p>
                  <p className="text-xs text-text-secondary">
                    Across platforms
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#installation"
                className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-full bg-accent text-white hover:bg-accent/90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-lg shadow-accent/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={pkg.repo.url}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium rounded-full bg-background-secondary text-text border border-border hover:bg-background-tertiary transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right content - Color showcase */}
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              {/* Color cards using project colors */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink to-pink-dark shadow-lg shadow-pink/25 transform rotate-[-6deg]" />
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue to-blue-dark shadow-lg shadow-blue/25 transform rotate-[3deg]" />
              </div>

              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple to-purple-dark shadow-lg shadow-purple/25 transform rotate-[6deg]" />
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-green to-green-dark shadow-lg shadow-green/25 transform rotate-[-3deg]" />
              </div>

              {/* Floating elements using project colors */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow/20 dark:bg-yellow/10 rounded-full blur-2xl animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink/20 dark:bg-pink/10 rounded-full blur-2xl animate-bounce animation-delay-1000" />
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-text">20+</p>
                <p className="text-sm text-text-secondary">Colors</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text">100%</p>
                <p className="text-sm text-text-secondary">Accessible</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-text">3</p>
                <p className="text-sm text-text-secondary">Themes</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

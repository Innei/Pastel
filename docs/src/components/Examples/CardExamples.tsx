export function CardExamples() {
  return (
    <div className="card p-8 space-y-8">
      <div className="text-center">
        <h4 className="heading-3 text-foreground mb-2">Card Gallery</h4>
        <p className="text-muted">Clean cards for every need</p>
      </div>

      <div className="space-y-8">
        {/* Basic Cards */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Basic Cards</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 hover:border-foreground/20 transition-colors">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Default Card
                </h3>
                <p className="text-muted">
                  A simple card using semantic background and border colors
                </p>
              </div>
            </div>

            <div className="bg-pink border border-pink-dark rounded-md p-6 hover:opacity-90 transition-opacity">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-white">Pink Card</h3>
                <p className="text-white/80">
                  Vibrant pastel card with Pastel colors
                </p>
              </div>
            </div>

            <div className="card bg-muted p-6 hover:border-foreground/20 transition-colors">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Background Card
                </h3>
                <p className="text-muted">Card with subtle background color</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Interactive Cards</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 cursor-pointer hover:border-foreground transition-colors group">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Hover Card
                </h3>
                <p className="text-muted">Border changes color on hover</p>
              </div>
            </div>

            <div className="card p-6 cursor-pointer hover:bg-muted transition-colors">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Background Hover
                </h3>
                <p className="text-muted">Background changes on hover</p>
              </div>
            </div>

            <div className="card p-6 cursor-pointer hover:translate-y-[-2px] transition-transform">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Lift Card
                </h3>
                <p className="text-muted">Subtle lift effect on hover</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Content Cards</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Card Title
                </h3>
                <p className="text-muted">
                  Clean card design that works perfectly for showcasing content
                  with a minimal aesthetic.
                </p>
                <div className="flex gap-2">
                  <button className="btn btn-primary">Learn More</button>
                  <button className="btn btn-secondary">Get Started</button>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Another Card
                </h3>
                <p className="text-muted">
                  Consistent styling across all card components for a unified
                  design system.
                </p>
                <div className="flex gap-2">
                  <button className="btn btn-secondary">Explore</button>
                  <button className="btn btn-secondary">Try Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nested Cards */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Nested Cards</h5>
          <div className="card bg-muted p-8">
            <div className="text-center mb-6">
              <h3 className="heading-3 text-foreground mb-2">
                Parent Container
              </h3>
              <p className="text-muted">Clean nested card hierarchy</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-background p-6">
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Nested Card 1
                  </h4>
                  <p className="text-sm text-muted">
                    Using depth hierarchy for clean visual separation
                  </p>
                </div>
              </div>
              <div className="card bg-background p-6">
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Nested Card 2
                  </h4>
                  <p className="text-sm text-muted">
                    Perfect for organizing related content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Feature Cards</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 hover:border-foreground/20 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-pink rounded-md flex items-center justify-center text-white text-2xl">
                  C
                </div>
                <h4 className="font-semibold text-foreground">Color System</h4>
                <p className="text-sm text-muted">
                  13 beautiful colors with light/dark variants
                </p>
              </div>
            </div>

            <div className="card p-6 hover:border-foreground/20 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue rounded-md flex items-center justify-center text-white text-2xl">
                  T
                </div>
                <h4 className="font-semibold text-foreground">TypeScript</h4>
                <p className="text-sm text-muted">
                  Full type definitions for all color values
                </p>
              </div>
            </div>

            <div className="card p-6 hover:border-foreground/20 transition-colors">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-green rounded-md flex items-center justify-center text-white text-2xl">
                  T
                </div>
                <h4 className="font-semibold text-foreground">TailwindCSS</h4>
                <p className="text-sm text-muted">
                  CSS-based configuration with @theme directives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Container } from '../ui/Container'
import { CopyButton } from '../ui/CopyButton'

export const InstallSection = () => {
  return (
    <section
      id="installation"
      className="py-16 sm:py-24 lg:py-32 border-t border-border"
    >
      <Container>
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Installation
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Get started with Pastel Palette in your project with npm or pnpm.
          </p>

          <div className="space-y-8">
            {/* Package Installation */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Package Installation
              </h3>
              <div className="space-y-3">
                <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-lg hover:shadow-black/5">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red/10 text-red">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 17.5228 6.47813 22 12.001 22C17.5238 22 22.001 17.5228 22.001 12C22.001 6.47715 17.5238 2 12.001 2ZM12.001 20C7.58271 20 4.00098 16.4183 4.00098 12C4.00098 7.58172 7.58271 4 12.001 4C16.4193 4 20.001 7.58172 20.001 12C20.001 16.4183 16.4193 20 12.001 20ZM11.001 15H13.001V17H11.001V15ZM13.001 13.355V14H11.001V12.5C11.001 12.2239 11.2249 12 11.501 12H12.001C12.5533 12 13.001 11.5523 13.001 11V10C13.001 9.44772 12.5533 9 12.001 9H10.501C9.94871 9 9.50098 9.44772 9.50098 10H7.50098C7.50098 8.34315 8.84413 7 10.501 7H12.001C13.6578 7 15.001 8.34315 15.001 10V11C15.001 12.1046 14.1056 13 13.001 13V13.355Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-text">
                          npm
                        </span>
                        <p className="text-xs text-text-secondary">
                          Node Package Manager
                        </p>
                      </div>
                    </div>
                    <CopyButton
                      variant="icon"
                      label="Copy npm install"
                      value="npm install @pastel-palette/tailwindcss"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                    <code className="text-sm font-mono text-text">
                      npm install @pastel-palette/tailwindcss
                    </code>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-lg hover:shadow-black/5">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow/10 text-yellow">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2ZM12 4.03L19 7.9V10C19 15 16.03 18.5 12 19.93C7.97 18.5 5 15 5 10V7.9L12 4.03Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-text">
                          pnpm
                        </span>
                        <p className="text-xs text-text-secondary">
                          Fast, disk space efficient
                        </p>
                      </div>
                    </div>
                    <CopyButton
                      variant="icon"
                      label="Copy pnpm install"
                      value="pnpm add @pastel-palette/tailwindcss"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                    <code className="text-sm font-mono text-text">
                      pnpm add @pastel-palette/tailwindcss
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* TailwindCSS v4 Integration */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                TailwindCSS v4 Integration
              </h3>
              <p className="text-text-secondary mb-4">
                Import the generated theme CSS in your main CSS file. Choose
                your preferred color space:
              </p>
              <div className="space-y-3">
                <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-lg hover:shadow-black/5">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green/10 text-green">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-text">
                          OKLCH
                        </span>
                        <p className="text-xs text-text-secondary">
                          Recommended • Perceptual uniformity
                        </p>
                      </div>
                    </div>
                    <CopyButton
                      variant="icon"
                      label="Copy OKLCH import"
                      value="@import '@pastel-palette/tailwindcss/dist/theme-oklch.css';"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                    <code className="text-sm font-mono text-text">
                      @import
                      '@pastel-palette/tailwindcss/dist/theme-oklch.css';
                    </code>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-lg hover:shadow-black/5">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue/10 text-blue">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-text">
                          sRGB
                        </span>
                        <p className="text-xs text-text-secondary">
                          Fallback • Universal support
                        </p>
                      </div>
                    </div>
                    <CopyButton
                      variant="icon"
                      label="Copy sRGB import"
                      value="@import '@pastel-palette/tailwindcss/dist/theme-srgb.css';"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                    <code className="text-sm font-mono text-text">
                      @import '@pastel-palette/tailwindcss/dist/theme-srgb.css';
                    </code>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-lg hover:shadow-black/5">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple/10 text-purple">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L3.09 8.26L4 21L12 22L20 21L20.91 8.26L12 2ZM17.5 9.5H14.5V17.5H9.5V9.5H6.5L12 4.5L17.5 9.5Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-text">
                          P3
                        </span>
                        <p className="text-xs text-text-secondary">
                          Wide Gamut • Enhanced colors
                        </p>
                      </div>
                    </div>
                    <CopyButton
                      variant="icon"
                      label="Copy P3 import"
                      value="@import '@pastel-palette/tailwindcss/dist/theme-p3.css';"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                    <code className="text-sm font-mono text-text">
                      @import '@pastel-palette/tailwindcss/dist/theme-p3.css';
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Basic Usage
              </h3>
              <p className="text-text-secondary mb-6">
                Three ways to use Pastel colors in your project:
              </p>

              <div className="space-y-6">
                {/* CSS Variables */}
                <div>
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue/10 border border-blue/20">
                      <span className="text-blue text-sm font-bold">1</span>
                    </div>
                    <span>CSS Variables</span>
                    <span className="px-2 py-0.5 text-xs bg-blue/10 text-blue rounded-full border border-blue/20">
                      Native
                    </span>
                  </h4>
                  <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-xl hover:shadow-black/10">
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple/10 border border-purple/20">
                          <svg
                            className="h-3 w-3 text-purple"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                            <polyline points="14,2 14,8 20,8" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-text">
                          styles.css
                        </span>
                        <span className="px-1.5 py-0.5 text-xs bg-background rounded text-text-secondary border border-border">
                          CSS
                        </span>
                      </div>
                      <CopyButton
                        variant="icon"
                        label="Copy CSS Variables"
                        value={`
.button {
background-color: var(--color-accent);
color: var(--color-white);
border: 1px solid var(--color-border);
}

.card {
background-color: var(--color-background-secondary);
border: 1px solid var(--color-border);
color: var(--color-text);
}`}
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                      <pre className="text-sm font-mono text-text overflow-x-auto">
                        <code>
                          <span className="text-purple">.button</span>{' '}
                          <span className="text-text-secondary">{'{'}</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">background-color</span>
                          <span className="text-text-secondary">:</span>{' '}
                          <span className="text-green">
                            var(--color-accent)
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">color</span>
                          <span className="text-text-secondary">:</span>{' '}
                          <span className="text-green">var(--color-white)</span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">border</span>
                          <span className="text-text-secondary">:</span>{' '}
                          <span className="text-orange">1px solid</span>{' '}
                          <span className="text-green">
                            var(--color-border)
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          <span className="text-text-secondary">{'}'}</span>
                          {'\n\n'}
                          <span className="text-purple">.card</span>{' '}
                          <span className="text-text-secondary">{'{'}</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">background-color</span>
                          <span className="text-text-secondary">:</span>{' '}
                          <span className="text-green">
                            var(--color-background-secondary)
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">border</span>
                          <span className="text-text-secondary">:</span>{' '}
                          <span className="text-orange">1px solid</span>{' '}
                          <span className="text-green">
                            var(--color-border)
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">color</span>
                          <span className="text-text-secondary">:</span>{' '}
                          <span className="text-green">var(--color-text)</span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          <span className="text-text-secondary">{'}'}</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* JSX ClassNames */}
                <div>
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink/10 border border-pink/20">
                      <span className="text-pink text-sm font-bold">2</span>
                    </div>
                    <span>JSX with TailwindCSS Classes</span>
                    <span className="px-2 py-0.5 text-xs bg-pink/10 text-pink rounded-full border border-pink/20">
                      React
                    </span>
                  </h4>
                  <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-xl hover:shadow-black/10">
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan/10 border border-cyan/20">
                          <svg
                            className="h-3 w-3 text-cyan"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-text">
                          Button.tsx
                        </span>
                        <span className="px-1.5 py-0.5 text-xs bg-background rounded text-text-secondary border border-border">
                          TSX
                        </span>
                      </div>
                      <CopyButton
                        variant="icon"
                        label="Copy JSX with TailwindCSS Classes"
                        value={`// Using semantic colors
<button className="bg-accent text-white border border-border hover:opacity-90">
Click me
</button>

// Using specific colors
<div className="bg-background-secondary text-text border border-border-secondary">
<h3 className="text-text">Card Title</h3>
<p className="text-text-secondary">Card description</p>
</div>`}
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                      <pre className="text-sm font-mono text-text overflow-x-auto">
                        <code>
                          <span className="text-text-secondary">
                            // Using semantic colors
                          </span>
                          {'\n'}
                          <span className="text-text-secondary">{'<'}</span>
                          <span className="text-blue">button</span>{' '}
                          <span className="text-purple">className</span>
                          <span className="text-text-secondary">=</span>
                          <span className="text-green">
                            "bg-accent text-white border border-border
                            hover:opacity-90"
                          </span>
                          <span className="text-text-secondary">{'>'}</span>
                          {'\n'}
                          {'  '}Click me{'\n'}
                          <span className="text-text-secondary">{'</'}</span>
                          <span className="text-blue">button</span>
                          <span className="text-text-secondary">{'>'}</span>
                          {'\n\n'}
                          <span className="text-text-secondary">
                            // Using specific colors
                          </span>
                          {'\n'}
                          <span className="text-text-secondary">{'<'}</span>
                          <span className="text-blue">div</span>{' '}
                          <span className="text-purple">className</span>
                          <span className="text-text-secondary">=</span>
                          <span className="text-green">
                            "bg-background-secondary text-text border
                            border-border-secondary"
                          </span>
                          <span className="text-text-secondary">{'>'}</span>
                          {'\n'}
                          {'  '}
                          <span className="text-text-secondary">{'<'}</span>
                          <span className="text-blue">h3</span>{' '}
                          <span className="text-purple">className</span>
                          <span className="text-text-secondary">=</span>
                          <span className="text-green">"text-text"</span>
                          <span className="text-text-secondary">{'>'}</span>
                          Card Title
                          <span className="text-text-secondary">{'</'}</span>
                          <span className="text-blue">h3</span>
                          <span className="text-text-secondary">{'>'}</span>
                          {'\n'}
                          {'  '}
                          <span className="text-text-secondary">{'<'}</span>
                          <span className="text-blue">p</span>{' '}
                          <span className="text-purple">className</span>
                          <span className="text-text-secondary">=</span>
                          <span className="text-green">
                            "text-text-secondary"
                          </span>
                          <span className="text-text-secondary">{'>'}</span>
                          Card description
                          <span className="text-text-secondary">{'</'}</span>
                          <span className="text-blue">p</span>
                          <span className="text-text-secondary">{'>'}</span>
                          {'\n'}
                          <span className="text-text-secondary">{'</'}</span>
                          <span className="text-blue">div</span>
                          <span className="text-text-secondary">{'>'}</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* PostCSS @apply */}
                <div>
                  <h4 className="text-lg font-medium mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple/10 border border-purple/20">
                      <span className="text-purple text-sm font-bold">3</span>
                    </div>
                    <span>PostCSS with @apply</span>
                    <span className="px-2 py-0.5 text-xs bg-purple/10 text-purple rounded-full border border-purple/20">
                      PostCSS
                    </span>
                  </h4>
                  <div className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary/30 backdrop-blur-sm transition-all duration-200 hover:border-border-secondary hover:shadow-xl hover:shadow-black/10">
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-background-secondary/50 to-background-secondary/30 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-orange/10 border border-orange/20">
                          <svg
                            className="h-3 w-3 text-orange"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                            <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-text">
                          components.css
                        </span>
                        <span className="px-1.5 py-0.5 text-xs bg-background rounded text-text-secondary border border-border">
                          CSS
                        </span>
                      </div>
                      <CopyButton
                        variant="icon"
                        label="Copy PostCSS with @apply"
                        value={`.btn-primary {
@apply bg-accent text-white border border-border;
@apply hover:opacity-90 focus:ring-2 focus:ring-accent;
}

.card {
@apply bg-background-secondary border border-border;
@apply text-text rounded-lg p-4;
}

.input {
@apply bg-background border border-border;
@apply text-text placeholder:text-text-tertiary;
@apply focus:border-accent focus:ring-1 focus:ring-accent;
}`}
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-br from-material-thin/20 to-material-thin/10">
                      <pre className="text-sm font-mono text-text overflow-x-auto">
                        <code>
                          <span className="text-purple">.btn-primary</span>{' '}
                          <span className="text-text-secondary">{'{'}</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">@apply</span>{' '}
                          <span className="text-green">
                            bg-accent text-white border border-border
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">@apply</span>{' '}
                          <span className="text-green">
                            hover:opacity-90 focus:ring-2 focus:ring-accent
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          <span className="text-text-secondary">{'}'}</span>
                          {'\n\n'}
                          <span className="text-purple">.card</span>{' '}
                          <span className="text-text-secondary">{'{'}</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">@apply</span>{' '}
                          <span className="text-green">
                            bg-background-secondary border border-border
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">@apply</span>{' '}
                          <span className="text-green">
                            text-text rounded-lg p-4
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          <span className="text-text-secondary">{'}'}</span>
                          {'\n\n'}
                          <span className="text-purple">.input</span>{' '}
                          <span className="text-text-secondary">{'{'}</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">@apply</span>{' '}
                          <span className="text-green">
                            bg-background border border-border
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">@apply</span>{' '}
                          <span className="text-green">
                            text-text placeholder:text-text-tertiary
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          {'  '}
                          <span className="text-blue">@apply</span>{' '}
                          <span className="text-green">
                            focus:border-accent focus:ring-1 focus:ring-accent
                          </span>
                          <span className="text-text-secondary">;</span>
                          {'\n'}
                          <span className="text-text-secondary">{'}'}</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

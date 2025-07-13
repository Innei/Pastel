import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { colorSystem } from '@pastel-palette/colors'
import { generateCSS } from '../src/generator'
import type { GeneratorConfig, DarkModeStrategy } from '@pastel-palette/colors'

const strategies: DarkModeStrategy[] = [
  'media-query',
  'class',
  'data-attribute',
]

// Ensure dist directory exists
const distDir = join(__dirname, '..', 'dist')
mkdirSync(distDir, { recursive: true })

strategies.forEach((strategy) => {
  const config: GeneratorConfig = {
    colors: colorSystem,
    darkMode: {
      strategy,
      selector:
        strategy === 'class'
          ? '.dark'
          : strategy === 'data-attribute'
            ? 'html[data-theme="dark"]'
            : undefined,
    },
  }

  const css = generateCSS(config)
  const filename = `theme-${strategy}.css`
  const filepath = join(distDir, filename)

  writeFileSync(filepath, css, 'utf-8')
  console.log(`✓ Generated ${filename}`)
})

const defaultConfig: GeneratorConfig = {
  colors: colorSystem,
  darkMode: { strategy: 'media-query' },
}

const defaultCss = generateCSS(defaultConfig)
const defaultPath = join(distDir, 'theme.css')
writeFileSync(defaultPath, defaultCss, 'utf-8')
console.log('✓ Generated theme.css (default)')

console.log('\n✨ All TailwindCSS v4 theme files generated successfully!')

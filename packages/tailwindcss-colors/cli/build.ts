import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { colorSystem } from '@pastel-palette/colors'
import { generateCSS } from '../src/generator'
import type {
  GeneratorConfig,
  DarkModeStrategy,
  ColorFormat,
} from '@pastel-palette/colors'

const strategies: DarkModeStrategy[] = [
  'media-query',
  'class',
  'data-attribute',
]

const colorSpaces: ColorFormat[] = ['srgb', 'oklch', 'p3']
const contrastVariants = ['regular', 'high-contrast', 'kawaii']

// Ensure dist directory exists
const distDir = join(__dirname, '..', 'dist')
mkdirSync(distDir, { recursive: true })

// Generate for each strategy, color space, and contrast combination
strategies.forEach((strategy) => {
  colorSpaces.forEach((colorSpace) => {
    contrastVariants.forEach((contrast) => {
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
        formatOptions: {
          colorSpace,
        },
      }

      const css = generateCSS(config)
      const filename =
        contrast === 'regular'
          ? `theme-${strategy}-${colorSpace}.css`
          : contrast === 'high-contrast'
            ? `theme-${strategy}-${colorSpace}-hc.css`
            : `theme-${strategy}-${colorSpace}-kawaii.css`
      const filepath = join(distDir, filename)

      writeFileSync(filepath, css, 'utf-8')
      console.log(`✓ Generated ${filename}`)
    })
  })
})

// Also generate shorter named versions for common cases
const commonConfigs = [
  { suffix: '-srgb', colorSpace: 'srgb' as ColorFormat },
  { suffix: '-oklch', colorSpace: 'oklch' as ColorFormat },
  { suffix: '-p3', colorSpace: 'p3' as ColorFormat },
]

commonConfigs.forEach(({ suffix, colorSpace }) => {
  contrastVariants.forEach((contrast) => {
    const config: GeneratorConfig = {
      colors: colorSystem,
      darkMode: { strategy: 'media-query' },
      formatOptions: {
        colorSpace,
      },
    }

    const css = generateCSS(config)
    const filename =
      contrast === 'regular' 
        ? `theme${suffix}.css` 
        : contrast === 'high-contrast'
          ? `theme${suffix}-hc.css`
          : `theme${suffix}-kawaii.css`
    const filepath = join(distDir, filename)

    writeFileSync(filepath, css, 'utf-8')
    console.log(`✓ Generated ${filename}`)
  })
})

console.log('\n✨ All TailwindCSS v4 theme files generated successfully!')

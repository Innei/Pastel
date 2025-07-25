import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { ColorFormat, GeneratorConfig } from '@pastel-palette/colors'
import { colorSystem } from '@pastel-palette/colors'

import { generateCSS } from '../src/generator'

const colorSpaces: ColorFormat[] = ['srgb', 'oklch', 'p3']

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Ensure dist directory exists
const distDir = join(__dirname, '..', 'dist')
mkdirSync(distDir, { recursive: true })

// Generate for each color space only
colorSpaces.forEach((colorSpace) => {
  const config: GeneratorConfig = {
    colors: colorSystem,
    formatOptions: {
      colorSpace,
    },
  }

  const css = generateCSS(config)
  const filename = `theme-${colorSpace}.css`
  const filepath = join(distDir, filename)

  writeFileSync(filepath, css, 'utf-8')
  console.info(`✓ Generated ${filename}`)
})

console.info('\n✨ All TailwindCSS v4 theme files generated successfully!')

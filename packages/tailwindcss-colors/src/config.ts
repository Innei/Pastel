import type { DarkModeConfig, GeneratorConfig } from '@pastel-palette/colors'
import { colorSystem } from '@pastel-palette/colors'

export function createConfig(
  options?: Partial<GeneratorConfig>,
): GeneratorConfig {
  return {
    colors: colorSystem,
    darkMode: options?.darkMode || { strategy: 'media-query' },
    prefix: options?.prefix,
    formatOptions: options?.formatOptions,
  }
}

export function mediaDarkMode(): DarkModeConfig {
  return { strategy: 'media-query' }
}

export function classDarkMode(selector = '.dark'): DarkModeConfig {
  return { strategy: 'class', selector }
}

export function dataAttributeDarkMode(
  selector = 'html[data-theme="dark"]',
): DarkModeConfig {
  return { strategy: 'data-attribute', selector }
}

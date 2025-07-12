import type { DarkModeConfig, GeneratorConfig } from '@color-system/colors';
import { colorSystem } from '@color-system/colors';

export function createConfig(options?: Partial<GeneratorConfig>): GeneratorConfig {
  return {
    colors: colorSystem,
    darkMode: options?.darkMode || { strategy: 'media-query' },
    prefix: options?.prefix,
    formatOptions: options?.formatOptions
  };
}

export function mediaDarkMode(): DarkModeConfig {
  return { strategy: 'media-query' };
}

export function classDarkMode(selector: string = '.dark'): DarkModeConfig {
  return { strategy: 'class', selector };
}

export function dataAttributeDarkMode(selector: string = 'html[data-theme="dark"]'): DarkModeConfig {
  return { strategy: 'data-attribute', selector };
}
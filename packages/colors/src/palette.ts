import {
  highContrastApplicationColors,
  highContrastBackgroundColors,
  highContrastColors,
  highContrastElementColors,
  highContrastFillColors,
  highContrastMaterialColors,
} from './themes/high-contrast'
import {
  kawaiiApplicationColors,
  kawaiiBackgroundColors,
  kawaiiColors,
  kawaiiElementColors,
  kawaiiFillColors,
  kawaiiMaterialColors,
} from './themes/kawaii'
import {
  regularApplicationColors,
  regularBackgroundColors,
  regularColors,
  regularElementColors,
  regularFillColors,
  regularMaterialColors,
} from './themes/regular'
import type { ColorPalette, ColorSystem, ThemeColorSystem } from './types'

export const regularColorSystem: ThemeColorSystem = {
  colors: regularColors,
  element: regularElementColors,
  background: regularBackgroundColors,
  fill: regularFillColors,
  material: regularMaterialColors,
  application: regularApplicationColors,
}

export const kawaiiColorSystem: ThemeColorSystem = {
  colors: kawaiiColors,
  element: kawaiiElementColors,
  background: kawaiiBackgroundColors,
  fill: kawaiiFillColors,
  material: kawaiiMaterialColors,
  application: kawaiiApplicationColors,
}

export const highContrastColorSystem: ThemeColorSystem = {
  colors: highContrastColors,
  element: highContrastElementColors,
  background: highContrastBackgroundColors,
  fill: highContrastFillColors,
  material: highContrastMaterialColors,
  application: highContrastApplicationColors,
}

export const colorSystem: ColorSystem = {
  regular: regularColorSystem,
  kawaii: kawaiiColorSystem,
  'high-contrast': highContrastColorSystem,
}

export const colorPalette: ColorPalette = {
  colors: colorSystem,
  meta: {
    name: 'Universal Color System',
    description:
      'A comprehensive color system with regular, kawaii, and high-contrast themes',
    theme: 'regular',
  },
}

// Export individual theme systems for convenience - using different names to avoid conflicts
export { regularColorSystem as regularTheme }
export { kawaiiColorSystem as kawaiiTheme }
export { highContrastColorSystem as highContrastTheme }

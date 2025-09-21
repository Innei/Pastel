import type { ApplicationColorName, ColorVariants } from '../../types'
import { createColor } from '../../utils'

export const regularApplicationColors: Record<
  ApplicationColorName,
  ColorVariants
> = {
  accent: {
    light: createColor('oklch(0.65 0.18 238)'),
    dark: createColor('oklch(0.70 0.16 237)'),
  },

  primary: {
    light: createColor('oklch(0.55 0.20 249)'),
    dark: createColor('oklch(0.75 0.17 250)'),
  },

  secondary: {
    light: createColor('oklch(0.77 0.14 171)'),
    dark: createColor('oklch(0.8 0.14 170)'),
  },
}

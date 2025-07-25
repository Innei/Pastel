import type { ApplicationColorName, ColorVariants } from '../../types'
import { createColor } from '../../utils'

export const kawaiiApplicationColors: Record<
  ApplicationColorName,
  ColorVariants
> = {
  accent: {
    light: createColor('oklch(0.71 0.14 237)'),
    dark: createColor('oklch(0.67 0.14 237)'),
  },

  primary: {
    light: createColor('oklch(0.68 0.14 237)'),
    dark: createColor('oklch(0.7 0.14 237)'),
  },

  secondary: {
    light: createColor('oklch(0.7486 0.1168 187.91)'),
    dark: createColor('oklch(0.77 0.1168 187.91)'),
  },
}

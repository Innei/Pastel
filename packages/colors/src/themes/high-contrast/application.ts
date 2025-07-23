import type { ApplicationColorName, ColorVariants } from '../../types'
import { createColor } from '../../utils'

export const highContrastApplicationColors: Record<
  ApplicationColorName,
  ColorVariants
> = {
  accent: {
    light: createColor('oklch(0.45 0.25 237)'),
    dark: createColor('oklch(0.75 0.2 237)'),
  },

  primary: {
    light: createColor('oklch(0.4 0.28 260)'),
    dark: createColor('oklch(0.75 0.22 260)'),
  },

  secondary: {
    light: createColor('oklch(0.5 0.2 155)'),
    dark: createColor('oklch(0.77 0.18 155)'),
  },
}

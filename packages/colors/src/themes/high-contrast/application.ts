import type { ApplicationColorName, ColorVariants } from '../../types'
import { createColor } from '../../utils'

export const highContrastApplicationColors: Record<
  ApplicationColorName,
  ColorVariants
> = {
  accent: {
    light: createColor('oklch(0.45 0.25 238)'),
    dark: createColor('oklch(0.75 0.2 236)'),
  },

  primary: {
    light: createColor('oklch(0.4 0.28 261)'),
    dark: createColor('oklch(0.75 0.22 259)'),
  },

  secondary: {
    light: createColor('oklch(0.5 0.2 156)'),
    dark: createColor('oklch(0.77 0.18 154)'),
  },
}

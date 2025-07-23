import type { ApplicationColorName, ColorVariants } from '../../types'
import { createColor } from '../../utils'

export const kawaiiApplicationColors: Record<
  ApplicationColorName,
  ColorVariants
> = {
  accent: {
    light: createColor('oklch(0.85 0.12 237)'),
    dark: createColor('oklch(0.65 0.14 237)'),
  },

  primary: {
    light: createColor('oklch(0.87 0.16 350)'),
    dark: createColor('oklch(0.7 0.18 350)'),
  },

  secondary: {
    light: createColor('oklch(0.84 0.14 280)'),
    dark: createColor('oklch(0.67 0.16 280)'),
  },
}

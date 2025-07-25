import type { ColorVariants, GrayScaleColorName } from '../../types'
import { createColor } from '../../utils'

export const kawaiiGrayScale: Record<GrayScaleColorName, ColorVariants> = {
  gray1: {
    light: createColor('oklch(0.15 0 0)'),
    dark: createColor('oklch(0.2 0 0)'),
  },

  gray2: {
    light: createColor('oklch(0.3 0 0)'),
    dark: createColor('oklch(0.35 0 0)'),
  },

  gray3: {
    light: createColor('oklch(0.45 0 0)'),
    dark: createColor('oklch(0.5 0 0)'),
  },

  gray4: {
    light: createColor('oklch(0.55 0 0)'),
    dark: createColor('oklch(0.6 0 0)'),
  },

  gray5: {
    light: createColor('oklch(0.65 0 0)'),
    dark: createColor('oklch(0.7 0 0)'),
  },

  gray6: {
    light: createColor('oklch(0.75 0 0)'),
    dark: createColor('oklch(0.8 0 0)'),
  },

  gray7: {
    light: createColor('oklch(0.8 0 0)'),
    dark: createColor('oklch(0.75 0 0)'),
  },

  gray8: {
    light: createColor('oklch(0.85 0 0)'),
    dark: createColor('oklch(0.7 0 0)'),
  },

  gray9: {
    light: createColor('oklch(0.9 0 0)'),
    dark: createColor('oklch(0.65 0 0)'),
  },

  gray10: {
    light: createColor('oklch(0.95 0 0)'),
    dark: createColor('oklch(0.6 0 0)'),
  },
}
import type { ColorVariants, GrayScaleColorName } from '../../types'
import { createColor } from '../../utils'

export const regularGrayScale: Record<GrayScaleColorName, ColorVariants> = {
  gray1: {
    light: createColor('oklch(0.900 0 0)'),
    dark: createColor('oklch(0.200 0 0)'),
  },

  gray2: {
    light: createColor('oklch(0.850 0 0)'),
    dark: createColor('oklch(0.250 0 0)'),
  },

  gray3: {
    light: createColor('oklch(0.800 0 0)'),
    dark: createColor('oklch(0.300 0 0)'),
  },

  gray4: {
    light: createColor('oklch(0.750 0 0)'),
    dark: createColor('oklch(0.350 0 0)'),
  },

  gray5: {
    light: createColor('oklch(0.700 0 0)'),
    dark: createColor('oklch(0.400 0 0)'),
  },

  gray6: {
    light: createColor('oklch(0.650 0 0)'),
    dark: createColor('oklch(0.450 0 0)'),
  },

  gray7: {
    light: createColor('oklch(0.600 0 0)'),
    dark: createColor('oklch(0.500 0 0)'),
  },

  gray8: {
    light: createColor('oklch(0.550 0 0)'),
    dark: createColor('oklch(0.550 0 0)'),
  },

  gray9: {
    light: createColor('oklch(0.500 0 0)'),
    dark: createColor('oklch(0.600 0 0)'),
  },

  gray10: {
    light: createColor('oklch(0.450 0 0)'),
    dark: createColor('oklch(0.650 0 0)'),
  },
}

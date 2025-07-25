import type { ColorVariants, GrayScaleColorName } from '../../types'
import { createColor } from '../../utils'

export const regularGrayScale: Record<GrayScaleColorName, ColorVariants> = {
  gray1: {
    light: createColor('oklch(0.100 0 0)'),
    dark: createColor('oklch(0.150 0 0)'),
  },

  gray2: {
    light: createColor('oklch(0.180 0 0)'),
    dark: createColor('oklch(0.230 0 0)'),
  },

  gray3: {
    light: createColor('oklch(0.260 0 0)'),
    dark: createColor('oklch(0.310 0 0)'),
  },

  gray4: {
    light: createColor('oklch(0.340 0 0)'),
    dark: createColor('oklch(0.390 0 0)'),
  },

  gray5: {
    light: createColor('oklch(0.420 0 0)'),
    dark: createColor('oklch(0.470 0 0)'),
  },

  gray6: {
    light: createColor('oklch(0.500 0 0)'),
    dark: createColor('oklch(0.550 0 0)'),
  },

  gray7: {
    light: createColor('oklch(0.580 0 0)'),
    dark: createColor('oklch(0.630 0 0)'),
  },

  gray8: {
    light: createColor('oklch(0.660 0 0)'),
    dark: createColor('oklch(0.710 0 0)'),
  },

  gray9: {
    light: createColor('oklch(0.740 0 0)'),
    dark: createColor('oklch(0.790 0 0)'),
  },

  gray10: {
    light: createColor('oklch(0.820 0 0)'),
    dark: createColor('oklch(0.870 0 0)'),
  },
}
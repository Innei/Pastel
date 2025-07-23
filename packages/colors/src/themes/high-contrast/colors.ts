import type { ColorVariants, RegularColorName } from '../../types'
import { createColor } from '../../utils'

export const highContrastColors: Record<RegularColorName, ColorVariants> = {
  blue: {
    light: createColor('oklch(0.45 0.25 237)'),
    dark: createColor('oklch(0.75 0.2 237)'),
  },

  pink: {
    light: createColor('oklch(0.5 0.3 350)'),
    dark: createColor('oklch(0.78 0.25 350)'),
  },

  purple: {
    light: createColor('oklch(0.45 0.28 280)'),
    dark: createColor('oklch(0.75 0.22 280)'),
  },

  green: {
    light: createColor('oklch(0.5 0.2 155)'),
    dark: createColor('oklch(0.77 0.18 155)'),
  },

  orange: {
    light: createColor('oklch(0.55 0.18 60)'),
    dark: createColor('oklch(0.78 0.2 60)'),
  },

  yellow: {
    light: createColor('oklch(0.65 0.15 100)'),
    dark: createColor('oklch(0.82 0.16 100)'),
  },

  sky: {
    light: createColor('oklch(0.5 0.2 210)'),
    dark: createColor('oklch(0.8 0.16 210)'),
  },

  red: {
    light: createColor('oklch(0.5 0.28 20)'),
    dark: createColor('oklch(0.75 0.24 20)'),
  },

  brown: {
    light: createColor('oklch(0.45 0.15 45)'),
    dark: createColor('oklch(0.72 0.14 45)'),
  },

  gray: {
    light: createColor('oklch(0.3 0 0)'),
    dark: createColor('oklch(0.85 0 0)'),
  },

  neutral: {
    light: createColor('oklch(0.25 0 0)'),
    dark: createColor('oklch(0.9 0 0)'),
  },

  black: {
    light: createColor('oklch(0 0 0)'),
    dark: createColor('oklch(0.2 0 0)'),
  },

  white: {
    light: createColor('oklch(1 0 0)'),
    dark: createColor('oklch(0.95 0 0)'),
  },

  teal: {
    light: createColor('oklch(0.45 0.25 180)'),
    dark: createColor('oklch(0.78 0.2 180)'),
  },

  cyan: {
    light: createColor('oklch(0.5 0.22 195)'),
    dark: createColor('oklch(0.8 0.18 195)'),
  },

  indigo: {
    light: createColor('oklch(0.4 0.28 260)'),
    dark: createColor('oklch(0.75 0.22 260)'),
  },

  violet: {
    light: createColor('oklch(0.42 0.3 300)'),
    dark: createColor('oklch(0.78 0.24 300)'),
  },

  lime: {
    light: createColor('oklch(0.6 0.22 125)'),
    dark: createColor('oklch(0.82 0.2 125)'),
  },

  emerald: {
    light: createColor('oklch(0.48 0.22 160)'),
    dark: createColor('oklch(0.78 0.18 160)'),
  },

  amber: {
    light: createColor('oklch(0.62 0.18 85)'),
    dark: createColor('oklch(0.83 0.17 85)'),
  },

  rose: {
    light: createColor('oklch(0.48 0.3 15)'),
    dark: createColor('oklch(0.78 0.22 15)'),
  },

  slate: {
    light: createColor('oklch(0.35 0.02 240)'),
    dark: createColor('oklch(0.82 0.02 240)'),
  },

  zinc: {
    light: createColor('oklch(0.38 0.01 240)'),
    dark: createColor('oklch(0.8 0.01 240)'),
  },
}

import type { ColorVariants, RegularColorName } from '../../types'
import { createColor } from '../../utils'

export const kawaiiColors: Record<RegularColorName, ColorVariants> = {
  blue: {
    light: createColor('oklch(0.75 0.12 237)'),
    dark: createColor('oklch(0.65 0.14 237)'),
  },

  pink: {
    light: createColor('oklch(0.78 0.16 350)'),
    dark: createColor('oklch(0.7 0.18 350)'),
  },

  purple: {
    light: createColor('oklch(0.75 0.14 280)'),
    dark: createColor('oklch(0.67 0.16 280)'),
  },

  green: {
    light: createColor('oklch(0.76 0.12 155)'),
    dark: createColor('oklch(0.68 0.14 155)'),
  },

  orange: {
    light: createColor('oklch(0.77 0.12 60)'),
    dark: createColor('oklch(0.69 0.14 60)'),
  },

  yellow: {
    light: createColor('oklch(0.84 0.1 100)'),
    dark: createColor('oklch(0.73 0.12 100)'),
  },

  sky: {
    light: createColor('oklch(0.78 0.11 210)'),
    dark: createColor('oklch(0.7 0.13 210)'),
  },

  red: {
    light: createColor('oklch(0.75 0.14 20)'),
    dark: createColor('oklch(0.67 0.16 20)'),
  },

  brown: {
    light: createColor('oklch(0.74 0.1 45)'),
    dark: createColor('oklch(0.65 0.12 45)'),
  },

  gray: {
    light: createColor('oklch(0.80 0 0)'),
    dark: createColor('oklch(0.7 0 0)'),
  },

  neutral: {
    light: createColor('oklch(0.76 0 0)'),
    dark: createColor('oklch(0.65 0 0)'),
  },

  black: {
    light: createColor('oklch(0.30 0 0)'),
    dark: createColor('oklch(0.5 0 0)'),
  },

  white: {
    light: createColor('oklch(0.999 0 0)'),
    dark: createColor('oklch(0.95 0 0)'),
  },

  teal: {
    light: createColor('oklch(0.78 0.1 180)'),
    dark: createColor('oklch(0.72 0.12 180)'),
  },

  cyan: {
    light: createColor('oklch(0.80 0.09 195)'),
    dark: createColor('oklch(0.74 0.11 195)'),
  },

  indigo: {
    light: createColor('oklch(0.75 0.11 260)'),
    dark: createColor('oklch(0.69 0.13 260)'),
  },

  violet: {
    light: createColor('oklch(0.77 0.12 300)'),
    dark: createColor('oklch(0.71 0.14 300)'),
  },

  lime: {
    light: createColor('oklch(0.82 0.08 125)'),
    dark: createColor('oklch(0.75 0.1 125)'),
  },

  emerald: {
    light: createColor('oklch(0.78 0.1 160)'),
    dark: createColor('oklch(0.72 0.12 160)'),
  },

  amber: {
    light: createColor('oklch(0.82 0.08 85)'),
    dark: createColor('oklch(0.76 0.1 85)'),
  },

  rose: {
    light: createColor('oklch(0.78 0.13 15)'),
    dark: createColor('oklch(0.72 0.15 15)'),
  },

  slate: {
    light: createColor('oklch(0.76 0.01 240)'),
    dark: createColor('oklch(0.7 0.01 240)'),
  },

  zinc: {
    light: createColor('oklch(0.78 0.005 240)'),
    dark: createColor('oklch(0.71 0.005 240)'),
  },
}

import type { ColorVariants, RegularColorName } from '../../types'
import { createColor } from '../../utils'

export const regularColors: Record<RegularColorName, ColorVariants> = {
  blue: {
    light: createColor('oklch(0.65 0.18 237)'),
    dark: createColor('oklch(0.7 0.16 237)'),
  },

  pink: {
    light: createColor('oklch(0.68 0.22 350)'),
    dark: createColor('oklch(0.73 0.2 350)'),
  },

  purple: {
    light: createColor('oklch(0.65 0.2 280)'),
    dark: createColor('oklch(0.7 0.18 280)'),
  },

  green: {
    light: createColor('oklch(0.67 0.15 155)'),
    dark: createColor('oklch(0.72 0.16 155)'),
  },

  orange: {
    light: createColor('oklch(0.68 0.15 60)'),
    dark: createColor('oklch(0.73 0.16 60)'),
  },

  yellow: {
    light: createColor('oklch(0.75 0.12 100)'),
    dark: createColor('oklch(0.78 0.14 100)'),
  },

  sky: {
    light: createColor('oklch(0.7 0.14 210)'),
    dark: createColor('oklch(0.75 0.13 210)'),
  },

  red: {
    light: createColor('oklch(0.65 0.2 20)'),
    dark: createColor('oklch(0.7 0.19 20)'),
  },

  brown: {
    light: createColor('oklch(0.62 0.12 45)'),
    dark: createColor('oklch(0.67 0.12 45)'),
  },

  gray: {
    light: createColor('oklch(0.65 0 0)'),
    dark: createColor('oklch(0.7 0 0)'),
  },

  neutral: {
    light: createColor('oklch(0.6 0 0)'),
    dark: createColor('oklch(0.65 0 0)'),
  },

  black: {
    light: createColor('oklch(0.2 0 0)'),
    dark: createColor('oklch(0.25 0 0)'),
  },

  white: {
    light: createColor('oklch(0.99 0.005 200)'),
    dark: createColor('oklch(0.97 0 0)'),
  },

  teal: {
    light: createColor('oklch(0.66 0.16 180)'),
    dark: createColor('oklch(0.71 0.15 180)'),
  },

  cyan: {
    light: createColor('oklch(0.7 0.15 195)'),
    dark: createColor('oklch(0.75 0.14 195)'),
  },

  indigo: {
    light: createColor('oklch(0.58 0.2 260)'),
    dark: createColor('oklch(0.65 0.18 260)'),
  },

  violet: {
    light: createColor('oklch(0.62 0.22 300)'),
    dark: createColor('oklch(0.68 0.2 300)'),
  },

  lime: {
    light: createColor('oklch(0.75 0.16 125)'),
    dark: createColor('oklch(0.78 0.17 125)'),
  },

  emerald: {
    light: createColor('oklch(0.64 0.16 160)'),
    dark: createColor('oklch(0.69 0.15 160)'),
  },

  amber: {
    light: createColor('oklch(0.75 0.13 85)'),
    dark: createColor('oklch(0.78 0.14 85)'),
  },

  rose: {
    light: createColor('oklch(0.63 0.21 15)'),
    dark: createColor('oklch(0.68 0.19 15)'),
  },

  slate: {
    light: createColor('oklch(0.55 0.015 240)'),
    dark: createColor('oklch(0.6 0.015 240)'),
  },

  zinc: {
    light: createColor('oklch(0.58 0.01 240)'),
    dark: createColor('oklch(0.63 0.01 240)'),
  },
}

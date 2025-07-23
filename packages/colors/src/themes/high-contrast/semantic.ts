import type {
  ElementColorName,
  MaterialColor,
  MaterialOpacity,
  SemanticColor,
} from '../../types'
import { createColor } from '../../utils'

export const highContrastElementColors: Record<
  ElementColorName,
  SemanticColor
> = {
  text: {
    primary: {
      light: createColor('oklch(0.12 0.02 200)'), // Darker text for high contrast against light backgrounds, based on regular's 0.25
      dark: createColor('oklch(0.98 0.005 200)'), // Very light text for dark mode, amplified from regular's 0.95
    },
    secondary: {
      light: createColor('oklch(0.25 0.02 200)'), // Enhanced from regular's 0.45 for better visibility
      dark: createColor('oklch(0.93 0.01 200)'), // Lighter than regular's 0.85 for maximum contrast
    },
    tertiary: {
      light: createColor('oklch(0.4 0.02 200)'), // Adjusted from regular's 0.6 to increase darkness
      dark: createColor('oklch(0.85 0.015 200)'), // Based on regular's 0.7, made lighter for dark mode
    },
    quaternary: {
      light: createColor('oklch(0.55 0.015 200)'), // From regular's 0.75, darkened for contrast
      dark: createColor('oklch(0.75 0.01 200)'), // Aligned with regular's 0.55 but optimized for visibility
    },
  },

  placeholderText: {
    primary: {
      light: createColor('oklch(0.5 0.015 200)'), // Based on regular's 0.65, slightly darkened for emphasis
      dark: createColor('oklch(0.8 0.01 200)'), // From regular's 0.6, lightened for dark mode contrast
    },
  },

  border: {
    primary: {
      light: createColor('oklch(0.80 0.02 200)'), // 原: 0.85，稍微加深为 0.80
      dark: createColor('oklch(0.25 0.02 200)'), // 原: 0.3，稍微加深为 0.25
    },
    secondary: {
      light: createColor('oklch(0.85 0.01 200)'), // 原: 0.9，稍微加深为 0.85
      dark: createColor('oklch(0.20 0.01 200)'), // 原: 0.25，稍微加深为 0.20
    },
  },

  separator: {
    primary: {
      light: createColor('oklch(0.83 0.01 200)'), // 原: 0.88，稍微加深为 0.83
      dark: createColor('oklch(0.23 0.01 200)'), // 原: 0.28，稍微加深为 0.23
    },
  },

  link: {
    primary: {
      light: createColor('oklch(0.35 0.3 200)'), // Adjusted from regular's 0.7 and hue 250; heightened contrast with more saturation
      dark: createColor('oklch(0.85 0.2 200)'), // From regular's 0.78, lightened and shifted hue
    },
  },

  disabledControl: {
    primary: {
      light: createColor('oklch(0.7 0.01 200)'), // Based on regular's 0.92, slightly darkened for differentiation
      dark: createColor('oklch(0.4 0.01 200)'), // From regular's 0.22, optimized for contrast
    },
  },

  disabledText: {
    primary: {
      light: createColor('oklch(0.6 0.01 200)'), // Adjusted from regular's 0.7 for subtle high contrast
      dark: createColor('oklch(0.5 0.01 200)'), // From regular's 0.5, kept similar but with hue shift
    },
  },
}
export const highContrastBackgroundColors: SemanticColor = {
  primary: {
    light: createColor('oklch(1.0 0.005 200)'), // Near-pure white with a subtle blue-green tint for high contrast
    dark: createColor('oklch(0.08 0.005 200)'), // Very dark blue-green, ensuring strong contrast in dark mode
  },
  secondary: {
    light: createColor('oklch(0.97 0.003 200)'), // Very light secondary background with blue-green hue
    dark: createColor('oklch(0.12 0.008 200)'), // Darker secondary background for better contrast
  },
  tertiary: {
    light: createColor('oklch(0.94 0.005 200)'), // Light tertiary background, shifted to blue-green
    dark: createColor('oklch(0.16 0.008 200)'), // Deeper tertiary background in dark mode
  },
  quaternary: {
    light: createColor('oklch(0.91 0.005 200)'), // Pale quaternary background
    dark: createColor('oklch(0.20 0.008 200)'), // Dark quaternary background for high contrast
  },
  quinary: {
    light: createColor('oklch(0.88 0.005 200)'), // Subtle quinary background
    dark: createColor('oklch(0.24 0.008 200)'), // Dark quinary background
  },
}

export const highContrastFillColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.1 0.005 200)'), // Dark fill for light mode, ensuring high contrast against light backgrounds
    dark: createColor('oklch(0.95 0.005 200)'), // Light fill for dark mode
  },
  secondary: {
    light: createColor('oklch(0.25 0.01 200)'), // Medium-dark secondary fill in light mode
    dark: createColor('oklch(0.85 0.005 200)'), // Lighter secondary fill in dark mode
  },
  tertiary: {
    light: createColor('oklch(0.45 0.01 200)'), // Mid-tone tertiary fill for contrast
    dark: createColor('oklch(0.75 0.005 200)'), // Lighter tertiary fill in dark mode
  },
  quaternary: {
    light: createColor('oklch(0.65 0.005 200)'), // Balanced quaternary fill in light mode
    dark: createColor('oklch(0.6 0.005 200)'), // Adjusted for dark mode contrast
  },
}

export const highContrastMaterialColors: Record<
  MaterialOpacity,
  MaterialColor
> = {
  ultraThick: {
    light: createColor('oklch(0.98 0 0 / 0.95)'), // 高对比度浅灰材质，更强对比
    dark: createColor('oklch(0.08 0 0 / 0.95)'), // 高对比度深灰材质
  },

  thick: {
    light: createColor('oklch(0.96 0 0 / 0.88)'), // 高对比度厚材质
    dark: createColor('oklch(0.12 0 0 / 0.88)'), // 高对比度深厚材质
  },

  medium: {
    light: createColor('oklch(0.94 0 0 / 0.70)'), // 高对比度中等材质
    dark: createColor('oklch(0.16 0 0 / 0.82)'), // 高对比度深中等材质
  },

  thin: {
    light: createColor('oklch(0.92 0 0 / 0.65)'), // 高对比度薄材质
    dark: createColor('oklch(0.18 0 0 / 0.65)'), // 高对比度深薄材质
  },

  ultraThin: {
    light: createColor('oklch(0.90 0 0 / 0.50)'), // 高对比度超薄材质
    dark: createColor('oklch(0.20 0 0 / 0.50)'), // 高对比度深超薄材质
  },

  opaque: {
    light: createColor('oklch(0.95 0 0)'), // 高对比度不透明浅材质
    dark: createColor('oklch(0.15 0 0)'), // 高对比度不透明深材质
  },
}

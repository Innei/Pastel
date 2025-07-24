import { convertOkhslToOklab } from 'culori'

import type {
  ElementColorName,
  MaterialColor,
  MaterialOpacity,
  SemanticColor,
} from '../../types'
import { createColor } from '../../utils'

export const regularElementColors: Record<ElementColorName, SemanticColor> = {
  text: {
    primary: {
      light: createColor('oklch(0.25 0.02 280)'),
      dark: createColor('oklch(0.95 0.01 280)'),
    },
    secondary: {
      light: createColor('oklch(0.45 0.02 280)'),
      dark: createColor('oklch(0.85 0.01 280)'),
    },
    tertiary: {
      light: createColor('oklch(0.6 0.02 280)'),
      dark: createColor('oklch(0.7 0.01 280)'),
    },
    quaternary: {
      light: createColor('oklch(0.75 0.01 280)'),
      dark: createColor('oklch(0.55 0.01 280)'),
    },
  },

  placeholderText: {
    primary: {
      light: createColor('oklch(0.65 0.02 280)'),
      dark: createColor('oklch(0.6 0.01 280)'),
    },
  },

  border: {
    primary: {
      light: createColor('oklch(0.85 0.02 280)'),
      dark: createColor('oklch(0.3 0.02 280)'),
    },
    secondary: {
      light: createColor('oklch(0.9 0.01 280)'),
      dark: createColor('oklch(0.25 0.01 280)'),
    },
  },

  separator: {
    primary: {
      light: createColor('oklch(0.88 0.01 280)'),
      dark: createColor('oklch(0.28 0.01 280)'),
    },
  },

  link: {
    primary: {
      light: createColor('oklch(0.7 0.16 250)'),
      dark: createColor('oklch(0.78 0.14 250)'),
    },
  },

  disabledControl: {
    primary: {
      light: createColor('oklch(0.92 0.01 280)'),
      dark: createColor('oklch(0.22 0.01 280)'),
    },
  },

  disabledText: {
    primary: {
      light: createColor('oklch(0.7 0.01 280)'),
      dark: createColor('oklch(0.5 0.01 280)'),
    },
  },
}

export const regularBackgroundColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.99 0.005 220)'),
    dark: createColor('oklch(0.241 0.008 286)'),
  },
  secondary: {
    light: createColor('oklch(0.98 0.005 220)'),
    dark: createColor('oklch(0.271 0.008 286)'),
  },
  tertiary: {
    light: createColor('oklch(0.96 0.005 220)'),
    dark: createColor('oklch(0.301 0.008 286)'),
  },
  quaternary: {
    light: createColor('oklch(0.94 0.005 220)'),
    dark: createColor('oklch(0.331 0.008 286)'),
  },
  quinary: {
    light: createColor('oklch(0.92 0.005 220)'),
    dark: createColor('oklch(0.361 0.008 286)'),
  },
}

export const regularFillColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.88 0 0)'),
    dark: createColor('oklch(0.25 0 0)'),
  },
  secondary: {
    light: createColor('oklch(0.84 0 0)'),
    dark: createColor('oklch(0.3 0 0)'),
  },
  tertiary: {
    light: createColor('oklch(0.8 0 0)'),
    dark: createColor('oklch(0.35 0 0)'),
  },
  quaternary: {
    light: createColor('oklch(0.76 0 0)'),
    dark: createColor('oklch(0.4 0 0)'),
  },
}

export const regularMaterialColors: Record<MaterialOpacity, MaterialColor> = {
  ultraThick: {
    light: createColor('oklch(0.95 0 0 / 0.93)'),
    dark: createColor('oklch(0.15 0 0 / 0.93)'),
  },

  thick: {
    light: createColor('oklch(0.95 0 0 / 0.85)'),
    dark: createColor('oklch(0.15 0 0 / 0.85)'),
  },

  medium: {
    light: createColor('oklch(0.95 0 0 / 0.65)'),
    dark: createColor('oklch(0.15 0 0 / 0.80)'),
  },

  thin: {
    light: createColor('oklch(0.95 0 0 / 0.60)'),
    dark: createColor('oklch(0.15 0 0 / 0.60)'),
  },

  ultraThin: {
    light: createColor('oklch(0.95 0 0 / 0.45)'),
    dark: createColor('oklch(0.15 0 0 / 0.45)'),
  },

  opaque: {
    light: createColor('oklch(0.95 0 0)'),
    dark: createColor('oklch(0.15 0 0)'),
  },
}

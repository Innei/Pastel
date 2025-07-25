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
      light: createColor('oklch(0.15 0.0049 230)'),
      dark: createColor('oklch(0.95 0.0049 230)'),
    },
    secondary: {
      light: createColor('oklch(0.35 0.0049 230)'),
      dark: createColor('oklch(0.85 0.0049 230)'),
    },
    tertiary: {
      light: createColor('oklch(0.5 0.0049 230)'),
      dark: createColor('oklch(0.7 0.0049 230)'),
    },
    quaternary: {
      light: createColor('oklch(0.65 0.0049 230)'),
      dark: createColor('oklch(0.55 0.0049 230)'),
    },
  },

  placeholderText: {
    primary: {
      light: createColor('oklch(0.8 0.0049 230)'),
      dark: createColor('oklch(0.6 0.0049 230)'),
    },
  },

  border: {
    primary: {
      light: createColor('oklch(0.92 0.0049 230)'),
      dark: createColor('oklch(0.35 0.0049 230)'),
    },
    secondary: {
      light: createColor('oklch(0.94 0.0049 230)'),
      dark: createColor('oklch(0.3 0.0049 230)'),
    },
  },

  separator: {
    primary: {
      light: createColor('oklch(0.88 0.0049 230)'),
      dark: createColor('oklch(0.33 0.0049 230)'),
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
      light: createColor('oklch(0.94 0.0049 230)'),
      dark: createColor('oklch(0.27 0.0049 230)'),
    },
  },

  disabledText: {
    primary: {
      light: createColor('oklch(0.9 0.0049 230)'),
      dark: createColor('oklch(0.55 0.0049 230)'),
    },
  },
}

export const regularBackgroundColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.99 0.0049 230)'),
    dark: createColor('oklch(0.22 0.0049 230)'),
  },
  secondary: {
    light: createColor('oklch(0.98 0.0049 230)'),
    dark: createColor('oklch(0.31 0.0049 230)'),
  },
  tertiary: {
    light: createColor('oklch(0.96 0.0049 230)'),
    dark: createColor('oklch(0.34 0.0049 230)'),
  },
  quaternary: {
    light: createColor('oklch(0.94 0.0049 230)'),
    dark: createColor('oklch(0.37 0.0049 230)'),
  },
  quinary: {
    light: createColor('oklch(0.92 0.0049 230)'),
    dark: createColor('oklch(0.4 0.0049 230)'),
  },
}

export const regularFillColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.9 0.0049 230)'),
    dark: createColor('oklch(0.3 0.0049 230)'),
  },
  secondary: {
    light: createColor('oklch(0.87 0.0049 230)'),
    dark: createColor('oklch(0.35 0.0049 230)'),
  },
  tertiary: {
    light: createColor('oklch(0.84 0.0049 230)'),
    dark: createColor('oklch(0.4 0.0049 230)'),
  },
  quaternary: {
    light: createColor('oklch(0.81 0.0049 230)'),
    dark: createColor('oklch(0.45 0.0049 230)'),
  },
}

export const regularMaterialColors: Record<MaterialOpacity, MaterialColor> = {
  ultraThick: {
    light: createColor('oklch(0.96 0.0049 230 / 0.93)'),
    dark: createColor('oklch(0.2 0.0049 230 / 0.93)'),
  },

  thick: {
    light: createColor('oklch(0.96 0.0049 230 / 0.85)'),
    dark: createColor('oklch(0.2 0.0049 230 / 0.85)'),
  },

  medium: {
    light: createColor('oklch(0.96 0.0049 230 / 0.65)'),
    dark: createColor('oklch(0.2 0.0049 230 / 0.80)'),
  },

  thin: {
    light: createColor('oklch(0.96 0.0049 230 / 0.60)'),
    dark: createColor('oklch(0.2 0.0049 230 / 0.60)'),
  },

  ultraThin: {
    light: createColor('oklch(0.96 0.0049 230 / 0.45)'),
    dark: createColor('oklch(0.2 0.0049 230 / 0.45)'),
  },

  opaque: {
    light: createColor('oklch(0.96 0.0049 230)'),
    dark: createColor('oklch(0.2 0.0049 230)'),
  },
}

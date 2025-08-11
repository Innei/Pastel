import type {
  ElementColorName,
  MaterialColor,
  MaterialOpacity,
  SemanticColor,
} from '../../types'
import { createColor } from '../../utils'

export const kawaiiElementColors: Record<ElementColorName, SemanticColor> = {
  text: {
    primary: {
      light: createColor('oklch(0.15 0.02 320)'), // 深粉灰色主文本，保持可读性
      dark: createColor('oklch(0.95 0.01 320)'), // 浅粉色主文本
    },
    secondary: {
      light: createColor('oklch(0.3 0.02 320)'), // 中粉灰色次要文本
      dark: createColor('oklch(0.85 0.01 320)'), // 浅粉灰色次要文本
    },
    tertiary: {
      light: createColor('oklch(0.5 0.01 320)'), // 浅粉灰色三级文本
      dark: createColor('oklch(0.7 0.01 320)'), // 中粉灰色三级文本
    },
    quaternary: {
      light: createColor('oklch(0.75 0.01 320)'), // 非常浅的粉灰色四级文本
      dark: createColor('oklch(0.55 0.01 320)'), // 中深粉灰色四级文本
    },
  },

  placeholderText: {
    primary: {
      light: createColor('oklch(0.65 0.02 320)'),
      dark: createColor('oklch(0.6 0.01 320)'),
    },
  },

  border: {
    primary: {
      light: createColor('oklch(0.85 0.02 330)'),
      dark: createColor('oklch(0.3 0.0049 338.82)'),
    },
    secondary: {
      light: createColor('oklch(0.9 0.01 330)'),
      dark: createColor('oklch(0.25 0.0049 338.82)'),
    },
  },

  separator: {
    primary: {
      light: createColor('oklch(0.88 0.01 330)'),
      dark: createColor('oklch(0.28 0.0049 338.82)'),
    },
  },

  link: {
    primary: {
      light: createColor('oklch(0.86 0.0617 256.24)'),
      dark: createColor('oklch(0.8959 0.0524530753637823 250.67881278919134)'),
    },
  },

  disabledControl: {
    primary: {
      light: createColor('oklch(0.92 0.0049 338.82)'),
      dark: createColor('oklch(0.22 0.0049 338.82)'),
    },
  },

  disabledText: {
    primary: {
      light: createColor('oklch(0.7 0.0049 338.82)'),
      dark: createColor('oklch(0.5 0.0049 338.82)'),
    },
  },
}
export const kawaiiBackgroundColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.986 0 358.73967248753775)'),
    dark: createColor('oklch(0.241 0.0049 338.82)'),
  },
  secondary: {
    light: createColor('oklch(0.96 0.004 358.73967248753775)'),
    dark: createColor('oklch(0.271 0.0049 338.82)'),
  },
  tertiary: {
    light: createColor('oklch(0.94 0.005 358.73967248753775)'),
    dark: createColor('oklch(0.301 0.0049 338.82)'),
  },
  quaternary: {
    light: createColor('oklch(0.92 0.006 358.73967248753775)'),
    dark: createColor('oklch(0.331 0.0049 338.82)'),
  },
  quinary: {
    light: createColor('oklch(0.90 0.01 358.73967248753775)'),
    dark: createColor('oklch(0.361 0.0049 338.82)'),
  },
}

export const kawaiiFillColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.96 0.0049 338.82)'),
    dark: createColor('oklch(0.25 0.0049 338.82)'),
  },
  secondary: {
    light: createColor('oklch(0.94 0.0049 338.82)'),
    dark: createColor('oklch(0.3 0.0049 338.82)'),
  },
  tertiary: {
    light: createColor('oklch(0.92 0.0049 338.82)'),
    dark: createColor('oklch(0.35 0.0049 338.82)'),
  },
  quaternary: {
    light: createColor('oklch(0.90 0.0049 338.82)'),
    dark: createColor('oklch(0.4 0.0049 338.82)'),
  },
}

export const kawaiiMaterialColors: Record<MaterialOpacity, MaterialColor> = {
  ultraThick: {
    light: createColor('oklch(0.95 0.0049 338.82 / 0.93)'),
    dark: createColor('oklch(0.15 0.0049 338.82 / 0.93)'),
  },

  thick: {
    light: createColor('oklch(0.95 0.0049 338.82 / 0.85)'),
    dark: createColor('oklch(0.15 0.0049 338.82 / 0.85)'),
  },

  medium: {
    light: createColor('oklch(0.95 0.0049 338.82 / 0.65)'),
    dark: createColor('oklch(0.15 0.0049 338.82 / 0.80)'),
  },

  thin: {
    light: createColor('oklch(0.95 0.0049 338.82 / 0.60)'),
    dark: createColor('oklch(0.15 0.0049 338.82 / 0.60)'),
  },

  ultraThin: {
    light: createColor('oklch(0.95 0.0049 338.82 / 0.45)'),
    dark: createColor('oklch(0.15 0.0049 338.82 / 0.45)'),
  },

  opaque: {
    light: createColor('oklch(0.95 0.0049 338.82)'),
    dark: createColor('oklch(0.15 0.0049 338.82)'),
  },
}

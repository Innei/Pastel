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
      light: createColor('oklch(0.25 0.02 320)'), // 深粉灰色主文本，保持可读性
      dark: createColor('oklch(0.95 0.01 320)'), // 浅粉色主文本
    },
    secondary: {
      light: createColor('oklch(0.45 0.02 320)'), // 中粉灰色次要文本
      dark: createColor('oklch(0.85 0.01 320)'), // 浅粉灰色次要文本
    },
    tertiary: {
      light: createColor('oklch(0.6 0.02 320)'), // 浅粉灰色三级文本
      dark: createColor('oklch(0.7 0.01 320)'), // 中粉灰色三级文本
    },
    quaternary: {
      light: createColor('oklch(0.75 0.01 320)'), // 非常浅的粉灰色四级文本
      dark: createColor('oklch(0.55 0.01 320)'), // 中深粉灰色四级文本
    },
  },

  placeholderText: {
    primary: {
      light: createColor('oklch(0.65 0.02 320)'), // 粉色占位符文本
      dark: createColor('oklch(0.6 0.01 320)'), // 暗主题粉色占位符文本
    },
  },

  border: {
    primary: {
      light: createColor('oklch(0.85 0.02 330)'), // 浅粉色主边框
      dark: createColor('oklch(0.3 0.02 320)'), // 深粉色主边框
    },
    secondary: {
      light: createColor('oklch(0.9 0.01 330)'), // 非常浅的粉色次要边框
      dark: createColor('oklch(0.25 0.01 320)'), // 深粉色次要边框
    },
  },

  separator: {
    primary: {
      light: createColor('oklch(0.88 0.01 330)'), // 浅粉色分隔线
      dark: createColor('oklch(0.28 0.01 320)'), // 深粉色分隔线
    },
  },

  link: {
    primary: {
      light: createColor('oklch(0.7 0.16 300)'), // 可爱的粉蓝色链接
      dark: createColor('oklch(0.78 0.14 300)'), // 暗主题粉蓝色链接
    },
  },

  disabledControl: {
    primary: {
      light: createColor('oklch(0.92 0.01 330)'), // 浅粉色禁用控件
      dark: createColor('oklch(0.22 0.01 320)'), // 深粉色禁用控件
    },
  },

  disabledText: {
    primary: {
      light: createColor('oklch(0.7 0.01 320)'), // 粉色禁用文本
      dark: createColor('oklch(0.5 0.01 320)'), // 暗主题粉色禁用文本
    },
  },
}
export const kawaiiBackgroundColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.98 0.005 200)'), // Very light blue-green main background, inspired by light cyan pastels
    dark: createColor('oklch(0.241 0.008 200)'), // Darker muted blue-green main background
  },
  secondary: {
    light: createColor('oklch(0.96 0.01 200)'), // Light blue-green secondary background
    dark: createColor('oklch(0.271 0.008 200)'), // Darker muted blue-green secondary background
  },
  tertiary: {
    light: createColor('oklch(0.94 0.01 200)'), // Soft blue-green third-layer background
    dark: createColor('oklch(0.301 0.008 200)'), // Darker muted blue-green third-layer background
  },
  quaternary: {
    light: createColor('oklch(0.92 0.01 200)'), // Pale blue-green fourth-layer background
    dark: createColor('oklch(0.331 0.008 200)'), // Darker muted blue-green fourth-layer background
  },
  quinary: {
    light: createColor('oklch(0.90 0.01 200)'), // Subtle blue-green fifth-layer background
    dark: createColor('oklch(0.361 0.008 200)'), // Darker muted blue-green fifth-layer background
  },
}

export const kawaiiFillColors: SemanticColor = {
  primary: {
    light: createColor('oklch(0.88 0.02 200)'), // Soft blue-green main fill, inspired by light cyan pastels
    dark: createColor('oklch(0.25 0.008 200)'), // Muted blue-green main fill for dark mode
  },
  secondary: {
    light: createColor('oklch(0.84 0.02 200)'), // Pale blue-green secondary fill
    dark: createColor('oklch(0.3 0.008 200)'), // Deeper muted blue-green secondary fill
  },
  tertiary: {
    light: createColor('oklch(0.8 0.02 200)'), // Subtle blue-green tertiary fill
    dark: createColor('oklch(0.35 0.008 200)'), // Further muted blue-green tertiary fill
  },
  quaternary: {
    light: createColor('oklch(0.76 0.02 200)'), // Light blue-green quaternary fill
    dark: createColor('oklch(0.4 0.008 200)'), // Darker muted blue-green quaternary fill
  },
}

export const kawaiiMaterialColors: Record<MaterialOpacity, MaterialColor> = {
  ultraThick: {
    light: createColor('oklch(0.95 0 0 / 0.93)'), // 中性灰色超厚材质，符合 Apple 设计
    dark: createColor('oklch(0.15 0 0 / 0.93)'), // 中性深灰色超厚材质
  },

  thick: {
    light: createColor('oklch(0.95 0 0 / 0.85)'), // 中性灰色厚材质
    dark: createColor('oklch(0.15 0 0 / 0.85)'), // 中性深灰色厚材质
  },

  medium: {
    light: createColor('oklch(0.95 0 0 / 0.65)'), // 中性灰色中等材质
    dark: createColor('oklch(0.15 0 0 / 0.80)'), // 中性深灰色中等材质
  },

  thin: {
    light: createColor('oklch(0.95 0 0 / 0.60)'), // 中性灰色薄材质
    dark: createColor('oklch(0.15 0 0 / 0.60)'), // 中性深灰色薄材质
  },

  ultraThin: {
    light: createColor('oklch(0.95 0 0 / 0.45)'), // 中性灰色超薄材质
    dark: createColor('oklch(0.15 0 0 / 0.45)'), // 中性深灰色超薄材质
  },

  opaque: {
    light: createColor('oklch(0.95 0 0)'), // 中性灰色不透明材质
    dark: createColor('oklch(0.15 0 0)'), // 中性深灰色不透明材质
  },
}

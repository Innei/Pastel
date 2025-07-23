export interface ColorValue {
  oklch: string
  srgb: string
  p3?: string
}

/**
 * Input type for creating colors - can be OKLCH or sRGB string
 */
export type ColorInput = string

export interface ColorVariants {
  light: ColorValue
  dark: ColorValue
}

export type DepthLevel =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary'

export interface SemanticColor {
  primary?: ColorVariants
  secondary?: ColorVariants
  tertiary?: ColorVariants
  quaternary?: ColorVariants
  quinary?: ColorVariants
}

export type MaterialOpacity =
  | 'ultraThick'
  | 'thick'
  | 'medium'
  | 'thin'
  | 'ultraThin'
  | 'opaque'

export interface MaterialColor {
  light: ColorValue
  dark: ColorValue
}

export type DarkModeStrategy = 'media-query' | 'class' | 'data-attribute'

export interface DarkModeConfig {
  strategy: DarkModeStrategy
  selector?: string
}

export type RegularColorName =
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'brown'
  | 'gray'
  | 'black'
  | 'white'
  | 'sky'
  | 'neutral'
  | 'teal'
  | 'cyan'
  | 'indigo'
  | 'violet'
  | 'lime'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'slate'
  | 'zinc'

export type ElementColorName =
  | 'border'
  | 'separator'
  | 'link'
  | 'text'
  | 'placeholderText'
  | 'disabledControl'
  | 'disabledText'

export type ApplicationColorName = 'accent' | 'primary' | 'secondary'

export type ThemeName = 'regular' | 'kawaii' | 'high-contrast'

export interface ThemeColorSystem {
  colors: Record<RegularColorName, ColorVariants>
  element: Record<ElementColorName, SemanticColor>
  background: SemanticColor
  fill: SemanticColor
  material: Record<MaterialOpacity, MaterialColor>
  application: Record<ApplicationColorName, ColorVariants>
}

export interface ColorSystem {
  regular: ThemeColorSystem
  kawaii: ThemeColorSystem
  'high-contrast': ThemeColorSystem
}

export interface ColorPalette {
  colors: ColorSystem
  meta?: {
    name: string
    description: string
    theme: ThemeName
  }
}

// Legacy interfaces for backward compatibility
export interface HighContrastColorVariants extends ColorVariants {}
export interface KawaiiColorVariants extends ColorVariants {}

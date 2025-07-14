export interface ColorValue {
  oklch: string;
  srgb: string;
  p3?: string;
}

export interface ColorVariants {
  light: ColorValue;
  dark: ColorValue;
}

export interface HighContrastColorVariants {
  light: ColorValue;
  dark: ColorValue;
}

export type DepthLevel = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';

export interface SemanticColor {
  primary?: ColorVariants;
  secondary?: ColorVariants;
  tertiary?: ColorVariants;
  quaternary?: ColorVariants;
  quinary?: ColorVariants;
}

export type MaterialOpacity = 'ultraThick' | 'thick' | 'medium' | 'thin' | 'ultraThin' | 'opaque';

export interface MaterialColor {
  light: ColorValue;
  dark: ColorValue;
}

export type DarkModeStrategy = 'media-query' | 'class' | 'data-attribute';

export interface DarkModeConfig {
  strategy: DarkModeStrategy;
  selector?: string;
}

export type RegularColorName = 
  | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'orange' 
  | 'pink' | 'brown' | 'gray' | 'black' | 'white' | 'sky' | 'neutral';

export type ElementColorName = 
  | 'border' | 'separator' | 'link' | 'text' 
  | 'placeholderText' | 'disabledControl' | 'disabledText';

export type ApplicationColorName = 'accent' | 'primary' | 'secondary';

export interface ColorSystem {
  regular: Record<RegularColorName, ColorVariants>;
  regularHighContrast: Record<RegularColorName, HighContrastColorVariants>;
  element: Record<ElementColorName, SemanticColor>;
  background: SemanticColor;
  fill: SemanticColor;
  material: Record<MaterialOpacity, MaterialColor>;
  application: Record<ApplicationColorName, ColorVariants>;
}

export interface ColorPalette {
  colors: ColorSystem;
  meta?: {
    name: string;
    description: string;
    theme: 'kawaii' | 'professional' | 'custom';
  };
}
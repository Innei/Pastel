export type ColorCategory = 'regular' | 'semantic' | 'material' | 'application'
export type ColorVariant = 'regular' | 'high-contrast' | 'kawaii'
export type SortOrder =
  | 'default'
  | 'alphabetical'
  | 'alphabetical-desc'
  | 'hue'
  | 'lightness'
  | 'saturation'
export type ColorChannel = 'oklch' | 'srgb' | 'p3'

export interface ColorSection {
  id: ColorCategory
  title: string
  description: string
  icon: React.ReactNode
}

export interface ColorModalProps {
  isOpen: boolean
  onClose: () => void
  colorName: string
  colorType: ColorCategory
  colorVariant: ColorVariant
  colorData: any
  onCopy: (value: string) => void
}
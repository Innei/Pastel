export const parseOKLCH = (oklchString: string) => {
  const match = oklchString.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/)
  if (!match) return { lightness: 0, chroma: 0, hue: 0 }
  return {
    lightness: Number.parseFloat(match[1]),
    chroma: Number.parseFloat(match[2]),
    hue: Number.parseFloat(match[3]),
  }
}

export const getColorValue = (
  colorVariant: any,
  mode: 'light' | 'dark',
  channel: 'oklch' | 'srgb' | 'p3',
) => {
  const colorData = colorVariant[mode]
  if (!colorData) return ''

  switch (channel) {
    case 'oklch': {
      return colorData.oklch || ''
    }
    case 'srgb': {
      return colorData.srgb || ''
    }
    case 'p3': {
      return colorData.p3 || colorData.srgb || ''
    }
    default: {
      return colorData.oklch || ''
    }
  }
}

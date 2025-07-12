export const mapHexToRGBString = (hex: string) => {
  if (!hex.startsWith('#')) {
    return hex
  }
  const hexWithoutHash = hex.slice(1)
  if (hexWithoutHash.length !== 6 && hexWithoutHash.length !== 8) {
    throw new Error('Hex must be 6 or 8 characters long')
  }

  let alpha = 1
  if (hexWithoutHash.length === 8) {
    alpha = parseInt(hexWithoutHash.slice(6), 16) / 255
  }

  return `${parseInt(hexWithoutHash.slice(0, 2), 16)} ${parseInt(
    hexWithoutHash.slice(2, 4),
    16,
  )} ${parseInt(hexWithoutHash.slice(4, 6), 16)}${
    alpha === 1 ? '' : ` / ${alpha.toFixed(2)}`
  }`
}

export const mapHexObjectToRGBString = <T extends Record<string, string>>(
  hex: T,
): T => {
  return Object.fromEntries(
    Object.entries(hex).map(([key, value]) => [key, mapHexToRGBString(value)]),
  ) as T
}
export const addAlphaToHex = (hex: string, alpha: number): string => {
  // Remove # if present
  const cleanHex = hex.replace(/^#/, '')

  // Validate hex format (3 or 6 characters)
  if (!/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
    throw new Error('Invalid hex color format')
  }

  // Validate alpha (0 to 1)
  if (alpha < 0 || alpha > 1) {
    throw new Error('Alpha must be between 0 and 1')
  }

  // Convert 3-digit hex to 6-digit if needed
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split('')
          .map((char) => char + char)
          .join('')
      : cleanHex

  // Convert alpha to hex (0-255 range)
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')

  // Return 8-digit hex with alpha
  return `#${fullHex}${alphaHex}`.toUpperCase()
}

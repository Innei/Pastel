import type {
  ColorSystem,
  DarkModeConfig,
  GeneratorConfig,
  ColorVariants,
  SemanticColor,
  MaterialColor,
  ColorFormat,
} from '@pastel-palette/colors'

export function generateColorVariable(name: string, value: string): string {
  return `--color-${name}: ${value}`
}

export function generateThemeVariable(
  name: string,
  hasAlpha: boolean = false,
  colorSpace: ColorFormat = 'srgb',
): string {
  if (colorSpace === 'oklch') {
    return `--color-${name}: oklch(var(--color-${name}))`
  } else if (colorSpace === 'p3') {
    return `--color-${name}: color(display-p3 var(--color-${name}))`
  } else {
    const func = hasAlpha ? 'rgba' : 'rgb'
    return `--color-${name}: ${func}(var(--color-${name}))`
  }
}

function extractColorValues(
  colorString: string,
  colorSpace: ColorFormat = 'srgb',
): string {
  if (colorSpace === 'oklch') {
    // Extract OKLCH values from "oklch(0.85 0.12 237)" format to "0.85 0.12 237"
    const match = colorString.match(/oklch\(([^)]+)\)/)
    if (match) {
      return match[1]
    }
  } else if (colorSpace === 'p3') {
    // Extract P3 values from "color(display-p3 0.678 0.812 1.0)" format to "0.678 0.812 1.0"
    const match = colorString.match(/color\(display-p3\s+([^)]+)\)/)
    if (match) {
      return match[1]
    }
  } else {
    // Extract RGB values from "rgb(255 0 0)" format to "255 0 0"
    const match = colorString.match(/rgb\(([^)]+)\)/)
    if (match) {
      return match[1]
    }
    // Extract RGBA values from "rgba(255 0 0 / 0.5)" format to "255 0 0 / 0.5"
    const alphaMatch = colorString.match(/rgba?\(([^)]+)\)/)
    if (alphaMatch) {
      return alphaMatch[1]
    }
  }
  return colorString
}

export function generateColorVariables(
  colors: ColorSystem,
  mode: 'light' | 'dark',
  colorSpace: ColorFormat = 'srgb',
): string {
  const lines: string[] = []
  const suffix = mode === 'light' ? '-light' : '-dark'

  function getColorString(colorValue: any): string {
    if (colorSpace === 'oklch') {
      return colorValue.oklch || colorValue.srgb || ''
    } else if (colorSpace === 'p3') {
      return colorValue.p3 || colorValue.srgb || ''
    } else {
      return colorValue.srgb || ''
    }
  }

  for (const [colorName, variants] of Object.entries(colors.regular)) {
    const colorValue = (variants as ColorVariants)[mode]
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${colorName}${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  // High contrast regular colors
  for (const [colorName, variants] of Object.entries(
    colors.regularHighContrast,
  )) {
    const colorValue = (variants as ColorVariants)[mode]
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${colorName}-hc${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  for (const [colorName, depthColors] of Object.entries(colors.element)) {
    for (const [depth, variants] of Object.entries(
      depthColors as SemanticColor,
    )) {
      const colorValue = (variants as ColorVariants)[mode]
      const varName = depth === 'primary' ? colorName : `${colorName}-${depth}`
      const colorString = getColorString(colorValue)
      lines.push(
        generateColorVariable(
          `${varName}${suffix}`,
          extractColorValues(colorString, colorSpace),
        ),
      )
    }
  }

  for (const [depth, variants] of Object.entries(colors.background)) {
    const colorValue = (variants as ColorVariants)[mode]
    const varName = depth === 'primary' ? 'background' : `background-${depth}`
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${varName}${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  for (const [depth, variants] of Object.entries(colors.fill)) {
    const colorValue = (variants as ColorVariants)[mode]
    const varName = depth === 'primary' ? 'fill' : `fill-${depth}`
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${varName}${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  for (const [opacity, materialColor] of Object.entries(colors.material)) {
    const colorValue = (materialColor as MaterialColor)[mode]
    const varName = `material-${opacity.toLowerCase()}`
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${varName}${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  for (const [colorName, variants] of Object.entries(colors.application)) {
    const colorValue = (variants as ColorVariants)[mode]
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${colorName}${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  return lines.join(';\n    ')
}

export function generateThemeVariables(
  colors: ColorSystem,
  colorSpace: ColorFormat = 'srgb',
): string {
  const lines: string[] = []

  // Regular colors
  for (const colorName of Object.keys(colors.regular)) {
    lines.push(generateThemeVariable(colorName, false, colorSpace))
    lines.push(generateThemeVariable(`${colorName}-light`, false, colorSpace))
    lines.push(generateThemeVariable(`${colorName}-dark`, false, colorSpace))
  }

  // High contrast regular colors
  for (const colorName of Object.keys(colors.regularHighContrast)) {
    lines.push(generateThemeVariable(`${colorName}-hc`, false, colorSpace))
    lines.push(
      generateThemeVariable(`${colorName}-hc-light`, false, colorSpace),
    )
    lines.push(generateThemeVariable(`${colorName}-hc-dark`, false, colorSpace))
  }

  // Element colors
  for (const [colorName, depthColors] of Object.entries(colors.element)) {
    for (const depth of Object.keys(depthColors as SemanticColor)) {
      const varName = depth === 'primary' ? colorName : `${colorName}-${depth}`
      const hasAlpha = colorSpace === 'srgb' // Only use rgba for srgb
      lines.push(generateThemeVariable(varName, hasAlpha, colorSpace))
      lines.push(
        generateThemeVariable(`${varName}-light`, hasAlpha, colorSpace),
      )
      lines.push(generateThemeVariable(`${varName}-dark`, hasAlpha, colorSpace))
    }
  }

  // Background colors
  for (const depth of Object.keys(colors.background)) {
    const varName = depth === 'primary' ? 'background' : `background-${depth}`
    const hasAlpha = colorSpace === 'srgb'
    lines.push(generateThemeVariable(varName, hasAlpha, colorSpace))
    lines.push(generateThemeVariable(`${varName}-light`, hasAlpha, colorSpace))
    lines.push(generateThemeVariable(`${varName}-dark`, hasAlpha, colorSpace))
  }

  // Fill colors
  for (const depth of Object.keys(colors.fill)) {
    const varName = depth === 'primary' ? 'fill' : `fill-${depth}`
    const hasAlpha = colorSpace === 'srgb'
    lines.push(generateThemeVariable(varName, hasAlpha, colorSpace))
    lines.push(generateThemeVariable(`${varName}-light`, hasAlpha, colorSpace))
    lines.push(generateThemeVariable(`${varName}-dark`, hasAlpha, colorSpace))
  }

  // Material colors
  for (const opacity of Object.keys(colors.material)) {
    const varName = `material-${opacity.toLowerCase()}`
    const hasAlpha = colorSpace === 'srgb'
    lines.push(generateThemeVariable(varName, hasAlpha, colorSpace))
    lines.push(generateThemeVariable(`${varName}-light`, hasAlpha, colorSpace))
    lines.push(generateThemeVariable(`${varName}-dark`, hasAlpha, colorSpace))
  }

  // Application colors
  for (const colorName of Object.keys(colors.application)) {
    lines.push(generateThemeVariable(colorName, false, colorSpace))
    lines.push(generateThemeVariable(`${colorName}-light`, false, colorSpace))
    lines.push(generateThemeVariable(`${colorName}-dark`, false, colorSpace))
  }

  return lines.join(';\n  ')
}

export function generateTailwindTheme(
  colors: ColorSystem,
  darkMode?: DarkModeConfig,
  colorSpace: ColorFormat = 'srgb',
): string {
  const darkModeConfig = darkMode || { strategy: 'media-query' }
  const themeVariables = generateThemeVariables(colors, colorSpace)
  const lightColorVariables = generateColorVariables(
    colors,
    'light',
    colorSpace,
  )
  const darkColorVariables = generateColorVariables(colors, 'dark', colorSpace)

  const baseStructure = `/* This file is auto-generated by Pastel Palette for Tailwind v4 */
@import "tailwindcss";

@theme inline {
  /* UIKit Colors - Auto-generated */
  ${themeVariables};
}

/* Define color values */
@layer base {
  :root {
    /* Light mode colors (default) */
    ${lightColorVariables};
    ${darkColorVariables};
  }`

  if (darkModeConfig.strategy === 'media-query') {
    return (
      baseStructure +
      `

  /* Light mode overrides using media query */
  @media (prefers-color-scheme: light) {
    :root {
      ${generateActiveColorReferences(colors, 'light')};
    }
  }

  /* Dark mode overrides using media query */
  @media (prefers-color-scheme: dark) {
    :root {
      ${generateActiveColorReferences(colors, 'dark')};
    }
  }
}`
    )
  } else if (darkModeConfig.strategy === 'class') {
    const selector = darkModeConfig.selector || '.dark'
    return (
      baseStructure +
      `

  /* Light mode overrides using class selector */
  :root {
    ${generateActiveColorReferences(colors, 'light')};
  }

  /* Dark mode overrides using class selector */
  ${selector} {
    ${generateActiveColorReferences(colors, 'dark')};
  }
}`
    )
  } else {
    const lightSelector =
      darkModeConfig.selector?.replace('dark', 'light') ||
      '[data-theme="light"]'
    const darkSelector = darkModeConfig.selector || '[data-theme="dark"]'
    return (
      baseStructure +
      `

  /* Light mode overrides using data attribute */
  ${lightSelector} {
    ${generateActiveColorReferences(colors, 'light')};
  }

  /* Dark mode overrides using data attribute */
  ${darkSelector} {
    ${generateActiveColorReferences(colors, 'dark')};
  }
}`
    )
  }
}

export function generateActiveColorReferences(
  colors: ColorSystem,
  mode: 'light' | 'dark',
): string {
  const lines: string[] = []

  // Regular colors
  for (const colorName of Object.keys(colors.regular)) {
    lines.push(`--color-${colorName}: var(--color-${colorName}-${mode})`)
  }

  // High contrast regular colors
  for (const colorName of Object.keys(colors.regularHighContrast)) {
    lines.push(`--color-${colorName}-hc: var(--color-${colorName}-hc-${mode})`)
  }

  // Element colors
  for (const [colorName, depthColors] of Object.entries(colors.element)) {
    for (const depth of Object.keys(depthColors as SemanticColor)) {
      const varName = depth === 'primary' ? colorName : `${colorName}-${depth}`
      lines.push(`--color-${varName}: var(--color-${varName}-${mode})`)
    }
  }

  // Background colors
  for (const depth of Object.keys(colors.background)) {
    const varName = depth === 'primary' ? 'background' : `background-${depth}`
    lines.push(`--color-${varName}: var(--color-${varName}-${mode})`)
  }

  // Fill colors
  for (const depth of Object.keys(colors.fill)) {
    const varName = depth === 'primary' ? 'fill' : `fill-${depth}`
    lines.push(`--color-${varName}: var(--color-${varName}-${mode})`)
  }

  // Material colors
  for (const opacity of Object.keys(colors.material)) {
    const varName = `material-${opacity.toLowerCase()}`
    lines.push(`--color-${varName}: var(--color-${varName}-${mode})`)
  }

  // Application colors
  for (const colorName of Object.keys(colors.application)) {
    lines.push(`--color-${colorName}: var(--color-${colorName}-${mode})`)
  }

  return lines.join(';\n    ')
}

export function generateCSS(config: GeneratorConfig): string {
  const colorSpace = config.formatOptions?.colorSpace || 'srgb'
  return generateTailwindTheme(config.colors, config.darkMode, colorSpace)
}

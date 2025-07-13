import type {
  ColorSystem,
  DarkModeConfig,
  GeneratorConfig,
  ColorVariants,
  SemanticColor,
  MaterialColor,
} from '@pastel-palette/colors'

export function generateColorVariable(name: string, value: string): string {
  return `--color-${name}: ${value}`
}

export function generateColorVariables(
  colors: ColorSystem,
  mode: 'light' | 'dark',
): string {
  const lines: string[] = []

  for (const [colorName, variants] of Object.entries(colors.regular)) {
    const colorValue = (variants as ColorVariants)[mode]
    lines.push(generateColorVariable(colorName, colorValue.oklch))
    lines.push(generateColorVariable(`${colorName}-srgb`, colorValue.srgb))
    if (colorValue.p3) {
      lines.push(generateColorVariable(`${colorName}-p3`, colorValue.p3))
    }
  }

  for (const [colorName, depthColors] of Object.entries(colors.element)) {
    for (const [depth, variants] of Object.entries(
      depthColors as SemanticColor,
    )) {
      const colorValue = (variants as ColorVariants)[mode]
      const varName = depth === 'primary' ? colorName : `${colorName}-${depth}`
      lines.push(generateColorVariable(varName, colorValue.oklch))
      lines.push(generateColorVariable(`${varName}-srgb`, colorValue.srgb))
      if (colorValue.p3) {
        lines.push(generateColorVariable(`${varName}-p3`, colorValue.p3))
      }
    }
  }

  for (const [depth, variants] of Object.entries(colors.background)) {
    const colorValue = (variants as ColorVariants)[mode]
    const varName = depth === 'primary' ? 'background' : `background-${depth}`
    lines.push(generateColorVariable(varName, colorValue.oklch))
    lines.push(generateColorVariable(`${varName}-srgb`, colorValue.srgb))
    if (colorValue.p3) {
      lines.push(generateColorVariable(`${varName}-p3`, colorValue.p3))
    }
  }

  for (const [depth, variants] of Object.entries(colors.fill)) {
    const colorValue = (variants as ColorVariants)[mode]
    const varName = depth === 'primary' ? 'fill' : `fill-${depth}`
    lines.push(generateColorVariable(varName, colorValue.oklch))
    lines.push(generateColorVariable(`${varName}-srgb`, colorValue.srgb))
    if (colorValue.p3) {
      lines.push(generateColorVariable(`${varName}-p3`, colorValue.p3))
    }
  }

  for (const [opacity, materialColor] of Object.entries(colors.material)) {
    const colorValue = (materialColor as MaterialColor)[mode]
    const varName = `material-${opacity.toLowerCase()}`
    lines.push(generateColorVariable(varName, colorValue.oklch))
    lines.push(generateColorVariable(`${varName}-srgb`, colorValue.srgb))
    if (colorValue.p3) {
      lines.push(generateColorVariable(`${varName}-p3`, colorValue.p3))
    }
  }

  for (const [colorName, variants] of Object.entries(colors.application)) {
    const colorValue = (variants as ColorVariants)[mode]
    lines.push(generateColorVariable(colorName, colorValue.oklch))
    lines.push(generateColorVariable(`${colorName}-srgb`, colorValue.srgb))
    if (colorValue.p3) {
      lines.push(generateColorVariable(`${colorName}-p3`, colorValue.p3))
    }
  }

  return lines.join(';\n  ')
}

export function generateTailwindTheme(
  colors: ColorSystem,
  darkMode?: DarkModeConfig,
): string {
  const darkModeConfig = darkMode || { strategy: 'media-query' }
  const lightColors = generateColorVariables(colors, 'light')
  const darkColors = generateColorVariables(colors, 'dark')

  if (darkModeConfig.strategy === 'media-query') {
    return `@import "tailwindcss";

@theme {
  /* Light mode colors */
  ${lightColors};
}

/* Dark mode with media query */
@media (prefers-color-scheme: dark) {
  @theme {
    ${darkColors};
  }
}`
  } else if (darkModeConfig.strategy === 'class') {
    const selector = darkModeConfig.selector || '.dark'
    return `@import "tailwindcss";

@theme {
  /* Light mode colors (default) */
  ${lightColors};
}

/* Dark mode with class selector */
${selector} {
  @theme {
    ${darkColors};
  }
}`
  } else {
    const selector = darkModeConfig.selector || 'html[data-theme="dark"]'
    return `@import "tailwindcss";

@theme {
  /* Light mode colors (default) */
  ${lightColors};
}

/* Dark mode with data attribute selector */
${selector} {
  @theme {
    ${darkColors};
  }
}`
  }
}

export function generateCSS(config: GeneratorConfig): string {
  return generateTailwindTheme(config.colors, config.darkMode)
}

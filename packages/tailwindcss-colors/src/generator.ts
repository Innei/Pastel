import type {
  ColorFormat,
  ColorSystem,
  ColorVariants,
  GeneratorConfig,
  MaterialColor,
  SemanticColor,
} from '@pastel-palette/colors'

export function generateColorVariable(name: string, value: string): string {
  return `--color-${name}: ${value}`
}

export function generateThemeVariable(name: string, value: string): string {
  return `--color-${name}: ${value}`
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
    // eslint-disable-next-line regexp/no-super-linear-backtracking
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

// Deprecated: keeping for compatibility
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

  // Regular colors
  for (const [colorName, variants] of Object.entries(colors.regular.colors)) {
    const colorValue = (variants as ColorVariants)[mode]
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${colorName}${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  // Regular grayScale colors
  for (const [grayScaleName, variants] of Object.entries(
    colors.regular.grayScale,
  )) {
    const colorValue = (variants as ColorVariants)[mode]
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${grayScaleName}${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  // High contrast regular colors
  for (const [colorName, variants] of Object.entries(
    colors['high-contrast'].colors,
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

  // High contrast grayScale colors
  for (const [grayScaleName, variants] of Object.entries(
    colors['high-contrast'].grayScale,
  )) {
    const colorValue = (variants as ColorVariants)[mode]
    const colorString = getColorString(colorValue)
    lines.push(
      generateColorVariable(
        `${grayScaleName}-hc${suffix}`,
        extractColorValues(colorString, colorSpace),
      ),
    )
  }

  // Kawaii regular colors
  if (colors.kawaii) {
    for (const [colorName, variants] of Object.entries(colors.kawaii.colors)) {
      const colorValue = (variants as ColorVariants)[mode]
      const colorString = getColorString(colorValue)
      lines.push(
        generateColorVariable(
          `${colorName}-kawaii${suffix}`,
          extractColorValues(colorString, colorSpace),
        ),
      )
    }

    // Kawaii grayScale colors
    for (const [grayScaleName, variants] of Object.entries(
      colors.kawaii.grayScale,
    )) {
      const colorValue = (variants as ColorVariants)[mode]
      const colorString = getColorString(colorValue)
      lines.push(
        generateColorVariable(
          `${grayScaleName}-kawaii${suffix}`,
          extractColorValues(colorString, colorSpace),
        ),
      )
    }
  }

  // Use regular theme for semantic colors (element, background, fill, material, application)
  const regularTheme = colors.regular

  for (const [colorName, depthColors] of Object.entries(regularTheme.element)) {
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

  for (const [depth, variants] of Object.entries(regularTheme.background)) {
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

  for (const [depth, variants] of Object.entries(regularTheme.fill)) {
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

  for (const [opacity, materialColor] of Object.entries(
    regularTheme.material,
  )) {
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

  for (const [colorName, variants] of Object.entries(
    regularTheme.application,
  )) {
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

export function generateUnifiedThemeColorVariables(
  colors: ColorSystem,
  colorSpace: ColorFormat = 'srgb',
): {
  lightModeDefaults: string
  allVariants: string
  darkOverrides: string
  kawaiiOverrides: string
  kawaiiDarkOverrides: string
  hcOverrides: string
  hcDarkOverrides: string
} {
  const lightModeLines: string[] = []
  const allVariantLines: string[] = []
  const darkOverrideLines: string[] = []
  const kawaiiOverrideLines: string[] = []
  const kawaiiDarkOverrideLines: string[] = []
  const hcOverrideLines: string[] = []
  const hcDarkOverrideLines: string[] = []

  function getColorString(colorValue: any): string {
    if (colorSpace === 'oklch') {
      return colorValue.oklch || colorValue.srgb || ''
    } else if (colorSpace === 'p3') {
      return colorValue.p3 || colorValue.srgb || ''
    } else {
      return colorValue.srgb || ''
    }
  }

  function processColorGroup(
    regularGroup: any,
    hcGroup: any,
    kawaiiGroup: any,
    baseName: string,
  ) {
    const regularVariants = regularGroup[baseName] as ColorVariants
    const hcVariants = hcGroup[baseName] as ColorVariants
    const kawaiiVariants = kawaiiGroup
      ? (kawaiiGroup[baseName] as ColorVariants)
      : null

    if (!regularVariants) return

    const regularLight = getColorString(regularVariants.light)
    const regularDark = getColorString(regularVariants.dark)
    const hcLight = getColorString(hcVariants.light)
    const hcDark = getColorString(hcVariants.dark)
    const kawaiiLight = kawaiiVariants
      ? getColorString(kawaiiVariants.light)
      : null
    const kawaiiDark = kawaiiVariants
      ? getColorString(kawaiiVariants.dark)
      : null

    // Light mode default (regular light)
    lightModeLines.push(generateThemeVariable(baseName, regularLight))

    // All variants with suffixes
    allVariantLines.push(
      generateThemeVariable(`${baseName}-light`, regularLight),
    )
    allVariantLines.push(generateThemeVariable(`${baseName}-dark`, regularDark))
    allVariantLines.push(generateThemeVariable(`${baseName}-hc`, hcLight))
    if (kawaiiLight) {
      allVariantLines.push(
        generateThemeVariable(`${baseName}-kawaii`, kawaiiLight),
      )
    }

    // Dark mode overrides
    darkOverrideLines.push(generateThemeVariable(baseName, regularDark))

    // Kawaii overrides
    if (kawaiiLight && kawaiiDark) {
      kawaiiOverrideLines.push(generateThemeVariable(baseName, kawaiiLight))
      kawaiiDarkOverrideLines.push(generateThemeVariable(baseName, kawaiiDark))
    }

    // High contrast overrides
    hcOverrideLines.push(generateThemeVariable(baseName, hcLight))
    hcDarkOverrideLines.push(generateThemeVariable(baseName, hcDark))
  }

  // Process regular colors
  for (const colorName of Object.keys(colors.regular.colors)) {
    processColorGroup(
      colors.regular.colors,
      colors['high-contrast'].colors,
      colors.kawaii.colors,
      colorName,
    )
  }

  // Process grayScale colors
  for (const grayScaleName of Object.keys(colors.regular.grayScale)) {
    processColorGroup(
      colors.regular.grayScale,
      colors['high-contrast'].grayScale,
      colors.kawaii.grayScale,
      grayScaleName,
    )
  }

  // Process semantic colors (element, background, fill, material, application)
  function processSemanticColors(
    regularSemantic: any,
    kawaiisemantic: any,
    hcSemantic: any,
    groupName: string,
  ) {
    for (const [key, variants] of Object.entries(regularSemantic)) {
      let varName: string
      switch (groupName) {
        case 'element': {
          varName = key === 'primary' ? key : `${key}`
          break
        }
        case 'background': {
          varName = key === 'primary' ? 'background' : `background-${key}`
          break
        }
        case 'fill': {
          varName = key === 'primary' ? 'fill' : `fill-${key}`
          break
        }
        case 'material': {
          varName = `material-${key.toLowerCase()}`
          break
        }
        default: {
          varName = key
        }
      }

      if (groupName === 'element') {
        // Element colors have depth structure
        for (const [depth, depthVariants] of Object.entries(
          variants as SemanticColor,
        )) {
          const depthVarName =
            depth === 'primary' ? varName : `${varName}-${depth}`

          const regularLight = getColorString(
            (depthVariants as ColorVariants).light,
          )
          const regularDark = getColorString(
            (depthVariants as ColorVariants).dark,
          )

          // For semantic colors, we use the same values across themes for now
          // but you could extend this to use theme-specific semantic colors
          const kawaiiLight = kawaiisemantic?.[key]?.[depth]
            ? getColorString(kawaiisemantic[key][depth].light)
            : regularLight
          const kawaiiDark = kawaiisemantic?.[key]?.[depth]
            ? getColorString(kawaiisemantic[key][depth].dark)
            : regularDark
          const hcLight = hcSemantic?.[key]?.[depth]
            ? getColorString(hcSemantic[key][depth].light)
            : regularLight
          const hcDark = hcSemantic?.[key]?.[depth]
            ? getColorString(hcSemantic[key][depth].dark)
            : regularDark

          lightModeLines.push(generateThemeVariable(depthVarName, regularLight))
          allVariantLines.push(
            generateThemeVariable(`${depthVarName}-light`, regularLight),
          )
          allVariantLines.push(
            generateThemeVariable(`${depthVarName}-dark`, regularDark),
          )
          darkOverrideLines.push(
            generateThemeVariable(depthVarName, regularDark),
          )

          kawaiiOverrideLines.push(
            generateThemeVariable(depthVarName, kawaiiLight),
          )
          kawaiiDarkOverrideLines.push(
            generateThemeVariable(depthVarName, kawaiiDark),
          )
          hcOverrideLines.push(generateThemeVariable(depthVarName, hcLight))
          hcDarkOverrideLines.push(generateThemeVariable(depthVarName, hcDark))
        }
      } else {
        // Other semantic colors have direct variants
        const regularLight = getColorString((variants as ColorVariants).light)
        const regularDark = getColorString((variants as ColorVariants).dark)

        const kawaiiLight = kawaiisemantic?.[key]
          ? getColorString(kawaiisemantic[key].light)
          : regularLight
        const kawaiiDark = kawaiisemantic?.[key]
          ? getColorString(kawaiisemantic[key].dark)
          : regularDark
        const hcLight = hcSemantic?.[key]
          ? getColorString(hcSemantic[key].light)
          : regularLight
        const hcDark = hcSemantic?.[key]
          ? getColorString(hcSemantic[key].dark)
          : regularDark

        lightModeLines.push(generateThemeVariable(varName, regularLight))
        allVariantLines.push(
          generateThemeVariable(`${varName}-light`, regularLight),
        )
        allVariantLines.push(
          generateThemeVariable(`${varName}-dark`, regularDark),
        )
        darkOverrideLines.push(generateThemeVariable(varName, regularDark))

        kawaiiOverrideLines.push(generateThemeVariable(varName, kawaiiLight))
        kawaiiDarkOverrideLines.push(generateThemeVariable(varName, kawaiiDark))
        hcOverrideLines.push(generateThemeVariable(varName, hcLight))
        hcDarkOverrideLines.push(generateThemeVariable(varName, hcDark))
      }
    }
  }

  processSemanticColors(
    colors.regular.element,
    colors.kawaii.element,
    colors['high-contrast'].element,
    'element',
  )
  processSemanticColors(
    colors.regular.background,
    colors.kawaii.background,
    colors['high-contrast'].background,
    'background',
  )
  processSemanticColors(
    colors.regular.fill,
    colors.kawaii.fill,
    colors['high-contrast'].fill,
    'fill',
  )
  processSemanticColors(
    colors.regular.material,
    colors.kawaii.material,
    colors['high-contrast'].material,
    'material',
  )
  processSemanticColors(
    colors.regular.application,
    colors.kawaii.application,
    colors['high-contrast'].application,
    'application',
  )

  return {
    lightModeDefaults: lightModeLines.join(';\n  '),
    allVariants: allVariantLines.join(';\n  '),
    darkOverrides: darkOverrideLines.join(';\n    '),
    kawaiiOverrides: kawaiiOverrideLines.join(';\n      '),
    kawaiiDarkOverrides: kawaiiDarkOverrideLines.join(';\n        '),
    hcOverrides: hcOverrideLines.join(';\n      '),
    hcDarkOverrides: hcDarkOverrideLines.join(';\n        '),
  }
}

// Deprecated: keeping for compatibility
export function generateThemeVariables(): string {
  return 'deprecated function - use generateUnifiedThemeColorVariables instead'
}

export function generateTailwindTheme(
  colors: ColorSystem,
  colorSpace: ColorFormat = 'srgb',
): string {
  const colorVars = generateUnifiedThemeColorVariables(colors, colorSpace)

  return `/* This file is auto-generated by Pastel Palette for Tailwind v4 */
@import "tailwindcss";

/* Light mode colors (default) */
@theme {
  ${colorVars.lightModeDefaults};
}

/* All color variants with suffixes */
@theme {
  ${colorVars.allVariants};
}

@layer theme {
  :root {
    /* Dark mode overrides */
    @variant dark {
      ${colorVars.darkOverrides};
    }
  }
}


@layer theme {
  [data-contrast=low], [data-contrast=low] * {
     /* Kawaii color overrides */
     ${colorVars.kawaiiOverrides};

     /* Kawaii dark mode overrides */
     @variant dark {
       ${colorVars.kawaiiDarkOverrides};
     }
   }
}

@layer theme {
 [data-contrast=high], [data-contrast=high] * {
     /* High contrast color overrides */
     ${colorVars.hcOverrides};

     /* High contrast dark mode overrides */
     @variant dark {
       ${colorVars.hcDarkOverrides};
     }
   }
}`
}

export function generateCSS(config: GeneratorConfig): string {
  const colorSpace = config.formatOptions?.colorSpace || 'srgb'
  return generateTailwindTheme(config.colors, colorSpace)
}

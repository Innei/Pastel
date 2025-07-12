# UI Color System Implementation PRP

## Overview
Build a comprehensive UIKit-inspired color system with OKLCH color space support, TypeScript definitions, and TailwindCSS v4 integration using a monorepo architecture. The color palette will follow a cute & kawaii aesthetic with soft, pastel tones and playful color combinations.

## Background & Context

### Research References
- **Apple UIKit Color System**: https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors
- **Apple HIG Color Guidelines**: https://developer.apple.com/design/human-interface-guidelines/color
- **TailwindCSS v4 Docs**: https://tailwindcss.com/docs/theme
- **OKLCH Color Space**: https://www.smashingmagazine.com/2023/08/oklch-color-spaces-gamuts-css/

### Key Requirements
1. **Color Categories** (from INITIAL.md):
   - Regular colors: blue, red, green, yellow, purple, orange, pink, brown, gray, black, white, sky, neutral
   - Element colors: border, separator, link, text, placeholder-text, disabled-control, disabled-text
   - Background colors with depth system
   - Material colors: ultra-thick, thick, medium, thin, ultra-thin, opaque
   - Fill colors with depth system
   - Application colors: accent, primary, secondary

2. **Depth System**: primary → secondary → tertiary → quaternary → quinary

3. **Technical Requirements**:
   - OKLCH color space as primary format with sRGB fallbacks
   - TypeScript type definitions
   - TailwindCSS v4 CSS-based configuration
   - Monorepo structure (already exists)
   - Auto-generation of TailwindCSS config
   - Automatic light/dark mode adaptation with two strategies:
     - CSS media query: `@media (prefers-color-scheme: dark)`
     - HTML selector: `html[data-theme="dark"]` or custom selectors
   - Cute & kawaii color aesthetic:
     - Soft pastel tones
     - Higher lightness values (0.7-0.95 in OKLCH)
     - Lower saturation for gentle appearance
     - Playful color combinations

## Implementation Architecture

### Project Structure
```
color-system/
├── packages/
│   ├── colors/                    # Core color system package
│   │   ├── src/
│   │   │   ├── types/            # TypeScript interfaces
│   │   │   ├── colors/           # Color definitions
│   │   │   ├── semantic/         # Semantic mappings
│   │   │   ├── utils/            # Color utilities
│   │   │   └── index.ts          # Main exports
│   │   └── package.json
│   └── tailwindcss-colors/       # TailwindCSS integration
│       ├── src/
│       │   ├── generator.ts      # Config generator
│       │   └── build.ts          # Build script
│       ├── dist/
│       │   └── theme.css         # Generated CSS config
│       └── package.json
```

### Color System Design

#### Type Definitions
```typescript
// Color format
interface ColorValue {
  oklch: string;           // Primary format: oklch(L C H / alpha)
  srgb: string;           // Fallback: rgb(R G B / alpha)
}

// Color mode variants
interface ColorVariants {
  light: ColorValue;
  dark: ColorValue;
}

// Depth levels
type DepthLevel = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';

// Semantic color with depth system
interface SemanticColor {
  [K in DepthLevel]?: ColorVariants;
}

// Dark mode strategy
type DarkModeStrategy = 'media-query' | 'class' | 'data-attribute';

interface DarkModeConfig {
  strategy: DarkModeStrategy;
  selector?: string; // e.g., 'html[data-theme="dark"]', '.dark'
}
```

#### Implementation Blueprint
```typescript
// 1. Define base colors with cute & kawaii aesthetic
const regularColors = {
  // Soft pastel blue (like cotton candy)
  blue: {
    light: { oklch: 'oklch(0.85 0.12 237)', srgb: 'rgb(173 207 255)' },
    dark: { oklch: 'oklch(0.75 0.14 237)', srgb: 'rgb(138 177 255)' }
  },
  // Gentle pink (like sakura petals)
  pink: {
    light: { oklch: 'oklch(0.88 0.15 350)', srgb: 'rgb(255 214 232)' },
    dark: { oklch: 'oklch(0.78 0.18 350)', srgb: 'rgb(255 179 214)' }
  },
  // Soft purple (like lavender)
  purple: {
    light: { oklch: 'oklch(0.85 0.13 280)', srgb: 'rgb(225 207 255)' },
    dark: { oklch: 'oklch(0.75 0.16 280)', srgb: 'rgb(201 177 255)' }
  },
  // Mint green (refreshing)
  green: {
    light: { oklch: 'oklch(0.87 0.10 155)', srgb: 'rgb(196 242 216)' },
    dark: { oklch: 'oklch(0.77 0.13 155)', srgb: 'rgb(156 227 190)' }
  },
  // Peach orange
  orange: {
    light: { oklch: 'oklch(0.88 0.10 60)', srgb: 'rgb(255 227 207)' },
    dark: { oklch: 'oklch(0.78 0.13 60)', srgb: 'rgb(255 204 171)' }
  },
  // Lemon yellow
  yellow: {
    light: { oklch: 'oklch(0.92 0.08 100)', srgb: 'rgb(255 247 207)' },
    dark: { oklch: 'oklch(0.82 0.11 100)', srgb: 'rgb(255 234 171)' }
  },
  // Sky blue (dreamy)
  sky: {
    light: { oklch: 'oklch(0.90 0.08 210)', srgb: 'rgb(207 235 255)' },
    dark: { oklch: 'oklch(0.80 0.11 210)', srgb: 'rgb(171 217 255)' }
  },
  // ... other colors with similar soft treatments
};

// 2. Create semantic mappings
const elementColors = {
  text: {
    primary: { light: colors.label, dark: colors.label },
    secondary: { light: colors.secondaryLabel, dark: colors.secondaryLabel },
    // ... depth levels
  },
  border: {
    primary: { light: regularColors.gray.light, dark: regularColors.gray.dark }
  }
};

// 3. Build TailwindCSS config generator with dark mode support
function generateTailwindTheme(colors: ColorSystem, darkMode: DarkModeConfig): string {
  const lightColors = generateColorVariables(colors, 'light');
  const darkColors = generateColorVariables(colors, 'dark');
  
  if (darkMode.strategy === 'media-query') {
    return `
@import "tailwindcss";

@theme {
  /* Light mode colors */
  ${lightColors}
}

/* Dark mode with media query */
@media (prefers-color-scheme: dark) {
  @theme {
    ${darkColors}
  }
}`;
  } else {
    // Class or data-attribute strategy
    const selector = darkMode.selector || 'html[data-theme="dark"]';
    return `
@import "tailwindcss";

@theme {
  /* Light mode colors (default) */
  ${lightColors}
}

/* Dark mode with selector */
${selector} {
  @theme {
    ${darkColors}
  }
}`;
  }
}

// Helper function
function generateColorVariables(colors: ColorSystem, mode: 'light' | 'dark'): string {
  return Object.entries(colors).map(([name, variants]) => {
    return `--color-${name}: ${variants[mode].oklch};`;
  }).join('\n  ');
}
```

### Existing Patterns to Follow
- Use `tsdown` for building the colors package
- Follow the export pattern: main exports through `index.ts`
- Utility functions in `utils.ts` (already has `mapHexToRGBString`, `addAlphaToHex`)
- Use `tsx` for build scripts in tailwindcss package

### Known Gotchas
1. **OKLCH Browser Support**: Not all browsers support OKLCH, always provide sRGB fallback
2. **TailwindCSS v4**: Uses CSS-based config, not JavaScript - must generate valid CSS
3. **Color Consistency**: Ensure light/dark mode colors maintain proper contrast ratios
4. **Dark Mode Selectors**: When using selector strategy, ensure the selector has higher specificity than default styles
5. **CSS Variable Scoping**: Variables defined in @theme are global, but selector-based dark mode needs proper cascading
6. **Kawaii Aesthetic Balance**: While maintaining cute aesthetics, ensure sufficient contrast for accessibility (WCAG AA standards)

## Implementation Tasks

1. **Set up TypeScript types and interfaces** (packages/colors/src/types/)
   - Define ColorValue interface with OKLCH support
   - Create semantic color types with depth system
   - Export all type definitions

2. **Implement base color palette** (packages/colors/src/colors/)
   - Define all regular colors in OKLCH with sRGB fallbacks
   - Ensure proper light/dark mode variants
   - Apply cute & kawaii aesthetic:
     - Use high lightness values (0.7-0.95)
     - Keep chroma moderate (0.08-0.18) for soft appearance
     - Create harmonious pastel palette

3. **Create semantic color mappings** (packages/colors/src/semantic/)
   - Map UIKit-inspired semantic colors
   - Implement depth system (primary → quinary)
   - Document usage scenarios for each semantic color

4. **Build color utilities** (packages/colors/src/utils/)
   - OKLCH ↔ RGB conversion utilities
   - Color validation helpers

5. **Implement TailwindCSS config generator** (packages/tailwindcss-colors/src/)
   - Parse TypeScript color definitions
   - Generate CSS with @theme directives
   - Implement dark mode strategy options:
     - Media query for OS-level preference
     - Selector-based for application-controlled themes
   - Create configuration API for dark mode selection

6. **Create build pipeline**
   - Set up auto-generation on color package changes
   - Add watch mode for development
   - Include validation steps

7. **Add comprehensive tests**
   - Color contrast validation
   - OKLCH to sRGB fallback verification
   - TailwindCSS output validation
   - Dark mode strategy testing:
     - Media query CSS generation
     - Selector-based CSS generation
     - Variable scoping verification

8. **Write documentation**
   - Usage examples for each color category
   - Integration guide for TailwindCSS v4
   - OKLCH color space best practices
   - Dark mode configuration guide:
     - When to use media query vs selector
     - How to implement theme switching
     - CSS variable usage examples

## Validation Gates

```bash
# TypeScript validation
cd packages/colors && npm run build

# Lint check
cd packages/colors && npm run lint

# Type checking
cd packages/colors && npx tsc --noEmit

# Build TailwindCSS config
cd packages/tailwindcss-colors && npm run build

# Validate generated CSS
cd packages/tailwindcss-colors && npx tailwindcss --help
# Note: Actual CSS validation command depends on TailwindCSS v4 CLI

# Run all tests
pnpm -r test
```

## Error Handling Strategy

1. **Color Fallbacks**: Always provide sRGB fallback for P3 colors
2. **Build Failures**: Clear error messages for missing color definitions
3. **Type Safety**: Strict TypeScript to catch issues at compile time
4. **Runtime Validation**: Validate color formats before CSS generation

## Success Criteria

1. ✓ All color categories implemented with TypeScript definitions
2. ✓ OKLCH color space support with sRGB fallbacks
3. ✓ Semantic color system matching UIKit patterns
4. ✓ Auto-generated TailwindCSS v4 configuration
5. ✓ Automatic light/dark mode adaptation with configurable strategies
6. ✓ Comprehensive documentation and examples
7. ✓ All validation gates passing

## Confidence Score: 9/10

High confidence due to:
- Clear requirements and examples from UIKit
- Existing monorepo structure
- Well-researched implementation approach
- Comprehensive validation strategy

## Additional Implementation Examples

### Dark Mode Strategy Usage

```typescript
// packages/tailwindcss-colors/src/config.ts
export interface GeneratorConfig {
  colors: ColorSystem;
  darkMode?: DarkModeConfig;
  // Other config options...
}

// Default configuration
const defaultConfig: GeneratorConfig = {
  darkMode: {
    strategy: 'media-query' // Default to OS preference
  }
};

// Usage examples:
// 1. Media query (follows OS preference)
const mediaQueryConfig = {
  darkMode: { strategy: 'media-query' }
};

// 2. Data attribute (application-controlled)
const dataAttributeConfig = {
  darkMode: { 
    strategy: 'data-attribute',
    selector: 'html[data-theme="dark"]'
  }
};

// 3. Class-based (Tailwind-style)
const classConfig = {
  darkMode: {
    strategy: 'class',
    selector: '.dark'
  }
};
```

### Generated CSS Examples

#### Media Query Strategy Output:
```css
@import "tailwindcss";

@theme {
  /* Cute & kawaii pastel colors */
  --color-blue: oklch(0.85 0.12 237);
  --color-pink: oklch(0.88 0.15 350);
  --color-purple: oklch(0.85 0.13 280);
  --color-text: oklch(0.25 0.02 0);
  --color-background: oklch(0.98 0.01 350);
}

@media (prefers-color-scheme: dark) {
  @theme {
    /* Slightly deeper but still soft colors for dark mode */
    --color-blue: oklch(0.75 0.14 237);
    --color-pink: oklch(0.78 0.18 350);
    --color-purple: oklch(0.75 0.16 280);
    --color-text: oklch(0.95 0.01 0);
    --color-background: oklch(0.18 0.02 280);
  }
}
```

#### Selector Strategy Output:
```css
@import "tailwindcss";

@theme {
  /* Cute & kawaii pastel colors */
  --color-blue: oklch(0.85 0.12 237);
  --color-pink: oklch(0.88 0.15 350);
  --color-purple: oklch(0.85 0.13 280);
  --color-text: oklch(0.25 0.02 0);
  --color-background: oklch(0.98 0.01 350);
}

html[data-theme="dark"] {
  @theme {
    /* Slightly deeper but still soft colors for dark mode */
    --color-blue: oklch(0.75 0.14 237);
    --color-pink: oklch(0.78 0.18 350);
    --color-purple: oklch(0.75 0.16 280);
    --color-text: oklch(0.95 0.01 0);
    --color-background: oklch(0.18 0.02 280);
  }
}
```

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Building and Development
- `pnpm build` - Build all packages using Turbo
- `pnpm dev` - Start development servers for all packages
- `pnpm typecheck` - Run TypeScript type checking across all packages
- `pnpm build:css` - Build CSS theme files for TailwindCSS integration
- `pnpm clean` - Clean all build artifacts

### Package-specific Commands
- `cd packages/colors && pnpm build` - Build the color system package
- `cd packages/tailwindcss-colors && pnpm build:css` - Generate CSS theme files
- `cd docs && pnpm dev` - Start the documentation site development server
- `cd docs && pnpm build` - Build the documentation site

## Architecture Overview

### Monorepo Structure
This is a pnpm workspace with Turbo for build orchestration:
- **packages/colors** - Core color system with TypeScript definitions
- **packages/tailwindcss-colors** - TailwindCSS v4 integration and CSS generation  
- **docs** - React documentation site built with Vite

### Core Color System (`packages/colors`)
The color system is built around OKLCH color space with sRGB and P3 fallbacks:

- **Color Types**: Each color has `light` and `dark` variants with `oklch`, `srgb`, and optional `p3` formats
- **Color Categories**:
  - `regular` - Standard colors (blue, pink, purple, etc.)
  - `regularHighContrast` - High contrast variants
  - `element` - UI element colors (text, border, link, etc.) with depth levels
  - `background` - Background colors with 5 depth levels (primary → quinary)
  - `fill` - Fill colors with depth levels
  - `material` - Opacity-based materials (ultraThick, thick, medium, thin, ultraThin, opaque)
  - `application` - App-specific colors (accent, primary, secondary)

### TailwindCSS Integration (`packages/tailwindcss-colors`)
Generates CSS files with three dark mode strategies:
- **Media query**: `@media (prefers-color-scheme: dark)`
- **Class-based**: `.dark` class selector
- **Data attribute**: `[data-theme="dark"]` selector

The generator creates CSS variables that automatically switch between light/dark variants.

### Documentation Site (`docs`)
React + Vite application showcasing the color system with:
- Interactive color palette display
- Live component examples
- Copy-to-clipboard functionality
- Real-time theme switching

## Key Files and Patterns

### Color Definition Pattern
Colors are defined in `/packages/colors/src/colors/` and `/packages/colors/src/semantic/`:
```typescript
{
  light: {
    oklch: "oklch(0.85 0.12 237)",
    srgb: "rgb(173 207 245)",
    p3: "color(display-p3 0.678 0.812 1.0)" // optional
  },
  dark: { /* ... */ }
}
```

### CSS Generation Pattern
The TailwindCSS generator uses a two-step approach:
1. Generate mode-specific variables (`--color-blue-light`, `--color-blue-dark`)
2. Create active references (`--color-blue: var(--color-blue-light)`) that switch based on dark mode strategy

### Utility Functions
Core utilities in `/packages/colors/src/utils.ts`:
- `parseOKLCH()`, `formatOKLCH()` - OKLCH string parsing/formatting
- `parseRGB()`, `formatRGB()` - RGB string parsing/formatting  
- `validateColor()` - Color format validation
- `calculateContrastRatio()` - WCAG contrast calculations

## Development Guidelines

### Color System Modifications
- Add new colors to appropriate files in `/packages/colors/src/colors/` or `/packages/colors/src/semantic/`
- Ensure both light and dark variants are provided
- Include OKLCH format (primary) and sRGB fallback (required)
- Use semantic depth levels for UI elements (primary, secondary, tertiary, etc.)

### Color Generation Rules
**CRITICAL**: Always use OKLCH as the primary color space and convert to sRGB/P3 using culori library:

1. **Primary Color Space**: OKLCH is the authoritative format
2. **Color Conversion Process**:
   ```javascript
   import { rgb, oklch, formatRgb, p3 } from 'culori';
   
   // Convert target RGB to OKLCH (normalize RGB to 0-1 range)
   const targetColor = rgb({ r: 31/255, g: 31/255, b: 35/255 });
   const oklchColor = oklch(targetColor);
   
   // Generate color scales maintaining hue and chroma, adjusting lightness
   const colorScale = {
     primary: { l: oklchColor.l, c: oklchColor.c, h: oklchColor.h },
     secondary: { l: oklchColor.l + 0.03, c: oklchColor.c, h: oklchColor.h }
   };
   
   // Convert back to sRGB and P3
   const srgbColor = formatRgb(oklch(colorScale.primary));
   const p3Color = p3(oklch(colorScale.primary));
   ```
3. **Background Color Standards**: 
   - Primary dark background: `rgb(31, 31, 35)` (#1f1f23) - similar to GitHub's dark theme
   - Generate color scales by incrementing lightness (L) by 0.03 steps
   - Maintain consistent hue (H) and chroma (C) across the scale
4. **Never manually calculate color values** - always use culori for accuracy
5. **Color Format Requirements**:
   - OKLCH: `oklch(0.241 0.008 286)` format
   - sRGB: `rgb(31 31 35)` format (space-separated, no commas)
   - P3: `color(display-p3 0.122 0.122 0.136)` format

### CSS Theme Generation
- Run `pnpm build:css` after color changes to regenerate theme files
- The CLI tool at `/packages/tailwindcss-colors/cli/build.ts` generates all three dark mode strategies

### Type Safety
- All colors use strict TypeScript interfaces
- The `ColorSystem` interface enforces structure consistency
- Color validation utilities help catch format errors

## Testing and Quality
- Use `pnpm typecheck` to verify TypeScript compilation
- The documentation site serves as a visual test of the color system
- Color contrast utilities help ensure accessibility compliance

## Documentation Site Color Integration

The documentation site (`docs/`) demonstrates the complete integration of the Pastel color system with TailwindCSS v4:

### Color System Integration Setup
- **CSS Import**: `@import '@pastel-palette/tailwindcss/dist/theme-data-attribute-oklch.css'` imports OKLCH-based theme with data attribute dark mode strategy
- **TailwindCSS v4**: Uses `@tailwindcss/vite` plugin with automatic CSS variable generation
- **Theme Strategy**: Data attribute-based dark mode (`[data-theme="dark"]`) controlled by `next-themes`

### Semantic Color Usage Patterns
The documentation uses semantic color classes throughout:

#### Text Colors
- `text-text` - Primary text using semantic text color
- `text-text-secondary` - Secondary text with appropriate hierarchy
- `text-text-tertiary` - Tertiary text for placeholders
- `text-foreground`, `text-muted` - Component-level semantic aliases

#### Background Colors
- `bg-background` - Primary background
- `bg-background-secondary` - Secondary background for hover states
- `bg-fill` - Fill colors for interactive elements

#### Border Colors
- `border-border` - Primary border color
- `border-border-secondary` - Secondary borders
- `hover:border-foreground` - Interactive border states

#### Application Colors
- `bg-accent` - Primary accent color for CTAs
- `focus:ring-accent` - Focus states using accent color

### Component-Level Implementation
Components use TailwindCSS utility classes that map to semantic color variables:

```css
/* Examples from globals.css */
.btn-primary {
  @apply bg-accent text-white hover:opacity-90 focus:ring-accent;
}

.input {
  @apply border-border bg-background text-text placeholder:text-text-tertiary focus:ring-accent;
}
```

### Mixed Usage Pattern
Some components mix semantic colors with direct color access:
- **Semantic approach**: `bg-background`, `text-text`, `border-border`
- **Direct color access**: `bg-pink`, `border-pink-dark` for specific color demonstrations

This demonstrates both the systematic approach (semantic colors) and the flexibility to access specific colors when needed for design purposes.

## Package Dependencies
- **culori** - Color space conversions and manipulations
- **@radix-ui/react-dialog** - Modal components in documentation
- **framer-motion** - Animations in documentation
- **TailwindCSS v4** - CSS framework with @theme directive support
- **next-themes** - Theme switching for light/dark mode
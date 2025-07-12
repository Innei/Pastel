# UI Color System

A comprehensive UIKit-inspired color system with OKLCH color space support, TypeScript definitions, and TailwindCSS v4 integration. Features a cute & kawaii aesthetic with soft, pastel tones.

## Features

- 🎨 **OKLCH Color Space**: Modern color format with sRGB and P3 fallbacks
- 🌸 **Kawaii Aesthetic**: Soft pastel colors with high lightness values
- 🔧 **TypeScript Support**: Full type definitions for all color values
- 🎯 **Semantic Colors**: UIKit-inspired semantic color system
- 🌓 **Dark Mode**: Automatic light/dark mode adaptation with multiple strategies
- 💨 **TailwindCSS v4**: CSS-based configuration with @theme directives
- 📦 **Monorepo Structure**: Modular packages for colors and TailwindCSS integration

## Packages

### [@color-system/colors](./packages/colors)

Core color definitions with TypeScript types and utilities.

```typescript
import { colorSystem, validateColor } from '@color-system/colors';

// Access color values
const blueLight = colorSystem.regular.blue.light.oklch;
// "oklch(0.85 0.12 237)"

// Validate colors
const result = validateColor('oklch(0.85 0.12 237)');
// { valid: true, errors: [], warnings: [] }
```

### [@color-system/tailwindcss](./packages/tailwindcss-colors)

TailwindCSS v4 integration with automatic CSS generation.

```css
/* Use generated CSS variables in your styles */
.my-element {
  color: var(--color-text);
  background-color: var(--color-background);
  border-color: var(--color-border);
}
```

## Installation

```bash
# Install both packages
npm install @color-system/colors @color-system/tailwindcss

# Or using pnpm
pnpm add @color-system/colors @color-system/tailwindcss
```

## Usage

### TailwindCSS v4 Integration

1. Import the generated theme CSS in your main CSS file:

```css
/* Choose your dark mode strategy */

/* Option 1: Media query (follows OS preference) */
@import "@color-system/tailwindcss/dist/theme.css";

/* Option 2: Class-based (.dark class) */
@import "@color-system/tailwindcss/dist/theme-class.css";

/* Option 3: Data attribute (html[data-theme="dark"]) */
@import "@color-system/tailwindcss/dist/theme-data-attribute.css";
```

2. Use the color variables in your TailwindCSS config or CSS:

```css
.button {
  background-color: var(--color-accent);
  color: var(--color-white);
  border: 1px solid var(--color-border);
}

/* With opacity modifiers */
.overlay {
  background-color: var(--color-material-medium);
}
```

### TypeScript API

```typescript
import { 
  colorSystem, 
  parseOKLCH, 
  calculateContrastRatio 
} from '@color-system/colors';

// Access semantic colors with depth
const primaryText = colorSystem.element.text.primary;
const secondaryBackground = colorSystem.background.secondary;

// Parse OKLCH strings
const oklch = parseOKLCH('oklch(0.85 0.12 237)');
// { l: 0.85, c: 0.12, h: 237, a: 1 }

// Check contrast ratios
const textRgb = parseRGB(colorSystem.element.text.primary.light.srgb);
const bgRgb = parseRGB(colorSystem.background.primary.light.srgb);
const contrast = calculateContrastRatio(textRgb!, bgRgb!);
// { ratio: 12.5, passes: { aa: true, aaa: true, ... } }
```

## Color Categories

### Regular Colors
- `blue`, `pink`, `purple`, `green`, `orange`, `yellow`
- `sky`, `red`, `brown`, `gray`, `neutral`, `black`, `white`

### Semantic Colors

#### Element Colors
- `text` - Primary text colors with depth levels
- `placeholderText` - Form placeholder text
- `border` - Border colors with primary/secondary variants
- `separator` - Divider/separator lines
- `link` - Interactive link colors
- `disabledControl` - Disabled UI controls
- `disabledText` - Disabled text elements

#### Background Colors
Depth levels: `primary`, `secondary`, `tertiary`, `quaternary`, `quinary`

#### Fill Colors
System fills with depth levels for UI components

#### Material Colors
Opacity-based materials:
- `ultraThick` (93% opacity)
- `thick` (85% opacity)
- `medium` (72% opacity)
- `thin` (60% opacity)
- `ultraThin` (45% opacity)
- `opaque` (100% opacity)

#### Application Colors
- `accent` - Main accent color
- `primary` - Primary brand color
- `secondary` - Secondary brand color

## Dark Mode Strategies

### 1. Media Query (Default)
Follows the operating system's color scheme preference.

```css
@import "@color-system/tailwindcss/dist/theme.css";
```

### 2. Class-based
Toggle dark mode using a `.dark` class on any parent element.

```html
<html class="dark">
  <!-- Dark mode active -->
</html>
```

### 3. Data Attribute
Control dark mode via data attributes for more flexibility.

```html
<html data-theme="dark">
  <!-- Dark mode active -->
</html>
```

## Building from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/color-system.git
cd color-system

# Install dependencies
pnpm install

# Build all packages
pnpm -r build

# Or build individually
cd packages/colors && npm run build:tsc
cd packages/tailwindcss-colors && npm run build
```

## Development

```bash
# Run TypeScript checks
cd packages/colors && npx tsc --noEmit

# Regenerate TailwindCSS themes
cd packages/tailwindcss-colors && npm run build
```

## Color Philosophy

The kawaii aesthetic emphasizes:
- **High lightness values** (0.7-0.95 in OKLCH)
- **Moderate chroma** (0.08-0.18) for soft appearance
- **Harmonious pastels** that work well together
- **Gentle contrasts** while maintaining accessibility

## License

MIT

## Credits

Inspired by Apple's UIKit color system and modern color spaces like OKLCH.
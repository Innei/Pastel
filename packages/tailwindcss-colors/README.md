# Pastel Palette

A comprehensive kawaii-inspired color system with OKLCH color space support, TypeScript definitions, and TailwindCSS v4 integration. Features a cute & kawaii aesthetic with soft, pastel tones.

## Features

- 🎨 **OKLCH Color Space**: Modern color format with sRGB and P3 fallbacks
- 🌸 **Kawaii Aesthetic**: Soft pastel colors with high lightness values
- 🔧 **TypeScript Support**: Full type definitions for all color values
- 🎯 **Semantic Colors**: UIKit-inspired semantic color system
- 🌓 **Dark Mode**: Automatic light/dark mode adaptation with multiple strategies
- 💨 **TailwindCSS v4**: CSS-based configuration with @theme directives
- 📦 **Monorepo Structure**: Modular packages for colors and TailwindCSS integration

## Usage

TailwindCSS v4 integration with automatic CSS generation and color variants support.

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
# Install TailwindCSS integration
npm install @pastel-palette/tailwindcss

# Or using pnpm
pnpm add @pastel-palette/tailwindcss
```

## Usage

### TailwindCSS v4 Integration

1. Import the generated theme CSS in your main CSS file:

```css
/* Choose your color space - all include unified kawaii and high-contrast support */

/* OKLCH color space (recommended) */
@import '@pastel-palette/tailwindcss/dist/theme-oklch.css';

/* sRGB color space (fallback) */
@import '@pastel-palette/tailwindcss/dist/theme-srgb.css';

/* P3 Display color space (wide gamut) */
@import '@pastel-palette/tailwindcss/dist/theme-p3.css';
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

### Color Variants Usage

The color system now supports three variants: **regular**, **kawaii**, and **high-contrast**. You can use them in two ways:

#### Method 1: Data Attributes (Responsive Override)

Use data attributes to apply color variants that automatically switch between light and dark modes:

```html
<!-- Kawaii mode -->
<html data-contrast="low">
  <div class="bg-background text-text">Kawaii colors with auto dark mode</div>
</html>

<!-- High contrast mode -->
<html data-contrast="high">
  <div class="bg-background text-text">
    High contrast colors with auto dark mode
  </div>
</html>
```

#### Method 2: Fixed Color Classes (Static Colors)

Use suffixed classes for colors that don't respond to dark mode changes:

```html
<!-- Always use kawaii colors (fixed) -->
<div class="bg-background-kawaii text-text-kawaii">
  Always kawaii, regardless of dark mode
</div>

<!-- Always use high contrast colors (fixed) -->
<div class="bg-background-hc text-text-hc">
  Always high contrast, regardless of dark mode
</div>

<!-- Specific light/dark variants -->
<div class="bg-background-light text-text-dark">
  Mixed light background with dark text
</div>
```


## Color Categories

### Regular Colors

- `blue`, `pink`, `purple`, `green`, `orange`, `yellow`
- `sky`, `red`, `brown`, `gray`, `neutral`, `black`, `white`
- Available in three variants: **regular** (default), **kawaii** (softer), **high-contrast** (more accessible)

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

## Dark Mode & Color Variants

The unified theme system automatically handles dark mode via TailwindCSS v4's built-in dark mode support. All color variants (regular, kawaii, high-contrast) work seamlessly with dark mode.

### Dark Mode Activation

Dark mode is activated using TailwindCSS v4's standard approach:

```html
<!-- Automatic (follows OS preference) -->
<html>
  <body class="dark:bg-background-dark">
    Content
  </body>
</html>

<!-- Manual toggle with class -->
<html class="dark">
  <body class="bg-background">
    Content automatically uses dark colors
  </body>
</html>
```

### Color Variant Control

Control color variants independently of dark mode:

```html
<!-- Kawaii colors with automatic dark mode -->
<html data-contrast="low">
  <body class="bg-background text-text">
    Kawaii colors, dark mode follows OS
  </body>
</html>

<!-- High contrast colors with manual dark mode -->
<html data-contrast="high" class="dark">
  <body class="bg-background text-text">
    High contrast + dark mode
  </body>
</html>
```

## Development

```bash
# Clone the repository
git clone https://github.com/Innei/pastel.git
cd pastel

# Install dependencies
pnpm install

# Regenerate TailwindCSS themes
cd packages/tailwindcss-colors && pnpm build
```

## Color Philosophy

The pastel palette aesthetic emphasizes:

- **High lightness values** (0.7-0.95 in OKLCH)
- **Moderate chroma** (0.08-0.18) for soft appearance
- **Harmonious pastels** that work well together
- **Gentle contrasts** while maintaining accessibility

### Color Variant Characteristics

#### Regular Colors (Default)

- Balanced lightness and chroma for general use
- WCAG AA compliant contrast ratios
- Suitable for most UI applications

#### Kawaii Colors (`-kawaii`)

- **Higher lightness values** (0.82-0.9 in OKLCH)
- **Lower chroma** (0.08-0.14) for extra softness
- Ultra-cute aesthetic with pastel softness
- Perfect for kawaii/cute themed applications

#### High Contrast Colors (`-hc`)

- **Lower lightness values** (0.4-0.6 in OKLCH)
- **Higher chroma** (0.2-0.3) for vivid appearance
- WCAG AAA compliant contrast ratios
- Enhanced accessibility for visually impaired users

## License

2025 © Innei, Released under the MIT License.

> [Personal Website](https://innei.in/) · GitHub [@Innei](https://github.com/innei/)
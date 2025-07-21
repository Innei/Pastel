# @pastel-palette/tailwindcss

TailwindCSS v4 integration for the UI Color System, providing automatic CSS generation with OKLCH colors and dark mode support.

## Installation

```bash
npm install @pastel-palette/tailwindcss @pastel-palette/colors
```

## Quick Start

Choose one of the pre-built CSS files based on your dark mode strategy and preferred color format:

### Default Format (OKLCH - Recommended)
```css
/* Option 1: Auto dark mode (follows system preference) */
@import '@pastel-palette/tailwindcss/dist/theme.css';

/* Option 2: Class-based dark mode (.dark) */
@import '@pastel-palette/tailwindcss/dist/theme-class.css';

/* Option 3: Data attribute dark mode (data-theme) */
@import '@pastel-palette/tailwindcss/dist/theme-data-attribute.css';

/* Option 4: Media query only (explicit) */
@import '@pastel-palette/tailwindcss/dist/theme-media-query.css';
```

### OKLCH Format (Modern Color Space)
```css
/* Explicit OKLCH versions for modern browsers */
@import '@pastel-palette/tailwindcss/dist/theme-oklch.css';
@import '@pastel-palette/tailwindcss/dist/theme-class-oklch.css';
@import '@pastel-palette/tailwindcss/dist/theme-data-attribute-oklch.css';
@import '@pastel-palette/tailwindcss/dist/theme-media-query-oklch.css';
```

### sRGB Format (Maximum Compatibility)
```css
/* sRGB versions for legacy browser support */
@import '@pastel-palette/tailwindcss/dist/theme-srgb.css';
@import '@pastel-palette/tailwindcss/dist/theme-class-srgb.css';
@import '@pastel-palette/tailwindcss/dist/theme-data-attribute-srgb.css';
@import '@pastel-palette/tailwindcss/dist/theme-media-query-srgb.css';
```

### Display P3 Format (Wide Gamut)
```css
/* P3 versions for modern displays with wide color gamut */
@import '@pastel-palette/tailwindcss/dist/theme-p3.css';
@import '@pastel-palette/tailwindcss/dist/theme-class-p3.css';
@import '@pastel-palette/tailwindcss/dist/theme-data-attribute-p3.css';
@import '@pastel-palette/tailwindcss/dist/theme-media-query-p3.css';
```

### Special Variants
```css
/* High Contrast versions (available in all color formats) */
@import '@pastel-palette/tailwindcss/dist/theme-hc.css';              /* OKLCH high contrast */
@import '@pastel-palette/tailwindcss/dist/theme-srgb-hc.css';         /* sRGB high contrast */
@import '@pastel-palette/tailwindcss/dist/theme-p3-hc.css';           /* P3 high contrast */

/* Kawaii theme versions (available in all color formats) */
@import '@pastel-palette/tailwindcss/dist/theme-oklch-kawaii.css';     /* OKLCH kawaii */
@import '@pastel-palette/tailwindcss/dist/theme-srgb-kawaii.css';      /* sRGB kawaii */
@import '@pastel-palette/tailwindcss/dist/theme-p3-kawaii.css';        /* P3 kawaii */
```

Then use the color variables in your CSS:

```css
.button {
  background-color: var(--color-accent);
  color: var(--color-white);
  border: 1px solid var(--color-border);
}
```

## Available Build Outputs

This package provides multiple CSS files to support different dark mode implementations. Choose the one that fits your project's needs:

### 1. `theme.css` (Recommended)

**Default theme with automatic dark mode**

```css
@import '@pastel-palette/tailwindcss/dist/theme.css';
```

- ✅ Automatically follows system color scheme preference
- ✅ No JavaScript required
- ✅ Works out of the box
- ❌ Users can't manually toggle dark mode

**Best for:** Simple websites, documentation sites, blogs

### 2. `theme-class.css`

**Class-based dark mode toggle**

```css
@import '@pastel-palette/tailwindcss/dist/theme-class.css';
```

```html
<!-- Light mode -->
<html>
  <div class="card">Light theme</div>
</html>

<!-- Dark mode -->
<html class="dark">
  <div class="card">Dark theme</div>
</html>
```

- ✅ Manual dark mode control
- ✅ Works with JavaScript theme toggles
- ✅ Popular convention (used by many frameworks)
- ❌ Requires JavaScript for theme switching

**Best for:** React/Vue apps, dashboards, interactive websites

### 3. `theme-data-attribute.css`

**Data attribute-based dark mode**

```css
@import '@pastel-palette/tailwindcss/dist/theme-data-attribute.css';
```

```html
<!-- Light mode -->
<html data-theme="light">
  <div class="card">Light theme</div>
</html>

<!-- Dark mode -->
<html data-theme="dark">
  <div class="card">Dark theme</div>
</html>
```

- ✅ Semantic HTML approach
- ✅ Supports multiple themes (not just light/dark)
- ✅ Clean separation of concerns
- ❌ Less common convention

**Best for:** Design systems, component libraries, multi-theme applications

### 4. `theme-media-query.css`

**Media query only (explicit)**

```css
@import '@pastel-palette/tailwindcss/dist/theme-media-query.css';
```

- ✅ Explicit media query implementation
- ✅ Same as `theme.css` but more explicit
- ❌ No manual toggle capability

**Best for:** When you need explicit media query behavior

## Color Variables Reference

### Semantic Colors

#### Text & Content

```css
--color-text                  /* Primary text */
--color-text-secondary        /* Secondary text */
--color-text-tertiary         /* Tertiary text */
--color-text-quaternary       /* Quaternary text */
--color-placeholder-text      /* Form placeholders */
--color-disabled-text         /* Disabled state text */
--color-link                  /* Link color */
```

#### Backgrounds

```css
--color-background            /* Primary background */
--color-background-secondary  /* Cards, panels */
--color-background-tertiary   /* Nested elements */
--color-background-quaternary /* Deep nested elements */
--color-background-quinary    /* Deepest nested elements */
```

#### Borders & Separators

```css
--color-border                /* Primary borders */
--color-border-secondary      /* Secondary borders */
--color-separator             /* Dividers, hr elements */
--color-disabled-control      /* Disabled form controls */
```

#### Fill Colors

```css
--color-fill                  /* Primary fill */
--color-fill-secondary        /* Secondary fill */
--color-fill-tertiary         /* Tertiary fill */
--color-fill-quaternary       /* Quaternary fill */
```

### Brand Colors

```css
--color-accent                /* Primary accent */
--color-primary               /* Primary brand */
--color-secondary             /* Secondary brand */
```

### Base Colors

```css
--color-blue, --color-pink, --color-purple
--color-green, --color-orange, --color-yellow
--color-red, --color-brown, --color-gray
--color-neutral, --color-black, --color-white
```

### Material Colors (Glass/Overlay Effects)

```css
--color-material-ultrathick   /* 93% opacity */
--color-material-thick        /* 85% opacity */
--color-material-medium       /* 72% opacity */
--color-material-thin         /* 60% opacity */
--color-material-ultrathin    /* 45% opacity */
--color-material-opaque       /* 100% opacity */
```

### Color Format Variants

Each color is available in **three different color space formats** to ensure maximum browser compatibility and color accuracy across different displays:

#### 1. OKLCH (Default - Modern Color Space)

```css
--color-blue          /* Default OKLCH format */
--color-accent        /* OKLCH with perceptual uniformity */
--color-background    /* OKLCH for better color mixing */
```

- ✅ **Perceptually uniform** - Equal changes in values produce equal visual differences
- ✅ **Better color mixing** - More natural gradients and blending
- ✅ **Wider gamut** - Can represent more colors than sRGB
- ✅ **Future-proof** - Modern CSS color standard
- ❌ **Browser support**: Chrome 111+, Firefox 113+, Safari 15.4+

**Best for:** Modern web applications, design systems requiring precise color control

#### 2. sRGB (Fallback - Universal Compatibility)

```css
--color-blue-srgb          /* sRGB fallback version */
--color-accent-srgb        /* Compatible with all browsers */
--color-background-srgb    /* Standard RGB color space */
```

- ✅ **Universal compatibility** - Works in all browsers
- ✅ **Predictable** - Standard web color space
- ✅ **Performance** - No additional processing needed
- ❌ **Limited gamut** - Cannot represent all visible colors
- ❌ **Color mixing** - May produce muddy intermediate colors

**Best for:** Legacy browser support, maximum compatibility

#### 3. Display P3 (Wide Gamut - Premium Displays)

```css
--color-blue-p3          /* Display P3 wide gamut */
--color-accent-p3        /* Enhanced for modern displays */
--color-background-p3    /* Richer colors on supported screens */
```

- ✅ **Wide color gamut** - 25% more colors than sRGB
- ✅ **Vibrant colors** - More saturated and vivid appearance
- ✅ **Modern displays** - Optimized for iPhone, iPad, MacBook screens
- ❌ **Limited support** - Only on devices with wide gamut displays
- ❌ **Fallback needed** - Not supported everywhere

**Best for:** iOS/macOS apps, high-end design work, premium user experiences

#### Automatic Color Space Selection

The CSS files automatically use the best available color space with progressive enhancement:

```css
/* Progressive enhancement example */
.button {
  /* Fallback for older browsers */
  background-color: var(--color-accent-srgb);

  /* Enhanced for wide gamut displays */
  background-color: var(--color-accent-p3);

  /* Modern OKLCH for latest browsers */
  background-color: var(--color-accent);
}
```

#### Choosing the Right Format

| Use Case                      | Recommended Format | Why                            |
| ----------------------------- | ------------------ | ------------------------------ |
| **Production websites**       | Default (OKLCH)    | Automatic fallbacks included   |
| **Legacy browser support**    | `-srgb` suffix     | Maximum compatibility          |
| **Mobile apps (iOS/Android)** | `-p3` suffix       | Better color on modern screens |
| **Design tools/editors**      | OKLCH              | Precise color manipulation     |
| **E-commerce/photography**    | `-p3` suffix       | Richer product colors          |

## Custom Configuration

Generate your own CSS with custom settings:

```typescript
import {
  generateCSS,
  createConfig,
  classDarkMode,
  dataAttributeDarkMode,
} from '@pastel-palette/tailwindcss'

// Custom class-based config
const config = createConfig({
  darkMode: classDarkMode('.my-dark-theme'),
  prefix: 'ui-',
})

// Generate CSS
const css = generateCSS(config)
```

## Browser Support

- **OKLCH Colors**: Chrome 111+, Firefox 113+, Safari 15.4+
- **CSS Custom Properties**: All modern browsers
- **Automatic Fallbacks**: sRGB for older browsers
- **Wide Gamut**: P3 colors for supported displays

## Building from Source

```bash
# Install dependencies
pnpm install

# Build the color system
pnpm run build

# Generate all CSS variants
cd packages/tailwindcss-colors
npm run build
```

This generates all four CSS files in the `dist/` directory.


## License

2025 © Innei, Released under the MIT License.

> [Personal Website](https://innei.ren/) · GitHub [@Innei](https://github.com/innei/)

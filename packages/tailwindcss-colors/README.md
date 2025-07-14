# @color-system/tailwindcss

TailwindCSS v4 integration for the UI Color System, providing automatic CSS generation with OKLCH colors and dark mode support.

## Installation

```bash
npm install @color-system/tailwindcss @color-system/colors
```

## Quick Start

1. Import the generated theme CSS in your main CSS file:

```css
@import '@color-system/tailwindcss/dist/theme.css';

/* Your other styles */
```

2. Use the color variables in your CSS:

```css
.button {
  background-color: var(--color-accent);
  color: var(--color-white);
  border: 1px solid var(--color-border);
}

.card {
  background-color: var(--color-background);
  border-color: var(--color-border-secondary);
}

.text-muted {
  color: var(--color-text-secondary);
}
```

## Dark Mode Strategies

### 1. Media Query (Default)

Automatically follows the operating system's color scheme preference.

```css
@import '@color-system/tailwindcss/dist/theme.css';
/* or */
@import '@color-system/tailwindcss/dist/theme-media-query.css';
```

No additional HTML or JavaScript needed - it just works!

### 2. Class-based

Toggle dark mode by adding a `.dark` class to any parent element.

```css
@import '@color-system/tailwindcss/dist/theme-class.css';
```

```html
<!-- Light mode -->
<html>
  <body>
    <div class="card">Light mode card</div>
  </body>
</html>

<!-- Dark mode -->
<html class="dark">
  <body>
    <div class="card">Dark mode card</div>
  </body>
</html>
```

### 3. Data Attribute

Control dark mode via data attributes for more semantic HTML.

```css
@import '@color-system/tailwindcss/dist/theme-data-attribute.css';
```

```html
<!-- Light mode -->
<html data-theme="light">
  <body>
    <div class="card">Light mode card</div>
  </body>
</html>

<!-- Dark mode -->
<html data-theme="dark">
  <body>
    <div class="card">Dark mode card</div>
  </body>
</html>
```

## Available CSS Variables

### Regular Colors

```css
--color-blue
--color-pink
--color-purple
--color-green
--color-orange
--color-yellow
--color-blue
--color-red
--color-brown
--color-gray
--color-neutral
--color-black
--color-white
```

### Semantic Colors

#### Text Colors

```css
--color-text                  /* Primary text */
--color-text-secondary        /* Secondary text */
--color-text-tertiary         /* Tertiary text */
--color-text-quaternary       /* Quaternary text */
--color-placeholder-text      /* Placeholder text */
--color-disabled-text         /* Disabled text */
```

#### UI Element Colors

```css
--color-border                /* Primary borders */
--color-border-secondary      /* Secondary borders */
--color-separator             /* Dividers/separators */
--color-link                  /* Links */
--color-disabled-control      /* Disabled controls */
```

#### Background Colors

```css
--color-background            /* Primary background */
--color-background-secondary  /* Secondary background */
--color-background-tertiary   /* Tertiary background */
--color-background-quaternary /* Quaternary background */
--color-background-quinary    /* Quinary background */
```

#### Fill Colors

```css
--color-fill                  /* Primary fill */
--color-fill-secondary        /* Secondary fill */
--color-fill-tertiary         /* Tertiary fill */
--color-fill-quaternary       /* Quaternary fill */
```

#### Material Colors (with opacity)

```css
--color-material-ultrathick   /* 93% opacity */
--color-material-thick        /* 85% opacity */
--color-material-medium       /* 72% opacity */
--color-material-thin         /* 60% opacity */
--color-material-ultrathin    /* 45% opacity */
--color-material-opaque       /* 100% opacity */
```

#### Application Colors

```css
--color-accent                /* Accent color */
--color-primary               /* Primary brand color */
--color-secondary             /* Secondary brand color */
```

### Format Variants

Each color also includes format-specific variants:

```css
/* OKLCH format (primary) */
--color-blue

/* sRGB fallback */
--color-blue-srgb

/* Display P3 (wide gamut) */
--color-blue-p3
```

## Usage with TailwindCSS v4

TailwindCSS v4 uses CSS-based configuration through the `@theme` directive. The generated theme files already include all color variables in the proper format.

Simply import one of the theme files and the colors are automatically available:

```css
@import '@color-system/tailwindcss/dist/theme.css';
```

You can then use the colors directly in your CSS:

```css
/* Direct usage with CSS variables */
.button {
  background-color: var(--color-accent);
  color: var(--color-white);
}

/* Or extend TailwindCSS with custom utilities */
@layer utilities {
  .bg-ui-accent {
    background-color: var(--color-accent);
  }

  .text-ui-primary {
    color: var(--color-text);
  }

  .border-ui {
    border-color: var(--color-border);
  }
}
```

## Programmatic Usage

Generate custom configurations:

```typescript
import {
  generateCSS,
  createConfig,
  classDarkMode,
} from '@color-system/tailwindcss'

// Create custom configuration
const config = createConfig({
  darkMode: classDarkMode('.dark-mode'),
  prefix: 'ui-',
})

// Generate CSS string
const css = generateCSS(config)

// Write to file or use in build process
fs.writeFileSync('custom-theme.css', css)
```

## Examples

### Card Component

```css
.card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
}

.card-title {
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-description {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}
```

### Glass Morphism Effect

```css
.glass-card {
  background-color: var(--color-material-thin);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
  border-radius: 16px;
}
```

### Disabled State

```css
.button:disabled {
  background-color: var(--color-disabled-control);
  color: var(--color-disabled-text);
  cursor: not-allowed;
}
```

## Building from Source

```bash
# Clone and install
git clone <repo>
cd color-system
pnpm install

# Build the color system
cd packages/colors
npm run build:tsc

# Generate TailwindCSS themes
cd ../tailwindcss-colors
npm run build
```

## Generated Files

After building, you'll find these files in `dist/`:

- `theme.css` - Default theme (media query dark mode)
- `theme-media-query.css` - Explicit media query version
- `theme-class.css` - Class-based dark mode (`.dark`)
- `theme-data-attribute.css` - Data attribute dark mode

## Browser Support

- Modern browsers with CSS custom properties support
- OKLCH colors: Chrome 111+, Firefox 113+, Safari 15.4+
- Automatic sRGB fallbacks for older browsers
- P3 wide gamut colors for supported displays

## License

MIT

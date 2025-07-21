# @pastel-palette/colors

Core color definitions package for the UI Color System, featuring OKLCH color space support, TypeScript types, and a kawaii aesthetic.

## Installation

```bash
npm install @pastel-palette/colors
```

## Usage

### Basic Usage

```typescript
import { colorSystem } from '@pastel-palette/colors';

// Access regular colors
const blueLight = colorSystem.regular.blue.light;
console.log(blueLight.oklch); // "oklch(0.85 0.12 237)"
console.log(blueLight.srgb);  // "rgb(173 207 255)"
console.log(blueLight.p3);    // "color(display-p3 0.678 0.812 1.0)"

// Access semantic colors
const primaryText = colorSystem.element.text.primary.light;
const background = colorSystem.background.primary.dark;
```

### Type Definitions

```typescript
import type { 
  ColorValue, 
  ColorVariants, 
  SemanticColor,
  DepthLevel 
} from '@pastel-palette/colors';

// Color value with multiple formats
interface ColorValue {
  oklch: string;  // Primary format
  srgb: string;   // Fallback for older browsers
  p3?: string;    // Optional P3 color space
}

// Light and dark variants
interface ColorVariants {
  light: ColorValue;
  dark: ColorValue;
}

// Depth levels for semantic colors
type DepthLevel = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
```

### Color Utilities

```typescript
import { 
  parseOKLCH, 
  formatOKLCH,
  validateColor,
  calculateContrastRatio 
} from '@pastel-palette/colors';

// Parse OKLCH color strings
const oklch = parseOKLCH('oklch(0.85 0.12 237)');
// { l: 0.85, c: 0.12, h: 237, a: 1 }

// Format OKLCH objects
const formatted = formatOKLCH({ l: 0.85, c: 0.12, h: 237 });
// "oklch(0.85 0.12 237)"

// Validate color formats
const validation = validateColor('oklch(0.85 0.12 237)');
// { valid: true, errors: [], warnings: [] }

// Calculate WCAG contrast ratios
const contrast = calculateContrastRatio(
  { r: 62, g: 59, b: 68 },    // Text color
  { r: 250, g: 248, b: 249 }  // Background color
);
// { 
//   ratio: 12.5, 
//   passes: { aa: true, aaa: true, largeTextAa: true, largeTextAaa: true } 
// }
```

## Color Categories

### Regular Colors (`colorSystem.regular`)

All regular colors include light/dark variants:

- **blue**: Cotton candy blue
- **pink**: Sakura petal pink  
- **purple**: Soft lavender
- **green**: Mint green
- **orange**: Peach orange
- **yellow**: Lemon yellow
- **sky**: Dreamy sky blue
- **red**: Soft coral red
- **brown**: Warm taupe
- **gray**: Neutral gray
- **neutral**: Ultra-light gray
- **black**: Soft black
- **white**: Off-white

### Element Colors (`colorSystem.element`)

Semantic colors for UI elements with depth levels:

- **text**: Text colors (primary → quaternary)
- **placeholderText**: Form placeholder text
- **border**: Border colors (primary, secondary)
- **separator**: Divider lines
- **link**: Interactive links
- **disabledControl**: Disabled form controls
- **disabledText**: Disabled text

### Background Colors (`colorSystem.background`)

System background colors with 5 depth levels:
- primary → secondary → tertiary → quaternary → quinary

### Fill Colors (`colorSystem.fill`)

System fill colors with 4 depth levels:
- primary → secondary → tertiary → quaternary

### Material Colors (`colorSystem.material`)

Translucent materials with varying opacity:
- **ultraThick**: 93% opacity
- **thick**: 85% opacity
- **medium**: 72% opacity
- **thin**: 60% opacity
- **ultraThin**: 45% opacity
- **opaque**: 100% opacity

### Application Colors (`colorSystem.application`)

Brand colors for your application:
- **accent**: Main accent color
- **primary**: Primary brand color
- **secondary**: Secondary brand color

## Advanced Usage

### Custom Color Validation

```typescript
import { validateColor } from '@pastel-palette/colors';

function validateThemeColors(colors: string[]) {
  return colors.map(color => {
    const result = validateColor(color);
    if (!result.valid) {
      console.error(`Invalid color: ${color}`, result.errors);
    }
    if (result.warnings.length > 0) {
      console.warn(`Color warnings: ${color}`, result.warnings);
    }
    return result;
  });
}
```

### Accessibility Checking

```typescript
import { calculateContrastRatio, parseRGB } from '@pastel-palette/colors';

function checkTextContrast(textColor: string, bgColor: string) {
  const text = parseRGB(textColor);
  const bg = parseRGB(bgColor);
  
  if (!text || !bg) {
    throw new Error('Invalid color format');
  }
  
  const contrast = calculateContrastRatio(text, bg);
  
  return {
    ratio: contrast.ratio.toFixed(2),
    meetsWCAG_AA: contrast.passes.aa,
    meetsWCAG_AAA: contrast.passes.aaa,
    recommendation: contrast.passes.aa 
      ? 'Passes WCAG AA standards' 
      : 'Consider increasing contrast'
  };
}
```

## Exports

The package provides multiple export paths:

```typescript
// Main exports
import { colorSystem, colorPalette } from '@pastel-palette/colors';

// Type definitions
import type { ColorValue, ColorVariants } from '@pastel-palette/colors/types';

// Utilities only
import { parseOKLCH, validateColor } from '@pastel-palette/colors/utils';

// Color palette info
import { colorPalette } from '@pastel-palette/colors/palette';
```

## Development

### Building

```bash
# Using the TypeScript compiler directly
npm run build:tsc

# Or using tsdown (if compatible)
npm run build
```

### Type Checking

```bash
npx tsc --noEmit
```

## Browser Support

- **OKLCH Colors**: Modern browsers (Chrome 111+, Firefox 113+, Safari 15.4+)
- **sRGB Fallbacks**: All browsers
- **P3 Colors**: Safari and modern displays with P3 support

## License

MIT
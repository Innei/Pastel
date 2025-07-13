# Pastel Palette Documentation Site PRP

## Overview

Create a modern, Vercel-style documentation site showcasing the Pastel Palette with interactive color palettes and real-world usage examples.

## Context & References

### Existing Resources

- **Color System Package**: `/packages/colors/src/` - Contains all color definitions in OKLCH, sRGB, and P3 formats
- **TailwindCSS Integration**: `/packages/tailwindcss-colors/` - Existing Tailwind plugin with CSS generation
- **Color Structure**: 13 regular colors (blue, pink, purple, green, orange, yellow, sky, red, brown, gray, neutral, black, white) with light/dark variants + semantic colors (background, element, fill, material) + application colors

### External Documentation

- **TailwindCSS V4 Setup**: https://context7.com/context7/tailwindcss/llms.txt
- **Vercel Design System**: https://vercel.com/geist (for design inspiration)
- **Geist UI Examples**: https://geist-ui.dev (community project showcasing Vercel-style components)

## Technical Blueprint

### Directory Structure

```
docs/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/
    │   └── globals.css
    ├── components/
    │   ├── Layout/
    │   │   ├── Header.tsx
    │   │   └── Footer.tsx
    │   ├── ColorPalette/
    │   │   ├── ColorGrid.tsx
    │   │   ├── ColorSwatch.tsx
    │   │   └── ColorDetails.tsx
    │   ├── Examples/
    │   │   ├── ButtonExamples.tsx
    │   │   ├── CardExamples.tsx
    │   │   ├── FormExamples.tsx
    │   │   └── AlertExamples.tsx
    │   └── ThemeToggle.tsx
    ├── hooks/
    │   ├── useTheme.ts
    │   └── useCopyToClipboard.ts
    └── utils/
        └── colors.ts
```

### Implementation Steps

1. **Project Setup**

   ```bash
   # Create docs directory and initialize
   mkdir -p docs/src docs/public
   cd docs
   pnpm init
   ```

2. **Package Dependencies**

   ```json
   {
     "name": "@color-system/docs",
     "version": "0.1.0",
     "private": true,
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "tsc && vite build",
       "preview": "vite preview",
       "typecheck": "tsc --noEmit"
     },
     "dependencies": {
       "@color-system/colors": "workspace:*",
       "@color-system/tailwindcss-colors": "workspace:*",
       "react": "^18.3.1",
       "react-dom": "^18.3.1",
       "clsx": "^2.1.1"
     },
     "devDependencies": {
       "@types/react": "^18.3.12",
       "@types/react-dom": "^18.3.1",
       "@vitejs/plugin-react": "^4.3.4",
       "@tailwindcss/vite": "^4.0.0",
       "tailwindcss": "^4.0.0",
       "typescript": "^5.8.3",
       "vite": "^6.0.7"
     }
   }
   ```

3. **Vite Configuration** (`vite.config.ts`)

   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })
   ```

4. **Global Styles** (`src/styles/globals.css`)
   
   Note: TailwindCSS v4 不再使用 JavaScript 配置文件，配置通过 CSS 直接处理。
   我们的 `@color-system/tailwindcss-colors/dist/theme.css` 已经包含了所有 @theme 定义。

   ```css
   @import 'tailwindcss';
   
   /* Import our color system with all @theme definitions */
   @import '@color-system/tailwindcss-colors/dist/theme.css';

   /* Geist-inspired base styles */
   :root {
     --font-sans:
       -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
       sans-serif;
   }

   body {
     font-family: var(--font-sans);
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }
   ```

5. **Color Grid Component** (`src/components/ColorPalette/ColorGrid.tsx`)

   ```tsx
   import { colorPalette } from '@color-system/colors'
   import ColorSwatch from './ColorSwatch'

   export default function ColorGrid() {
     const { regular } = colorPalette.colors

     return (
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {Object.entries(regular).map(([name, variants]) => (
           <ColorSwatch key={name} name={name} variants={variants} />
         ))}
       </div>
     )
   }
   ```

6. **Color Swatch Component** (`src/components/ColorPalette/ColorSwatch.tsx`)

   ```typescript
   import { useState } from 'react'
   import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
   import type { ColorVariants } from '@color-system/colors'

   interface Props {
     name: string
     variants: ColorVariants
   }

   export default function ColorSwatch({ name, variants }: Props) {
     const [copied, copy] = useCopyToClipboard()
     const [selectedVariant, setSelectedVariant] = useState<'light' | 'dark'>('light')

     const handleCopy = (value: string) => {
       copy(value)
     }

     return (
       <div className="group relative">
         <div
           className="aspect-square rounded-xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
           style={{ backgroundColor: variants[selectedVariant].srgb }}
           onClick={() => handleCopy(variants[selectedVariant].oklch)}
         >
           {/* Color info overlay */}
           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl" />

           {/* Copied indicator */}
           {copied && (
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-white bg-black/70 px-2 py-1 rounded text-sm">
                 Copied!
               </span>
             </div>
           )}
         </div>

         {/* Color details */}
         <div className="mt-3">
           <h3 className="font-medium capitalize">{name}</h3>
           <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
             {variants[selectedVariant].oklch}
           </p>
         </div>

         {/* Variant toggle */}
         <div className="mt-2 flex gap-1">
           <button
             className={`px-2 py-1 text-xs rounded ${
               selectedVariant === 'light'
                 ? 'bg-gray-200 dark:bg-gray-700'
                 : 'hover:bg-gray-100 dark:hover:bg-gray-800'
             }`}
             onClick={() => setSelectedVariant('light')}
           >
             Light
           </button>
           <button
             className={`px-2 py-1 text-xs rounded ${
               selectedVariant === 'dark'
                 ? 'bg-gray-200 dark:bg-gray-700'
                 : 'hover:bg-gray-100 dark:hover:bg-gray-800'
             }`}
             onClick={() => setSelectedVariant('dark')}
           >
             Dark
           </button>
         </div>
       </div>
     )
   }
   ```

## Key Implementation Details

### Design System Integration

- Use CSS custom properties from `@color-system/tailwindcss-colors`
- Implement Vercel-style components with:
  - Subtle shadows and borders
  - Smooth transitions
  - High contrast modes
  - Clean typography

### Interactive Features

1. **Color Display**:

   - Interactive color swatches with hover states
   - Click to copy color values
   - Toggle between light/dark variants
   - Show OKLCH, sRGB, and P3 values

2. **Usage Examples**:

   - Button variations using color system
   - Card components with semantic colors
   - Form elements with proper contrast
   - Alert/notification patterns

3. **Theme Switching**:
   - System preference detection
   - Manual toggle with persistence
   - Smooth color transitions

### Component Patterns

```typescript
// Example of using the color system in components
// The theme.css file already defines utilities like bg-blue, bg-pink, etc.
<button className="bg-blue hover:bg-blue-dark dark:bg-blue-dark dark:hover:bg-blue
                   text-white px-4 py-2 rounded-lg transition-colors">
  Kawaii Button
</button>

// Using color directly from imports for custom styling
import { colorPalette } from '@color-system/colors'

<div 
  className="rounded-xl p-6"
  style={{ 
    backgroundColor: colorPalette.colors.regular.pink.light.srgb,
    borderColor: colorPalette.colors.regular.pink.dark.srgb 
  }}
>
  <h2 className="text-text dark:text-text">Card Title</h2>
  <p className="text-text-secondary dark:text-text-secondary">Card content</p>
</div>

// Using semantic colors from our CSS variables
<div className="bg-background border border-border rounded-xl p-6">
  <h2 className="text-text">Card Title</h2>
  <p className="text-text-secondary">Card content</p>
</div>

// Material design with transparency
<div className="bg-material-thick backdrop-blur-xl rounded-2xl p-6 shadow-lg">
  <h3 className="text-primary">Material Card</h3>
  <p className="text-text-tertiary">With beautiful blur effects</p>
</div>
```

## Validation Gates

```bash
# Type checking
cd docs && pnpm typecheck

# Build verification
cd docs && pnpm build

# Development preview
cd docs && pnpm dev
```

## Implementation Checklist

- [ ] Initialize docs package with proper dependencies
- [ ] Set up Vite + React + TypeScript configuration  
- [ ] Configure TailwindCSS V4 with CSS-based configuration
- [ ] Import and integrate color system CSS variables
- [ ] Create Layout components (Header, Footer)
- [ ] Implement ColorGrid and ColorSwatch components
- [ ] Add copy-to-clipboard functionality
- [ ] Create theme switching mechanism
- [ ] Build usage example components (Buttons, Cards, Forms, Alerts)
- [ ] Implement responsive design
- [ ] Add smooth animations and transitions
- [ ] Ensure accessibility (ARIA labels, keyboard navigation)
- [ ] Test color contrast ratios
- [ ] Verify build process

## Success Criteria

1. **Visual Design**: Matches Vercel's clean, minimalist aesthetic
2. **Functionality**: All colors are displayed with interactive features
3. **Performance**: Fast loading and smooth interactions
4. **Accessibility**: WCAG AA compliant color contrasts
5. **Developer Experience**: Easy to understand and extend

## Confidence Score: 9/10

The PRP provides comprehensive context with:

- Clear file structure and implementation path
- Specific code examples and patterns  
- External documentation references
- Validation commands
- All necessary dependencies and configurations
- Updated for TailwindCSS V4 CSS-based configuration
- Direct integration with the existing color system packages

The approach uses our designed color system values directly through CSS imports and JavaScript imports, ensuring consistency with the Pastel Palette.

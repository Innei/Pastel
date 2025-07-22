# Pastel Palette Color System - AI Development Rules

Comprehensive guide for using @pastel-palette/tailwindcss with OKLCH-based color system. Always use appropriate prefix (text-, bg-, border-, etc.) based on CSS property.

## 🎨 Color System Architecture

**Color Formats**: OKLCH (primary) + sRGB (fallback) + P3 (wide gamut optional)
**Dark Mode**: Automatic light/dark variants with data-attribute, class, or media query strategies
**Accessibility**: High contrast variants available for WCAG compliance

## 🚀 Semantic Colors (PRIORITY USE)

### **Text Hierarchy (4 levels)**
```css
text-text              /* Primary text - highest readability */
text-text-secondary     /* Descriptions, labels */
text-text-tertiary      /* Secondary info, metadata */
text-text-quaternary    /* Minimal info, subtle text */
```

### **Specialized Text**
```css
text-placeholder-text   /* Form input placeholders */
text-disabled-text      /* Disabled states */
text-link              /* Interactive links */
```

### **Background Hierarchy (5 levels)**
```css
bg-background          /* Root/primary background */
bg-background-secondary /* Cards, panels, containers */
bg-background-tertiary  /* Nested content areas */
bg-background-quaternary /* Deep nested sections */
bg-background-quinary   /* Deepest nesting level */
```

### **Border System**
```css
border-border           /* Primary borders, input outlines */
border-border-secondary /* Dividers, subtle separators */
border-separator        /* HR elements, section dividers */
border-disabled-control /* Disabled input borders */
```

### **Fill Colors (Interactive Elements)**
```css
bg-fill                /* Primary button/control fills */
bg-fill-secondary      /* Hover states */
bg-fill-tertiary       /* Selected/active states */
bg-fill-quaternary     /* Pressed/focus states */
```

## 🎯 Application Colors (Brand System)

```css
/* Primary brand colors - use for CTAs, primary actions */
bg-accent / text-accent / border-accent     /* Main accent (blue-based) */
bg-primary / text-primary / border-primary  /* Primary brand (strong blue) */
bg-secondary / text-secondary / border-secondary /* Secondary brand (teal-based) */
```

## 🌈 Direct Color Access (26 Colors Available)

### **Primary Spectrum**
`blue` `red` `green` `yellow` `purple` `orange` `pink`

### **Extended Spectrum**  
`brown` `sky` `teal` `cyan` `indigo` `violet` `lime` `emerald` `amber` `rose`

### **Neutrals**
`gray` `neutral` `black` `white` `slate` `zinc`

### **Usage Patterns**
```css
/* Standard colors */
bg-blue, text-red, border-green

/* Explicit dark mode (when needed) */
bg-blue-dark, text-red-dark, border-green-dark

/* High contrast variants (accessibility) */
bg-blue-high-contrast, text-red-high-contrast-dark

/* Kawaii variants (softer aesthetic) */
bg-pink-kawaii, text-purple-kawaii-dark
```

## ✨ Material Colors (Layering System)

```css
bg-material-ultrathick  /* 93% opacity - modals, backdrops */
bg-material-thick       /* 85% opacity - panels, cards */
bg-material-medium      /* 65-80% opacity - tooltips, popovers */
bg-material-thin        /* 60% opacity - light overlays */
bg-material-ultrathin   /* 45% opacity - subtle effects */
bg-material-opaque      /* 100% opacity - full coverage */
```

## 📋 Development Rules & Best Practices

### **1. Color Selection Priority**
1. **Semantic colors first** → `bg-background`, `text-text`, `border-border`
2. **Application colors** → `bg-accent`, `text-primary` for brand elements
3. **Direct colors** → `bg-blue`, `text-red` for specific design needs
4. **Material colors** → `bg-material-thick` for layering effects

### **2. Hierarchy Consistency**
```css
/* ✅ CORRECT - Follow semantic hierarchy */
.card {
  @apply bg-background-secondary;
}
.card .nested {
  @apply bg-background-tertiary;
}

/* ❌ INCORRECT - Breaks hierarchy */
.card {
  @apply bg-background-quaternary;
}
.card .nested {
  @apply bg-background-secondary; /* Wrong direction */
}
```

### **3. Accessibility Guidelines**
```css
/* ✅ Use high contrast for critical text */
.error-message {
  @apply text-red-high-contrast;
}

/* ✅ Ensure proper contrast ratios */
.button {
  @apply bg-accent text-white; /* System ensures contrast */
}

/* ❌ Don't use low contrast for important content */
.important-text {
  @apply text-text-quaternary; /* Too subtle for important content */
}
```

### **4. Dark Mode Handling**
```css
/* ✅ Colors auto-adapt - no manual dark: needed for semantic colors */
.component {
  @apply bg-background text-text border-border;
}

/* ✅ Use explicit dark variants only when necessary */
.special-case {
  @apply bg-blue-dark; /* When you need specific dark color */
}
```

### **5. Interactive States**
```css
/* ✅ Use fill hierarchy for interactive elements */
.button {
  @apply bg-fill hover:bg-fill-secondary active:bg-fill-tertiary focus:ring-accent;
}

/* ✅ Combine semantic + direct colors appropriately */
.nav-item {
  @apply text-text hover:text-accent border-b-2 border-transparent hover:border-accent;
}
```

### **6. Material Layering**
```css
/* ✅ Use materials for depth and layering */
.modal-backdrop {
  @apply bg-material-thick;
}
.tooltip {
  @apply bg-material-medium text-text;
}
```

## 🚫 Common Mistakes to Avoid

1. **Never use hardcoded hex/rgb values** → Always use system colors
2. **Don't break hierarchy** → Follow primary → secondary → tertiary progression
3. **Don't overuse direct colors** → Prefer semantic colors for consistency
4. **Don't ignore dark mode** → System handles it, but test both modes
5. **Don't use wrong prefixes** → `text-` for text, `bg-` for backgrounds, `border-` for borders

## ✅ Quick Reference Examples

```css
/* Typical component structure */
.card {
  @apply bg-background-secondary border border-border rounded-lg;
}
.card-title {
  @apply text-text font-semibold;
}
.card-description {
  @apply text-text-secondary;
}
.card-cta {
  @apply bg-accent text-white hover:bg-fill-secondary;
}

/* Form elements */
.input {
  @apply bg-background border-border text-text placeholder:text-placeholder-text 
         focus:border-accent focus:ring-2 focus:ring-accent/20;
}
.input:disabled {
  @apply border-disabled-control text-disabled-text;
}
```

## 🎨 Color System Benefits

- **Perceptual uniformity** via OKLCH color space
- **Automatic dark mode** with consistent relationships  
- **Accessibility built-in** with contrast-tested combinations
- **Future-proof** with P3 wide gamut support
- **Systematic scaling** with mathematical precision

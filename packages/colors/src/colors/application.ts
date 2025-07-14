import type { ApplicationColorName, ColorVariants } from '../types';

export const applicationColors: Record<ApplicationColorName, ColorVariants> = {
  accent: {
    light: { 
      oklch: 'oklch(0.65 0.18 237)', 
      srgb: 'rgb(0, 155, 237)',
      p3: 'color(display-p3 0.082 0.596 0.905)'
    },
    dark: { 
      oklch: 'oklch(0.70 0.16 237)', 
      srgb: 'rgb(0, 170, 244)',
      p3: 'color(display-p3 0.273 0.658 0.933)'
    }
  },
  
  primary: {
    light: { 
      oklch: 'oklch(0.55 0.20 250)', 
      srgb: 'rgb(0, 113, 223)',
      p3: 'color(display-p3 0.008 0.435 0.846)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.17 250)', 
      srgb: 'rgb(75, 179, 255)',
      p3: 'color(display-p3 0.407 0.692 1.054)'
    }
  },
  
  secondary: {
    light: { 
      oklch: 'oklch(0.70 0.18 170)', 
      srgb: 'rgb(0, 192, 141)',
      p3: 'color(display-p3 0.130 0.740 0.565)'
    },
    dark: { 
      oklch: 'oklch(0.77 0.14 170)', 
      srgb: 'rgb(53, 208, 166)',
      p3: 'color(display-p3 0.412 0.806 0.662)'
    }
  }
};
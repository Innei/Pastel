import type { ApplicationColorName, ColorVariants } from '../types';

export const applicationColors: Record<ApplicationColorName, ColorVariants> = {
  accent: {
    light: { 
      oklch: 'oklch(0.86 0.16 340)', 
      srgb: 'rgb(255 207 225)',
      p3: 'color(display-p3 1.0 0.812 0.882)'
    },
    dark: { 
      oklch: 'oklch(0.76 0.19 340)', 
      srgb: 'rgb(255 169 204)',
      p3: 'color(display-p3 1.0 0.663 0.8)'
    }
  },
  
  primary: {
    light: { 
      oklch: 'oklch(0.85 0.14 250)', 
      srgb: 'rgb(207 207 255)',
      p3: 'color(display-p3 0.812 0.812 1.0)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.17 250)', 
      srgb: 'rgb(179 179 255)',
      p3: 'color(display-p3 0.702 0.702 1.0)'
    }
  },
  
  secondary: {
    light: { 
      oklch: 'oklch(0.87 0.11 170)', 
      srgb: 'rgb(196 237 230)',
      p3: 'color(display-p3 0.769 0.929 0.902)'
    },
    dark: { 
      oklch: 'oklch(0.77 0.14 170)', 
      srgb: 'rgb(156 219 209)',
      p3: 'color(display-p3 0.612 0.859 0.82)'
    }
  }
};
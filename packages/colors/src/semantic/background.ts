import type { SemanticColor } from '../types';

export const backgroundColors: SemanticColor = {
  primary: {
    light: { 
      oklch: 'oklch(0.98 0.01 350)', 
      srgb: 'rgb(250 248 249)',
      p3: 'color(display-p3 0.98 0.973 0.976)'
    },
    dark: { 
      oklch: 'oklch(0.12 0.02 280)', 
      srgb: 'rgb(30 28 33)',
      p3: 'color(display-p3 0.118 0.11 0.129)'
    }
  },
  secondary: {
    light: { 
      oklch: 'oklch(0.96 0.01 350)', 
      srgb: 'rgb(245 243 244)',
      p3: 'color(display-p3 0.961 0.953 0.957)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.02 280)', 
      srgb: 'rgb(38 35 41)',
      p3: 'color(display-p3 0.149 0.137 0.161)'
    }
  },
  tertiary: {
    light: { 
      oklch: 'oklch(0.94 0.01 350)', 
      srgb: 'rgb(239 237 238)',
      p3: 'color(display-p3 0.937 0.929 0.933)'
    },
    dark: { 
      oklch: 'oklch(0.18 0.02 280)', 
      srgb: 'rgb(45 42 49)',
      p3: 'color(display-p3 0.176 0.165 0.192)'
    }
  },
  quaternary: {
    light: { 
      oklch: 'oklch(0.92 0.01 350)', 
      srgb: 'rgb(234 232 233)',
      p3: 'color(display-p3 0.918 0.91 0.914)'
    },
    dark: { 
      oklch: 'oklch(0.20 0.02 280)', 
      srgb: 'rgb(51 48 55)',
      p3: 'color(display-p3 0.2 0.188 0.216)'
    }
  },
  quinary: {
    light: { 
      oklch: 'oklch(0.90 0.01 350)', 
      srgb: 'rgb(229 227 228)',
      p3: 'color(display-p3 0.898 0.89 0.894)'
    },
    dark: { 
      oklch: 'oklch(0.22 0.02 280)', 
      srgb: 'rgb(56 53 61)',
      p3: 'color(display-p3 0.22 0.208 0.239)'
    }
  }
};
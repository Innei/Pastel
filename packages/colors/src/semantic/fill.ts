import type { SemanticColor } from '../types';

export const fillColors: SemanticColor = {
  primary: {
    light: { 
      oklch: 'oklch(0.88 0.02 350)', 
      srgb: 'rgb(224 220 222)',
      p3: 'color(display-p3 0.878 0.863 0.871)'
    },
    dark: { 
      oklch: 'oklch(0.25 0.02 280)', 
      srgb: 'rgb(63 60 68)',
      p3: 'color(display-p3 0.247 0.235 0.267)'
    }
  },
  secondary: {
    light: { 
      oklch: 'oklch(0.84 0.02 350)', 
      srgb: 'rgb(214 210 212)',
      p3: 'color(display-p3 0.839 0.824 0.831)'
    },
    dark: { 
      oklch: 'oklch(0.30 0.02 280)', 
      srgb: 'rgb(76 73 81)',
      p3: 'color(display-p3 0.298 0.286 0.318)'
    }
  },
  tertiary: {
    light: { 
      oklch: 'oklch(0.80 0.02 350)', 
      srgb: 'rgb(203 199 201)',
      p3: 'color(display-p3 0.796 0.78 0.788)'
    },
    dark: { 
      oklch: 'oklch(0.35 0.02 280)', 
      srgb: 'rgb(89 85 94)',
      p3: 'color(display-p3 0.349 0.333 0.369)'
    }
  },
  quaternary: {
    light: { 
      oklch: 'oklch(0.76 0.02 350)', 
      srgb: 'rgb(193 189 191)',
      p3: 'color(display-p3 0.757 0.741 0.749)'
    },
    dark: { 
      oklch: 'oklch(0.40 0.02 280)', 
      srgb: 'rgb(101 97 107)',
      p3: 'color(display-p3 0.396 0.38 0.42)'
    }
  }
};
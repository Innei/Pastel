import type { SemanticColor } from '../types';

export const fillColors: SemanticColor = {
  primary: {
    light: { 
      oklch: 'oklch(0.88 0.00 0)', 
      srgb: 'rgb(224 224 224)',
      p3: 'color(display-p3 0.878 0.878 0.878)'
    },
    dark: { 
      oklch: 'oklch(0.25 0.00 0)', 
      srgb: 'rgb(64 64 64)',
      p3: 'color(display-p3 0.251 0.251 0.251)'
    }
  },
  secondary: {
    light: { 
      oklch: 'oklch(0.84 0.00 0)', 
      srgb: 'rgb(214 214 214)',
      p3: 'color(display-p3 0.839 0.839 0.839)'
    },
    dark: { 
      oklch: 'oklch(0.30 0.00 0)', 
      srgb: 'rgb(77 77 77)',
      p3: 'color(display-p3 0.302 0.302 0.302)'
    }
  },
  tertiary: {
    light: { 
      oklch: 'oklch(0.80 0.00 0)', 
      srgb: 'rgb(204 204 204)',
      p3: 'color(display-p3 0.8 0.8 0.8)'
    },
    dark: { 
      oklch: 'oklch(0.35 0.00 0)', 
      srgb: 'rgb(89 89 89)',
      p3: 'color(display-p3 0.349 0.349 0.349)'
    }
  },
  quaternary: {
    light: { 
      oklch: 'oklch(0.76 0.00 0)', 
      srgb: 'rgb(194 194 194)',
      p3: 'color(display-p3 0.761 0.761 0.761)'
    },
    dark: { 
      oklch: 'oklch(0.40 0.00 0)', 
      srgb: 'rgb(102 102 102)',
      p3: 'color(display-p3 0.4 0.4 0.4)'
    }
  }
};
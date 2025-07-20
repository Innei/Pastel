import type { MaterialColor,MaterialOpacity } from '../types';

export const materialColors: Record<MaterialOpacity, MaterialColor> = {
  ultraThick: {
    light: { 
      oklch: 'oklch(0.95 0 0)', 
      srgb: 'rgba(242 242 242 / 0.93)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.93)'
    },
    dark: { 
      oklch: 'oklch(0.15 0 0)', 
      srgb: 'rgba(38 38 38 / 0.93)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.93)'
    }
  },
  
  thick: {
    light: { 
      oklch: 'oklch(0.95 0 0)', 
      srgb: 'rgba(242 242 242 / 0.85)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.85)'
    },
    dark: { 
      oklch: 'oklch(0.15 0 0)', 
      srgb: 'rgba(38 38 38 / 0.85)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.85)'
    }
  },
  
  medium: {
    light: { 
      oklch: 'oklch(0.95 0 0)', 
      srgb: 'rgba(242 242 242 / 0.65)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.65)'
    },
    dark: { 
      oklch: 'oklch(0.15 0 0)', 
      srgb: 'rgba(38 38 38 / 0.80)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.80)'
    }
  },
  
  thin: {
    light: { 
      oklch: 'oklch(0.95 0 0)', 
      srgb: 'rgba(242 242 242 / 0.60)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.60)'
    },
    dark: { 
      oklch: 'oklch(0.15 0 0)', 
      srgb: 'rgba(38 38 38 / 0.60)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.60)'
    }
  },
  
  ultraThin: {
    light: { 
      oklch: 'oklch(0.95 0 0)', 
      srgb: 'rgba(242 242 242 / 0.45)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.45)'
    },
    dark: { 
      oklch: 'oklch(0.15 0 0)', 
      srgb: 'rgba(38 38 38 / 0.45)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.45)'
    }
  },
  
  opaque: {
    light: { 
      oklch: 'oklch(0.95 0 0)', 
      srgb: 'rgb(242 242 242)',
      p3: 'color(display-p3 0.949 0.949 0.949)'
    },
    dark: { 
      oklch: 'oklch(0.15 0 0)', 
      srgb: 'rgb(38 38 38)',
      p3: 'color(display-p3 0.149 0.149 0.149)'
    }
  }
};
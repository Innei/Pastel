import type { MaterialOpacity, MaterialColor } from '../types';

export const materialColors: Record<MaterialOpacity, MaterialColor> = {
  ultraThick: {
    light: { 
      oklch: 'oklch(0.95 0.00 0 / 0.93)', 
      srgb: 'rgba(242 242 242 / 0.93)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.93)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.00 0 / 0.93)', 
      srgb: 'rgba(38 38 38 / 0.93)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.93)'
    }
  },
  
  thick: {
    light: { 
      oklch: 'oklch(0.95 0.00 0 / 0.85)', 
      srgb: 'rgba(242 242 242 / 0.85)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.85)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.00 0 / 0.85)', 
      srgb: 'rgba(38 38 38 / 0.85)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.85)'
    }
  },
  
  medium: {
    light: { 
      oklch: 'oklch(0.95 0.00 0 / 0.72)', 
      srgb: 'rgba(242 242 242 / 0.72)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.72)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.00 0 / 0.72)', 
      srgb: 'rgba(38 38 38 / 0.72)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.72)'
    }
  },
  
  thin: {
    light: { 
      oklch: 'oklch(0.95 0.00 0 / 0.60)', 
      srgb: 'rgba(242 242 242 / 0.60)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.60)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.00 0 / 0.60)', 
      srgb: 'rgba(38 38 38 / 0.60)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.60)'
    }
  },
  
  ultraThin: {
    light: { 
      oklch: 'oklch(0.95 0.00 0 / 0.45)', 
      srgb: 'rgba(242 242 242 / 0.45)',
      p3: 'color(display-p3 0.949 0.949 0.949 / 0.45)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.00 0 / 0.45)', 
      srgb: 'rgba(38 38 38 / 0.45)',
      p3: 'color(display-p3 0.149 0.149 0.149 / 0.45)'
    }
  },
  
  opaque: {
    light: { 
      oklch: 'oklch(0.95 0.00 0)', 
      srgb: 'rgb(242 242 242)',
      p3: 'color(display-p3 0.949 0.949 0.949)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.00 0)', 
      srgb: 'rgb(38 38 38)',
      p3: 'color(display-p3 0.149 0.149 0.149)'
    }
  }
};
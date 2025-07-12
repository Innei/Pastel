import type { MaterialOpacity, MaterialColor } from '../types';

export const materialColors: Record<MaterialOpacity, MaterialColor> = {
  ultraThick: {
    light: { 
      oklch: 'oklch(0.95 0.01 350 / 0.93)', 
      srgb: 'rgba(242 240 241 / 0.93)',
      p3: 'color(display-p3 0.949 0.941 0.945 / 0.93)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.02 280 / 0.93)', 
      srgb: 'rgba(38 35 41 / 0.93)',
      p3: 'color(display-p3 0.149 0.137 0.161 / 0.93)'
    }
  },
  
  thick: {
    light: { 
      oklch: 'oklch(0.95 0.01 350 / 0.85)', 
      srgb: 'rgba(242 240 241 / 0.85)',
      p3: 'color(display-p3 0.949 0.941 0.945 / 0.85)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.02 280 / 0.85)', 
      srgb: 'rgba(38 35 41 / 0.85)',
      p3: 'color(display-p3 0.149 0.137 0.161 / 0.85)'
    }
  },
  
  medium: {
    light: { 
      oklch: 'oklch(0.95 0.01 350 / 0.72)', 
      srgb: 'rgba(242 240 241 / 0.72)',
      p3: 'color(display-p3 0.949 0.941 0.945 / 0.72)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.02 280 / 0.72)', 
      srgb: 'rgba(38 35 41 / 0.72)',
      p3: 'color(display-p3 0.149 0.137 0.161 / 0.72)'
    }
  },
  
  thin: {
    light: { 
      oklch: 'oklch(0.95 0.01 350 / 0.60)', 
      srgb: 'rgba(242 240 241 / 0.60)',
      p3: 'color(display-p3 0.949 0.941 0.945 / 0.60)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.02 280 / 0.60)', 
      srgb: 'rgba(38 35 41 / 0.60)',
      p3: 'color(display-p3 0.149 0.137 0.161 / 0.60)'
    }
  },
  
  ultraThin: {
    light: { 
      oklch: 'oklch(0.95 0.01 350 / 0.45)', 
      srgb: 'rgba(242 240 241 / 0.45)',
      p3: 'color(display-p3 0.949 0.941 0.945 / 0.45)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.02 280 / 0.45)', 
      srgb: 'rgba(38 35 41 / 0.45)',
      p3: 'color(display-p3 0.149 0.137 0.161 / 0.45)'
    }
  },
  
  opaque: {
    light: { 
      oklch: 'oklch(0.95 0.01 350)', 
      srgb: 'rgb(242 240 241)',
      p3: 'color(display-p3 0.949 0.941 0.945)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.02 280)', 
      srgb: 'rgb(38 35 41)',
      p3: 'color(display-p3 0.149 0.137 0.161)'
    }
  }
};
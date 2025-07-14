import type { SemanticColor } from '../types';

export const backgroundColors: SemanticColor = {
  primary: {
    light: { 
      oklch: 'oklch(0.98 0.005 220)', 
      srgb: 'rgb(249 249 250)',
      p3: 'color(display-p3 0.976 0.976 0.98)'
    },
    dark: { 
      oklch: 'oklch(0.12 0.01 220)', 
      srgb: 'rgb(30 30 32)',
      p3: 'color(display-p3 0.118 0.118 0.125)'
    }
  },
  secondary: {
    light: { 
      oklch: 'oklch(0.96 0.005 220)', 
      srgb: 'rgb(244 244 245)',
      p3: 'color(display-p3 0.957 0.957 0.961)'
    },
    dark: { 
      oklch: 'oklch(0.15 0.01 220)', 
      srgb: 'rgb(37 37 40)',
      p3: 'color(display-p3 0.145 0.145 0.157)'
    }
  },
  tertiary: {
    light: { 
      oklch: 'oklch(0.94 0.005 220)', 
      srgb: 'rgb(239 239 240)',
      p3: 'color(display-p3 0.937 0.937 0.941)'
    },
    dark: { 
      oklch: 'oklch(0.18 0.01 220)', 
      srgb: 'rgb(45 45 48)',
      p3: 'color(display-p3 0.176 0.176 0.188)'
    }
  },
  quaternary: {
    light: { 
      oklch: 'oklch(0.92 0.005 220)', 
      srgb: 'rgb(234 234 235)',
      p3: 'color(display-p3 0.918 0.918 0.922)'
    },
    dark: { 
      oklch: 'oklch(0.20 0.01 220)', 
      srgb: 'rgb(50 50 53)',
      p3: 'color(display-p3 0.196 0.196 0.208)'
    }
  },
  quinary: {
    light: { 
      oklch: 'oklch(0.90 0.005 220)', 
      srgb: 'rgb(229 229 230)',
      p3: 'color(display-p3 0.898 0.898 0.902)'
    },
    dark: { 
      oklch: 'oklch(0.22 0.01 220)', 
      srgb: 'rgb(55 55 58)',
      p3: 'color(display-p3 0.216 0.216 0.228)'
    }
  }
};
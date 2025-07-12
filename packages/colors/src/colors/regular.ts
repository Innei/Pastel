import type { RegularColorName, ColorVariants } from '../types';

export const regularColors: Record<RegularColorName, ColorVariants> = {
  blue: {
    light: { 
      oklch: 'oklch(0.85 0.12 237)', 
      srgb: 'rgb(173 207 255)',
      p3: 'color(display-p3 0.678 0.812 1.0)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.14 237)', 
      srgb: 'rgb(138 177 255)',
      p3: 'color(display-p3 0.541 0.694 1.0)'
    }
  },
  
  pink: {
    light: { 
      oklch: 'oklch(0.88 0.15 350)', 
      srgb: 'rgb(255 214 232)',
      p3: 'color(display-p3 1.0 0.839 0.91)'
    },
    dark: { 
      oklch: 'oklch(0.78 0.18 350)', 
      srgb: 'rgb(255 179 214)',
      p3: 'color(display-p3 1.0 0.702 0.839)'
    }
  },
  
  purple: {
    light: { 
      oklch: 'oklch(0.85 0.13 280)', 
      srgb: 'rgb(225 207 255)',
      p3: 'color(display-p3 0.882 0.812 1.0)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.16 280)', 
      srgb: 'rgb(201 177 255)',
      p3: 'color(display-p3 0.788 0.694 1.0)'
    }
  },
  
  green: {
    light: { 
      oklch: 'oklch(0.87 0.10 155)', 
      srgb: 'rgb(196 242 216)',
      p3: 'color(display-p3 0.769 0.949 0.847)'
    },
    dark: { 
      oklch: 'oklch(0.77 0.13 155)', 
      srgb: 'rgb(156 227 190)',
      p3: 'color(display-p3 0.612 0.89 0.745)'
    }
  },
  
  orange: {
    light: { 
      oklch: 'oklch(0.88 0.10 60)', 
      srgb: 'rgb(255 227 207)',
      p3: 'color(display-p3 1.0 0.89 0.812)'
    },
    dark: { 
      oklch: 'oklch(0.78 0.13 60)', 
      srgb: 'rgb(255 204 171)',
      p3: 'color(display-p3 1.0 0.8 0.671)'
    }
  },
  
  yellow: {
    light: { 
      oklch: 'oklch(0.92 0.08 100)', 
      srgb: 'rgb(255 247 207)',
      p3: 'color(display-p3 1.0 0.969 0.812)'
    },
    dark: { 
      oklch: 'oklch(0.82 0.11 100)', 
      srgb: 'rgb(255 234 171)',
      p3: 'color(display-p3 1.0 0.918 0.671)'
    }
  },
  
  sky: {
    light: { 
      oklch: 'oklch(0.90 0.08 210)', 
      srgb: 'rgb(207 235 255)',
      p3: 'color(display-p3 0.812 0.922 1.0)'
    },
    dark: { 
      oklch: 'oklch(0.80 0.11 210)', 
      srgb: 'rgb(171 217 255)',
      p3: 'color(display-p3 0.671 0.851 1.0)'
    }
  },
  
  red: {
    light: { 
      oklch: 'oklch(0.85 0.14 20)', 
      srgb: 'rgb(255 207 207)',
      p3: 'color(display-p3 1.0 0.812 0.812)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.17 20)', 
      srgb: 'rgb(255 171 171)',
      p3: 'color(display-p3 1.0 0.671 0.671)'
    }
  },
  
  brown: {
    light: { 
      oklch: 'oklch(0.82 0.08 45)', 
      srgb: 'rgb(232 217 207)',
      p3: 'color(display-p3 0.91 0.851 0.812)'
    },
    dark: { 
      oklch: 'oklch(0.72 0.10 45)', 
      srgb: 'rgb(207 189 176)',
      p3: 'color(display-p3 0.812 0.741 0.69)'
    }
  },
  
  gray: {
    light: { 
      oklch: 'oklch(0.88 0.02 0)', 
      srgb: 'rgb(224 224 224)',
      p3: 'color(display-p3 0.878 0.878 0.878)'
    },
    dark: { 
      oklch: 'oklch(0.35 0.02 0)', 
      srgb: 'rgb(89 89 89)',
      p3: 'color(display-p3 0.349 0.349 0.349)'
    }
  },
  
  neutral: {
    light: { 
      oklch: 'oklch(0.90 0.01 0)', 
      srgb: 'rgb(230 230 230)',
      p3: 'color(display-p3 0.902 0.902 0.902)'
    },
    dark: { 
      oklch: 'oklch(0.30 0.01 0)', 
      srgb: 'rgb(77 77 77)',
      p3: 'color(display-p3 0.302 0.302 0.302)'
    }
  },
  
  black: {
    light: { 
      oklch: 'oklch(0.15 0.00 0)', 
      srgb: 'rgb(38 38 38)',
      p3: 'color(display-p3 0.149 0.149 0.149)'
    },
    dark: { 
      oklch: 'oklch(0.10 0.00 0)', 
      srgb: 'rgb(26 26 26)',
      p3: 'color(display-p3 0.102 0.102 0.102)'
    }
  },
  
  white: {
    light: { 
      oklch: 'oklch(0.98 0.00 0)', 
      srgb: 'rgb(250 250 250)',
      p3: 'color(display-p3 0.98 0.98 0.98)'
    },
    dark: { 
      oklch: 'oklch(0.95 0.00 0)', 
      srgb: 'rgb(242 242 242)',
      p3: 'color(display-p3 0.949 0.949 0.949)'
    }
  }
};
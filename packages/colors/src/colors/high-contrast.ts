import type { RegularColorName, HighContrastColorVariants } from '../types';

export const highContrastColors: Record<RegularColorName, HighContrastColorVariants> = {
  blue: {
    light: { 
      oklch: 'oklch(0.45 0.25 237)', 
      srgb: 'rgb(0, 87, 203)',
      p3: 'color(display-p3 0 0.330 0.766)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.20 237)', 
      srgb: 'rgb(0, 188, 255)',
      p3: 'color(display-p3 0.170 0.724 1)'
    }
  },
  
  pink: {
    light: { 
      oklch: 'oklch(0.50 0.30 350)', 
      srgb: 'rgb(203, 0, 122)',
      p3: 'color(display-p3 0.721 0 0.465)'
    },
    dark: { 
      oklch: 'oklch(0.78 0.25 350)', 
      srgb: 'rgb(255, 96, 205)',
      p3: 'color(display-p3 1 0.434 0.792)'
    }
  },
  
  purple: {
    light: { 
      oklch: 'oklch(0.45 0.28 280)', 
      srgb: 'rgb(76, 0, 232)',
      p3: 'color(display-p3 0.269 0 0.875)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.22 280)', 
      srgb: 'rgb(151, 150, 255)',
      p3: 'color(display-p3 0.592 0.589 1)'
    }
  },
  
  green: {
    light: { 
      oklch: 'oklch(0.50 0.20 155)', 
      srgb: 'rgb(0, 129, 38)',
      p3: 'color(display-p3 0 0.494 0.197)'
    },
    dark: { 
      oklch: 'oklch(0.77 0.18 155)', 
      srgb: 'rgb(42, 213, 127)',
      p3: 'color(display-p3 0.406 0.822 0.530)'
    }
  },
  
  orange: {
    light: { 
      oklch: 'oklch(0.55 0.18 60)', 
      srgb: 'rgb(185, 77, 0)',
      p3: 'color(display-p3 0.673 0.329 0)'
    },
    dark: { 
      oklch: 'oklch(0.78 0.20 60)', 
      srgb: 'rgb(255, 145, 0)',
      p3: 'color(display-p3 1 0.595 0.121)'
    }
  },
  
  yellow: {
    light: { 
      oklch: 'oklch(0.65 0.15 100)', 
      srgb: 'rgb(165, 144, 0)',
      p3: 'color(display-p3 0.634 0.566 0.084)'
    },
    dark: { 
      oklch: 'oklch(0.82 0.16 100)', 
      srgb: 'rgb(221, 197, 43)',
      p3: 'color(display-p3 0.850 0.777 0.304)'
    }
  },
  
  sky: {
    light: { 
      oklch: 'oklch(0.50 0.20 210)', 
      srgb: 'rgb(0, 123, 161)',
      p3: 'color(display-p3 0 0.470 0.615)'
    },
    dark: { 
      oklch: 'oklch(0.80 0.16 210)', 
      srgb: 'rgb(0, 216, 246)',
      p3: 'color(display-p3 0.276 0.833 0.949)'
    }
  },
  
  red: {
    light: { 
      oklch: 'oklch(0.50 0.28 20)', 
      srgb: 'rgb(214, 0, 9)',
      p3: 'color(display-p3 0.761 0 0.097)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.24 20)', 
      srgb: 'rgb(255, 87, 107)',
      p3: 'color(display-p3 1 0.409 0.444)'
    }
  },
  
  brown: {
    light: { 
      oklch: 'oklch(0.45 0.15 45)', 
      srgb: 'rgb(148, 46, 0)',
      p3: 'color(display-p3 0.536 0.211 0)'
    },
    dark: { 
      oklch: 'oklch(0.72 0.14 45)', 
      srgb: 'rgb(235, 134, 86)',
      p3: 'color(display-p3 0.870 0.543 0.374)'
    }
  },
  
  gray: {
    light: { 
      oklch: 'oklch(0.30 0.00 0)', 
      srgb: 'rgb(46, 46, 46)',
      p3: 'color(display-p3 0.179 0.179 0.179)'
    },
    dark: { 
      oklch: 'oklch(0.85 0.00 0)', 
      srgb: 'rgb(206, 206, 206)',
      p3: 'color(display-p3 0.806 0.806 0.806)'
    }
  },
  
  neutral: {
    light: { 
      oklch: 'oklch(0.25 0.00 0)', 
      srgb: 'rgb(34, 34, 34)',
      p3: 'color(display-p3 0.131 0.131 0.131)'
    },
    dark: { 
      oklch: 'oklch(0.90 0.00 0)', 
      srgb: 'rgb(222, 222, 222)',
      p3: 'color(display-p3 0.870 0.870 0.870)'
    }
  },
  
  black: {
    light: { 
      oklch: 'oklch(0.00 0.00 0)', 
      srgb: 'rgb(0, 0, 0)',
      p3: 'color(display-p3 0 0 0)'
    },
    dark: { 
      oklch: 'oklch(0.20 0.00 0)', 
      srgb: 'rgb(22, 22, 22)',
      p3: 'color(display-p3 0.086 0.086 0.086)'
    }
  },
  
  white: {
    light: { 
      oklch: 'oklch(1.00 0.00 0)', 
      srgb: 'rgb(255, 255, 255)',
      p3: 'color(display-p3 1 1 1)'
    },
    dark: { 
      oklch: 'oklch(0.95 0.00 0)', 
      srgb: 'rgb(238, 238, 238)',
      p3: 'color(display-p3 0.934 0.934 0.934)'
    }
  }
};
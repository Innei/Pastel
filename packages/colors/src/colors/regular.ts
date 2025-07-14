import type { RegularColorName, ColorVariants } from '../types';

export const regularColors: Record<RegularColorName, ColorVariants> = {
  blue: {
    light: { 
      oklch: 'oklch(0.65 0.18 237)', 
      srgb: 'rgb(64 129 247)',
      p3: 'color(display-p3 0.251 0.506 0.969)'
    },
    dark: { 
      oklch: 'oklch(0.70 0.16 237)', 
      srgb: 'rgb(102 153 255)',
      p3: 'color(display-p3 0.4 0.6 1.0)'
    }
  },
  
  pink: {
    light: { 
      oklch: 'oklch(0.68 0.22 350)', 
      srgb: 'rgb(255 98 163)',
      p3: 'color(display-p3 1.0 0.384 0.639)'
    },
    dark: { 
      oklch: 'oklch(0.73 0.20 350)', 
      srgb: 'rgb(255 130 186)',
      p3: 'color(display-p3 1.0 0.51 0.729)'
    }
  },
  
  purple: {
    light: { 
      oklch: 'oklch(0.65 0.20 280)', 
      srgb: 'rgb(153 84 235)',
      p3: 'color(display-p3 0.6 0.329 0.922)'
    },
    dark: { 
      oklch: 'oklch(0.70 0.18 280)', 
      srgb: 'rgb(180 118 255)',
      p3: 'color(display-p3 0.706 0.463 1.0)'
    }
  },
  
  green: {
    light: { 
      oklch: 'oklch(0.67 0.15 155)', 
      srgb: 'rgb(74 197 125)',
      p3: 'color(display-p3 0.29 0.773 0.49)'
    },
    dark: { 
      oklch: 'oklch(0.72 0.16 155)', 
      srgb: 'rgb(102 217 146)',
      p3: 'color(display-p3 0.4 0.851 0.573)'
    }
  },
  
  orange: {
    light: { 
      oklch: 'oklch(0.68 0.15 60)', 
      srgb: 'rgb(232 135 83)',
      p3: 'color(display-p3 0.910 0.529 0.325)'
    },
    dark: { 
      oklch: 'oklch(0.73 0.16 60)', 
      srgb: 'rgb(246 158 93)',
      p3: 'color(display-p3 0.965 0.620 0.365)'
    }
  },
  
  yellow: {
    light: { 
      oklch: 'oklch(0.75 0.12 100)', 
      srgb: 'rgb(206 184 102)',
      p3: 'color(display-p3 0.808 0.722 0.400)'
    },
    dark: { 
      oklch: 'oklch(0.78 0.14 100)', 
      srgb: 'rgb(220 193 97)',
      p3: 'color(display-p3 0.863 0.757 0.380)'
    }
  },
  
  sky: {
    light: { 
      oklch: 'oklch(0.70 0.14 210)', 
      srgb: 'rgb(109 174 223)',
      p3: 'color(display-p3 0.427 0.682 0.875)'
    },
    dark: { 
      oklch: 'oklch(0.75 0.13 210)', 
      srgb: 'rgb(134 188 234)',
      p3: 'color(display-p3 0.525 0.737 0.918)'
    }
  },
  
  red: {
    light: { 
      oklch: 'oklch(0.65 0.20 20)', 
      srgb: 'rgb(229 88 88)',
      p3: 'color(display-p3 0.898 0.345 0.345)'
    },
    dark: { 
      oklch: 'oklch(0.70 0.19 20)', 
      srgb: 'rgb(243 118 118)',
      p3: 'color(display-p3 0.953 0.463 0.463)'
    }
  },
  
  brown: {
    light: { 
      oklch: 'oklch(0.62 0.12 45)', 
      srgb: 'rgb(193, 109, 69)',
      p3: 'color(display-p3 0.711 0.442 0.302)'
    },
    dark: { 
      oklch: 'oklch(0.67 0.12 45)', 
      srgb: 'rgb(209, 124, 84)',
      p3: 'color(display-p3 0.775 0.501 0.359)'
    }
  },
  
  gray: {
    light: { 
      oklch: 'oklch(0.65 0.00 0)', 
      srgb: 'rgb(143, 143, 143)',
      p3: 'color(display-p3 0.561 0.561 0.561)'
    },
    dark: { 
      oklch: 'oklch(0.70 0.00 0)', 
      srgb: 'rgb(158, 158, 158)',
      p3: 'color(display-p3 0.620 0.620 0.620)'
    }
  },
  
  neutral: {
    light: { 
      oklch: 'oklch(0.60 0.00 0)', 
      srgb: 'rgb(128, 128, 128)',
      p3: 'color(display-p3 0.502 0.502 0.502)'
    },
    dark: { 
      oklch: 'oklch(0.65 0.00 0)', 
      srgb: 'rgb(143, 143, 143)',
      p3: 'color(display-p3 0.561 0.561 0.561)'
    }
  },
  
  black: {
    light: { 
      oklch: 'oklch(0.20 0.00 0)', 
      srgb: 'rgb(22, 22, 22)',
      p3: 'color(display-p3 0.086 0.086 0.086)'
    },
    dark: { 
      oklch: 'oklch(0.25 0.00 0)', 
      srgb: 'rgb(34, 34, 34)',
      p3: 'color(display-p3 0.131 0.131 0.131)'
    }
  },
  
  white: {
    light: { 
      oklch: 'oklch(0.95 0.00 0)', 
      srgb: 'rgb(238, 238, 238)',
      p3: 'color(display-p3 0.934 0.934 0.934)'
    },
    dark: { 
      oklch: 'oklch(0.90 0.00 0)', 
      srgb: 'rgb(222, 222, 222)',
      p3: 'color(display-p3 0.870 0.870 0.870)'
    }
  }
};
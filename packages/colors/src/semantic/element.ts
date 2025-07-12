import type { ElementColorName, SemanticColor } from '../types';

export const elementColors: Record<ElementColorName, SemanticColor> = {
  text: {
    primary: {
      light: { 
        oklch: 'oklch(0.25 0.02 280)', 
        srgb: 'rgb(62 59 68)',
        p3: 'color(display-p3 0.243 0.231 0.267)'
      },
      dark: { 
        oklch: 'oklch(0.95 0.01 280)', 
        srgb: 'rgb(241 241 242)',
        p3: 'color(display-p3 0.945 0.945 0.949)'
      }
    },
    secondary: {
      light: { 
        oklch: 'oklch(0.45 0.02 280)', 
        srgb: 'rgb(112 109 119)',
        p3: 'color(display-p3 0.439 0.427 0.467)'
      },
      dark: { 
        oklch: 'oklch(0.85 0.01 280)', 
        srgb: 'rgb(216 216 217)',
        p3: 'color(display-p3 0.847 0.847 0.851)'
      }
    },
    tertiary: {
      light: { 
        oklch: 'oklch(0.60 0.02 280)', 
        srgb: 'rgb(151 148 156)',
        p3: 'color(display-p3 0.592 0.58 0.612)'
      },
      dark: { 
        oklch: 'oklch(0.70 0.01 280)', 
        srgb: 'rgb(177 177 179)',
        p3: 'color(display-p3 0.694 0.694 0.702)'
      }
    },
    quaternary: {
      light: { 
        oklch: 'oklch(0.75 0.01 280)', 
        srgb: 'rgb(190 190 192)',
        p3: 'color(display-p3 0.745 0.745 0.753)'
      },
      dark: { 
        oklch: 'oklch(0.55 0.01 280)', 
        srgb: 'rgb(139 139 141)',
        p3: 'color(display-p3 0.545 0.545 0.553)'
      }
    }
  },
  
  placeholderText: {
    primary: {
      light: { 
        oklch: 'oklch(0.65 0.02 280)', 
        srgb: 'rgb(164 161 170)',
        p3: 'color(display-p3 0.643 0.631 0.667)'
      },
      dark: { 
        oklch: 'oklch(0.60 0.01 280)', 
        srgb: 'rgb(151 151 153)',
        p3: 'color(display-p3 0.592 0.592 0.6)'
      }
    }
  },
  
  border: {
    primary: {
      light: { 
        oklch: 'oklch(0.85 0.02 280)', 
        srgb: 'rgb(216 213 220)',
        p3: 'color(display-p3 0.847 0.835 0.863)'
      },
      dark: { 
        oklch: 'oklch(0.30 0.02 280)', 
        srgb: 'rgb(76 73 81)',
        p3: 'color(display-p3 0.298 0.286 0.318)'
      }
    },
    secondary: {
      light: { 
        oklch: 'oklch(0.90 0.01 280)', 
        srgb: 'rgb(229 229 230)',
        p3: 'color(display-p3 0.898 0.898 0.902)'
      },
      dark: { 
        oklch: 'oklch(0.25 0.01 280)', 
        srgb: 'rgb(63 63 65)',
        p3: 'color(display-p3 0.247 0.247 0.255)'
      }
    }
  },
  
  separator: {
    primary: {
      light: { 
        oklch: 'oklch(0.88 0.01 280)', 
        srgb: 'rgb(223 223 225)',
        p3: 'color(display-p3 0.875 0.875 0.882)'
      },
      dark: { 
        oklch: 'oklch(0.28 0.01 280)', 
        srgb: 'rgb(71 71 73)',
        p3: 'color(display-p3 0.278 0.278 0.286)'
      }
    }
  },
  
  link: {
    primary: {
      light: { 
        oklch: 'oklch(0.70 0.16 250)', 
        srgb: 'rgb(153 153 255)',
        p3: 'color(display-p3 0.6 0.6 1.0)'
      },
      dark: { 
        oklch: 'oklch(0.78 0.14 250)', 
        srgb: 'rgb(189 189 255)',
        p3: 'color(display-p3 0.741 0.741 1.0)'
      }
    }
  },
  
  disabledControl: {
    primary: {
      light: { 
        oklch: 'oklch(0.92 0.01 280)', 
        srgb: 'rgb(234 234 235)',
        p3: 'color(display-p3 0.918 0.918 0.922)'
      },
      dark: { 
        oklch: 'oklch(0.22 0.01 280)', 
        srgb: 'rgb(56 55 58)',
        p3: 'color(display-p3 0.22 0.216 0.227)'
      }
    }
  },
  
  disabledText: {
    primary: {
      light: { 
        oklch: 'oklch(0.70 0.01 280)', 
        srgb: 'rgb(177 177 179)',
        p3: 'color(display-p3 0.694 0.694 0.702)'
      },
      dark: { 
        oklch: 'oklch(0.50 0.01 280)', 
        srgb: 'rgb(126 126 128)',
        p3: 'color(display-p3 0.494 0.494 0.502)'
      }
    }
  }
};
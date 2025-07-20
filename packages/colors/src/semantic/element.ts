import type { ElementColorName, SemanticColor } from '../types';

export const elementColors: Record<ElementColorName, SemanticColor> = {
  text: {
    primary: {
      light: { 
        oklch: 'oklch(0.25 0.02 280)', 
 
        srgb: 'rgb(32, 33, 43)',
 
        p3: 'color(display-p3 0.124 0.128 0.166)'
      },
      dark: { 
        oklch: 'oklch(0.95 0.01 280)', 
 
        srgb: 'rgb(237, 238, 245)',
 
        p3: 'color(display-p3 0.929 0.933 0.959)'
      }
    },
    secondary: {
      light: { 
        oklch: 'oklch(0.45 0.02 280)', 
 
        srgb: 'rgb(83, 84, 97)',
 
        p3: 'color(display-p3 0.326 0.330 0.374)'
      },
      dark: { 
        oklch: 'oklch(0.85 0.01 280)', 
 
        srgb: 'rgb(204, 205, 212)',
 
        p3: 'color(display-p3 0.801 0.804 0.830)'
      }
    },
    tertiary: {
      light: { 
        oklch: 'oklch(0.6 0.02 280)', 
 
        srgb: 'rgb(125, 127, 140)',
 
        p3: 'color(display-p3 0.493 0.498 0.546)'
      },
      dark: { 
        oklch: 'oklch(0.7 0.01 280)', 
 
        srgb: 'rgb(157, 158, 165)',
 
        p3: 'color(display-p3 0.616 0.619 0.643)'
      }
    },
    quaternary: {
      light: { 
        oklch: 'oklch(0.75 0.01 280)', 
 
        srgb: 'rgb(172, 173, 180)',
 
        p3: 'color(display-p3 0.677 0.680 0.705)'
      },
      dark: { 
        oklch: 'oklch(0.55 0.01 280)', 
 
        srgb: 'rgb(112, 113, 119)',
 
        p3: 'color(display-p3 0.440 0.443 0.466)'
      }
    }
  },
  
  placeholderText: {
    primary: {
      light: { 
        oklch: 'oklch(0.65 0.02 280)', 
 
        srgb: 'rgb(140, 142, 156)',
 
        p3: 'color(display-p3 0.552 0.557 0.605)'
      },
      dark: { 
        oklch: 'oklch(0.6 0.01 280)', 
 
        srgb: 'rgb(127, 128, 134)',
 
        p3: 'color(display-p3 0.498 0.500 0.524)'
      }
    }
  },
  
  border: {
    primary: {
      light: { 
        oklch: 'oklch(0.85 0.02 280)', 
 
        srgb: 'rgb(203, 205, 219)',
 
        p3: 'color(display-p3 0.796 0.802 0.854)'
      },
      dark: { 
        oklch: 'oklch(0.3 0.02 280)', 
 
        srgb: 'rgb(44, 45, 56)',
 
        p3: 'color(display-p3 0.172 0.176 0.216)'
      }
    },
    secondary: {
      light: { 
        oklch: 'oklch(0.9 0.01 280)', 
 
        srgb: 'rgb(220, 221, 229)',
 
        p3: 'color(display-p3 0.865 0.868 0.894)'
      },
      dark: { 
        oklch: 'oklch(0.25 0.01 280)', 
 
        srgb: 'rgb(33, 33, 38)',
 
        p3: 'color(display-p3 0.128 0.130 0.149)'
      }
    }
  },
  
  separator: {
    primary: {
      light: { 
        oklch: 'oklch(0.88 0.01 280)', 
 
        srgb: 'rgb(214, 215, 222)',
 
        p3: 'color(display-p3 0.839 0.842 0.868)'
      },
      dark: { 
        oklch: 'oklch(0.28 0.01 280)', 
 
        srgb: 'rgb(40, 40, 46)',
 
        p3: 'color(display-p3 0.156 0.158 0.178)'
      }
    }
  },
  
  link: {
    primary: {
      light: { 
        oklch: 'oklch(0.7 0.16 250)', 
 
        srgb: 'rgb(66, 163, 253)',
 
        p3: 'color(display-p3 0.366 0.631 0.965)'
      },
      dark: { 
        oklch: 'oklch(0.78 0.14 250)', 
 
        srgb: 'rgb(109, 189, 255)',
 
        p3: 'color(display-p3 0.501 0.733 1.030)'
      }
    }
  },
  
  disabledControl: {
    primary: {
      light: { 
        oklch: 'oklch(0.92 0.01 280)', 
 
        srgb: 'rgb(227, 228, 235)',
 
        p3: 'color(display-p3 0.891 0.894 0.920)'
      },
      dark: { 
        oklch: 'oklch(0.22 0.01 280)', 
 
        srgb: 'rgb(26, 26, 31)',
 
        p3: 'color(display-p3 0.101 0.102 0.121)'
      }
    }
  },
  
  disabledText: {
    primary: {
      light: { 
        oklch: 'oklch(0.7 0.01 280)', 
 
        srgb: 'rgb(157, 158, 165)',
 
        p3: 'color(display-p3 0.616 0.619 0.643)'
      },
      dark: { 
        oklch: 'oklch(0.5 0.01 280)', 
 
        srgb: 'rgb(98, 99, 105)',
 
        p3: 'color(display-p3 0.384 0.387 0.410)'
      }
    }
  }
};
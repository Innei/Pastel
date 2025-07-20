import type { KawaiiColorVariants,RegularColorName } from '../types';

export const kawaiiColors: Record<RegularColorName, KawaiiColorVariants> = {
  blue: {
    light: {
      oklch: 'oklch(0.85 0.12 237)',

      srgb: 'rgb(123, 217, 255)',

      p3: 'color(display-p3 0.572 0.844 1.055)',
    },
    dark: {
      oklch: 'oklch(0.65 0.14 237)',

      srgb: 'rgb(11, 154, 217)',

      p3: 'color(display-p3 0.272 0.594 0.830)',
    },
  },

  pink: {
    light: {
      oklch: 'oklch(0.87 0.16 350)',

      srgb: 'rgb(255, 166, 227)',

      p3: 'color(display-p3 1.070 0.675 0.881)',
    },
    dark: {
      oklch: 'oklch(0.7 0.18 350)',

      srgb: 'rgb(237, 104, 174)',

      p3: 'color(display-p3 0.866 0.439 0.672)',
    },
  },

  purple: {
    light: {
      oklch: 'oklch(0.84 0.14 280)',

      srgb: 'rgb(185, 192, 255)',

      p3: 'color(display-p3 0.730 0.750 1.117)',
    },
    dark: {
      oklch: 'oklch(0.67 0.16 280)',

      srgb: 'rgb(132, 135, 245)',

      p3: 'color(display-p3 0.519 0.528 0.930)',
    },
  },

  green: {
    light: {
      oklch: 'oklch(0.85 0.12 155)',

      srgb: 'rgb(138, 229, 171)',

      p3: 'color(display-p3 0.625 0.890 0.690)',
    },
    dark: {
      oklch: 'oklch(0.68 0.14 155)',

      srgb: 'rgb(63, 177, 113)',

      p3: 'color(display-p3 0.380 0.685 0.465)',
    },
  },

  orange: {
    light: {
      oklch: 'oklch(0.86 0.12 60)',

      srgb: 'rgb(255, 190, 126)',

      p3: 'color(display-p3 1.002 0.757 0.533)',
    },
    dark: {
      oklch: 'oklch(0.69 0.14 60)',

      srgb: 'rgb(217, 132, 50)',

      p3: 'color(display-p3 0.805 0.533 0.267)',
    },
  },

  yellow: {
    light: {
      oklch: 'oklch(0.9 0.1 100)',

      srgb: 'rgb(237, 224, 145)',

      p3: 'color(display-p3 0.921 0.881 0.608)',
    },
    dark: {
      oklch: 'oklch(0.73 0.12 100)',

      srgb: 'rgb(185, 169, 71)',

      p3: 'color(display-p3 0.716 0.666 0.339)',
    },
  },

  sky: {
    light: {
      oklch: 'oklch(0.87 0.11 210)',

      srgb: 'rgb(114, 232, 252)',

      p3: 'color(display-p3 0.566 0.899 0.977)',
    },
    dark: {
      oklch: 'oklch(0.7 0.13 210)',

      srgb: 'rgb(0, 179, 203)',

      p3: 'color(display-p3 0.275 0.692 0.782)',
    },
  },

  red: {
    light: {
      oklch: 'oklch(0.84 0.14 20)',

      srgb: 'rgb(255, 164, 164)',

      p3: 'color(display-p3 1.042 0.664 0.656)',
    },
    dark: {
      oklch: 'oklch(0.67 0.16 20)',

      srgb: 'rgb(231, 102, 107)',

      p3: 'color(display-p3 0.843 0.431 0.434)',
    },
  },

  brown: {
    light: {
      oklch: 'oklch(0.82 0.1 45)',

      srgb: 'rgb(251, 176, 142)',

      p3: 'color(display-p3 0.941 0.701 0.578)',
    },
    dark: {
      oklch: 'oklch(0.65 0.12 45)',

      srgb: 'rgb(203, 118, 78)',

      p3: 'color(display-p3 0.749 0.477 0.336)',
    },
  },

  gray: {
    light: {
      oklch: 'oklch(0.87 0 0)',

      srgb: 'rgb(212, 212, 212)',

      p3: 'color(display-p3 0.831 0.831 0.831)',
    },
    dark: {
      oklch: 'oklch(0.7 0 0)',

      srgb: 'rgb(158, 158, 158)',

      p3: 'color(display-p3 0.620 0.620 0.620)',
    },
  },

  neutral: {
    light: {
      oklch: 'oklch(0.82 0 0)',

      srgb: 'rgb(196, 196, 196)',

      p3: 'color(display-p3 0.768 0.768 0.768)',
    },
    dark: {
      oklch: 'oklch(0.65 0 0)',

      srgb: 'rgb(143, 143, 143)',

      p3: 'color(display-p3 0.561 0.561 0.561)',
    },
  },

  black: {
    light: {
      oklch: 'oklch(0.35 0 0)',

      srgb: 'rgb(58, 58, 58)',

      p3: 'color(display-p3 0.229 0.229 0.229)',
    },
    dark: {
      oklch: 'oklch(0.5 0 0)',

      srgb: 'rgb(99, 99, 99)',

      p3: 'color(display-p3 0.389 0.389 0.389)',
    },
  },

  white: {
    light: {
      oklch: 'oklch(0.98 0 0)',

      srgb: 'rgb(248, 248, 248)',

      p3: 'color(display-p3 0.974 0.974 0.974)',
    },
    dark: {
      oklch: 'oklch(0.88 0 0)',

      srgb: 'rgb(215, 215, 215)',

      p3: 'color(display-p3 0.844 0.844 0.844)',
    },
  },

  teal: {
    light: {
      oklch: 'oklch(0.86 0.1 180)',

      srgb: 'rgb(129, 231, 211)',

      p3: 'color(display-p3 0.603 0.895 0.831)',
    },
    dark: {
      oklch: 'oklch(0.72 0.12 180)',

      srgb: 'rgb(47, 189, 167)',

      p3: 'color(display-p3 0.372 0.730 0.658)',
    },
  },

  cyan: {
    light: {
      oklch: 'oklch(0.88 0.09 195)',

      srgb: 'rgb(140, 235, 234)',

      p3: 'color(display-p3 0.636 0.910 0.912)',
    },
    dark: {
      oklch: 'oklch(0.74 0.11 195)',

      srgb: 'rgb(63, 192, 192)',

      p3: 'color(display-p3 0.402 0.744 0.748)',
    },
  },

  indigo: {
    light: {
      oklch: 'oklch(0.83 0.11 260)',

      srgb: 'rgb(157, 200, 255)',

      p3: 'color(display-p3 0.651 0.781 1.040)',
    },
    dark: {
      oklch: 'oklch(0.69 0.13 260)',

      srgb: 'rgb(107, 155, 235)',

      p3: 'color(display-p3 0.459 0.603 0.899)',
    },
  },

  violet: {
    light: {
      oklch: 'oklch(0.85 0.12 300)',

      srgb: 'rgb(218, 188, 255)',

      p3: 'color(display-p3 0.834 0.741 1.047)',
    },
    dark: {
      oklch: 'oklch(0.71 0.14 300)',

      srgb: 'rgb(175, 140, 235)',

      p3: 'color(display-p3 0.665 0.553 0.899)',
    },
  },

  lime: {
    light: {
      oklch: 'oklch(0.89 0.08 125)',

      srgb: 'rgb(206, 229, 171)',

      p3: 'color(display-p3 0.826 0.894 0.692)',
    },
    dark: {
      oklch: 'oklch(0.75 0.1 125)',

      srgb: 'rgb(159, 185, 114)',

      p3: 'color(display-p3 0.645 0.724 0.478)',
    },
  },

  emerald: {
    light: {
      oklch: 'oklch(0.86 0.1 160)',

      srgb: 'rgb(149, 230, 187)',

      p3: 'color(display-p3 0.655 0.892 0.743)',
    },
    dark: {
      oklch: 'oklch(0.72 0.12 160)',

      srgb: 'rgb(87, 188, 138)',

      p3: 'color(display-p3 0.445 0.726 0.557)',
    },
  },

  amber: {
    light: {
      oklch: 'oklch(0.9 0.08 85)',

      srgb: 'rgb(247, 219, 161)',

      p3: 'color(display-p3 0.949 0.861 0.659)',
    },
    dark: {
      oklch: 'oklch(0.76 0.1 85)',

      srgb: 'rgb(206, 172, 100)',

      p3: 'color(display-p3 0.787 0.681 0.431)',
    },
  },

  rose: {
    light: {
      oklch: 'oklch(0.86 0.13 15)',

      srgb: 'rgb(255, 173, 181)',

      p3: 'color(display-p3 1.051 0.697 0.719)',
    },
    dark: {
      oklch: 'oklch(0.72 0.15 15)',

      srgb: 'rgb(243, 121, 134)',

      p3: 'color(display-p3 0.893 0.501 0.533)',
    },
  },

  slate: {
    light: {
      oklch: 'oklch(0.84 0.01 240)',

      srgb: 'rgb(197, 203, 208)',

      p3: 'color(display-p3 0.777 0.797 0.815)',
    },
    dark: {
      oklch: 'oklch(0.7 0.01 240)',

      srgb: 'rgb(153, 159, 164)',

      p3: 'color(display-p3 0.605 0.624 0.641)',
    },
  },

  zinc: {
    light: {
      oklch: 'oklch(0.85 0.005 240)',

      srgb: 'rgb(203, 206, 209)',

      p3: 'color(display-p3 0.798 0.808 0.817)',
    },
    dark: {
      oklch: 'oklch(0.71 0.005 240)',

      srgb: 'rgb(159, 162, 164)',

      p3: 'color(display-p3 0.625 0.634 0.643)',
    },
  },
};
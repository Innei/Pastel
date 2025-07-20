import type { RegularColorName, ColorVariants } from '../types'

export const regularColors: Record<RegularColorName, ColorVariants> = {
  blue: {
    light: {
      oklch: 'oklch(0.65 0.18 237)',

      srgb: 'rgb(0, 155, 237)',

      p3: 'color(display-p3 0.082 0.596 0.905)',
    },
    dark: {
      oklch: 'oklch(0.7 0.16 237)',

      srgb: 'rgb(0, 170, 244)',

      p3: 'color(display-p3 0.273 0.658 0.933)',
    },
  },

  pink: {
    light: {
      oklch: 'oklch(0.68 0.22 350)',

      srgb: 'rgb(244, 77, 171)',

      p3: 'color(display-p3 0.885 0.354 0.659)',
    },
    dark: {
      oklch: 'oklch(0.73 0.2 350)',

      srgb: 'rgb(255, 105, 185)',

      p3: 'color(display-p3 0.930 0.448 0.715)',
    },
  },

  purple: {
    light: {
      oklch: 'oklch(0.65 0.2 280)',

      srgb: 'rgb(124, 121, 255)',

      p3: 'color(display-p3 0.483 0.476 0.987)',
    },
    dark: {
      oklch: 'oklch(0.7 0.18 280)',

      srgb: 'rgb(139, 141, 255)',

      p3: 'color(display-p3 0.547 0.553 1.013)',
    },
  },

  green: {
    light: {
      oklch: 'oklch(0.67 0.15 155)',

      srgb: 'rgb(46, 175, 107)',

      p3: 'color(display-p3 0.347 0.678 0.443)',
    },
    dark: {
      oklch: 'oklch(0.72 0.16 155)',

      srgb: 'rgb(53, 193, 119)',

      p3: 'color(display-p3 0.387 0.747 0.492)',
    },
  },

  orange: {
    light: {
      oklch: 'oklch(0.68 0.15 60)',

      srgb: 'rgb(218, 126, 30)',

      p3: 'color(display-p3 0.805 0.513 0.218)',
    },
    dark: {
      oklch: 'oklch(0.73 0.16 60)',

      srgb: 'rgb(239, 140, 36)',

      p3: 'color(display-p3 0.884 0.566 0.248)',
    },
  },

  yellow: {
    light: {
      oklch: 'oklch(0.75 0.12 100)',

      srgb: 'rgb(192, 175, 77)',

      p3: 'color(display-p3 0.741 0.690 0.363)',
    },
    dark: {
      oklch: 'oklch(0.78 0.14 100)',

      srgb: 'rgb(204, 185, 62)',

      p3: 'color(display-p3 0.789 0.727 0.331)',
    },
  },

  sky: {
    light: {
      oklch: 'oklch(0.7 0.14 210)',

      srgb: 'rgb(0, 181, 206)',

      p3: 'color(display-p3 0.225 0.696 0.795)',
    },
    dark: {
      oklch: 'oklch(0.75 0.13 210)',

      srgb: 'rgb(0, 195, 219)',

      p3: 'color(display-p3 0.344 0.755 0.846)',
    },
  },

  red: {
    light: {
      oklch: 'oklch(0.65 0.2 20)',

      srgb: 'rgb(240, 76, 90)',

      p3: 'color(display-p3 0.871 0.347 0.370)',
    },
    dark: {
      oklch: 'oklch(0.7 0.19 20)',

      srgb: 'rgb(254, 98, 108)',

      p3: 'color(display-p3 0.926 0.426 0.438)',
    },
  },

  brown: {
    light: {
      oklch: 'oklch(0.62 0.12 45)',

      srgb: 'rgb(193, 109, 69)',

      p3: 'color(display-p3 0.711 0.442 0.302)',
    },
    dark: {
      oklch: 'oklch(0.67 0.12 45)',

      srgb: 'rgb(209, 124, 84)',

      p3: 'color(display-p3 0.775 0.501 0.359)',
    },
  },

  gray: {
    light: {
      oklch: 'oklch(0.65 0 0)',

      srgb: 'rgb(143, 143, 143)',

      p3: 'color(display-p3 0.561 0.561 0.561)',
    },
    dark: {
      oklch: 'oklch(0.7 0 0)',

      srgb: 'rgb(158, 158, 158)',

      p3: 'color(display-p3 0.620 0.620 0.620)',
    },
  },

  neutral: {
    light: {
      oklch: 'oklch(0.6 0 0)',

      srgb: 'rgb(128, 128, 128)',

      p3: 'color(display-p3 0.502 0.502 0.502)',
    },
    dark: {
      oklch: 'oklch(0.65 0 0)',

      srgb: 'rgb(143, 143, 143)',

      p3: 'color(display-p3 0.561 0.561 0.561)',
    },
  },

  black: {
    light: {
      oklch: 'oklch(0.2 0 0)',

      srgb: 'rgb(22, 22, 22)',

      p3: 'color(display-p3 0.086 0.086 0.086)',
    },
    dark: {
      oklch: 'oklch(0.25 0 0)',

      srgb: 'rgb(34, 34, 34)',

      p3: 'color(display-p3 0.131 0.131 0.131)',
    },
  },

  white: {
    light: {
      oklch: 'oklch(0.95 0 0)',

      srgb: 'rgb(238, 238, 238)',

      p3: 'color(display-p3 0.934 0.934 0.934)',
    },
    dark: {
      oklch: 'oklch(0.9 0 0)',

      srgb: 'rgb(222, 222, 222)',

      p3: 'color(display-p3 0.870 0.870 0.870)',
    },
  },

  teal: {
    light: {
      oklch: 'oklch(0.66 0.16 180)',

      srgb: 'rgb(0, 176, 150)',

      p3: 'color(display-p3 0.048 0.678 0.590)',
    },
    dark: {
      oklch: 'oklch(0.71 0.15 180)',

      srgb: 'rgb(0, 191, 165)',

      p3: 'color(display-p3 0.240 0.736 0.649)',
    },
  },

  cyan: {
    light: {
      oklch: 'oklch(0.7 0.15 195)',

      srgb: 'rgb(0, 186, 187)',

      p3: 'color(display-p3 0.154 0.716 0.727)',
    },
    dark: {
      oklch: 'oklch(0.75 0.14 195)',

      srgb: 'rgb(0, 201, 201)',

      p3: 'color(display-p3 0.299 0.774 0.782)',
    },
  },

  indigo: {
    light: {
      oklch: 'oklch(0.58 0.2 260)',

      srgb: 'rgb(39, 115, 238)',

      p3: 'color(display-p3 0.240 0.444 0.901)',
    },
    dark: {
      oklch: 'oklch(0.65 0.18 260)',

      srgb: 'rgb(72, 139, 251)',

      p3: 'color(display-p3 0.348 0.540 0.953)',
    },
  },

  violet: {
    light: {
      oklch: 'oklch(0.62 0.22 300)',

      srgb: 'rgb(157, 91, 244)',

      p3: 'color(display-p3 0.580 0.368 0.924)',
    },
    dark: {
      oklch: 'oklch(0.68 0.2 300)',

      srgb: 'rgb(173, 116, 255)',

      p3: 'color(display-p3 0.646 0.465 0.969)',
    },
  },

  lime: {
    light: {
      oklch: 'oklch(0.75 0.16 125)',

      srgb: 'rgb(151, 191, 62)',

      p3: 'color(display-p3 0.623 0.743 0.327)',
    },
    dark: {
      oklch: 'oklch(0.78 0.17 125)',

      srgb: 'rgb(159, 201, 62)',

      p3: 'color(display-p3 0.656 0.784 0.335)',
    },
  },

  emerald: {
    light: {
      oklch: 'oklch(0.64 0.16 160)',

      srgb: 'rgb(0, 168, 105)',

      p3: 'color(display-p3 0.244 0.650 0.433)',
    },
    dark: {
      oklch: 'oklch(0.69 0.15 160)',

      srgb: 'rgb(29, 183, 122)',

      p3: 'color(display-p3 0.339 0.707 0.499)',
    },
  },

  amber: {
    light: {
      oklch: 'oklch(0.75 0.13 85)',

      srgb: 'rgb(212, 167, 62)',

      p3: 'color(display-p3 0.802 0.661 0.319)',
    },
    dark: {
      oklch: 'oklch(0.78 0.14 85)',

      srgb: 'rgb(224, 175, 59)',

      p3: 'color(display-p3 0.849 0.695 0.320)',
    },
  },

  rose: {
    light: {
      oklch: 'oklch(0.63 0.21 15)',

      srgb: 'rgb(236, 61, 95)',

      p3: 'color(display-p3 0.853 0.299 0.383)',
    },
    dark: {
      oklch: 'oklch(0.68 0.19 15)',

      srgb: 'rgb(246, 91, 114)',

      p3: 'color(display-p3 0.895 0.397 0.456)',
    },
  },

  slate: {
    light: {
      oklch: 'oklch(0.55 0.015 240)',

      srgb: 'rgb(106, 115, 122)',

      p3: 'color(display-p3 0.422 0.450 0.474)',
    },
    dark: {
      oklch: 'oklch(0.6 0.015 240)',

      srgb: 'rgb(120, 130, 136)',

      p3: 'color(display-p3 0.479 0.507 0.532)',
    },
  },

  zinc: {
    light: {
      oklch: 'oklch(0.58 0.01 240)',

      srgb: 'rgb(117, 123, 128)',

      p3: 'color(display-p3 0.464 0.482 0.499)',
    },
    dark: {
      oklch: 'oklch(0.63 0.01 240)',

      srgb: 'rgb(132, 138, 143)',

      p3: 'color(display-p3 0.522 0.541 0.557)',
    },
  },
}

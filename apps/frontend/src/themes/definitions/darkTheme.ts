import { deepmerge } from 'deepmerge-ts';
import type { Config } from 'tailwindcss';
import type { Defined } from 'xenopomp-essentials';

type Theme = Defined<Defined<Config['theme']>['extend']>;

const uiKitTheme = {
  colors: {
    accent: '#1C759F',
    'accent-darker': '#104964',
    ui: {
      fill: '#2D2C2C',
      border:
        'rgba(89.23755034804344 88.61154913902283 88.61154913902283 / 0.10000000149011612)',
      badges: {
        default: {
          fill: '#606775',
          border:
            'rgba(84.76951450109482 87.46524944901466 92.85668894648552 / 0.20000000298023224)',
        },
        success: {
          fill: '#159941',
          border:
            'rgba(18.08705795556307 126.18017882108688 54.1180944442749 / 0.20000000298023224)',
        },
        warning: {
          fill: '#F86815',
          border:
            'rgba(205.26586711406708 88.3308658003807 20.93083865940571 / 0.20000000298023224)',
        },
        danger: {
          fill: '#ED3B3C',
          border:
            'rgba(194.2797902226448 46.14460989832878 46.976826041936874 / 0.20000000298023224)',
        },
      },
      btn: {
        danger: {
          font: '#F85149',
          hover: {
            fill: '#B62324',
          },
          active: {
            fill: '#E22E2F',
          },
        },
      },
      list: {
        border:
          'rgba(89.00000229477882 89.00000229477882 89.00000229477882 / 0.5)',
        fill: '#2D2C2C',
        'fill-hover': '#383737',
      },
    },
  },
} satisfies Theme;

/**
 * This theme is **default**.
 */
const darkThemeBase = {
  colors: {
    star: '#FFBC08',
    primary: {
      bg: '#202020',
      font: '#FFFFFF',
      'font-darker': '#969696',
    },
    secondary: {
      bg: '#161515',
      font: '#FFFFFF',
      icon: {
        mono: '#FFFFFF',
      },
      card: {
        hover: {
          bg: '#2C2B2B',
        },
      },
    },
    project: {
      overlay: 'rgba(0 0 0 / 0.8500000238418579)',
      font: '#FFFFFF',
    },
    block: {
      primary: '#6626BC',
      secondary: '#F0966F',
      accent: '#FFBC08',
    },
    static: {
      border: 'rgba(255 255 255 / 0.10000000149011612)',
    },
    card: {
      bg: '#FFFFFF',
      font: '#000000',
    },
    btn: {
      action: {
        bg: '#D1D1D1',
        font: '#1C1C1C',
        hover: {
          bg: '#F9F8F8',
          font: '#1C1B1B',
        },
      },
    },
    footer: {
      bg: '#000000',
      font: '#FFFFFF',
    },
  },
} satisfies Theme;

export const darkTheme = deepmerge(uiKitTheme, darkThemeBase);

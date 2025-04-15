import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import type { Fn } from 'xenopomp-essentials';

/** Default mock for any font export. */
export const FONT_MOCK: Fn<[], NextFontWithVariable> = () => ({
  className: 'mocked',
  style: {
    fontFamily: 'mocked',
  },
  variable: '--mocked-font-name',
});

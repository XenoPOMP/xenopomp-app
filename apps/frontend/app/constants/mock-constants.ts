import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import type * as GOOGLE_FONTS from 'next/font/google';
import type { Fn } from 'xenopomp-essentials';

/** Default mock for any font export. */
export const FONT_MOCK: Fn<[], NextFontWithVariable> = () => ({
  className: 'mocked',
  style: {
    fontFamily: 'mocked',
  },
  variable: '--mocked-font-name',
});

/**
 * This object contains mocked google fonts from 'next/font/google'.
 * @example
 * injectMocks(() => {
 *   vi.mock('next/font/google', () => FONT_MOCKS_OBJECT);
 * });
 */
export const FONT_MOCKS_OBJECT = {
  Inter: FONT_MOCK,
  Sofia_Sans: FONT_MOCK,
  Playwrite_DE_LA: FONT_MOCK,
} satisfies Partial<Record<keyof typeof GOOGLE_FONTS, typeof FONT_MOCK>>;

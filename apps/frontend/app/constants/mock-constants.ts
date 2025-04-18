import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import type * as GOOGLE_FONTS from 'next/font/google';
import type { Fn } from 'xenopomp-essentials';

const FONT_MOCK_RETURN: NextFontWithVariable = {
  className: 'mock',
  style: {
    fontFamily: 'mock',
  },
  variable: 'mock',
};

// eslint-disable-next-line jsdoc/require-jsdoc
const FONT_MOCK = (...args: any[]) => FONT_MOCK_RETURN;

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
} satisfies Partial<
  Record<keyof typeof GOOGLE_FONTS, Fn<[...args: any[]], any>>
>;

import type * as GOOGLE_FONTS from 'next/font/google';
import { vi } from 'vitest';

import { FONT_MOCK } from '@app/constants';

import { injectMocks } from '@test/assets';

type FontName = keyof typeof GOOGLE_FONTS;

/**
 * Inject all fonts from 'next/font/google' as mocks.
 *
 * @example
 * describe('Root layout test', () => {
 *   injectMatchMediaMock();
 *
 *   // Applies all font mocks here
 *   injectFontMocks();
 *
 *   testNextPage(<RootLayout children={undefined} />, {
 *     generateMetadata,
 *   });
 * });
 */
export function injectFontMocks() {
  const mock = {
    Inter: FONT_MOCK,
    Sofia_Sans: FONT_MOCK,
    Playwrite_DE_LA: FONT_MOCK,
  } satisfies Partial<Record<FontName, typeof FONT_MOCK>>;

  injectMocks(() => {
    vi.mock('next/font/google', () => mock);
  });
}

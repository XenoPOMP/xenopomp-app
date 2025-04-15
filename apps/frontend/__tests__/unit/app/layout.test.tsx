import { describe, vi } from 'vitest';

import { FONT_MOCK } from '@app/constants';
import RootLayout, { generateMetadata } from '@app/layout';

import { injectMatchMediaMock, injectMocks, testNextPage } from '@test/assets';

describe('Root layout test', () => {
  // Use it inside describe suite. Place it to top
  injectMatchMediaMock();

  injectMocks(() => {
    vi.mock('next/font/google', () => ({
      Inter: FONT_MOCK,
      Playwrite_DE_LA: FONT_MOCK,
      Sofia_Sans: FONT_MOCK,
    }));
  });

  testNextPage(<RootLayout children={undefined} />, {
    generateMetadata,
  });
});

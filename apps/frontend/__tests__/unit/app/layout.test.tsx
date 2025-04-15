import { describe, vi } from 'vitest';

import { FONT_MOCKS_OBJECT } from '@app/constants';
import RootLayout, { generateMetadata } from '@app/layout';

import { injectMatchMediaMock, injectMocks, testNextPage } from '@test/assets';

describe('Root layout test', () => {
  // Use it inside describe suite. Place it to top
  injectMatchMediaMock();

  injectMocks(() => {
    vi.mock('next/font/google', () => FONT_MOCKS_OBJECT);
  });

  testNextPage(<RootLayout children={undefined} />, {
    generateMetadata,
  });
});

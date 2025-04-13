import { describe, vi } from 'vitest';

import RootLayout, { generateMetadata } from '@app/layout.tsx';

import { injectMatchMediaMock, injectMocks, testNextPage } from '@test/assets';

describe('Root layout test', () => {
  // Use it inside describe suite. Place it to top
  injectMatchMediaMock();

  injectMocks(() => {
    vi.mock(import('next/font/google'), async importOriginal => {
      const mod = await importOriginal();
      return {
        ...mod,
        // eslint-disable-next-line jsdoc/require-jsdoc
        Sofia_Sans: () => ({
          className: '<MOCKED>',
          style: {
            fontFamily: '<MOCKED_FONT_FAMILY>',
          },
          variable: '<MOCKED_VAR_NAME>',
        }),

        // eslint-disable-next-line jsdoc/require-jsdoc
        Playwrite_DE_LA: () => ({
          className: '<MOCKED>',
          style: {
            fontFamily: '<MOCKED_FONT_FAMILY>',
          },
          variable: '<MOCKED_VAR_NAME>',
        }),
      };
    });
  });

  testNextPage(<RootLayout children={undefined} />, {
    generateMetadata,
  });
});

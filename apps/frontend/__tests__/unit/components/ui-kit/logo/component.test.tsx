import { describe, test, vi } from 'vitest';

import { Logo } from '@/components/ui/kit';

import { assertRendering, injectMocks } from '@test/assets';

describe('Logo component', () => {
  injectMocks(() => {
    vi.mock(import('next/font/google'), async importOriginal => {
      const mod = await importOriginal();
      return {
        ...mod,
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

  test('It renders', () => {
    assertRendering(<Logo />);
  });
});

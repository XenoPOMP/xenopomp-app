import { describe, test, vi } from 'vitest';

import { Logo } from '@/components/ui/kit';

import { FONT_MOCKS_OBJECT } from '@app/constants';

import { assertRendering, injectMocks } from '@test/assets';

describe('Logo component', () => {
  injectMocks(() => {
    vi.mock('next/font/google', () => FONT_MOCKS_OBJECT);
  });

  test('It renders', () => {
    assertRendering(<Logo />);
  });
});

import { describe, test, vi } from 'vitest';

import { Logo } from '@/components/ui/kit';

import { FONT_MOCK } from '@app/constants';

import { assertRendering, injectMocks } from '@test/assets';

describe('Logo component', () => {
  injectMocks(() => {
    vi.mock('next/font/google', () => ({
      Inter: FONT_MOCK,
      Playwrite_DE_LA: FONT_MOCK,
      Sofia_Sans: FONT_MOCK,
    }));
  });

  test('It renders', () => {
    assertRendering(<Logo />);
  });
});

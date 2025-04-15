import { describe, vi } from 'vitest';

import { FONT_MOCKS_OBJECT } from '@app/constants';
import Home from '@app/page';

import { injectMocks, testNextPage } from '@test/assets';

describe('MainPage tests', () => {
  injectMocks(() => {
    vi.mock('next/font/google', () => FONT_MOCKS_OBJECT);
  });

  testNextPage(<Home />);
});

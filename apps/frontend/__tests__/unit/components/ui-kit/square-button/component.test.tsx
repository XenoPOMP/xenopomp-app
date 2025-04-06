import { describe, test } from 'vitest';

import { SquareButton } from '@/components/ui/kit';

import { assertRendering } from '@test/assets';

describe('SquareButton component', () => {
  test('It renders', () => {
    assertRendering(<SquareButton />);
  });
});

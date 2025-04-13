import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { usePadStart } from '@/hooks';

import { assertHookRendering, createUsePadStartTest } from '@test/assets';

describe('usePadStart', () => {
  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() => usePadStart());
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUsePadStartTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});

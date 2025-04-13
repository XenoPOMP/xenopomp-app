import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { usePadStart } from '@/hooks';

import {
  assertHookRendering,
  createUsePadStartTest,
  injectMatchMediaMock,
} from '@test/assets';

describe('usePadStart', () => {
  injectMatchMediaMock();

  afterEach(() => {
    cleanup();
  });

  test('It renders', () => {
    assertHookRendering(() =>
      usePadStart('12', {
        maxLength: 3,
        fillString: '0',
      }),
    );
  });

  test('Fill string is applied', () => {
    const {
      result: { current },
    } = renderHook(() =>
      usePadStart('12', {
        maxLength: 3,
        fillString: '0',
      }),
    );

    expect(current?.pad).toBe('0');
    expect(current.input).toBe('12');
  });

  test('Testing with test component', () => {
    const { getCurrentState } = createUsePadStartTest({
      trackedState: '12',
    });

    expect(getCurrentState()).toBe('12');
  });
});

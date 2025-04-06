import { useCallback } from 'react';
import type { Fn } from 'xenopomp-essentials';

export interface IApplyPadStartOptions {
  maxLength: number;
  fillString?: string;
}

/**
 * Applies .padStart to input string and returns
 * added fill string and input separately.
 *
 * @param inp
 * @param maxLength
 * @param fillString
 *
 * @example
 * const { pad, input } = usePadStart(num.toString(), {
 *   maxLength: ogNum.toString().length,
 *   fillString: '0',
 * });
 *
 * ...
 *
 * <>
 *   {pad !== undefined && (
 *       <span className={cn('text-primary-font text-opacity-[38%]')}>
 *         {pad}
 *       </span>
 *     )}
 *   <span>{input}</span>
 * </>
 */
export const usePadStart = (
  inp: string,
  { maxLength, fillString }: IApplyPadStartOptions,
) => {
  const format = useCallback<Fn<[], { pad?: string; input: string }>>(() => {
    // Format given input with String.padStart
    const padded = inp.padStart(maxLength, fillString);

    // Run RegExp on formatted string
    const test = /^0+/.exec(padded);
    // Possible match
    const padString = test?.at(0);

    // Whole zeroes
    if (/^0+$/.test(padded)) {
      return {
        pad: padString,
        input: '',
      };
    }

    return {
      pad: padString,
      input: inp,
    };
  }, [inp, maxLength, fillString]);

  return format();
};

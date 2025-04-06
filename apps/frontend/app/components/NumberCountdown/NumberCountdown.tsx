import cn from 'classnames';
import type { FC } from 'react';
import useAnimateNumber from 'use-animate-number';
import { Defined, minmax } from 'xenopomp-essentials';

import { usePadStart } from '@/hooks';

import type { NumberCountdownVariantsType } from './NumberCountdown.variants';
import { numberCountdownVariants } from './NumberCountdown.variants';

interface NumberCountdownProps {
  number: number;
}

type AnimationProps = Pick<
  Defined<Parameters<typeof useAnimateNumber>[1]>,
  'duration' | 'easing'
>;

/** */
export const NumberCountdown: FC<
  NumberCountdownProps & NumberCountdownVariantsType & AnimationProps
> = ({ number, variant, duration = 5000, easing = 'easeOutElastic' }) => {
  const [num] = useAnimateNumber(number, {
    duration,
    enterance: true,
    decimals: 0,
    easing,
  });

  const { pad, input } = usePadStart(num.toString(), {
    maxLength: minmax(number.toString().length, [2, undefined]),
    fillString: '0',
  });

  return (
    <div className={cn(numberCountdownVariants({ variant }), 'tabular-nums')}>
      <span>
        <span className={cn('opacity-[38%]')}>{pad}</span>
        {input}
      </span>
    </div>
  );
};

import cn from 'classnames';
import type { FC } from 'react';

import type { NumberCountdownVariantsType } from './NumberCountdown.variants';
import { numberCountdownVariants } from './NumberCountdown.variants';

interface NumberCountdownProps {
  number: number;
}

/** */
export const NumberCountdown: FC<
  NumberCountdownProps & NumberCountdownVariantsType
> = ({ number, variant }) => {
  return (
    <div className={cn(numberCountdownVariants({ variant }))}>
      <span>
        <span className={cn('opacity-[38%]')}>0</span>
        {number}
      </span>
    </div>
  );
};

import cn from 'classnames';
import type { VariableFC } from 'xenopomp-essentials';

import { HStack } from '@/components/ui';
import { Logo } from '@/components/ui/kit';

import styles from '../styles/Header.module.scss';

/** */
export const Internal_LandingHeader: VariableFC<
  'header',
  unknown,
  'children'
> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        styles.landingHeader,
        'h-[--landing-header-height]',
        // eslint-disable-next-line prettier/prettier
        'border-b-static-border border-b',
        className,
      )}
      {...props}
    >
      <HStack asChild>
        <div className={cn(styles.grid)}>
          <article>
            <Logo />
          </article>
        </div>
      </HStack>
    </header>
  );
};

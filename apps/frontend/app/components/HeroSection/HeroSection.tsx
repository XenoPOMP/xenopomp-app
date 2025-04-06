import cn from 'classnames';
import type { FC } from 'react';

import { HStack } from '@/components/ui';
import { Heading } from '@/components/ui/kit';

import styles from './HeroSection.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const HeroSection: FC<unknown> = () => {
  return (
    <HStack
      maxSize='1400px'
      className={cn(styles.hero)}
    >
      <Heading
        level={1}
        className={cn(styles.heading, 'uppercase')}
      >
        <span>
          You`re welcome to{' '}
          <span className={cn('text-block-accent')}>XenoPOMP`s</span> website
        </span>
      </Heading>
    </HStack>
  );
};

import cn from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';

import personImg from '~/public/person.png';

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

      <Image
        src={personImg}
        alt='Фотография автора сайта'
        className={cn(styles.person)}
      />

      <div
        aria-hidden
        className={cn(styles.personCardBg)}
      ></div>

      <article className={cn(styles.numbers)}></article>

      <article className={cn(styles.links)}></article>
    </HStack>
  );
};

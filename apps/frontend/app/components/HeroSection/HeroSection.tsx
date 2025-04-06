'use client';

import cn from 'classnames';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import personImg from '~/public/person.png';

import { HStack, Spacer } from '@/components/ui';
import { Heading, Loading, SquareButton } from '@/components/ui/kit';
import { useProjectCount } from '@/hooks/api';

import { NumberCountdown } from '@app/components';

import styles from './HeroSection.module.scss';

// eslint-disable-next-line jsdoc/require-jsdoc
export const HeroSection: FC<unknown> = () => {
  const { data: projectDataCount, isLoading: isProjectCountLoading } =
    useProjectCount();

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

      <article className={cn(styles.numbers)}>
        <Link
          href='/projects'
          className={cn('flex w-full items-center')}
        >
          <div>
            <p className={cn('text-20 font-bold !leading-[100%]')}>Проекты</p>

            {isProjectCountLoading && (
              <Loading
                aria-hidden
                variant='skeleton'
                className={cn(styles.loader, 'bg-card-font/25')}
              />
            )}

            {!isProjectCountLoading && (
              <NumberCountdown
                number={projectDataCount?.data ?? 0}
                duration={1000}
              />
            )}
          </div>

          <Spacer />

          <SquareButton
            variant='action'
            className={cn('!bg-btn-action-bg')}
          >
            <ArrowRight />
          </SquareButton>
        </Link>

        <i>Взгляните на мои проекты!</i>
      </article>

      <article className={cn(styles.links)}></article>
    </HStack>
  );
};

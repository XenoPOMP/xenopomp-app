'use client';

import cn from 'classnames';
import { ArrowRight, Atom, ChevronsDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import personImg from '~/public/person.png';

import { For } from '@/components/layout';
import { HStack, Spacer } from '@/components/ui';
import { Heading, Loading, SquareButton } from '@/components/ui/kit';
import { useProjectCount } from '@/hooks/api';

import { NumberCountdown } from '@app/components';
import { PageRoutes, socialsLinkItems } from '@app/constants';

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
        <p>
          Привет, я <span className={cn('text-block-accent')}>XenoPOMP</span>.
        </p>

        <p>Добро пожаловать на мой сайт!</p>
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

      <div className={cn(styles.arrowContainer)}>
        <svg
          width='71'
          height='64'
          viewBox='0 0 71 64'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M70.3239 59.6966C66.147 55.9517 62.2896 51.552 59.8267 49.6943C59.0151 49.0818 57.9075 48.4553 58.61 49.6583C60.306 52.5623 62.86 55.5678 65.8118 57.8734C65.0294 57.5413 64.2185 57.2567 63.0884 56.9164C55.5631 54.6506 47.8679 51.0396 41.2294 46.2874C35.7354 42.3548 30.5799 37.4202 27.2126 31.5103C30.3219 31.1213 33.3311 30.4207 36.2815 29.3285C42.57 27.0008 48.7761 21.3208 44.1304 14.34C40.2679 8.53678 32.1126 9.61671 27.797 14.2906C24.686 17.6597 24.1726 21.3796 24.1092 25.1559C24.0826 26.7522 24.3159 28.3434 24.7734 29.917C5.07924 29.7329 -2.91155 14.791 3.87969 0.227151C-6.78704 16.5112 7.52209 32.3941 25.312 31.5033C30.575 45.0849 51.914 57.0107 65.8002 58.9694C63.5297 59.3195 61.0642 60.353 59.0445 61.5798C58.7454 61.7612 57.4926 62.3822 57.1391 62.9563C57.0075 63.1695 57 63.3769 57.2113 63.5522C57.332 63.6523 57.5145 63.6832 57.7513 63.6521C58.44 63.5607 60.365 62.7467 62.2544 61.971C65.0576 60.8206 67.284 60.1013 70.3239 59.6966ZM26.8406 29.8828C30.1034 29.4746 33.4413 28.6439 36.4961 27.4412C41.4192 25.5031 45.3439 21.8002 43.6639 17.0406C42.6242 14.0952 40.2913 12.5563 37.5075 12.3251C27.4806 11.493 24.0797 23.356 26.8406 29.8828Z'
            fill='currentColor'
          />
        </svg>
      </div>

      <article className={cn(styles.numbers)}>
        <Link
          href={PageRoutes.projects}
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

      <article className={cn(styles.links)}>
        <div className={cn(styles.grid)}>
          <Atom size='100%' />

          <div
            className={cn(
              'flex items-center justify-start pr-[12%] text-[1.4em]',
            )}
          >
            Front-end разработчик, специализируюшийся на React, TypeScript и
            Next.js
          </div>

          <div className={cn(styles.links)}>
            <For each={socialsLinkItems}>
              {({ href, children }, idx) => (
                <Link
                  href={href}
                  key={idx}
                >
                  <SquareButton>{children}</SquareButton>
                </Link>
              )}
            </For>
          </div>
        </div>
      </article>

      <article className={cn(styles.slideDown)}>
        <ChevronsDown
          size='1.5rem'
          className={cn('text-primary-font-darker')}
        />
      </article>
    </HStack>
  );
};

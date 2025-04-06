'use client';

import { SiGithub } from '@icons-pack/react-simple-icons';
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
import { socialsLinkItems } from '@app/constants';

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

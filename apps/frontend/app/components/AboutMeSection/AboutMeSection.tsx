import cn from 'classnames';
import type { FC } from 'react';

import { HStack } from '@/components/ui';
import { Heading } from '@/components/ui/kit';

import styles from './AboutMeSection.module.scss';
import { GridCell, MostRatedRepos } from './components';

export const AboutMeSection: FC<unknown> = () => {
  return (
    <HStack>
      <section
        className={cn(
          'bleed-bg bleed-secondary-bg',
          'py-[2rem] text-secondary-font',
          'flex flex-col gap-2',
          styles.aboutMe,
        )}
      >
        <Heading
          level={1}
          className={cn('w-full text-center uppercase')}
        >
          Обо мне
        </Heading>

        <article className={cn(styles.grid)}>
          <GridCell gridArea='a' />
          <GridCell gridArea='b' />
          <GridCell gridArea='c' />
          <GridCell gridArea='d' />
          <MostRatedRepos />
        </article>
      </section>
    </HStack>
  );
};

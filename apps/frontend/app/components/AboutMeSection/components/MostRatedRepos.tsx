'use client';

import cn from 'classnames';
import type { FC } from 'react';

import { For } from '@/components/layout';
import { Heading, Loading } from '@/components/ui/kit';
import { useGhStars } from '@/hooks/api';

import { RepoStars } from '@app/components';

import { GridCell } from '../components';

export const MostRatedRepos: FC<unknown> = () => {
  const { data, isLoading } = useGhStars();

  return (
    <GridCell
      gridArea='e'
      className={cn('flex flex-col')}
    >
      <Heading level={3}>Самые популярные репозитории</Heading>

      <div className={cn('flex-grow py-[1em]')}>
        <div
          className={cn('grid size-full gap-[.5em]')}
          style={{
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'repeat(3, max-content)',
          }}
        >
          {data !== undefined && !isLoading && (
            <>
              <For each={(data.data.items ?? []).slice(0, 6)}>
                {({ url, repoName, ownerName, starsCount }) => (
                  <RepoStars
                    starsCount={starsCount ?? 0}
                    repoAuthor={ownerName ?? 'XenoPOMP'}
                    repoName={repoName ?? ''}
                    href={url}
                  />
                )}
              </For>
            </>
          )}

          {isLoading && (
            <For each={Array.from({ length: 6 }, () => 1)}>
              {idx => (
                <Loading
                  variant='skeleton'
                  className={cn('h-[1.6em] bg-secondary-bg')}
                  style={{
                    animationDuration: '1s',
                  }}
                  key={`most-rated-repos-loading-${idx}`}
                />
              )}
            </For>
          )}
        </div>
      </div>
    </GridCell>
  );
};

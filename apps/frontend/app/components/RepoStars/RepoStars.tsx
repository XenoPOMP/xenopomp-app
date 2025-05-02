import cn from 'classnames';
import { Star } from 'lucide-react';
import Link from 'next/link';
import type { VariableFC } from 'xenopomp-essentials';

import type { RepoStarsProps } from './RepoStars.props';

export const RepoStars: VariableFC<
  typeof Link,
  RepoStarsProps,
  'children' | 'href'
> = ({ className, starsCount, repoAuthor, repoName, ...props }) => {
  return (
    <Link
      className={cn(
        'flex items-center gap-[.5em]',
        'text-secondary-font',
        'rounded-[.25em] p-[.25em]',
        'hover:bg-secondary-card-hover-bg',
        'transition-colors',
        className,
      )}
      href={`https://github.com/${repoAuthor}/${repoName}`}
      {...props}
    >
      <div className={cn('text-14', 'flex items-center gap-[.25em]')}>
        <Star
          size='1.14em'
          className={cn('fill-current text-star')}
        />

        {starsCount}
      </div>

      <b className={cn('text-16 font-extrabold')}>
        {repoAuthor}/{repoName}
      </b>
    </Link>
  );
};

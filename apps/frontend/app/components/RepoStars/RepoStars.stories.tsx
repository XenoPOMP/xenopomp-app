import type { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';

import { RepoStars } from './RepoStars';

const meta = {
  title: 'App / Repository stars',
  component: RepoStars,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RepoStars>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  starsCount: 10,
  repoAuthor: 'XenoPOMP',
  repoName: 'none',
  // className: cn('h-[150px] bg-red-500'),
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
  // eslint-disable-next-line jsdoc/require-jsdoc
  render: args => (
    <div className={cn('flex flex-col gap-4')}>
      <RepoStars
        {...args}
        starsCount={1}
        repoName='react-vite-template'
      />

      <RepoStars
        {...args}
        starsCount={10}
        repoName='react-vite-template'
      />

      <RepoStars
        {...args}
        starsCount={1_212}
        repoName='next-template'
      />

      <RepoStars
        {...args}
        starsCount={356_001}
        repoName='next-template'
      />

      <RepoStars
        {...args}
        starsCount={678_120_193}
        repoName='next-template'
      />
    </div>
  ),
};

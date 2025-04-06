import type { Meta, StoryObj } from '@storybook/react';

import { NumberCountdown } from './NumberCountdown';

const meta = {
  title: 'App / Number countdown',
  component: NumberCountdown,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NumberCountdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  number: 2,
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
  },
};

export const Secondary: Story = {
  args: {
    ...sharedProps,
    variant: 'secondary',
  },
};

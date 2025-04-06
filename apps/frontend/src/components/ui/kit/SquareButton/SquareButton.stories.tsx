import type { Meta, StoryObj } from '@storybook/react';
import { Cog } from 'lucide-react';

import { SquareButton } from './SquareButton';

const meta = {
  title: 'UI Kit / SquareButton',
  component: SquareButton,
  tags: ['autodoc'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SquareButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const sharedProps = {
  children: 'S',
} satisfies Partial<Story['args']>;

export const Primary: Story = {
  args: {
    ...sharedProps,
    children: <Cog />,
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExpandCard } from './ExpandCard';

const meta = {
  component: ExpandCard,
} satisfies Meta<typeof ExpandCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
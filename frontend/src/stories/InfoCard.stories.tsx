import type { Meta, StoryObj } from '@storybook/react-vite';

import { InfoCard } from './InfoCard';

const meta = {
  component: InfoCard,
} satisfies Meta<typeof InfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
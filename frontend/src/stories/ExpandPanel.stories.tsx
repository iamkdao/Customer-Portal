import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExpandPanel } from './ExpandPanel';

const meta = {
  component: ExpandPanel,
} satisfies Meta<typeof ExpandPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
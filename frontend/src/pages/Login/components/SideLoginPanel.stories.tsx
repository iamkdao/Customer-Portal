import type { Meta, StoryObj } from '@storybook/react-vite';

import { SideLoginPanel } from './SideLoginPanel';

const meta = {
  component: SideLoginPanel,
} satisfies Meta<typeof SideLoginPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
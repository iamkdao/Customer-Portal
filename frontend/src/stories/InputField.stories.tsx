import type { Meta, StoryObj } from '@storybook/react-vite';

import IPF from './InputField';

const meta = {
  component: IPF,
} satisfies Meta<typeof IPF>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
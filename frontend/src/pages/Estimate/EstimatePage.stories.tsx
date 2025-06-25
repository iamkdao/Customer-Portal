import type { Meta, StoryObj } from '@storybook/react-vite';

import EstimatePage from './EstimatePage';

const meta = {
  component: EstimatePage,
} satisfies Meta<typeof EstimatePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
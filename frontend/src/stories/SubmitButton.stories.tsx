import type { Meta, StoryObj } from '@storybook/react-vite';

import { SubmitButton } from './SubmitButton';

const meta = {
  component: SubmitButton,
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLogin: false
  }
};
import type { Meta, StoryObj } from '@storybook/react';
import { KFCButton } from '../components/KFCButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const meta = {
  title: 'Components/KFCButton',
  component: KFCButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof KFCButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '로그인',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '시작하기',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: '취소',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: '가입하기',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: '프로필 생성하기',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
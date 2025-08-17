import type { Meta, StoryObj } from '@storybook/react';
import { KFCTextField } from '../components/KFCTextField';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const meta = {
  title: 'Components/KFCTextField',
  component: KFCTextField,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: '370px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    helperText: {
      control: 'text',
    },
    isPassword: {
      control: 'boolean',
    },
    showPasswordToggle: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof KFCTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '아이디를 입력해주세요',
  },
};

export const Password: Story = {
  args: {
    placeholder: '비밀번호를 입력해주세요',
    isPassword: true,
    showPasswordToggle: true,
  },
};

export const WithHelperText: Story = {
  args: {
    placeholder: '비밀번호를 입력해주세요',
    helperText: '알파벳과 숫자를 조합하여 8자 이상 입력해주세요',
  },
};

export const Error: Story = {
  args: {
    placeholder: '아이디를 입력해주세요',
    error: true,
    helperText: '이미 사용중인 아이디입니다',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '입력 비활성화',
    disabled: true,
  },
};
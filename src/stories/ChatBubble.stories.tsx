import type { Meta, StoryObj } from '@storybook/react';
import { ChatBubble } from '../components/ChatBubble';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from '../theme';

const meta = {
  title: 'Components/ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '370px', padding: 2 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AIMessage: Story = {
  args: {
    message: '안녕하세요, 닥터 샌더스입니다. 오늘 하루 기분은 어떠신가요?',
    sender: 'ai',
  },
};

export const UserMessage: Story = {
  args: {
    message: '반갑습니다',
    sender: 'user',
  },
};

export const AITyping: Story = {
  args: {
    message: '',
    sender: 'ai',
    showTyping: true,
  },
};

export const WithTimestamp: Story = {
  args: {
    message: '오늘은 조금 피곤한 것 같아요',
    sender: 'user',
    timestamp: '오후 2:30',
  },
};

export const Conversation = () => {
  const messages = [
    { message: '안녕하세요, 닥터 샌더스입니다. 오늘 하루 기분은 어떠신가요?', sender: 'ai' as const },
    { message: '반갑습니다', sender: 'user' as const },
    { message: '오늘은 조금 피곤한 것 같아요', sender: 'user' as const },
    { message: '피곤하신 군요. 최근에 충분한 휴식을 취하고 계신가요?', sender: 'ai' as const },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '370px' }}>
        {messages.map((msg, index) => (
          <ChatBubble key={index} {...msg} />
        ))}
        <ChatBubble message="" sender="ai" showTyping={true} />
      </Box>
    </ThemeProvider>
  );
};
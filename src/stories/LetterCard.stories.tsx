import type { Meta, StoryObj } from '@storybook/react';
import { LetterCard } from '../components/LetterCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const meta = {
  title: 'Components/LetterCard',
  component: LetterCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: '40px', minWidth: '400px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    showAnimation: {
      control: 'boolean',
    },
    showEnvelope: {
      control: 'boolean',
    },
    useAssets: {
      control: 'boolean',
    },
    autoHeight: {
      control: 'boolean',
    },
    width: {
      control: { type: 'number', min: 200, max: 500, step: 10 },
    },
    minHeight: {
      control: { type: 'number', min: 200, max: 400, step: 10 },
    },
    maxHeight: {
      control: { type: 'number', min: 300, max: 600, step: 10 },
    },
    fontSize: {
      control: { type: 'number', min: 12, max: 24, step: 1 },
    },
    lineHeight: {
      control: { type: 'number', min: 1, max: 2, step: 0.1 },
    },
    padding: {
      control: { type: 'number', min: 8, max: 32, step: 4 },
    },
    backgroundColor: {
      control: 'color',
    },
    borderColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    envelopeColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof LetterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '어쩌구저쩌구 저는 오늘 어쩌구 저쩌구 재잘재잘\n화이팅!! 아자아자!',
    recipientName: 'OOO',
    sender: '윙키',
    messageNumber: 23,
    showAnimation: false,
    showEnvelope: true,
    useAssets: true, // SVG 사용
  },
};

export const WithAnimation: Story = {
  args: {
    message: '어쩌구저쩌구 저는 오늘 어쩌구 저쩌구 재잘재잘\n화이팅!! 아자아자!',
    recipientName: 'OOO',
    sender: '윙키',
    messageNumber: 23,
    showAnimation: true,
    showEnvelope: true,
  },
};

export const PersonalizedMessage: Story = {
  args: {
    message: '오늘도 열심히 일하시는 당신,\n정말 수고가 많으셨어요.\n\n잠시 쉬어가며\n따뜻한 커피 한 잔 어떠신가요?\n\n당신은 충분히 잘하고 있어요!',
    recipientName: '김크루',
    sender: '윙키',
    messageNumber: 15,
    showAnimation: false,
    showEnvelope: true,
  },
};

export const ShortMessageAutoHeight: Story = {
  args: {
    message: '짧은 메시지는\n자동으로 작은 편지지!',
    recipientName: '박매니저',
    sender: '윙키',
    messageNumber: 5,
    showAnimation: false,
    showEnvelope: true,
    autoHeight: true,
    width: 352,
    fontSize: 16,
  },
};

export const FixedHeight: Story = {
  args: {
    message: '고정 높이 편지지입니다.\n내용이 짧아도 일정한 크기를 유지해요.',
    recipientName: '이부점장',
    sender: '윙키',
    messageNumber: 10,
    showAnimation: false,
    showEnvelope: true,
    autoHeight: false,
    minHeight: 350,
  },
};

export const LargeSize: Story = {
  args: {
    message: '큰 편지지에는\n더 많은 내용을 담을 수 있어요.\n\n여러 줄의 메시지를\n편안하게 읽을 수 있습니다.',
    recipientName: '이점장',
    sender: '윙키',
    messageNumber: 50,
    showAnimation: false,
    showEnvelope: true,
    width: 420,
    height: 380,
    fontSize: 18,
    padding: 24,
  },
};

export const WithoutEnvelope: Story = {
  args: {
    message: '봉투 없이\n편지지만 보여줄 수도 있어요.',
    recipientName: '최부점장',
    sender: '윙키',
    messageNumber: 10,
    showAnimation: false,
    showEnvelope: false,
  },
};

export const CustomColors: Story = {
  args: {
    message: '색상을 자유롭게\n커스터마이징할 수 있어요!',
    recipientName: '정매니저',
    sender: '윙키',
    messageNumber: 7,
    showAnimation: false,
    showEnvelope: true,
    backgroundColor: '#FFF0F5',
    borderColor: '#FFB6C1',
    textColor: '#8B4513',
    envelopeColor: '#FF69B4',
  },
};

export const ResponsiveWidth: Story = {
  args: {
    message: '반응형 너비도 지원합니다.\n화면 크기에 맞춰 조절됩니다.',
    recipientName: '홍크루',
    sender: '윙키',
    messageNumber: 30,
    showAnimation: false,
    showEnvelope: true,
    width: '100%',
    height: 320,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: '40px', width: '90vw', maxWidth: '500px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const LongMessage: Story = {
  args: {
    message: '매일 반복되는 일상 속에서도\n묵묵히 자신의 자리를 지키며\n최선을 다하는 당신의 모습이\n정말 아름답습니다.\n\n때로는 지치고 힘들 때도 있겠지만\n그럴 때마다 잠시 멈춰서서\n깊은 숨을 한 번 쉬어보세요.\n\n당신은 이미 충분히 잘하고 있고\n앞으로도 잘 해낼 거예요.\n\n항상 당신을 응원합니다!',
    recipientName: '모든 KFC 크루',
    sender: '윙키',
    messageNumber: 100,
    showAnimation: false,
    showEnvelope: true,
    autoHeight: true,
    lineHeight: 1.5,
  },
};

export const VeryLongMessage: Story = {
  args: {
    message: '오늘도 정말 수고 많으셨어요!\n\n아침 일찍부터 늦은 밤까지\n열심히 일하시는 모습을 보며\n정말 대단하다고 생각했어요.\n\n가끔은 힘들고 지칠 때도 있겠지만\n그럴 때마다 제가 여기 있다는 걸\n잊지 말아주세요.\n\n당신은 혼자가 아니에요.\n우리 모두가 서로를 응원하고\n함께 나아가고 있답니다.\n\n오늘 하루도 정말 고생하셨고\n내일은 더 좋은 날이 될 거예요.\n\n맛있는 치킨과 함께\n행복한 저녁 보내세요!\n\n언제나 당신을 응원합니다.\n화이팅! 아자아자!',
    recipientName: '김크루',
    sender: '윙키',
    messageNumber: 365,
    showAnimation: false,
    showEnvelope: true,
    autoHeight: true,
    lineHeight: 1.6,
  },
};

export const WithAssets: Story = {
  args: {
    message: 'DESIGN.md에 정의된\nSVG 에셋을 사용한 편지입니다.',
    recipientName: 'KFC 크루',
    sender: '윙키',
    messageNumber: 77,
    showAnimation: false,
    showEnvelope: true,
    useAssets: true,
  },
};
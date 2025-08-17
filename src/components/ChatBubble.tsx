import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';

export interface ChatBubbleProps {
  message: string;
  sender: 'ai' | 'user';
  timestamp?: string;
  showTyping?: boolean;
}

const MessageBubble = styled(Box)<{ sender: 'ai' | 'user' }>(({ sender }) => ({
  maxWidth: '280px',
  padding: '16px',
  fontSize: '14px',
  letterSpacing: '-0.42px',
  lineHeight: 1.5,
  borderRadius: sender === 'ai' ? '0 16px 16px 16px' : '16px 0 16px 16px',
  backgroundColor: sender === 'ai' ? '#E2292D' : '#EDEDED',
  color: sender === 'ai' ? '#FFFFFF' : '#000000',
  alignSelf: sender === 'ai' ? 'flex-start' : 'flex-end',
  wordBreak: 'break-word',
}));

const typing = keyframes`
  0%, 60%, 100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  30% {
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const TypingIndicator = styled(Box)({
  backgroundColor: '#EDEDED',
  borderRadius: '0 16px 16px 16px',
  padding: '16px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
});

const TypingDots = styled(Box)({
  width: '32px',
  height: '8px',
  display: 'flex',
  gap: '4px',
});

const TypingDot = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  backgroundColor: '#898989',
  borderRadius: '50%',
  animation: `${typing} 1.4s infinite`,
  '&:nth-of-type(1)': { animationDelay: '0s' },
  '&:nth-of-type(2)': { animationDelay: '0.2s' },
  '&:nth-of-type(3)': { animationDelay: '0.4s' },
}));

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender,
  timestamp,
  showTyping = false,
}) => {
  if (showTyping && sender === 'ai') {
    return (
      <TypingIndicator>
        <TypingDots>
          <TypingDot />
          <TypingDot />
          <TypingDot />
        </TypingDots>
      </TypingIndicator>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <MessageBubble sender={sender}>
        <Typography sx={{ fontSize: 'inherit', color: 'inherit' }}>
          {message}
        </Typography>
      </MessageBubble>
      {timestamp && (
        <Typography
          sx={{
            fontSize: '12px',
            color: '#898989',
            alignSelf: sender === 'ai' ? 'flex-start' : 'flex-end',
            px: '4px',
          }}
        >
          {timestamp}
        </Typography>
      )}
    </Box>
  );
};
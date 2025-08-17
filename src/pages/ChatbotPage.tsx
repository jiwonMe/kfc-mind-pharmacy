import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import AppHeader from '../components/AppHeader';
import CharacterProfileCard from '../components/CharacterProfileCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { ChatBubble } from '../components/ChatBubble';
import { KFCTextField } from '../components/KFCTextField';

interface Message {
  id: number;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

const ChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '안녕하세요, 닥터 샌더스입니다. 오늘 하루 기분은 어떠신가요?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI typing
    setIsTyping(true);
    setTimeout(() => {
      const aiResponses = [
        '그렇군요. 더 자세히 말씀해 주시겠어요?',
        '이해합니다. 어떤 부분이 가장 힘드신가요?',
        '당신의 마음을 알 것 같아요. 함께 이야기해봐요.',
        '좋은 생각이네요. 그것에 대해 더 이야기해볼까요?',
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#FFFFFF' }}>
        <AppHeader />
        <Box sx={{ padding: '0 16px' }}>
          <CharacterProfileCard
            name="닥터 샌더스"
            role="든든한 상담 전문가"
            image="/assets/characters/doctor-sanders.png"
          />
        </Box>
      
      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <ChatBubble
              message={message.text}
              sender={message.sender}
            />
          </Box>
        ))}
        
        {isTyping && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Box
              sx={{
                backgroundColor: '#E2292D',
                borderRadius: '0 16px 16px 16px',
                padding: '16px',
                maxWidth: '280px',
              }}
            >
              <Box sx={{ display: 'flex', gap: '4px' }}>
                {[0, 1, 2].map((index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      animation: 'typing 1.4s infinite',
                      animationDelay: `${index * 0.2}s`,
                      '@keyframes typing': {
                        '0%, 60%, 100%': {
                          opacity: 0.3,
                          transform: 'translateY(0)',
                        },
                        '30%': {
                          opacity: 1,
                          transform: 'translateY(-10px)',
                        },
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        )}
        
        <div ref={messagesEndRef} />
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          padding: '16px',
          borderTop: '1px solid #EDEDED',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <KFCTextField
          placeholder="메시지를 입력하세요..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
          multiline
          maxRows={3}
        />
        <IconButton
          onClick={handleSendMessage}
          sx={{
            backgroundColor: '#242424',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#000000',
            },
          }}
        >
          <SendIcon />
        </IconButton>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default ChatbotPage;
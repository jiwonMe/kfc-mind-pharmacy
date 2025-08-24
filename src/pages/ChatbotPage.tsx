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
  action?: {
    type: 'link' | 'music';
    url: string;
    label: string;
  };
}

const ChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '허허 우리 손주 왔구나, 밥은 먹었니? 오늘 하루 하루 어땠니? 이 할비가 다 들어주마^^',
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
      // Sequential responses based on message count
      const responseIndex = Math.floor((messages.filter(m => m.sender === 'user').length) % 3);
      
      let aiMessage: Message;
      
      switch(responseIndex) {
        case 0:
          aiMessage = {
            id: messages.length + 2,
            text: '예끼 이런 몹쓸 녀석들을 보았나! 지금은 좀 괜찮니?',
            sender: 'ai',
            timestamp: new Date(),
          };
          break;
        case 1:
          aiMessage = {
            id: messages.length + 2,
            text: '아이고.. 많이 고달팠겠구나, 옛날처럼 할비랑 같이 노래나 들을까?',
            sender: 'ai',
            timestamp: new Date(),
            action: {
              type: 'music',
              url: 'https://www.youtube.com/watch?v=wZj8-neaq1w&list=RDwZj8-neaq1w&start_radio=1',
              label: '📻 클릭해서 노래 들으러 가기',
            },
          };
          break;
        case 2:
          aiMessage = {
            id: messages.length + 2,
            text: '힘든 거 숨기지 말고, 선생님한테 털어놓으면 훨씬 편해질 거야. 용기 내 보는 게 어때?',
            sender: 'ai',
            timestamp: new Date(),
            action: {
              type: 'link',
              url: 'https://youth.seoul.go.kr/totalSearch/list.do?key=2309250002&sc_searchSe=&keyWord=마음건강',
              label: '전문가 상담 연결하기',
            },
          };
          break;
        default:
          const defaultResponses = [
            '그렇군요. 더 자세히 말씀해 주시겠어요?',
            '이해합니다. 어떤 부분이 가장 힘드신가요?',
            '당신의 마음을 알 것 같아요. 함께 이야기해봐요.',
            '좋은 생각이네요. 그것에 대해 더 이야기해볼까요?',
          ];
          const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
          aiMessage = {
            id: messages.length + 2,
            text: randomResponse,
            sender: 'ai',
            timestamp: new Date(),
          };
      }
      
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
            role="당신만의 든든한 상담 전문가입니다"
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
              flexDirection: 'column',
              alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
              gap: 1,
            }}
          >
            <ChatBubble
              message={message.text}
              sender={message.sender}
            />
            {message.action && (
              <Box
                component="a"
                href={message.action.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  padding: '8px 16px',
                  backgroundColor: message.action.type === 'music' ? '#FFF9F0' : '#F0F9FF',
                  borderRadius: '16px',
                  border: `1px solid ${message.action.type === 'music' ? '#FFE8C8' : '#C8E8FF'}`,
                  textDecoration: 'none',
                  color: '#242424',
                  fontSize: 14,
                  fontFamily: '"Wanted Sans Variable", sans-serif',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                }}
              >
                {message.action.label}
              </Box>
            )}
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
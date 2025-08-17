import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import AppHeader from '../components/AppHeader';
import CharacterProfileCard from '../components/CharacterProfileCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { LetterCard } from '../components/LetterCard';

const messages = [
  {
    id: 23,
    content: '오늘도 열심히 일하시는 당신,\n정말 수고가 많으셨어요.\n\n잠시 쉬어가며\n따뜻한 커피 한 잔 어떠신가요?\n\n당신은 충분히 잘하고 있어요!',
    date: new Date(),
  },
  {
    id: 22,
    content: '매일 반복되는 일상 속에서도\n묵묵히 자신의 자리를 지키며\n최선을 다하는 당신의 모습이\n정말 아름답습니다.',
    date: new Date(Date.now() - 86400000),
  },
  // ... more messages
];

const LetterPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const currentMessage = messages[currentMessageIndex];

  const handlePreviousMessages = () => {
    // TODO: Navigate to message history
    console.log('View previous messages');
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <AppHeader />
        <CharacterProfileCard
          name="윙키"
          role="활기 넘치는 응원 요정"
          image="/assets/characters/winky.png"
        />
      
        <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* 안내 박스 */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 24px',
              border: '1px solid #ABABAB',
              borderRadius: '24px',
              marginBottom: '24px',
              maxWidth: '370px',
              width: '100%',
            }}
          >
          <InfoIcon sx={{ color: '#898989', fontSize: 24 }} />
          <Typography
            sx={{
              fontSize: 14,
              color: '#000000',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            윙키가 응원의 메시지를 보냈어요!
          </Typography>
        </Box>

        {/* Letter Card */}
        <LetterCard
          message={currentMessage.content}
          recipientName="KFC 크루"
          sender="윙키"
          messageNumber={currentMessage.id}
          showAnimation={true}
          showEnvelope={true}
          useAssets={true}
          autoHeight={true}
        />

        {/* 지난 메시지 링크 */}
        <Typography
          onClick={handlePreviousMessages}
          sx={{
            fontSize: 12,
            color: '#898989',
            textAlign: 'center',
            marginTop: '24px',
            textDecoration: 'underline',
            cursor: 'pointer',
            fontFamily: '"Wanted Sans Variable", sans-serif',
          }}
        >
          지난 메시지 보기 ({messages.length - 1}개)
        </Typography>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default LetterPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import AppHeader from '../components/AppHeader';
import CharacterProfileCard from '../components/CharacterProfileCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { LetterCard } from '../components/LetterCard';
import WinkyMessageDrawer from '../components/WinkyMessageDrawer';

const messages = [
  {
    id: 6,
    content: '오늘도 최선을 다하는 당신은 이미 히어로 🦸‍♀️🦸‍♂️\n\n윙키가 박수 짝짝짝 보내드려요 👏👏👏',
    date: new Date(),
    preview: '오늘도 최선을 다하는 당신은 이미 히어로',
  },
  {
    id: 5,
    content: '고객의 미소 뒤에는 당신의 수고가 숨어 있어요 😊\n\n윙키가 오늘도 그 가치를 응원해요!',
    date: new Date(Date.now() - 86400000),
    preview: '고객의 미소 뒤에는 당신의 수고가...',
  },
  {
    id: 4,
    content: '바쁜 하루 속에서도 당신의 땀방울은 빛나요 ✨\n\n윙키가 그 노력을 꼭 기억할게요!',
    date: new Date(Date.now() - 86400000 * 2),
    preview: '바쁜 하루 속에서도 당신의 땀방울은...',
  },
  {
    id: 3,
    content: '잠깐의 숨 고르기가 오늘의 에너지예요 🌿\n\n윙키가 보내는 응원으로, 마음도 리필하세요 💖',
    date: new Date(Date.now() - 86400000 * 3),
    preview: '잠깐의 숨 고르기가 오늘의 에너지예요',
  },
  {
    id: 2,
    content: '작은 미소 하나가 큰 힘이 돼요 😊\n\n고객에게도, 동료에게도, 그리고 당신 자신에게도요! ✨',
    date: new Date(Date.now() - 86400000 * 4),
    preview: '작은 미소 하나가 큰 힘이 돼요',
  },
  {
    id: 1,
    content: '오늘도 치킨처럼 바삭하게 잘하고 있어요! 🍗\n\n윙키가 당신의 노고를 뜨겁게 응원합니다 🔥',
    date: new Date(Date.now() - 86400000 * 5),
    preview: '오늘도 치킨처럼 바삭하게 잘하고 있어요!',
  },
];

const LetterPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentMessage = messages[currentMessageIndex];

  const handlePreviousMessages = () => {
    setDrawerOpen(true);
  };

  const handleSelectMessage = (index: number) => {
    setCurrentMessageIndex(index);
    setDrawerOpen(false);
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
            윙키의 여섯번째 메시지
          </Typography>
        </Box>

        {/* Letter Card */}
        <LetterCard
          message={currentMessage.content}
          recipientName="KFC 크루"
          sender="당신의 응원요정 윙키올림"
          messageNumber={currentMessage.id}
          showAnimation={true}
          showEnvelope={true}
          useAssets={true}
          autoHeight={true}
        />

        {/* vertical space */}
        <Box sx={{ height: '60px' }} />

        {/* Mailbox Button */}
        <Box
          onClick={handlePreviousMessages}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '32px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Box
            sx={{
              width: '60px',
              height: '60px',
              backgroundColor: '#FFE8C8',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <MailIcon sx={{ fontSize: 32, color: '#FFA500' }} />
            {messages.length > 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  backgroundColor: '#E2292D',
                  color: 'white',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}
              >
                {messages.length}
              </Box>
            )}
          </Box>
          <Typography
            sx={{
              fontSize: 12,
              color: '#626262',
              marginTop: '8px',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            우편함
          </Typography>
        </Box>
        </Box>
      </Box>

      {/* Winky Message Drawer */}
      <WinkyMessageDrawer 
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        currentMessageId={messages[currentMessageIndex].id}
        onSelectMessage={(messageId) => {
          const index = messages.findIndex(m => m.id === messageId);
          if (index !== -1) {
            handleSelectMessage(index);
          }
        }}
      />
    </ResponsiveContainer>
  );
};

export default LetterPage;
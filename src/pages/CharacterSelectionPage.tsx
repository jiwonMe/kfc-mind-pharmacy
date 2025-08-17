import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppHeader from '../components/AppHeader';
import HeroBanner from '../components/HeroBanner';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { CharacterCard } from '../components/CharacterCard';
import { KFCButton } from '../components/KFCButton';

const characters = [
  {
    id: 'sanders',
    name: '닥터 샌더스',
    englishName: 'Dr. Sanders',
    role: '든든한 상담 전문가',
    description: 'AI 챗봇 상담사로 당신의 마음을 들어드립니다',
    image: '/assets/characters/doctor-sanders.png',
    route: '/chat/sanders',
  },
  {
    id: 'gravy',
    name: '널스 그레이비',
    englishName: 'Nurse Gravy',
    role: '마음 건강 간호사',
    description: '심리 자가진단 도구를 제공합니다',
    image: '/assets/characters/nurse-gravy.png',
    route: '/links/gravy',
  },
  {
    id: 'winky',
    name: '윙키',
    englishName: 'Winky',
    role: '활기 넘치는 응원 요정',
    description: '따뜻한 응원 메시지를 전달합니다',
    image: '/assets/characters/winky.png',
    route: '/letter/winky',
  },
  {
    id: 'buddy',
    name: '버디',
    englishName: 'Buddy',
    role: '든든한 업무 파트너',
    description: '업무 관련 도구와 자료를 제공합니다',
    image: '/assets/characters/buddy.png',
    route: '/work/buddy',
  },
];

const CharacterSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const handleStart = () => {
    const character = characters.find(c => c.id === selectedCharacter);
    if (character) {
      navigate(character.route);
    }
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <AppHeader />
        <HeroBanner 
          title="대화 상대 선택" 
          subtitle="상담을 진행할 상대를 선택해주세요"
        />
        
        <Box
          sx={{
            padding: { xs: '16px', sm: '20px', md: '24px 16px' },
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              selected={selectedCharacter === character.id}
              onClick={() => setSelectedCharacter(character.id)}
            />
          ))}

          <Box sx={{ width: '100%', maxWidth: '370px', marginTop: '8px' }}>
            <KFCButton
              variant="contained"
              fullWidth
              onClick={handleStart}
              disabled={!selectedCharacter}
              sx={{ 
                height: '48px',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '-0.48px',
              }}
            >
              시작하기
            </KFCButton>
          </Box>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default CharacterSelectionPage;
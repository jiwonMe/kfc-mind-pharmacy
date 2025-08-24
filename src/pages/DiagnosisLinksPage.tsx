import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import AppHeader from '../components/AppHeader';
import CharacterProfileCard from '../components/CharacterProfileCard';
import ResponsiveContainer from '../components/ResponsiveContainer';

const diagnosisLinks = [
  { id: 1, title: '번아웃 자가진단', url: 'https://www.maum-sopoong.or.kr/burnout-syndrome-self-diagnosis-test' },
  { id: 2, title: '스트레스 자가진단', url: 'https://www.maum-sopoong.or.kr/stress-self-diagnosis-test' },
  { id: 3, title: '무기력증 자가진단', url: 'https://www.maum-sopoong.or.kr/lethargy-self-diagnosis-test' },
  { id: 4, title: '성인 ADHD 자가진단', url: 'https://www.maum-sopoong.or.kr/adult-adhd-self-diagnosis-test' },
  { id: 5, title: '고독감 자가진단', url: 'https://www.maum-sopoong.or.kr/feeling-of-loneliness-self-diagnosis-test' },
  { id: 6, title: '자존감 자가진단', url: 'https://www.maum-sopoong.or.kr/self-esteem-self-diagnosis-test' },
];

const DiagnosisLinksPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState<number | null>(null); // 기본 선택 없음

  const handleLinkClick = (link: typeof diagnosisLinks[0]) => {
    setSelectedLink(link.id);
    // Open external link
    setTimeout(() => {
      window.open(link.url, '_blank');
      // Reset selection after opening link
      setTimeout(() => setSelectedLink(null), 500);
    }, 100);
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <AppHeader />
        <Box sx={{ padding: '0 16px' }}>
          <CharacterProfileCard
            name="널스 그레이비"
            role="언제나 열려있는 마음 진단 간호사입니다"
            image="/assets/characters/nurse-gravy.png"
          />
        </Box>
      
        <Box sx={{ padding: '16px' }}>
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
              margin: '0 auto 24px',
            }}
          >
          <Typography sx={{ fontSize: 20 }}>🩹</Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: '#000000',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            원하시는 자가진단을 진행해보세요
          </Typography>
        </Box>

          {/* 자가진단 링크 목록 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            {diagnosisLinks.map((link) => (
              <Box
                key={link.id}
                onClick={() => handleLinkClick(link)}
                sx={{
                  width: '100%',
                  maxWidth: '370px',
                  height: '56px',
                  backgroundColor: selectedLink === link.id ? '#E2292D' : '#EDEDED',
                  borderRadius: '24px',
                  padding: '16px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  },
                }}
              >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: selectedLink === link.id ? '#FFFFFF' : '#000000',
                  fontFamily: '"Wanted Sans Variable", sans-serif',
                }}
              >
                {link.title}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 하단 안내문 */}
        <Typography
          sx={{
            fontSize: 12,
            color: '#898989',
            textAlign: 'center',
            marginTop: '24px',
            fontFamily: '"Wanted Sans Variable", sans-serif',
          }}
        >
          외부 자가진단 링크로 이동합니다
        </Typography>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default DiagnosisLinksPage;
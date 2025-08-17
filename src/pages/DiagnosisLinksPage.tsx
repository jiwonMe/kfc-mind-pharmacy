import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import AppHeader from '../components/AppHeader';
import CharacterProfileCard from '../components/CharacterProfileCard';
import ResponsiveContainer from '../components/ResponsiveContainer';

const diagnosisLinks = [
  { id: 1, title: '우울증 자가 진단', url: 'https://example.com/phq9' },
  { id: 2, title: '스트레스 자가 진단', url: 'https://example.com/pss' },
  { id: 3, title: '불안증 자가 진단', url: 'https://example.com/gad7' },
  { id: 4, title: '번아웃 자가 진단', url: 'https://example.com/mbi' },
  { id: 5, title: '강박증 자가 진단', url: 'https://example.com/ybocs' },
  { id: 6, title: 'ADHD 자가 진단', url: 'https://example.com/asrs' },
  { id: 7, title: '조울증 자가 진단', url: 'https://example.com/mdq' },
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
        <CharacterProfileCard
          name="널스 그레이비"
          role="마음 건강 간호사"
          image="/assets/characters/nurse-gravy.png"
        />
      
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
          <InfoIcon sx={{ color: '#898989', fontSize: 24 }} />
          <Typography
            sx={{
              fontSize: 14,
              color: '#000000',
              fontFamily: '"Wanted Sans", sans-serif',
            }}
          >
            하단에서 자가진단을 진행해보세요
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
                  fontFamily: '"Wanted Sans", sans-serif',
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
            fontFamily: '"Wanted Sans", sans-serif',
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
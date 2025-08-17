import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import AppHeader from '../components/AppHeader';
import CharacterProfileCard from '../components/CharacterProfileCard';
import ResponsiveContainer from '../components/ResponsiveContainer';

const workMenuItems = [
  { id: 1, title: 'KFC 업무 메뉴얼', route: '/work/manual' },
  { id: 2, title: '공지사항', route: '/work/notices' },
  { id: 3, title: 'ROCC', route: '/work/rocc' },
  { id: 4, title: '내 캘린더 확인', route: '/work/calendar' },
];

const WorkMenuPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null); // 기본 선택 없음

  const handleMenuClick = (item: typeof workMenuItems[0]) => {
    setSelectedMenu(item.id);
    // Navigate to work menu item
    console.log('Navigate to:', item.route);
    // Simulate navigation and reset selection
    setTimeout(() => {
      // navigate(item.route);
      setSelectedMenu(null);
    }, 300);
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <AppHeader />
        <CharacterProfileCard
          name="버디"
          role="든든한 업무 파트너"
          image="/assets/characters/buddy.png"
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
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            하단 메뉴에서 필요한 메뉴를 선택하세요
          </Typography>
        </Box>

          {/* 업무 메뉴 목록 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            {workMenuItems.map((item) => (
              <Box
                key={item.id}
                onClick={() => handleMenuClick(item)}
                sx={{
                  width: '100%',
                  maxWidth: '370px',
                  height: '56px',
                  backgroundColor: selectedMenu === item.id ? '#E2292D' : '#EDEDED',
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
                  color: selectedMenu === item.id ? '#FFFFFF' : '#000000',
                  fontFamily: '"Wanted Sans Variable", sans-serif',
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default WorkMenuPage;
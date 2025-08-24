import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CampaignIcon from '@mui/icons-material/Campaign';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppHeader from '../components/AppHeader';
import CharacterProfileCard from '../components/CharacterProfileCard';
import ResponsiveContainer from '../components/ResponsiveContainer';

const workMenuItems = [
  { 
    id: 1, 
    title: 'KFC 업무 메뉴얼', 
    route: '/work/manual',
    icon: MenuBookIcon,
    color: '#4A90E2'
  },
  { 
    id: 2, 
    title: '공지사항', 
    route: '/work/notices',
    icon: CampaignIcon,
    color: '#F5A623'
  },
  { 
    id: 3, 
    title: 'ROCC(위생점검)', 
    route: '/work/rocc',
    icon: HealthAndSafetyIcon,
    color: '#7ED321'
  },
  { 
    id: 4, 
    title: '내 캘린더 확인', 
    route: '/work/calendar',
    icon: CalendarMonthIcon,
    color: '#BD10E0'
  },
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
        <Box sx={{ padding: '0 16px' }}>
          <CharacterProfileCard
            name="버디"
            role="똑 부러지는 업무 파트너 버디입니다"
            image="/assets/characters/buddy.png"
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
          <Typography sx={{ fontSize: 20 }}>💼</Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: '#000000',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            필요한 업무 메뉴를 선택하세요
          </Typography>
        </Box>

          {/* 업무 메뉴 그리드 */}
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              maxWidth: '370px',
              margin: '0 auto',
            }}
          >
            {workMenuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Box
                  key={item.id}
                  onClick={() => handleMenuClick(item)}
                  sx={{
                    aspectRatio: '1',
                    backgroundColor: selectedMenu === item.id ? '#E2292D' : '#FFFFFF',
                    border: '1px solid #EDEDED',
                    borderRadius: '24px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      borderColor: item.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: selectedMenu === item.id ? '#FFFFFF' : item.color + '20',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent 
                      sx={{ 
                        fontSize: 28,
                        color: selectedMenu === item.id ? '#E2292D' : item.color,
                      }} 
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: selectedMenu === item.id ? '#FFFFFF' : '#242424',
                      fontFamily: '"Wanted Sans Variable", sans-serif',
                      textAlign: 'center',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default WorkMenuPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppHeader from '../components/AppHeader';
import HeroBanner from '../components/HeroBanner';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { KFCButton } from '../components/KFCButton';
import { KFCTextField } from '../components/KFCTextField';

const profileIcons = [
  { id: 1, src: '/assets/characters/doctor-sanders.png', name: '닥터 샌더스' },
  { id: 2, src: '/assets/characters/nurse-gravy.png', name: '널스 그레이비' },
  { id: 3, src: '/assets/characters/winky.png', name: '윙키' },
  { id: 4, src: '/assets/characters/buddy.png', name: '버디' },
];

const ProfileSetupPage: React.FC = () => {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

  const handleCreateProfile = () => {
    // TODO: API 연동
    console.log('Profile:', { profileName, selectedIcon });
    navigate('/characters');
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <AppHeader />
        <HeroBanner title="프로필 설정" showPattern />
      
      <Box
        sx={{
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        {/* 프로필 이름 입력 */}
        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: '#000000',
              marginBottom: '8px',
              fontFamily: '"Wanted Sans", sans-serif',
            }}
          >
            프로필 이름
          </Typography>
          <KFCTextField
            placeholder="사용하실 이름을 입력해주세요"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            fullWidth
          />
        </Box>

        {/* 프로필 아이콘 선택 */}
        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: '#000000',
              marginBottom: '4px',
              fontFamily: '"Wanted Sans", sans-serif',
            }}
          >
            프로필 아이콘
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: '#898989',
              marginBottom: '16px',
              fontFamily: '"Wanted Sans", sans-serif',
            }}
          >
            프로필에 사용할 이미지를 선택해주세요
          </Typography>
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
            }}
          >
            {profileIcons.map((icon) => (
              <Box
                key={icon.id}
                onClick={() => setSelectedIcon(icon.id)}
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '16px',
                  border: selectedIcon === icon.id ? '3px solid #E2292D' : '3px solid transparent',
                  backgroundColor: '#F5F5F5',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={icon.src}
                  alt={icon.name}
                  sx={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain',
                  }}
                />
                {selectedIcon === icon.id && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#E2292D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'white', fontSize: '16px' }}>✓</Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* 프로필 생성 버튼 */}
        <KFCButton
          variant="contained"
          fullWidth
          onClick={handleCreateProfile}
          disabled={!profileName || !selectedIcon}
        >
          프로필 생성하기
        </KFCButton>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default ProfileSetupPage;
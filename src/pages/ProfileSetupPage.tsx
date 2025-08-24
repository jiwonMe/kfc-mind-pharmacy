import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileName, setProfileName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<number | string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleCreateProfile = () => {
    // TODO: API 연동
    console.log('Profile:', { profileName, selectedIcon, uploadedImage });
    navigate('/characters');
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setUploadedImage(result);
        setSelectedIcon('uploaded');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
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
              fontFamily: '"Wanted Sans Variable", sans-serif',
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
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            프로필 아이콘
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: '#898989',
              marginBottom: '16px',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            프로필에 사용할 이미지를 선택하거나 직접 업로드해주세요
          </Typography>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '16px',
            }}
          >
            {/* Upload button */}
            <Box
              onClick={handleUploadClick}
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                borderRadius: '16px',
                border: selectedIcon === 'uploaded' ? '3px solid #E2292D' : '3px solid #EDEDED',
                backgroundColor: uploadedImage ? '#FFFFFF' : '#FAFAFA',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#F5F5F5',
                },
              }}
            >
              {uploadedImage ? (
                <Box
                  component="img"
                  src={uploadedImage}
                  alt="Uploaded profile"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '13px',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <AddPhotoAlternateIcon 
                    sx={{ 
                      fontSize: 32, 
                      color: '#898989' 
                    }} 
                  />
                  <Typography 
                    sx={{ 
                      fontSize: 10, 
                      color: '#898989',
                      fontFamily: '"Wanted Sans Variable", sans-serif',
                    }}
                  >
                    업로드
                  </Typography>
                </Box>
              )}
              {selectedIcon === 'uploaded' && uploadedImage && (
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

            {/* Default profile icon */}
            <Box
              onClick={() => {
                setSelectedIcon('default');
                setUploadedImage(null);
              }}
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                borderRadius: '16px',
                border: selectedIcon === 'default' ? '3px solid #E2292D' : '3px solid transparent',
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
                src="/assets/default-profile.svg"
                alt="기본 프로필"
                sx={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'contain',
                }}
              />
              {selectedIcon === 'default' && (
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

            {/* Existing character icons */}
            {profileIcons.slice(0, 2).map((icon) => (
              <Box
                key={icon.id}
                onClick={() => {
                  setSelectedIcon(icon.id);
                  setUploadedImage(null);
                }}
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

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
            }}
          >
            {profileIcons.slice(2).map((icon) => (
              <Box
                key={icon.id}
                onClick={() => {
                  setSelectedIcon(icon.id);
                  setUploadedImage(null);
                }}
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
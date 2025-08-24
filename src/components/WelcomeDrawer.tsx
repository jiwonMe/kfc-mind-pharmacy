import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { KFCButton } from './KFCButton';

interface WelcomeDrawerProps {
  open: boolean;
  onClose: () => void;
}

const WelcomeDrawer: React.FC<WelcomeDrawerProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    onClose();
    navigate('/letter/winky');
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          padding: '24px',
          paddingBottom: '32px',
          width: '100%',
          backgroundColor: '#FFF9F0',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: -8,
            top: -8,
            color: '#898989',
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000000',
              fontFamily: '"Elice DX Neolli", "Wanted Sans Variable", sans-serif',
              textAlign: 'center',
              marginTop: 2,
            }}
          >
            윙키에게서 편지가 도착했어요!
          </Typography>

          {/* Winky character */}
          <Box
            sx={{
              width: 160,
              height: 160,
              borderRadius: '50%',
              backgroundColor: '#FFE8C8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src="/assets/characters/winky-with-letter.png"
              alt="Winky"
              sx={{
                width: '140px',
                height: '140px',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Button */}
          <KFCButton
            variant="contained"
            fullWidth
            onClick={handleConfirm}
            sx={{
              height: '52px',
              fontSize: '16px',
              fontWeight: 600,
              backgroundColor: '#2C2C2C',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#1C1C1C',
              },
            }}
          >
            확인하러 가기
          </KFCButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default WelcomeDrawer;
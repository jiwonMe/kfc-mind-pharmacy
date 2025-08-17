import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '4.8px',
        padding: '16px',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}
      onClick={() => navigate('/')}
    >
      <Box
        component="img"
        src="/assets/kfc-logo.svg"
        alt="KFC Logo"
        sx={{
          width: 24,
          height: 24,
        }}
      />
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#E2292D',
          fontFamily: '"Elice DX Neolli", "Wanted Sans Variable", sans-serif',
          letterSpacing: '-0.24px',
        }}
      >
        KFC Mind Pharmacy
      </Typography>
    </Box>
  );
};

export default AppHeader;
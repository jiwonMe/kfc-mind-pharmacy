import React from 'react';
import Box from '@mui/material/Box';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: string | number;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  maxWidth = '402px' 
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: maxWidth, md: maxWidth },
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        boxShadow: { 
          xs: 'none', 
          sm: '0 0 20px rgba(0,0,0,0.1)',
          md: '0 0 30px rgba(0,0,0,0.15)',
        },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
};

export default ResponsiveContainer;
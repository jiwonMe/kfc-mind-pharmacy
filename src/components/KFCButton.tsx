import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  height: '48px',
  borderRadius: '24px',
  fontSize: '16px',
  fontWeight: 600,
  letterSpacing: '-0.48px',
  textTransform: 'none',
  transition: 'all 0.2s ease',
  backgroundColor: '#242424',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#1a1a1a',
    transform: 'translateY(-1px)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
  '&:disabled': {
    backgroundColor: '#CCCCCC',
    color: '#999999',
  },
});

export const KFCButton: React.FC<any> = ({
  children,
  fullWidth,
  ...props
}) => {
  return (
    <StyledButton
      variant="contained"
      disableElevation
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)<{ selected?: boolean }>(
  ({ selected }) => ({
    width: '370px',
    height: '100px',
    borderRadius: '24px',
    padding: '16px 24px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: selected ? '#E2292D' : '#EDEDED',
    color: selected ? '#FFFFFF' : '#000000',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
  })
);

const CharacterImage = styled('img')({
  width: '106px',
  height: '106px',
  position: 'absolute',
  top: '-1px',
  right: '14px',
  objectFit: 'contain',
});

export const KFCCard: React.FC<any> = ({
  title,
  subtitle,
  image,
  selected = false,
  children,
  ...props
}) => {
  return (
    <StyledCard selected={selected} {...props}>
      <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {title && (
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '-0.4px',
                fontFamily: '"Elice DX Neolli OTF", sans-serif',
                color: 'inherit',
              }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '-0.42px',
                color: !selected ? '#636363' : 'inherit',
              }}
            >
              {subtitle}
            </Typography>
          )}
          {children}
        </Box>
        {image && <CharacterImage src={image} alt={title} />}
      </CardContent>
    </StyledCard>
  );
};
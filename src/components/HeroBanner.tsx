import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  height?: number;
  showPattern?: boolean;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundColor = '#E2292D',
  textColor = '#FFFFFF',
  height = 100,
  showPattern = false,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: `${height}px`,
        backgroundColor,
        borderRadius: '24px',
        padding: '16px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        overflow: 'hidden',
        margin: '16px',
        maxWidth: '370px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 'bold',
          color: textColor,
          fontFamily: '"Elice DX Neolli", "Wanted Sans Variable", sans-serif',
          letterSpacing: '-0.4px',
          lineHeight: 1,
          zIndex: 2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: textColor,
            fontFamily: '"Wanted Sans Variable", sans-serif',
            letterSpacing: '-0.42px',
            lineHeight: 1,
            marginTop: '4px',
            zIndex: 2,
          }}
        >
          {subtitle}
        </Typography>
      )}
      {showPattern && (
        <Box
          component="img"
          src="/assets/plus-pattern.svg"
          alt="Pattern"
          sx={{
            position: 'absolute',
            right: 24,
            top: 6,
            width: 121,
            height: 121,
            opacity: 0.3,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default HeroBanner;
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface CharacterProfileCardProps {
  name: string;
  role: string;
  image: string;
  backgroundColor?: string;
}

const CharacterProfileCard: React.FC<CharacterProfileCardProps> = ({
  name,
  role,
  image,
  backgroundColor = '#EDEDED',
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '370px',
        height: 100,
        backgroundColor,
        borderRadius: '24px',
        padding: '16px 24px',
        position: 'relative',
        margin: '16px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000000',
          fontFamily: '"Wanted Sans Variable", sans-serif',
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          color: '#626262',
          fontFamily: '"Wanted Sans Variable", sans-serif',
          marginTop: '4px',
        }}
      >
        {role}
      </Typography>
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          position: 'absolute',
          right: 14,
          top: -1,
          width: 106,
          height: 106,
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default CharacterProfileCard;
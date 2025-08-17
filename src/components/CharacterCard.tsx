import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export interface CharacterInfo {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  color?: string;
}

export interface CharacterCardProps {
  character: CharacterInfo;
  selected?: boolean;
  onClick?: () => void;
}

const StyledCharacterCard = styled(Box)<{ selected?: boolean }>(({ theme, selected }) => ({
  width: '100%',
  maxWidth: '370px',
  height: '100px',
  borderRadius: '24px',
  padding: '16px 24px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: selected ? '#E2292D' : '#EDEDED',
  color: selected ? '#FFFFFF' : '#000000',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '90px',
    padding: '14px 20px',
  },
}));

const CharacterImage = styled('img')(({ theme }) => ({
  width: '106px',
  height: '106px',
  position: 'absolute',
  right: '14px',
  top: '-1px',
  objectFit: 'contain',
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
    width: '90px',
    height: '90px',
    right: '10px',
    top: '0',
  },
}));

const CharacterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  zIndex: 1,
  maxWidth: 'calc(100% - 120px)',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'calc(100% - 100px)',
  },
}));

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  selected = false,
  onClick,
}) => {
  return (
    <StyledCharacterCard selected={selected} onClick={onClick}>
      <CharacterContent>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '-0.4px',
            fontFamily: '"Elice DX Neolli OTF", "Wanted Sans", sans-serif',
            color: 'inherit',
            lineHeight: 1,
            marginBottom: '4px',
          }}
        >
          {character.name}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '-0.42px',
            fontFamily: '"Wanted Sans", sans-serif',
            color: selected ? 'inherit' : '#636363',
            lineHeight: 1,
          }}
        >
          {character.role}
        </Typography>
      </CharacterContent>
      <CharacterImage src={character.image} alt={character.name} />
    </StyledCharacterCard>
  );
};

export const characters: CharacterInfo[] = [
  {
    id: 'dr-sanders',
    name: '닥터 샌더스',
    role: '든든한 상담 전문가',
    description: 'AI 챗봇 상담사로 당신의 마음을 들어드립니다',
    image: '/assets/characters/doctor-sanders.png',
  },
  {
    id: 'nurse-gravy',
    name: '널스 그레이비',
    role: '마음 건강 간호사',
    description: '심리 자가진단 도구를 제공합니다',
    image: '/assets/characters/nurse-gravy.png',
  },
  {
    id: 'winky',
    name: '윙키',
    role: '활기 넘치는 응원 요정',
    description: '따뜻한 응원 메시지를 전달합니다',
    image: '/assets/characters/winky.png',
  },
  {
    id: 'buddy',
    name: '버디',
    role: '든든한 업무 파트너',
    description: '업무 관련 도구와 자료를 제공합니다',
    image: '/assets/characters/buddy.png',
  },
];
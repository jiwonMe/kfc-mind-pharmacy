import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface WinkyMessage {
  id: number;
  title: string;
  subtitle: string;
  date: string;
}

interface WinkyMessageDrawerProps {
  open: boolean;
  onClose: () => void;
  onSelectMessage?: (messageId: number) => void;
  currentMessageId?: number;
}

const WinkyMessageDrawer: React.FC<WinkyMessageDrawerProps> = ({ 
  open, 
  onClose,
  onSelectMessage,
  currentMessageId 
}) => {
  const messages: WinkyMessage[] = [
    {
      id: 6,
      title: '윙키의 여섯번째 메시지',
      subtitle: '윙키의 편지',
      date: '오늘',
    },
    {
      id: 5,
      title: '윙키의 다섯번째 메시지',
      subtitle: '윙키의 편지',
      date: '어제',
    },
    {
      id: 4,
      title: '윙키의 네번째 메시지',
      subtitle: '윙키의 편지',
      date: '2일 전',
    },
    {
      id: 3,
      title: '윙키의 세번째 메시지',
      subtitle: '윙키의 편지',
      date: '3일 전',
    },
    {
      id: 2,
      title: '윙키의 두번째 메시지',
      subtitle: '윙키의 편지',
      date: '4일 전',
    },
    {
      id: 1,
      title: '윙키의 첫번째 메시지',
      subtitle: '윙키의 편지',
      date: '5일 전',
    },
  ];

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
          maxHeight: '70vh',
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Box>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000',
              fontFamily: '"Elice DX Neolli", "Wanted Sans Variable", sans-serif',
            }}
          >
            우편함
          </Typography>
          
          <IconButton 
            onClick={onClose} 
            sx={{ color: '#898989' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Message List */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px',
        }}>
          {messages.map((message) => (
            <Box
              key={message.id}
              onClick={() => onSelectMessage?.(message.id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                border: '1px solid #EDEDED',
                borderRadius: '16px',
                cursor: 'pointer',
                backgroundColor: message.id === currentMessageId ? '#FFF9F0' : '#FFFFFF',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: '#FFF9F0',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {/* Winky Avatar */}
              <Box
                sx={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#FFE8C8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src="/assets/characters/winky.png"
                  alt="Winky"
                  sx={{
                    width: '36px',
                    height: '36px',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              
              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography sx={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#242424',
                  marginBottom: '2px',
                  fontFamily: '"Wanted Sans Variable", sans-serif',
                }}>
                  {message.title}
                </Typography>
                <Typography sx={{
                  fontSize: 12,
                  color: '#626262',
                  fontFamily: '"Wanted Sans Variable", sans-serif',
                }}>
                  {message.subtitle}
                </Typography>
              </Box>

              {/* Date and Status */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '4px',
              }}>
                <Typography sx={{ 
                  fontSize: 11, 
                  color: '#898989',
                  fontFamily: '"Wanted Sans Variable", sans-serif',
                }}>
                  {message.date}
                </Typography>
                {message.id === currentMessageId && (
                  <Box
                    sx={{
                      backgroundColor: '#FFE8C8',
                      color: '#FFA500',
                      padding: '2px 8px',
                      borderRadius: '8px',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}
                  >
                    읽는 중
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default WinkyMessageDrawer;
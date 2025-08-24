import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { KFCButton } from './KFCButton';

interface Message {
  id: number;
  title: string;
  subtitle: string;
  icon: 'heart' | 'diamond' | 'fire' | 'coin';
  iconCount: number;
  date: string;
}

interface MessageListDrawerProps {
  open: boolean;
  onClose: () => void;
  onSelectMessage?: (messageId: number) => void;
}

const MessageListDrawer: React.FC<MessageListDrawerProps> = ({ 
  open, 
  onClose,
  onSelectMessage 
}) => {
  const messages: Message[] = [
    {
      id: 1,
      title: '일일 접속 보상 도착!',
      subtitle: '보상 받아가세요~',
      icon: 'heart',
      iconCount: 5,
      date: '6월 23시간',
    },
    {
      id: 2,
      title: '사전예약 선물 도착!',
      subtitle: '사전예약 선물 받아가세요!',
      icon: 'diamond',
      iconCount: 60,
      date: '6월 23시간',
    },
    {
      id: 3,
      title: '사전예약 선물 도착!',
      subtitle: '사전예약 선물 받아가세요!',
      icon: 'fire',
      iconCount: 1,
      date: '6월 23시간',
    },
    {
      id: 4,
      title: '카페 가입자 달성 보상 이벤트',
      subtitle: '1500명 가입 달성 보상',
      icon: 'coin',
      iconCount: 8000,
      date: '6월 23시간',
    },
    {
      id: 5,
      title: '카페 가입자 달성 보상 이벤트',
      subtitle: '1500명 가입 달성 보상',
      icon: 'diamond',
      iconCount: 10,
      date: '6월 23시간',
    },
    {
      id: 6,
      title: '퀘스트 완료 보상',
      subtitle: '[퀘스트!] 클리어 보상입니다!',
      icon: 'coin',
      iconCount: 300,
      date: '6월 23시간',
    },
  ];

  const getIcon = (type: string, count: number) => {
    const iconStyle = { 
      fontSize: 20,
      marginRight: '4px',
    };
    
    switch(type) {
      case 'heart':
        return (
          <>
            <FavoriteIcon sx={{ ...iconStyle, color: '#E91E63' }} />
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>x{count}</Typography>
          </>
        );
      case 'diamond':
        return (
          <>
            <DiamondIcon sx={{ ...iconStyle, color: '#E91E63' }} />
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>x{count}</Typography>
          </>
        );
      case 'fire':
        return (
          <>
            <LocalFireDepartmentIcon sx={{ ...iconStyle, color: '#FF9800' }} />
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>x{count}</Typography>
          </>
        );
      case 'coin':
        return (
          <>
            <MonetizationOnIcon sx={{ ...iconStyle, color: '#FFD700' }} />
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>x{count}</Typography>
          </>
        );
      default:
        return null;
    }
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
          padding: '16px',
          paddingBottom: '24px',
          maxHeight: '85vh',
          backgroundColor: '#2C2C2C',
        },
      }}
    >
      <Box>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '8px 8px 16px 8px',
        }}>
          {/* Resource indicators */}
          <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <FavoriteIcon sx={{ fontSize: 20, color: '#E91E63' }} />
              <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF' }}>
                MAX
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <DiamondIcon sx={{ fontSize: 20, color: '#E91E63' }} />
              <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF' }}>
                0
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MonetizationOnIcon sx={{ fontSize: 20, color: '#FFD700' }} />
              <Typography sx={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF' }}>
                900
              </Typography>
            </Box>
          </Box>
          
          <IconButton 
            onClick={onClose} 
            sx={{ 
              backgroundColor: '#3E3E3E',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#4E4E4E',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Tab headers */}
        <Box sx={{ 
          display: 'flex', 
          gap: '8px',
          marginBottom: '16px',
        }}>
          <Box sx={{
            flex: 1,
            padding: '12px',
            backgroundColor: '#56606B',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <Typography sx={{ 
              fontSize: 14, 
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>
              기본 우편함
            </Typography>
            <Box sx={{
              position: 'absolute',
              top: 4,
              right: 12,
              backgroundColor: '#E91E63',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              fontWeight: 'bold',
            }}>
              6
            </Box>
          </Box>
          <Box sx={{
            flex: 1,
            padding: '12px',
            backgroundColor: '#3E3E3E',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Typography sx={{ 
              fontSize: 14, 
              color: '#898989',
            }}>
              소셜 우편함
            </Typography>
          </Box>
        </Box>

        {/* Message List */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          maxHeight: '400px',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#4E4E4E',
            borderRadius: '2px',
          },
        }}>
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
              }}
            >
              {/* Avatar */}
              <Box
                sx={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#3E3E3E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Typography sx={{ 
                  fontSize: 10, 
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}>
                  달성<br/>스페셜
                </Typography>
              </Box>
              
              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography sx={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#242424',
                  marginBottom: '2px',
                }}>
                  {message.title}
                </Typography>
                <Typography sx={{
                  fontSize: 12,
                  color: '#626262',
                }}>
                  {message.subtitle}
                </Typography>
              </Box>

              {/* Icon and Button */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  minWidth: '60px',
                  justifyContent: 'center',
                }}>
                  {getIcon(message.icon, message.iconCount)}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Typography sx={{ fontSize: 10, color: '#898989' }}>
                    {message.date}
                  </Typography>
                  <KFCButton
                    variant="contained"
                    size="small"
                    sx={{
                      minWidth: '48px',
                      height: '24px',
                      fontSize: '11px',
                      padding: '0 8px',
                      backgroundColor: '#FFD700',
                      color: '#242424',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#FFC700',
                      },
                    }}
                  >
                    받기
                  </KFCButton>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Footer text */}
        <Typography sx={{
          fontSize: 11,
          color: '#898989',
          textAlign: 'center',
          marginTop: '16px',
        }}>
          우편 보유 수량 (6/100)
        </Typography>
        <Typography sx={{
          fontSize: 10,
          color: '#626262',
          textAlign: 'center',
          marginTop: '4px',
        }}>
          우편은 30일 후 자동 삭제 됩니다
        </Typography>

        {/* Bottom buttons */}
        <Box sx={{ 
          display: 'flex', 
          gap: '8px',
          marginTop: '16px',
        }}>
          <KFCButton
            variant="contained"
            fullWidth
            sx={{
              height: '44px',
              fontSize: '14px',
              fontWeight: 'bold',
              backgroundColor: '#56606B',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#66707B',
              },
            }}
          >
            하트제외 받기
          </KFCButton>
          <KFCButton
            variant="contained"
            fullWidth
            sx={{
              height: '44px',
              fontSize: '14px',
              fontWeight: 'bold',
              backgroundColor: '#FFD700',
              color: '#242424',
              '&:hover': {
                backgroundColor: '#FFC700',
              },
            }}
          >
            모두 받기
          </KFCButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MessageListDrawer;
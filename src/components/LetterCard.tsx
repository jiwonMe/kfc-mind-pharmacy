import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';

// Import assets from DESIGN.md - 실제 파일 경로
const envelopeTopSvg = '/assets/envelope-top.svg';
const envelopeBottomSvg = '/assets/envelope-bottom.svg';
const letterLineSvg = '/assets/letter-line.svg';

export interface LetterCardProps {
  message: string;
  recipientName?: string;
  sender?: string;
  messageNumber?: number;
  showAnimation?: boolean;
  showEnvelope?: boolean;
  useAssets?: boolean;
  autoHeight?: boolean;
  width?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  fontSize?: string | number;
  lineHeight?: string | number;
  padding?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  envelopeColor?: string;
}

const letterSlideIn = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const envelopeOpen = keyframes`
  0% {
    transform: translateX(-50%) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(50px);
  }
`;

export const LetterCard: React.FC<LetterCardProps> = ({
  message,
  recipientName = 'OOO',
  sender = '윙키',
  messageNumber,
  showAnimation = true,
  showEnvelope = true,
  useAssets = true,
  autoHeight = true,
  width = 352,
  minHeight = 280,
  maxHeight = 500,
  fontSize = 16,
  lineHeight = 1.5,
  padding = 24,
  backgroundColor = '#FFF8EB',
  borderColor = '#FFD891',
  textColor = '#5D4820',
  envelopeColor = '#E2292D',
}) => {
  const [letterHeight, setLetterHeight] = useState<number | string>(minHeight);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Format message with recipient name
  const formattedMessage = recipientName ? `안녕하세요 ${recipientName}님!\n\n${message}` : message;

  // Auto-adjust height based on content
  useEffect(() => {
    if (autoHeight && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const paddingValue = typeof padding === 'number' ? padding * 2 : 48;
      const totalHeight = contentHeight + paddingValue + 80; // 80px for signature area
      
      const minH = typeof minHeight === 'number' ? minHeight : 280;
      const maxH = typeof maxHeight === 'number' ? maxHeight : 500;
      
      const finalHeight = Math.min(Math.max(totalHeight, minH), maxH);
      setLetterHeight(finalHeight);
    } else if (!autoHeight) {
      setLetterHeight(minHeight);
    }
  }, [message, recipientName, autoHeight, minHeight, maxHeight, padding, fontSize, lineHeight]);

  // Calculate responsive sizes
  const containerWidth = typeof width === 'number' ? `${width}px` : width;
  const containerHeight = typeof letterHeight === 'number' ? `${letterHeight}px` : letterHeight;
  const envelopeWidth = typeof width === 'number' ? `${width + 18}px` : `calc(${width} + 18px)`;
  const envelopeHeight = '215px'; // 봉투 높이는 고정
  const signatureBottom = '50px';
  const lineBottom = '57px';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        maxWidth: envelopeWidth,
        margin: '0 auto',
      }}
    >
      {messageNumber && (
        <Typography
          sx={{
            fontSize: 16,
            letterSpacing: '-0.48px',
            color: '#626262',
            textAlign: 'center',
            fontFamily: '"Wanted Sans", sans-serif',
            fontWeight: 500,
          }}
        >
          {sender}의 {messageNumber}번째 메시지
        </Typography>
      )}
      
      <Box
        sx={{
          width: containerWidth,
          position: 'relative',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: containerHeight,
            backgroundColor,
            border: `1px solid ${borderColor}`,
            borderRadius: 0,
            padding: typeof padding === 'number' ? `${padding}px` : padding,
            paddingBottom: '80px', // 서명 공간 확보
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            animation: showAnimation ? `${letterSlideIn} 0.6s ease-out` : 'none',
            zIndex: 2, // 편지지가 가장 아래 (봉투보다 뒤)
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          <Box
            ref={contentRef}
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: autoHeight ? 'flex-start' : 'center',
              flex: autoHeight ? 'none' : 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Hakgyoansim Nadeuri OTF", "Noto Sans KR", cursive, sans-serif',
                fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
                letterSpacing: '-0.48px',
                color: textColor,
                textAlign: 'center',
                lineHeight,
                whiteSpace: 'pre-line',
                wordBreak: 'keep-all',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {formattedMessage}
            </Typography>
          </Box>
        </Box>

        {showEnvelope && (
          <>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: envelopeWidth,
                height: envelopeHeight,
                pointerEvents: 'none',
                animation: showAnimation ? `${envelopeOpen} 0.8s ease-out 0.6s forwards` : 'none',
                zIndex: 5, // 봉투는 편지지 앞에
              }}
            >
              {/* 봉투 상단 (뚜껑) */}
              {useAssets ? (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '4.1%',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '96%',
                    zIndex: 2,
                    '& svg': {
                      width: '100%',
                      height: '100%',
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 370 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 7.83742C0 1.75832 7.21641 -1.43127 11.712 2.66082L180.288 156.107C182.959 158.538 187.041 158.538 189.712 156.107L358.288 2.66081C362.784 -1.43128 370 1.75832 370 7.83742V200C370 203.866 366.866 207 363 207H7C3.13401 207 0 203.866 0 200V7.83742Z" fill="${envelopeColor}CC"/>
                    </svg>`
                  }}
                />
              ) : (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '4.1%',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '96%',
                    background: `linear-gradient(135deg, ${envelopeColor} 0%, ${envelopeColor}88 50%, ${envelopeColor} 100%)`,
                    clipPath: 'polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%)',
                    zIndex: 2,
                  }}
                />
              )}
              
              {/* 봉투 하단 */}
              {useAssets ? (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '61.6%',
                    zIndex: 1,
                    '& svg': {
                      width: '100%',
                      height: '100%',
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 370 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 109L160.947 6.784C174.219 -1.64519 191.143 -1.74192 204.511 6.53499L370 109V125.5H0V109Z" fill="${envelopeColor}"/>
                    </svg>`
                  }}
                />
              ) : (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '61.6%',
                    background: `linear-gradient(180deg, ${envelopeColor}CC 0%, ${envelopeColor} 100%)`,
                    borderRadius: '0 0 8px 8px',
                    zIndex: 1,
                  }}
                />
              )}
            </Box>

            {useAssets ? (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: lineBottom,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '56.5%',
                  height: '1px',
                  zIndex: 3,
                  '& svg': {
                    width: '100%',
                    height: '1px',
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: `<svg preserveAspectRatio="none" width="100%" height="1" viewBox="0 0 199 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="199" y2="0.5" stroke="${borderColor}"/>
                  </svg>`
                }}
              />
            ) : (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: lineBottom,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '56.5%',
                  height: '1px',
                  backgroundColor: borderColor,
                  zIndex: 3,
                }}
              />
            )}
            
            <Typography
              sx={{
                fontFamily: '"Hakgyoansim Nadeuri OTF", "Noto Sans KR", cursive, sans-serif',
                fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
                color: textColor,
                textAlign: 'center',
                position: 'absolute',
                bottom: signatureBottom,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3, // 서명은 편지지 위, 봉투 아래
                whiteSpace: 'nowrap',
              }}
            >
              당신의 응원 요정 {sender} 올림
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};
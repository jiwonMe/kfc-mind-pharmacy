import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { KFCButton } from '../components/KFCButton';
import { KFCTextField } from '../components/KFCTextField';
import ResponsiveContainer from '../components/ResponsiveContainer';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // TODO: API 연동
    console.log('Login:', { username, password, rememberMe });
    navigate('/characters');
  };

  return (
    <ResponsiveContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: { xs: '40px 16px', sm: '60px 24px', md: '80px 32px' },
          position: 'relative',
        }}
      >
      {/* Logo Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: { xs: '12px', sm: '8px' },
          marginBottom: { xs: '40px', sm: '50px', md: '60px' },
        }}
      >
        <Box
          component="img"
          src="/assets/kfc-logo.svg"
          alt="KFC Logo"
          sx={{
            width: { xs: 48, sm: 40, md: 48 },
            height: { xs: 48, sm: 40, md: 48 },
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 20, md: 24 },
            fontWeight: 'bold',
            color: '#E2292D',
            fontFamily: '"Wanted Sans Variable", sans-serif',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          KFC Mind Pharmacy
        </Typography>
      </Box>

      {/* Login Form */}
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 400, md: 440 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '12px', sm: '16px', md: '20px' },
          px: { xs: 0, sm: 2, md: 3 },
        }}
      >
        <KFCTextField
          placeholder="아이디를 입력해주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <KFCTextField
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              sx={{
                color: '#898989',
                '&.Mui-checked': {
                  color: '#E2292D',
                },
                '& .MuiSvgIcon-root': { 
                  fontSize: { xs: 20, sm: 24, md: 28 },
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                color: '#000000',
                fontFamily: '"Wanted Sans Variable", sans-serif',
              }}
            >
              아이디 저장
            </Typography>
          }
        />

        <KFCButton
          variant="contained"
          fullWidth
          onClick={handleLogin}
          disabled={!username || !password}
          sx={{ 
            marginTop: { xs: '16px', sm: '20px', md: '24px' },
            height: { xs: '48px', sm: '52px', md: '56px' },
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
          }}
        >
          로그인
        </KFCButton>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '12px', sm: '24px' },
            marginTop: { xs: '12px', sm: '16px', md: '20px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', sm: '14px', md: '15px' },
              color: '#898989',
              fontFamily: '"Wanted Sans Variable", sans-serif',
              cursor: 'pointer',
              textDecoration: 'underline',
              '&:hover': {
                color: '#E2292D',
              },
            }}
            onClick={() => navigate('/signup')}
          >
            회원가입
          </Typography>
          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: '#EDEDED',
            }}
          >
            |
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '13px', sm: '14px', md: '15px' },
              color: '#898989',
              fontFamily: '"Wanted Sans Variable", sans-serif',
              cursor: 'pointer',
              textDecoration: 'underline',
              '&:hover': {
                color: '#E2292D',
              },
            }}
          >
            비밀번호 찾기
          </Typography>
        </Box>
      </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default LoginPage;
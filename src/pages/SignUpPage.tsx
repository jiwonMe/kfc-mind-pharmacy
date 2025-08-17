import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppHeader from '../components/AppHeader';
import HeroBanner from '../components/HeroBanner';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { KFCButton } from '../components/KFCButton';
import { KFCTextField } from '../components/KFCTextField';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [position, setPosition] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    // TODO: API 연동
    console.log('SignUp:', { username, password, position, agreeToTerms });
    navigate('/profile-setup');
  };

  return (
    <ResponsiveContainer>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <AppHeader />
        <HeroBanner title="회원가입" showPattern />
      
      <Box
        sx={{
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* 아이디 필드 */}
        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: '#000000',
              marginBottom: '8px',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            아이디
          </Typography>
          <KFCTextField
            placeholder="사용하실 아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
        </Box>

        {/* 비밀번호 섹션 */}
        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: '#000000',
              marginBottom: '4px',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            비밀번호
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: '#898989',
              marginBottom: '8px',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            알파벳과 숫자를 조합하여 8자 이상 입력해주세요
          </Typography>
          <KFCTextField
            placeholder="비밀번호를 입력해주세요"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <KFCTextField
            placeholder="비밀번호를 다시 입력해주세요"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            sx={{ marginTop: '8px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* 직급 필드 */}
        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: '#000000',
              marginBottom: '4px',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            직급
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: '#898989',
              marginBottom: '8px',
              fontFamily: '"Wanted Sans Variable", sans-serif',
            }}
          >
            직급 정보는 통계 분석을 위한 데이터 수집을 위해서만 사용됩니다
          </Typography>
          <Select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            displayEmpty
            fullWidth
            sx={{
              backgroundColor: '#EDEDED',
              borderRadius: '16px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select': {
                padding: '18px 16px',
                fontSize: 16,
                fontFamily: '"Wanted Sans Variable", sans-serif',
              },
            }}
          >
            <MenuItem value="" disabled>
              직급을 선택해주세요
            </MenuItem>
            <MenuItem value="manager">점장</MenuItem>
            <MenuItem value="assistant">부점장</MenuItem>
            <MenuItem value="shift">매니저</MenuItem>
            <MenuItem value="crew">크루</MenuItem>
          </Select>
        </Box>

        {/* 약관 동의 */}
        <FormControlLabel
          control={
            <Checkbox
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              sx={{
                color: '#898989',
                '&.Mui-checked': {
                  color: '#E2292D',
                },
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontSize: 14,
                color: '#000000',
                fontFamily: '"Wanted Sans Variable", sans-serif',
              }}
            >
              <span>이용약관에 동의합니다 </span>
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                이용약관
              </span>
            </Typography>
          }
        />

        {/* 가입 버튼 */}
        <KFCButton
          variant="contained"
          fullWidth
          onClick={handleSignUp}
          disabled={!username || !password || !confirmPassword || !position || !agreeToTerms}
        >
          가입하기
        </KFCButton>
        </Box>
      </Box>
    </ResponsiveContainer>
  );
};

export default SignUpPage;
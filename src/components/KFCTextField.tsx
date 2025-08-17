import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import type { TextFieldProps } from '@mui/material/TextField';

export interface KFCTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  isPassword?: boolean;
  showPasswordToggle?: boolean;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#EDEDED',
    height: '48px',
    '& fieldset': {
      borderColor: 'transparent',
      borderWidth: 0,
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E2292D',
      borderWidth: '2px',
    },
    '& input': {
      padding: '0 16px',
      height: '48px',
      fontSize: '16px',
      letterSpacing: '-0.48px',
      '&::placeholder': {
        color: '#898989',
        opacity: 1,
      },
    },
  },
  '& .MuiInputLabel-root': {
    display: 'none',
  },
}));

export const KFCTextField: React.FC<KFCTextFieldProps> = ({
  isPassword = false,
  showPasswordToggle = false,
  type,
  InputProps,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inputType = isPassword && !showPassword ? 'password' : type || 'text';

  return (
    <StyledTextField
      variant="outlined"
      fullWidth
      type={inputType}
      InputProps={{
        ...InputProps,
        endAdornment: isPassword && showPasswordToggle ? (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{
                color: '#898989',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : InputProps?.endAdornment,
      }}
      {...props}
    />
  );
};
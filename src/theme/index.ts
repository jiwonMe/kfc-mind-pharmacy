import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const theme = createTheme({
  palette,
  typography,
  components,
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
});

export default theme;
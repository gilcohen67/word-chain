import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
  },
});

export {
  lightTheme,
  darkTheme
};
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
      main: '#ffffff',
    },
    topBar: {
      main: '#000000'
    },
    alert: {
      main: '#ff9800',
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
    topBar: {
      main: '#000000',
    },
    alert: {
      main: '#ff9800',
    },
  },
});

export {
  lightTheme,
  darkTheme
};
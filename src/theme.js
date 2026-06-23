import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a6650', 
      light: '#f3faf8', 
      dark: '#084f3e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6b7280', 
      light: '#f3f4f6',
      dark: '#374151',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff4d4f', 
      light: '#ffeef0',
    },
    background: {
      default: '#fcfdfd',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
    divider: '#e5e7eb',
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#111827',
    },
    body1: {
      fontSize: '0.925rem',
      color: '#374151',
    },
    body2: {
      fontSize: '0.825rem',
      color: '#6b7280',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '10px 24px',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#0a6650',
          '&:hover': {
            backgroundColor: '#084f3e',
          },
          '&.Mui-disabled': {
            backgroundColor: '#e5e7eb',
            color: '#9ca3af',
          },
        },
        outlinedSecondary: {
          borderColor: '#e5e7eb',
          color: '#374151',
          '&:hover': {
            borderColor: '#d1d5db',
            backgroundColor: '#f9fafb',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          backgroundColor: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e5e7eb',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d1d5db',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0a6650',
          },
          '&.Mui-disabled': {
            backgroundColor: '#f3f4f6',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#e5e7eb',
            },
          },
        },
        input: {
          padding: '14px 16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#6b7280',
          transform: 'translate(14px, 14px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -9px) scale(0.75)',
            backgroundColor: '#ffffff',
            padding: '0 4px',
          },
        },
      },
    },
  },
});

export default theme;

import { createTheme } from '@mui/material/styles';

// Color palette
const colors = {
  primary: {
    main: '#00cbcc',
    light: '#00bbdf',
    dark: '#0099aa',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#000000',
    light: '#333333',
    dark: '#000000',
    contrastText: '#ffffff',
  },
  background: {
    default: '#FFF7EE',
    paper: '#FFFFFF',
    gradient: `
      repeating-linear-gradient(
        180deg,
        #FFF7EE 0%,
        #FFFFFF 50%,
        #FFF7EE 100%
      )
    `,
  },
  text: {
    primary: '#1e293b',
    secondary: '#64748b',
    disabled: '#94a3b8',
  },
  grey: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
};

// Typography settings
const typography = {
  fontFamily: '"Poppins", sans-serif',
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  h1: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    color: colors.text.primary,
  },
  h2: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1.3,
    color: colors.text.primary,
  },
  h3: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '1.75rem',
    lineHeight: 1.4,
    color: colors.text.primary,
  },
  h4: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.4,
    color: colors.text.primary,
  },
  h5: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.5,
    color: colors.text.primary,
  },
  h6: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5,
    color: colors.text.primary,
  },
  body1: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.6,
    color: colors.text.secondary,
  },
  body2: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color: colors.text.secondary,
  },
  button: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
};

// Component overrides
const components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: colors.background.gradient,
        backgroundSize: '100% 200vh',
        color: colors.text.primary,
        boxShadow: 'none',
        px: { xs: 2, md: 4, lg: 10 },
        py: 2,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        textTransform: 'capitalize',
        borderRadius: 0,
        minHeight: '40px',
        '&:hover': {
          background: `linear-gradient(120deg, ${colors.primary.main}, ${colors.primary.light})`,
        },
      },
      contained: {
        backgroundColor: colors.secondary.main,
        color: colors.secondary.contrastText,
        '&:hover': {
          background: `linear-gradient(120deg, ${colors.primary.main}, ${colors.primary.light})`,
        },
      },
      outlined: {
        borderColor: colors.primary.main,
        color: colors.primary.main,
        '&:hover': {
          background: colors.primary.main,
          color: colors.primary.contrastText,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {
      root: {
        '& .MuiInputBase-root': {
          fontFamily: '"Poppins", sans-serif',
        },
        '& .MuiInputLabel-root': {
          fontFamily: '"Poppins", sans-serif',
          color: colors.text.secondary,
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        fontFamily: '"Poppins", sans-serif',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: '1rem',
        padding: '12px 16px',
        '&:hover': {
          background: `linear-gradient(120deg, ${colors.primary.main}, ${colors.primary.light})`,
          color: colors.primary.contrastText,
        },
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundColor: colors.secondary.main,
        color: colors.secondary.contrastText,
        borderRadius: 0,
        minWidth: '300px',
        maxHeight: '70vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(255, 255, 255, 0.3)',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255, 255, 255, 0.15) transparent',
        msOverflowStyle: 'scrollbar',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        fontFamily: '"Poppins", sans-serif',
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: '"Poppins", sans-serif',
      },
    },
  },
};

// Spacing and breakpoints
const spacing = 8;
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

// Create the theme
const theme = createTheme({
  palette: colors,
  typography,
  components,
  spacing,
  breakpoints,
  shape: {
    borderRadius: 0,
  },
});

export default theme;
export { colors, typography, components };
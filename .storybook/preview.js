import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export const theme = createMuiTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    fontFamily: 'Circular, Arial',
    body2: {
        fontFamily: 'Noto Serif'
    },
    button: {
      fontSize: 14,
      fontWeight: 400,
      textTransform: 'normal',
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        fontFamily: 'Circular Bold, sans-serif',
      },
      body: {
        backgroundColor: '#fff',
        color: '#2b2b2b',
        fontSize: '16px',
        lineHeight: '1'
      }
    },
  },
  palette: {
    primary: {
      main: "#1273FA"
    },
    secondary: {
      main: "#FE971E"
  },
    error: {
      main: "#FF5E4F"
    },
    info: {
      main: "#28ABFA"
    },
    success: {
      main: "#64CD28"
    },
    warning: {
      main: "#FE971E"
    },
    neutral: {
      main: "#E0E0E0"
    }
  }
});
 
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

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
    h1: { fontFamily: 'Circular Bold, sans-serif' },
    h2: { fontFamily: 'Circular Bold, sans-serif' },
    h3: { fontFamily: 'Circular Bold, sans-serif' },
    h4: { fontFamily: 'Circular Bold, sans-serif' },
    h5: { fontFamily: 'Circular Bold, sans-serif' },
    h6: { fontFamily: 'Circular Bold, sans-serif' },
    subtitle1: { fontFamily: 'Circular Bold, sans-serif' },
    subtitle2: { fontFamily: 'Circular Bold, sans-serif' },
    body1: { fontFamily: 'Circular Book, sans-serif' },
    body2: { fontFamily: 'Circular Book, sans-serif' },
    fontFamily: 'Circular Bold, sans-serif',
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
      light: '#c2dbfe',
      main: '#1273f8',
      dark: '#0557d5',
    },
    secondary: {
      main: '#fff'
    },
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

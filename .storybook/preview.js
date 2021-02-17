import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    button: {
      fontSize: 14,
      fontWeight: 400,
      textTransform: 'normal',
      fontFamily: '"Circular",sans-serif'
    }
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
  },
  shadows: 'none'
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

// ThemeContext.js
import React, { createContext, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
const { theme } = require('./tailwind.config');
const colors = theme.extend.colors;

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary.DEFAULT,
    },
    secondary: {
      main: colors.secondary.DEFAULT,
    },
    background: {
      default: colors.background.DEFAULT,
      paper: '#ffffff',
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary.DEFAULT,
    },
    secondary: {
      main: colors.secondary.DEFAULT,
    },
    background: {
      default: colors.background.dark,
      paper: '#e0e1dd',
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
});

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

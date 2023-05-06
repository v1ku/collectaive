// src/App.jsx
import React, { useContext } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeContext, ThemeProvider as AppThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar/Navbar';
import ServerList from './components/Sidebar/ServerList/ServerList';
import ChannelList from './components/Sidebar/ChannelList/ChannelList';
import MainChatArea from './components/ChatWindow/MainChatArea/MainChatArea';
import MemberList from './components/ChatWindow/MemberList/MemberList';

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const themeClass = darkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`App ${themeClass}`}>
      <Navbar />
      <ServerList />
      <ChannelList />
      <MainChatArea />
      <MemberList />
    </div>
  );
};

const WrappedApp = () => {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <App />
    </AppThemeProvider>
  );
};

export default WrappedApp;

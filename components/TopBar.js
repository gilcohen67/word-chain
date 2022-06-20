import * as React from 'react';
import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Switch from '@mui/material/Switch';
import { DarkMode, LightMode } from '@mui/icons-material';
import { DarkModeContext } from '../pages/_app';
import useGlobalContext from '../src/GlobalContext';

export default function TopBar({ playPage }) {
  const { selectedTheme, setSelectedTheme } = useContext(DarkModeContext);
  const { dailyWords, setShowRules, setShowDefModal } = useGlobalContext();
  function toggleTheme() {
    setSelectedTheme(!selectedTheme);
  }
  function handleRulesClick() {
    setShowRules(true);
  }
  function handleDailyClick(e) {
    setShowDefModal(e.target.id);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" enableColorOnDark>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Word Chain
          </Typography>
          {playPage && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Start:
            <Button color="topBar" size="large" id="start" onClick={handleDailyClick}>{dailyWords[0].word}</Button>
          </Typography>}
          {playPage && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Goal:
            <Button color="topBar" size="large" id="goal" onClick={handleDailyClick}>{dailyWords[1].word}</Button>
          </Typography>}
          {!selectedTheme && <LightMode></LightMode>}
          {selectedTheme && <DarkMode></DarkMode>}
          <Switch onChange={toggleTheme} color="topBar" checked={selectedTheme} />
          <Button color="topBar" size="large" onClick={handleRulesClick}>Rules</Button>
          <Link href="/">
            <Button color="topBar" size="large">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
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
  const { dailyWords, setShowRules } = useGlobalContext();
  function toggleTheme() {
    setSelectedTheme(!selectedTheme);
  }
  function handleRulesClick() {
    setShowRules(true);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" enableColorOnDark>
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
            Start: {dailyWords[0].word}
          </Typography>}
          {playPage && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Goal: {dailyWords[1].word}
          </Typography>}
          {!selectedTheme && <LightMode></LightMode>}
          {selectedTheme && <DarkMode></DarkMode>}
          <Switch onChange={toggleTheme} color="topBar" checked={selectedTheme} />
          <Button color="topBar" onClick={handleRulesClick}>Rules</Button>
          <Link href="/">
            <Button color="topBar">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
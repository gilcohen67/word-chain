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
import { DarkMode, LightMode, RouterOutlined } from '@mui/icons-material';
import { DarkModeContext } from '../pages/_app';
import useGlobalContext from '../src/GlobalContext';
import { useRouter } from 'next/router'

export default function TopBar({ playPage, homePage }) {
  const { selectedTheme, setSelectedTheme } = useContext(DarkModeContext);
  const { dailyWords, setDailyWords, setHistory, setShowRules, setShowDefModal, setTimeline } = useGlobalContext();
  const router = useRouter();

  function toggleTheme() {
    setSelectedTheme(!selectedTheme);
  }

  function handleRulesClick() {
    setShowRules(true);
  }

  function handleDailyClick(e) {
    setShowDefModal(e.target.id);
  }

  function goHome(e) {
    e.preventDefault();
    playPage || homePage ? router.push('/') : window.location.replace('http://localhost:3000/');
  }

  return (
    <Box sx={{ flexGrow: 1, userSelect: 'none' }}>
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
            START:
            <Button color="topBar" size="large" id="start" onClick={handleDailyClick}>{dailyWords[0].word}</Button>
          </Typography>}
          {playPage && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GOAL:
            <Button color="topBar" size="large" id="goal" onClick={handleDailyClick}>{dailyWords[1].word}</Button>
          </Typography>}
          {!selectedTheme && <LightMode></LightMode>}
          {selectedTheme && <DarkMode></DarkMode>}
          <label aria-label={selectedTheme ? 'Dark Mode' : 'Light Mode'}>
            <Switch onChange={toggleTheme} color="topBar" checked={selectedTheme} />
          </label>
          <Button color="topBar" size="large" onClick={handleRulesClick}>Rules</Button>
          <Button color="topBar" size="large" onClick={goHome}>Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
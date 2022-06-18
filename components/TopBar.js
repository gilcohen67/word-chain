import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Switch from '@mui/material/Switch';
import { DarkMode, LightMode } from '@mui/icons-material';

export default function TopBar({ selectedTheme, setSelectedTheme }) {
  function toggleTheme() {
    setSelectedTheme(!selectedTheme);
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Word Chain
          </Typography>
          {!selectedTheme && <LightMode></LightMode>}
          {selectedTheme && <DarkMode></DarkMode>}
          <Switch onChange={toggleTheme} color="secondary" checked={selectedTheme} />
          <Link href="/">
            <Button color="secondary">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
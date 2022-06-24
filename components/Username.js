import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Button, TextField, Box, Alert } from '@mui/material';
import useGlobalContext from '../src/GlobalContext';
import Router from 'next/router';

export default function UsernameField() {
  const { username, setUsername, history } = useGlobalContext();
  const [showAlert, setShowAlert] = useState(false);
  function handleChange(e) {
    setUsername(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (username === '') {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false)
      }, 3000);
    } else {
      Router.push('/play');
    }
  }
  return (
    <>
      {showAlert && <Alert severity="warning" className={styles.alert}>Insert username first!</Alert>}
      <Box
        component="form"
        className={styles.newGame}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="username-field"
          label="Username"
          variant="outlined"
          onChange={handleChange}
          value={username}
        />
        <Button variant="outlined" type="submit">{history.length ? 'Continue' : 'New Game!'}</Button>
      </Box>
    </>
  );
}
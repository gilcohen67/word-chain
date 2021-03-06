import * as React from 'react';
import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { lightTheme, darkTheme } from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { GlobalContextProvider } from '../src/GlobalContext';
import Rules from '../components/Rules';
import DefinitionModal from '../components/DefinitionModal';
import Win from '../components/Win';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const DarkModeContext = createContext();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [selectedTheme, setSelectedTheme] = useState(true);
  const value = {
    selectedTheme,
    setSelectedTheme
  }
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="description" content="Word Chain daily game" />
        <meta charSet="utf-8" name="viewport" content="initial-scale=1, width=device-width" />
        <title>Word Chain</title>
      </Head>
      <ThemeProvider theme={selectedTheme ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DarkModeContext.Provider value={value}>
          <GlobalContextProvider>
            <Component {...pageProps} />
            <Rules />
            <DefinitionModal />
            <Win />
          </GlobalContextProvider>
        </DarkModeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export {
  DarkModeContext
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
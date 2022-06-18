import React, { useContext, createContext, useState } from 'react';

// TODO: add context for toggle theme
const GlobalContext = createContext();

export default function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
  const [dailyWords, setDailyWords] = useState(['', '']);

  const value = {
    dailyWords,
    setDailyWords
  };
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
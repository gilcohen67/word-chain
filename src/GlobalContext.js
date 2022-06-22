import { ContactPhoneSharp } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export default function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }) {
  const [dailyWords, setDailyWords] = useState([{}, {}]);
  const [currentWord, setCurrentWord] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [showDefModal, setShowDefModal] = useState('none');
  const [showWin, setShowWin] = useState(false);
  const [history, setHistory] = useState([]);
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    if ((dailyWords[0].thes === undefined || typeof dailyWords[0].thes === 'string') || (dailyWords[1].thes === undefined || typeof dailyWords[1].thes === 'string')) {
      axios.get('http://localhost:8080/words/daily')
        .then(({ data }) => {
          setDailyWords([data.start, data.goal]);
          setCurrentWord(data.start);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [dailyWords]);
  const value = {
    dailyWords,
    setDailyWords,
    currentWord,
    setCurrentWord,
    showRules,
    setShowRules,
    showDefModal,
    setShowDefModal,
    history,
    setHistory,
    showWin,
    setShowWin,
    timeline,
    setTimeline
  };
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
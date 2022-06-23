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
  const [idMap, setIdMap] = useState({})
  useEffect(() => {
    if ((dailyWords[0] === undefined) || (dailyWords[0].thes === undefined || typeof dailyWords[0].thes === 'string') || (dailyWords[1].thes === undefined || typeof dailyWords[1].thes === 'string')) {
      axios.get('http://localhost:8080/words/daily')
        .then(({ data }) => {
          setDailyWords(data);
          setCurrentWord(data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios.post('http://localhost:8080/words/daily', dailyWords)
        .then((res) => {
          if (res.status === 200) {
            console.log('word set already in DB')
          } else {
            console.log('saved new set of daily words');
          }
        })
        .catch(err => {
          console.log(err);
        })
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
    setTimeline,
    idMap,
    setIdMap,
  };
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
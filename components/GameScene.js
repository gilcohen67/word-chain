import { Container, Grid, Paper, Button } from "@mui/material";
import axios from "axios";
import styles from '../styles/Play.module.css';
import useGlobalContext from "../src/GlobalContext";

export default function GameScene() {
  const {
    currentWord,
    setCurrentWord,
    dailyWords,
    setShowWin,
    timeline,
    setTimeline,
    username,
  } = useGlobalContext();

  function handleWordClick(e) {
    if (e.detail > 1) {
      return;
    }
    const re = new RegExp(`${dailyWords[1].word}`)
    if (e.target.innerText.toLowerCase().match(re)) {
      setShowWin(true);
      timeline.push(e.target.innerText.toLowerCase());
      setTimeline(timeline);
      axios.post(
        `http://localhost:8080/leaderboards`,
        {
          username,
          moves: timeline.length - 1,
        })
        .catch((err) => {
          console.log('error saving score to leaderboards', err);
        })
    } else {
      axios.get(`http://localhost:8080/thesaurus/${e.target.innerText.toLowerCase()}`)
        .then(({ data }) => {
          setCurrentWord(data);
        })
        .catch((err) => {
          alert('Error with that word.. Maybe try another! SORRY!!!')
        });
    }
  }

  function spreadSynonyms() {
    const synonyms = [];
    currentWord.thes.meta.syns.forEach((synArray) => {
      synArray.forEach((syn) => {
        synonyms.push(syn);
      })
    });
    return synonyms.map((syn, idx) => (
      <Button key={idx} variant="outlined" size="large" color="secondary" className={styles.related} value={syn} onClick={handleWordClick}>{syn}</Button>
    ));
  }

  return (
    <Container className={styles.gameScene}>
      <h1>{`Current Word: ${currentWord.word}`}</h1>
      <Container className={styles.relatedContainer}>
        <h2>Definitions</h2>
        {currentWord.thes && currentWord.thes.shortdef.map((def, idx) => (
          <Paper key={idx} className={styles.related}>
            {def.split(' ').map((word, idx) => (
              <span key={idx} onClick={handleWordClick} className={styles.definition}> {word} </span>
            ))}
          </Paper>
        ))}
        <h2>Synonyms</h2>
        {currentWord.thes && spreadSynonyms()}
      </Container>
    </Container>
  )
}
import { Container, Grid, Paper, Button } from "@mui/material";
import axios from "axios";
import styles from '../styles/Play.module.css';
import useGlobalContext from "../src/GlobalContext";

export default function GameScene() {
  const { currentWord } = useGlobalContext();
  function handleWordClick(e) {
    console.log(e.target.innerText.toLowerCase())
  }
  return (
    <Container className={styles.gameScene}>
      <h1>{`Current Word: ${currentWord.word}`}</h1>
      {/* <h2>{currentWord.word}</h2> */}
      <Container className={styles.relatedContainer}>
          <h2>Definition</h2>
        <Paper className={styles.relatedPaper}>
          {/* <span>{currentWord.thes?.shortdef[0]}</span> */}
          {currentWord.thes?.shortdef && currentWord.thes?.shortdef[0].split(' ').map((defWord, idx) => (
            <span key={idx} value={defWord} onClick={handleWordClick}> {defWord} </span>
          ))}
        </Paper>
        <h2>Synonyms</h2>
        {currentWord.thes?.meta.syns[0].map((synonym, idx) => (
          <Button key={idx} variant="outlined" size="large" color="secondary" className={styles.relatedPaper} value={synonym} onClick={handleWordClick}>{synonym}</Button>
        ))}
      </Container>
    </Container>
  )
}
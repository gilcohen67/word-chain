import { Container, Grid, Paper, Button } from "@mui/material";
import axios from "axios";
import styles from '../styles/Play.module.css';
import useGlobalContext from "../src/GlobalContext";

export default function GameScene() {
  const { currentWord, setCurrentWord, dailyWords } = useGlobalContext();
  function handleWordClick(e) {
    console.log(e.target.innerText.toLowerCase())
    if (e.target.innerText.toLowerCase() === dailyWords[1].word) {

      return;
    }
    axios.get(`http://localhost:8080/thesaurus/${e.target.innerText.toLowerCase()}`)
      .then(({ data }) => {
        setCurrentWord(data);
      })
      .catch((err) => {
        alert('Error with that word.. Maybe try another! SORRYYY!!!')
      })
  }
  function spreadSynonyms() {
    const synonyms = [];
    currentWord.thes.meta.syns.forEach((synArray) => {
      synArray.forEach((syn) => {
        synonyms.push(syn);
      })
    });
    return synonyms.map((syn, idx) => (
      <Button key={idx} variant="outlined" size="large" color="secondary" className={styles.relatedPaper} value={syn} onClick={handleWordClick}>{syn}</Button>
    ));
  }

  return (
    <Container className={styles.gameScene}>
      <h1>{`Current Word: ${currentWord.word}`}</h1>
      {/* <h2>{currentWord.word}</h2> */}
      <Container className={styles.relatedContainer}>
        <h2>Definitions</h2>
        {currentWord.thes && currentWord.thes.shortdef.map((def, idx) => (
          <Paper key={idx} className={styles.relatedPaper}>
            {def.split(' ').map((word, idx) => (
              <span key={idx} onClick={handleWordClick}> {word} </span>
            ))}
          </Paper>
        ))}
        <h2>Synonyms</h2>
        {currentWord.thes && spreadSynonyms()}
        {/* <Button key={idx} variant="outlined" size="large" color="secondary" className={styles.relatedPaper} value={synonym} onClick={handleWordClick}>{synonym}</Button> */}

      </Container>
    </Container>
  )
}
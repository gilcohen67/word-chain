import { Container, Grid, Paper } from "@mui/material";
import axios from "axios";
import styles from '../styles/Play.module.css';
import useGlobalContext from "../src/GlobalContext";

export default function GameScene() {
  const { currentWord } = useGlobalContext();
  return (
    <Container className={styles.gameScene}>
      <div>{currentWord.word}</div>
      <div>Related Options</div>
        <Container className={styles.relatedContainer}>
        <Paper className={styles.relatedPaper}>Short Definition</Paper>
        <Paper className={styles.relatedPaper}>Synonym1</Paper>
        <Paper className={styles.relatedPaper}>Synonym2</Paper>
        <Paper className={styles.relatedPaper}>Synonym3</Paper>
        <Paper className={styles.relatedPaper}>Synonym4</Paper>
        <Paper className={styles.relatedPaper}>Synonym5</Paper>
        </Container>
    </Container>
  )
}
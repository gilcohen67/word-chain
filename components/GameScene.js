import { Container, Grid, Paper } from "@mui/material";
import styles from '../styles/Play.module.css';

export default function GameScene() {
  return (
    <Container className={styles.gameScene}>
      <div >Current Stuffs</div>
      <div>Related Options</div>
        <Container className={styles.relatedContainer}>
        <Paper className={styles.relatedPaper}>Short Definition</Paper>
        <Paper className={styles.relatedPaper}>Related1</Paper>
        <Paper className={styles.relatedPaper}>Related2</Paper>
        <Paper className={styles.relatedPaper}>Related3</Paper>
        <Paper className={styles.relatedPaper}>Related4</Paper>
        <Paper className={styles.relatedPaper}>Related5</Paper>
        </Container>
    </Container>
  )
}
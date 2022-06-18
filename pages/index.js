import styles from '../styles/Home.module.css'
import Home from '../components/index.sample';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Card } from '@mui/material';
import TopBar from '../components/TopBar';
import useGlobalContext from '../src/GlobalContext';
import randomWords from 'random-words';


export default function Welcome() {
  const { setDailyWords } = useGlobalContext();
  function handleNewGame() {
    setDailyWords(randomWords({exactly: 2}));
  }
  return (
    <div>
      <Head>
        <title>Word Chain MVP</title>
      </Head>
      <main>
        <TopBar />
        <div className={styles.main}>
          <h1 className={styles.title}>Welcome to Word Chain</h1>
          <p>
            {new Date().toLocaleDateString('en-US')}</p>
          <div className={styles.grid}>
            <div className={styles.card}>{'Start Today\'s Challenge'}</div>
            <Link href="/play">
              <Button variant="outlined" onClick={handleNewGame}>New Game!</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
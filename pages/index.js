import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Card } from '@mui/material';
import TopBar from '../components/TopBar';
import Leaderboard from '../components/LeaderBoard';
import useGlobalContext from '../src/GlobalContext';

export default function Welcome() {
  const { history } = useGlobalContext();
  return (
    <div>
      <TopBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Word Chain</h1>
        <p>
          {new Date().toLocaleDateString('en-US')}</p>
        <div className={styles.grid}>
          {!history.length && <div className={styles.card}>{'Start Today\'s Challenge'}</div>}
          <Link href="/play">
            <Button variant="outlined">{history.length ? 'Continue' : 'New Game!'}</Button>
          </Link>
        </div>
      <Leaderboard />
      </main>
    </div>
  )
}
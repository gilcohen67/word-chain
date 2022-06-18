import styles from '../styles/Home.module.css'
import Home from '../components/index.sample';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Card } from '@mui/material';
import TopBar from '../components/TopBar';


export default function Welcome({ selectedTheme, setSelectedTheme }) {
  return (
    <div>
      <Head>
        <title>Word Chain MVP</title>
      </Head>
      <main>
        <TopBar selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}/>
        <div className={styles.main}>
          <h1 className={styles.title}>Welcome to Word Chain</h1>
          <p>
            {new Date().toLocaleDateString('en-US')}</p>
          <div className={styles.grid}>
            <div className={styles.card}>{'Start Today\'s Challenge'}</div>
            <Link href="/main">
              <Button variant="outlined">New Game!</Button>
            </Link>

          </div>
        </div>
      </main>
    </div>
  )
}
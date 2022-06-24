import React from 'react';
import styles from '../styles/Home.module.css';
import TopBar from '../components/TopBar';
import Leaderboard from '../components/LeaderBoard';
import useGlobalContext from '../src/GlobalContext';
import UsernameField from '../components/Username';

export default function Welcome() {
  const { history } = useGlobalContext();
  return (
    <div>
      <TopBar homePage/>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Word Chain</h1>
        <p>
          {new Date().toLocaleDateString('en-US')}</p>
        {!history.length && <div className={styles.card}>{'Start Today\'s Challenge'}</div>}
        <div className={styles.newGame}>
          <UsernameField />
        </div>
        <Leaderboard />
      </main>
    </div>
  )
}
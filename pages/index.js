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
      <TopBar homePage />
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Welcome to Word Chain</h1> */}
        {!history.length && <h2 style={{ marginTop: 75 }}>{'Start Today\'s Challenge'}</h2>}
        <h3>{new Date().toLocaleDateString('en-US')}</h3>
        <div className={styles.newGame}>
          <UsernameField />
        </div>
        <Leaderboard />
      </main>
    </div>
  )
}
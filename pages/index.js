import styles from '../styles/Home.module.css'
import Home from '../components/index.sample';
import Head from 'next/head';

export default function Welcome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Word Chain MVP</title>

      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Word Chain</h1>
        <p className={styles.description}>{new Date().toLocaleDateString('en-US')}</p>
        <div>
          <div>{'Start Today\'s Challenge'}</div>
          <button>New Game!</button>
        </div>


        <Home />
      </main>
    </div>
  )
}
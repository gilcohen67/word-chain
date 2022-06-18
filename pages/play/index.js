import HistoryTree from "../../components/HistoryTree";
import TopBar from "../../components/TopBar";
import GameScene from '../../components/GameScene';
import styles from '../../styles/Play.module.css'

export default function Play() {
  return (
    <main>
      <TopBar />
      <div className={styles.main}>
      <HistoryTree />
      <GameScene />
      </div>
    </main>
  )
}

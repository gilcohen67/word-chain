import HistoryTree from "../../components/HistoryTree";
import TopBar from "../../components/TopBar";
import GameScene from '../../components/GameScene';

export default function Play() {
  return (
    <main>
      <TopBar />
      <HistoryTree />
      <GameScene />


      <h1>Play the game</h1>
    </main>
  )
}
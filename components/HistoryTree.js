import React, { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import styles from '../styles/Play.module.css'
import useGlobalContext from '../src/GlobalContext';
import TreeDS from '../src/TreeDS';
import TimeLineDS from '../src/TimeLineDS';

export default function HistoryTree() {
  const { currentWord, setCurrentWord } = useGlobalContext();
  const [history, setHistory] = useState(new TreeDS(currentWord.word, true));
  // const [currentHistoryNode, setCurrentHistoryNode] = useState(history);
  const [timeLine, setTimeLine] = useState(new TimeLineDS());
  useEffect(() => {
    if (currentWord.word === undefined || currentWord.word === '') {
      return;
    }
    console.log('current Word::', currentWord.word);
    if (timeLine.check(currentWord.word)) {
      console.log('found in timeline returning...')
      setTimeLine(timeLine.add(currentWord.word));
      return;
    }
    setTimeLine(timeLine.add(currentWord.word));
    let node = new TreeDS(currentWord.word);
    history.allNodes[currentWord.word] = node;
    history.allNodes[currentWord.word].addChild(node);
    console.log('history', history)
    setHistory(history);
  }, [currentWord.word]);

  function handleDoubleClick(e) {
    console.log(e.target.innerText);
  }

  function renderHistory(node, id = 0) {
    id++;
    return (
      <TreeItem
        key={id}
        nodeId={id.toString()}
        label={node.value}
      >
        {node.children && node.children.map((child) => {
          return renderHistory(child, id++);
        })}
      </TreeItem>
    )
  }

  return (
    <div>
      <div className={styles.treeInstruction}>Click to expand</div>
      <div className={styles.treeInstruction}>Double Click to go back to previous word</div>
      <div className={styles.historyTree}>
        <TreeView
          aria-label="history tree"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, width: 'max-content' }}
          onDoubleClick={handleDoubleClick}
        >
          {renderHistory(history)}
        </TreeView>
      </div>
    </div>
  );
}
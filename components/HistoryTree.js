import React, { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import styles from '../styles/Play.module.css'
import useGlobalContext from '../src/GlobalContext';
import axios from 'axios';

export default function HistoryTree() {
  const {
    currentWord,
    setCurrentWord,
    history,
    setHistory,
    timeline,
    setTimeline,
  } = useGlobalContext();
  const [idMap, setIdMap] = useState({});
  const [lastWord, setLastWord] = useState(null);
  useEffect(() => {
    if (currentWord.word === undefined || currentWord.word === '') {
      return;
    }
    timeline.push(currentWord.word);
    setTimeline(timeline);
    if (idMap[currentWord.word] !== undefined) {
      setLastWord(currentWord.word);
      return;
    }
    history.push({ val: currentWord.word, parentVal: lastWord });
    setHistory(history);
    setIdMap(history.reduce((acc, el, i) => {
      acc[el.val] = i;
      return acc;
    }, {}));
    setLastWord(currentWord.word);
  }, [currentWord.word]);

  function handleDoubleClick(e) {
    axios.get(`http://localhost:8080/thesaurus/${e.target.innerText}`)
      .then(({ data }) => {
        setCurrentWord(data);
      })
      .catch((err) => {
        alert('Something went Wrong...');
      });
  }

  function renderHistory(parent = null) {
    return history.map((item, idx) => {
      if (item.parentVal === parent) {
        if (parent === null) {
          return (
            <TreeItem
              key={idMap[item.val]}
              nodeId={idMap[item.val].toString()}
              label={item.val}
            >
              {renderHistory(item.val)}
            </TreeItem>
          )
        }
        return (
          <TreeItem
            key={idMap[item.val]}
            nodeId={idMap[item.val].toString()}
            label={item.val}
          >
            {renderHistory(item.val)}
          </TreeItem>
        )
      }
    })
  }

  function createHistoryTree() {
    let root = undefined;
    history.forEach((el) => {
      if (el.parentVal === null) {
        root = el;
        return;
      }
      const parentEl = history[idMap[el.parentVal]];
      parentEl.children = [...(parentEl.children || []), el];
    });
    return root;
  }

  return (
    <div>
      <div className={styles.historyTree}>
        <TreeView
          aria-label="history tree"
          defaultCollapseIcon={<ExpandMoreIcon color="primary" />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, width: 'max-content' }}
          onDoubleClick={handleDoubleClick}
        >
          {renderHistory()}
        </TreeView>
      </div>
    </div>
  );
}
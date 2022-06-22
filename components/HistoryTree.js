import React, { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import styles from '../styles/Play.module.css'
import useGlobalContext from '../src/GlobalContext';
import TimelineDS from '../src/TimelineDS';
import axios from 'axios';

export default function HistoryTree() {
  const { currentWord, setCurrentWord } = useGlobalContext();
  const [hist, setHist] = useState([]);
  const [idMap, setIdMap] = useState({});
  const [lastWord, setLastWord] = useState(null);
  const [timeline, setTimeline] = useState(new TimelineDS());
  useEffect(() => {
    if (currentWord.word === undefined || currentWord.word === '') {
      return;
    }
    if (timeline.check(currentWord.word)) {
      setTimeline(timeline.add(currentWord.word));
      if (hist.length > 2) {
        setLastWord(currentWord.word);
      }
      return;
    }
    setTimeline(timeline.add(currentWord.word));
    hist.push({ val: currentWord.word, parentVal: lastWord });
    setHist(hist);
    setIdMap(hist.reduce((acc, el, i) => {
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
      })
  }

  function renderHistory(parent = null) {
    return hist.map((item, idx) => {
      if (item.parentVal === parent) {
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

  function createHistTree() {
    let root = undefined;
    hist.forEach((el) => {
      if (el.parentVal === null) {
        root = el;
        return;
      }
      const parentEl = hist[idMap[el.parentVal]];
      parentEl.children = [...(parentEl.children || []), el];
    });
    return root;
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
          {renderHistory()}
        </TreeView>
      </div>
    </div>
  );
}
import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import styles from '../styles/Play.module.css'

export default function HistoryTree() {
  function handleClick(e) {
    console.log(e.target.innerText);
  }
  return (
    <div>
      <div className={styles.treeInstruction}>Double Click to go back to previous word</div>
      <div className={styles.historyTree}>
        <TreeView
          aria-label="history tree"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, width: 'max-content' }}
          onDoubleClick={handleClick}
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="3" label="Documents">
            <TreeItem nodeId="4" label="OSS" />
            <TreeItem nodeId="5" label="MUI">
              <TreeItem nodeId="6" label="index.js" />
              <TreeItem nodeId="7" label="Applications">
                <TreeItem nodeId="8" label="Calendar" />
              </TreeItem>
              <TreeItem nodeId="9" label="Documents">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="11" label="MUI">
                  <TreeItem nodeId="12" label="index.js" />
                  <TreeItem nodeId="19" label="Applications">
                    <TreeItem nodeId="20" label="Calendar" />
                  </TreeItem>
                  <TreeItem nodeId="21" label="Documents">
                    <TreeItem nodeId="22" label="OSS" />
                    <TreeItem nodeId="23" label="MUI">
                      <TreeItem nodeId="24" label="index.js" />
                      <TreeItem nodeId="25" label="Applications">
                        <TreeItem nodeId="26" label="Calendar" />
                      </TreeItem>
                      <TreeItem nodeId="27" label="Documents">
                        <TreeItem nodeId="28" label="OSS" />
                        <TreeItem nodeId="29" label="MUI">
                          <TreeItem nodeId="30" label="index.js" />
                          <TreeItem nodeId="31" label='longer word'>
                            <TreeItem nodeId="32" label='longer word'>
                              <TreeItem nodeId="33" label='longer word'>
                                <TreeItem nodeId="34" label='longer word'>
                                  <TreeItem nodeId="35" label='longer word'>
                                    <TreeItem nodeId="36" label='longer word'>
                                      <TreeItem nodeId="37" label='longer word'>
                                        <TreeItem nodeId="38" label='longer word'>
                                          <TreeItem nodeId="39" label='longer word'>
                                            <TreeItem nodeId="40" label='longer word'>

                                            </TreeItem>
                                          </TreeItem>
                                        </TreeItem>
                                      </TreeItem>
                                    </TreeItem>
                                  </TreeItem>
                                </TreeItem>
                              </TreeItem>
                            </TreeItem>
                          </TreeItem>
                        </TreeItem>
                      </TreeItem>
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="13" label="Applications">
            <TreeItem nodeId="14" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="15" label="Documents">
            <TreeItem nodeId="16" label="OSS" />
            <TreeItem nodeId="17" label="MUI">
              <TreeItem nodeId="18" label="index.js" />
            </TreeItem>
          </TreeItem>
        </TreeView>
      </div>
    </div>
  );
}
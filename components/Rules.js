import * as React from 'react';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useGlobalContext from '../src/GlobalContext';
import Image from 'next/image';
import defExample from '../public/def-example.png';
import synExample from '../public/syn-example.png';
import histExample from '../public/hist-example.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #333',
  boxShadow: 24,
  p: 4,
  maxHeight: '90%',
  overflow: 'auto',
};

export default function Rules() {
  const { showRules, setShowRules } = useGlobalContext();
  const handleClose = () => setShowRules(false);

  return (
    <Modal
      open={showRules}
      onClose={handleClose}
      aria-labelledby="rules-title"
      aria-describedby="rules-goal"
    >
      <Box sx={style}>
        <Typography id="rules-title" variant="h4" component="h2">
          Word Chain Rules
        </Typography>
        <Typography id="rules-goal" sx={{ mt: 1 }}>
          Try to reach the GOAL word in the fewest moves.
        </Typography>
        <Typography sx={{ mt: 2 }} className="rules-description">
          Move by clicking a word.
        </Typography>
        <Typography sx={{ mt: 1 }} className="rules-description">
          Examples:
        </Typography>
        <Image
          alt="definition example"
          src={defExample}
          width="432px"
          height="110px"
        />
        <Image
          alt="definition example"
          src={synExample}
          width="432px"
          height="223px"
        />
        <Typography sx={{ mt: 2 }} className="rules-description">
          Click on history tree word to expand
        </Typography>
        <Typography className="rules-description">
          Double click to go back to a previous word
        </Typography>
        <Typography sx={{ mt: 1 }} className="rules-description">
          Examples:
        </Typography>
        <Image
          alt="definition example"
          src={histExample}
          width="416px"
          height="160px"
        />
      </Box>
    </Modal>
  );
}
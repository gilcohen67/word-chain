import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useGlobalContext from '../src/GlobalContext';
import Link from 'next/link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #333',
  boxShadow: 24,
  p: 4,
};

export default function Win() {
  const { timeline, showWin, setShowWin } = useGlobalContext();
  return (
    <Modal
      open={showWin}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          You Win!!!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {`You won in ${timeline.length - 1} moves`}
        </Typography>
        <Typography>
        <Link href="/timeline">
          <Button onClick={() => {setShowWin(false)}}>
            Your Timeline
          </Button>
        </Link>
        </Typography>
        <Typography>
        <Link href="/">
          <Button onClick={() => {setShowWin(false)}}>
            Home Page
          </Button>
        </Link>
        </Typography>
      </Box>
    </Modal>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useGlobalContext from '../src/GlobalContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Rules() {
  const { showRules, setShowRules } = useGlobalContext();
  const handleClose = () => setShowRules(false);

  return (
      <Modal
        open={showRules}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Word Chain Rules
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Click on a word
          </Typography>
        </Box>
      </Modal>
  );
}
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

export default function DefinitionModal() {
  const { dailyWords, showDefModal, setShowDefModal } = useGlobalContext();
  const handleClose = () => setShowDefModal('none');
  function word() {
    if (showDefModal === 'start') {
      return dailyWords[0].word;
    } else if (showDefModal === 'goal') {
      return dailyWords[1].word;
    }
  }
  function definition() {
    if (showDefModal === 'start') {
      return dailyWords[0].thes.shortdef[0];
    } else if (showDefModal === 'goal') {
      return dailyWords[1].thes.shortdef[0];
    }
  }
  return (
    <Modal
      open={(showDefModal !== 'none')}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {word()}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {definition()}
        </Typography>
      </Box>
    </Modal>
  );
}
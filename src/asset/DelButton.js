import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DeleteWinter } from './Data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'rgba(45,66,80,255)',
  boxShadow: 24,
  p: 4,
  borderRadius:'25px'
};

export default function DeleteButton(props) {

  const Arraydel = props?.selectedIdx;

  const Delsubmithandler = async(e) => {
    e.preventDefault();
    await DeleteWinter({Arraydel});
    props?.setRefresh(!props?.refresh);
    props?.DelhandleClose();
      window.location.reload();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props?.delopen}
        onClose={props?.DelhandleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props?.delopen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2" color="white">
              Delete Invoice
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} color="white">
              Are you sure you wanted to delete {props?.selectedIdx.length} selected invoices?
            </Typography>
            <br />

            <Button variant='outlined' size='large' onClick={Delsubmithandler} sx={{float:'right', width: '30%', marginLeft: '10px'}}>DELETE</Button>

            <Button onClick={props?.DelhandleClose} variant='outlined' size='large'  sx={{float:'right', width: '30%'}}>CANCEL</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
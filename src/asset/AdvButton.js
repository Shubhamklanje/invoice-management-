import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { AdvSearchDataBackend } from './Data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'rgba(45,66,80,255)',
  boxShadow: 24,
  p: 4,
  borderRadius:'25px'
};

export default function AdvButton(props) {

 
  const {doc_id, invoice_id, cust_number, buisness_year} = props?.Adv_Data;

  const AdvanceSearchChangeHandler = (e) => {
    const {name, value} = e.target;
    props?.setAdvanceSearchData({...props?.Adv_Data, [name]:value});
  }
  
  const AdvSubmithandler = async(e) => {
    e.preventDefault();
    props?.setRefresh(!props?.refresh);
    props?.AdvhandleClose();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props?.advopen}
        onClose={props?.AdvhandleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props?.advopen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2" color="white">
              Advanced Search
            </Typography>
            <br />
            <div className='advancesearch'>
              <div className='advancesearchcol'>
              <TextField className='AdvanceSearchInvoiceTextFields' name='doc_id' type='number' value={doc_id} onChange={AdvanceSearchChangeHandler} sx={{backgroundColor: 'white', borderRadius:'5px'}} label='Document Id'></TextField>
              <TextField className='AdvanceSearchInvoiceTextFields' name='invoice_id' type='number' value={invoice_id} onChange={AdvanceSearchChangeHandler} sx={{backgroundColor: 'white', borderRadius:'5px'}} label='Invoice Id'></TextField>
              <TextField className='AdvanceSearchInvoiceTextFields' name='cust_number' type='number' value={cust_number} onChange={AdvanceSearchChangeHandler} sx={{backgroundColor: 'white', borderRadius:'5px'}} label='Customer Number'></TextField>
              <TextField className='AdvanceSearchInvoiceTextFields' name='buisness_year' type='number' value={buisness_year} onChange={AdvanceSearchChangeHandler} sx={{backgroundColor: 'white', borderRadius:'5px'}} label='Business Year'></TextField>
              </div>
            </div>
            
            <br />
            <br />
            <Button variant='outlined' size='large' onClick={AdvSubmithandler} sx={{float:'right', width:'30%', marginLeft:'10px'}}>SEARCH</Button>
            <Button onClick={props?.AdvhandleClose} variant='outlined' size='large' sx={{float:'right', width:'30%'}}>CANCEL</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
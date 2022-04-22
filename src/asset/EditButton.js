import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { EditWinter } from './Data';

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

export default function EditButton(props) {

  const sl_no = props?.selectedIdx;

  const[Invoice_curr, Set_Invoice_curr] = useState();
  const[Cust_pay_terms, Set_Cust_pay_terms] = useState();
  
  const EditSubmithandler = async(e) => {
    e.preventDefault();
    let response = await EditWinter({invoice_currency: Invoice_curr, cust_payment_terms: Cust_pay_terms, sl_no: props?.selectedIdx});
    props?.EdithandleClose();
    props?.setRefresh(!props?.refresh);
  }

  return (
      <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props?.editopen}
        onClose={props?.EdithandleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props?.editopen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2" color="white">
              Edit 
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} color="white" align='center'>
              Edit Invoice with Sl No : {sl_no}
            </Typography>
            <br />

            <div className='editbutons'>
              <div className='editcol'>
              <TextField  name='Invoice_curr' value={Invoice_curr} required sx={{backgroundColor: 'white', borderRadius:'5px'}} onChange={(e)=>Set_Invoice_curr(e.target.value)} label=' Invoice Currency'></TextField>

            <TextField  name='Cust_pay_terms' value={Cust_pay_terms} required sx={{backgroundColor: 'white', borderRadius:'5px'}} onChange={(e)=>Set_Cust_pay_terms(e.target.value)}label=' Customer Payment Terms'></TextField>
              </div>
            </div>

            <br />
            <br />
            <Button variant='outlined' size='large' onClick={EditSubmithandler} sx={{float:'right', width:'30%',  marginLeft: '10px'}}>EDIT</Button>
            <Button onClick={props?.EdithandleClose} variant='outlined' size='large'  sx={{float:'right', width: '30%'}}>CANCEL</Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
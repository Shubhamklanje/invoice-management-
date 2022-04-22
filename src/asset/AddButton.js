import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { addWinter  } from './Data';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import moment from 'moment';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const today = moment().format("YYYY-MM-DD");

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'rgba(45,66,80,255)',
  boxShadow: 24,
  p: 4,
  borderRadius:'25px'
};

export default function AddButton(props) {

  const [Add_data, Set_Add_data] = useState({business_code:'', cust_number:'', buisness_year:'', doc_id:'', invoice_currency:'', document_type:'', posting_id:'', total_open_amount:'', cust_payment_terms:'', invoice_id:''});
  const {business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id} = Add_data;

  const [Clear_date, Set_Clear_date] = useState(new Date(today));
  const [Post_date, Set_post_date] = useState(new Date(today));
  const [Doc_crete_date, Set_doc_crete_date] = useState(new Date(today));
  const [DueDatei, setDueDatei] = useState(new Date(today));
  const [Baseline_date, Set_baseline_date] = useState(new Date(today));


  const Onchangehandler = (e) => {
    const {name, value} = e.target;
    Set_Add_data({...Add_data, [name]: value});
  }

  const AddSubmithandler = async(e) => {
    e.preventDefault();
    await addWinter(Add_data);
    props?.setRefresh(!props?.refresh);
    props?.AddhandleClose();
  }

  return (
      <>
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props?.addopen}
        onClose={props?.AddhandleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={props?.addopen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2" color="white">
              Add 
            </Typography>
            <br />
            <div className='addbutton'>
                <div className='addcomponents'>
                <TextField name='business_code' value={business_code} onChange={Onchangehandler} required sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Business Code' ></TextField>

                <TextField name='cust_number' value={cust_number} onChange={Onchangehandler} required type='number' sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Customer Number' ></TextField>

                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Clear Date'
                  inputFormat='yyyy-MM-dd'
                  value={Clear_date}
                  onChange={(e)=>{Set_Clear_date(e); Set_Add_data({...Add_data, clear_date: e});}}
                  renderInput={(params) => <TextField  name='clear_date' required variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px'}} {...params} />}
                  />
                </LocalizationProvider>

                <TextField  name='buisness_year' value={buisness_year} onChange={Onchangehandler} required type='number' sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Business Year' ></TextField>

                <TextField name='doc_id' type='number' value={doc_id} onChange={Onchangehandler} required sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Document Id' ></TextField>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Posting Date'
                  inputFormat='yyyy-MM-dd'
                  value={Post_date}
                  onChange={(e)=>{Set_post_date(e); Set_Add_data({...Add_data, posting_date: e});}}
                  renderInput={(params) =>{return( <TextField  name='posting_date' required variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px'}} {...params} />)}}
                  />
                  
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Document Create Date'
                  inputFormat='yyyy-MM-dd'
                  value={Doc_crete_date}
                  onChange={(e)=>{Set_doc_crete_date(e); Set_Add_data({...Add_data, document_create_date: e});}}
                  renderInput={(params) => <TextField  name='DocumentCreateDate' required variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px'}} {...params} />}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Due Date'
                  inputFormat='yyyy-MM-dd'
                  value={DueDatei}
                  onChange={(e)=>{setDueDatei(e); Set_Add_data({...Add_data, due_in_date: e});}}
                  renderInput={(params) => <TextField  name='due_in_date' required variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px'}} {...params} />}
                  />
                </LocalizationProvider>

                <TextField name='invoice_currency' value={invoice_currency} onChange={Onchangehandler} required sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Invoice Currency' ></TextField>

                <TextField  name='document_type' value={document_type} onChange={Onchangehandler} required sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Document Type' ></TextField>

                <TextField name='posting_id' value={posting_id} onChange={Onchangehandler} required type='number' sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Posting Id' ></TextField>

                <TextField name='total_open_amount' value={total_open_amount} onChange={Onchangehandler} required type='number' sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Total Open Amount' ></TextField>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Baseline Create Date'
                  inputFormat='yyyy-MM-dd'
                  value={Baseline_date}
                  onChange={(e)=>{Set_baseline_date(e); Set_Add_data({...Add_data, baseline_create_date: e});}}
                  renderInput={(params) => <TextField  name='baseline_create_date' required variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px'}} {...params} />}
                  />
                </LocalizationProvider>

                <TextField  name='cust_payment_terms' value={cust_payment_terms} onChange={Onchangehandler} required sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Customer Payment Terms' ></TextField>

                <TextField  name='invoice_id' value={invoice_id} onChange={Onchangehandler} required type='number' sx={{backgroundColor: 'white', borderRadius:'5px'}} label=' Invoice Id' ></TextField>

                </div>
                <br />
                <br />
                <Button variant='outlined' size='large' onClick={AddSubmithandler} sx={{float:'right', width:'20%', marginLeft: '10px'}}>ADD</Button>
                <Button onClick={props?.AddhandleClose} variant='outlined' size='large'  sx={{float:'right', width:'20%'}}>CANCEL</Button>
                
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
    </>
  );
}
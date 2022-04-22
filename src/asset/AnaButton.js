import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {  TextField } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AnaCharts from './AnaCharts';
import moment from 'moment';
import { AnaWinter } from './Data';

const today = moment().format("YYYY-MM-DD");

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


export default function AnaButton(props) {

    const [chartopen, Set_chart_open] = useState(false);
    const Charthangleopen = () => Set_chart_open(true);
    const Charthangleclose = () => Set_chart_open(false);

    const[Ana_Data, Set_Ana_Data] = useState({InvoiceCurrency:''});

    const [Due_datefrom, Set_Due_datefrom] = useState(new Date(today));
    const [Due_dateto, Set_Due_dateto] = useState(new Date(today));

    const [baseline_createdatefrom, Set_baseline_createdatefrom] = useState(new Date(today));
    const [Baseline_dateto, Set_baseline_dateto] = useState(new Date(today));

    const [clear_datefrom, Set_clear_datefrom] = useState(new Date(today));
    const [clear_dateto, Set_clear_dateto] = useState(new Date(today));

    const [Respo_data, Set_Respo_data] = useState();

    const{InvoiceCurrency, DueDateFrom, DueDateTo, BaselineCreateDatefrom, BaselineCreateDateTo, ClearDateFrom, ClearDateTo} = Ana_Data;

    const Anachangehandler = (e) => {
      const{name, value} = e.target;
      Set_Ana_Data({...Ana_Data, [name]: value});
    }

    const Anasubmitchandler = async(e) => {
      e.preventDefault();
      props?.AnahandleClose();
      let response = await AnaWinter(Ana_Data);
       console.log(Ana_Data);
      Set_Respo_data(response);
      Charthangleopen();
    }

  return (
    <div>
      <Modal
        open={props?.anaopen}
        onClose={props?.AnahandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" color="white">
            Analysis
          </Typography>
 
            <Typography variant='h6' fontWeight='light' textAlign='center' component='h2' color='white'>Insert Currency Type</Typography>
            <br />
            <div className='analyzecurr'>
            <TextField variant='filled' label=' Invoice Currency' sx={{bgcolor: 'white', borderRadius: '0.3vw', width: '15vw'}} onChange={Anachangehandler} name='InvoiceCurrency' value={InvoiceCurrency} ></TextField>
            </div>

            <br />
            <Typography variant='h6' fontWeight='light' textAlign='center' component='h2' color='white'>Insert Range of Due Date</Typography>
            <br />

            <div className='analyzecurr'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Due Date From'
                  inputFormat='yyyy-MM-dd'
                  value={Due_datefrom}
                  onChange={(e)=>{Set_Due_datefrom(e); Set_Ana_Data({...Ana_Data, DueDateFrom: e});}}
                  renderInput={(params) => <TextField  name='DueDateFrom' variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px', width: '20vw'}} {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Due Date To'
                  inputFormat='yyyy-MM-dd'
                  value={Due_dateto}
                  onChange={(e)=>{Set_Due_dateto(e); Set_Ana_Data({...Ana_Data, DueDateTo: e});}}
                  renderInput={(params)=>{
                    return( <TextField  name='DueDateTo' variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px', marginLeft:'5vw', width: '20vw'}} {...params} />)}}
                  />
                </LocalizationProvider>
            </div>

            <br />
            <Typography variant='h6' fontWeight='light' textAlign='center' component='h2' color='white'>Insert Range of Baseline Create Date</Typography>
            <br />

            <div className='analyzecurr'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Baseline Create Date From'
                  inputFormat='yyyy-MM-dd'
                  value={baseline_createdatefrom}
                  onChange={(e)=>{Set_baseline_createdatefrom(e); Set_Ana_Data({...Ana_Data, BaselineCreateDatefrom: e});}}
                  renderInput={(params) => <TextField name='BaselineCreateDateFrom' variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px', width: '20vw'}} {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Baseline Create Date To'
                  inputFormat='yyyy-MM-dd'
                  value={Baseline_dateto}
                  onChange={(e)=>{Set_baseline_dateto(e); Set_Ana_Data({...Ana_Data, BaselineCreateDateTo: e});}}
                  renderInput={(params) => <TextField  name='BaselineCreateDateTo' variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px', marginLeft:'5vw', width: '20vw'}} {...params} />}
                  />
                </LocalizationProvider>
            </div>

            <br />
            <Typography variant='h6' fontWeight='light' textAlign='center' component='h2' color='white'>Insert Range of Clear Date</Typography>
            <br />

            <div className='analyzecurr'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Clear Date From'
                  inputFormat='yyyy-MM-dd'
                  value={clear_datefrom}
                  onChange={(e)=>{Set_clear_datefrom(e); Set_Ana_Data({...Ana_Data, ClearDateFrom: e});}}
                  renderInput={(params) => <TextField  name='ClearDateFrom' variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px', width: '20vw'}} {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                  label=' Clear Date To'
                  inputFormat='yyyy-MM-dd'
                  value={clear_dateto}
                  onChange={(e)=>{Set_clear_dateto(e); Set_Ana_Data({...Ana_Data, ClearDateTo: e});}}
                  renderInput={(params) => <TextField  name='ClearDateTo' variant='filled' sx={{backgroundColor: 'white', borderRadius:'5px', marginLeft:'5vw', width: '20vw'}} {...params} />}
                  />
                </LocalizationProvider>
            </div>

            <br />
            <br />
            <Button onClick={Anasubmitchandler}  variant='outlined' size='large' sx={{float:'right', width:'30%', marginLeft: '3%'}}>ANALYZE</Button>
            <Button onClick={props?.AnahandleClose} variant='outlined' size='large'  sx={{float:'right', width:'30%'}}>CANCEL</Button>

        </Box>
      </Modal>
      <AnaCharts chartopen={chartopen} Charthangleclose={Charthangleclose} Respo_data={Respo_data} Set_Respo_data={Set_Respo_data}/>
    </div>
  );
}

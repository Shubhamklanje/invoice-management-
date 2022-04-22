import {React, useState, PureComponent} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BarChart, Bar, XAxis, YAxis,  Tooltip,  PieChart, Pie } from 'recharts';
import { render } from '@testing-library/react';


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'rgba(45,66,80,255)',
    boxShadow: 24,
    p: 4,
    borderRadius:'25px',
    overflow:'scroll'
};

export default function AnaCharts(props) {

  
  const Charts_data = props?.responseData;
  console.log(Charts_data);

  return (

    <div>
      <Modal
        open={props?.chartsOpen}
        onClose={props?.handleChartsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" color="#f0f0f0">
            Analyzed View
          </Typography>

          <br />

          <div className='barchart'>
              <BarChart
              width={1150}
              height={500}
              data={Charts_data}
              margin={{
                top: 5,
                right: 30,
                left: 50,
                bottom: 5,
              }}>
                <XAxis dataKey="BusinessName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="TotalOpenAmount" fill='#f0f0f0'/>
              </BarChart>
          </div>

          <br />

          <div className='piechart'>
            <PieChart width={1000} height={800}>
              <Pie 
              dataKey="InvoiceCurrency"
              data={Charts_data}
              cx={300}
              cy={300}
              outerRadius={100}
              fill="#f0f0f0"
              label />
            </PieChart>
          </div>
        </Box>
      </Modal>
    </div>
  );
}



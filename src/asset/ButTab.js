import { React, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddButton from './AddButton';
import EditButton from './EditButton';
import DelButton from './DelButton';
import AdvButton from './AdvButton';
import AnaButton from './AnaButton';
import TableData from './TableData';
import { AdvSeaWinter } from './Data';

export const ButTab = () => {

  const compFields = { doc_id: null, invoice_id: null, cust_number: null, buisness_year: null };

  const [editable, setEditable] = useState(false);
  const [delTable, Set_DelTable] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchkey, setSearchkey] = useState("");
  const [advData, setAdvData] = useState([]);
  const [Adv_Data, setAdvanceSearchData] = useState({ doc_id: null, invoice_id: null, cust_number: null, buisness_year: null });


  const [addopen, AddOpen] = useState(false);
  const AddhandleOpen = () => AddOpen(true);
  const AddhandleClose = () => AddOpen(false);

  const [editopen, EditOpen] = useState(false);
  const EdithandleOpen = () => EditOpen(true);
  const EdithandleClose = () => EditOpen(false);

  const [delopen, DelOpen] = useState(false);
  const DelhandleOpen = () => DelOpen(true);
  const DelhandleClose = () => DelOpen(false);

  const [advopen, AdvOpen] = useState(false);
  const AdvhandleOpen = () => AdvOpen(true);
  const AdvhandleClose = () => AdvOpen(false);

  const [anaopen, AnaOpen] = useState(false);
  const AnahandleOpen = () => AnaOpen(true);
  const AnahandleClose = () => AnaOpen(false);

  const CloseIconHandler = () => {
    setSearchkey('');
    setRefresh(!refresh);
  }
  const update = async () => { let arr = await AdvSeaWinter(Adv_Data); setAdvData(arr); };


  useEffect(() => {
    update();
  }, [refresh]);


  const PreAnaAdv = [
    <Button key="one" variant="contained" sx={{ width: '10vw', color: 'white' }}>PREDICT</Button>,
    <Button key="two" variant='outlined' sx={{ width: '10vw', color: 'white' }} onClick={AnahandleOpen}>ANALYZE</Button>,
    <Button variant='outlined' onClick={() => {
      if (JSON.stringify(compFields) != JSON.stringify(Adv_Data)) {
        setAdvanceSearchData(compFields); setRefresh(!refresh)
      }
      else AdvhandleOpen()
    }
    } key="three" sx={{ color: 'white' }}>{`${JSON.stringify(compFields) != JSON.stringify(Adv_Data) ? `EXIT ` : ``}ADVANCED SEARCH`}</Button>,
  ];

  const AddEditDel = [
    <Button className='add' variant='outlined' size='large' onClick={AddhandleOpen} key="one" sx={{ width: '8vw', color: 'white' }}>ADD</Button>,
    <Button onClick={EdithandleOpen} size='large' variant='text' disabled={!editable} key="two" sx={{ width: '8vw', color: 'white' }}>EDIT</Button>,
    <Button onClick={DelhandleOpen} size='large' variant='outlined' disabled={!delTable} key="three" sx={{ width: '7vw', color: 'white' }}>DELETE</Button>,
  ];

  return (
    <>
      <Container fixed>
        <Box >
          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ height: "45px", marginRight: "30px", marginTop: "20px" }}>
            {PreAnaAdv}
          </ButtonGroup>
          <TextField value={searchkey} type='number' onChange={(e) => setSearchkey(e.target.value)} label='Customer Number' sx={{ bgcolor: 'white', marginTop: '1%', width: '17%', borderRadius: '6px' }}
            InputProps={{
              endAdornment: (<InputAdornment variant='filled' className='closeicon' position="end">
                <IconButton onClick={CloseIconHandler} style={{ display: searchkey.length < 1 ? 'none' : undefined }} aria-label='CloseIcon'>
                  <CloseIcon sx={{ color: 'bule' }} />
                </IconButton>
              </InputAdornment>)
            }}></TextField>

          <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ height: "45px", marginLeft: "40px", marginTop: "20px" }}>
            {AddEditDel}
          </ButtonGroup>


        </Box>
        <TableData advData={advData} searchkey={searchkey} refresh={refresh} setSelectedIdx={setSelectedIdx} setEditable={setEditable} Set_DelTable={Set_DelTable} />

        <AddButton refresh={refresh} setRefresh={setRefresh} AddhandleClose={AddhandleClose} addopen={addopen} />

        <EditButton refresh={refresh} setRefresh={setRefresh} selectedIdx={selectedIdx[0]} EdithandleClose={EdithandleClose} editopen={editopen} />

        <DelButton refresh={refresh} setRefresh={setRefresh} selectedIdx={selectedIdx} DelhandleClose={DelhandleClose} delopen={delopen} />

        {<AdvButton refresh={refresh} setRefresh={setRefresh} Adv_Data={Adv_Data} setAdvanceSearchData={setAdvanceSearchData} AdvhandleClose={AdvhandleClose} advopen={advopen} />}

        <AnaButton AnahandleClose={AnahandleClose} anaopen={anaopen} />

      </Container>
    </>
  )
}

export default ButTab;
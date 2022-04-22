import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from './Data';

const columns = [
    {field: 'sl_no', headerName: 'Sl No', width: 90, align: 'center', headerAlign: 'center'},
    {field: 'business_code', headerName: 'Business Code', width: 120, align: 'center', headerAlign: 'center'},
    {field: 'cust_number', headerName: 'Customer Number', width: 140, align: 'center', headerAlign: 'center'},
    {field: 'clear_date', headerName: 'Clear Date', width: 100, align: 'center', headerAlign: 'center'},
    {field: 'buisness_year', headerName: 'Business Year', width: 115, align: 'center', headerAlign: 'center'},
    {field: 'doc_id', headerName: 'Document Id', width: 110, align: 'center', headerAlign: 'center'},
    {field: 'posting_date', headerName: 'Posting Date', width: 120, align: 'center', headerAlign: 'center'},
    {field: 'document_create_date', headerName: 'Document Create Date', width: 170, align: 'center', headerAlign: 'center'},
    {field: 'due_in_date', headerName: 'Due In Date', width: 100, align: 'center', headerAlign: 'center'},
    {field: 'invoice_currency', headerName: 'Invoice Currency', width: 130, align: 'center', headerAlign: 'center'},
    {field: 'document_type', headerName: 'Document Type', width: 120, align: 'center', headerAlign: 'center'},
    {field: 'posting_id', headerName: 'Postind Id', width: 90, align: 'center', headerAlign: 'center'},
    {field: 'total_open_amount', headerName: 'Total Open Amount', width: 150, align: 'center', headerAlign: 'center'},
    {field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 160, align: 'center', headerAlign: 'center'},
    {field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 190, align: 'center', headerAlign: 'center'},
    {field: 'invoice_id', headerName: 'Invoice Id', width: 110, align: 'center', headerAlign: 'center'},
]

const TableData = (props) => {

    const [data, Set_data] = useState([]);
    const [winData, Set_Windata] = useState([]); 
    const [selected, Set_Selected] = useState([]); 
    const [pageSize, setPageSize] = useState(10);

    useEffect(()=>{
        Set_Windata(props?.advData); Set_data(props?.advData);
      
    },[props?.advData])

    useEffect(()=>{
        if(selected.length==1){ 
            props?.setEditable(true);
        }
        else props?.setEditable(false);
        if(selected.length>0) props?.Set_DelTable(true);
        else props?.Set_DelTable(false);
        props?.setSelectedIdx(selected);
        },[selected])

    
    useEffect(()=>{
            let arr = winData.filter(d => d.cust_number?.toString().includes(props?.searchkey))
            Set_data(arr);
    }, [props?.searchkey]);


    return (
        <div className='TableGrid' style={{height:'100vh'}}>
            <DataGrid
                getRowId={(row)=>row.sl_no}
                rows={data}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 50, 100]}
                pagination
                checkboxSelection
                onStateChange={(e)=>Set_Selected(e.selection)}
                density='compact'
                disableColumnMenu={true}
                
            />
        </div>
    )
}

export default TableData;
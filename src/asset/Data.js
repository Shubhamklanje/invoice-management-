import axios from "axios";

const formatDate = (date) => {

    if (date == undefined || date == null) {
      return "";
    }
    JSON.parse(JSON.stringify(date))
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
   
    return [year, month, day].join('-');
  }

export const addWinter = async ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}) => {
    
    let data = {business_code, cust_number, clear_date : formatDate(clear_date), buisness_year, doc_id, posting_date : formatDate(posting_date), document_create_date : formatDate(document_create_date), due_in_date : formatDate(due_in_date), invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date : formatDate(baseline_create_date), cust_payment_terms, invoice_id};
    let response = await axios.get("http://localhost:8080/backend/AddWinter", {params: {...data}});
}

export const EditWinter = async ({sl_no, invoice_currency, cust_payment_terms}) => {
    
    let data = "invoice_currency=" + invoice_currency + "&cust_payment_terms=" + cust_payment_terms + "&sl_no=" + sl_no;
    let response = await axios.get("http://localhost:8080/backend/EditWinter?" + data);
    return response.data.insert_status;
}

export const DeleteWinter = async({Arraydel}) => {
    let data = "Arraydel=" + Arraydel;
    let response = await axios.get("http://localhost:8080/backend/DelWinter?" + data);
    
}

export const AdvSeaWinter = async({doc_id, invoice_id, cust_number, buisness_year}) => {

  let data = {doc_id, invoice_id, cust_number, buisness_year};

  let response = await axios.get("http://localhost:8080/backend/AdvSearchInvoice", {params: {...data}});
  return response.data;
}

export const AnaWinter = async({invoice_currency, Due_datefrom, Due_dateto, baseline_createdatefrom, Baseline_dateto, clear_datefrom, clear_dateto}) => {
  
  let data = {invoice_currency, Due_datefrom : formatDate(Due_datefrom), Due_dateto : formatDate(Due_dateto), baseline_createdatefrom : formatDate(baseline_createdatefrom), Baseline_dateto : formatDate(Baseline_dateto), clear_datefrom : formatDate(clear_datefrom), clear_dateto : formatDate(clear_dateto)};

  let response = await axios.get("http://localhost:8080/backend/AnaData", {params: {...data}});
  return response.data;
}
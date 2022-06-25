import axios from "axios"

export const getData=async()=>
{
    let response=await axios.get("http://localhost:8080/Final/Fetch");
    let data=response.data;
    data.map((data,index)=>({...data,"id":index}))
    return data;
}
export const AddmyData=async({BusinessCode,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency
    ,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id})=>
{
    let data="BusinessCode="+BusinessCode+"&cust_number="+cust_number+"&clear_date="+clear_date+"&buisness_year="+buisness_year+"&doc_id="+doc_id+"&posting_date="+posting_date+"&document_create_date="+document_create_date+"&due_in_date="+due_in_date+"&invoice_currency="+invoice_currency+"&document_type="+document_type+"&posting_id="+posting_id+"&total_open_amount="+total_open_amount+"&baseline_create_date="+baseline_create_date+"&cust_payment_terms="+cust_payment_terms+"&invoice_id="+invoice_id;
    let response=await axios.get("http://localhost:8080/Final/Add?"+data)
    return response.data;
}

export const EditData=async({sr_no,invoice_currency,cust_payment_terms})=>
{
    let data="sr_no="+sr_no+"&invoice_currency="+invoice_currency+"&cust_payment_terms="+cust_payment_terms;
    let response=await axios.get("http://localhost:8080/Final/Update?"+data)
    return response.data;
}

export const deleteData=async(sr_no)=>
{
    let data="&sr_no="+sr_no;
     let response=await axios.get("http://localhost:8080/Final/Delete?"+data)
    return response.data;
}


export const AdSearch=async({doc_id,invoice_id,cust_number,buisness_year})=>
{
    let data="&doc_id="+doc_id+"&invoice_id="+invoice_id+"&cust_number="+cust_number+"&buisness_year="+buisness_year;
    let response=await axios.get("http://localhost:8080/Final/Adsearch?"+data);
    return response.data;
}
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

import Add from './Add';
import { AddmyData, AdSearch, deleteData, EditData, getData } from './Connections';
import {  Box,  hexToRgb, } from '@mui/system';
import Edit from './Edit';
import { Button, ButtonGroup, TextField, Typography } from '@mui/material';
import MyDelete from './MyDelete';
import Advance from './Advance';
// import RefreshIcon from '@mui/icons-material/Refresh';
 function Data(){

    const columns=[
        {field:"sr_no", headerName:"sl no." ,width:"100"},
        {field:"BusinessCode",headerName:"Business code",width:"100"},
        {field:"cust_number",headerName:"Customer Number",width:"100"},
        {field:"clear_date",headerName:"Clear Date",width:"100"},
        {field:"buisness_year",headerName:"Business year",width:"100"},
        {field:"doc_id",headerName:"Document Id",width:"100"},
        {field:"posting_date",headerName:"Posting Date",width:"100"},
        {field:"document_create_date",headerName:"Document Create Date",width:"120"},
        {field:"due_in_date",headerName:"Due Date",width:"100"},
        {field:"invoice_currency",headerName:"Invoice Curency",width:"100"},
        {field:"document_type",headerName:"Document type",width:"100"},
        {field:"posting_id",headerName:"Posting Id",width:"80"},
        {field:"total_open_amount",headerName:"Total Open Amount",width:"100"},
        {field:"cust_payment_terms",headerName:"customer payment terms",width:"120"},
        {field:"invoice_id",headerName:"Invoice Id",width:"100"},
    ];

    const[pageSize,setPageSize]=useState(10);
    const[rows,setRows]=useState([]);
    const[open,setOpen]=useState(false);
    const[addopen,setAddOpen]=useState(false);
    const[open1, setOpen1] = useState(false);
    const[Aopen,setAopen]=useState(false);
    const[q,setUpdated]=useState("");
    const[selectedRows,setselectedRows]=useState(false);
    const[editbtnStatus,seteditbtnStatus]=useState(true);
    const[del,setDel]=useState(true);
    

    const [myData,setData]=useState({ sr_no:'',BusinessCode:'',cust_number:'',clear_date:'',buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',
     due_in_date:'',invoice_currency:'',document_type:'',posting_id:'',total_open_amount:'',baseline_create_date:'',cust_payment_terms:'',invoice_id:''}
);
const { sr_no, BusinessCode , cust_number , clear_date , buisness_year, doc_id , posting_date , document_create_date , due_in_date , invoice_currency , document_type , posting_id , total_open_amount , baseline_create_date , cust_payment_terms , invoice_id }= myData;
        const changeHandler=(e)=>{
            const{name,value}=e.target;
               setData({...myData,[name]: value})
 }

  const SubmitHandler=async(e)=>{
            e.preventDefault();
            let response=await AddmyData(myData);
            if(response)
            {
                setData({BusinessCode:'',cust_number:'',clear_date:'',buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',
                due_in_date:'',invoice_currency:'',document_type:'',posting_id:'',total_open_amount:'',baseline_create_date:'',cust_payment_terms:'',invoice_id:''});
                setAddOpen(false);
                setRows(await getData());
            }
        }
        
    
        useEffect(async function()
        {
            setRows(await getData());
        },[]);

        const handleClose = async(Edit) => {
            if(Edit)
            {
                let response=await EditData(myData);
                if(response){
                setData({invoice_currency:'',cust_payment_terms:''});
                setRows(await getData());
             }
                   
            }
            setOpen(false);
          };
         const addHandleClose=()=>
         {
             setAddOpen(false);
         }
          const editHandler=()=>
          {
                  setOpen(true);
          }
          const AHandler=()=>
          {
            setAopen(true);
          }
          const AdvanceClose=()=>
          {
            setAopen(false);
          }
         const myDelete=async()=>
           {
            let response= await deleteData(myData.sr_no);
            if(response)
            {
            setOpen1(false);
            }
          }

          const deleteHandler = () => {
            setOpen1(true);
          };
          const handleClose1 = () => {
            setOpen1(false);
          };
        
          const Asearch=async(e)=>
          {
            e.preventDefault();
            let response=await AdSearch(myData);
            console.log(response);
            if(response)
            {
              setAopen(false);
              setRows(response);

            }
          }
        const AddHandler=()=>
        {
            setAddOpen(true);
        }
      
      const checkHandler = (ids) =>
      {
        seteditbtnStatus(false);
        setDel(false);
        let editData=rows.filter(myData=>myData.sr_no==ids)[0];
        setData(editData);
      }

          const search=(row) =>
        {
          return rows.filter(myData=>myData.cust_payment_terms.toLowerCase().indexOf(q)>-1)
        }
         
    return(
      
        <div style={{height:400,width:'100%',justifyContent: "space-around",marginLeft: "0%",marginBottom: "0%" }}>
            <div style={{display:'flex',justifyContent: "space-between"}}>

            <Box
      sx={{
        display: 'flex',
        marginTop:'3vw',
        flexDirection: 'column',
        alignItems: 'left',
        '& | *': {
          m: 2,
          backgroundColor: "#2D4250"
        },
      }}
    >
      <ButtonGroup variant="outlined" >
      <Button  variant='outlined' sx={{color:'white'}}>PREDICT</Button>
               <Button variant='outlined'  sx={{color:'white'}}>ANALYATICS VIEW</Button>
               <Button variant='outlined' onClick={AHandler} sx={{color:'white'} }>ADVANCE SEARCH</Button>  
      </ButtonGroup>
     </Box>
     
        {/* <div style={{ marginLeft: "15vw" ,marginRight: "15vw", color: "black" }}>  */}
        <Box sx={{alignItems:'center',display:'flex', marginLeft:'5vw' ,marginRight:'20vw',marginTop:'3vw', color:'black'}}>
        <TextField style={{border:'2px solid',color:'white',backgroundColor:"white"}} label="Search Customer ID" value={q} onChange={(e)=>setUpdated(e.target.value)} variant='outlined' />
        </Box>
        {/* </div> */}
     <Box
      sx={{
         display: 'flex',
        marginTop:'3vw',
         flexDirection: 'column',
        alignItems: 'center',
        // marginLeft:'70%',
        '& | *': {
          m: 2,
          backgroundColor: "#2D4250"
        },
      }}
    >
      <ButtonGroup variant="outlined">
            <Button variant='outlined' onClick={AddHandler}  sx={{color:'white'}} >Add</Button>
            <Button variant='outlined' onClick={editHandler}  sx={{color:'white'}} disabled={editbtnStatus} >Edit</Button>
            <Button variant='outlined' onClick={deleteHandler}  sx={{color:'white'}} disabled={del}>Delete</Button>
      </ButtonGroup>
     
    </Box> 
    </div >
    
          <Edit open={open} invoice_currency={invoice_currency} sr_no={sr_no} cust_payment_terms={cust_payment_terms} handleClose={handleClose} changeHandler={changeHandler} setselectedRows={setselectedRows}/>
          <MyDelete open1={open1} deleteHandler={deleteHandler} handleClose1={handleClose1} myDelete={myDelete}/>
          <Advance Aopen={Aopen} AdvanceClose={AdvanceClose}  doc_id={doc_id} invoice_id={invoice_id} 
          cust_number={cust_number} buisness_year={buisness_year} changeHandler={changeHandler} Asearch={Asearch}/>
            <Add 
            sl_no={sr_no}
            BusinessCode={BusinessCode}
            cust_number={cust_number}
            clear_date={clear_date}
            buisness_year={buisness_year}
            doc_id={doc_id}
            posting_date={posting_date}
            document_create_date={document_create_date}
            due_in_date={due_in_date}
            invoice_currency={invoice_currency}
            document_type={document_type}
            posting_id={posting_id}
            total_open_amount={total_open_amount}
            baseline_create_date={baseline_create_date}
            cust_payment_terms={cust_payment_terms}
            invoice_id={invoice_id}
            changeHandler={changeHandler}
            SubmitHandler={SubmitHandler}      
            addopen={addopen}  
            addHandleClose={addHandleClose}    
            />  
           <DataGrid myData={search(myData)} 
            key={myData.sr_no}
            getRowId={rows => rows.sr_no}  
            rows={rows} 
            columns={columns} 
            pageSize={pageSize}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(ids)=>{checkHandler(ids);}}     
            pagination
            rowsPerPageOptions={[5,10,20]}
            onPageSizeChange={(newpageSize)=>setPageSize(newpageSize)}
            sx={{
                boxShadow: 2,
                marginBottom: "50%",
                border: 2,
                borderColor: 'primary.light',
                '& .MuiDataGrid-cell:hover': {
                  color: 'white',
                },
                
                backgroundColor:hexToRgb("#2b4c59"),
                color:'white',
                fontSize:12,
                fontFamily:'-moz-initial',
                '& .MuiTablePagination-root':{color:'white'},
                '& .MuiCheckbox-root':{color:'white'},
                '& .MuiDataGrid-columnHeaderTitle':{fontSize:12,fontFamily:'sans-serif',width:500},
               '& .MuiDataGrid-cell':{color:'white'},
       
              }}
            />
          
        </div>
  
    );
    
}
export default Data;
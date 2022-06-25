import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import {  hexToRgb} from '@mui/system';
function Add({addopen,sr_no,BusinessCode,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency
    ,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,changeHandler,SubmitHandler,addHandleClose})
{
	return <> 

	 <Dialog  maxWidth='m' open={addopen} onClose={addHandleClose} sx={{
         '& .MuiDialogContent-root':{backgroundColor:hexToRgb("#2b4c59")},
            	'& .MuiFormControl-root':{color:'white',backgroundColor:'white'},
	 '& .MuifilledInput-root MuiInputBase-input':{backgroundColor:'white'},
	'& .MuiInputLabel-root':{fontSize:''},
	'& .MuiTypography-root':{backgroundColor:hexToRgb("#2b4c59"),width:'100%'},
	'& .MuiDialogActions-root':{backgroundColor:hexToRgb("#2b4c59")},
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    '& .MuiDialog-paperFullWidth':{}


	}}>
        <DialogTitle sx={{color:'white'}}>ADD</DialogTitle>
        <DialogContent  sx={{width:'800'}}>
         
          <TextField
          autoFocus
            margin="dense"
            id="BusinessCode"
            label="BusinessCode"
            name="BusinessCode"
            type="text"
            value={BusinessCode}
         
            variant="filled"
			onChange={changeHandler}
          />
          <TextField
          autoFocus
            margin="dense"
            id="cust_number"
            label="cust_number"
            value={cust_number}
            name="cust_number"
            type="text"
            variant="filled"
			onChange={changeHandler}
          />
		   <TextField
           autoFocus
            margin="dense"
            id="clear_date"
            label="clear_date"
            value={clear_date}
            name="clear_date"
            type="date"
            variant="filled"
		      	onChange={changeHandler}
          />
		   <TextField
           autoFocus

            margin="dense"
            id="buisness_year"
            label="buisness_year"
            name="buisness_year"
            value={buisness_year}
            type="text"
         
            variant="filled"
			onChange={changeHandler}
          />
		   <TextField
           autoFocus

            margin="dense"
            id="doc_id"
            label="doc_id"
            name="doc_id"
            value={doc_id}
            type="text"
         
            variant="filled"
			onChange={changeHandler}
          />
		   <TextField
           autoFocus
            margin="dense"
            id="posting_date"
            label="posting_date"
            name="posting_date"
            value={posting_date}
            type="date"
         
            variant="filled"
			onChange={changeHandler}
          />
		   <TextField
           autoFocus

            margin="dense"
            id="document_create_date"
            label="document_create_date"
            name="document_create_date"
            value={document_create_date}
            type="date"
         
            variant="filled"
			onChange={changeHandler}
          />
          
		   <TextField
           autoFocus

            margin="dense"
            id="due_in_date"
            label="due_in_date"
            name="due_in_date"
            value={due_in_date}
            type="date"
         
            variant="filled"
			onChange={changeHandler}
          />
		   <TextField
           autoFocus

            margin="dense"
            id="invoice_currency"
            label="invoice_currency"
            name="invoice_currency"
            value={invoice_currency}
            type="text"
         
            variant="filled"
			onChange={changeHandler}
          />
		   <TextField
           autoFocus

            margin="dense"
            id="document_type"
            label="document_type"
            name="document_type"
            value={document_type}
            type="text"
         
            variant="filled"
			onChange={changeHandler}
          />
		   <TextField
           autoFocus
 
            margin="dense"
            id="posting_id"
            label="posting_id"
            name="posting_id"
            value={posting_id}
            type="text"
         
            variant="filled"
			onChange={changeHandler}
          />
		  <TextField
          autoFocus

            margin="dense"
            name="total_open_amount"
            label="total_open_amount"
            value={total_open_amount}
            type="text"
         
            variant="filled"
			onChange={changeHandler}
          />
		  <TextField
          autoFocus

            margin="dense"
            name="baseline_create_date"
            label="baseline_create_date"
            value={baseline_create_date}
            type="date"
         
            variant="filled"
			onChange={changeHandler}
          />
		  <TextField
          autoFocus

            margin="dense"
            name="cust_payment_terms"
            label="cust_payment_terms"
            value={cust_payment_terms}
            type="text"
         
            variant="filled"
			onChange={changeHandler}
          />
		  <TextField
          autoFocus

            margin="dense"
            id="invoice_id"
            label="invoice_id"
            value={invoice_id}
            name='invoice_id'
            type="text"
            variant="filled"
			onChange={changeHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={SubmitHandler} sx={{backgroundColor:hexToRgb("#2b4c59"),color:'white'}} fullWidth>Add</Button>
          <Button  variant='outlined' onClick={addHandleClose}  sx={{backgroundColor:hexToRgb("#2b4c59"),color:'white'}}fullWidth>Cancel</Button>
        </DialogActions>
      </Dialog> 
</> 
}

export default Add;
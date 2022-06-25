import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { hexToRgb } from '@material-ui/core';

 function Edit({open,sr_no,invoice_currency,cust_payment_terms,changeHandler,handleClose}) {
 
  return (
    <div>
      <Dialog maxWidth='sm' open={open} onClose={handleClose}
      sx={{
        '& .MuiDialogContent-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiFormControl-root':{color:'white',backgroundColor:'white'},
  '& .MuifilledInput-root MuiInputBase-input':{backgroundColor:'white'},
 '& .MuiInputLabel-root':{},
 '& .MuiTypography-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiDialogActions-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiTextField-root': { m: 1, width: '25ch' },

 }}
      >
        <DialogTitle sx={{color:'white'}}>Edit</DialogTitle>
        <DialogContent>
         
        <TextField
            autoFocus
            margin="dense"
            name='sr_no'
            id="sr_no"  
            label="sr_no"
            type="text"
            value={sr_no}
            fullWidth
            onChange={changeHandler}
            variant="filled"
            disabled
          />
          <TextField
            autoFocus
            name='invoice_currency'
            margin="dense"
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            value={invoice_currency}
            fullWidth
            onChange={changeHandler}
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            name='cust_payment_terms'
            id="cust_payment_terms"
            label="Customer Payment Terms" 
            type="text"
            value={cust_payment_terms}
            fullWidth
            onChange={changeHandler}
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={()=>handleClose(true)} sx={{backgroundColor:hexToRgb("#2b4c59"),color:'white'}} fullWidth>Edit</Button>
          <Button  variant='outlined' onClick={()=>handleClose(false)} sx={{ backgroundColor:hexToRgb("#2b4c59"),color:'white',}} fullWidth>cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Edit;
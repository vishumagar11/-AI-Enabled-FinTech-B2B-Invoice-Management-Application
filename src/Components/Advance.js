import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { hexToRgb } from '@material-ui/core';

export default function Advance({Aopen,AdvanceClose, doc_id, invoice_id, 
    cust_number, buisness_year, changeHandler,Asearch}) {

  return (
    <div>
     
      <Dialog open={Aopen} onClose={AdvanceClose} sx={{
        '& .MuiDialogContent-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiFormControl-root':{color:'white',backgroundColor:'white'},
  '& .MuifilledInput-root MuiInputBase-input':{backgroundColor:'white'},
 '& .MuiInputLabel-root':{},
 '& .MuiTypography-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiDialogActions-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiTextField-root': { m: 1, width: '25ch' },

 }}>
        <DialogTitle sx={{color:'white'}}>Advance Search</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="doc_id"
            name='doc_id'
            label="Document ID"
            type="text"
            value={doc_id}
            onChange={changeHandler}
           
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="invoice_id"
            name='invoice_id'
            label="Invoice ID"
            value={invoice_id}
            onChange={changeHandler}
            type="text"
            
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cust_number"
            name='cust_number'
            label="Customer Number"
            value={cust_number}
            onChange={changeHandler}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="buisness_year"
            name='buisness_year'
            label="Business Year"
            type="text"
            value={buisness_year}
            onChange={changeHandler}
           
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={AdvanceClose}sx={{backgroundColor:hexToRgb("#2b4c59"),color:'white'}} fullWidth>Cancel</Button>
          <Button variant='outlined' onClick={Asearch}sx={{backgroundColor:hexToRgb("#2b4c59"),color:'white'}} fullWidth>SEARCH</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

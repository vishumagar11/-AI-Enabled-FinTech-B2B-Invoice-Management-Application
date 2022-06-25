import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { hexToRgb } from '@material-ui/core';

export default function MyDelete({myDelete,open1,handleClose1}) {

  return (
    <div>

      <Dialog maxWidth='m' sx={{
        '& .MuiDialogContent-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiFormControl-root':{color:'white',backgroundColor:'white'},
  '& .MuifilledInput-root MuiInputBase-input':{backgroundColor:'white'},
 '& .MuiInputLabel-root':{},
 '& .MuiTypography-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiDialogActions-root':{backgroundColor:hexToRgb("#2b4c59")},
 '& .MuiTextField-root': { m: 1, width: '25ch' },

 }}
        open={open1}
        onClose={handleClose1}
       
      >
        <DialogTitle sx={{color:'white'}}>
          {"Delete Records"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:'white'}}>
          Are you sure want to delete those records?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant='outlined' onClick={handleClose1} fullWidth sx={{color:'white'}} autoFocus>Cancel </Button>
        <Button variant='outlined' onClick={myDelete} fullWidth sx={{color:'white'}}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
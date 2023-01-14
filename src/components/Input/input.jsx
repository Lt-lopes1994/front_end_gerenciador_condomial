import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function TextInput({id, label, type}) {
  return (
    <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1,width: '34.4em', fontSize: '1.5rem' },
        }}
        noValidate
        autoComplete={type === 'password' ? 'new-password' : 'off'}
      >
        <TextField
        sx={{'& .MuiInputBase-input': {padding: 1, m: 1 ,fontSize: '1.5rem' },}}
        id={id}
        label={label}
        type={type}
        variant="outlined"
      /> 
    </Box>
  );
}

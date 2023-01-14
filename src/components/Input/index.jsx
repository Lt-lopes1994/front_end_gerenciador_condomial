import * as React from "react";
import Box from '@mui/material/TextField';
import TextField from "@mui/material/TextField";
import '../../styles/input.css';

export default function Input({value, setValue, type, label, placeholder, required, error, helperText}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '34.4rem', fontSize: '1.6rem' }
      }}
      validate
      autoComplete="off"
    >
    
      <TextField
          size="large"
          id="standard-basic"
          variant="standard"
          type={type}
          label={label}
          required={required}
          error={error}
          helperText={helperText}
          InputProps={{
            style: {
              fontSize: "1.6rem",
            },
          }}
          defaultValue={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
}

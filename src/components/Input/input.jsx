import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput({ id, label, type }) {
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '34.4em', fontSize: '1.5rem' }
      }}
      noValidate
    >
      <TextField
        sx={{
          '& .MuiInputBase-input': { padding: 1, m: 1, fontSize: '1.5rem' }
        }}
        id={id}
        label={label}
        type={type}
        variant='outlined'
      />
    </Box>
  );
}
